/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sometype: '"Sometype Mono", monospace',
        mulish: '"Mulish", sans-serif',
        "grand-hotel": '"Grand Hotel", cursive',
      },
      colors: {
        "main-background": "#1F1A38",
        "main-text": "#DD99BB",
        "secondary-color": "#16262E",
        accent: "#CB9CF2",
        // accent: "#E5D4ED",
        "accent-two": "#CB9CF2",
      },
    },
  },
  plugins: [],
};
// https://coolors.co/dbcdc6-ead7d1-dd99bb-7b506f-1f1a38
