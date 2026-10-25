# CMS

Structured content, editorial revisions and publication channels.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- CMS-01 — Typed content models and versioned schemas
- CMS-02 — Draft/review/published revisions and scheduled visibility
- CMS-03 — Localized slugs, redirects and scoped previews
- CMS-04 — Safe rich text, bounded blocks and controlled media references
- CMS-05 — Headless delivery and renderer-neutral publication events

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

- [Media](media.md)
- [Workflows](workflows.md)
- [Localization](localization.md)
- [Search](search.md)
- [Schedules](schedules.md)
- [API Kit](api-kit.md)
- [Content Safety](content-safety.md)

## Invariants

- Preview grants are scoped and expiring
- Slug uniqueness is channel/locale scoped and concurrency-safe
- Unsafe active content and unauthorized assets block publication

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

ContentType, FieldDefinition, Entry, Revision, Channel, Redirect, PreviewGrant, EditorialApproval

Draft -> review -> approved -> published; modifying live content creates another working revision.

## Research sources

- [Strapi content modeling](https://docs.strapi.io/cms/features/content-type-builder) — Content model comparison; do not assume edition-specific workflow features.
- [Drupal moderation](https://www.drupal.org/docs/8/core/modules/content-moderation/overview) — Published and working revisions are different state.
