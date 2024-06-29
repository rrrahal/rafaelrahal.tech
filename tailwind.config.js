/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      maxWidth: ({theme}) => ({
        ...theme,
        "max-text":'710px'
      })
    },

  },
  plugins: [require("@catppuccin/tailwindcss")(
    {
      prefix: "ctp"
    }
  )],
}

