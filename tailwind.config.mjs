/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				skateHeading: ["Anton"],
			},
			height: {
				screen: ["100vh /* fallback for Opera, IE and etc. */", "100svh"],
			},
		},
	},
	plugins: [],
}
