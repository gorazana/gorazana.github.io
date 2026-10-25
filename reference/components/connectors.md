# Connectors

Manage host-authorized external service connections, credential rotation, health and resumable connector jobs while keeping identity login in Defender.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- INT-01 — Connection registry
- INT-02 — OAuth authorization
- INT-03 — Secrets and rotation
- INT-04 — Connector operations
- INT-05 — Events and health
- INT-06 — Extensible adapters

## Native Goravel

- Http
- Crypt
- Queue
- ORM
- Events
- Log

## Go and candidate adapters

- golang.org/x/oauth2
- provider SDKs isolated
- context

## Optional integration ports

- [Defender](defender.md)
- [Tenancy](tenancy.md)
- [Secrets](secrets.md)
- [Webhooks](webhooks.md)
- [Sync](sync.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestOAuthStatePKCERedirectAndMixup
- TestRefreshGenerationRaceAndUncertainRotation
- TestConnectionScopeAndRevocation
- TestConnectorCursorRateAndIdempotency
- TestProviderEgressAndRedaction

## Boundaries

Not Defender login, OAuth authorization-server implementation, universal ETL tool, unscoped credential vault, anonymous API proxy or assumption that every provider supports refresh/idempotency.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Authorized principal starts connection for allowed provider/scopes → persist hashed state and protected PKCE verifier → exact redirect → verify one-time callback and issuer/account → exchange credentials and record consent. Refresh acquires current generation lease, invokes provider once, then CAS stores successor tokens. A timeout after rotating refresh is uncertain and may require provider recovery/reconnect; do not keep replaying an invalidated old token. External actions resolve current scope/consent and typed adapter, enforce rate budget and persist outcome/next cursor only after durable accepted result.

### Do not duplicate social authentication
Signing in with Google identifies a principal and belongs to Defender's identity providers. Granting an application permission to synchronize a Google calendar is an external connection, which may be a different account and requires separate consent, scopes and revocation. Sharing a redirect handler without preserving these distinctions risks account linking and confused-deputy errors. Document them separately in examples.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [Goravel — Queues](https://www.goravel.dev/digging-deeper/queues.html) — Queue jobs and driver semantics; do not assume the default driver executes asynchronously.
- [RFC 9700 — OAuth 2.0 Security BCP](https://www.rfc-editor.org/rfc/rfc9700.html) — Modern OAuth security requirements for external integration authorization.
- [OWASP — SSRF Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html) — Destination validation, redirects and network egress boundaries.
- [Standard Webhooks](https://www.standardwebhooks.com/) — Webhook identifiers, signatures, timestamps and delivery interoperability.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
