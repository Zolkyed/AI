# Conventions

## TypeScript

- Use strict TypeScript and avoid `any`; narrow `unknown` values explicitly.
- Prefer small modules with explicit responsibilities and public interfaces.
- Use ES modules. Include `.js` extensions in relative imports so compiled Node.js imports resolve correctly.
- Keep production code in `src/` and tests in `test/`.
- Do not edit generated files in `dist/` or coverage output.

## Naming

- Use `camelCase` for variables and functions.
- Use `PascalCase` for classes, types, and interfaces.
- Use kebab-case for documentation and configuration filenames unless a tool requires another convention.
- Choose names that describe intent rather than implementation mechanics.

## Testing

- Add or update tests for behavior changes and bug fixes.
- Test observable behavior rather than internal implementation details.
- Keep tests deterministic and independent of execution order.
- Use focused test names that describe the expected behavior.

## Changes

- Keep changes scoped to the issue and avoid unrelated refactoring.
- Preserve existing public behavior unless the issue explicitly changes it.
- Update documentation when behavior, setup, architecture, or developer workflow changes.
- Record significant technical decisions in `docs/architecture/decisions/` using `0001-short-title.md` filenames.

## Branch Naming

Use the change type, issue number, and a short kebab-case description:

```text
<type>/<issue-number>-<description>
```

Supported branch types match the commit types: `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, and `test`.

```text
feat/123-add-auth
fix/124-token-expiration
refactor/125-auth-service
docs/126-update-readme
chore/127-update-deps
```

## Commits

Use Conventional Commit prefixes so Release Please can determine versions and generate release notes:

- `feat:` for new behavior
- `fix:` for bug fixes
- `docs:` for documentation
- `perf:` for performance improvements
- `refactor:` for behavior-preserving restructuring
- `test:` for test-only changes
- `chore:`, `ci:`, or `build:` for maintenance work
- Add `!` before the colon for a breaking change, such as `feat!:`

## Pull Request Titles

Follow the Conventional Commits format:

```text
<type>[optional scope][!]: <description>
```

Use a supported lowercase commit type, omit the scope and `!` when they do not apply, and keep the description concise. Examples:

```text
feat: add user authentication
fix(api): handle expired sessions
docs: update setup instructions
refactor!: replace the legacy client
```

## Enforcement

- Husky and Commitlint validate local commit messages.
- CI validates branch names and runs `npm run verify`.
- The PR-title workflow validates the squash commit that will land on `main`.
- Dependabot and Release Please branches are exempt from issue-numbered branch names.
