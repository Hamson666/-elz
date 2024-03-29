/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'xl': '1260px',
			},
			fontFamily: {
				'headings': ['"Arvo"', 'Helvetica', 'Arial', 'sans-serif'],
				'base': ['"Corbel"', 'Arial', 'Helvetica', 'sans-serif'],
		  	},
			fontSize: {
				xs: '0.75rem',
			},
			spacing: {
				'gd-carousel': '575px',
			},
		},
		colors: {
			'base-color': '#FFF59B',
	},
	},
	plugins: [],
}
