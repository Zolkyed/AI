---
name: prepare-pr
description: Verify completed issue work, draft its pull request, and create it after confirmation. Use when the user asks to prepare or open a pull request.
---

# Prepare Pull Request

1. Read the linked issue, repository instructions, PR template, branch status, commits, and complete diff against the base branch.
2. Confirm the working tree is clean, verification passed, and the change satisfies the issue without unrelated work. Stop and report anything incomplete.
3. Draft a Conventional Commit PR title and a concise body containing the summary, changes, verification, risks, and `Closes #<issue>`.
4. Show the complete draft and exact push/create actions, ask for confirmation, and stop.
5. After explicit confirmation, push the current branch when needed, create exactly one PR with `gh`, and return its URL.

Never merge, enable auto-merge, delete branches, or change repository settings.
