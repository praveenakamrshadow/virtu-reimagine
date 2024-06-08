/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                lexend: ['Lexend', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            transitionProperty: {
                width: 'width',
                spacing: 'margin, padding',
                bg: 'background-color',
                transform: 'transform',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.transition-all-ease': {
                    transition: 'all 0.3s ease-in-out',
                },
            };
            addUtilities(newUtilities, ['responsive', 'hover']);
        },
    ],
};
