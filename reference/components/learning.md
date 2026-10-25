# Learning

Course delivery and reproducible completion evidence.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- LEARNING-01 — Versioned courses, units, cohorts and enrollment rules
- LEARNING-02 — Paced/self-paced activities and discussions
- LEARNING-03 — Assessment submissions, rubrics and feedback
- LEARNING-04 — Completion rules, certificates and revocation
- LEARNING-05 — Instructor and learner reporting

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

- [Assessments](assessments.md)
- [Media](media.md)
- [Documents](documents.md)
- [Notifications](notifications.md)
- [Commerce](commerce.md)

## Invariants

- Completion binds exact course/rule version
- Instructor access is cohort-scoped
- Certificate links obey revocation/privacy

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

Course, Version, Unit, Enrollment, Cohort, Activity, Submission, Completion

Enroll -> access allowed unit -> participate/submit -> evaluate -> complete/certify.

## Research sources

- [Moodle features](https://docs.moodle.org/503/en/Features) — Learning and assessment domain comparison.
