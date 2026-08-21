# Settings

One-time settings for non-interactive Git and GitHub automation:

```sh
git config --global push.autoSetupRemote true
git config --global fetch.prune true
git config --global pull.ff only
git config --global merge.conflictStyle zdiff3
gh config set prompt disabled
```
