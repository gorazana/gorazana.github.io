# Collaboration

Shared editor sessions, changes and reviewable conflict recovery above a vetted collaboration engine.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- COLLABORATION-01 — Document-scoped sessions and editing capabilities
- COLLABORATION-02 — Explicit CRDT/OT provider and protocol/version compatibility matrix
- COLLABORATION-03 — Snapshots, operation limits and compaction with recoverable checkpoints
- COLLABORATION-04 — Presence and cursors separated from permanent content
- COLLABORATION-05 — Revoked editor handling during offline reconnect and shared-link expiration
- COLLABORATION-06 — Export and recovery without assuming all domain actions can merge

## Native Goravel

- Config
- ServiceProvider
- Validation
- Log
- Artisan
- ORM transactions for selected durable profiles
- Route/middleware for HTTP adapters
- Events/Queue only where declared

## Go and candidate adapters

- context
- io
- encoding/json
- Yjs or Automerge protocol adapter — implementation/bindings unverified

## Optional integration ports

- [Realtime](realtime.md)
- [History](history.md)
- [Records (DMS)](records.md)
- [Audit](audit.md)
- [Sync](sync.md)

## Invariants

- Concurrent text convergence does not authorize business transitions
- Old offline clients cannot restore revoked access
- Compaction must preserve an explicit recovery path

## Acceptance requirements

- Negative authorization, cross-scope list/detail/export and stale-revision cases
- Duplicate, reordered, expired and concurrent requests for every consequential transition
- Selected SQLite/PostgreSQL adapter migration, rollback and concurrency tests
- Provider contract tests; fixtures and genuine live service evidence labeled separately
- Accessible/narrow/keyboard frontend tests for each supported renderer

## Boundaries

Reusable contract and lifecycle only. Host identity, tenant admission, jurisdiction, detailed business schema and operational deployment remain application-owned. Optional ports are alternatives, not mandatory package dependencies.

## Model and lifecycle

CollaborativeDocument, ChangeBatch, Snapshot, EditorLease, Conflict

Open authorized document -> submit changes -> merge according to declared engine -> checkpoint -> revoke or recover.

## Research sources

- [Yjs — shared data types](https://github.com/yjs/yjs) — Collaboration reference; a CRDT library does not establish tenant authorization.
- [Automerge — local-first data structures](https://github.com/automerge/automerge) — Alternative collaboration model; bindings and protocol compatibility require explicit tests.
