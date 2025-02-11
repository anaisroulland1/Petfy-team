/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                bgstart: "#543d08",
                bgend: "#946c1e",
                primary: "#4a350c",
                secondary: "#cfb595",
                primarytext: "#362700",
                secondarytext: "#f2e6d9",
                error: "#ff0000",
                white: "#ffffff",
                black: "#000000",
            },
            fontFamily: {
                spicy: ['"spicy-rice"', "cursive"],
            },
        },
    },
    plugins: [],
};
