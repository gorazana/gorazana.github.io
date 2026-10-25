# Modules

Provide deterministic, statically compiled Goravel modules with dependency validation, explicit operational lifecycle, and safe tenant-specific availability.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- MOD-01 — Module generator and manifest
- MOD-02 — Deterministic dependency resolver
- MOD-03 — Two-phase boot and shutdown
- MOD-04 — Operational lifecycle
- MOD-05 — Scoped availability
- MOD-06 — Safe generators and publication
- MOD-07 — Module contributions
- MOD-08 — Diagnostics and distribution

## Native Goravel

- Config
- Container
- ServiceProvider
- Artisan
- Route
- Events
- Migrations
- Log

## Go and candidate adapters

- go/ast
- go/parser
- golang.org/x/mod/semver (candidate)

## Optional integration ports

- [Features](features.md)
- [Licensing](licensing.md)
- [Defender](defender.md)
- [Tenancy](tenancy.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestGraphDeterministicAndCyclePath
- TestAllRegisterBeforeAnyBoot
- TestScopeDisableDoesNotLeak
- TestPublicationPreservesCustomFiles
- TestInterruptedMigrationResumesByTarget
- TestModuleContributionsAreIsolated

## Boundaries

No PHP package loading, arbitrary runtime Go compilation, unsafe Go plugin loading, tenant-provided executable code, automatic marketplace execution, mandatory microservices, or business-domain ERP modules.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Manifest planning is pure: validate IDs/ranges → verify registry imports exist → calculate the graph → produce a stable digest. Generated `bootstrap/modules.go` contains explicit imports and provider values; the host wires this list into its provider registration before boot. No request reloads providers.

Lifecycle writes use compare-and-swap (CAS) revision checks and a durable operation ID. `requested → planned → migrating → ready → enabled`; failure records its last completed step and leaves availability false. Cross-database migrations are a saga, not one transaction: record each target receipt and resume idempotently. Disable first closes admission, then drains owned jobs, and only then records disabled; existing effects are not undone. Queued work carries module generation and must be re-admitted when executed. A disabled module retains its tables unless a separate destructive uninstall is approved.

### Host module layout (not the package repository itself)
```text
modules/admissions/
  module.json
  service_provider.go
  app/contracts/  app/models/  app/actions/  app/queries/  app/services/
  app/http/controllers/  app/http/requests/  app/http/middleware/
  database/migrations/  database/seeders/  database/factories/
  config/  routes/web.go  routes/api.go
  resources/views/  resources/js/  resources/lang/
  tests/unit/  tests/feature/
bootstrap/modules.go
```
Use the host's root `go.mod` initially. Module packages use deterministic Go import paths under it; generated imports are updated explicitly. A packaged third-party module can be a separate Go dependency but still registers compiled providers. An installable archive that changes Go code requires rebuild/redeployment: document this plainly for desktop and server hosts.

### Manifest security and upgrades
Reject arbitrary shell install scripts in manifests. Accept an explicit schema version, ID pattern `^[a-z][a-z0-9-]{0,62}$`, semantic version and declared dependency ranges. Cap external assets and prevent zip-slip when an optional distribution tool is later introduced. The graph digest includes manifest bytes and selected dependency versions, not secrets. Never let a tenant administrator choose a Go import path. Adopt expand/contract database upgrades; destructive down migrations require operator approval and a tested backup.

### Standard examples
Provide a two-module inventory application plus a school admissions/learning pair. Examples must show a normal provider registration, module routes and a service call without requiring Admin. The paid-feature example injects a fake entitlement verifier explicitly marked test-only, plus a real signed-license adapter in a separate integration test when licensing exists. A boolean UI switch is never proof that an entitlement is valid.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [Go — package plugin](https://pkg.go.dev/plugin) — Go shared-library plugins have important platform, build-compatibility and lifecycle restrictions.
- [Laravel Modules — Introduction](https://laravelmodules.com/docs/13/getting-started/introduction) — Module conventions as design inspiration, not PHP runtime behavior to copy into Go.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
