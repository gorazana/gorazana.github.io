# Documents

Generate traceable, private document artifacts from trusted templates and scoped data, with replaceable renderers and reproducible template versions.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- DOC-01 — Trusted template registry
- DOC-02 — Generation operations
- DOC-03 — Renderer contracts
- DOC-04 — Private storage and verification
- DOC-05 — Print-ready behavior
- DOC-06 — Domain examples

## Native Goravel

- View
- Storage
- Queue
- Validation
- ORM
- Log

## Go and candidate adapters

- html/template
- optional Maroto or isolated Gotenberg renderer

## Optional integration ports

- [Media](media.md)
- [Localization](localization.md)
- [Defender](defender.md)
- [Tenancy](tenancy.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestDocumentFormatCapabilityAndVersions
- TestRendererNoNetworkOrLocalFileEscape
- TestDocumentIdempotentRecoveryAndPrivateRead
- TestPrintLayoutsFontsAndLocales
- TestConsumerReceiptAndSchoolReport

## Boundaries

No arbitrary uploaded executable templates, office editor, universal PDF/A/signature certification, implicit cross-database snapshot consistency or embedding all office conversion engines in every app.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Authorize template/data → validate schema and format capability → resolve immutable template/assets → freeze permitted data revision → persist generation intent → render in bounded sandbox → stream artifact and hash → publish ready receipt only after verified storage → serve through current authorized download. Retry uses the original template/data digest, not whatever template is newest today. Cancellation marks stop requested and cleans staging artifacts only after worker termination; do not remove an output another completed generation references.

### Honest output contracts
`application/pdf` is not proof of PDF/A, accessibility tagging, cryptographic signing or archival conformity. Each claimed format/profile needs a selected renderer and independent validator. Do not promise arbitrary CSS behaves identically across Chromium and a native layout engine. PDF templates and HTML templates may share data contracts but remain explicit different renderer assets. Font files are application assets governed by their own licenses; do not redistribute unlicensed fonts in this package.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [Goravel — Queues](https://www.goravel.dev/digging-deeper/queues.html) — Queue jobs and driver semantics; do not assume the default driver executes asynchronously.
- [Go — package html/template](https://pkg.go.dev/html/template) — Contextual escaping with trusted templates and untrusted data.
- [Gotenberg — Introduction](https://gotenberg.dev/docs/getting-started/introduction) — External document-rendering service; optional infrastructure dependency.
- [Gotenberg — HTML to PDF](https://gotenberg.dev/docs/convert-with-chromium/convert-html-to-pdf) — Chromium rendering capabilities and request model.
- [Gotenberg — Outbound URL Filtering](https://gotenberg.dev/docs/outbound-url-filtering) — Renderer egress restrictions and SSRF concerns.
- [Maroto — Source](https://github.com/johnfercher/maroto) — Candidate native Go layout/PDF adapter; validate maintenance, fonts and output fidelity before selection.
- [OWASP — File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html) — Upload validation, limits, storage separation and unsafe content.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
