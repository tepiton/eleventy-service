---
phase: 1
phase_name: maintenance
updated: 2026-10-09
last_commit: b5894ce
---

# Current Focus

README drift cleanup complete (Phase 1): retired folio link dropped
from the family list, Deploy section corrected to Node 24. No open
work in this repo.

# Active Tasks

- [ ] Drop `audit=false` from `.npmrc` when eleventy 4 ships (DEC-S7)

# Context

- Section engine, design system, and demo content are in and verified
  (clean build, schema fires on bad front matter, css fully inlined)
- Subpages use layouts/page.njk (hero + stats/cards/projects blocks),
  shared with eleventy-product — keep them in sync
- Branding (email, accent palette) is centralized in metadata.js; a
  rebrand is a one-file edit (see DEC-S5); demo brand: Harborlight
  Studio
- Demo prose renders through nunjucks so it interpolates
  {{ metadata.title }} where frontmatter can't (see DEC-S6)
- Warm palette variant; cool variant lives in eleventy-product
- npm 12: `allowScripts` pins `fsevents@2.3.3` only (sharp 0.35.x has
  no install script); engines >=22, `.nvmrc` 24, CI node-version 24
- Remaining audit findings are braces→chokidar, dev-server-only and
  unfixable on eleventy 3; hidden from install output only (DEC-S7)
- eleventy-folio retired 2026-10-04 (template consolidation, recorded
  in tepiton/TEMPLATES/docs); family is five siblings + product +
  service now

# Next Session

No open work. Pick up here only when new feature work is requested.
