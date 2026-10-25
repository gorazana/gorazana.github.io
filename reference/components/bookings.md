# Bookings

Conflict-safe reservation of services, people and resources.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- BOOKINGS-01 — Availability, service duration, buffers and timezone
- BOOKINGS-02 — Expiring holds, confirmation and capacity
- BOOKINGS-03 — Waitlists, reschedule, attendance and cancellation
- BOOKINGS-04 — External-calendar reconciliation
- BOOKINGS-05 — Reviewed overrides and utilization reports

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

- [Schedules](schedules.md)
- [Billing](billing.md)
- [Connectors](connectors.md)
- [Notifications](notifications.md)

## Invariants

- Concurrent requests cannot consume the same capacity
- DST behavior is explicit
- Connector failure cannot fabricate available time

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

Service, Resource, AvailabilityRule, Hold, Booking, Participant, CancellationPolicy

Availability -> hold -> confirm -> attend/cancel/no-show; expiry releases capacity atomically.

## Research sources

- [OpenProject guide](https://www.openproject.org/docs/user-guide/) — Project, work-package, time/cost and decision vocabulary.
- [CiviCRM guide](https://docs.civicrm.org/user/en/latest/) — Contributions, membership, events, campaigns and contact relationships.
