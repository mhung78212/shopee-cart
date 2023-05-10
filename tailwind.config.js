/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                manrope: ["Manrope", "sans-serif"],
                poppins: ["Poppins", "san-serif"],
            },
            colors: {
                black: "#000",
                orange: "#F94E30",
                lightorange: "#FF6433",
                lightgray: "#F2F2F2",
                light: "#F4F4F4",
                whitesmoke: "#F5F5F5",
                dark: "#212529",
                danger: "#DC3545",
                gray: "#929292",
               
            },
            container: {
                center: true,
            },
        },
    },
    plugins: [],
};
