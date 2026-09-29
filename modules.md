# Modules

The catalog is the shelf. A card is a pointer to a skill, MCP server, plugin, playbook, or connector. The product does not copy the upstream repo into your tenant until you enable an `add` card.

| Kind | You can turn it on | What happens |
|---|---|---|
| **add** | Yes | Rendered into your runtime |
| **pointer** | Yes | Listed as reference. Do not install a second copy (the host already has it, or it is read-only). |
| **hold** | No | Waiting on a decision |
| **refuse** | No | Reviewed and rejected |

High-risk cards (send, spend, public post) need approval even after enable.

## How you choose

The [Modules dashboard](https://sheshiyer.github.io/snow-gloves-os/) (GitHub Pages) and the desktop app show the same list. Filter by desk, runtime, and disposition. Hold and refuse stay visible and grey.

Command line:

```bash
python3 scripts/onboard.py --list --json
python3 scripts/onboard.py --enable ms-product-marketing,ms-copywriting --tenant acme
```

Start with the one skill the first job needs. A pile of unused skills is how work goes to the wrong desk.
