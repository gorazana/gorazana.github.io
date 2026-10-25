# Testbench

Repeatable conformance fixtures and evidence collection for Gorazana packages and application compositions.

**Kind:** tool · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- TESTBENCH-01 — Fixture capability contracts with explicit database/browser/provider requirements
- TESTBENCH-02 — Ephemeral schemas and reliable owned-resource cleanup
- TESTBENCH-03 — Shared auth/scope/adversarial test scenarios with module-specific expectations
- TESTBENCH-04 — Migration-upgrade, rollback and composition contract checks
- TESTBENCH-05 — Structured exact-SHA evidence and skipped-case accounting
- TESTBENCH-06 — Native process and optional container adapters without mandatory paid CI

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

- testing
- os/exec
- context
- net/http/httptest
- github.com/testcontainers/testcontainers-go — optional adapter

## Optional integration ports

- [Package Skeleton](package-skeleton.md)
- [Observability](observability.md)
- [Modules](modules.md)
- [Defender](defender.md)
- [Tenancy](tenancy.md)

## Invariants

- A skipped database case never counts as a pass
- Fixtures cannot delete user data or reuse production credentials
- Synthetic providers never become live-service certification

## Acceptance requirements

- Negative authorization, cross-scope list/detail/export and stale-revision cases
- Duplicate, reordered, expired and concurrent requests for every consequential transition
- Selected SQLite/PostgreSQL adapter migration, rollback and concurrency tests
- Provider contract tests; fixtures and genuine live service evidence labeled separately
- Accessible/narrow/keyboard frontend tests for each supported renderer

## Boundaries

Reusable contract and lifecycle only. Host identity, tenant admission, jurisdiction, detailed business schema and operational deployment remain application-owned. Optional ports are alternatives, not mandatory package dependencies.

## Model and lifecycle

TestProfile, Fixture, Capability, RunManifest, Evidence, CleanupReceipt

Declare profile -> preflight -> prepare owned fixtures -> execute -> record evidence -> clean up -> assess.

## Research sources

- [Testcontainers for Go](https://github.com/testcontainers/testcontainers-go) — Disposable integration environment candidate; runtime availability must be explicit.
