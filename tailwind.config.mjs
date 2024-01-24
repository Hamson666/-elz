/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'headings': ['"Arvo"', 'Helvetica', 'Arial', 'sans-serif'],
				// 'headings': [],
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
