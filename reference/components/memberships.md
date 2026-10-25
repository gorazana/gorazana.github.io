# Memberships

Membership terms, eligibility, renewals and benefit assignment.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- MEMBERSHIPS-01 — Membership types, terms and eligibility
- MEMBERSHIPS-02 — Application, approval, renewal and termination
- MEMBERSHIPS-03 — Benefits through provider-neutral grants
- MEMBERSHIPS-04 — Fee status and reminders
- MEMBERSHIPS-05 — Opt-in directory and member self-service

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
- [Billing](billing.md)
- [Licensing](licensing.md)
- [Notifications](notifications.md)
- [CRM](crm.md)

## Invariants

- Payment does not bypass membership eligibility
- Replay cannot duplicate benefit periods
- Public directory fields require consent

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

MembershipType, Application, Membership, Term, EligibilityDecision, BenefitGrant

Apply -> eligible -> approved/active -> renew/grace -> expire/terminate.

## Research sources

- [CiviCRM guide](https://docs.civicrm.org/user/en/latest/) — Contributions, membership, events, campaigns and contact relationships.
