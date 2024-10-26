/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Lato', 'sans-serif'],
            },
            colors: {
                "primary-blurple": "#6342E7",
                "primary-blurple-dark": "#472CB6",
                "primary-red": "#D8153A",
                "primary-gray": "#A1A1A1",
                "primary-amber": "#F1F4FB"
            },
            screens: {
                'max-380': {'max': '380px'},
                'max-350': {'max': '350px'},
                'h-sm-md': { 'raw': '(min-height: 640px) and (max-height: 700px)' },
                'h-md': { 'raw': '(min-height: 700px)' },
                'h-md2': { 'raw': '(min-height: 750px)' },
            },
        },
    },
    plugins: [],
}