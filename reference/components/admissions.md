# Admissions

Applications, review and controlled offer-to-enrollment conversion.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- ADMISSIONS-01 — Versioned intake forms and consent
- ADMISSIONS-02 — Completeness, criteria and assigned reviewers
- ADMISSIONS-03 — Offers, waitlist, decline and expiry
- ADMISSIONS-04 — Idempotent acceptance-to-enrollment handoff
- ADMISSIONS-05 — Defined funnel and cohort reports

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

- [School](school.md)
- [Surveys](surveys.md)
- [Media](media.md)
- [Workflows](workflows.md)

## Invariants

- Acceptance replay cannot duplicate enrollment
- Review evidence is private and revisioned
- Payment or external login never automatically grants admission

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

Intake, Application, Applicant, Checklist, Review, Offer, Waitlist, ConversionReceipt

Apply -> complete -> review -> offer/waitlist/decline -> accept/expire -> enroll once.

## Research sources

- [Frappe Education](https://docs.frappe.io/education/introduction) — Student, guardian, admissions, course and assessment boundaries.
