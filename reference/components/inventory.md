# Inventory

Stock movements, allocations and availability with an authoritative ledger.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- INVENTORY-01 — SKUs, units, lots and serials
- INVENTORY-02 — Warehouses, bins, transfers and counts
- INVENTORY-03 — Immutable receipts/issues/adjustments
- INVENTORY-04 — Reservations, expiry and consumption
- INVENTORY-05 — Reorder/reconciliation and valuation references

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

- [Commerce](commerce.md)
- [Procurement](procurement.md)
- [Audit](audit.md)
- [Data Exchange](data-exchange.md)
- [Outbox](outbox.md)

## Invariants

- Reservation and stock updates are atomic
- Movement deduplication prevents double counting
- Unit conversion and serial uniqueness are explicit

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

Item, Unit, Warehouse, Bin, StockMovement, Lot, Serial, Reservation, Count

Receive/count -> available -> reserve -> allocate/consume; corrections use compensating movements.

## Research sources

- [ERPNext introduction](https://docs.frappe.io/erpnext/introduction) — Domain inventory and separation, not region-specific compliance.
