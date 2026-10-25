# Showcase data and publishing contract

Canonical source: `gorazana/ecosystem`. Public documentation/site target: `gorazana/gorazana.github.io`. Owner policy: versions remain `0.x.x` through real-application field trials. This document describes the implemented publication contract, not runtime package acceptance.

## Canonical records

- `catalog/entries.json`: component identity, type, public capability summary, ownership, provider boundaries, prerequisites and tests. Existing `SOURCE_REFERENCE.md` technical excerpts are not exported.
- `brand/glyphs.json`: the shared icon family. The existing Gorazana mark is identified in `showcase/BRAND_SOURCE.md`.
- `catalog/sources.json`: primary references, inherited source status, date and role.
- `catalog/showcase.json`: showcase navigation, component selection, application-pattern examples, explicit access policies and contact routes.
- `catalog/releases.json`: checked repository visibility, archival state and validated canonical-module release observations.
- `scripts/showcase_model.py`: allowlisted public projection and fail-closed badge rules.
- `scripts/showcase.py`: deterministic HTML, GitHub reference Markdown, icons, JSON, sitemap and build receipt.

## Three independent badge axes

**Availability:** Research means a specification, not installable code. Verification pending means no usable repository observation. Source preview means source exists, without a qualifying canonical release. Available · 0.x preview requires a nondraft release and a tag whose Go module matches that repository's canonical identity. Archived is distinct. No invented delivery dates or “soon” promises.

**Access:** `unannounced` is the default. `free-public` requires an explicit GitHub policy reference and a public repository observation. `members` and `commercial` require approved GitHub evidence plus a real GitHub contact destination. Private source does not imply membership, a price or permission to distribute. Repository license and paid support remain separate questions.

**Version:** select only syntactically valid 0.x semantic release versions. Sort numerically, label prereleases, reject drafts, foreign links, invalid tags, old namespace go.mod declarations and 1.x versions. A version is not a security certification. Existing package CI evidence remains in its source repository.

Example future policy (illustrative only, not active):

```json
{"component-id":{"model":"members","evidence_url":"https://github.com/gorazana/gorazana.github.io/blob/main/ACCESS.md","contact_url":"https://github.com/gorazana/gorazana.github.io/issues/new?template=access.yml"}}
```

No membership or commercial terms are created merely by this schema.

## Automatic publication

A public-site GitHub Actions workflow reads the canonical catalog on a six-hour schedule, manual dispatch and approved site changes. A repository-scoped **read-only deploy key** accesses the private catalog; the key is stored only as a site repository secret. The workflow uses its normal repository token for its own public generated references and Pages deployment, not a copied broad personal token.

The public workflow refreshes publicly readable release evidence when possible. An unavailable private repository does not erase the last recorded authenticated observation or acquire a false fresh timestamp. Maintainers use `scripts/refresh_releases.py` with their authenticated GitHub CLI to record private package observations, then commit the updated JSON. The scheduled build will publish those recorded updates. Read-only source access intentionally cannot commit changes into the private catalog.

The private-to-public boundary is the explicit generated `site/` file set. Original research archives, API credentials, deploy keys, private user notes and raw API responses must not be included. Only that safe static directory becomes a Pages artifact. Public Markdown references are generated from the same allowlisted fields and committed to the website repository so the site's GitHub links resolve to substantive files.

A failed API response, schema validation, render drift, test or public-output validation must fail or preserve prior evidence; it must not silently publish a fabricated version. Site builds carry the catalog content hash, exact source commit and observation timestamp. Schedules can be delayed by GitHub; this is not a real-time availability guarantee. If a scheduled workflow is disabled or its secret is revoked, the last published static site remains and its timestamp exposes age.

## Contact, subscription and commerce

Working issue templates route access questions, contributions and catalog corrections to the public website repository. GitHub Watch is the actual subscription mechanism. No fake email capture, sponsor account, checkout, price or recurring membership payment is provided. GitHub issues are public: never submit credentials, confidential contracts or exploit details. Request an appropriate private channel instead.

GitHub Pages is used for technical project information, not e-commerce, sensitive transactions or a commercial SaaS application. Any future checkout/account/membership service requires a separately suitable deployment. See GitHub's limits: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits .

## Operations

Run `python3 -B scripts/render.py`, `python3 -B scripts/validate.py`, `python3 -B scripts/validate_site.py`, and `python3 -B -m unittest discover -s tests -v`. Use `--check` on renderers in CI. JavaScript receives no GitHub credentials, calls no analytics service and does not fetch live repository APIs; local search works against generated card metadata. The documented hosting provider may log access under its own privacy policy.

The site deploy key should be reviewed/revoked when no longer required; deploy keys do not expire automatically. A future organization-managed GitHub App with read-only contents permission can replace it. Do not grant write access to the research repository merely for a public build.
