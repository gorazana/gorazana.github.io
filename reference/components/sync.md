# Sync

Synchronize selected domain data and offline commands between a local Goravel application and an authoritative server with explicit conflicts, revocation and resumable checkpoints.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- SYN-01 — Opt-in replicated domains
- SYN-02 — Durable local outbox
- SYN-03 — Authoritative push/pull
- SYN-04 — Conflict policies
- SYN-05 — Revocation and resync
- SYN-06 — Offline operations

## Native Goravel

- ORM/transactions
- Queue
- Route
- Events
- Crypt
- Log

## Go and candidate adapters

- context
- encoding/json
- durable mutation and checkpoint IDs

## Optional integration ports

- [Tenancy](tenancy.md)
- [Defender](defender.md)
- [API Kit](api-kit.md)
- [Data Exchange](data-exchange.md)
- [Audit](audit.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestSyncTwoNodeCrashAndDuplicateMutation
- TestSyncConflictNoSilentOverwrite
- TestPullHighWaterMarkAndDeletion
- TestSyncScopeRevocationAndDeviceBinding
- TestOfflineAllowlistSchemaUpgradeAndEncryption
- TestResyncInterruptedBootstrap

## Boundaries

Not database placement transfer, general PostgreSQL/SQLite replication, arbitrary model syncing, universal CRDT engine, file backup or permission to perform every online action offline.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Local domain transaction stores allowed command/outbox → send authenticated batch with device ID → server resolves current tenant/organisation access → deduplicate mutation/digest → check base revision and domain rules → commit business change+receipt+change log → return applied/conflict/denied. Pull captures an authoritative high-water mark and returns bounded changes up to it with signed scoped cursor. Client applies page and checkpoint in one local transaction. If access changes or tombstone horizon is exceeded, require a controlled resync and purge denied cache according to documented device policy. Remote revocation cannot retract data already copied to an offline device.

### Clear authority model
One machine can be a complete standalone application. Once a scope opts into synchronization, exactly one designated server is authoritative for that scope's accepted domain changes. Optional peer convenience cannot silently create two masters. A school's finance and central-admin PCs receive only authorized collections. Not all data must replicate to every device.

### Fundamental offline limit
A revoked user with an offline copy can still possess already delivered bytes. The system can stop future server access and request purge on reconnect; it cannot honestly promise instant remote erasure without an independently managed device/control system. Encryption and short offline leases reduce exposure but do not change that fact.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [Goravel — Queues](https://www.goravel.dev/digging-deeper/queues.html) — Queue jobs and driver semantics; do not assume the default driver executes asynchronously.
- [Apache CouchDB — Replication and Conflicts](https://docs.couchdb.org/en/stable/replication/conflicts.html) — Conflict preservation and explicit reconciliation concepts.
- [WatermelonDB — Sync Backend](https://watermelondb.dev/docs/Sync/Backend) — Change cursors, deletion and push/pull consistency design reference.
- [SQLite — Online Backup API](https://www.sqlite.org/backup.html) — Consistent snapshots; copying only a live main database file is insufficient.
- [RFC 9700 — OAuth 2.0 Security BCP](https://www.rfc-editor.org/rfc/rfc9700.html) — Modern OAuth security requirements for external integration authorization.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
