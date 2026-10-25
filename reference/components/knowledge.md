# Knowledge

Versioned internal or public knowledge collections with governed review and discovery.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- KNOWLEDGE-01 — Collections, articles, tags and ownership
- KNOWLEDGE-02 — Draft/review/publication and backlinks
- KNOWLEDGE-03 — Scoped visibility, review expiry and export
- KNOWLEDGE-04 — Permission-aware search and related content
- KNOWLEDGE-05 — Stale content reminders and optional acknowledgements

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

- [CMS](cms.md)
- [Search](search.md)
- [Media](media.md)
- [Schedules](schedules.md)
- [Content Safety](content-safety.md)

## Invariants

- Search snippets and bulk exports enforce article policy
- Sanitize rendered markup and embedded links
- Moving content cannot silently widen its audience

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

Collection, Article, Revision, VisibilityPolicy, ReviewAssignment, ReadAcknowledgement

Draft -> review -> visible -> archived; every revision retains attribution.

## Research sources

- [Drupal moderation](https://www.drupal.org/docs/8/core/modules/content-moderation/overview) — Published and working revisions are different state.
- [Frappe Helpdesk](https://docs.frappe.io/helpdesk/installation) — Support and customer/portal boundaries.
