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
