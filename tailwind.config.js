/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				themeRed: "#E50000",
				themePurple: "#6500E5",
				darkGray: "#141414",
			},
			animation: {
				"spin-slow": "spin 1000s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};
