import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
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
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeOut: {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(100%)' },
                },
                slideLeft: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                slideRight: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                zoomIn: {
                    '0%': { transform: 'scale(0.5)' },
                    '100%': { transform: 'scale(1)' },
                },
                zoomOut: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(0.5)' },
                },
            },
            animation: {
                 // Fade animations with different durations
				 'fadeIn-fast': 'fadeIn 0.5s ease-in-out',
				 'fadeIn-medium': 'fadeIn 1s ease-in-out',
				 'fadeIn-slow': 'fadeIn 2s ease-in-out',
				 
				 'fadeOut-fast': 'fadeOut 0.5s ease-in-out',
				 'fadeOut-medium': 'fadeOut 1s ease-in-out',
				 'fadeOut-slow': 'fadeOut 2s ease-in-out',
				 
				 // Slide animations with different durations
				 'slideUp-fast': 'slideUp 0.5s ease-in-out',
				 'slideUp-medium': 'slideUp 1s ease-in-out',
				 'slideUp-slow': 'slideUp 2s ease-in-out',
				 
				 'slideDown-fast': 'slideDown 0.5s ease-in-out',
				 'slideDown-medium': 'slideDown 1s ease-in-out',
				 'slideDown-slow': 'slideDown 2s ease-in-out',
 
				 // Zoom animations with different durations
				 'zoomIn-fast': 'zoomIn 0.5s ease-in-out',
				 'zoomIn-medium': 'zoomIn 1s ease-in-out',
				 'zoomIn-slow': 'zoomIn 2s ease-in-out',
				 
				 'zoomOut-fast': 'zoomOut 0.5s ease-in-out',
				 'zoomOut-medium': 'zoomOut 1s ease-in-out',
				 'zoomOut-slow': 'zoomOut 2s ease-in-out',
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
