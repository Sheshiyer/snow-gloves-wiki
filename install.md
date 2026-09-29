# Install

You need the product repo and Python 3. Install **Cursor or Claude Code first** — the first-hour interview runs inside that app, not in the installer. The desktop wizard is optional.

**New Mac Mini (use the product, do not compile Tauri):** [MAC-MINI-SETUP.md](https://github.com/Sheshiyer/snow-gloves-os/blob/chore/consolidate-modular/docs/MAC-MINI-SETUP.md).

`./scripts/install.sh` is **not** “the glove is live.” It checks tools, installs the Paperclip CLI package if missing, installs Python deps, and writes `.snowgloves.env`. Then it prints the four onboarding steps (`python3 scripts/onboard.py --steps`). It does **not** start a bus, enable catalog modules, or run the legacy tenant prompt.

```bash
git clone https://github.com/Sheshiyer/snow-gloves-os.git
cd snow-gloves-os
./scripts/install.sh
make doctor
make smoke
make onboard-prompt R=cursor    # or claude, codex, hermes, grok, …
```

That is the first hour: doctor, smoke, then the interview prompt. Paste the prompt into the runtime you actually use, in plan mode. Then [pick a runtime](/runtime) and [onboard](/onboard) (apply, one enable, render). After smoke, start the bus yourself with `make hermes` and leave that terminal open (it is not a daemon).

The optional interactive tenant + sources prompt is still `make onboard` (`scripts/onboard.py --init-tenant`). Use it only if you want that old flow.

## What is still not running

- **Hermes** is a foreground HTTP listener (`make hermes` on port 4100). It is not a daemon. `make smoke` starts it for the test, then you are back to starting it yourself when you need the bus.
- **Paperclip** in `install.sh` is the `paperclipai` npm CLI. The host instance (`paperclip.tn.local`) is still a placeholder; the smoke test talks to it in dry-run.
- **Embeddings** use the stub backend unless `NVIDIA_API_KEY` is set.
- **Catalog modules are not auto-enabled.** Nothing is on until you `--enable` an `add` or `pointer` card after the harvest. `inference-sh` skill packs are not vendored; pick a catalog `add` skill such as `ms-copywriting`.
- **Gmail** is not live. Do not enable mail connectors on a blank machine.

`make smoke` checks that events can move for a moment: bus up, a test event, a dry-run task, embeddings on the stub (unless you set a key), a Sentinel sweep.

## Desktop wizard vs `make app-dev`

The onboarding app is a signed desktop installer (macOS, Windows, Linux). Version 0.2.0 is a **new app** (`com.tryambakam.snowgloves.onboarding`). If you still have 0.1.x, install the new DMG or MSI. The updater will not find 0.2.0.

On a Mini, use a **notarized** 0.2.0 DMG from GitHub Releases, or skip the GUI. The wizard still needs the git clone on disk (it shells out to `scripts/doctor.sh` and `make smoke`). Leave the Paperclip UUID empty.

`make app-dev` is for **developers emulating the wizard** from a clone. It needs Node 20+, Rust (`rustup`), and Xcode Command Line Tools. It opens a GUI; do not leave it running in an unattended session.

```bash
make app-install    # npm install in apps/onboarding
make app-dev        # npm run tauri dev — Vite on :5180 + native window
```

`make app-build` produces `apps/onboarding/src-tauri/target/release/bundle/`. It tries to sign with Thoughtseed’s Developer ID. Without that cert in Keychain it fails. An unsigned local `.app` is the wrong artifact for a Mini (Gatekeeper). Skip signing only for local debug: `npx tauri build` with `signingIdentity` set to `-`. Signed + notarized builds come from CI.

The wizard walks doctor, tenant name, optional Paperclip UUID, sources, and smoke. It does **not** run the plan-mode interview. The Modules tab is the same catalog the website dashboard shows. Enabling still waits on you; install does not turn cards on.
