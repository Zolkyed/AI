# Repository Settings

Configure these in the GitHub repository settings. Availability depends on repository visibility and plan.

## General

- [ ] Set the description and topics.
- [ ] Set `main` as the default branch.
- [ ] Enable Issues.
- [ ] Automatically delete head branches after merge.

## Pull Requests

- [ ] Enable squash merging only.
- [ ] Use the pull request title as the squash commit title.

## Branch Protection

Protect `main` with these rules:

- [ ] Require a pull request before merging.
- [ ] Require zero approvals for solo work or at least one for team work.
- [ ] Require `ci`, `lint-branch-name`, and `lint-pr-title` status checks.
- [ ] Require conversation resolution.
- [ ] Require linear history.
- [ ] Block force pushes and branch deletion.

Add required checks only after they have run successfully. Protected branches for private repositories require a supported GitHub plan.

## Actions

Under **Actions → General → Workflow permissions**:

- [ ] Set the default `GITHUB_TOKEN` permission to read-only.
- [ ] Allow GitHub Actions to create and approve pull requests.

Grant additional permissions in the workflow or job that needs them.

## Automatic AI Review

Configure the selected provider:

- [ ] **GitHub Copilot:** Under **Rules → Rulesets**, enable **Automatically request Copilot code review** for the target branches.
- [ ] **Claude Code Review:** In the Claude organization settings, install the Claude GitHub App, select the repository, and choose an automatic review trigger.

## Security

Under **Security → Advanced Security**:

- [ ] Enable the dependency graph.
- [ ] Enable Dependabot alerts.
- [ ] Enable Dependabot security updates.
- [ ] Enable secret scanning and push protection when available.
