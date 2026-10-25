# Invoicing

Quotes, immutable issued invoices, corrections and payment allocations.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- INVOICING-01 — Quotes, validity and acceptance
- INVOICING-02 — Numbered issued documents and due dates
- INVOICING-03 — Credit/debit notes and original links
- INVOICING-04 — Verified allocation and receipts
- INVOICING-05 — Localized rendering and e-invoice adapters

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

- [Billing](billing.md)
- [Documents](documents.md)
- [Accounting](accounting.md)
- [Notifications](notifications.md)

## Invariants

- Issued amounts/identifiers cannot be rewritten in place
- Payment receipt does not imply correct allocation
- E-invoice legality requires a country profile

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

Quote, Invoice, Line, NumberSeries, CreditNote, Allocation, Receipt

Draft -> review -> issue -> settle -> correct if required.

## Research sources

- [ERPNext introduction](https://docs.frappe.io/erpnext/introduction) — Domain inventory and separation, not region-specific compliance.
- [CiviCRM guide](https://docs.civicrm.org/user/en/latest/) — Contributions, membership, events, campaigns and contact relationships.
