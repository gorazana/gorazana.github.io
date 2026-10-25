# Assessments

Versioned instruments, attempts, scoring and moderated results.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- ASSESSMENTS-01 — Banks, rubrics, scales and instruments
- ASSESSMENTS-02 — Timed/untimed attempts and accommodations
- ASSESSMENTS-03 — Bounded automatic/manual grading
- ASSESSMENTS-04 — Release, appeal and corrected versions
- ASSESSMENTS-05 — Permitted cohort/item analysis

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

- [Learning](learning.md)
- [School](school.md)
- [Analytics](analytics.md)
- [Documents](documents.md)

## Invariants

- Instrument changes do not silently rescore closed attempts
- Unreleased scores/answer keys never reach learner payloads
- Attempt timing and duplicate policy are explicit

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

Instrument, Version, Item, Attempt, Response, Rubric, Score, Moderation, Release

Publish -> assign -> attempt -> submit -> score/moderate -> release -> appeal/correct.

## Research sources

- [Moodle features](https://docs.moodle.org/503/en/Features) — Learning and assessment domain comparison.
- [Frappe Education](https://docs.frappe.io/education/introduction) — Student, guardian, admissions, course and assessment boundaries.
