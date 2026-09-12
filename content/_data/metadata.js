const title = "Harborlight Studio";

export default {
	title,
	tagline: "Design for teams that would rather ship than deliberate",
	description:
		`${title} is a small design studio for growing teams: brand identity, websites, and product interfaces built with calm, considered craft. Placeholder brand for the eleventy-service template.`,
	url: "https://example.com/",
	email: "hello@example.com",
	language: "en",
	image: "/img/og.png",
	author: {
		name: "Your Name",
	},
	cta: {
		label: "Get in touch",
		href: "/#contact",
	},

	// The brand palette. Each pair is [dark-mode, light-mode]; these drive
	// accents, links, and buttons site-wide (css/index.css keeps the neutral
	// surfaces). Changing accent[0] also changes the favicon/OG mark the next
	// time scripts/generate-icons.mjs runs.
	brand: {
		accent: ["#e0a370", "#b06a2e"],
		accentStrong: ["#eec49a", "#95531f"],
		accentContrast: ["#201409", "#ffffff"],
	},
};
