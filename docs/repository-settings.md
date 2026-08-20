# Repository Settings

These settings are managed on GitHub rather than enforced by repository files. Enable features only when they are available on the repository's plan.

## General

- [ ] Set a concise description and relevant topics.
- [ ] Use `main` as the default branch.
- [ ] Enable Issues.
- [ ] Delete head branches automatically after merge.

## Pull Requests

- [ ] Require pull requests for changes to `main`.
- [ ] Enable squash merging only.
- [ ] Use the pull request title as the squash commit message.
- [ ] Require Conventional Commit pull request titles.
- [ ] Use zero approvals for solo work or at least one for team work.
- [ ] Require conversation resolution and linear history.
- [ ] Block force pushes and branch deletion.

## Required Checks

- [ ] Require `ci`, `lint-branch-name`, and `lint-pr-title` on pull requests.

Add a required check only after it exists and has completed successfully. Requiring a check that never runs blocks every pull request.

## GitHub Actions and Releases

- [ ] Keep the default workflow permission read-only.
- [ ] Allow GitHub Actions to create pull requests for Release Please.
- [ ] Grant additional permissions only in the workflow or job that needs them.
- [ ] Keep Release Please enabled on pushes to `main`.
- [ ] Keep `package.json` and `.release-please-manifest.json` versions synchronized.

Release Please declares `contents: write` and `pull-requests: write` in its workflow. Pull requests created with the default `GITHUB_TOKEN` may not trigger `ci`; use a GitHub App or appropriately scoped repository secret when release pull requests must run required checks.

## Review and Security

- [ ] Configure automatic review for the selected AI provider when wanted.
- [ ] Require maintainers to validate AI findings before merge.
- [ ] Enable the dependency graph, Dependabot alerts, and Dependabot security updates.
- [ ] Enable secret scanning and push protection when available.

Automated reviewers follow [`review.md`](review.md). Add dependency review or code scanning only when its workflow is configured and maintained; never require a check that does not exist.
