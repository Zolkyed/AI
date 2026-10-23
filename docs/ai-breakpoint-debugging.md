# AI-Assisted Breakpoint Debugging with MCP

An AI coding agent normally analyzes source code, logs, and test output. An MCP debugger server gives the agent access to a real debugger, allowing it to observe the program while it runs.

[DebugMCP](https://github.com/microsoft/DebugMCP) connects MCP-capable agents such as Codex, Claude Code, and GitHub Copilot to VS Code's debugger. The agent can:

- set and remove breakpoints;
- start, pause, restart, and stop debug sessions;
- step into, over, or out of code;
- inspect selected variables;
- evaluate expressions while execution is paused.

## Setup

1. Install the [DebugMCP VS Code extension](https://marketplace.visualstudio.com/items?itemName=ozzafar.debugmcpextension).
2. Open this repository in VS Code.
3. If DebugMCP does not offer to connect automatically, open the Command Palette and run **DebugMCP: Show Agent Selection Popup**.
4. Select your MCP-capable AI agent and restart the agent if necessary.
5. Build the project:

   ```sh
   pnpm run build
   ```

The repository's `.vscode/launch.json` contains a **Debug application** configuration with source maps enabled. This lets the debugger map the compiled JavaScript back to the TypeScript source.

## Example Workflow

Give the agent a specific symptom and ask it to collect runtime evidence before editing the code:

```text
Use DebugMCP to investigate why <observable symptom> occurs. Set a breakpoint
before <suspected operation>, start the Debug application configuration, and
inspect the relevant variables. Step through the failing path and explain the
root cause from runtime evidence before changing the code.
```

The agent should then:

1. Identify a useful breakpoint near the suspected failure.
2. Start the application through the debugger.
3. Reproduce the problem and wait for the breakpoint.
4. Inspect only the variables relevant to the investigation.
5. Step through the code until it can explain the incorrect behavior.
6. Apply a focused fix.
7. Run `pnpm run check` and reproduce the original scenario to verify the fix.

Conditional breakpoints are useful when a problem occurs only for a particular input or loop iteration. Runtime evidence should support the proposed root cause; reaching a breakpoint alone does not prove the diagnosis.

## Security

DebugMCP exposes powerful debugger operations through a local endpoint. Keep it bound to its default loopback interface and do not expose its port to a LAN or an untrusted network. Inspect only the variables needed for the investigation, because process memory can contain credentials or other sensitive values.

## Troubleshooting

If the agent cannot see the debugging tools:

- confirm that the DebugMCP extension is installed and running;
- register the agent from the DebugMCP Command Palette action;
- restart the agent after registration.

If a breakpoint is not hit:

- verify the source file and line number;
- rebuild the project;
- confirm that source maps are enabled;
- confirm that the correct launch configuration and language debugger are being used.

See the [DebugMCP troubleshooting guide](https://github.com/microsoft/DebugMCP#troubleshooting) for more details.
