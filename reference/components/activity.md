# Activity

Record queryable business activity with scoped actors, redacted changes, correlation IDs and transparent transactional guarantees.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- ACT-01 — Explicit event API
- ACT-02 — Typed change capture
- ACT-03 — Transaction participation
- ACT-04 — Readable history
- ACT-05 — Retention and delivery
- ACT-06 — Integration contracts

## Native Goravel

- ORM/transactions
- Events
- Queue
- Storage
- Log

## Go and candidate adapters

- context
- encoding/json
- time

## Optional integration ports

- [Defender](defender.md)
- [Tenancy](tenancy.md)
- [Audit](audit.md)
- [Workflows](workflows.md)
- [Outbox](outbox.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestActivityRollbackAndDigestConflict
- TestActivityRedactionBoundsAndCycles
- TestActivityScopedPagination
- TestRetentionHoldAndArchiveFailure
- TestForwardedSecurityEventNotDuplicated

## Boundaries

Not database CDC, an authorization engine, a WORM archive, an immutable legal evidence guarantee or an event-sourcing replacement for all application state.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Validate trusted actor/scope → normalize UTC and references → redact registered sensitive fields before serialization → append with digest → commit in caller transaction when using TransactionRecorder. After commit, queue an outbox reference, not full secret-bearing data. Consumers deduplicate by event ID. The list reader resolves current authorization and scope each call. Retention selects bounded eligible rows and preserves archive receipts/holds; a failed archive does not authorize deletion.

### Distinguish three histories
A business activity row answers who changed a purchase request. A Defender security event answers why a login or permission change occurred. An Audit archive proves evidence integrity and retention under a documented threat model. Forward stable event IDs between packages without forcing all three to be installed. If a business transaction uses a different database from this activity store, use an outbox in the business database and document eventual recording.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [Goravel — Queues](https://www.goravel.dev/digging-deeper/queues.html) — Queue jobs and driver semantics; do not assume the default driver executes asynchronously.
- [Spatie — Laravel Activitylog](https://github.com/spatie/laravel-activitylog) — Business activity recording patterns, distinct from tamper-evident archives.
- [OWASP — Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) — Redaction, integrity, access control and safe operational logging.
- [CloudEvents](https://cloudevents.io/) — Portable event envelopes; not an event transport or delivery guarantee.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
