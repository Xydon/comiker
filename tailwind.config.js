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
		},
	},
	plugins: [],
};
