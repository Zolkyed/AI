# Workflows

![Matt-first project development workflow with decision branches](assets/project-development-workflow-decisions.svg)

The development loop is **Grill → Design if needed → Spec → Tickets → Implement
one ticket → Review → Prepare PR → CI and AI review → Deliver → Retro**. Every
implementation requires a GitHub issue.

Matt Pocock's vendored skills under [`.claude/skills/`](../.claude/skills/) are
the source of truth for the engineering method. Repository-owned skills only
fill UI and GitHub-operation gaps. When another agent does not expose the named
slash command, perform the equivalent step from its `SKILL.md`.

## 0. Configure the Repository

Run [`/setup-matt-pocock-skills`](../.claude/skills/setup-matt-pocock-skills/SKILL.md)
once. Use GitHub Issues as the tracker, retain the default triage labels, and
use the domain-document layout appropriate to the repository.

## 1. Sharpen the Idea

Run [`/grill-with-docs`](../.claude/skills/grill-with-docs/SKILL.md) for new
features and complex changes. It sharpens the idea while recording durable
domain language and architectural decisions.

When a question needs a runnable answer, use
[`/prototype`](../.claude/skills/prototype/SKILL.md). Treat prototype code as
evidence, not production implementation.

Keep discovery, specification, and ticketing in one context when practical so
the decisions survive intact.

## 2. Approve UI References

Skip this phase when the work has no user interface. Choose one reference
source before publishing implementation tickets.

### Generated design

Run [`/ui-design-prompt`](../.claude/skills/ui-design-prompt/SKILL.md) from the
agreed product discussion, specification, or plan:

```text
/ui-design-prompt --aspect-ratio 16:9
```

Generate one overview containing every planned page in a shared design system.
Save the approved overview as `design/panels.png`.

### Provided design

Use the provided Figma frame or export, screenshot, mockup, or design-system
specification. Confirm which artifact applies to every required page, viewport,
and state.

### Authorized existing website

Record the permitted URLs, flows, states, and viewports. Capture complete
references with browser tooling. Reuse branding, text, imagery, fonts, and
other protected assets only with explicit authorization.

### Reference completion criterion

Before ticketing UI implementation:

1. Save every complete page as `design/<page-name>-reference.png`, adding
   viewport or state suffixes where needed.
2. Save only authorized implementation assets under `design/assets/`.
3. Obtain approval for the overview and every detailed page reference.

![Generate the full UI design, upscale one screen, and implement it](assets/ui-design-workflow.png)

## 3. Publish the Specification and Tickets

Run [`/to-spec`](../.claude/skills/to-spec/SKILL.md) to publish the agreed
specification as a GitHub issue. Then run
[`/to-tickets`](../.claude/skills/to-tickets/SKILL.md) to propose tracer-bullet
tickets and blocking edges. Approve the breakdown before it is published.

Each ticket must deliver a narrow, complete, independently verifiable behavior.
UI tickets identify their approved references, routes, viewports, states, and
acceptance criteria.

## 4. Select and Isolate One Ticket

Select an open ticket from the **frontier**: all its blockers are complete and
no implementation is already active. Create its conventionally named branch
and isolated Worktrunk worktree as described in
[`docs/agents/README.md`](agents/README.md).

One issue owns one branch, worktree, agent session, and pull request.

## 5. Implement One Ticket

Run [`/implement <ticket>`](../.claude/skills/implement/SKILL.md). It drives
[`/tdd`](../.claude/skills/tdd/SKILL.md), runs focused checks during development,
finishes with the full test suite, invokes
[`/code-review`](../.claude/skills/code-review/SKILL.md), and commits the result.

Follow `AGENTS.md`, repository conventions, the issue, glossary, and ADRs. Run
`pnpm run check` regularly and update documentation made inaccurate by the
change.

For UI tickets, run
[`/ui-implementation-loop <page-name>`](../.claude/skills/ui-implementation-loop/SKILL.md)
against the approved reference. Its existing-website mode covers authorized
website references without a separate wrapper skill.

![Build the screen, capture a screenshot, compare it with the design, and refine until it matches](assets/ui-build-verification-loop.png)

## 6. Verify and Open the Pull Request

The implementation's final [`/code-review`](../.claude/skills/code-review/SKILL.md)
checks both documented standards and the originating specification. Resolve its
findings, then run [`/prepare-pr`](../.claude/skills/prepare-pr/SKILL.md).

`/prepare-pr` runs the repository completion check, audits the branch and diff,
and uses Matt's [`/pr`](../.claude/skills/pr/SKILL.md) as the source of truth for
the PR body. It shows the title, body, push, and creation actions for approval
before changing GitHub. The PR must contain `Closes #<issue>`.

## 7. CI and AI Review

CI runs `pnpm run verify`. After
[automatic AI review is configured](repository-settings.md#automatic-ai-review),
CodeRabbit reviews bugs, security, tests, edge cases, conventions, and scope.

Apply valid findings, rerun the relevant focused checks and `pnpm run verify`,
push the fixes, and repeat until CI passes and every finding is resolved or
explicitly addressed.

## 8. Deliver and Improve

After approval, a human squash-merges the pull request and removes its worktree.
Run [`/retro`](../.claude/skills/retro/SKILL.md) before clearing the completed
session so navigation, checks, standards, and tooling can improve the next run.

If tickets remain, select another issue from the unblocked frontier and return
to **Select and Isolate One Ticket**. Use
[`/retry-issue`](../.claude/skills/retry-issue/SKILL.md) only when an attempt or
issue definition is unsatisfactory; it requires confirmation before discarding
changes.

## Sources of Truth

Apply these sources in order:

1. `AGENTS.md`, conventions, architecture documentation, glossary, and ADRs
   define repository and technical constraints.
2. The GitHub specification and ticket define scope, behavior, platform,
   viewport, states, and acceptance criteria.
3. `design/panels.png` defines the approved cross-page system, and
   `design/<page-name>-reference.png` defines the detailed visual target.
4. Tests and required checks provide executable verification.
5. Files under `design/assets/` support implementation; they are not references.

Functional and accessibility requirements remain authoritative over visual
fidelity. Report conflicting sources instead of guessing.
