# Rules

Versioned, explainable business conditions with bounded evaluation and application-owned activation.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- RULES-01 — Typed rule inputs with explicit missing/null semantics
- RULES-02 — Compile and validate rule revisions before publishing
- RULES-03 — Bounded evaluation budgets and approved pure functions
- RULES-04 — Reason codes, simulation and impact comparison
- RULES-05 — Pinned rule revisions on consequential decisions
- RULES-06 — Review/activation/rollback audit without bypassing host policies

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
- encoding/json
- github.com/google/cel-go — candidate bounded evaluator

## Optional integration ports

- [Settings](settings.md)
- [Audit](audit.md)
- [Workflows](workflows.md)
- [Features](features.md)

## Invariants

- Rules cannot execute arbitrary Go, shell or network calls
- Business rule results do not grant security authorization
- Evaluation errors never become permissive defaults without explicit policy

## Acceptance requirements

- Negative authorization, cross-scope list/detail/export and stale-revision cases
- Duplicate, reordered, expired and concurrent requests for every consequential transition
- Selected SQLite/PostgreSQL adapter migration, rollback and concurrency tests
- Provider contract tests; fixtures and genuine live service evidence labeled separately
- Accessible/narrow/keyboard frontend tests for each supported renderer

## Boundaries

Reusable contract and lifecycle only. Host identity, tenant admission, jurisdiction, detailed business schema and operational deployment remain application-owned. Optional ports are alternatives, not mandatory package dependencies.

## Model and lifecycle

RuleSet, RuleRevision, InputSchema, Evaluation, Activation

Draft -> type-check -> simulate -> review -> activate immutable revision -> evaluate with bounded inputs.

## Research sources

- [CEL-Go — expression evaluation](https://github.com/cel-expr/cel-go) — Typed bounded expression candidate; canonical Go import cel.dev/cel-go. The former google/cel-go path is a read-only compatibility repository. Do not allow arbitrary Go evaluation.
