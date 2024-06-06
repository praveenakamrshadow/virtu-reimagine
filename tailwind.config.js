/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'faktum-regular': ['Faktum-Test-Bold', 'sans-serif'],
                'faktum-bold': ['Faktum-Test-Regular', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
