/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'gray': '#565656',
            'black': '#000000',
            'customBlack': '#0f241a',
            'primaryGreen': '#337a5a',
        },
        extend: {},
    },
    plugins: [],
};
