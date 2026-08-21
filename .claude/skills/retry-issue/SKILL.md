---
name: retry-issue
description: Retry an issue when the current implementation or issue definition is unsatisfactory. Use when the user wants to discard an attempt and iterate until the result is accepted.
---

# Retry Issue

Loop over the current issue until the user accepts the result or progress is blocked.

1. Re-read the issue and inspect Git status, the complete uncommitted diff, and failed verification or feedback.
2. Determine whether the problem is the implementation, the issue definition, or both. Explain what must change.
3. List the exact attempt-owned files to discard and ask for confirmation. Never stash, run broad reset or clean commands, or touch unrelated work.
4. If the issue must change, show the proposed GitHub edit and ask for separate confirmation before applying it.
5. After approval, discard only the confirmed changes, choose a materially different approach, implement it, and verify it using `AGENTS.md`.
6. Present the result and ask whether to accept it or retry. Repeat from step 1 when rejected.

Stop when the user accepts the result, the issue is blocked, or safe isolation from unrelated changes is impossible.
