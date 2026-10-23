# Development

## Requirements

- Node.js 22 or newer
- pnpm 11.22.0
- mise
- Git

## Setup

Install the locked dependencies:

```sh
mise install --locked direnv node pnpm uv
pnpm install --frozen-lockfile
```

To enable the repository's unrestricted AI CLI aliases in the current Bash session, source [`.bashrc`](../.bashrc):

```sh
source .bashrc
```

These aliases bypass each agent's normal permission checks and should only be used inside an appropriately isolated environment.

## Commands

| Command               | Purpose                                                  |
| --------------------- | -------------------------------------------------------- |
| `pnpm run format`     | Format supported files with Prettier.                    |
| `pnpm run lint`       | Run ESLint with no warnings allowed.                     |
| `pnpm run typecheck`  | Type-check without emitting files.                       |
| `pnpm test`           | Run the test suite once.                                 |
| `pnpm run test:watch` | Run tests in watch mode.                                 |
| `pnpm run check`      | Check formatting, linting, types, tests, and whitespace. |
| `pnpm run fix`        | Apply automatic formatting and lint fixes.               |
| `pnpm run build`      | Create the production build in `dist/`.                  |
| `pnpm run verify`     | Run all checks and the production build.                 |

## Canonical Commands

```text
check  → format:check + lint + typecheck + test
fix    → format + lint --fix
build  → production build
verify → check + build
```

## Workflow

1. Make the smallest complete change.
2. Run `pnpm run check` during development.
3. Use `pnpm run fix` for automatically repairable failures.
4. Run `pnpm run verify` before committing or opening a pull request.

CI runs `pnpm run verify`, so a local passing result should match the repository's completion gate.

## Debugging

Build the project, then use the **Debug application** configuration in VS Code. It launches `dist/index.js` with source maps enabled.

### AI-Assisted Breakpoint Debugging

The recommended [DebugMCP](https://github.com/microsoft/DebugMCP) extension exposes the VS Code debugger to MCP-capable AI agents. It lets an agent set breakpoints, start and stop a debug session, step through execution, inspect selected variables, and evaluate expressions instead of inferring runtime behavior from source code alone.

1. Install the workspace-recommended **DebugMCP** extension (`ozzafar.debugmcpextension`) and the debugger extension required by the language being investigated.
2. Open the Command Palette and run **DebugMCP: Show Agent Selection Popup** if the extension does not offer to register the current agent automatically.
3. Build the project with `pnpm run build`. DebugMCP detects the existing **Debug application** launch configuration and its source-map settings.
4. Give the agent a concrete symptom and require runtime evidence before it edits code. For example:

   ```text
   Use DebugMCP to investigate why <observable symptom> occurs. Set a breakpoint
   before <suspected operation>, start the Debug application configuration,
   inspect only the relevant variables, and step through the failing path.
   Explain the root cause from runtime evidence before changing the code.
   ```

5. After the agent proposes or applies a fix, run `pnpm run check` and reproduce the original path to confirm the breakpoint observations and behavior have changed as expected.

Use conditional breakpoints to isolate a specific input or loop iteration, and prefer `list_variable_names` followed by targeted value inspection instead of reading an entire scope. Keep the server bound to its default loopback interface: it exposes debugger controls through a local, unauthenticated endpoint. Do not expose its port to a LAN or other untrusted network.

If the agent cannot see the debugger tools, restart it after registration and confirm that the DebugMCP server is running. If a breakpoint is not hit, verify the source path and line, rebuild the project, and confirm that source maps and the required language debugger are available. See the [DebugMCP troubleshooting guide](https://github.com/microsoft/DebugMCP#troubleshooting) for additional checks.
