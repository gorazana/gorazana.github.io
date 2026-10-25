# Backups

Coordinate consistent application/database snapshots, encrypted artifact storage, retention and rehearsed restoration through explicit provider capabilities.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- BAK-01 — Explicit backup plans
- BAK-02 — Consistent snapshots
- BAK-03 — Encrypted manifests
- BAK-04 — Restore verification
- BAK-05 — Retention and holds
- BAK-06 — Recovery operations

## Native Goravel

- Storage
- Queue
- Schedule
- Crypt
- Log

## Go and candidate adapters

- io
- crypto/sha256
- SQLite backup/PostgreSQL tooling
- optional restic adapter

## Optional integration ports

- [Tenancy](tenancy.md)
- [Schedules](schedules.md)
- [Audit](audit.md)
- [Notifications](notifications.md)
- [Observability](observability.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestSQLiteBackupConcurrentWritesAndWAL
- TestPostgresRestoreVersionAndSchema
- TestBackupKeyLossTamperingAndManifest
- TestRestoreDestinationAndOverwriteGuard
- TestRetentionChainHoldsAndLastVerifiedBackup
- TestInterruptedBackupAndMultiSourceTruth

## Boundaries

Not general disk cleanup, arbitrary rm/prune automation, backup by copying live database main files, universal cross-database atomic snapshot or a guarantee against ransomware when backup keys and storage share the same compromised account.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Authorize plan → acquire source consistency mechanism → produce snapshot in staging → hash/encrypt/upload → publish immutable manifest → verify repository integrity → restore to isolated target → run database/application checks → label restore-verified. Multi-database plans either coordinate a host quiescence boundary/checkpoint or clearly record separate snapshot times; no false atomicity. Restore first generates a target plan and compares current destination identity; overwrite requires explicit approval. Retention validates dependency graph and holds immediately before deleting only owned snapshot objects.

### Not a cache cleaner
Go build caches, npm caches, temporary development checkouts and PostgreSQL data directories are not interchangeable. This package backs up explicit application data; it must never classify arbitrary developer folders as obsolete or clean them to free disk. Restore verification uses owned temporary locations with manifests and denies symlink/path escapes. Tests never target an existing user's live database.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [Goravel — Queues](https://www.goravel.dev/digging-deeper/queues.html) — Queue jobs and driver semantics; do not assume the default driver executes asynchronously.
- [restic — Working with Repositories](https://restic.readthedocs.io/en/stable/045_working_with_repos.html) — Backup snapshots and repository checks; restore verification remains necessary.
- [SQLite — Online Backup API](https://www.sqlite.org/backup.html) — Consistent snapshots; copying only a live main database file is insufficient.
- [PostgreSQL 16 — Backup and Restore](https://www.postgresql.org/docs/16/backup.html) — Logical, physical and continuous-archive approaches have distinct guarantees.
- [Amazon S3 — Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html) — Object version retention and legal holds; different from a local hash chain.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
