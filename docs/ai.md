# AI Workflow

## Recommended Workflow

```text
Plan when needed
/plan → /create-issue

Select and start
/whats-next → wt <agent> --create <branch> → /start-issue

Develop
implement ↔ pnpm run check → review the diff → address findings

Finalize
/finish-issue (documentation → verify → commit) → /prepare-pr

GitHub
CI → squash merge → wt remove <branch>
```

- Skip `/plan` for a small, well-defined change, but always use an issue.
- Use `/retry-issue` only when an attempt or issue definition is unsatisfactory; it requires confirmation before discarding changes.
- Use a fresh read-only reviewer only for risky, complex, or security-sensitive changes.

## Quick Examples

Small, well-defined fix:

```text
issue #123
→ wt codex --create fix/123-correct-timeout
→ /start-issue
→ implement ↔ pnpm run check
→ /finish-issue
→ /prepare-pr
→ CI → squash merge → wt remove fix/123-correct-timeout
```

Sequential change without an additional worktree:

```text
issue #124
→ git switch -c docs/124-update-copy origin/main
→ /start-issue
→ implement ↔ pnpm run check
→ /finish-issue
→ /prepare-pr
→ CI → squash merge → clean up the branch
```

Complex or risky feature:

```text
/plan → /create-issue → /whats-next
→ wt claude --create feat/125-add-auth
→ /start-issue
→ implement ↔ checks
→ fresh read-only review → address findings
→ /finish-issue → /prepare-pr
→ CI → squash merge → wt remove feat/125-add-auth
```

## Start

Use `/whats-next` to select a ready issue. Each issue owns one branch, worktree, primary agent session, and pull request.

Use [Worktrunk](https://worktrunk.dev/) to create the checkout and launch an agent:

```sh
wt switch --create <branch>
wt claude --create <branch>
wt codex --create <branch>
wt copilot --create <branch>
wt opencode --create <branch>
```

Name branches according to [`conventions.md`](conventions.md), then run `/start-issue` inside the new checkout to revalidate the issue and plan the implementation.

A worktree isolates Git state, not system access. Run unrestricted agents only in an isolated environment without host credentials or unrelated files.

## Develop

Implement the smallest complete change, add tests, and run `pnpm run check` while iterating. Review the complete diff and address valid findings before finalization.

## Finish

Run `/finish-issue` to revalidate acceptance criteria, update affected documentation, run `pnpm run verify`, audit the final diff, and create the Conventional Commit.

Run `/prepare-pr` to verify the clean branch and open a pull request after confirmation. Link it with `Closes #<issue>`, wait for CI, squash merge, then remove the worktree.

## direnv

The committed [`.envrc`](../.envrc) loads worktree-local `.env` files and exposes existing `.venv` and `node_modules/.bin` directories. mise remains activated by the shell, while Worktrunk creates applicable environments before launching an agent.

After installing the shell hook, approve each checkout:

```sh
direnv allow
```
