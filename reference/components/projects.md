# Projects

Projects, work items, dependencies and coherent planning views.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- PROJECTS-01 — Projects, milestones, tasks and assignees
- PROJECTS-02 — Boards, lists, calendars and timelines over the same records
- PROJECTS-03 — Comments, files and decisions
- PROJECTS-04 — Effort, approved time and capacity
- PROJECTS-05 — Baseline/progress reports and reviewed export

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

- [Activity](activity.md)
- [Documents](documents.md)
- [Notifications](notifications.md)
- [Timekeeping](timekeeping.md)
- [Budgets](budgets.md)

## Invariants

- Project visibility does not waive field-level policy
- No unauthorized cross-project dependency
- Closed time/cost periods reject silent edits

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

Project, Task, Milestone, Dependency, Assignment, TimeEntry, Baseline, Decision

Backlog -> ready -> active -> blocked/review -> done; dependency changes validate cycles.

## Research sources

- [OpenProject guide](https://www.openproject.org/docs/user-guide/) — Project, work-package, time/cost and decision vocabulary.
