# Billing

Provide provider-independent commercial billing with exact money arithmetic, durable payment evidence and idempotent settlement while leaving accounting/tax law to explicit adapters.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- BIL-01 — Money and pricing
- BIL-02 — Invoices and credit records
- BIL-03 — Subscriptions
- BIL-04 — Payment providers
- BIL-05 — Atomic domain settlement
- BIL-06 — Reconciliation and operations

## Native Goravel

- ORM/transactions
- Queue
- Events
- Http
- Crypt
- Log

## Go and candidate adapters

- integer/explicit decimal money
- provider SDKs optional

## Optional integration ports

- [Webhooks](webhooks.md)
- [Licensing](licensing.md)
- [Notifications](notifications.md)
- [Documents](documents.md)
- [Audit](audit.md)
- [Tenancy](tenancy.md)
- [Outbox](outbox.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestMoneyOverflowCurrencyAndRounding
- TestInvoiceFinalizationAndCreditImmutability
- TestSubscriptionTimeProrationAndCancellation
- TestPaymentDuplicateOutOfOrderAndWrongEvidence
- TestSettlementRollbackAndExternalPending
- TestPaymentTimeoutRefundReversalRecovery

## Boundaries

Not a general ledger, tax compliance engine, payroll, banking reconciliation product, PCI certification, storage for card PAN/CVV or guaranteed support in every merchant country.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Create draft with exact totals → finalize by CAS and freeze lines → persist payment intent/idempotency key → hosted checkout/provider request → verified callback or server reconcile → compare expected account/invoice/customer/currency/amount → settle payment, invoice/receipt and domain outbox together in the declared store. Domain order/entitlement consumers deduplicate by settlement ID and expose pending reconciliation when in other databases. Refund/reversal is a new audited state transition with entitlement compensation rules; it does not erase the original charge. Provider timeout after request is uncertain until verified.

### Payment and legal boundaries
Hosted checkout must keep PAN/CVV out of the host package and logs. Tax, invoice numbering, credit rules and retention vary by jurisdiction and legal entity; the host chooses a policy/adapter and obtains jurisdiction-specific review. Do not label this package ISO-, PCI- or tax-certified because its tests pass. The XOF example is a synthetic consumer example, not a statement that a particular merchant account can process it.

### Same-store versus distributed settlement
When the host order and billing records genuinely share one native transaction, provide a typed transaction participant. When they do not, emit a durable settlement event and wait for an entitlement/order receipt. The UI must distinguish payment verified from fulfillment complete. Retrying fulfillment must not repeat the provider charge.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [Goravel — Queues](https://www.goravel.dev/digging-deeper/queues.html) — Queue jobs and driver semantics; do not assume the default driver executes asynchronously.
- [Stripe — Webhooks](https://docs.stripe.com/webhooks) — Duplicate/out-of-order delivery and signature verification.
- [Paystack — Webhooks](https://paystack.com/docs/payments/webhooks/) — Paystack evidence delivery and verification for an optional payment adapter.
- [Stripe — Idempotent Requests](https://docs.stripe.com/api/idempotent_requests) — Provider idempotency semantics; do not assume all providers share them.
- [RFC 9457 — Problem Details](https://www.rfc-editor.org/rfc/rfc9457.html) — Standard structured HTTP error representation.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
