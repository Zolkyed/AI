---
name: replicate-web-ui
description: Reproduce an authorized existing website with browser or Chrome DevTools inspection and iterative screenshot comparison. Use when a website URL is the visual and behavioral reference.
---

# Replicate Web UI

Use the **Existing Website** mode of the shared
[`/ui-implementation-loop`](../ui-implementation-loop/SKILL.md).

Require the target URL, permitted pages or flows, target route, desktop and
mobile viewports, required interaction states, and permission status for any
branding, text, imagery, fonts, or other assets. Read and follow the complete
shared skill before editing.

Inspect only the permitted pages with browser or Chrome DevTools tooling,
capture approved full-page references, implement the result with original
repository code, and run the shared matched-viewport comparison and refinement
loop until its stopping condition is reached.

Do not copy source code, request exposed credentials, bypass access controls, or
reuse proprietary assets without permission. Store authorized visual assets
that the implementation requires under `design/assets/`; the full-page
reference remains the visual target.
