# Accounts (UMS)

User Management System: host-owned account lifecycle, profiles, invitations and administration over an identity provider.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- ACCOUNTS-01 — Configurable account/profile schema without a second mandatory user table
- ACCOUNTS-02 — Invitations, acceptance, enrollment and first-administrator bootstrap through explicit authority
- ACCOUNTS-03 — Self-service profile and verified contact changes
- ACCOUNTS-04 — Administrative suspension, restoration and closure with current policy
- ACCOUNTS-05 — Session/MFA/credential management by calling Defender or host interfaces
- ACCOUNTS-06 — Scoped directory, support views and privacy-preserving export

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

- [Defender](defender.md)
- [Tenancy](tenancy.md)
- [Directory](directory.md)
- [Settings](settings.md)
- [Notifications](notifications.md)
- [Audit](audit.md)
- [Records (DMS)](records.md)

## Invariants

- A profile field cannot grant roles or memberships
- Only an authorized flow can create/bootstrap an administrator
- Changed email does not auto-link an external account
- Suspend/revoke must invalidate authority through the actual provider, not just hide a UI row

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

HostAccountReference, ProfileDefinition, Invitation, AccountLifecycleRequest, VerificationReceipt, Consent, ClosureReview

Invite/request -> verify -> accept -> active -> suspend/restore/close; login proof and tenant admission remain separate.

## Research sources

- [OWASP authorization](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) — Deny-by-default/current-request policy and resource-level checks.
- [Gorazana defender](https://github.com/gorazana/defender/blob/59a062139465866219b6ff358aee41333b92ab19/README.md) — Authorized source observation, not release acceptance.
