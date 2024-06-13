/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@catppuccin/tailwindcss")(
    {
      prefix: "ctp"
    }
  )],
}

