# Decisions — eleventy-service

Cross-cutting decisions (two templates, dark default, section model,
names) live in the kincaid meta-repo: ~/projects/kincaid/docs/DECISIONS.md.

### DEC-S1: Section palette for services (2026-09-08)

**Status:** accepted

**Decision:** hero, services, process, testimonials, faq, contact. No
pricing band - service pricing is conversation-first; the FAQ can carry
a ranges answer. Contact is a mailto/form-endpoint band; the template
ships no form backend.

### DEC-S2: Warm palette variant (2026-09-08)

**Status:** accepted

**Decision:** Amber accent (#e0a370 dark / #b06a2e light), cream light
background (#faf8f3), warm neutrals - distinct from eleventy-product's
cool blue while sharing the exact same token names, theme mechanics,
fonts, and layout system.

### DEC-S3: Demo brand Harborlight Studio (2026-09-08)

**Status:** accepted

**Decision:** Generic, de-personalized fictional design studio as demo
content, per the family convention established in the tech-blog and
prose-blog de-personalization passes.

### DEC-S4: Work page instead of pricing page (2026-09-08)

**Status:** accepted

**Decision:** Subpages are About and Work; a services business sells
evidence, not tiers.

### DEC-S5: Branding centralized in metadata.js (2026-09-11)

**Status:** accepted

**Decision:** metadata.js is the single source for email and brand
accent colors ([dark, light] pairs); base.njk, the contact section, and
generate-icons.mjs all read from it instead of hardcoding values. A
rebrand (new client, new template instance) is a one-file edit.

### DEC-S6: Demo prose interpolates brand where possible (2026-09-11)

**Status:** accepted

**Decision:** Markdown bodies render through nunjucks
(markdownTemplateEngine: njk) so prose can reference
{{ metadata.title }} and stay in sync with the brand automatically.
Frontmatter string fields (quotes, ledes) can't interpolate, so those
were hand-written brand-neutral instead.
