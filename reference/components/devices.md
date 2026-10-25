# Devices

Device enrollment, telemetry and command receipts with explicit trust and offline boundaries.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- DEVICES-01 — Scoped device registry, ownership and enrollment approval
- DEVICES-02 — Credential references, rotation, revocation and expiry
- DEVICES-03 — Versioned telemetry schemas with timestamps and replay detection
- DEVICES-04 — Command lifecycle with acknowledgements and stale-command protection
- DEVICES-05 — Firmware metadata, rollout approval and rollback evidence
- DEVICES-06 — MQTT/HTTP adapters and per-device quotas

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
- crypto/tls
- net/http
- github.com/eclipse/paho.golang — optional MQTT adapter

## Optional integration ports

- [Secrets](secrets.md)
- [Realtime](realtime.md)
- [Metering](metering.md)
- [Outbox](outbox.md)
- [Assets](assets.md)
- [Audit](audit.md)

## Invariants

- MQTT delivery acknowledgement is not proof of physical actuation
- Revoked devices cannot rejoin through retained sessions
- Commands expire and cannot replay after reassignment

## Acceptance requirements

- Negative authorization, cross-scope list/detail/export and stale-revision cases
- Duplicate, reordered, expired and concurrent requests for every consequential transition
- Selected SQLite/PostgreSQL adapter migration, rollback and concurrency tests
- Provider contract tests; fixtures and genuine live service evidence labeled separately
- Accessible/narrow/keyboard frontend tests for each supported renderer

## Boundaries

Reusable contract and lifecycle only. Host identity, tenant admission, jurisdiction, detailed business schema and operational deployment remain application-owned. Optional ports are alternatives, not mandatory package dependencies.

## Model and lifecycle

Device, Enrollment, CredentialRef, TelemetryFrame, Command, Acknowledgement

Enroll -> approve -> authenticate -> observe/command -> acknowledge -> rotate/revoke -> retire.

## Research sources

- [Eclipse Paho Go — MQTT](https://github.com/eclipse-paho/paho.golang) — MQTT client candidate; protocol delivery is not proof of physical actuation.
