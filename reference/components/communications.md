# Communications

Reviewed campaigns above transactional delivery infrastructure.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- COMMUNICATIONS-01 — Campaign briefs, variants and ownership
- COMMUNICATIONS-02 — Consented audiences and exclusions
- COMMUNICATIONS-03 — Localization, approvals and test sends
- COMMUNICATIONS-04 — Throttled delivery and suppression
- COMMUNICATIONS-05 — Consent-aware delivery/bounce reporting

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

- [Notifications](notifications.md)
- [CRM](crm.md)
- [CMS](cms.md)
- [Localization](localization.md)
- [Analytics](analytics.md)
- [Content Safety](content-safety.md)

## Invariants

- Revocation/unsubscribe dominates queued audience membership
- Tests cannot silently target real recipients
- Tracking is explicit rather than assumed

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

Campaign, Revision, AudienceSnapshot, Consent, Approval, DeliveryBatch, Suppression

Draft -> review -> test -> approve -> schedule/send -> reconcile.

## Research sources

- [CiviCRM guide](https://docs.civicrm.org/user/en/latest/) — Contributions, membership, events, campaigns and contact relationships.
