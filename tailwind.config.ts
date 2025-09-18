/** @type {import('tailwindcss').Config} */
export default {
  // In Tailwind v4 ist 'content' optional, schadet aber nicht und kann Buildzeiten verbessern:
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
