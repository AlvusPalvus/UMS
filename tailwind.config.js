/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                white: "#ffffff",
                gray: "#565656",
                black: "#000000",
                customBlack: "#0f241a",
                primaryGreen: "#337a5a",
                darkGreen: "#1E4835",
                darkBlue: "#0E2F4E",
                lightBlue: "#e8eff5",
                lightGreen: "#edf7f3",
                lightYellow: "#FBF3E9",
            },
        },
    },
    plugins: [],
};
