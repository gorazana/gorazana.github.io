# Cases

Case intake, evidence, assignments and disposition for human-led work that is not a fixed pipeline.

**Kind:** business-module · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- CASES-01 — Versioned case types and intake validation
- CASES-02 — Participants, conflicts of interest and need-to-know access
- CASES-03 — Evidence links, milestones, tasks and lawful retention
- CASES-04 — Reviewed handover, escalation and decision records
- CASES-05 — Reopening, appeals and superseding determinations
- CASES-06 — Restricted search, reporting and bulk export checks

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
- CMMN terminology is comparative, not certified runtime support

## Optional integration ports

- [Directory](directory.md)
- [Records (DMS)](records.md)
- [Workflows](workflows.md)
- [Audit](audit.md)
- [Forms](forms.md)
- [Privacy](privacy.md)

## Invariants

- Case ownership does not imply organization-wide visibility
- Evidence links retain their original access policy
- Closed decisions are superseded, not silently overwritten

## Acceptance requirements

- Negative authorization, cross-scope list/detail/export and stale-revision cases
- Duplicate, reordered, expired and concurrent requests for every consequential transition
- Selected SQLite/PostgreSQL adapter migration, rollback and concurrency tests
- Provider contract tests; fixtures and genuine live service evidence labeled separately
- Accessible/narrow/keyboard frontend tests for each supported renderer

## Boundaries

Reusable contract and lifecycle only. Host identity, tenant admission, jurisdiction, detailed business schema and operational deployment remain application-owned. Optional ports are alternatives, not mandatory package dependencies.

## Model and lifecycle

Case, CaseType, Participant, EvidenceLink, Milestone, Determination, Appeal

Intake -> triage -> assign -> investigate -> review -> decide -> close or reopen.

## Research sources

- [CMMN 1.1 specification](https://www.omg.org/spec/CMMN/1.1/About-CMMN) — Case-management vocabulary; no claim to implement or certify CMMN.
