# Audit

Archive canonical scoped evidence with verifiable integrity, external checkpoints, retention policies and truthful limits against privileged tampering.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- AUD-01 — Canonical evidence
- AUD-02 — Integrity chains/checkpoints
- AUD-03 — Retention and holds
- AUD-04 — Verification/export
- AUD-05 — Durable ingestion
- AUD-06 — Operations/key lifecycle

## Native Goravel

- ORM/transactions
- Queue
- Storage
- Crypt
- Log

## Go and candidate adapters

- crypto/sha256
- crypto/hmac
- versioned canonical encoding

## Optional integration ports

- [Defender](defender.md)
- [Tenancy](tenancy.md)
- [Activity](activity.md)
- [Backups](backups.md)
- [Observability](observability.md)
- [Outbox](outbox.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestAuditCanonicalDedupAndConcurrency
- TestAuditTamperReorderAndTruncatedTail
- TestRetentionHoldAndBackendCapability
- TestAuditKeyRotationAndOfflineVerifier
- TestPoisonEvidenceDoesNotEraseBacklog

## Boundaries

No claim of statutory certification, absolute immutability against an administrator controlling store+keys+anchors, legal advice, raw secret archive or replacement for source transactional audit records.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Authenticate issuer/scope → validate canonical envelope and redaction → same-store sequence/hash append → return receipt → background signer creates deterministic checkpoint → independently anchor/store under configured retention. Verify recomputes each entry and chain and checks signed/anchored head; a local chain alone cannot prove a truncated tail never existed. Export carries exact canonical bytes and public key references. Retention deletion needs current hold checks and storage capability acknowledgement; failed deletion remains pending, not falsely purged.

### Threat model must appear in README
A malicious database administrator with access only to the SQL store may alter a local chain; an independent signed checkpoint can expose that. An administrator who also controls signer keys and anchor storage may forge a replacement history. State which role controls each component and the evidence latency. WORM object storage, external time-stamping and legal requirements are separate capabilities with their own verification, not automatic consequences of using SHA-256.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [OWASP — Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) — Redaction, integrity, access control and safe operational logging.
- [Go — crypto/ed25519](https://pkg.go.dev/crypto/ed25519) — Standard signature implementation; do not invent cryptography.
- [RFC 8785 — JSON Canonicalization Scheme](https://www.rfc-editor.org/rfc/rfc8785.html) — Interoperable canonical bytes for JSON signatures; test exact canonicalization.
- [Amazon S3 — Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html) — Object version retention and legal holds; different from a local hash chain.
- [CloudEvents](https://cloudevents.io/) — Portable event envelopes; not an event transport or delivery guarantee.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
