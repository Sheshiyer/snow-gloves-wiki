# Onboard a company

The company does not live in the product repo. Onboarding copies a glove (tenant folder) and fills it from an interview.

## Four steps

1. **Interview.** Paste `make onboard-prompt R=<runtime>` into that runtime. It asks tenant, owner, company, voice, agents, one skill, connectors, runtimes. If a fact is missing it writes `FILL:` and asks again. It never guesses.
2. **Apply.** The interview's only file is `snowgloves-harvest.md`.

   ```bash
   python3 scripts/onboard.py --apply-harvest snowgloves-harvest.md --tenant acme
   ```

3. **Enable.** Start with one skill the first job needs.

   ```bash
   python3 scripts/onboard.py --list --category skills
   python3 scripts/onboard.py --enable ms-copywriting --tenant acme
   ```

   Only `add` and `pointer` cards can be enabled. Hold and refuse are shown on the dashboard and rejected here.

4. **Render** into the runtime ([runtime](/runtime)).

## What `FILL:` means

A `FILL:` line is not data. Lists skip it. Context files keep it so you can answer later. `open-questions.md` collects every one. Close a gap, re-run `--apply-harvest`, or edit the context file.

## Approvals

Anything that spends, posts, emails outside the company, or touches personal data waits. Load `connector-gate` before an external tool. The gate reads `tenants/<slug>/enabled.yaml` and stops if the connector is off.
