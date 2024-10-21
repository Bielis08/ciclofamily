/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'page': {
					100: '#edffe9',
					200: '#c7ffb5',
					300: '#a1ff81',
					400: '#9fffa9',
					500: '#9dffd1',
				}
			},
		},
	},
	plugins: [],
}
