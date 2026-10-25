# Observability

Provide consistent readiness/liveness, bounded diagnostics, package metrics and operational evidence on top of native Goravel telemetry.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- OBS-01 — Health semantics
- OBS-02 — Metrics and tracing conventions
- OBS-03 — Structured correlation
- OBS-04 — Operational readiness
- OBS-05 — Diagnostics and privacy
- OBS-06 — Reliability controls

## Native Goravel

- Telemetry
- Log
- Config
- Artisan
- Route

## Go and candidate adapters

- context
- runtime/metrics
- compatible OpenTelemetry API graph

## Optional integration ports

- [Modules](modules.md)
- [Audit](audit.md)
- [Tenancy](tenancy.md)
- [Schedules](schedules.md)
- [Backups](backups.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestReadinessTimeoutBudgetAndLiveness
- TestMetricsCardinalityAndSecretRedaction
- TestNativeTelemetrySingleRegistration
- TestExporterFailureAndGracefulShutdown
- TestDiagnosticsAuthorizationAndNoMutation

## Boundaries

No new global telemetry SDK, guaranteed detection of all incidents, public pprof, tenant IDs as metrics labels or claim health success proves all business workflows correct.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Native provider registers health checks/instruments once → readiness request executes context-bounded checks with concurrency cap → aggregate required failures into 503 and optional failures into degraded according to config → return safe report. Detailed diagnostics require separate operator policy and redact before serialization. Telemetry export is asynchronous/bounded via the host stack; unavailable exporters never become an unbounded per-request retry loop. Startup detects incompatible known dependency combinations and refuses unsupported export profiles rather than suppressing warnings.

### Existing telemetry restrictions
Earlier Defender/Tenancy handoffs described conditional telemetry dependency exceptions. Do not assume those findings remain current or have been fixed: inspect the actual selected module graph, run a fresh called-symbol scan and record whether native log export is supported. A passing root-module scan is not proof of a larger consuming application's dependency safety. Never re-enable an unsupported exporter just because this package adds metrics.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [Goravel — Telemetry](https://www.goravel.dev/digging-deeper/telemetry.html) — Native telemetry composition; avoid installing a second global telemetry pipeline.
- [OpenTelemetry — Go](https://opentelemetry.io/docs/languages/go/) — Native Go instrumentation and signal integration.
- [OWASP — Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) — Redaction, integrity, access control and safe operational logging.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
