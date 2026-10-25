# Localization

Extend native Goravel localization with validated catalog lifecycle, scoped locale resolution and explicit formatting, without installing a second translator by default.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- LOC-01 — Catalog management
- LOC-02 — Locale resolution
- LOC-03 — Message validation
- LOC-04 — Formatters
- LOC-05 — Publishing and overrides
- LOC-06 — UI/operations

## Native Goravel

- Localization
- View
- Config
- Storage
- Artisan
- Log

## Go and candidate adapters

- golang.org/x/text language/message candidates
- time

## Optional integration ports

- [Settings](settings.md)
- [Modules](modules.md)
- [Notifications](notifications.md)
- [Documents](documents.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestLocaleResolutionAndFallbackCycle
- TestPlaceholderPluralAndEscapeParity
- TestMoneyTimeFormattingVectors
- TestCatalogPublishAtomicAndOverrideSafe
- TestLocaleExpansionRTLConsumer

## Boundaries

Not machine translation by default, business-timezone inference, a replacement for native Goravel Lang or a promise of full ICU message support without a tested library.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Resolve permitted locale/timezone per request → find registered namespace → evaluate explicit acyclic fallback chain → fetch published immutable message → validate/format parameters with selected engine → return text for context-aware escaping by renderer. Never translate an HTML fragment and mark it trusted by default. Publication validates the entire candidate catalog and atomically swaps a version pointer; running requests keep their previous snapshot. Date and currency formatting require explicit semantic input, not ambiguous strings.

### Native feature first
Audit the installed native localization API in Phase 0 and map each requested capability to it. If native lookup already provides a behavior, delegate rather than implement a parallel competing store. A module contributes a namespace and bundled fallback language; the host chooses enabled locales. A translation key must not contain a private student ID or user token.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [Goravel — Localization](https://www.goravel.dev/digging-deeper/localization.html) — Native language/translation support; add management and safe publication above it.
- [Unicode — LDML / UTS #35](https://unicode.org/reports/tr35/) — Locale data and formatting; pin locale-data versions.
- [W3C — WCAG 2.2](https://www.w3.org/TR/WCAG22/) — Accessibility criteria; automated checks alone do not prove conformance.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
