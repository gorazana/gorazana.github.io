# Records (DMS)

Document Management System: governed business records, revisions, metadata, permissions and retention above file storage.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- RECORDS-01 — Document types, metadata definitions, tags, folders/cabinets and links
- RECORDS-02 — Immutable binary/version identifiers and explicit current-revision pointers
- RECORDS-03 — Checkout/check-in leases and optimistic edit conflicts
- RECORDS-04 — Record-level sharing, expiry and field-sensitive metadata views
- RECORDS-05 — Ingest quarantine, optional OCR/text extraction and permission-aware indexing
- RECORDS-06 — Review/approval, publication, legal holds and retention disposition
- RECORDS-07 — Provenance-preserving export, redacted derivatives and controlled restore

## Native Goravel

- Config
- ServiceProvider
- ORM/transactions where durable storage is selected
- Validation
- Route/middleware for selected HTTP adapter
- Events
- Queue only for asynchronous profile
- Log
- Artisan

## Go and candidate adapters

- context
- encoding/json
- time
- errors
- io; candidate libraries isolated behind tested ports

## Optional integration ports

- [Media](media.md)
- [Documents](documents.md)
- [Search](search.md)
- [Workflows](workflows.md)
- [Audit](audit.md)
- [Content Safety](content-safety.md)
- [Notifications](notifications.md)

## Invariants

- Storage possession or a signed URL is not record authorization
- Concurrent check-in cannot overwrite someone else’s revision
- OCR/index snippets inherit current record permission
- Redaction creates a separately controlled derivative
- Retention expiry does not override a legal hold
- No archival/compliance certification is implied by a hash or immutable API

## Acceptance requirements

- Negative and boundary tests for each stated invariant
- Concurrent/stale revision and duplicate-command tests for the principal transition
- Real selected database transaction, migration-upgrade and recovery tests
- Cross-scope list/detail/count/export/relationship checks
- No real external side effects in ordinary fixtures; live-provider tests separately labeled
- Selected renderer tested for validation, keyboard, narrow layout and error states

## Boundaries

Owns the stated contract, not another identity, router, ORM, cache or queue engine. Host-specific fields, authority, retention, legal/tax/curriculum rules and credentials remain explicit application profiles. Optional integrations are not mandatory package imports.

## Model and lifecycle

Record, RecordType, MetadataSchema, BinaryVersion, Revision, CheckOutLease, AccessGrant, Hold, RetentionDecision, ExtractionReceipt

Ingest -> quarantine -> classify -> review -> active/revised -> hold/archive/dispose; a new file never silently replaces the evidentiary original.

## Research sources

- [Paperless-ngx upstream](https://github.com/paperless-ngx/paperless-ngx) — Document ingestion, metadata and retrieval comparison; not a copied Python implementation.
- [Mayan EDMS features](https://www.mayan-edms.com/) — Document versioning, permissions, links and workflows as DMS comparison.
