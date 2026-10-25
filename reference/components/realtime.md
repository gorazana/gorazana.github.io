# Realtime

Authorized live channels, presence and reconnect delivery for collaborative applications without replacing domain authority.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- REALTIME-01 — Scoped channels with current subscription authorization and explicit revocation
- REALTIME-02 — WebSocket/SSE transports behind replaceable adapters and origin policies
- REALTIME-03 — Cursor-based recovery with retention, gaps and resynchronization semantics
- REALTIME-04 — Bounded fan-out, connection limits, backpressure and slow-consumer handling
- REALTIME-05 — Ephemeral presence with privacy controls and expiry, not durable attendance
- REALTIME-06 — Versioned event envelopes and tenant-safe diagnostics

## Native Goravel

- Config
- ServiceProvider
- Validation
- Log
- Artisan
- ORM transactions for selected durable profiles
- Route/middleware for HTTP adapters
- Events/Queue only where declared

## Go and candidate adapters

- context
- net/http
- time
- github.com/centrifugal/centrifuge — candidate adapter only

## Optional integration ports

- [Outbox](outbox.md)
- [Notifications](notifications.md)
- [Observability](observability.md)
- [Defender](defender.md)

## Invariants

- A valid transport token is not perpetual authorization
- Reconnect never leaks another tenant’s history
- Presence does not prove work, attendance or payment

## Acceptance requirements

- Negative authorization, cross-scope list/detail/export and stale-revision cases
- Duplicate, reordered, expired and concurrent requests for every consequential transition
- Selected SQLite/PostgreSQL adapter migration, rollback and concurrency tests
- Provider contract tests; fixtures and genuine live service evidence labeled separately
- Accessible/narrow/keyboard frontend tests for each supported renderer

## Boundaries

Reusable contract and lifecycle only. Host identity, tenant admission, jurisdiction, detailed business schema and operational deployment remain application-owned. Optional ports are alternatives, not mandatory package dependencies.

## Model and lifecycle

Channel, Subscription, Cursor, PresenceLease, DeliveryReceipt

Authorize -> subscribe -> receive -> renew/revoke; reconnect either recovers a cursor or explicitly resynchronizes.

## Research sources

- [Centrifuge — Go realtime engine](https://github.com/centrifugal/centrifuge) — Realtime transport reference; channel recovery and authorization are separate from domain state.
- [AsyncAPI specification](https://github.com/asyncapi/spec) — Async contract terminology; not a broker or execution engine.
- [CloudEvents specification](https://github.com/cloudevents/spec) — Event envelope interoperability; not an exactly-once delivery guarantee.
