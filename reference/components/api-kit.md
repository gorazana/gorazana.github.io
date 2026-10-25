# API Kit

Standardize native Goravel API metadata, stable errors, pagination and OpenAPI generation without replacing routing, validation or authentication.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- API-01 — Typed route registry
- API-02 — Safe problem details
- API-03 — Pagination and concurrency
- API-04 — OpenAPI/docs/clients
- API-05 — Policy integration
- API-06 — Consumer and module extension

## Native Goravel

- Route
- Validation
- Auth/Gate
- Log
- Artisan

## Go and candidate adapters

- net/http
- encoding/json
- OpenAPI tooling selected by verified version

## Optional integration ports

- [Defender](defender.md)
- [Tenancy](tenancy.md)
- [Modules](modules.md)
- [Features](features.md)
- [Observability](observability.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestAPIProblemDetailsNoSecretLeak
- TestCursorScopeFilterTamperAndExpiry
- TestSpecRoutesExamplesAndClientCompile
- TestAPIBreakingChangeAndModuleCollision
- TestNativeHTTPPoliciesRemainActive

## Boundaries

Not an API gateway, new router, automatic authorization engine, universal GraphQL server or a claim generated docs enforce request validation.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Register typed route metadata during provider initialization → validate against actual native routes and unique operation IDs → freeze → generate deterministic OpenAPI. Runtime validation/controller executes native logic; errors map through registered safe categories to RFC 9457 shape. Cursor decode validates signature/version/expiry and exact query/scope before use; schema validation does not imply authorization. Request logging redacts sensitive headers/body fields and shares an opaque correlation ID.

### HTTP representation detail
RFC 9457 responses should use `application/problem+json` when supported by the host response API. The shown controller is a proposed compile target; during implementation use the verified native API to set the correct content type and validate it over HTTP. A generic JSON helper alone may leave `application/json`, so add a real response conformance test rather than assuming the header. Preserve backwards-compatible error codes; changes to public semantics require an upgrade note.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [OpenAPI — Specification](https://spec.openapis.org/oas/latest.html) — API description contract. Choose a tooling-compatible published version; latest does not imply generator support.
- [RFC 9457 — Problem Details](https://www.rfc-editor.org/rfc/rfc9457.html) — Standard structured HTTP error representation.
- [RFC 9700 — OAuth 2.0 Security BCP](https://www.rfc-editor.org/rfc/rfc9700.html) — Modern OAuth security requirements for external integration authorization.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
