/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.tsx'
	],
	theme: {
		screens: {
			sm: '480px',
			md: '768ox',
			lg: '976px',
			xl: '1440px'
		},
		fontFamily: {
			axiformaRegular: 'var(--font-regular)',
			axiformaSemibold: 'var(--font-semibold)',
			axiformaBold: 'var(--font-bold)'
		},
		backgroundColor: {
			disabled: 'var(--bg-disabled)',
			secondary: 'var(--bg-secondary)'
		},
		extend: {
			colors: {
				primary: 'var(--text-primary)',
				secondary: 'var(--text-secondary)',
				tertiary: 'var(--text-tertiary)'
			}
		}
	},
	plugins: []
}
