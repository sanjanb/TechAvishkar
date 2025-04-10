
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
                hackathon: {
                    almond: '#EEE5DA',
                    charcoal: '#262424',
                    purple: '#6E59A5',
                    teal: '#0EA5E9',
                    orange: '#F97316',
                    light: '#F1F0FB',
                    // New colors based on the Diamond Hackathon theme
                    darkPurple: '#231C3E',
                    mediumPurple: '#57387F',
                    lightPurple: '#9B6CD0',
                    diamond: '#FFA94D',
                    navy: '#1E1A3C',
                    midnight: '#12101F'
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
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
                'pulse-light': {
                    '0%, 100%': {
                        opacity: '1'
                    },
                    '50%': {
                        opacity: '0.8'
                    }
                },
                'float': {
                    '0%': {
                        transform: 'translateY(0px)'
                    },
                    '50%': {
                        transform: 'translateY(-10px)'
                    },
                    '100%': {
                        transform: 'translateY(0px)'
                    }
                },
                'slide-up': {
                    '0%': {
                        transform: 'translateY(20px)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1'
                    }
                },
                'slide-down': {
                    '0%': {
                        transform: 'translateY(-20px)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1'
                    }
                },
                'zoom-in': {
                    '0%': {
                        transform: 'scale(0.9)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'scale(1)',
                        opacity: '1'
                    }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.5s ease-out forwards',
                'pulse-light': 'pulse-light 3s infinite ease-in-out',
                'float': 'float 6s ease-in-out infinite',
                'slide-up': 'slide-up 0.6s ease-out forwards',
                'slide-down': 'slide-down 0.6s ease-out forwards',
                'zoom-in': 'zoom-in 0.6s ease-out forwards'
			},
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Montserrat', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "url('/src/assets/hero-bg.svg')",
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'purple-gradient': 'linear-gradient(to bottom, #57387F, #231C3E)',
                'diamond-gradient': 'linear-gradient(45deg, #FFA94D, #FF7E5F)'
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
