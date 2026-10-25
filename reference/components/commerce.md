# Commerce

Products, pricing, baskets, orders and fulfillment with replaceable payment and stock providers.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- COMMERCE-01 — Products, variants, attributes and channels
- COMMERCE-02 — Trusted prices, promotions, currency/minor-unit rules
- COMMERCE-03 — Baskets, quotes and expiring stock reservations
- COMMERCE-04 — Orders, partial fulfillment, returns and cancellations
- COMMERCE-05 — Verified payment/reversal observations and durable reconciliation

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

- [Billing](billing.md)
- [Inventory](inventory.md)
- [Media](media.md)
- [Notifications](notifications.md)
- [Webhooks](webhooks.md)
- [Invoicing](invoicing.md)
- [Outbox](outbox.md)

## Invariants

- Browser totals and success redirects never prove settlement
- Concurrent reservations cannot oversell
- Duplicate payment events cannot repeat fulfillment

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

Product, Variant, Channel, PriceList, Cart, Quote, Reservation, Order, Fulfillment, Return

Quote -> reserve -> payment pending -> accepted/paid -> fulfill -> complete; refunds and reversals remain explicit.

## Research sources

- [Medusa modular commerce](https://docs.medusajs.com/learn/fundamentals/modules) — Modular commerce boundaries; not a Go dependency.
- [Vendure channels](https://docs.vendure.io/current/framework/core-concepts/channels) — Commercial channel concepts are distinct from tenant security.
