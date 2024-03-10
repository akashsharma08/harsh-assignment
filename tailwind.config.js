/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        1: "1",
      },
      backdropFilter: { 'none': 'none', 'blur': 'blur(20px)' },
    },
  },
  plugins: [],
};
