# Workflows

Execute versioned, declarative business workflows with durable state, approvals, timers and compensations using native Goravel infrastructure.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- WFL-01 — Versioned definitions
- WFL-02 — Durable instances
- WFL-03 — Approvals
- WFL-04 — Timers and escalation
- WFL-05 — Compensation and recovery
- WFL-06 — Visibility and adapters

## Native Goravel

- ORM/transactions
- Queue
- Schedule
- Events
- Log

## Go and candidate adapters

- context
- time
- optional Temporal adapter (not required)

## Optional integration ports

- [Defender](defender.md)
- [Tenancy](tenancy.md)
- [Notifications](notifications.md)
- [Schedules](schedules.md)
- [Audit](audit.md)
- [Outbox](outbox.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestWorkflowGraphVersionAndInvalidNodes
- TestWorkflowCrashReplayAndStaleWorker
- TestApprovalQuorumCurrentMembership
- TestWorkflowTimerDuplicateAndTimezone
- TestCompensationAndUncertainEffect
- TestWorkflowScopeAndCancellation

## Boundaries

No arbitrary Go workflow replay engine, universal BPMN execution claim, distributed transaction promise, or silently changed definitions for running instances.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Compile and publish immutable definition → Start commits instance and first intent → worker acquires fenced lease → revalidates instance state → executes handler with stable effect key → CAS records result and next intents. Approval evaluates current principal and instance scope at decision time, then records unique vote in one transaction; quorum transition is atomic. Timer processing creates a signal with deterministic fire ID. Cancel blocks new admission and optionally starts compensations; completed external work is not erased. Unknown outcomes remain awaiting reconciliation and do not count as approved or completed.

### First stable node set
Support task, decision, approval, wait-for-signal, timer, bounded parallel fan-out/join and terminal nodes. Decision expressions use a typed allowlisted AST, not a language interpreter. Every fork carries child IDs and a documented join rule; partial completion survives restart. Definition import is operator-controlled configuration, not permission for tenants to execute arbitrary handlers.

### Separation of duties
The workflow owner chooses whether requester and approver may be the same person, and whether delegated approvers count independently. Default finance sample requires a different current principal. Record principal, role/membership revision and policy decision reference, not a naked role string supplied by a browser.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [Goravel — Queues](https://www.goravel.dev/digging-deeper/queues.html) — Queue jobs and driver semantics; do not assume the default driver executes asynchronously.
- [Goravel — Task Scheduling](https://www.goravel.dev/digging-deeper/task-scheduling.html) — Native scheduling to extend instead of replacing with another cron framework.
- [Temporal — Workflow Execution](https://docs.temporal.io/workflow-execution) — Durable execution concepts; do not claim replay guarantees without implementing a replay engine.
- [Temporal — Schedules](https://docs.temporal.io/schedule) — Operational schedule behavior and lifecycle.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
