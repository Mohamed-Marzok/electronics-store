/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Custom colors for light and dark mode
        primary: {
          light: "#3b82f6", // Light blue for light mode
          dark: "#1e40af", // Darker blue for dark mode
        },
        background: {
          light: "#f3f4f6", // Light background
          dark: "#111827", // Dark background
        },
        text: {
          light: "#374151", // Text color for light mode
          dark: "#f9fafb", // Text color for dark mode
        },
      },
    },
  },
  plugins: [],
};
