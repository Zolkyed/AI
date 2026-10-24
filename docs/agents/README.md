# Agent Execution

Agent sessions run in isolated Worktrunk worktrees. Each issue owns one branch,
worktree, primary agent session, and change request.

## Execution Model

Local development:

```text
VS Code → herdr multiplexer → Worktrunk worktree → agent AI
```

Remote development:

```text
VS Code Remote SSH → herdr multiplexer → Worktrunk worktree → agent AI
```

Run `herdr` from the VS Code terminal. Agents running in a Herdr pane can use
the repository's [`/herdr`](../../.claude/skills/herdr/SKILL.md) skill to
inspect and coordinate the current session. The skill requires `HERDR_ENV=1`
and stops safely when invoked outside Herdr.

Use [`/panel`](../../.claude/skills/panel/SKILL.md) for rigorous multi-agent
implementation, review, and verification. Panel creates its own sibling panes;
no split layout is required beforehand. It discovers agent kinds from the
installed Herdr CLI and can launch Claude, Codex, Copilot, OpenCode, or any
other kind that version reports. The primary agent itself may use any supported
kind.

## Environment

The committed [`.envrc`](../../.envrc) activates mise and exposes existing
`.venv` and `node_modules/.bin` directories. After installing the shell hook,
approve each checkout:

```sh
direnv allow
```

API keys normally provided through `.env` will be stored in Windows Credential
Manager rather than committed files or per-session shell variables, keeping
them persistent across WSL and agent sessions.

## Create a Worktree and Agent

Use [Worktrunk](https://worktrunk.dev/) to create the checkout and launch an
agent:

```sh
wt switch --create <branch>
wt claude --create <branch>
wt codex --create <branch>
wt copilot --create <branch>
wt opencode --create <branch>
```

Name branches according to [`conventions.md`](../conventions.md).

## Development Modes

Use parallel development for independent features. Give each issue its own
worktree and agent session:

```text
issue A → worktree A → agent A
issue B → worktree B → agent B
```

Use sequential development for dependent features, small changes, or work that
benefits from shared context:

```text
issue A → implement → verify → change request
issue B → implement → verify → change request
```

In both modes, keep one issue, branch, worktree, agent session, and change
request together.

## Isolation Boundary

A worktree isolates Git state, not system access. Run unrestricted agents only
in an isolated environment without host credentials or unrelated files.
