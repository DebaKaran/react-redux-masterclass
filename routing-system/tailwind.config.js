// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  safelist: [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-gray-900",
    "bg-red-500",
    "border-blue-500",
    "border-green-500",
    "border-yellow-500",
    "border-gray-900",
    "border-red-500",
    "text-white",
    "text-blue-500",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
