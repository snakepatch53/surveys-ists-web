/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0081d4",
                secondary: "#f5f5f5",
            },
            fontFamily: {
                title: ["title", "sans-serif"],
                content: ["content", "sans-serif"],
            },
        },
    },
    plugins: [],
};
