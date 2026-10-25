# Schedules

Add persisted operator-managed schedules, bounded misfire/overlap policies and durable run receipts above Goravel scheduling and queues.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- SCH-01 — Registered handler schedules
- SCH-02 — Durable occurrence creation
- SCH-03 — Explicit policies
- SCH-04 — Run lifecycle
- SCH-05 — Administration
- SCH-06 — Scoped runtime admission

## Native Goravel

- Schedule
- Queue
- ORM
- Events
- Log

## Go and candidate adapters

- time
- context
- stable occurrence identities

## Optional integration ports

- [Workflows](workflows.md)
- [Notifications](notifications.md)
- [Backups](backups.md)
- [Features](features.md)
- [Audit](audit.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestScheduleDSTGapFoldAndPreview
- TestDispatchConcurrentAndCrashAfterEnqueue
- TestScheduleMisfireOverlapBound
- TestScheduledScopeRevocationAndPause
- TestRunLeaseLostCannotComplete

## Boundaries

No arbitrary server cron manager, shell scheduler, wall-clock-perfect delivery guarantee or forced Redis dependency.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Native tick → acquire dispatcher lease → read due definitions → calculate bounded occurrences under pinned timezone data → insert unique runs/outbox and advance next_at atomically → worker revalidates scope/module/service account → acquire fenced run → execute registered handler with stable run ID → persist outcome. Lease expiry does not prove an external effect stopped. Misfire and overlap choices are explicit; pause prevents new admission but does not falsely cancel already committed side effects.

### Application work versus infrastructure cron
The handler registry maps stable IDs to trusted compiled Go implementations. Tenant admins may configure allowed schedules and payload fields, not executable paths. The native scheduler entry remains a small dispatcher task. Do not create duplicate background loops just because a provider is resolved twice. Shutdown stops scans, releases leases safely and leaves durable queued work for the next process.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [Goravel — Task Scheduling](https://www.goravel.dev/digging-deeper/task-scheduling.html) — Native scheduling to extend instead of replacing with another cron framework.
- [Goravel — Queues](https://www.goravel.dev/digging-deeper/queues.html) — Queue jobs and driver semantics; do not assume the default driver executes asynchronously.
- [Temporal — Schedules](https://docs.temporal.io/schedule) — Operational schedule behavior and lifecycle.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
