# Accounting

Controlled double-entry records and accounting periods.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- ACCOUNTING-01 — Chart, entities, dimensions and valid postings
- ACCOUNTING-02 — Balanced journals and reversals
- ACCOUNTING-03 — Allocations and receivables/payables aging
- ACCOUNTING-04 — Reconciliation, period locks and adjustments
- ACCOUNTING-05 — Traceable ledger/report profiles

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

- [Invoicing](invoicing.md)
- [Billing](billing.md)
- [Audit](audit.md)
- [Data Exchange](data-exchange.md)
- [Documents](documents.md)

## Invariants

- Posted debits and credits balance in declared currency
- Closed periods deny ordinary backdating
- Localization compliance needs validated evidence

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

Account, Dimension, Journal, JournalLine, Period, Lock, Allocation, Reconciliation

Draft -> validate -> approve -> post -> reconcile/close; correct by reversal/replacement.

## Research sources

- [ERPNext introduction](https://docs.frappe.io/erpnext/introduction) — Domain inventory and separation, not region-specific compliance.
