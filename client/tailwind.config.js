/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Urbanist", "sans-serif"], // Include Urbanist as the primary font
			},
			backgroundImage: {
				"gradient-blue-purple": "linear-gradient(to right, #2662B1, #4437AD)",
			},
		},
	},
	plugins: [],
};
