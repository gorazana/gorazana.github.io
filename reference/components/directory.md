# Directory

Reusable entity register for people, organisations, contact points and explicit relationships, distinct from login identities and domain roles.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- DIRECTORY-01 — Party records with person/organisation type and scoped stable identity
- DIRECTORY-02 — Contact points with verification/provenance and consent
- DIRECTORY-03 — Typed relationships with effective dates and bounded traversal
- DIRECTORY-04 — Reviewed duplicate proposals, merge redirects and split/correction evidence
- DIRECTORY-05 — Custom fields through typed extension schemas rather than an unbounded global attribute bag
- DIRECTORY-06 — Public contracts for CRM, People, School, Memberships and partner adapters

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

- [Accounts (UMS)](accounts.md)
- [CRM](crm.md)
- [People](people.md)
- [School](school.md)
- [Memberships](memberships.md)
- [Partners](partners.md)
- [Activity](activity.md)
- [Data Exchange](data-exchange.md)

## Invariants

- A person/contact is not automatically an authenticated principal
- Do not merge across scope on email/name similarity
- A customer/supplier/guardian/employee role belongs to the consuming domain
- Relationship traversal is bounded and authorized
- Merge produces stable redirects and provenance, not lost domain identity

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

Party, PersonDetails, OrganisationDetails, ContactPoint, RelationshipType, Relationship, MergeProposal, Redirect, Consent

Create/propose -> verify metadata -> relate -> review duplicate -> merge or correct -> retain/archive under policy.

## Research sources

- [Frappe CRM](https://docs.frappe.io/crm/introduction) — Leads, deals, contacts and organisations.
- [CiviCRM guide](https://docs.civicrm.org/user/en/latest/) — Contributions, membership, events, campaigns and contact relationships.
