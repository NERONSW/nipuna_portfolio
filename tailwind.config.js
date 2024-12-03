/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        accent: "#3B82F6",
        highlight: "#60A5FA",
        background: "#FFFFFF",
        contrast: "#F3F4F6",
        text: "#374151",
        secondaryBackground: "#E5E7EB",
      },
    },
  },
  plugins: [],
};
