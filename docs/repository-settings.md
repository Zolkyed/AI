# Repository Settings

This document records the recommended GitHub configuration for this repository. These settings are managed on GitHub and are not automatically enforced by files in the repository.

## General

- Set a concise repository description and relevant topics.
- Use `main` as the default branch.
- Enable Issues.
- Automatically delete head branches after pull requests are merged.

## Pull Requests

- Enable squash merging.
- Set the default squash commit message to the pull request title.
- Disable merge commits.
- Disable rebase merging.

Pull request titles should follow Conventional Commits because the squash title becomes the commit on `main` and is interpreted by Release Please.

## Ruleset for `main`

Create an active branch ruleset targeting `main` with these rules:

- Require a pull request before merging.
- Require zero approvals for a solo repository or one approval for a team repository.
- Require the `ci` status check to pass.
- Require conversation resolution before merging.
- Require linear history.
- Restrict branch deletion.
- Block force pushes.

Add a required status check only after that check exists and has completed successfully. Requiring a check that never runs can block every pull request.

## GitHub Actions

- Allow GitHub Actions used by the repository and verified Marketplace actions.
- Give workflows the minimum permissions they require.
- Allow GitHub Actions to create pull requests for Release Please.

The default `GITHUB_TOKEN` may not trigger workflows from pull requests it creates. If Release Please pull requests must run the required `ci` check, configure Release Please with an appropriate repository secret and token.

## AI Pull Request Review

Enable automatic pull request review for the selected AI provider:

- GitHub Copilot: configure automatic Copilot code review through the `main` ruleset.
- Claude Code: install the GitHub App, grant access to this repository, and configure its pull request review trigger.

Automated reviewers should follow [`review.md`](review.md). AI review supplements required CI and human judgment; it does not replace them.

## Security

Enable the features available for the repository and GitHub plan:

- Dependency graph
- Dependabot alerts
- Dependabot security updates
- Secret scanning
- Push protection

Add dependency review or code scanning only when its workflow is configured and maintained. Do not require a security check that does not exist.

## Release Automation

- Keep Release Please enabled on pushes to `main`.
- Use Conventional Commit pull request titles.
- Keep `package.json` and `.release-please-manifest.json` versions synchronized.
- Review and merge the Release Please pull request when ready to publish a release.

## Verification Checklist

- [ ] `main` is the default branch.
- [ ] Pull requests are required for changes to `main`.
- [ ] Required approvals are set to zero for solo work or one for team work.
- [ ] Squash merging is the only enabled merge method.
- [ ] Squash commits use the pull request title.
- [ ] Merged head branches are deleted automatically.
- [ ] The `main` ruleset is active.
- [ ] The `ci` check is required and runs on pull requests.
- [ ] Force pushes and branch deletion are blocked.
- [ ] Available dependency and secret protection features are enabled.
- [ ] Release Please can create pull requests and its pull requests run required checks.
