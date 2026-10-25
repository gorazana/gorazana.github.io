# Fundraising

Campaigns, pledges, gifts and restricted-fund evidence.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- FUNDRAISING-01 — Campaign goals and stewardship
- FUNDRAISING-02 — Pledges, installments and verified gifts
- FUNDRAISING-03 — Designations and restriction rules
- FUNDRAISING-04 — Donor preferences and acknowledgements
- FUNDRAISING-05 — Contribution provenance and use-of-fund reporting

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
- [CRM](crm.md)
- [Billing](billing.md)
- [Accounting](accounting.md)
- [Notifications](notifications.md)

## Invariants

- A pledge is not cash received
- Restricted-fund policy controls use
- Donor publication consent is independent of giving

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

Campaign, Pledge, Gift, Installment, FundRestriction, Allocation, DonorPreference

Pledge -> due installment -> verified receipt -> allocate -> steward/report.

## Research sources

- [CiviCRM guide](https://docs.civicrm.org/user/en/latest/) — Contributions, membership, events, campaigns and contact relationships.
