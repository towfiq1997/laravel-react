/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            Roboto: ["Roboto", "sans-serif"],
            Poppins: ["Poppins", "sans-serif"],
            Inter: ["Inter", "sans-serif"],
            Lato: ["Lato", "sans-serif"],
        },
        extend: {
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    lg: "1200px",
                    xl: "1200px",
                    "2xl": "1200px",
                },
            }
        },
    },
    plugins: [],
}