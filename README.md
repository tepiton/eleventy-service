# eleventy-service

A service business landing page template built with Eleventy v3: a
section-composed homepage where every band of the page is a Markdown
file.

Part of a family of interoperable mimeo templates:

- [eleventy-product](https://github.com/tepiton/eleventy-product) — landing pages for products
- [eleventy-prose-blog](https://github.com/tepiton/eleventy-prose-blog) — personal prose blogs
- [eleventy-tech-blog](https://github.com/tepiton/eleventy-tech-blog) — developer blogs
- [eleventy-chapbook](https://github.com/tepiton/eleventy-chapbook) / [eleventy-folio](https://github.com/tepiton/eleventy-folio) — chaptered literary sites
- [eleventy-pamphlet](https://github.com/tepiton/eleventy-pamphlet) — short literary works

Sites are provisioned with [mimeo](https://github.com/pborenstein/mimeo):

```bash
mimeo create yourdomain.com --template tepiton/eleventy-service
```

## Quick start

```bash
git clone https://github.com/tepiton/eleventy-service your-site
cd your-site
npm install
npm run start
```

Open `http://localhost:8091`.

## Customization

### Make it yours

Everything brand-level lives in `content/_data/metadata.js`. Five
minutes covers the whole rebrand:

1. **Name** — set `title` (header, footer, `<title>`, OG tags) and
   `tagline`/`description`.
2. **Email** — set `email` (drives the contact band's mailto and its
   button). Per-section frontmatter can override it.
3. **Colors** — edit the `brand` accent pairs (each is
   `[dark-mode, light-mode]`); accents, links, and buttons follow.
   Neutrals stay in `css/index.css`.
4. **Optional** — re-run `node scripts/generate-icons.mjs` so the
   favicon/OG mark picks up the new accent, and commit the results.
5. **Copy** — the demo content uses a fictional studio ("Harborlight")
   in its prose (hero, testimonials, about). Rewrite it to match your
   business, or keep the placeholder voice.

### Site metadata

Edit `content/_data/metadata.js` — title, tagline, description, url,
email, the header call-to-action button, and the brand palette:

```js
export default {
	title: "Your Studio",
	tagline: "One line under the logo",
	description: "Used for <meta description>, OG, and the sitemap.",
	url: "https://yourdomain.com",
	email: "hello@yourdomain.com",
	language: "en",
	cta: { label: "Get in touch", href: "/#contact" },
	author: { name: "Your Name" },
	brand: {
		accent: ["#e0a370", "#b06a2e"],
		accentStrong: ["#eec49a", "#95531f"],
		accentContrast: ["#201409", "#ffffff"],
	},
};
```

When a site is provisioned with mimeo, `url` and `email` are rewritten
to the target domain automatically (`mimeo.template.json`).

### The homepage is a stack of Markdown files

Each band of the homepage lives in `content/sections/`, ordered by the
`order` number in its front matter (renumber files to restructure the
page; delete a file to remove its band):

| File | Type | What it renders |
|------|------|-----------------|
| `01-hero.md` | `hero` | Headline, subhead, buttons, optional eyebrow label |
| `02-services.md` | `services` | Grid of service cards (frontmatter array) |
| `03-process.md` | `process` | Numbered steps of how you work |
| `04-testimonials.md` | `testimonials` | Quote cards (`quotes: [{ quote, name, role }]`) |
| `05-faq.md` | `faq` | Accordions built from `items: [{ q, a }]` |
| `06-contact.md` | `contact` | Contact card: email, phone, location, response time |

The file body is the band's prose; structured content is frontmatter in
the same file. The contact band shows the site-wide `email` from
metadata.js; set `email` or `cta` in its front matter to override, or
wire the button to a form endpoint of your choice — the template ships
no form backend. Example:

```markdown
---
title: Start a project
type: contact
order: 60
location: "Remote, worldwide"
---

Tell us what you are building. A short paragraph is plenty.
```

An unknown `type` — or a known type missing its required fields — fails
the build with an error naming the file (see
`_config/section-schema.js`).

### Adding a new section kind

1. Add the type name to `SECTION_TYPES` in `_config/section-schema.js`
2. Create `_includes/sections/<type>.njk` (start `<section id="<type>">`)
3. Create `css/sections/<type>.css` — it is swept into the page's inline
   CSS bundle automatically
4. Add a Markdown file in `content/sections/` with `type: <type>`

### Colors and fonts

- Colors live in `css/index.css` as custom properties. Dark is the
  default (`:root`); light values apply via `prefers-color-scheme` and
  the theme switcher. Accent and link colors are re-emitted from
  metadata.js's `brand` block at render time — change them there, not
  in the CSS. The neutrals (backgrounds, surfaces, borders) are the
  warm cream/dark defaults; edit `css/index.css` to change those.
- Fonts: Inter loads via Google Fonts in `_includes/layouts/base.njk`.
  Swap the two `<link>` tags and the `--font-body` / `--font-heading`
  variables to change the typefaces. Never hardcode font names.
- Icons: `public/icons/*` and `public/img/og.png` are generated by
  `node scripts/generate-icons.mjs`. The accent comes from metadata.js's
  `brand` block — change it there, run the script, commit the results.
- In-page icons are inline SVG includes in `_includes/icons/` — use one
  from the set (`spark`, `bolt`, `layers`, `chart`, `shield`, `globe`,
  `pen`, `chat`, `calendar`, `compass`) by name in frontmatter:
  `icon: pen`.

### Images

Page images go in `content/img/` and are referenced root-absolute:

```markdown
![Studio](/img/studio.jpg)
```

The build optimizes them automatically (avif/webp variants, lazy
loading, intrinsic width/height). Do not reference `public/` files with
`<img>` tags — Eleventy's URL transform rewrites those into broken
paths. `public/` is for head assets only: favicons and the OG image.

### Subpages

`content/pages/*.md` are ordinary pages (About, Work) wired into the
header nav via `eleventyNavigation` front matter. They use the shared
`_includes/layouts/page.njk` layout, which gives every subpage a hero
band matching the homepage's design language, plus optional
frontmatter-driven blocks:

```markdown
---
title: Recent projects
eyebrow: Selected work
description: One-sentence lede under the title (also the meta description)
eleventyNavigation: { key: "Work", order: 3 }
wide: true                         # container-width body (for the work list)
projects:                          # editorial project rows with tag chips
  - client: Kettle
    year: "2026"
    description: "Full identity and marketing site for a fintech startup."
    tags: ["Identity", "Web"]
---

Body prose in Markdown, styled to a comfortable reading measure.
```

Also available: `stats` (a row of accent figures, as on the About page)
and `cards` (a card grid, same design as the services section). All
blocks are optional; a bare `title` plus prose is a fine page.

## Project structure

```
├── _config/             # filters, section schema (zod)
├── _includes/
│   ├── layouts/         # base.njk (html skeleton, header, footer)
│   ├── sections/        # one partial per section type
│   └── icons/           # inline SVG icon set
├── content/
│   ├── _data/           # metadata.js
│   ├── img/             # page images, referenced as /img/<file>
│   ├── sections/        # the homepage: one ordered .md per band
│   ├── pages/           # about, work
│   ├── 404.md, sitemap.xml.njk, index.njk
├── css/                 # index.css + sections/*.css (inlined per page)
├── js/                  # theme-switcher.js
├── public/              # copied verbatim to the site root (favicons, og image)
└── scripts/             # generate-icons.mjs
```

## npm scripts

| Script | What it does |
|--------|--------------|
| `npm run start` | Dev server on port 8091 with live reload |
| `npm run build` | Production build to `_site/` |
| `npm run debug` | Build with Eleventy debug output |

## Deploy

Pushing to `main` deploys via `.github/workflows/pages.yml` (GitHub
Pages, Node 20, `npm ci`). The workflow computes the path prefix
automatically for `*.github.io` project pages, so no configuration is
needed. A custom domain is set through your host (mimeo does this via
the GitHub API) — there is no CNAME file to commit.

`netlify.toml` and `vercel.json` are also included, so pointing a
Netlify or Vercel project at the repo works with zero extra setup.
