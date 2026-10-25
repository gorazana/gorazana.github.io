# Geospatial

Geometry, geographic queries and location policies for field, logistics and mapping applications.

**Kind:** package · **Availability:** Research · **Access:** Access unannounced

**Version:** No verified release

Research specification; not a claim that all features ship. Generated from Gorazana/ecosystem, data `c90a6091f561`.

## Capabilities

- GEOSPATIAL-01 — Coordinate-reference and unit-explicit geometry contracts
- GEOSPATIAL-02 — GeoJSON import/export with bounds and malformed geometry validation
- GEOSPATIAL-03 — Spatial predicates with real database capability reporting
- GEOSPATIAL-04 — Geofences, precision reduction and location privacy profiles
- GEOSPATIAL-05 — Replaceable geocoding/routing/map providers with attribution and quotas
- GEOSPATIAL-06 — Indexed query limits and antimeridian/polar boundary testing

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
- math
- github.com/peterstace/simplefeatures — candidate
- PostGIS adapter where selected; not required for every app

## Optional integration ports

- [Data Exchange](data-exchange.md)
- [Connectors](connectors.md)
- [Search](search.md)
- [Privacy](privacy.md)

## Invariants

- Latitude/longitude order and units are never inferred silently
- Map output cannot bypass record access or precision policy
- Driver absence returns unsupported rather than a fabricated result

## Acceptance requirements

- Negative authorization, cross-scope list/detail/export and stale-revision cases
- Duplicate, reordered, expired and concurrent requests for every consequential transition
- Selected SQLite/PostgreSQL adapter migration, rollback and concurrency tests
- Provider contract tests; fixtures and genuine live service evidence labeled separately
- Accessible/narrow/keyboard frontend tests for each supported renderer

## Boundaries

Reusable contract and lifecycle only. Host identity, tenant admission, jurisdiction, detailed business schema and operational deployment remain application-owned. Optional ports are alternatives, not mandatory package dependencies.

## Model and lifecycle

Geometry, CoordinateSystem, GeoFence, LocationSample, SpatialQuery

Validate geometry -> normalize declared coordinates -> authorize query -> execute supported spatial adapter -> return bounded precision.

## Research sources

- [Simple Features — Go geometries](https://github.com/peterstace/simplefeatures) — Geometry candidate; coordinate systems and database spatial operations remain explicit.
