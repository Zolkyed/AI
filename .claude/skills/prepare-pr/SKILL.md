---
name: prepare-pr
description: Verify completed issue work, draft its pull request, and create it after confirmation. Use when the user asks to prepare or open a pull request.
---

# Prepare Pull Request

1. Read the linked issue, repository instructions, PR template, branch status, commits, and complete diff against the base branch.
2. Run the repository's required completion check. Confirm the working tree is clean and the change satisfies the issue without unrelated work. Stop and report anything incomplete.
3. Use the [`pr`](../pr/SKILL.md) skill as the source of truth for the pull-request body. Draft a Conventional Commit title, use the body it produces, and include `Closes #<issue>`.
4. Show the complete draft and exact push/create actions, ask for confirmation, and stop.
5. After explicit confirmation, push the current branch when needed, create exactly one PR with `gh`, and return its URL.

Never merge, enable auto-merge, delete branches, or change repository settings.
