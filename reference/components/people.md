# People

Staff records and employment lifecycle, distinct from application login accounts.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- PEOPLE-01 — Employment, organisation and effective assignments
- PEOPLE-02 — Onboarding, changes and offboarding
- PEOPLE-03 — Leave policies, allocations and approvals
- PEOPLE-04 — Restricted documents and acknowledgements
- PEOPLE-05 — Headcount and authorized HR exports

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
- [Workflows](workflows.md)
- [Documents](documents.md)
- [Media](media.md)
- [Notifications](notifications.md)
- [Payroll](payroll.md)

## Invariants

- HR access is field-sensitive and need-to-know
- Employment does not grant system roles
- Concurrent leave approvals preserve balances

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

Person, Employment, Assignment, OnboardingCase, LeavePolicy, Balance, Request

Onboard -> active -> change/leave -> offboard; account access is a separate coordinated action.

## Research sources

- [Frappe HR](https://docs.frappe.io/hr/introduction) — Employment, attendance and payroll domain vocabulary.
