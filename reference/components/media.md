# Media

Manage scoped uploads, collections, immutable originals and reproducible derivatives over Goravel storage, with secure delivery and lifecycle rules.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- MED-01 — Secure ingest
- MED-02 — Collections and ownership
- MED-03 — Transformations
- MED-04 — Private delivery
- MED-05 — Storage lifecycle
- MED-06 — Consumer/UI integration

## Native Goravel

- Storage
- Queue
- Validation
- ORM
- Events
- Log

## Go and candidate adapters

- io
- mime
- image
- optional x/image processing adapter

## Optional integration ports

- [Defender](defender.md)
- [Tenancy](tenancy.md)
- [Documents](documents.md)
- [Search](search.md)
- [Audit](audit.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestUploadTypeSizeAndPathAttacks
- TestMediaScopeReferencesAndSignedAccess
- TestUploadCrashPromotionReplay
- TestConversionRecipeVersionAndLimits
- TestDeleteReferencedOrHeldAsset
- TestMediaConsumerNoWorkbenchImport

## Boundaries

Not a generic folder browser, virus scanner implementation, unlimited image processor, public CDN default or tenant database relocation engine.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Authorize owner collection → create intent → stream to private quarantine while enforcing limit/hash → validate content and scan if required → atomically publish metadata/reference and conversion outbox → promote storage artifact idempotently → ready. Storage and metadata are not one transaction: retain promotion receipts and reconcile orphan staging objects. Transformations read immutable original versions and never overwrite originals. Delete becomes tombstoned/pending until no live references/holds and approved grace; worker rechecks before removal.

### Dangerous content and client behavior
Do not serve user SVG/HTML inline from an application origin. The base allowlist excludes them; opt-in support requires sanitization and a separately isolated delivery origin with CSP. Filenames are display metadata only. Extracted EXIF can contain location; default public metadata output omits it. Thumbnail and PDF preview processing must not have unrestricted network access or host filesystem access.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [Goravel — Queues](https://www.goravel.dev/digging-deeper/queues.html) — Queue jobs and driver semantics; do not assume the default driver executes asynchronously.
- [Spatie — Laravel Medialibrary](https://github.com/spatie/laravel-medialibrary) — Collections, conversions and storage patterns.
- [OWASP — File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html) — Upload validation, limits, storage separation and unsafe content.
- [OWASP — SSRF Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html) — Destination validation, redirects and network egress boundaries.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
