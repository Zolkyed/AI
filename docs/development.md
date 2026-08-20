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

## Debugging

Build the project, then use the **Debug application** configuration in VS Code. It launches `dist/index.js` with source maps enabled.
