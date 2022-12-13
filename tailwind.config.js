/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: {
            red: "hsl(0, 100%, 74%)",
            green: "hsl(154, 59%, 51%)"
          },
          accent: {
            blue: "hsl(248, 32%, 49%)"
          },
          neutral: {
            darkBlue: "hsl(249, 10%, 26%)",
            grayishBlue: "hsl(246, 25%, 77%)"
          }
        }
      }
    },
  },
  plugins: [],
}
