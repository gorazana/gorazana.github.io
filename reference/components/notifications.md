# Notifications

Deliver scoped, preference-aware in-app and external notifications with durable intent, channel adapters and honest delivery status.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- NOT-01 — Typed notification definitions
- NOT-02 — Recipient and preference resolution
- NOT-03 — Durable delivery
- NOT-04 — In-app inbox
- NOT-05 — Provider adapters
- NOT-06 — Operations

## Native Goravel

- Mail
- Queue
- Localization
- ORM
- Events
- Log

## Go and candidate adapters

- html/template
- text/template
- context

## Optional integration ports

- [Defender](defender.md)
- [Tenancy](tenancy.md)
- [Settings](settings.md)
- [Localization](localization.md)
- [Schedules](schedules.md)
- [Outbox](outbox.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestNotificationAtomicIntentAndReplay
- TestQuietHoursDSTAndConsentRecheck
- TestProviderTimeoutStaysUncertain
- TestInboxRecipientScopeAndRead
- TestTemplateSecretPreviewAndRetryPolicy

## Boundaries

No marketing-consent compliance promise, no guarantee exactly-once external delivery, no generic outbound webhooks substitute, and no mandatory SMS/cloud subscription.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Authorize sending category → resolve recipient and current preferences → validate template payload → persist intent/outbox → worker acquires fenced lease → recheck cancellation/consent → render trusted versioned template in locale → invoke channel with stable idempotency key → persist accepted/failed/uncertain. A provider accepting a message is not proof of delivery. A timeout after send is uncertain; reconciliation or provider idempotency is required before retry. In-app read status is a separate authorized mutation.

### Exactly-once wording
The durable intent is unique inside its store. The external channel may still produce duplicates when a network failure hides a successful send. Do not convert that uncertainty into a false failed status or a guarantee of exactly-once delivery. Sensitive one-time challenges belong to Defender delivery contracts; forwarding them must never persist plaintext in a generic notification timeline.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [Goravel — Queues](https://www.goravel.dev/digging-deeper/queues.html) — Queue jobs and driver semantics; do not assume the default driver executes asynchronously.
- [Goravel — Localization](https://www.goravel.dev/digging-deeper/localization.html) — Native language/translation support; add management and safe publication above it.
- [Laravel — Notifications](https://laravel.com/framework/docs/13.x/notifications) — Channel, delivery and notification preference design reference.
- [OWASP — Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) — Redaction, integrity, access control and safe operational logging.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
