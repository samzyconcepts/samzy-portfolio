/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                orange: { DEFAULT: "#FD6303", dark: "#A23F00" },
                white: {
                    DEFAULT: "#FFFFFF",
                    dark: "#EFEDEB",
                    darker: "#949494",
                },
                black: "#0B0D16",
            },
            fontFamily: {
                sans: ['"Nunito Sans"', "sans-serif"],
                clash: ['"Clash Display"', "sans-serif"],
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                    "2xl": "6rem",
                },
            },
        },
    },
    plugins: [],
};
