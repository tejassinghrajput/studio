import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin'; // Import plugin

export default {
    darkMode: ["class"], // Keep class-based dark mode strategy if needed, but colors are now variable-driven
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Add container configuration to control padding and centering
    container: {
      center: true, // Center container contents
      padding: {
        DEFAULT: '1rem', // Default padding (mobile)
        sm: '2rem', // Padding for small screens and up
        lg: '4rem', // Padding for large screens and up (adjust as needed)
        xl: '5rem', // Padding for extra-large screens and up
        '2xl': '6rem', // Padding for 2xl screens and up
      },
      screens: { // Define breakpoints for max-width if needed, otherwise uses Tailwind defaults
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  	extend: {
  		colors: {
            // Map theme colors to CSS variables managed by ThemeProvider
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            card: {
                DEFAULT: 'hsl(var(--card))',
                foreground: 'hsl(var(--card-foreground))'
            },
            popover: {
                DEFAULT: 'hsl(var(--popover))',
                foreground: 'hsl(var(--popover-foreground))'
            },
            primary: {
                DEFAULT: 'hsl(var(--primary))',
                foreground: 'hsl(var(--primary-foreground))'
            },
            secondary: {
                DEFAULT: 'hsl(var(--secondary))',
                foreground: 'hsl(var(--secondary-foreground))'
            },
            muted: {
                DEFAULT: 'hsl(var(--muted))',
                foreground: 'hsl(var(--muted-foreground))'
            },
            accent: {
                DEFAULT: 'hsl(var(--accent))',
                foreground: 'hsl(var(--accent-foreground))'
            },
            destructive: {
                DEFAULT: 'hsl(var(--destructive))',
                foreground: 'hsl(var(--destructive-foreground))'
            },
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            chart: {
                '1': 'hsl(var(--chart-1))',
                '2': 'hsl(var(--chart-2))',
                '3': 'hsl(var(--chart-3))',
                '4': 'hsl(var(--chart-4))',
                '5': 'hsl(var(--chart-5))'
            },
            // Keep sidebar definition if needed, assuming ThemeProvider also sets these
            sidebar: {
                DEFAULT: 'hsl(var(--sidebar-background, var(--background)))', // Fallback to main background
                foreground: 'hsl(var(--sidebar-foreground, var(--foreground)))', // Fallback to main foreground
                // Add fallbacks or ensure ThemeProvider sets all required sidebar vars
                border: 'hsl(var(--sidebar-border, var(--border)))',
                ring: 'hsl(var(--sidebar-ring, var(--ring)))',
                // You might need specific primary/accent for sidebar if they differ significantly
                // primary: 'hsl(var(--sidebar-primary))',
                // 'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                 accent: 'hsl(var(--sidebar-accent, var(--accent)))',
                 'accent-foreground': 'hsl(var(--sidebar-accent-foreground, var(--accent-foreground)))',
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
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
         // Add backdrop blur utility if not already present by default
         backdropBlur: {
             xs: '2px',
             sm: '4px',
             DEFAULT: '8px',
             md: '12px',
             lg: '16px',
             xl: '24px',
             '2xl': '40px',
             '3xl': '64px',
         }
  	}
  },
  plugins: [
      require("tailwindcss-animate"),
      // Plugin for glassmorphism helper class
      plugin(function({ addUtilities }) {
          addUtilities({
              '.glass': {
                  'background': 'rgba(255, 255, 255, 0.1)', // Adjust alpha as needed
                  'backdrop-filter': 'blur(10px)', // Adjust blur amount
                  '-webkit-backdrop-filter': 'blur(10px)', // Safari support
                  'border': '1px solid rgba(255, 255, 255, 0.15)', // Subtle border
              },
              '.dark .glass': { // Optional: Adjust for dark mode if needed
                  'background': 'hsla(var(--card) / 0.6)', // Use card color with alpha
                  'border': '1px solid hsla(var(--border) / 0.2)', // Use border color with alpha
              }
              // Add more variants if necessary
          })
      })
  ],
} satisfies Config;
