# Analytics

Versioned business metrics, approved event capture and governed reports.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- ANALYTICS-01 — Metric numerator, denominator, unit, grain and owner
- ANALYTICS-02 — Explicit source projections and freshness
- ANALYTICS-03 — Scoped dashboards and drill-through
- ANALYTICS-04 — Reproducible snapshots and export
- ANALYTICS-05 — Versioned event schemas, consent, data minimization and optional warehouse adapters

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

- [Data Exchange](data-exchange.md)
- [Documents](documents.md)
- [Search](search.md)
- [Observability](observability.md)
- [Outbox](outbox.md)
- [Connectors](connectors.md)

## Invariants

- Aggregates cannot leak restricted populations
- Changed definitions require honest comparability notes
- Do not record secrets or unrestricted payloads in trackers

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

MetricDefinition, Projection, RefreshReceipt, Dashboard, ReportSnapshot, EventSchema, Consent

Define event/metric -> authorize capture -> validate projection -> compute -> authorize query/export.

## Research sources

- [OpenProject guide](https://www.openproject.org/docs/user-guide/) — Project, work-package, time/cost and decision vocabulary.
- [ODK](https://docs.getodk.org/) — Versioned forms and governed field evidence.
