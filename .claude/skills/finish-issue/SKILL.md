---
name: finish-issue
description: Finalize an implemented GitHub issue by updating affected documentation, verifying the complete change, and creating its commit. Use when the user asks to finish, validate, or finalize issue work.
---

# Finish Issue

1. Read the issue and confirm its acceptance criteria and dependencies.
2. Inspect Git status, commits, and the complete implementation diff.
3. Check that behavior and tests satisfy the issue without unrelated changes.
4. Conservatively update only documentation made inaccurate or incomplete by the implementation. Preserve unrelated content and do not invent behavior or perform general documentation cleanup.
5. Run the verification commands documented in `AGENTS.md`. Stop if they fail.
6. Review the final diff for scope, correctness, tests, documentation, and accidental or sensitive files. Stop and report any blocker.
7. Stage only the completed issue changes and create a Conventional Commit that follows `docs/conventions.md`.
8. Report the commit, verification evidence, and whether the issue is ready for `/prepare-pr`.

Do not push, create a pull request, merge, or modify GitHub.
