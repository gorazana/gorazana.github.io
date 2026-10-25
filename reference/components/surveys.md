# Surveys

Versioned forms and governed evidence collection.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- SURVEYS-01 — Typed questions, bounded repeat groups and locale
- SURVEYS-02 — Immutable published schema and audience
- SURVEYS-03 — Draft/submission/quality/correction evidence
- SURVEYS-04 — Optional offline reconciliation
- SURVEYS-05 — Controlled exports and aggregations

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

- [Data Exchange](data-exchange.md)
- [Sync](sync.md)
- [Analytics](analytics.md)
- [Media](media.md)

## Invariants

- Published changes create versions
- Skip logic is bounded data rather than arbitrary eval
- Anonymous versus pseudonymous promises are explicit

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

Form, Version, Question, Deployment, Consent, Submission, Answer, QualityReview

Design -> validate -> publish -> collect -> submit -> review -> analyze.

## Research sources

- [ODK](https://docs.getodk.org/) — Versioned forms and governed field evidence.
