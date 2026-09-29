# Install

You need the product repo and Python 3. The desktop wizard is optional; the same steps work from the command line.

```bash
git clone https://github.com/Sheshiyer/snow-gloves-os.git
cd snow-gloves-os
./scripts/install.sh
make smoke
```

`install.sh` sets up the task bridge and Python deps. `make smoke` checks that events can move: bus up, a test event, a dry-run task, embeddings on the stub backend, a Sentinel sweep.

## Desktop wizard

The onboarding app is a signed desktop installer (macOS, Windows, Linux). Version 0.2.0 is a **new app** (`com.tryambakam.snowgloves.onboarding`). If you still have 0.1.x, install the new DMG or MSI. The updater will not find 0.2.0.

```bash
make app-install
make app-dev
```

The wizard walks tenant name, sources, and a first enable list. The Modules tab is the same catalog the website dashboard shows.

## After install

Print the interview for the runtime you actually use:

```bash
make onboard-prompt R=claude    # or cursor, codex, hermes, grok, …
```

Then [pick a runtime](/runtime) and [onboard](/onboard).
