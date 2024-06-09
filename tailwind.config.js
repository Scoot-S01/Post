/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,jsx}",
		"./components/**/*.{js,jsx}",
		"./app/**/*.{js,jsx}",
		"./src/**/*.{js,jsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "1rem",
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
		fontFamily: {
			primary: "var(--fontjetbrainsMono)",
		},
		extend: {
			colors: {
				primary: "#0a0a0a",
				accent: {
					DEFAULT: "#ea580c",
					hover: "#f97316",
				},
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
	layers: {
		utilities: {
			// ...
			".neon-cursor": {
				"@apply": "cursor-pointer",
				"text-shadow":
					"0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff, 0 0 80px #0ff, 0 0 160px #0ff",
			},
		},
	},
};
