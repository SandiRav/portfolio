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
          300: "#e9e8e6",
        },
        secondary: {
          100: "#34b7a7",
        },
      },
      spacing: {
        10: "2.5rem",
        16: "4rem",
        64: "16rem",
        96: "24rem",
        224: "56rem", // 896px
      },
      borderRadius: {
        "custom-50": "50px",
      },

      fontFamily: {
        sans: "var(--font-inter)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
