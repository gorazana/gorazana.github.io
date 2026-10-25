# AI Governance

Add scoped AI governance, retrieval/extraction jobs, tool permissions, evaluation and usage controls on top of Goravel’s native AI SDK.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- AI-01 — Governed requests
- AI-02 — Retrieval with provenance
- AI-03 — Structured extraction
- AI-04 — Tool execution boundary
- AI-05 — Evaluation and observability
- AI-06 — Durable operations and privacy

## Native Goravel

- AI SDK
- Queue
- Storage
- Validation
- ORM
- Telemetry
- Log

## Go and candidate adapters

- context
- encoding/json
- no second provider SDK by default

## Optional integration ports

- [Search](search.md)
- [Documents](documents.md)
- [Media](media.md)
- [Defender](defender.md)
- [Tenancy](tenancy.md)
- [Workflows](workflows.md)
- [Audit](audit.md)
- [Secrets](secrets.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestAIUsesNativeSDKWithoutDuplicateProvider
- TestPromptInjectionCannotAuthorizeTool
- TestRetrievalScopeCitationsAndStaleACL
- TestExtractionMissingValuesAndSchema
- TestBudgetConcurrentReservationAndUncertainUsage
- TestAIJobCancellationAndEvaluationRegression

## Boundaries

No new foundation model, universal autonomous agent with unrestricted shell, fabricated citations, guaranteed factual outputs, automatic compliance or a duplicate of native provider/streaming APIs.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Resolve use-case policy/current scope → classify allowed inputs → reserve budget atomically → load authorized source revisions → construct bounded native SDK request → validate structured output and source citations → mark ready or needs_review → reconcile actual usage. Retrieved instructions remain data. Before any model-requested tool call, validate tool schema, current actor/scope, action-specific policy and required approval; record idempotency receipt around side effect. Timeout after provider processing may consume tokens; preserve uncertain accounting and reconcile rather than silently zeroing usage.

### Provider support is reused, not renamed
Map each native SDK operation required by a use case to the actual installed public interface. An official adapter existing for a provider does not prove a model supports JSON schemas, tools, embeddings or streaming in the chosen combination. Maintain a capability matrix and fail unsupported requests explicitly.

### Human decision boundary
School safeguarding, admissions, HR, finance and medical-like data require domain-specific review policies. Extraction can prepare a draft and evidence; it must not autonomously approve payment, alter student status or disclose another tenant's document. Model output is untrusted input that passes the same validation and authorization as a human request.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [Goravel — AI SDK](https://www.goravel.dev/ai/sdk.html) — Native agent/provider/tool/streaming primitives that an AI governance package should reuse.
- [Goravel — Queues](https://www.goravel.dev/digging-deeper/queues.html) — Queue jobs and driver semantics; do not assume the default driver executes asynchronously.
- [OWASP — LLM Prompt Injection Prevention](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html) — Untrusted content must not acquire tool authority or override policy.
- [OWASP — SSRF Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html) — Destination validation, redirects and network egress boundaries.
- [OWASP — File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html) — Upload validation, limits, storage separation and unsafe content.
- [RFC 9457 — Problem Details](https://www.rfc-editor.org/rfc/rfc9457.html) — Standard structured HTTP error representation.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
