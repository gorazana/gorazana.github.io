# Support

Tickets, customer conversations, service targets and a scoped portal.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- SUPPORT-01 — Ticket queues, priority, assignments and status
- SUPPORT-02 — Internal notes separate from customer-visible messages
- SUPPORT-03 — Working calendars, service clocks and escalation
- SUPPORT-04 — Self-service requests and safe attachments
- SUPPORT-05 — Merge/split, reopen and inbound-message deduplication

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

- [Accounts (UMS)](accounts.md)
- [Notifications](notifications.md)
- [Knowledge](knowledge.md)
- [Media](media.md)
- [Schedules](schedules.md)
- [Connectors](connectors.md)

## Invariants

- Internal notes must not leak through exports or notifications
- Email sender alone cannot authorize sensitive action
- Every attachment uses current requester policy

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

Ticket, Conversation, Assignment, ServiceTarget, Calendar, Breach, PortalAccess

New -> triaged -> assigned -> waiting/active -> resolved -> closed; reopening retains previous service evidence.

## Research sources

- [Frappe Helpdesk](https://docs.frappe.io/helpdesk/installation) — Support and customer/portal boundaries.
