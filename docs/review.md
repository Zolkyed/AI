# Pull Request Review

Review the linked issue, pull request description, complete diff, and CI results. Report substantive problems, not preferences already enforced by formatting or linting.

## Review Criteria

- Acceptance criteria are satisfied when an issue is linked.
- The change is correct and limited to the intended scope.
- Failure cases, edge cases, and invalid inputs are handled.
- Tests cover changed behavior and regressions without weakening existing coverage.
- Security, privacy, and dependency implications are addressed.
- Public interfaces remain compatible, or breaking changes are documented.
- Documentation reflects changes to behavior, setup, architecture, or operations.
- Generated files, lockfile changes, migrations, and configuration changes are intentional.
- Required CI checks pass; otherwise, report the verification gap.

## Findings

Report actionable findings first, ordered by severity:

1. **Critical** — security, data loss, or production-blocking issue
2. **High** — incorrect behavior or a likely regression
3. **Medium** — meaningful maintainability, reliability, or test gap

For each finding:

- Explain the concrete impact.
- Reference the relevant file and line.
- Suggest a focused correction when practical.

If there are no findings, state that explicitly and mention any residual risks or verification gaps.

## Approval

Recommend approval only when required checks pass, acceptance criteria are met, and no blocking findings remain. AI approval is advisory; a maintainer must validate the review before merging.
