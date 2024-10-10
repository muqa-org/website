import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primaryBlack: {
					DEFAULT: '#0B0B0B',
				},
				primaryBlue: {
					DEFAULT: '#44A2FF',
				},
				secondBlue: {
					DEFAULT: '#0080FF',
				},
				lightBlack: {
					DEFAULT: '#4A4A4A',
				},
				lightBlue: {
					DEFAULT: '#F3FDFF',
				},
			},
		},
	},
	plugins: [],
};
export default config;
