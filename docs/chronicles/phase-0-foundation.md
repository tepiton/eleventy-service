# Phase 0: Foundation

## Session 1 — 2026-09-08

- Cloned the proven section engine, infra files, and design system from
  eleventy-product; adapted to port 8091.
- Service section palette: hero, services, process, testimonials, faq,
  contact. New partials: testimonials (quote cards), contact (details
  card with email/phone/location/response + mailto CTA). services and
  process reuse the card-grid and steps patterns under service names.
- Palette swapped to the warm variant: amber accent, cream light
  background, warm neutrals; token names and theme mechanics unchanged.
- Demo brand Harborlight Studio; about + work subpages; beacon mark
  icons generated with sharp.
- Carrying over the product template's engine gotchas into CLAUDE.md
  (directory data file named-export trap, YAML tab/colon rules, Nunjucks
  filter call syntax).

## Session 2 - 2026-09-09

- Subpages had no styling beyond the base skeleton. Added a shared
  layouts/page.njk (page hero band with eyebrow/title/lede, prose
  measure body) plus frontmatter-driven blocks: stats row, cards grid,
  projects list with tag chips, wide mode.
- Default layout switched to page.njk via content.11tydata.js;
  index.njk already pinned base.njk explicitly, so homepages are
  unchanged. 404 inherits the page treatment too.
- Rewrote all four subpages with real frontmatter and demo copy
  (keeping eleventyNavigation - YAML object form works fine).
- Verified in-browser: hero bands centered with border, 3-column
  contact cards, 4 project rows with 9 tag chips, nav intact, no
  horizontal overflow.

## Session 3 - 2026-09-10/11

- Added mimeo.template.json (js-key url -> https://{domain}/, url
  placeholder normalized to https://example.com/); trimmed
  author.email/author.url since no layout read them.
- Centralized branding in metadata.js: email (drives the contact band,
  frontmatter override still wins) and a brand block of [dark, light]
  accent pairs; base.njk re-emits accent/link tokens from it and
  generate-icons.mjs reads its accent from the same source - a rebrand
  is now one file. Fixed a stray blue dark-mode link-hover left over
  from the product palette. mimeo.template.json email parameterized
  (hello@{domain}) same as url. README gained a Make-it-yours checklist.
- Made demo prose follow the brand: hero/about bodies render through
  nunjucks (markdownTemplateEngine: njk) so {{ metadata.title }}
  interpolates; frontmatter fields can't interpolate, so the
  testimonial quote and about lede were rewritten brand-neutral, and
  "Where the name comes from" became "The standard". metadata.js hoists
  the name to a const so description follows title edits too.

See: DEC-S5, DEC-S6
