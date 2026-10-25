# Skills

Matt Pocock's engineering skills are the source of truth for planning,
specification, ticketing, implementation, testing, review, and PR content. The
vendored files come from
[`mattpocock/skills`](https://github.com/mattpocock/skills/tree/main) at commit
`5beb35b040e3de97e54fa9e386d7e42d15c295c2`; keep them unchanged so they can be
updated directly from upstream.

## Matt workflow

- [`/setup-matt-pocock-skills`](setup-matt-pocock-skills/SKILL.md) — configure the issue tracker and domain-document layout once per repository.
- [`/grill-with-docs`](grill-with-docs/SKILL.md) — sharpen an idea while maintaining the glossary and ADRs.
- [`/prototype`](prototype/SKILL.md) — answer an uncertain UI or behavior question with throwaway code.
- [`/diagnosing-bugs`](diagnosing-bugs/SKILL.md) — build a tight reproduction loop before fixing hard bugs or performance regressions.
- [`/to-spec`](to-spec/SKILL.md) — publish the agreed specification to the issue tracker.
- [`/to-tickets`](to-tickets/SKILL.md) — split the specification into blocked tracer-bullet tickets.
- [`/implement`](implement/SKILL.md) — implement one ticket through TDD and code review.
- [`/tdd`](tdd/SKILL.md) — build behavior in red-green-refactor slices.
- [`/code-review`](code-review/SKILL.md) — review standards and specification compliance.
- [`/pr`](pr/SKILL.md) — write the pull-request body.
- [`/retro`](retro/SKILL.md) — improve the agent environment after delivery.

Supporting upstream skills are `grilling`, `domain-modeling`, `codebase-design`,
`triage`, and `writing-for-agents`. `triage` also provides the label vocabulary
used by setup, specifications, and tickets; invoke it directly only for raw
incoming issues.

## Herdr integration

- [`/herdr`](herdr/SKILL.md) — inspect and coordinate Herdr workspaces, panes,
  commands, and agents when running inside Herdr.

The Herdr skill is vendored unchanged from
[`herdrdev/herdr`](https://github.com/herdrdev/herdr/tree/master/skills/herdr)
at commit `5608de0608918aba2f9d501e7793b984a0ca9cfa`. Keep it unchanged so it can
be updated directly from upstream.

## Repository complements

These repository-owned skills fill gaps without redefining Matt's workflow:

- [`/panel`](panel/SKILL.md) — run an agent-agnostic implementation and review panel through Herdr.
- [`/ui-design-prompt`](ui-design-prompt/SKILL.md) — turn agreed product decisions into a UI image-generation prompt.
- [`/ui-implement`](ui-implement/SKILL.md) — implement one UI page and refine it against an approved reference.
