# Pick a runtime

Snow Gloves does not lock you to one agent. You choose the seat you already work in. The product writes skills, MCP config, and rules into that seat's own folders.

| Runtime | When to pick it |
|---|---|
| Cursor | You live in the editor and want `AskQuestion` in plan mode |
| Claude Code | You write and review in Claude |
| Codex | Code work on a second profile |
| Hermes | Chat you already use, including the bus on port 4100 |
| Grok | Grok CLI |
| OpenCode | OpenCode on the host |
| OpenClaw / Muse | Only if you already run them |
| generic | Copy files out of the tenant folder into anything else |

List ids:

```bash
python3 scripts/onboard.py --prompt cursor
```

Paste that prompt into the runtime **in plan mode**. One question at a time. Do not install skills during the interview.

After harvest, render only what you enabled:

```bash
python3 scripts/onboard.py --render-adapter cursor --tenant acme
python3 scripts/onboard.py --render-adapter cursor --tenant acme --write
```

A dry run is the default. `--write` merges into existing config; it does not wipe your MCP file.

Muse is a placeholder. Do not `--write` it until you have confirmed the paths yourself.
