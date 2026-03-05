/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#000000', // Pure Black
                accent: '#E2001A',  // Lupine Brand Red
                'accent-light': '#FF5274', // Coral highlight
                background: '#000000',
                surface: '#111111', // Very dark grey for cards
                'surface-border': '#222222', // Stark borders
                secondary: '#2A2A2A',
                muted: '#A3A3A3', // Muted text on black
                whatsapp: '#25D366',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                condensed: ['Oswald', 'sans-serif'], // Lupine's dominant heading style
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            letterSpacing: {
                'super-wide': '0.15em',
                'mega-wide': '0.25em',
            }
        },
    },
    plugins: [],
};
