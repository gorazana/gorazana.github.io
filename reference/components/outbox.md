# Outbox

Optional reusable durable event-intent and inbox-receipt primitives above native transactions, queues and provider-specific transports.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- OUTBOX-01 — Append intent in the same declared database transaction as business mutation
- OUTBOX-02 — Versioned bounded envelopes with event ID, scope, source revision and correlation
- OUTBOX-03 — Fenced claiming, retry budget, acknowledgement and quarantine
- OUTBOX-04 — Inbox deduplication and current-authority revalidation
- OUTBOX-05 — Transport adapters to native queue, webhook or broker without replacing their semantics
- OUTBOX-06 — Inspection/reconciliation metrics and explicit retention

## Native Goravel

- Config
- Log
- ServiceProvider/factory
- ORM/transactions
- Queue/Events

## Go and candidate adapters

- context
- time
- encoding/json
- native transaction participant and transport adapters

## Optional integration ports

- [Webhooks](webhooks.md)
- [Notifications](notifications.md)
- [Connectors](connectors.md)
- [Activity](activity.md)
- [Audit](audit.md)
- [Workflows](workflows.md)

## Invariants

- After-commit enqueue alone is not atomic publication
- No universal exactly-once promise across independent databases/services
- Stable idempotency keys preserve uncertain external outcomes
- Broker ordering and queue semantics differ and must be declared
- Payloads cannot carry reusable credential secrets
- No migration of existing package outboxes without explicit compatibility/upgrade work

## Acceptance requirements

- Negative and boundary tests for each stated invariant
- Concurrent/stale revision and duplicate-command tests for the principal transition
- Real selected database transaction, migration-upgrade and recovery tests
- Cross-scope list/detail/count/export/relationship checks
- No real external side effects in ordinary fixtures; live-provider tests separately labeled
- Selected renderer tested for validation, keyboard, narrow layout and error states

## Boundaries

A reusable technical core with native Goravel adapters; no application-specific schema or required paid platform. After-commit enqueue alone is not atomic publication

## Model and lifecycle

OutboxEvent, DispatchLease, Attempt, Acknowledgement, InboxReceipt, DeadLetter, RetentionCheckpoint

Commit domain change plus intent -> claim/fence -> dispatch -> acknowledge or retain unknown outcome -> deduplicate consumption -> reconcile.

## Research sources

- [Debezium outbox event router](https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html) — Durable event-intent pattern; broker/CDC deployment is optional and separate.
- [Goravel — Queues](https://www.goravel.dev/digging-deeper/queues.html) — Queue jobs and driver semantics; do not assume the default driver executes asynchronously.
