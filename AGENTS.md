# Development Instructions

## Read First

- Follow the setup and workflow in [`docs/development.md`](docs/development.md).
- Follow the issue, session, worktree, and pull request lifecycle in [`docs/ai.md`](docs/ai.md).
- Follow the coding and Git conventions in [`docs/conventions.md`](docs/conventions.md).
- Consult [`docs/architecture/README.md`](docs/architecture/README.md) before changing module boundaries or introducing new architectural patterns.

## Commands

- Install dependencies: `pnpm install --frozen-lockfile`
- Check code: `pnpm run check`
- Apply automatic fixes: `pnpm run fix`
- Build production output: `pnpm run build`
- Complete verification: `pnpm run verify`

Run `pnpm run verify` before considering a change complete.

## Scope

- Work only in the current branch and worktree.
- Ensure every implementation task corresponds to a GitHub issue.
- Keep each change scoped to its linked issue.
- Inspect the existing implementation and current Git status before editing.
- Do not modify unrelated files or perform unrelated refactoring.
- Preserve public behavior unless the task explicitly changes it.

## Testing

- Add or update tests for behavior changes.
- Add a regression test for every bug fix when practical.
- Do not weaken, skip, or delete tests merely to make verification pass.
- Update documentation when behavior, setup, architecture, or developer workflow changes.

## Git and GitHub

- Do not work directly on `main`.
- Use the branch, commit, and pull request title conventions documented in [`docs/conventions.md`](docs/conventions.md).
- Link pull requests to their issue, such as `Closes #123`.
- Never bypass Git hooks with `--no-verify`.
- Do not merge pull requests, delete branches, force-push, or rewrite shared history unless explicitly requested.
- Never hand-edit `pnpm-lock.yaml`; update dependencies with pnpm and commit the resulting lockfile with `package.json`.

## Safety

- Never read, modify, or commit secrets or `.env` files.
- Do not disable tests, lint rules, CI, hooks, or security controls to make a change pass.
- Do not modify CI, release, dependency, or security configuration unless the task requires it.
- Do not delete files unless the task requires their removal.
- Ask before making destructive or irreversible changes.
