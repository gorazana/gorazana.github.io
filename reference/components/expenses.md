# Expenses

Expense evidence, policy review and reimbursement tracking.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- EXPENSES-01 — Receipts, categories, currency and purpose
- EXPENSES-02 — Limits, duplicate detection and exceptions
- EXPENSES-03 — Manager/finance approvals
- EXPENSES-04 — Reimbursement references and ledger export
- EXPENSES-05 — Advances and reconciliation

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
- [Media](media.md)
- [Workflows](workflows.md)
- [Accounting](accounting.md)
- [Audit](audit.md)

## Invariants

- Claimants cannot bypass independent review
- Receipt reuse and operation duplication are checked
- Conversion source/date and monetary rounding are explicit

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

Claim, ClaimLine, ReceiptRef, PolicyVersion, Exception, Approval, Reimbursement

Draft -> submit -> review -> approve/reject -> reimburse/reconcile.

## Research sources

- [ERPNext introduction](https://docs.frappe.io/erpnext/introduction) — Domain inventory and separation, not region-specific compliance.
- [Frappe HR](https://docs.frappe.io/hr/introduction) — Employment, attendance and payroll domain vocabulary.
