/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#0d1117",
        header: "#010409",
        unText: "#f0f6fc",
        name: "rgb(145, 152, 161)",
        border: "rgb(61, 68, 77)",
      },
    },
  },
  plugins: [],
};
