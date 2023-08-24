/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                green: "#38CB89",
            },
            spacing: {
                5.5: "22px",
            },
        },
    },
    plugins: [],
}
