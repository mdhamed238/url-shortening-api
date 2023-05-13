/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				xs: '375px',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				cyan: 'hsl(180, 66%, 49%)',
				'light-cyan': 'hsl(180°, 30%, 49%)',
				'dark-violet': 'hsl(257, 27%, 26%)',
				red: 'hsl(0, 87%, 67%)',
				gray: 'hsl(0, 0%, 75%)',
				'grayish-violet': 'hsl(257, 7%, 63%)',
				'very-dark': {
					blue: 'hsl(255, 11%, 22%)',
					violet: 'hsl(260, 8%, 14%)',
				},
			},
			fontSize: {
				default: '16px',
				body: '18px',
			},
		},
	},
	plugins: [],
};
