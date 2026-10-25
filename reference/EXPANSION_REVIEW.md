# Broader application research and ecosystem improvements

Research date: 25 October 2026. This is a capability assessment, not a delivery roadmap.

## Evidence and ownership

The preceding catalog contains 66 classified entries and preserves 144 requirements from the owner's original archive. The supplied twelve-item Software Ideas excerpt and the separately supplied twenty-five-item taxonomy remain in SOURCE_MAPPING.md. This review does not silently rewrite their claims. It adds **14 authored candidates**, giving **80 entries: 34 packages, 42 business modules, 3 tools and one composition**. Research entries are not released products, and repository existence does not establish live-provider or independent security acceptance.

The XR01–XR20 references in the source register are primary specifications, project repositories and official documentation checked in this pass. Their implementation details inform comparisons, not promises that those libraries are already installed, license-approved or compatible with the chosen Goravel/Go versions. The requirements and placement decisions below are Gorazana proposals. All candidate libraries need version-specific license, maintenance, supply-chain and performance review before adoption.

## The gaps worth filling

### Realtime — package

Native events and work queues do not by themselves define authenticated browser connections, channel authorization, reconnect continuity or fan-out limits. Centrifuge offers a concrete Go realtime comparison [XR01]; AsyncAPI and CloudEvents help describe channel and event contracts [XR12, XR13]. The proposed package owns transport adapters, event envelopes, bounded replay and backpressure. It must authorize subscriptions and publications from live scope, reject stale credentials, cap channel fan-out and disclose replay loss. It must not replace the application's domain events, security authority or a durable outbox.

Acceptance must include reconnect storms, slow consumers, tenant/channel denial, revocation, duplicate and reordered messages, proxy timeouts and graceful node shutdown. WebSocket, SSE and polling are selectable capabilities rather than unconditional simultaneous dependencies.

### Collaboration — package

Yjs and Automerge demonstrate distinct collaborative-data approaches [XR02, XR03]. Gorazana should not implement an original CRDT merely to appear complete. This package is a provider boundary for document sessions, presence, version/snapshot interoperability and conflict presentation. Documents, Records and CMS still own object meaning, publication, permissions and retention. Presence is ephemeral and cannot count as an edit or authorization fact.

The provider must publish its data-format compatibility, offline/reconnect behavior, compaction limits, deletion semantics and migration/export story. Tests need concurrent edits, an offline collaborator reconnecting after revocation, tombstone growth, unsupported schema versions and recovery from corrupt snapshots. JavaScript CRDT clients and Go authority/storage integration are different deployable parts.

### Geospatial — package

Simple Features provides an existing Go geometry comparison [XR04]. The package should normalize coordinates/CRS, bounded geometry operations, distance/search contracts and provider-specific geocoding/routing adapters. It should not assume that a paid map vendor or PostGIS is always available. Logistics and device applications own routing priorities, schedules and physical decisions.

Coordinates, antimeridian crossing, coordinate order, invalid polygons, precision, spatial indexing and location privacy require explicit acceptance. A cache of location fixes is not evidence that a person or asset is currently there. Provider billing, attribution and map licensing stay explicit.

### Metering — package

OpenMeter supplies a useful comparison for usage ingestion, aggregation and entitlement/billing interfaces [XR05]. Reusable metering should own idempotent usage events, event-time windows, late corrections and reconciliation—not the payment ledger, business pricing or tenant admission. Billing receives reviewed measurements, not arbitrary browser counts.

Support auditable aggregation versions, units, clock skew, replay handling, revisions and durable outbox intake. Tests should reconcile raw events to aggregates, reject dimension explosion and show the effect of corrected usage. Quotas and commercial entitlement do not replace authorization.

### Rules — package

CEL-Go (canonical repository `cel-expr/cel-go`, Go import `cel.dev/cel-go`) is a primary comparison for typed, embeddable expression evaluation [XR06]. Gorazana's candidate owns a bounded evaluation environment, registered facts/functions, versioned rules and explainable decisions. It does not become a second Defender or permit arbitrary scripts, filesystem access or network calls during policy evaluation.

Set expression complexity, evaluation-time and memory budgets; version facts; freeze reviewed rules; and return explicit unknown/error states. Test missing facts, hostile expressions, rule changes during execution and deterministic replay. Business rules, access rules and irreversible workflow execution require distinct host boundaries.

### Forms — package

JSON Schema validation is an established primitive [XR07], but a form also needs field definitions, renderer adapters, accessibility, conditional visibility, drafts, safe uploads and typed submissions. This package owns the reusable form contract. Surveys owns research/questionnaire semantics; CMS owns editorial models; business modules own their own submission decisions.

Do not treat schema validation as HTML sanitization or authorization. Test hidden-but-submitted fields, stale form revisions, locale/RTL, keyboard and error focus, unsupported widget capabilities, duplicate submissions and cross-tenant attachment references. A Go-template renderer and Vue/React adapters can share a contract without pretending to share one executable UI.

### Privacy — business module

The NIST Privacy Framework is a risk-management reference, not a certification or universal legal rule [XR17]. A reusable module can own purpose/processing inventories, consent receipts, data-subject requests, retention requests and evidence of completion or exception. Each application supplies its own lawful basis, jurisdiction, identity verification and record-retention policy.

Erasure is a coordinated workflow across records, audit, backups, search indexes and processors—not a single SQL DELETE. Tests must cover legal holds, competing requests, failed processors, revoked consent, unknown data ownership and a human review before irreversible effects. Do not label this module automatically GDPR/HIPAA compliant.

### Devices — business module

The Eclipse Paho Go MQTT client supplies a transport comparison [XR08]; it is not the device model. The module owns enrolled devices, ownership, credentials/rotation, capabilities, desired/reported state and bounded telemetry/command receipts. Realtime, Outbox, Secrets and host policy can provide optional integration.

Test stale device credentials, duplicate telemetry, intermittent links, expired commands, acknowledgement ambiguity, quarantined devices and fleet query limits. Hardware-specific commands and firmware safety remain adapter/application responsibilities. Never equate a broker acknowledgement with successful physical actuation.

### Logistics — business module

ERPNext's stock concepts provide a comparison for locations and inventory movement [XR16]. A reusable logistics module covers shipments, parcels, carrier adapters, tracking observations, proof-of-delivery references and exception handling. Inventory owns stock facts; Commerce owns orders; Billing owns money; provider tracking events are evidence, not automatically authoritative state.

Require idempotent label requests, webhook verification, cancellation races, partial deliveries, address privacy, declared dimensions/units and carrier reconciliation. Customs/tax rules and hazardous-goods policy remain jurisdiction-specific. Mapping is optional, not a mandatory SaaS subscription.

### Manufacturing — business module

ERPNext manufacturing documentation offers concrete bill-of-materials, operations and work-order comparisons [XR15]. Gorazana can reuse revisioned BOMs, production orders, consumption/output records, operation dependencies and quality/exception hooks. Inventory owns physical stock, Procurement buys inputs, Assets owns equipment and Accounting owns postings.

Batch/serial provenance, scrap, substitute parts, quantity rounding, approvals, concurrent reservations and reversal accounting must be explicit. Planning estimates are not proof of stock or machine capacity. Shop-floor procedures and regulated quality certification cannot be generalized away.

### Cases — business module

OMG CMMN provides a case-management reference [XR18]. The module should represent flexible cases with participants, evidence, tasks, milestones, escalation and closure/reopening records, instead of forcing every process into a fixed task sequence. Workflows can execute bounded transitions; Records holds documents; Directory resolves parties.

Test confidential participant access, redaction, competing assignments, missing evidence, time-zone-aware deadlines and reopening without erasing the original closure. Legal, medical and government decisions remain application-specific human authorities, not automated generic recommendations.

### Recruitment — business module

Frappe HRMS is a reference for applicant/requisition and workforce boundaries [XR09]. Recruitment owns requisitions, candidates, interviews, evaluations, offers and a deliberate handoff into People. A candidate profile must not silently become an employee, account or tenant member.

Structured evaluations, consent/retention, anonymized reviewer views where selected, access segregation, scheduling, offer revisions and deletion holds deserve tests. Candidate ranking must be explainable and reviewable; autonomous discriminatory scoring is not a supplied feature. Background checks and contracts are provider/legal integrations.

### Experiments — business module

GrowthBook and OpenFeature help separate experiments from flag-provider mechanics [XR10, XR14]. Features can deliver a variant; Experiments owns hypotheses, allocation definitions, exposure receipts, metrics, guardrails, exclusions and reproducible analysis. Analytics owns governed metrics. A flag is not automatically a randomized controlled experiment.

Test stable assignment, subject/tenant boundaries, repeated exposure, carry-over effects, sample-ratio mismatch and metric/version changes. Guardrail failures should be visible. Do not auto-promote a variation based on a simplistic positive chart or invent causal conclusions.

### Testbench — developer tool

Testcontainers-Go provides a useful disposable-environment comparison [XR11], but Docker availability must not be assumed. Testbench is proposed as a manifest-driven conformance runner for native-host installation, publication/rollback, module migrations, database profiles, browser adapters and component composition. It records exact versions, passed/failed/skipped checks and fixtures versus live-provider evidence.

Prefer existing native self-hosted tooling when it supplies the same coverage. Include deterministic seeds, bounded parallelism, owned cleanup and machine-readable evidence. Never turn skipped databases or synthetic HTTP into a green real-browser/live-service claim. The tool does not grant release approval; owner approval and real-user field trials remain independent.

## Improvements across the existing catalog

1. **One authority for each fact.** Defender or the host owns identity/authorization; Tenancy owns admitted tenant placement; domain modules own business truth. API Kit, Gorazine, frontend adapters and feature flags may not make independent admission decisions.
2. **Interoperability contracts.** Use versioned event envelopes, bounded payloads and declared delivery semantics. Outbox, Notifications, Connectors, Realtime and Workflows should share capability contracts without becoming one giant package. CloudEvents/AsyncAPI are candidates where justified, not mandatory extra layers [XR12, XR13].
3. **Safe mutations and migrations.** Idempotency, optimistic revisions, audit transaction boundaries, recovery and old/new schema compatibility are acceptance requirements. Published applied migrations stay immutable. Runtime installation of arbitrary Go source is not implied by selecting a module.
4. **Offline and multi-device boundaries.** Sync requires conflict ownership, revocation handling, outbox durability and explicit authoritative-server rules. A desktop starter is not simply a website packaged with an unrestricted filesystem bridge.
5. **Resource budgets.** Every inventory, upload, report, expression, queue and retry loop needs limits. Bounded cardinality and redacted identifiers belong in diagnostics; arbitrary personal payloads do not.
6. **Accessibility and localization.** UI contracts should include focus/error navigation, semantic controls, text alternatives, locale/RTL/timezones and reduced motion. Tests and manual assistive-technology checks must be identified separately.
7. **Privacy versus audit.** Retention, erasure and audit evidence can conflict. Store minimal references and reviewed exceptions, not a universal promise of irreversible logging and simultaneous total deletion.
8. **Licensing and cost.** Library license review, provider billing and component access policy are separate dimensions. An open-source dependency does not make the full application free to operate. No paid provider becomes mandatory merely because it appears in research.
9. **Domain money and quantities.** Billing, Commerce, Accounting, Inventory and Metering need explicit units, rounding, currency, reconciliation and correction histories. One ambiguous numeric field is not a shared business contract.
10. **Honest capabilities.** Each renderer, database and provider declares supported profiles and evidence. No generic adapter implies tested support for every provider. Public status must distinguish research, observed source and a verified canonical release.

## Application compositions, not new monoliths

The showcase illustrates ten proposed combinations: APIs, multi-tenant SaaS, publishing, commerce/fulfilment, education, offline field operations, collaborative workspaces, manufacturing, workforce operations and case/community services. They are dependency conversations, not installable starters until Create and each selected provider actually pass composition tests.

Gorazine remains the administration composition, not a replacement domain engine. Create remains an application assembly tool, not a claim that every combination compiles. The Modules package manages module registration and lifecycle; CMS, Accounts and Records remain separate domain modules. Package Skeleton is the source-development foundation, not a runtime plug-in loader.

## Deliberately not added

No duplicate Logger, Cache, universal Router, ORM, HTTP Client or arbitrary scheduler was added. Native Goravel providers remain first choice. Clinical EHR decisions, certified core banking, arbitrary country payroll/tax, CAD engines and industrial control systems are not claimed as generic reusable modules without separate specialist research and validation. SAML, SCIM and a self-hosted OAuth/OIDC authorization server remain excluded from Defender's requested scope.

## References

Use the XR-series in the generated source register and the linked repositories in each component dossier. Specific new sources include Centrifuge, Yjs, Automerge, Simple Features, OpenMeter, CEL-Go, santhosh-tekuri/jsonschema, Eclipse Paho, Frappe HRMS, GrowthBook, Testcontainers-Go, AsyncAPI, CloudEvents, OpenFeature, ERPNext Manufacturing/Stock, NIST Privacy Framework and OMG CMMN. These comparisons were selected to establish boundaries and acceptance questions, not to reproduce their products or promise every listed feature.
