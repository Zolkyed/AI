---
description: Update affected documentation and commit the verified changes
disable-model-invocation: true
---

Conservatively update and commit the current change.

1. Inspect Git status and staged, unstaged, and untracked changes.
2. Update only files under `docs/` and `AGENTS.md` made inaccurate or incomplete by the code changes.
3. Preserve unrelated content. Do not invent behavior or perform general documentation cleanup.
4. Run the verification commands documented in `AGENTS.md`. Stop if they fail.
5. Stage the completed change and create a Conventional Commit. Do not push or merge.
