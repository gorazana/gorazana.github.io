# Gorazana site design system

This file captures the design decisions and the house voice for the public
showcase, so the look and tone stay consistent across future work. It is
presentation guidance only. The catalog data contract lives in
`SHOWCASE_DATA.md`; nothing here changes what is projected from the private
canonical catalog or how access or versions are decided.

## Identity and tone

- The site should read as a software-engineering universe: an assembly line of
  well-made parts, not a generic marketing page. Mature, credible, calm.
  The reference point for restraint and credibility is a serious open-source
  foundation site, not a flashy product launch.
- It speaks to developers, but in an appealing, professional way. Never
  childish, never gimmicky.

## Typography

- Typeface: Geist (sans) for everything, Geist Mono only for genuine technical
  facts: version numbers, data hashes, spec IDs, metric counts, build stamps.
  Self-hosted in `assets/fonts` so the strict Content-Security-Policy holds.
- Sizes are restrained: body about 15.5px, headings pulled down and set at 600
  weight. Avoid oversized, heavy headings.

## Colour

- Light canvas is a soft cool tint (not pure white); cards are white and lift
  off it. A full light/dark theme switch is provided (side dock); dark tokens
  live under `:root[data-theme="dark"]`.
- Brand accent is teal (`--teal` / `--teal-2`) with a mint highlight on dark
  bands and a restrained gold hairline accent. Teal on white is kept dark
  enough to read (contrast matters: never light green text on a white panel).
- The hero and every inner-page lead band are dark engineered panels with a
  faint blueprint grid, so the "hero leads" on every page, not just the home.

## Voice and copy rules

- Write "and", never an ampersand in prose or headings.
- Do not use em dashes or en dashes. Use a short hyphen, or rewrite. Keep
  sentences plain; avoid AI-tell punctuation and separators (no pipe `|`
  separators, no decorative symbols standing in for words).
- Be honest about status: research is not released software; a badge never
  invents a price, a membership or an entitlement. Access terms are shown per
  component, from the catalog, and are "unannounced" until explicitly decided.

## Components

- Header: sticky, soft drop shadow, a thin teal-to-gold accent line on top.
  Every nav item is a dropdown of the same quality as the Catalog mega-menu,
  with icons: real package icons for the Catalog, line icons elsewhere.
- Sponsor control: brand teal (outline that fills on hover), never yellow, and
  sized to sit quietly in the bar.
- Supporters marquee (home): a seamless, continuous logo flow built from real
  tool icons in `assets/brands`. Pauses on hover; respects reduced motion.
  Framed as "built with the tools that help us build" with thanks, not as paid
  sponsorship. Replace wordmarks/placeholder marks with official logos only
  once each project's trademark use is cleared.
- Sponsorship band (Connect): "a community, not a checkout." Support goes
  through GitHub Sponsors; no payment, account or email capture is hosted on
  the site (GitHub Pages is documentation, not commerce).
- Cards are engineered modules; badges are CI-style status chips with a leading
  status dot. The component page reads as a datasheet; releases read as a build
  ledger.
- Side dock (right): theme switch, sponsor, contribute, GitHub. A back-to-top
  arrow appears after scrolling. Both are injected by `assets/site.js`.

## Build and deploy note

Presentation lives in `assets/site.css`, `assets/site.js`, `assets/fonts`,
`assets/brands`, and the header/footer markup baked into each page. The page
bodies and the catalog data are still generated from the private canonical
catalog. For this presentation to survive the private publisher's scheduled
republish, the publisher must either carry these templates/assets or publish
data only and leave presentation to this repository. `MANAGED.json` lists and
checksums every deployed file, including the new fonts and brand icons.
