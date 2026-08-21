<p align="center">
  <img src="docs/assets/ai-agent-example.svg" alt="AI coding agent robot" width="200">
</p>

Reusable, AI-agent-ready TypeScript repository with issue-driven development, canonical verification, Git conventions, CI, and release automation.

## Canonical Commands

| Command          | Purpose                                               |
| ---------------- | ----------------------------------------------------- |
| `npm run check`  | Check formatting, lint, types, tests, and whitespace. |
| `npm run fix`    | Apply automatic formatting and ESLint fixes.          |
| `npm run build`  | Create the production build.                          |
| `npm run verify` | Run `check` and `build`; required before a PR.        |

CI runs `npm run verify`, so local and remote completion gates are identical.

## Quality Gates

- Husky and lint-staged format and lint staged files.
- Commitlint enforces Conventional Commit messages locally.
- PR convention checks validate branch names and Conventional Commit PR titles.
- CI reports formatting, lint, type, test, whitespace, and build failures.
- Squash merging uses the PR title as the commit on `main`, which Release Please uses for versioning and release notes.
- [`AGENTS.md`](AGENTS.md) is the shared instruction source; [`CLAUDE.md`](CLAUDE.md) loads it for Claude Code.

## Documentation

- [AI workflow](docs/ai.md)
- [Development](docs/development.md)
- [Settings](docs/settings.md)
- [Conventions](docs/conventions.md)
- [Repository settings](docs/repository-settings.md)
- [Architecture](docs/architecture/README.md)
- [API](docs/api/README.md)

See the [documentation index](docs/README.md) for the complete map.
