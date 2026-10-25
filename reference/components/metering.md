# Metering

Versioned, deduplicated usage measurements and reconciled aggregates independent of payment settlement.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- METERING-01 — Stable event IDs, subjects, dimensions, units and timestamps
- METERING-02 — Ingress validation, duplicate receipts and bounded cardinality
- METERING-03 — Versioned windows with late-data and correction rules
- METERING-04 — Usage reconciliation and explainable customer-visible totals
- METERING-05 — Quota signals without conflating measurements with permissions
- METERING-06 — Exports to billing and analytics through idempotent contracts

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
- time
- math/big
- encoding/json
- OpenMeter adapter optional; local SQL profile requires its own conformance

## Optional integration ports

- [Outbox](outbox.md)
- [Billing](billing.md)
- [Analytics](analytics.md)
- [Licensing](licensing.md)
- [Observability](observability.md)

## Invariants

- Retries cannot double-charge usage
- Measurement is not payment or entitlement proof
- Changed aggregation rules cannot rewrite issued invoices silently

## Acceptance requirements

- Negative authorization, cross-scope list/detail/export and stale-revision cases
- Duplicate, reordered, expired and concurrent requests for every consequential transition
- Selected SQLite/PostgreSQL adapter migration, rollback and concurrency tests
- Provider contract tests; fixtures and genuine live service evidence labeled separately
- Accessible/narrow/keyboard frontend tests for each supported renderer

## Boundaries

Reusable contract and lifecycle only. Host identity, tenant admission, jurisdiction, detailed business schema and operational deployment remain application-owned. Optional ports are alternatives, not mandatory package dependencies.

## Model and lifecycle

MeterDefinition, UsageEvent, Receipt, Window, AggregateRevision

Accept -> deduplicate -> aggregate -> reconcile -> export; late corrections generate revised evidence.

## Research sources

- [OpenMeter — usage measurement](https://github.com/openmeterio/openmeter) — Usage event/aggregation reference, distinct from settlement and accounting.
- [CloudEvents specification](https://github.com/cloudevents/spec) — Event envelope interoperability; not an exactly-once delivery guarantee.
