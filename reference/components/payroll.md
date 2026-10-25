# Payroll

Reviewed pay runs with explicit jurisdiction/rule adapters.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- PAYROLL-01 — Effective contract/time/leave inputs
- PAYROLL-02 — Versioned earnings, deductions, benefits and rounding
- PAYROLL-03 — Draft, independent review, finalize and correction
- PAYROLL-04 — Payslips, ledger and payment-file references
- PAYROLL-05 — Input snapshots and reconciliation

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
- [Timekeeping](timekeeping.md)
- [Accounting](accounting.md)
- [Documents](documents.md)
- [Audit](audit.md)

## Invariants

- No universal statutory compliance claim
- Finalized input/rule snapshots are immutable
- Bank instruction and payroll approval are distinct privileges

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

PayPeriod, RuleProfile, PayRun, InputSnapshot, PayLine, Adjustment, Payslip

Collect approved inputs -> calculate -> review -> finalize -> reconcile.

## Research sources

- [Frappe HR](https://docs.frappe.io/hr/introduction) — Employment, attendance and payroll domain vocabulary.
