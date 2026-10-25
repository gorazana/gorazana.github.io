# History

Reusable command history and undo/redo primitives for editors, with explicit limits on reversing durable or external effects.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- HISTORY-01 — Typed command/effect contract with execute, inverse and revision preconditions
- HISTORY-02 — Independent bounded histories per document/workspace
- HISTORY-03 — Undo, redo, clean/save markers, grouped commands and safe coalescing
- HISTORY-04 — Branch truncation after a new edit and explicit history limits
- HISTORY-05 — Optional durable journal/snapshot adapters with codec versions and integrity
- HISTORY-06 — Renderer-independent state for keyboard/menu/history views

## Native Goravel

- Config
- Log
- ServiceProvider/factory
- Events
- optional persistence adapter

## Go and candidate adapters

- context
- sync
- encoding/json; bounded command/journal codec

## Optional integration ports

- [Activity](activity.md)
- [Audit](audit.md)
- [Documents](documents.md)

## Invariants

- Undo is not deletion of the security audit trail
- A refund or sent email is not reversed by popping a stack
- Shared editing requires a separate conflict/operation model, not a global stack
- Failed commands never advance the cursor
- Persisted payloads are bounded data and never arbitrary serialized Go closures

## Acceptance requirements

- Negative and boundary tests for each stated invariant
- Concurrent/stale revision and duplicate-command tests for the principal transition
- Real selected database transaction, migration-upgrade and recovery tests
- Cross-scope list/detail/count/export/relationship checks
- No real external side effects in ordinary fixtures; live-provider tests separately labeled
- Selected renderer tested for validation, keyboard, narrow layout and error states

## Boundaries

A reusable technical core with native Goravel adapters; no application-specific schema or required paid platform. Undo is not deletion of the security audit trail

## Model and lifecycle

HistoryID, CommandEnvelope, ExpectedRevision, InversePayload, Group, CleanMarker, Snapshot, JournalReceipt

Validate command -> apply to authorized target -> record successful effect -> advance history; undo/redo revalidates target revision and current authority.

## Research sources

- [Qt undo framework](https://doc.qt.io/qt-6/qundo.html) — Command/inverse/stack and clean/group concepts; Qt is a design reference, not a Go dependency.
