# Assets

Individually tracked assets, accountable custody and controlled disposal.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- ASSETS-01 — Categories, identifiers, acquisition and location
- ASSETS-02 — Checkout, acknowledgement and return
- ASSETS-03 — Condition, maintenance and warranty
- ASSETS-04 — Inspection evidence and history
- ASSETS-05 — Availability, loss and depreciation references

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
- [Procurement](procurement.md)
- [Audit](audit.md)

## Invariants

- One asset cannot have conflicting custodians
- Asset identifiers are scope-unique
- Disposal approval cannot erase custody history

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

Asset, Category, Custody, Transfer, Maintenance, Inspection, DisposalApproval

Acquire -> register -> assign/return/maintain -> retire/dispose.

## Research sources

- [ERPNext introduction](https://docs.frappe.io/erpnext/introduction) — Domain inventory and separation, not region-specific compliance.
