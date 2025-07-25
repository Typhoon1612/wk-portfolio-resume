/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],

  theme: {
    extend: {
      fontFamily: {
        yrsa: ['Yrsa', 'serif'],
      },
      colors: { // 👈 your custom RGB color
      },
    },
  },
  plugins: [],
}
