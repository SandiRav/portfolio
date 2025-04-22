export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#0077b6",
        },
      },
      spacing: {
        10: "2.5rem",
        16: "4rem",
        64: "16rem",
        96: "24rem",
      },

      fontFamily: {
        sans: "var(--font-inter)",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
