/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "circle-gradient-r": 'linear-gradient(to right, #440BD4 0%, #FF2079 35%, #E92EFB 100%)',
        "circle-gradient-l": 'linear-gradient(to left, #440BD4 0%, #FF2079 35%, #E92EFB 100%)',
        "circle-gradient-t": 'linear-gradient(to left, #E92EFB 17%, #FF2079 46%, #440BD4 94%)',

      },
      colors: {
        'hr-gray': '#1b1818'
      },
      maxWidth: {
        '1440': '1440px',
      },
      width: {
        '512': '512px'
      },
      height: {
        '512': '512px'
      }
    },
  },
  plugins: [],
};
