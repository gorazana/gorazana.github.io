# Webhooks

Provide scoped webhook endpoint management, raw-body verification, durable delivery and safe retries without granting outbound access to arbitrary network targets.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- WHK-01 — Endpoint subscriptions
- WHK-02 — Outbound signing
- WHK-03 — Durable dispatch
- WHK-04 — Inbound verification
- WHK-05 — SSRF-safe egress
- WHK-06 — Observability/operator tools

## Native Goravel

- Route
- Queue
- Validation
- ORM
- Crypt
- Log

## Go and candidate adapters

- net/http
- net/url
- crypto/hmac
- crypto/subtle
- provider-specific signatures

## Optional integration ports

- [Connectors](connectors.md)
- [Billing](billing.md)
- [Audit](audit.md)
- [Outbox](outbox.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestWebhookRawBodySignatureRotationReplay
- TestWebhookSSRFRebindingRedirectAndIPv6
- TestWebhookCrashAndUnknownOutcome
- TestWebhookScopeAndAuthorizedReplay
- TestIngressDurableReceiptBeforeAck

## Boundaries

No exactly-once external execution, arbitrary internal network proxy, unauthenticated endpoint registration or assumption every provider follows Standard Webhooks.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Source transaction records event/outbox → select authorized active subscriptions → persist one delivery per endpoint → acquire fenced lease → resolve and validate destination at connection → sign exact stored bytes → send with stable ID/timestamp → record accepted/retryable/permanent/uncertain outcome. Inbound route limits body and preserves bytes before decoding; verifier validates provider signature and timestamp; receipt and domain processing intent commit before 2xx. Processing can then be asynchronous and idempotent. Do not acknowledge a failed durable receipt merely to avoid retries.

### Network and retry defaults
Do not disable TLS verification to make development callbacks work. A dedicated local test transport can be injected in tests and must not be selectable by untrusted requests. Provider POST success is acknowledgement, not proof the subscriber applied the business change. Replay uses the original identity and a new delivery attempt, never silently a new event ID. Receiver deduplication is documented as part of the integration contract.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [Goravel — Queues](https://www.goravel.dev/digging-deeper/queues.html) — Queue jobs and driver semantics; do not assume the default driver executes asynchronously.
- [Standard Webhooks](https://www.standardwebhooks.com/) — Webhook identifiers, signatures, timestamps and delivery interoperability.
- [Stripe — Webhooks](https://docs.stripe.com/webhooks) — Duplicate/out-of-order delivery and signature verification.
- [OWASP — SSRF Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html) — Destination validation, redirects and network egress boundaries.
- [Paystack — Webhooks](https://paystack.com/docs/payments/webhooks/) — Paystack evidence delivery and verification for an optional payment adapter.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
