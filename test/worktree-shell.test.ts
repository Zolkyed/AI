import {
  chmodSync,
  cpSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

import { afterEach, describe, expect, it } from 'vitest';

const temporaryDirectories: string[] = [];
const availableShells = ['bash'];

if (spawnSync('zsh', ['--version']).status === 0) {
  availableShells.push('zsh');
}

function run(command: string, args: string[], cwd: string) {
  const result = spawnSync(command, args, { cwd, encoding: 'utf8' });

  if (result.status !== 0) {
    throw new Error(
      `${command} ${args.join(' ')} failed:\n${result.stdout}${result.stderr}`,
    );
  }

  return result;
}

function createRepository() {
  const root = mkdtempSync(join(tmpdir(), 'worktree-shell-'));
  const repository = join(root, 'repository');
  const remote = join(root, 'remote.git');
  temporaryDirectories.push(root);

  mkdirSync(repository);
  run('git', ['init', '--bare', remote], root);
  run('git', ['init', '--initial-branch=main'], repository);
  run('git', ['config', 'user.name', 'Test User'], repository);
  run('git', ['config', 'user.email', 'test@example.com'], repository);

  mkdirSync(join(repository, 'scripts'));
  cpSync(
    'scripts/worktree-create',
    join(repository, 'scripts/worktree-create'),
  );
  cpSync('scripts/worktree-shell', join(repository, 'scripts/worktree-shell'));
  chmodSync(join(repository, 'scripts/worktree-create'), 0o755);
  run('git', ['add', 'scripts'], repository);
  run('git', ['commit', '-m', 'test: seed repository'], repository);
  run('git', ['remote', 'add', 'origin', remote], repository);
  run('git', ['push', '--set-upstream', 'origin', 'main'], repository);

  return { repository, root };
}

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) {
    rmSync(directory, { recursive: true, force: true });
  }
});

describe.each(availableShells)('wt in %s', (shell) => {
  it('creates and enters a worktree before launching WT_AGENT', () => {
    const { repository, root } = createRepository();
    const agentScript = join(root, 'agent.mjs');
    const outputPath = join(root, 'agent-output.json');

    writeFileSync(
      agentScript,
      "import { writeFileSync } from 'node:fs';\n" +
        'writeFileSync(process.argv[2], JSON.stringify({ cwd: process.cwd(), args: process.argv.slice(3) }));\n',
    );

    const script = [
      'source ./scripts/worktree-shell',
      'WT_AGENT=("$NODE_PATH" "$AGENT_SCRIPT" "$OUTPUT_PATH" "fixed argument")',
      'wt issue26',
      'printf %s "$PWD"',
    ].join('\n');
    const result = spawnSync(shell, ['-c', script], {
      cwd: repository,
      encoding: 'utf8',
      env: {
        ...process.env,
        AGENT_SCRIPT: agentScript,
        NODE_PATH: process.execPath,
        OUTPUT_PATH: outputPath,
      },
    });

    expect(result.status, result.stderr).toBe(0);
    const expectedWorktree = `${repository}.issue26`;
    expect(result.stdout).toBe(expectedWorktree);
    expect(JSON.parse(readFileSync(outputPath, 'utf8'))).toEqual({
      cwd: expectedWorktree,
      args: ['fixed argument'],
    });
    expect(
      run('git', ['branch', '--show-current'], expectedWorktree).stdout,
    ).toBe('');
  });

  it('creates and enters a worktree when WT_AGENT is unset', () => {
    const { repository } = createRepository();
    const script = [
      'unset WT_AGENT',
      'source ./scripts/worktree-shell',
      'wt another-task',
      'printf %s "$PWD"',
    ].join('\n');
    const result = spawnSync(shell, ['-c', script], {
      cwd: repository,
      encoding: 'utf8',
    });

    expect(result.status, result.stderr).toBe(0);
    expect(result.stdout).toBe(`${repository}.another-task`);
  });

  it('retains wt list and treats remove as a worktree name', () => {
    const { repository } = createRepository();
    const listResult = spawnSync(
      shell,
      ['-c', 'source ./scripts/worktree-shell\nwt list --porcelain'],
      { cwd: repository, encoding: 'utf8' },
    );
    const removeResult = spawnSync(
      shell,
      [
        '-c',
        'unset WT_AGENT\nsource ./scripts/worktree-shell\nwt remove\nprintf %s "$PWD"',
      ],
      { cwd: repository, encoding: 'utf8' },
    );

    expect(listResult.status, listResult.stderr).toBe(0);
    expect(listResult.stdout).toContain(`worktree ${repository}`);
    expect(removeResult.status, removeResult.stderr).toBe(0);
    expect(removeResult.stdout).toBe(`${repository}.remove`);
  });
});
