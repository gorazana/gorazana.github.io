# Content Safety

Reusable context-specific content policies for rich text, links and embedded resource references; not a replacement for native request validation.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- CONTENT_SAFETY-01 — Named versioned sanitization policies with strict allowlists
- CONTENT_SAFETY-02 — Safe rich text/HTML transformation via reviewed parser/sanitizer libraries
- CONTENT_SAFETY-03 — URL scheme/origin/embed policy and resource-reference validation
- CONTENT_SAFETY-04 — Typed result carrying policy/input/output digest and safe-context label
- CONTENT_SAFETY-05 — Migration/re-sanitization receipts when a policy changes
- CONTENT_SAFETY-06 — Integration tests for renderer-specific contexts and malicious payload corpora

## Native Goravel

- Config
- Log
- ServiceProvider/factory
- Validation

## Go and candidate adapters

- html/template (output escaping)
- reviewed github.com/microcosm-cc/bluemonday candidate; no regex sanitizer

## Optional integration ports

- [CMS](cms.md)
- [Knowledge](knowledge.md)
- [Communications](communications.md)
- [Media](media.md)
- [Documents](documents.md)

## Invariants

- Validation and HTML sanitization are different controls
- Sanitized HTML is not automatically safe JavaScript/CSS/URL
- Never implement sanitizer as regular-expression stripping
- No arbitrary safe-HTML cast of untrusted data
- A policy change may invalidate stored derivatives
- Document output escaping and CSP as separate defenses

## Acceptance requirements

- Negative and boundary tests for each stated invariant
- Concurrent/stale revision and duplicate-command tests for the principal transition
- Real selected database transaction, migration-upgrade and recovery tests
- Cross-scope list/detail/count/export/relationship checks
- No real external side effects in ordinary fixtures; live-provider tests separately labeled
- Selected renderer tested for validation, keyboard, narrow layout and error states

## Boundaries

A reusable technical core with native Goravel adapters; no application-specific schema or required paid platform. Validation and HTML sanitization are different controls

## Model and lifecycle

PolicyID, PolicyVersion, InputClass, SanitizationResult, ResourceReference, RevalidationReceipt

Validate input bounds/type -> apply named policy -> validate references -> retain original under restricted policy if required -> render only in the declared context.

## Research sources

- [OWASP XSS prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) — Contextual output encoding and sanitization are distinct.
- [bluemonday Go sanitizer](https://pkg.go.dev/github.com/microcosm-cc/bluemonday) — Candidate allowlist HTML sanitizer; pin/review actual version before adoption.
