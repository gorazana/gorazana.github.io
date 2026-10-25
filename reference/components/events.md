# Events

Event programs, ticket registration and controlled check-in.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- EVENTS-01 — Events, sessions, speakers and venues
- EVENTS-02 — Ticket categories, holds and waitlists
- EVENTS-03 — Issue, transfer, revoke and validate tickets
- EVENTS-04 — Attendance, cancellation and communications
- EVENTS-05 — Payment/refund references and reconciliation

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

- [Bookings](bookings.md)
- [Billing](billing.md)
- [Notifications](notifications.md)
- [Media](media.md)

## Invariants

- Single-use ticket proof cannot create two admissions
- Capacity includes active holds by policy
- Attendee export requires distinct permission

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

Event, Session, Venue, TicketType, Registration, Hold, Ticket, CheckInReceipt

Publish -> reserve registration -> confirm ticket -> check in; revoke/cancel keeps receipts.

## Research sources

- [CiviCRM guide](https://docs.civicrm.org/user/en/latest/) — Contributions, membership, events, campaigns and contact relationships.
