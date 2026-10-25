# School

Student information and school operations with guarded learner data.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- SCHOOL-01 — Students, guardians, enrollment and consent
- SCHOOL-02 — Years, terms, classes and teacher assignments
- SCHOOL-03 — Attendance registers and corrections
- SCHOOL-04 — Timetables and family/student portals
- SCHOOL-05 — Transfer, archival and verified reporting

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

- [Directory](directory.md)
- [Accounts (UMS)](accounts.md)
- [Admissions](admissions.md)
- [Assessments](assessments.md)
- [Learning](learning.md)
- [Documents](documents.md)
- [Invoicing](invoicing.md)

## Invariants

- Guardian access is explicit per learner
- Past-period correction is traceable
- Safeguarding information needs a separate restricted policy

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

Student, Guardian, Relationship, Year, Term, Class, Enrollment, Attendance, Consent

Admit reference -> enroll -> record attendance/academic events -> review -> advance/transfer/archive.

## Research sources

- [Frappe Education](https://docs.frappe.io/education/introduction) — Student, guardian, admissions, course and assessment boundaries.
