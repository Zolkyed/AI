# Development

## Requirements

- Node.js 22 or newer
- npm
- Git

## Setup

Install the locked dependencies:

```sh
npm ci
```

## Commands

| Command              | Purpose                                                  |
| -------------------- | -------------------------------------------------------- |
| `npm run format`     | Format supported files with Prettier.                    |
| `npm run lint`       | Run ESLint with no warnings allowed.                     |
| `npm run typecheck`  | Type-check without emitting files.                       |
| `npm test`           | Run the test suite once.                                 |
| `npm run test:watch` | Run tests in watch mode.                                 |
| `npm run check`      | Check formatting, linting, types, tests, and whitespace. |
| `npm run fix`        | Apply automatic formatting and lint fixes.               |
| `npm run build`      | Create the production build in `dist/`.                  |
| `npm run verify`     | Run all checks and the production build.                 |

## Canonical Commands

```text
check  → format:check + lint + typecheck + test
fix    → format + lint --fix
build  → production build
verify → check + build
```

## Workflow

1. Make the smallest complete change.
2. Run `npm run check` during development.
3. Use `npm run fix` for automatically repairable failures.
4. Run `npm run verify` before committing or opening a pull request.

CI runs `npm run verify`, so a local passing result should match the repository's completion gate.

## Worktrees

Use one branch and worktree for sequential changes:

```text
issue → implement → verify → merge → next issue
```

Use separate worktrees only for genuinely independent or parallel issues:

```text
issue-a → worktree-a ┐
issue-b → worktree-b ├─ parallel
issue-c → worktree-c ┘
```

Recommended local Git configuration:

```sh
git config extensions.worktreeConfig true
git config --global push.autoSetupRemote true
```

For fully unattended automation, GitHub CLI prompts can also be disabled:

```sh
gh config set prompt disabled
```

This is optional. Keep prompts enabled for interactive development, and prefer explicit non-interactive flags in scripts and agent commands.

Keep each worktree scoped to one issue and branch. Integrate dependent changes in dependency order.

## Debugging

Build the project, then use the **Debug application** configuration in VS Code. It launches `dist/index.js` with source maps enabled.
