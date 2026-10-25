# Forms

Versioned forms, validated submissions and review flows composed with domain-owned data policies.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- FORMS-01 — Versioned field schemas, accessible labels and conditional presentation
- FORMS-02 — Server-authoritative validation with schema-bound submission revisions
- FORMS-03 — Draft save, attachment limits and resumable authorized editing
- FORMS-04 — Consent text versioning and evidence for accepted submissions
- FORMS-05 — Review/export workflows and independent submission retention
- FORMS-06 — Renderer adapters for Go HTML and separately verified Inertia clients

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

- encoding/json
- html/template
- github.com/santhosh-tekuri/jsonschema/v6 — candidate; pin only after testing

## Optional integration ports

- [Content Safety](content-safety.md)
- [Media](media.md)
- [Workflows](workflows.md)
- [Data Exchange](data-exchange.md)
- [Privacy](privacy.md)

## Invariants

- Hiding a field does not remove server validation
- A schema cannot authorize arbitrary file destinations or code
- Changing a form does not reinterpret old submissions silently

## Acceptance requirements

- Negative authorization, cross-scope list/detail/export and stale-revision cases
- Duplicate, reordered, expired and concurrent requests for every consequential transition
- Selected SQLite/PostgreSQL adapter migration, rollback and concurrency tests
- Provider contract tests; fixtures and genuine live service evidence labeled separately
- Accessible/narrow/keyboard frontend tests for each supported renderer

## Boundaries

Reusable contract and lifecycle only. Host identity, tenant admission, jurisdiction, detailed business schema and operational deployment remain application-owned. Optional ports are alternatives, not mandatory package dependencies.

## Model and lifecycle

FormDefinition, SchemaRevision, Submission, Attachment, ConsentReceipt

Design -> validate -> publish immutable form revision -> collect -> validate -> review -> retain/export.

## Research sources

- [JSON Schema for Go](https://github.com/santhosh-tekuri/jsonschema) — Validation candidate; schema validation is not HTML sanitization.
