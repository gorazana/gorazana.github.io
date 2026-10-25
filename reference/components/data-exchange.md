# Data Exchange

Provide streamed, scoped CSV/XLSX import and export with dry-run validation, resumable batches, per-row receipts and private downloads.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- IO-01 — Explicit schemas
- IO-02 — Dry-run and preview
- IO-03 — Commit and recovery
- IO-04 — Safe export
- IO-05 — Large-file limits
- IO-06 — Operations and examples

## Native Goravel

- Storage
- Validation
- ORM
- Queue
- Log

## Go and candidate adapters

- encoding/csv
- archive/zip
- io
- Excelize XLSX candidate

## Optional integration ports

- [Defender](defender.md)
- [Tenancy](tenancy.md)
- [Media](media.md)
- [Notifications](notifications.md)
- [Audit](audit.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestImportDryRunNoSideEffects
- TestImportChunkCrashReplayAndChangedSource
- TestImportZipBombRowsAndMemoryBound
- TestSpreadsheetFormulaInjectionAndTypedCells
- TestExportScopeSnapshotAndRevokedDownload
- TestRowPolicyAndPartialFailureReport

## Boundaries

Not arbitrary SQL import, a spreadsheet calculation engine, unbounded memory ingestion, automatic macro/formula execution or a promise a dry-run preview guarantees later commit under changed business state.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Receive already authorized private file reference → validate type/limits/hash → parse streaming → mapping/field authorization → dry-run validation or durable commit job. Commit revalidates current business constraints and scope, applies one transactional chunk, records receipts, advances cursor. Restart verifies identical source/mapping digest. Export freezes an authorized query boundary, streams rows, protects spreadsheet text, writes artifact then publishes ready. Download rechecks current permission; revoked user cannot fetch last night's file merely knowing its ID.

### Cell interpretation and dry-run truth
A string that a spreadsheet opens as a formula is dangerous even when CSV-quoted. The package must test its chosen defense in actual supported spreadsheet software or label the residual limitation; typed XLSX text is preferred. Never evaluate user workbook formulas or macros. Dry-run validates one observed snapshot; before commit, the host can have changed and must be checked again. Exports of learning/HR data require scoped private artifacts and retention controls, not public download URLs.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [Goravel — Queues](https://www.goravel.dev/digging-deeper/queues.html) — Queue jobs and driver semantics; do not assume the default driver executes asynchronously.
- [OWASP — File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html) — Upload validation, limits, storage separation and unsafe content.
- [Excelize — Streaming Worksheet](https://xuri.me/excelize/en/stream.html) — Streaming spreadsheet export/import building blocks and resource management.
- [OWASP — CSV Injection](https://community.owasp.org/attacks/CSV_Injection) — Spreadsheet formula execution risks in exported data.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
