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
      },
      backgroundColor: {
        "custom-ecopetrol-morado": "#50007B",
        "custom-clinicos-primario": "rgb(0, 36, 156)",
        "custom-clinicos-secundario": "rgb(0, 119, 200)",
        "custom-clinicos-terciario": "rgb(0, 169, 224)",
      },
      colors: {
        "custom-clinicos-primario": "rgb(0, 36, 156)",
        "custom-clinicos-secundario": "rgb(0, 119, 200)",
        "custom-clinicos-terciario": "rgb(0, 169, 224)",
      },
    },
  },
  plugins: [],
};
