import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['"Playfair Display"', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				realm: {
					black: '#0A0A0A',
					white: '#FFFFFF',
					lightgray: '#F1F1F1',
					darkgray: '#222222',
					gray: '#888888',
				},
				primary: {
					DEFAULT: '#0A0A0A',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#FFFFFF',
					foreground: '#0A0A0A'
				},
				destructive: {
					DEFAULT: '#0A0A0A',
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: '#F1F1F1',
					foreground: '#222222'
				},
				accent: {
					DEFAULT: '#F1F1F1',
					foreground: '#222222'
				},
				popover: {
					DEFAULT: '#FFFFFF',
					foreground: '#0A0A0A'
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#0A0A0A'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: '#0A0A0A',
					'primary-foreground': '#FFFFFF',
					accent: '#F1F1F1',
					'accent-foreground': '#222222',
					border: '#F1F1F1',
					ring: '#0A0A0A'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'subtle-pulse': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.8'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.5s ease-out forwards',
				'subtle-pulse': 'subtle-pulse 3s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
