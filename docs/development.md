# Development

## Requirements

- Node.js 22 or newer
- pnpm 11.22.0
- mise
- Git

## Setup

Install the locked dependencies:

```sh
mise install --locked direnv node pnpm uv
pnpm install --frozen-lockfile
```

To enable the repository's unrestricted AI CLI aliases in the current Bash session, source [`.bashrc`](../.bashrc):

```sh
source .bashrc
```

These aliases bypass each agent's normal permission checks and should only be used inside an appropriately isolated environment.

## Commands

| Command               | Purpose                                                  |
| --------------------- | -------------------------------------------------------- |
| `pnpm run format`     | Format supported files with Prettier.                    |
| `pnpm run lint`       | Run ESLint with no warnings allowed.                     |
| `pnpm run typecheck`  | Type-check without emitting files.                       |
| `pnpm test`           | Run the test suite once.                                 |
| `pnpm run test:watch` | Run tests in watch mode.                                 |
| `pnpm run check`      | Check formatting, linting, types, tests, and whitespace. |
| `pnpm run fix`        | Apply automatic formatting and lint fixes.               |
| `pnpm run build`      | Create the production build in `dist/`.                  |
| `pnpm run verify`     | Run all checks and the production build.                 |

## Canonical Commands

```text
check  → format:check + lint + typecheck + test
fix    → format + lint --fix
build  → production build
verify → check + build
```

## Workflow

1. Make the smallest complete change.
2. Run `pnpm run check` during development.
3. Use `pnpm run fix` for automatically repairable failures.
4. Run `pnpm run verify` before committing or opening a pull request.

CI runs `pnpm run verify`, so a local passing result should match the repository's completion gate.

## Debugging

Build the project, then use the **Debug application** configuration in VS Code. It launches `dist/index.js` with source maps enabled.
