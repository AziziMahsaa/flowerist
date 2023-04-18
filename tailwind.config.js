/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bggarden: "url('/img/garden.png')",
      },
      colors: {
        darkgreen: "rgba(18,56,47,0.6)",
        medgreen: "rgba(40,90,67,0.4)",
        lightgreen: "rgba(40,90,67,0.1)",
      },
    },
  },
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: false,
  },
  plugins: [require("daisyui")],
};
