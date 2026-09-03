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

### Files and Documentation

- [Filesystem MCP](https://github.com/modelcontextprotocol/servers/blob/main/src/filesystem/README.md)
- [Context7 MCP](https://context7.com/docs/overview) — current, version-specific library documentation

### Browser Tooling

- [Chrome DevTools MCP](https://developer.chrome.com/docs/devtools/agents/get-started) — inspect, debug, and automate Chrome

### Web Scraping

- [Firecrawl MCP](https://docs.firecrawl.dev/mcp-server) — collect public content, search the web, and discover pages
- [Exa MCP](https://exa.ai/docs/reference/exa-mcp) — search the web and fetch clean page content

### Workflow Automation

- [n8n MCP](https://docs.n8n.io/connect/connect-to-n8n-mcp-server) — build, manage, test, and run n8n workflows from MCP clients

### Databases

- [SQLite MCP](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/sqlite) — archived reference server
- [PostgreSQL MCP](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/postgres) — archived reference server
- [Supabase MCP](https://supabase.com/docs/guides/ai-tools/mcp)
- [Redis MCP](https://redis.io/docs/latest/integrate/redis-mcp/) — query and manage Redis data, streams, caches, and vector indexes
- [MongoDB MCP](https://www.mongodb.com/docs/mcp-server/overview/) — query and manage MongoDB deployments, collections, indexes, and Atlas resources
- [Elasticsearch MCP](https://www.elastic.co/docs/solutions/search/agent-builder/mcp-server) — query Elastic indices and Agent Builder tools from MCP clients

### Observability

- [Grafana MCP](https://github.com/grafana/mcp-grafana) — query dashboards, data sources, incidents, and observability data

### Deployment

- [Vercel MCP](https://vercel.com/docs/agent-resources/vercel-mcp) — manage Vercel projects and deployments, inspect logs, and search documentation

### Collaboration

- [Atlassian MCP](https://atlassian.github.io/atlassian-mcp-server/)

### Penetration Testing

- [Kali MCP Server](https://www.kali.org/tools/mcp-kali-server/) — connect Kali Linux tools to MCP clients such as Claude
- [Burp Suite MCP](https://github.com/c0tton-fluff/burp-mcp-server) — connect Burp Suite requests, history, and scanner findings to AI assistants such as Claude
- [Caido MCP](https://docs.caido.io/app/tutorials/mcp.html) — connect Caido projects and HTTP traffic to MCP clients

## Security Tools

- [OWASP ZAP](https://www.zaproxy.org/) — standalone web application security proxy and scanner

## CLI Tools

### Environment and Workflow

- [`mise`](https://mise.jdx.dev/) — pinned tool versions and reproducible project environments
- [Worktrunk (`wt`)](https://worktrunk.dev/) — Git worktree orchestration for parallel AI agents
- [`herdr`](https://herdr.dev/) — multiplex agent sessions from the VS Code terminal, locally or over Remote SSH
- [`direnv`](https://direnv.net/) — automatic directory-scoped environment loading
- [`portless`](https://github.com/vercel-labs/portless) — stable named local URLs for development servers and worktrees

### Web and Browser

- [Playwright CLI](https://playwright.dev/docs/getting-started-cli) — token-efficient browser automation for coding agents
- [`websocat`](https://github.com/vi/websocat) — command-line WebSocket client and data relay

### Cybersecurity

- [`mitmproxy`](https://docs.mitmproxy.org/stable/) — scriptable HTTP and HTTPS traffic inspection and debugging
- [ProjectDiscovery tools](https://projectdiscovery.io/open-source) — asset discovery, HTTP probing, crawling, port scanning, and vulnerability scanning

### General Development

- [`pnpm`](https://pnpm.io/) — fast, disk-efficient Node.js dependency management
- [`uv`](https://docs.astral.sh/uv/) — Python dependency, project, and virtual environment management
- [`gh`](https://cli.github.com/manual/) — GitHub issues, pull requests, reviews, and Actions
- [`rg`](https://github.com/BurntSushi/ripgrep) — fast repository search and file discovery
- [`fd`](https://github.com/sharkdp/fd) — fast, user-friendly file and directory discovery
- [`jq`](https://jqlang.org/manual/) — JSON inspection and transformation
- [`yq`](https://mikefarah.gitbook.io/yq/) — YAML inspection and transformation
