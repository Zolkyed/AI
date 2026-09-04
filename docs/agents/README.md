# Agent Execution

Agent sessions run in isolated Worktrunk worktrees. Each issue owns one branch,
worktree, primary agent session, and pull request.

## Execution Model

Local development:

```text
VS Code → herdr multiplexer → Worktrunk worktree → agent AI
```

Remote development:

```text
VS Code Remote SSH → herdr multiplexer → Worktrunk worktree → agent AI
```

Run `herdr` from the VS Code terminal.

## Environment

The committed [`.envrc`](../../.envrc) activates mise and exposes existing
`.venv` and `node_modules/.bin` directories. After installing the shell hook,
approve each checkout:

```sh
direnv allow
```

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
issue A → implement → verify → PR
issue B → implement → verify → PR
```

In both modes, keep one issue, branch, worktree, agent session, and pull request
together.

## Isolation Boundary

A worktree isolates Git state, not system access. Run unrestricted agents only
in an isolated environment without host credentials or unrelated files.
