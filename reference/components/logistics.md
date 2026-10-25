# Logistics

Shipments, carrier observations and exception handling linked to authoritative orders and inventory.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- LOGISTICS-01 — Shipment plans, packages, locations and tracking identifiers
- LOGISTICS-02 — Idempotent carrier-label and dispatch requests
- LOGISTICS-03 — Partial shipments, delivery attempts, returns and damage exceptions
- LOGISTICS-04 — Signed/verified inbound carrier observations and reconciliation
- LOGISTICS-05 — Cost estimates separate from final provider settlement
- LOGISTICS-06 — Proof-of-delivery evidence with restricted personal data

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
- net/http
- Carrier-specific SDK adapters only after contract/credential tests

## Optional integration ports

- [Commerce](commerce.md)
- [Inventory](inventory.md)
- [Connectors](connectors.md)
- [Webhooks](webhooks.md)
- [Geospatial](geospatial.md)
- [Records (DMS)](records.md)

## Invariants

- A carrier webhook does not grant stock or payment authority
- Duplicate dispatch cannot purchase duplicate labels silently
- Estimated arrival never becomes a guaranteed service commitment

## Acceptance requirements

- Negative authorization, cross-scope list/detail/export and stale-revision cases
- Duplicate, reordered, expired and concurrent requests for every consequential transition
- Selected SQLite/PostgreSQL adapter migration, rollback and concurrency tests
- Provider contract tests; fixtures and genuine live service evidence labeled separately
- Accessible/narrow/keyboard frontend tests for each supported renderer

## Boundaries

Reusable contract and lifecycle only. Host identity, tenant admission, jurisdiction, detailed business schema and operational deployment remain application-owned. Optional ports are alternatives, not mandatory package dependencies.

## Model and lifecycle

Shipment, Package, TrackingEvent, CarrierRequest, DeliveryProof, ReturnLeg

Plan -> allocate -> label -> hand over -> observe -> deliver/exception -> reconcile.

## Research sources

- [ERPNext stock](https://docs.frappe.io/erpnext/user/manual/en/stock) — Inventory/logistics boundary comparison; financial stock ownership stays authoritative.
