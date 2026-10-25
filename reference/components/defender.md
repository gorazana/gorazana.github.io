# Defender

Native identity, sessions, MFA, credential recovery and current scoped authorization.

**Kind:** package · **Availability:** Source preview · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- DEFENDER-OBS — Observed public boundary

## Native Goravel

- Host Config
- Log
- ServiceProvider/factory
- package-specific native providers as documented

## Go and candidate adapters

- Actual go.mod and nested module manifests are authoritative; do not infer current pins from this research.

## Optional integration ports


## Invariants

- Host owns users. No SAML, SCIM or self-operated OAuth/OIDC server. Client social/OIDC sign-in is different. Live-provider/device acceptance and conditional security findings remain separate.
- No mutation of existing runtime packages or releases is authorized by catalog publication

## Acceptance requirements

- Follow exact repository installed-consumer, database, security and workbench evidence
- Keep live providers/physical devices and independent review limitations explicit

## Boundaries

Host owns users. No SAML, SCIM or self-operated OAuth/OIDC server. Client social/OIDC sign-in is different. Live-provider/device acceptance and conditional security findings remain separate.

## Model and lifecycle

Use the actual repository public contracts and documentation; the catalog does not invent a replacement model.

Inspect pinned source -> choose actual supported configuration -> use public native provider/facade -> apply exact-version acceptance evidence.

## Research sources

- [Gorazana defender](https://github.com/gorazana/defender/blob/59a062139465866219b6ff358aee41333b92ab19/README.md) — Authorized source observation, not release acceptance.
