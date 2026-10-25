# Settings

Persist validated, versioned application and scoped preferences without turning deployment configuration or secret management into a mutable global map.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- SET-01 — Typed definitions
- SET-02 — Explicit overrides
- SET-03 — Concurrent changes and history
- SET-04 — Secret separation
- SET-05 — Migration and caching
- SET-06 — Host integration

## Native Goravel

- Config
- ORM/transactions
- Crypt
- Cache
- Events
- Artisan
- Log

## Go and candidate adapters

- context
- encoding/json
- host secret reference ports

## Optional integration ports

- [Defender](defender.md)
- [Tenancy](tenancy.md)
- [Activity](activity.md)
- [Audit](audit.md)
- [Secrets](secrets.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestSettingsPrecedenceLockedAndReset
- TestSettingsCASAndIdempotency
- TestSecretScopeBindingAndRedaction
- TestDefinitionMigrationAndCacheGeneration
- TestNormalConsumerSettingUse

## Boundaries

Do not mutate native deployment env, database credentials, migration code or authorization rules via generic settings. Do not make every package depend on this package for default configuration.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Resolve current trusted scope → choose only the layers permitted by the key definition → honor a locked deployment value → validate decoded value → return an immutable copy with source and revision. Mutations address one explicit target layer authorized for the current actor, never whichever layer happened to win Get. A reset deletes that override and increments generation; it does not write a copy of the inherited value. Commit CAS mutation/history/outbox together, then invalidate cache asynchronously. Failed invalidation may delay nonsecurity display preferences up to TTL but may not broaden permissions.

### Do not confuse settings with feature or security decisions
A school reporting-period preference is a setting. Whether the reporting module is available is a feature/entitlement decision. Whether a teacher may read a student is authorization. Keep those three operations distinct. Modules declare their key namespace; removing a module does not delete stored preferences without an explicit retention plan.

### Schema upgrades
Each definition has a schema version, migration ID and validator. A rename is a recorded move with conflict detection, not delete-then-create outside a transaction. A type change must specify transformation and a report of values that cannot be converted. Preserve old readers through an expand/contract window when required; never silently cast an arbitrary string to true.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [Spatie — Laravel Settings](https://github.com/spatie/laravel-settings) — Typed settings and migration patterns as a comparative reference.
- [OWASP — Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) — Redaction, integrity, access control and safe operational logging.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
