# Licensing

Verify signed commercial entitlements, coordinate optional online activation and support explicit bounded offline operation without penalizing the free foundation.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c83adc7c4503`.

## Capabilities

- LIC-01 — Signed entitlement verification
- LIC-02 — Optional activation
- LIC-03 — Offline rules
- LIC-04 — Seats and devices
- LIC-05 — Key and revocation lifecycle
- LIC-06 — Host integration

## Native Goravel

- Crypt/keyring
- ORM
- Http
- Log

## Go and candidate adapters

- crypto/ed25519
- crypto/rand
- fixed canonical signing serialization

## Optional integration ports

- [Billing](billing.md)
- [Features](features.md)
- [Modules](modules.md)
- [Defender](defender.md)
- [Secrets](secrets.md)

## Invariants

- Current identity/admission and explicit-deny rules remain authoritative
- Applied migrations stay immutable; sensitive state and audit share a declared transaction where claimed
- Failures, retries, resource bounds, partial/unknown effects and source ownership are explicit

## Acceptance requirements

- TestLicenseSignatureCanonicalVectors
- TestOfflineExpiryClockRollbackAndGrace
- TestActivationTimeoutReplayAndSeats
- TestRotationAndRevocationRetention
- TestReinstallRecoveryDoesNotInventMachineIdentity

## Boundaries

No home-grown cryptography, global offline seat-count guarantee, anti-piracy certainty, permanent fingerprint of a physical machine, payment processing, hidden telemetry or disabling free/local backups when a paid license expires.

## Model and lifecycle

Typed contracts, owned persistence and configuration are preserved in SOURCE_REFERENCE.md, original sections 5–6. Adapt to the actual implementation; these are not applied migrations.

Decode bounded envelope → enforce fixed schema/algorithm → select pinned trusted key by key ID → verify exact signed canonical bytes → validate issuer/audience/device/time/capacity → return typed status. Entitled checks the verified status and signed grants, never a UI flag. Activation persists request identity before network call; timeout after remote acceptance is uncertain and must reconcile using the same key. Expiry restricts paid actions with a clear message while preserving reading/export/backup policy and all free features.

### Operational truth
A user controlling the operating system can modify application code, restore old disks and alter clocks. A local verifier can validate a signature and apply a policy; it cannot provide absolute DRM or instantaneous offline revocation. A signed bounded offline lease and server-side benefits are the practical controls. Never store an issuer secret in Wails resources, obfuscated JavaScript or a Go binary.

### Commercial boundaries
Billing reports payment/subscription facts. A trusted licensing issuer converts those facts to grants. Features controls rollout; Defender still authorizes the actor. Paid module availability is the intersection of these decisions. A grace period and access to existing data must be documented per feature, not hard-coded as delete-all or deny-login.

## Research sources

- [Goravel — Package Development](https://www.goravel.dev/digging-deeper/package-development.html) — Native package installation, setup, providers, tagged publishing, migrations and assets.
- [Keygen — Offline Licensing](https://keygen.sh/docs/choosing-a-licensing-model/offline-licenses/) — Offline license verification patterns and trust boundaries.
- [Go — crypto/ed25519](https://pkg.go.dev/crypto/ed25519) — Standard signature implementation; do not invent cryptography.
- [RFC 8785 — JSON Canonicalization Scheme](https://www.rfc-editor.org/rfc/rfc8785.html) — Interoperable canonical bytes for JSON signatures; test exact canonicalization.
- [Goravel — Service Providers](https://www.goravel.dev/architecture-concepts/service-providers.html) — Register/Boot ordering, dependency binding and runner lifecycle.
- [Goravel — Migrations](https://www.goravel.dev/database/migrations.html) — Native migrations and explicit deployment operations.
- [GitHub — Secure Use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) — Workflow trust boundaries, credentials and self-hosted runner risks.
- [Go — Vulnerability Management](https://go.dev/doc/security/vuln/) — Dependency and called-symbol analysis; scans are evidence, not security certification.
