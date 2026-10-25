# Procurement

Requisition, sourcing, purchase orders, receiving and controlled matching.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- PROCUREMENT-01 — Requisitions, justification and approval
- PROCUREMENT-02 — Suppliers, quotes and purchase orders
- PROCUREMENT-03 — Partial receipts and inspection
- PROCUREMENT-04 — Order/receipt/invoice matching and exceptions
- PROCUREMENT-05 — Cancellation, returns and supplier performance

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

- [Directory](directory.md)
- [Inventory](inventory.md)
- [Budgets](budgets.md)
- [Invoicing](invoicing.md)
- [Workflows](workflows.md)

## Invariants

- Separation-of-duties policy can prohibit self-approval
- Receiving tolerance is enforced
- Duplicate supplier invoices are explicitly handled

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

Supplier, Requisition, Quote, PurchaseOrder, Receipt, Inspection, MatchException

Request -> approve -> order -> receive -> match/close; material changes restart required review.

## Research sources

- [ERPNext introduction](https://docs.frappe.io/erpnext/introduction) — Domain inventory and separation, not region-specific compliance.
