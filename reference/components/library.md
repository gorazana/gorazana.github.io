# Library

Cataloged holdings, copies and accountable lending or licensed access.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- LIBRARY-01 — Editions, creators, subjects and identifiers
- LIBRARY-02 — Physical copies and digital references
- LIBRARY-03 — Holds, loans, renewals, returns and loss
- LIBRARY-04 — Eligibility, due limits and reviewed charges
- LIBRARY-05 — Availability-aware search and private patron history

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

- [Search](search.md)
- [Media](media.md)
- [Notifications](notifications.md)
- [School](school.md)

## Invariants

- One copy cannot have two active loans
- Borrowing history is restricted
- Digital access follows licensing, not possession alone

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

Title, Edition, Copy, PatronReference, Hold, Loan, Return, Policy

Catalog -> acquire copy -> reserve/loan -> renew/return/lost.

## Research sources

- [ERPNext introduction](https://docs.frappe.io/erpnext/introduction) — Domain inventory and separation, not region-specific compliance.
- [Frappe Education](https://docs.frappe.io/education/introduction) — Student, guardian, admissions, course and assessment boundaries.
