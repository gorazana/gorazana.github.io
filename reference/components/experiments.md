# Experiments

Governed product experiments with stable assignments, exposure receipts and defensible interpretation.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- EXPERIMENTS-01 — Hypothesis, owner, metrics and explicit guardrails
- EXPERIMENTS-02 — Stable scoped assignment and mutually exclusive experiment groups
- EXPERIMENTS-03 — Versioned exposure events distinct from feature evaluation
- EXPERIMENTS-04 — Sample-ratio, missing-data and contamination diagnostics
- EXPERIMENTS-05 — Predeclared analysis and reviewed stop/ship decisions
- EXPERIMENTS-06 — Consent, exclusion and purpose-limited data retention

## Native Goravel

- Config
- ServiceProvider
- Validation
- Log
- Artisan
- ORM transactions for selected durable profiles
- Route/middleware for HTTP adapters
- Events/Queue only where declared

## Go and candidate adapters

- context
- hash/fnv or reviewed stable hash
- time
- Statistical engine is explicit and separately validated

## Optional integration ports

- [Features](features.md)
- [Analytics](analytics.md)
- [Outbox](outbox.md)
- [Privacy](privacy.md)
- [Rules](rules.md)

## Invariants

- A feature flag decision alone is not an observed exposure
- Statistical output is not a universal causal guarantee
- Experiments cannot override eligibility, safety or authorization

## Acceptance requirements

- Negative authorization, cross-scope list/detail/export and stale-revision cases
- Duplicate, reordered, expired and concurrent requests for every consequential transition
- Selected SQLite/PostgreSQL adapter migration, rollback and concurrency tests
- Provider contract tests; fixtures and genuine live service evidence labeled separately
- Accessible/narrow/keyboard frontend tests for each supported renderer

## Boundaries

Reusable contract and lifecycle only. Host identity, tenant admission, jurisdiction, detailed business schema and operational deployment remain application-owned. Optional ports are alternatives, not mandatory package dependencies.

## Model and lifecycle

Experiment, Assignment, Exposure, MetricDefinition, Analysis, Decision

Design -> review -> enroll -> observe -> analyze -> decide -> archive; changes create new revisions.

## Research sources

- [GrowthBook — experiments and flags](https://github.com/growthbook/growthbook) — Experiment design reference; separate statistical evidence from flags and entitlement.
- [OpenFeature specification](https://github.com/open-feature/spec) — Provider-neutral evaluation contract; no implicit permission grants.
