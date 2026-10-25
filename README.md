# Gorazana showcase

**Live project documentation: https://gorazana.github.io/**

A static, data-driven technical showcase of reusable Goravel packages, business modules, developer tools and Gorazine. Research is not released software. All package versions stay 0.x.x until real application field evidence supports an explicit stable-release decision.

## One source of truth

The canonical catalog is [gorazana/ecosystem](https://github.com/gorazana/ecosystem) (access may be required). HTML, icons, access badges, release observations and the substantive [component references](https://github.com/gorazana/gorazana.github.io/tree/main/reference/components) are generated from its approved public fields. Do not hand-edit generated cards, versions or icons in this repository.

The private publisher runs every six hours or on manual dispatch using the existing owner-authorized self-hosted runner. It validates the canonical catalog, refreshes authenticated release observations, and pushes only the approved public projection here. The small wrapper lives in the private Defender repository because that repository owns the current runner; its source template and publisher remain in Gorazana/ecosystem. No Defender runtime code is executed.

This public repository never checks out private research and has no private-catalog credential. Its Pages workflow exports only checksum-verified files listed in `MANAGED.json`. It uses GitHub's short-lived Pages permissions, not deploy keys. Organization restrictions remain unchanged.

Updates require the laptop runner to be online and its existing GitHub CLI authorization to remain valid. GitHub schedules may be delayed. The source SHA, observation timestamp and workflow result show actual freshness; a badge does not imply a newly tested package. Failed observations retain their prior timestamps. Maintainers can run the private `ecosystem-showcase-sync.yml` workflow manually. Access, membership and commercial terms are explicit catalog policy, never inferred from repository visibility.

[Data contract](https://github.com/gorazana/gorazana.github.io/blob/main/reference/SHOWCASE_DATA.md) · [Research expansion](https://github.com/gorazana/gorazana.github.io/blob/main/reference/EXPANSION_REVIEW.md) · [Access policy](ACCESS.md)

## Get involved

Use the issue templates to ask about access, contribute research/testing, or correct a catalog fact. GitHub Watch supplies actual repository notifications. Issues are public: never submit secrets, payment details, private contracts or exploit material. Ask for a private security channel instead.

This is project documentation, not an e-commerce checkout or hosted application. No paid membership, price, donation destination or commercial entitlement is invented by a badge. Gorazana is independent of and not endorsed by Goravel.
