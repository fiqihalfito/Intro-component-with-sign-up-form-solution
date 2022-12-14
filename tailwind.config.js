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
      },
      backgroundImage: {
        "intro-mobile": "url('/images/bg-intro-mobile.png')",
        "intro-desktop": "url('/images/bg-intro-desktop.png')",
      },
      boxShadow: {
        'custom': "0px 10px 0px rgba(0, 0, 0, 0.15)"
      }
    },
  },
  plugins: [],
}
