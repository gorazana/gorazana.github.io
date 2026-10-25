# Budgets

Financial plans, commitments and controlled variance reviews.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- BUDGETS-01 — Periods, scenarios, categories and owners
- BUDGETS-02 — Review and locked approved baselines
- BUDGETS-03 — Atomic reservations and available-balance checks
- BUDGETS-04 — Actuals references, transfers and variance reasons
- BUDGETS-05 — Scenario/review reports

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

- [Accounting](accounting.md)
- [Procurement](procurement.md)
- [Workflows](workflows.md)
- [Analytics](analytics.md)

## Invariants

- Concurrent commitments cannot bypass enforced limits
- New scenarios do not overwrite approved baselines
- Actuals have one authoritative source

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

Budget, Version, Line, Approval, Baseline, Commitment, Release, ActualReference

Draft -> submit -> approve baseline -> commit/release/consume -> review variance.

## Research sources

- [ERPNext introduction](https://docs.frappe.io/erpnext/introduction) — Domain inventory and separation, not region-specific compliance.
- [OpenProject guide](https://www.openproject.org/docs/user-guide/) — Project, work-package, time/cost and decision vocabulary.
