# Recruitment

Vacancies, candidates and reviewable hiring stages separate from employee and login-account records.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- RECRUITMENT-01 — Approved requisitions, positions and vacancy publication
- RECRUITMENT-02 — Candidate consent, applications and restricted attachments
- RECRUITMENT-03 — Interview scheduling and structured evaluation rubrics
- RECRUITMENT-04 — Conflict declarations, reviewed offers and acceptance evidence
- RECRUITMENT-05 — Controlled handoff into People after hire
- RECRUITMENT-06 — Retention, anonymization and candidate request handling

## Native Goravel

- Config
- ServiceProvider
- Validation
- Log
- Artisan
- ORM transactions for selected durable profiles
- Route/middleware for HTTP adapters
- Events/Queue only where declared

## Go and candidate adapters

- context
- time
- encoding/json
- Employment/legal policy remains host-owned

## Optional integration ports

- [People](people.md)
- [Directory](directory.md)
- [Bookings](bookings.md)
- [Records (DMS)](records.md)
- [Communications](communications.md)
- [Privacy](privacy.md)

## Invariants

- Candidate record never automatically creates a privileged account
- Interview notes are not visible to unrelated hiring teams
- Automated scoring never silently makes consequential hiring decisions

## Acceptance requirements

- Negative authorization, cross-scope list/detail/export and stale-revision cases
- Duplicate, reordered, expired and concurrent requests for every consequential transition
- Selected SQLite/PostgreSQL adapter migration, rollback and concurrency tests
- Provider contract tests; fixtures and genuine live service evidence labeled separately
- Accessible/narrow/keyboard frontend tests for each supported renderer

## Boundaries

Reusable contract and lifecycle only. Host identity, tenant admission, jurisdiction, detailed business schema and operational deployment remain application-owned. Optional ports are alternatives, not mandatory package dependencies.

## Model and lifecycle

Requisition, Vacancy, Candidate, Application, Interview, Evaluation, Offer

Approve vacancy -> receive application -> review -> interview -> offer -> accept/reject -> authorized onboarding.

## Research sources

- [Frappe HR](https://github.com/frappe/hrms) — Recruitment/workforce domain comparison, not a Go dependency.
