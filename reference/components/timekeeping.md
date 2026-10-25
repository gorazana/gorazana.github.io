# Timekeeping

Approved work-time, attendance and allocation records.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- TIMEKEEPING-01 — Manual/device capture and provenance
- TIMEKEEPING-02 — Shifts, holidays, timezones and assignments
- TIMEKEEPING-03 — Discrepancy review, approval and correction
- TIMEKEEPING-04 — Project/job/cost-center allocation
- TIMEKEEPING-05 — Versioned payroll/costing export

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

- [People](people.md)
- [Projects](projects.md)
- [Payroll](payroll.md)
- [Connectors](connectors.md)

## Invariants

- Ambiguous local timestamps cannot silently determine paid time
- Duplicate events do not duplicate credit
- Approved entry edits need traceable corrections

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

Shift, Assignment, CheckEvent, TimeEntry, Approval, Correction, PeriodSnapshot

Record -> validate -> submit -> approve -> close/export.

## Research sources

- [Frappe HR](https://docs.frappe.io/hr/introduction) — Employment, attendance and payroll domain vocabulary.
- [OpenProject guide](https://www.openproject.org/docs/user-guide/) — Project, work-package, time/cost and decision vocabulary.
