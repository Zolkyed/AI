<p align="center">
  <img src="docs/assets/ai-agent-example.svg" alt="AI coding agent robot" width="200">
</p>

Reusable, AI-agent-ready TypeScript repository with issue-driven worktrees, canonical verification, enforced Git conventions, CI, and release automation.

## Workflow

```text
/plan → structured issues → one session + branch + worktree per active issue
      → implement/check loop → verify → PR → CI + AI review
      → squash merge in dependency order → close and clean up
```

See the complete [AI workflow](docs/ai.md#workflow).

## Canonical Commands

| Command          | Purpose                                               |
| ---------------- | ----------------------------------------------------- |
| `npm run check`  | Check formatting, lint, types, tests, and whitespace. |
| `npm run fix`    | Apply automatic formatting and ESLint fixes.          |
| `npm run build`  | Create the production build.                          |
| `npm run verify` | Run `check` and `build`; required before a PR.        |

CI runs `npm run verify`, so local and remote completion gates are identical.

## Enforcement

- Husky and lint-staged format and lint staged files.
- Commitlint enforces Conventional Commit messages locally.
- PR conventions enforce `<type>/<issue-number>-<description>` branch names and Conventional Commit PR titles.
- CI rejects formatting, lint, type, test, whitespace, or build failures.
- Squash merging uses the PR title as the commit on `main`, which Release Please uses for versioning and release notes.
- [`AGENTS.md`](AGENTS.md) is the shared instruction source; [`CLAUDE.md`](CLAUDE.md) loads it for Claude Code.

## Documentation

- [AI workflow and tooling](docs/ai.md)
- [Development](docs/development.md)
- [Conventions](docs/conventions.md)
- [Pull request review](docs/review.md)
- [Repository settings](docs/repository-settings.md)
- [Architecture](docs/architecture/README.md)
- [API](docs/api/README.md)

See the [documentation index](docs/README.md) for the complete map.
