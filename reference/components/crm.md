# CRM

Contacts, lead qualification and accountable sales opportunities.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- CRM-01 — Contact/organisation relationships and consent
- CRM-02 — Lead capture, attribution and assignment
- CRM-03 — Versioned pipelines, activities and closure reasons
- CRM-04 — Reviewed duplicate detection and merge
- CRM-05 — Scoped conversion, aging and value reporting

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
- [Activity](activity.md)
- [Notifications](notifications.md)
- [Connectors](connectors.md)
- [Data Exchange](data-exchange.md)
- [Analytics](analytics.md)

## Invariants

- A contact is not a login account
- Consent/deletion rules propagate to projections
- Merge cannot combine unauthorized tenant records

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

Contact, Organisation, Lead, Deal, PipelineStage, Consent, MergeProposal

Capture -> qualify -> opportunity -> won/lost; merge is an independently reviewed operation.

## Research sources

- [Frappe CRM](https://docs.frappe.io/crm/introduction) — Leads, deals, contacts and organisations.
