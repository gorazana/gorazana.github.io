# Partners

Partner organisations, agreements and least-privilege collaboration.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- PARTNERS-01 — Partner identities, types and relationships
- PARTNERS-02 — Versioned agreements and renewals
- PARTNERS-03 — Referrals and shared opportunities
- PARTNERS-04 — Explicit record-sharing portal
- PARTNERS-05 — Obligations and relationship reporting

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
- [Accounts (UMS)](accounts.md)
- [CRM](crm.md)
- [Documents](documents.md)
- [Workflows](workflows.md)
- [Notifications](notifications.md)

## Invariants

- Partner records are not security tenants automatically
- Sharing is explicit per record/field
- Termination does not erase retained evidence

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

Partner, Relationship, Agreement, Version, Referral, Obligation, Review

Identify -> qualify -> agree -> collaborate -> review/renew/terminate.

## Research sources

- [Frappe CRM](https://docs.frappe.io/crm/introduction) — Leads, deals, contacts and organisations.
- [CiviCRM guide](https://docs.civicrm.org/user/en/latest/) — Contributions, membership, events, campaigns and contact relationships.
