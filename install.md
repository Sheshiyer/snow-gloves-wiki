# Install

You need the product repo and Python 3. The desktop wizard is optional; the same steps work from the command line.

`./scripts/install.sh` is **not** “the glove is live.” It checks tools, installs the Paperclip CLI package if missing, installs Python deps, and writes `.snowgloves.env`. Then it prints the four onboarding steps (`python3 scripts/onboard.py --steps`). It does **not** start a bus, enable catalog modules, or run the legacy tenant prompt.

```bash
git clone https://github.com/Sheshiyer/snow-gloves-os.git
cd snow-gloves-os
./scripts/install.sh
make doctor
make smoke
make onboard-prompt R=claude    # or cursor, codex, hermes, grok, …
```

That is the first hour: doctor, smoke, then the interview prompt. Paste the prompt into the runtime you actually use, in plan mode. Then [pick a runtime](/runtime) and [onboard](/onboard) (apply, one enable, render).

The optional interactive tenant + sources prompt is still `make onboard` (`scripts/onboard.py --init-tenant`). Use it only if you want that old flow.

## What is still not running

- **Hermes** is a foreground HTTP listener (`make hermes` on port 4100). It is not a daemon. `make smoke` starts it for the test, then you are back to starting it yourself when you need the bus.
- **Paperclip** in `install.sh` is the `paperclipai` npm CLI. The host instance is still a placeholder; the smoke test talks to it in dry-run.
- **Embeddings** use the stub backend unless `NVIDIA_API_KEY` is set.
- **Catalog modules are not auto-enabled.** Nothing is on until you `--enable` an `add` or `pointer` card after the harvest.

`make smoke` checks that events can move for a moment: bus up, a test event, a dry-run task, embeddings on the stub (unless you set a key), a Sentinel sweep.

## Desktop wizard

The onboarding app is a signed desktop installer (macOS, Windows, Linux). Version 0.2.0 is a **new app** (`com.tryambakam.snowgloves.onboarding`). If you still have 0.1.x, install the new DMG or MSI. The updater will not find 0.2.0.

```bash
make app-install
make app-dev
```

The wizard walks tenant name, sources, and a first enable list. The Modules tab is the same catalog the website dashboard shows. Enabling still waits on you; install does not turn cards on.
