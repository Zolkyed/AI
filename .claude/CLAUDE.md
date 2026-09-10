# `.claude/`

Committed, project-level Claude Code configuration — every clone and worktree gets the same agent tooling, instead of it living only in one person's local `~/.claude`.

- [`settings.json`](settings.json) — project settings and permissions shared by everyone working in this repo.
- [`commands/`](commands/README.md) — custom slash commands (`.md` files), invoked as `/<filename>`.
- [`agents/`](agents/README.md) — custom subagent definitions for the `Agent` tool.
- [`skills/`](skills/README.md) — custom skills (folder + `SKILL.md` per skill), invoked as `/<skill-name>`.
- [`rules/`](rules/README.md) — rules scoped by file glob rather than directory.

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for how to add to each of these.

[`AGENTS.md`](../AGENTS.md) at the repo root stays the source of truth for
shared instructions. This folder contains Claude-specific extensions rather
than copies of those instructions.
