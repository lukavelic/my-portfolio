/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
    content: [
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                scrollLeft: "scrollLeft 25s linear infinite",
                scrollRight: "scrollRight 25s linear infinite",
            },
            keyframes: {
                scrollLeft: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(calc(-30rem * 4))" },
                },
                scrollRight: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(calc(30rem * 4))" },
                },
            },
        },
        fontFamily: {
            roboto: ["Roboto", "ui-sans-serif"],
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "translate-z": (value) => ({
                        "--tw-translate-z": value,
                        transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
                    }), // this is actual CSS
                },
                { values: theme("translate"), supportsNegativeValues: true }
            );
        }),
    ],
};
