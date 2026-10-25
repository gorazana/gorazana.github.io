# Impact

Outcome evidence, indicators and accountable program review.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- IMPACT-01 — Results models and indicator definitions
- IMPACT-02 — Evidence provenance and quality review
- IMPACT-03 — Denominators, disaggregation and versioned metrics
- IMPACT-04 — Continue/adapt/stop decisions and follow-up
- IMPACT-05 — Reports with uncertainty and limitations

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

- [Surveys](surveys.md)
- [Analytics](analytics.md)
- [Governance](governance.md)
- [Documents](documents.md)

## Invariants

- Changed definitions cannot silently rewrite historical results
- Sensitive aggregates require disclosure controls
- Correlation is not causal proof

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

Program, Outcome, IndicatorDefinition, Evidence, Observation, Review, Decision

Define -> collect -> validate -> analyze -> decide -> follow up.

## Research sources

- [ODK](https://docs.getodk.org/) — Versioned forms and governed field evidence.
- [OpenProject guide](https://www.openproject.org/docs/user-guide/) — Project, work-package, time/cost and decision vocabulary.
