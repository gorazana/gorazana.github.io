# Secrets

Provider-neutral secret references, leases and KMS/transit access through native host configuration and approved external drivers.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- SECRETS-01 — Reference resolver with scope, purpose, version and authorized operation
- SECRETS-02 — Local environment/keyring or self-hosted/cloud provider adapters explicitly selected
- SECRETS-03 — Lease expiry, renewal, revocation and rotation with generation checks
- SECRETS-04 — Remote transit/envelope operations through proven providers, not custom cryptography
- SECRETS-05 — Redacted errors and audit metadata without secret payloads
- SECRETS-06 — Fail-closed readiness for required secrets and bounded cache lifetime

## Native Goravel

- Config
- Log
- ServiceProvider/factory
- Crypt
- Http (selected external adapters)

## Go and candidate adapters

- context
- crypto/rand
- proven host/provider cryptographic APIs; no custom algorithms

## Optional integration ports

- [Settings](settings.md)
- [Connectors](connectors.md)
- [Audit](audit.md)

## Invariants

- Secrets never enter settings exports, recipes, telemetry or queue bodies
- A tenant cannot pick an arbitrary vault path or key alias
- No silent fallback to a plaintext value when a required provider fails
- Cache cannot outlive lease/security policy
- Private signing keys are not copied into clients
- Adapter licensing/deployment requirements are explicit, no paid KMS mandate

## Acceptance requirements

- Negative and boundary tests for each stated invariant
- Concurrent/stale revision and duplicate-command tests for the principal transition
- Real selected database transaction, migration-upgrade and recovery tests
- Cross-scope list/detail/count/export/relationship checks
- No real external side effects in ordinary fixtures; live-provider tests separately labeled
- Selected renderer tested for validation, keyboard, narrow layout and error states

## Boundaries

A reusable technical core with native Goravel adapters; no application-specific schema or required paid platform. Secrets never enter settings exports, recipes, telemetry or queue bodies

## Model and lifecycle

SecretReference, ResolverPolicy, Lease, KeyVersion, RotationReceipt, TransitRequest, RedactedObservation

Authorize reference/purpose -> resolve exact provider/version -> obtain lease/value or remote operation result -> use within deadline -> revoke/renew under policy.

## Research sources

- [OpenBao transit](https://openbao.org/docs/secrets/transit/) — Remote cryptographic operations and key-version boundaries; optional provider.
- [Vault transit](https://developer.hashicorp.com/vault/docs/secrets/transit) — Provider comparison, not a mandatory SaaS or a new cryptography engine.
