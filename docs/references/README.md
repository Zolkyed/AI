# References

## Agent Commands

- [GitHub Copilot CLI](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)
- [Codex CLI](https://learn.chatgpt.com/docs/developer-commands?surface=cli)
- [Claude Code](https://code.claude.com/docs/en/interactive-mode)

### Common Slash Commands

Command availability varies by agent, version, and plan. Consult the provider references when a command is unavailable.

| Command        | Description                                             |
| -------------- | ------------------------------------------------------- |
| `/app`         | Continue the session in the desktop app.                |
| `/clear`       | Clear the conversation and start a new one.             |
| `/compact`     | Summarize conversation history to reduce context usage. |
| `/copy`        | Copy a recent response or selected code block.          |
| `/diff`        | View or review working-directory changes.               |
| `/exit`        | Exit the CLI.                                           |
| `/feedback`    | Send product feedback and optional diagnostics.         |
| `/fork`        | Create a session from the current conversation.         |
| `/goal`        | Set or manage a persistent task goal.                   |
| `/ide`         | Connect to or manage an IDE integration.                |
| `/init`        | Create repository-level agent instructions.             |
| `/logout`      | Sign out and clear local credentials.                   |
| `/mcp`         | Manage MCP servers, connections, and tools.             |
| `/model`       | Select the active model and configuration.              |
| `/new`         | Start a new conversation.                               |
| `/permissions` | View or change permissions and approvals.               |
| `/plan`        | Enter planning mode before implementation.              |
| `/quit`        | Exit the CLI.                                           |
| `/rename`      | Rename the current session.                             |
| `/resume`      | Resume a previous session.                              |
| `/review`      | Review code changes.                                    |
| `/skills`      | Browse and manage available skills.                     |
| `/statusline`  | Configure the terminal status line.                     |
| `/theme`       | Select the terminal or syntax-highlighting theme.       |
| `/usage`       | View usage, limits, or cost information.                |

## Skills

- [Agent Skills directory](https://skills.sh/)
- [Zolkyed skills](https://github.com/Zolkyed/skills)
- [Agent Skills specification](https://agentskills.io/specification)
- [Skills CLI](https://www.skills.sh/docs/cli)

## MCP

- [MCP server directory](https://github.com/modelcontextprotocol/servers)
- [MCP documentation](https://modelcontextprotocol.io/)
- [Official MCP Registry](https://registry.modelcontextprotocol.io/)

### Servers

- [Filesystem MCP](https://github.com/modelcontextprotocol/servers/blob/main/src/filesystem/README.md)
- [Context7 MCP](https://context7.com/docs/overview) — current, version-specific library documentation
- [Chrome DevTools MCP](https://developer.chrome.com/docs/devtools/agents/get-started) — inspect, debug, and automate Chrome
- [Firecrawl MCP](https://docs.firecrawl.dev/use-cases/developers-mcp) — search, scrape, and extract web content
- [SQLite MCP](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/sqlite) — archived reference server
- [PostgreSQL MCP](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/postgres) — archived reference server
- [Supabase MCP](https://supabase.com/docs/guides/ai-tools/mcp)
- [Atlassian MCP](https://atlassian.github.io/atlassian-mcp-server/)

## CLI Tools

- [`gh`](https://cli.github.com/manual/) — GitHub issues, pull requests, reviews, and Actions
- [`rg`](https://github.com/BurntSushi/ripgrep) — fast repository search and file discovery
- [`jq`](https://jqlang.org/manual/) — JSON inspection and transformation
- [`yq`](https://mikefarah.gitbook.io/yq/) — YAML inspection and transformation
- [Playwright CLI](https://playwright.dev/docs/getting-started-cli) — token-efficient browser automation for coding agents
