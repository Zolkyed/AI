# AI

This document defines the AI-assisted development workflow and collects external references for the tools used with this repository.

## Workflow

```text
project plan
    ↓
structured issues
    ↓
ready issues selected
    ↓
one AI session + branch + worktree per active issue
    ↓
revalidate and plan issue
    ↓
implement → check → review diff → verify
    ↓
pull request → CI + AI review → resolve findings
    ↓
squash merge in dependency order → close issue → clean worktree
```

### 1. Plan the Project

Use `/plan` to define the project goal, constraints, architecture, dependencies, risks, and acceptance criteria. The project plan establishes direction; it should not contain implementation detail for every issue.

### 2. Create Structured Issues

Split the project plan into small, independently testable issues using the forms in [`.github/ISSUE_TEMPLATE/`](../.github/ISSUE_TEMPLATE/).

Feature issues should record:

- Description and context
- Dependencies and blocked issues
- Expected files or modules touched
- Acceptance criteria
- Out-of-scope work
- Implementation notes when useful

Bug reports should record the problem and impact, reproduction steps, expected and actual behavior, environment, and relevant context.

Create issues before starting implementation. Mark dependencies explicitly and identify likely file overlap so parallel sessions do not unknowingly edit the same area.

### 3. Select Ready Work

Start only issues whose prerequisites are satisfied. Use parallel sessions only when issues are genuinely independent or the benefit outweighs the integration cost.

Do not create a worktree for every planned issue. Create worktrees only for active work. A small sequential change is simpler in one branch and worktree.

### 4. Create One Session and Worktree per Active Issue

Each active issue owns exactly one AI session, branch, and worktree. Name the branch according to [`conventions.md`](conventions.md).

The session must:

- Work only inside its assigned worktree.
- Remain scoped to its issue.
- Inspect `git status` before editing or running destructive Git operations.
- Avoid modifying another session's branch or worktree.
- Avoid starting dependent work before its prerequisite is integrated.

### 5. Revalidate and Plan the Issue

At the start of the issue session, inspect the current code, linked issue, dependencies, and relevant documentation. Confirm that the issue is still valid and that its expected files do not conflict with active worktrees.

Write a short implementation plan for that issue. Do not repeat the entire project plan.

### 6. Implement and Verify

Make the smallest complete change that satisfies the acceptance criteria. Follow the repository [conventions](conventions.md) and canonical commands in [`development.md`](development.md).

Use this loop until the change is ready for its final verification:

```text
implement → focused tests → npm run check → review diff
    ↑                                             │
    └────── fix or replan ← findings ───────────┘

ready → npm run verify → PR
```

1. Implement the smallest coherent portion of the change.
2. Run focused tests while iterating.
3. Run `npm run check` as the repeatable development gate.
4. Review the complete diff against the acceptance criteria, intended scope, security, tests, and documentation.
5. Fix failures and findings, then repeat the loop. Revalidate the plan when implementation reveals a significant constraint, dependency, or scope change.
6. Run `npm run verify` as the final completion gate.
7. Open the pull request only when verification passes and the acceptance criteria are satisfied.

Use `npm run fix` for automatically repairable formatting and lint failures. Do not weaken tests, lint rules, type checks, or acceptance criteria to escape the loop. Do not expand scope silently; update the issue or create a follow-up issue. Stop and request direction when requirements conflict, a prerequisite is missing, or continuing would require a material scope change.

### 7. Open the Pull Request

- Follow the pull request template.
- Use a Conventional Commit pull request title.
- Link the issue with `Closes #123`.
- Include verification evidence and relevant risks.
- Do not merge while required checks or review findings remain unresolved.

### 8. Review and Merge

Run CI and request AI review. Reviewers follow [`review.md`](review.md). A maintainer validates the AI findings, resolves every blocking review conversation, and makes the final merge decision.

Merge prerequisite issues first. After a prerequisite merges, update dependent worktrees, revalidate their plans, and rerun `npm run verify`. Use squash merging so the pull request title becomes the Conventional Commit on `main`.

### 9. Close and Clean Up

After merge:

- Confirm the linked issue closed and its acceptance criteria were met.
- Record follow-up work as separate issues.
- Remove the merged worktree and local branch.
- Prune stale remote-tracking branches.
- Keep branches for active pull requests or unmerged work.

## Worktrees

Use one branch and worktree for sequential changes:

```text
issue → implement → verify → merge → next issue
```

Use separate worktrees only for genuinely independent or parallel issues:

```text
issue-a → worktree-a ┐
issue-b → worktree-b ├─ parallel
issue-c → worktree-c ┘
```

Recommended local Git configuration:

```sh
git config extensions.worktreeConfig true
git config --global push.autoSetupRemote true
```

For fully unattended automation, GitHub CLI prompts can also be disabled:

```sh
gh config set prompt disabled
```

## CLI Command References

- [GitHub Copilot CLI](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)
- [ChatGPT developer commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli)
- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Shared Slash Commands

Command availability varies by agent and CLI. Consult the provider documentation above when a command is unavailable.

| Command        | Description                                                |
| -------------- | ---------------------------------------------------------- |
| `/app`         | Continue the session in the desktop app.                   |
| `/clear`       | Clear the current conversation and start a new one.        |
| `/compact`     | Summarize conversation history to reduce context usage.    |
| `/copy`        | Copy a recent response or selected code block.             |
| `/diff`        | View or review changes in the working directory.           |
| `/exit`        | Exit the CLI.                                              |
| `/feedback`    | Send product feedback and optional diagnostic information. |
| `/fork`        | Create a new session from the current conversation.        |
| `/goal`        | Set or manage a persistent task goal.                      |
| `/ide`         | Connect to or manage an IDE integration.                   |
| `/init`        | Create repository-level agent instructions.                |
| `/logout`      | Sign out and clear local credentials.                      |
| `/mcp`         | Manage MCP servers, connections, and tools.                |
| `/model`       | Select the active model and its configuration.             |
| `/new`         | Start a new conversation.                                  |
| `/permissions` | View or change permission and approval settings.           |
| `/plan`        | Enter planning mode before implementation.                 |
| `/quit`        | Exit the CLI.                                              |
| `/rename`      | Rename the current session.                                |
| `/resume`      | Resume a previous session.                                 |
| `/review`      | Review code changes.                                       |
| `/skills`      | Browse and manage available skills.                        |
| `/statusline`  | Configure the terminal status line.                        |
| `/theme`       | Select the terminal or syntax-highlighting theme.          |
| `/usage`       | View usage, limits, or cost information.                   |

## Skills

- [Agent Skills directory](https://www.skills.sh/)
- [Zolkyed skills](https://github.com/Zolkyed/skills)
- [Agent Skills specification](https://agentskills.io/specification)
- [Skills CLI documentation](https://www.skills.sh/docs/cli)

## MCP

- [MCP server directory](https://mcp.directory/)
- [Official MCP documentation](https://modelcontextprotocol.io/docs/getting-started/intro)
- [Official MCP Registry](https://modelcontextprotocol.io/registry/about)

## CLI

- [`gh`](https://cli.github.com/manual/) — GitHub issues, pull requests, reviews, and Actions.
- [`rg`](https://github.com/BurntSushi/ripgrep) — fast repository search and file discovery.
- [`jq`](https://jqlang.org/) — JSON inspection and transformation.
- [`yq`](https://github.com/mikefarah/yq) — YAML inspection and transformation.
- [Playwright CLI](https://playwright.dev/docs/getting-started-cli) — token-efficient browser automation for coding agents; prefer it over Playwright MCP for normal coding sessions.
