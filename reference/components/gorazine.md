# Gorazine

Filament-inspired administration experience composed from public domain/security services and replaceable Go HTML or Inertia renderers.

**Kind:** composition · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- ADM-01 — Independent installation and multiple panels
- ADM-02 — Host-owned identity and scope
- ADM-03 — Resource, query and field schemas
- ADM-04 — Tables and forms
- ADM-05 — Authorized actions
- ADM-06 — Default HTML renderer
- ADM-07 — Design tokens and accessibility
- ADM-08 — Optional Inertia/custom rendering
- ADM-09 — Widgets and module contributions
- ADM-10 — Operations and upgrade experience

## Native Goravel

- Route
- View
- Validation
- Auth/Gate
- Storage
- Events
- Log

## Go and candidate adapters

- html/template
- optional tested Inertia server adapter

## Optional integration ports

- [Modules](modules.md)
- [Defender](defender.md)
- [Tenancy](tenancy.md)
- [Settings](settings.md)
- [Features](features.md)
- [Media](media.md)
- [Notifications](notifications.md)
- [Activity](activity.md)
- [Audit](audit.md)
- [Data Exchange](data-exchange.md)
- [Documents](documents.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestPlainGoravelInstallWithoutOtherPackages
- TestScopedCountsChoicesExportsAndMutations
- TestHTMLTemplatesEscapeAndOverride
- TestTokensAliasesDensityAndRTL
- TestActionRevisionIdempotencyAndNetworkFailure
- TestRendererConformance
- TestDisabledModuleContributionCannotExecute

## Boundaries

Owner-named administration composition. Reuse independent security/domain packages and renderer contracts; do not rebuild a monolithic admin engine. The old independent-package premise is superseded; ADM requirements are retained.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Current host identity and scope -> resource/query policy -> authorized typed page model -> renderer. Actions revalidate actor, scope, input and revision before calling the domain use case; partial results stay visible.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [Goravel — Views](https://www.goravel.dev/the-basics/views.html) — Native view integration and custom rendering; the documented default extension is .tmpl, not the requested .html.
- [Go — package html/template](https://pkg.go.dev/html/template) — Contextual escaping with trusted templates and untrusted data.
- [Filament — Documentation](https://filamentphp.com/docs) — Capability benchmark for resources, tables, forms, actions, panels and widgets; not a Go implementation.
- [Filament — Panel Configuration](https://filamentphp.com/docs/5.x/panel-configuration) — Independent panels and configuration patterns.
- [Filament — Security](https://filamentphp.com/docs/5.x/advanced/security) — Administrative UI authorization concerns; hiding UI is not server authorization.
- [Filament — Tenancy](https://filamentphp.com/docs/5.x/users/tenancy) — Tenant-aware admin patterns and the limits of automatic application isolation.
- [Inertia — Server-side Setup](https://inertiajs.com/docs/v3/installation/server-side-setup) — Server adapter requirements; non-Laravel integration needs a compatible adapter.
- [Inertia — The Protocol](https://inertiajs.com/docs/v3/core-concepts/the-protocol) — Protocol conformance required for an optional Inertia renderer.
- [Inertia — Community Adapters](https://inertiajs.com/docs/v3/installation/community-adapters) — Community integrations must be evaluated for the pinned client/server versions.
- [petaki/inertia-go — Source](https://github.com/petaki/inertia-go) — Candidate Go adapter; existence does not establish compatibility with the chosen Inertia major.
- [Design Tokens Community Group — Format 2025.10](https://www.designtokens.org/tr/2025.10/format/) — Typed tokens, aliases and interchange. Community specification, not a W3C Recommendation.
- [W3C — WCAG 2.2](https://www.w3.org/TR/WCAG22/) — Accessibility criteria; automated checks alone do not prove conformance.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
- [Filament resources](https://filamentphp.com/docs/5.x/resources/overview) — Resource/page comparison; not Go runtime code.
- [Filament tables](https://filamentphp.com/docs/5.x/tables/overview) — Query/table/action capabilities.
- [Filament schemas](https://filamentphp.com/docs/5.x/schemas/overview) — Typed UI composition patterns.
- [Filament actions](https://filamentphp.com/docs/5.x/actions/overview) — Action confirmation and form/modal patterns.
- [Filament tenancy](https://filamentphp.com/docs/5.x/users/tenancy) — Panel scope concerns; host policy still authoritative.
