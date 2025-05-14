/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				sand: "#f1e3c2", // varm sand/guld
				warmgreen: "#4e8b5a", // varm grøn
			},
		},
	},
	plugins: [],
};
