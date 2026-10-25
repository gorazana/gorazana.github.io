# Manufacturing

Versioned bills of materials, work orders and production evidence linked to stock and quality controls.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- MANUFACTURING-01 — BOM revisions, alternative materials and unit conversions
- MANUFACTURING-02 — Work-order release with capacity and material checks
- MANUFACTURING-03 — Material reservation, consumption, scrap and finished stock receipts
- MANUFACTURING-04 — Operations, workstations and accountable execution records
- MANUFACTURING-05 — Quality checkpoints, holds and approved rework
- MANUFACTURING-06 — Traceable batch/serial genealogy and cost allocation

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
- math/big
- time
- No universal production-optimization engine implied

## Optional integration ports

- [Inventory](inventory.md)
- [Procurement](procurement.md)
- [Assets](assets.md)
- [Timekeeping](timekeeping.md)
- [Workflows](workflows.md)
- [Accounting](accounting.md)

## Invariants

- A completed task does not prove material availability
- Quantities and cost precision remain explicit
- Unapproved BOM changes cannot alter released orders

## Acceptance requirements

- Negative authorization, cross-scope list/detail/export and stale-revision cases
- Duplicate, reordered, expired and concurrent requests for every consequential transition
- Selected SQLite/PostgreSQL adapter migration, rollback and concurrency tests
- Provider contract tests; fixtures and genuine live service evidence labeled separately
- Accessible/narrow/keyboard frontend tests for each supported renderer

## Boundaries

Reusable contract and lifecycle only. Host identity, tenant admission, jurisdiction, detailed business schema and operational deployment remain application-owned. Optional ports are alternatives, not mandatory package dependencies.

## Model and lifecycle

BillOfMaterials, BOMRevision, WorkOrder, Operation, Consumption, Lot, QualityHold

Approve BOM -> release order -> reserve -> execute -> inspect -> receive stock or rework.

## Research sources

- [ERPNext manufacturing](https://docs.frappe.io/erpnext/user/manual/en/manufacturing) — BOM and work-order comparison; production/quality rules remain domain-specific.
