# Features

Provide deterministic typed feature evaluation with explicit reason codes, safe fallbacks and optional entitlement/module constraints, without becoming an authorization system.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- FEA-01 — Typed flags
- FEA-02 — Deterministic rules
- FEA-03 — Provider independence
- FEA-04 — Availability composition
- FEA-05 — Control and operations
- FEA-06 — Failure semantics

## Native Goravel

- Config
- Cache
- ORM (optional)
- Events
- Log

## Go and candidate adapters

- crypto/sha256
- optional OpenFeature Go SDK

## Optional integration ports

- [Modules](modules.md)
- [Licensing](licensing.md)
- [Defender](defender.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestFeatureTypedFallbackAndUnknownKey
- TestRolloutStableGoldenVectors
- TestAvailabilityDenyDominates
- TestDefinitionCASAndKillSwitchBound
- TestConcurrentEvaluationNoScopeLeak

## Boundaries

Not a licensing authority, role system, experiment statistics engine, billing ledger or substitute for per-request authorization.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Resolve trusted evaluation attributes → validate definition → apply forced-off kill switch → evaluate bounded rules in documented order → choose stable variant or typed default → return reason/details. Available then checks required entitlement and module gates and the host policy; a successful rollout result alone is insufficient. Provider timeout returns the registered default and an error/health signal; it does not silently enable a premium capability. Cache by immutable snapshot; do not mutate one shared context map per request.

### Stable rollout contract
Use `sha256-v1` with four-byte big-endian byte lengths before each UTF-8 namespace, key and subject component; do not concatenate with an ambiguous separator. Bucket 0..9999. Store algorithm version with definitions so an upgrade cannot reshuffle users accidentally. A percentage split is deterministic assignment, not proof that an experiment is statistically valid. Experiment analysis is outside this package.

### No privilege shortcut
The controller still calls its permission policy before executing a protected action. `Available` is an aggregate availability service, but a record policy may additionally depend on the specific record and must be checked inside that business transaction.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [OpenFeature — Flag Evaluation Specification](https://openfeature.dev/specification/sections/flag-evaluation/) — Typed evaluation, defaults, context and evaluation details.
- [Unleash — Activation Strategies](https://docs.getunleash.io/concepts/activation-strategies) — Rollout strategies and sticky targeting concepts.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
