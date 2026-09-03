# AI Workflow

## High-Level Development Loop

[![Project Development Workflow](assets/project-development-workflow.png)](https://app.eraser.io/workspace/G8EpIWj7GwrSKfuByKA6)

The project loop is: plan, design, break work into features, build one feature,
self-check, review with AI, fix issues, save progress, and repeat until the
project is complete.

## Execution Setup

Local development:

```text
VS Code → herdr multiplexer → Worktrunk worktree → agent AI
```

Remote development:

```text
VS Code Remote SSH → herdr multiplexer → Worktrunk worktree → agent AI
```

Use `herdr` from the VS Code terminal. Worktrunk creates and manages the
isolated worktree where the agent runs.

## Delivery Workflow

1. **Discover:** For complex work, use `/plan` to interview about the product, users, scope, flows, architecture, risks, and constraints. Do not write code during this interview. Small changes may skip the interview, but every implementation still needs an issue.
2. **Plan and issue:** After the interview produces a spec summary, assumptions, and open risks, confirm that it should become an implementation plan. Then create the issue with `/create-issue`.
3. **Select and start:** Use `/whats-next`, create the issue branch and worktree, then run `/start-issue` inside the checkout.
4. **Build the feature loop:** For each feature, design the intended behavior, implement the smallest complete change, self-check it, and run `pnpm run check`.
5. **Review and improve:** Review the feature with AI, fix valid issues, save progress, and repeat the feature loop until the project is complete. Use a fresh read-only reviewer for risky, complex, or security-sensitive changes.
6. **Finalize:** Run `/finish-issue` to revalidate acceptance criteria, update affected documentation, run `pnpm run verify`, audit the final diff, and create the Conventional Commit.
7. **Deliver:** Run `/prepare-pr`, link the pull request with `Closes #<issue>`, and wait for CI. After approval, a human squash-merges the PR and removes the worktree.

Use `/retry-issue` only when an attempt or issue definition is unsatisfactory;
it requires confirmation before discarding changes.

## Worktrees and Agents

Use [Worktrunk](https://worktrunk.dev/) to create the checkout and launch an
agent from the VS Code terminal:

```sh
wt switch --create <branch>
wt claude --create <branch>
wt codex --create <branch>
wt copilot --create <branch>
wt opencode --create <branch>
```

Name branches according to [`conventions.md`](conventions.md). Each issue owns
one branch, worktree, primary agent session, and pull request. A worktree
isolates Git state, not system access, so run unrestricted agents only in an
isolated environment without host credentials or unrelated files.

## Environment

The committed [`.envrc`](../.envrc) loads worktree-local `.env` files and
exposes existing `.venv` and `node_modules/.bin` directories. mise remains
activated by the shell.

After installing the shell hook, approve each checkout:

```sh
direnv allow
```

## Choose a Development Mode

Use **parallel development** when features are independent and can be safely
worked on at the same time. Give each issue its own Worktrunk worktree and agent
session to prevent changes from colliding:

```text
issue A → worktree A → agent A
issue B → worktree B → agent B
```

Use **sequential development** when features depend on one another, the change
is small, or shared context is important. Finish and verify one issue before
starting the next in a single checkout:

```text
issue A → implement → verify → PR
issue B → implement → verify → PR
```

In both modes, follow the same delivery workflow and keep one issue, branch,
worktree, agent session, and pull request together.
