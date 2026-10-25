# Search

Offer a portable scoped search API with native database backends and optional search-engine adapters while keeping authorization authoritative.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- SEA-01 — Explicit index definitions
- SEA-02 — Durable indexing
- SEA-03 — Scoped queries
- SEA-04 — Backend adapters
- SEA-05 — Operational controls
- SEA-06 — Consumer integrations

## Native Goravel

- ORM
- Queue
- Events
- Cache
- Log

## Go and candidate adapters

- context
- optional SQLite FTS5/PostgreSQL text-search/Meilisearch adapter

## Optional integration ports

- [Defender](defender.md)
- [Tenancy](tenancy.md)
- [Media](media.md)
- [Documents](documents.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestSearchScopeBeforeCountsFacetsAndHighlights
- TestIndexRevisionAndDeleteResurrection
- TestBackendCapabilitiesAndQueryEscaping
- TestReindexCatchupAtomicSwitch
- TestSearchConsumerInstall

## Boundaries

No universal relevance equivalence, security from client filters alone, arbitrary SQL/Meilisearch filter strings or instant authorization from eventually consistent index updates.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Source transaction appends versioned index event → worker compares revision → upsert/delete idempotently → advance checkpoint only after confirmed adapter write. Query resolves authoritative scope before backend call, validates allowed filters and ranking options, then hydrates accessible hits. If access cannot be represented before facets/counts, disable those outputs or use a backend that can enforce it; filtering only returned hits is insufficient. Reindex builds a new generation from snapshot+change log, catches up, verifies, then atomically switches active alias and retains old generation for bounded recovery.

### Security-sensitive aggregation
A hidden record can leak through a count, facet label, spelling suggestion or highlighted text even when its row is dropped later. The backend authorization/filter contract must cover every output. When host policies are too complex to express in the index, return only current-authorized hydrated records without exact total/facets, or select a database-backed query strategy. Do not publish a false total computed from inaccessible hits.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [Goravel — Queues](https://www.goravel.dev/digging-deeper/queues.html) — Queue jobs and driver semantics; do not assume the default driver executes asynchronously.
- [Meilisearch — Security Overview](https://www.meilisearch.com/docs/capabilities/security/overview) — Search key/tenant filtering boundaries.
- [PostgreSQL — Full Text Search](https://www.postgresql.org/docs/current/textsearch.html) — Native search primitives; implementation must use documentation matching the pinned PostgreSQL major.
- [SQLite — FTS5](https://www.sqlite.org/fts5.html) — SQLite FTS5 capabilities; verify driver/build availability.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
