# Facilities

Spaces, maintenance requests and service work with documented verification.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- FACILITIES-01 — Sites, buildings, rooms and characteristics
- FACILITIES-02 — Fault requests and assignment
- FACILITIES-03 — Work orders, parts and execution
- FACILITIES-04 — Preventive schedules and completion evidence
- FACILITIES-05 — Vendor references, downtime and restrictions

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

- [Assets](assets.md)
- [Inventory](inventory.md)
- [Schedules](schedules.md)
- [Notifications](notifications.md)

## Invariants

- High-risk closure requires configured verification
- Offline reports cannot silently clear current restrictions
- Parts/closure references are idempotent

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

Site, Space, EquipmentRef, ServiceRequest, WorkOrder, MaintenancePlan, Inspection

Report -> triage -> authorize -> execute -> inspect -> close.

## Research sources

- [ERPNext introduction](https://docs.frappe.io/erpnext/introduction) — Domain inventory and separation, not region-specific compliance.
- [OpenProject guide](https://www.openproject.org/docs/user-guide/) — Project, work-package, time/cost and decision vocabulary.
