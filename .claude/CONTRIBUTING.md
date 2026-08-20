# Contributing to `.claude/`

This folder is committed, shared Claude Code configuration — changes here affect every clone and worktree, not just your own session.

## Adding to Each Subfolder

- **`commands/`** — add a `.md` file; it becomes `/<filename>`. Keep the instructions self-contained.
- **`agents/`** — add a `.md` file (frontmatter + system prompt) defining a new subagent for the `Agent` tool.
- **`skills/`** — add a folder with a `SKILL.md` file (frontmatter + instructions); invoked as `/<skill-name>`.
- **`rules/`** — add a `.md` file to define a rule scoped by file glob rather than directory.
- **`settings.json`** — shared permissions/hooks. Changes here affect everyone; avoid loosening permissions without discussing it first.

## Guidelines

- Keep each command, agent, skill, or rule focused on one job; prefer several small files over one that tries to do everything.
- Do not duplicate instructions already in the root [`AGENTS.md`](../AGENTS.md); this folder is for tool-specific extensions on top of it, not a copy.
- Test new configuration locally in a Claude Code session before committing it.
- Follow the repository's [conventions](../docs/conventions.md) and [development workflow](../docs/development.md).
