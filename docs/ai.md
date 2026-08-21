# AI Workflow

```text
plan → issues → choose checkout → revalidate → implement → verify → PR → merge → clean up
```

For a small, isolated change with known scope, use the fast path:

```text
issue → branch → implement → verify → PR
```

### 1. Plan the Project

Use `/plan` to define the goal, constraints, architecture, dependencies, risks, and acceptance criteria.

### 2. Create Issues

Use `/create-issue` to turn the plan into small, testable issues using [`.github/ISSUE_TEMPLATE/`](../.github/ISSUE_TEMPLATE/).

### 3. Choose the Checkout Strategy

Use `/whats-next` to select a ready issue, then choose the checkout strategy. Each issue owns one AI session, branch, and pull request.

- **Sequential:** Use the primary checkout and finish one issue before starting the next.
- **Parallel:** Give each independent active issue its own worktree and session.

```text
sequential: issue-a → PR-a → merge → issue-b → PR-b
parallel:   issue-a → worktree-a → PR-a
            issue-b → worktree-b → PR-b
```

Name branches according to [`conventions.md`](conventions.md). Keep each session inside its assigned checkout and scoped to its issue.

### 4. Revalidate and Plan the Issue

In each issue session, use `/start-issue` to revalidate the issue and write a focused implementation plan.

### 5. Implement and Verify

Implement the smallest complete change, add tests, and review the diff. Use `/retry-issue` to replace an unsuccessful attempt; it requires confirmation before discarding changes. Run `npm run check` while iterating, then use `/update-docs-and-commit` and `/finish-issue` before opening a pull request.

### 6. Open the Pull Request

Use `/prepare-pr` to verify the completed change and open a pull request after confirmation. Link the issue with `Closes #123` and include verification evidence.

### 7. Review and Merge

Resolve required checks and review findings. Merge prerequisites first, update dependent worktrees, rerun `npm run verify`, and squash merge.

### 8. Clean Up

Confirm the issue closed, record follow-up issues, and remove the merged local branch and worktree when used.

## direnv

The committed [`.envrc`](../.envrc) loads the main worktree's `.env` and `.venv`, allows worktree-local `.env` overrides, keeps Node dependencies local, and activates [mise](https://mise.jdx.dev/) runtimes.

Install [direnv](https://direnv.net/docs/installation.html), add its shell hook, and approve each checkout:

```sh
direnv allow
```
