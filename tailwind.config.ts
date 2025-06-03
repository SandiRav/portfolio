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
          100: "#34b7a714",
          200: "#34b7a7",
        },
      },
      spacing: {
        10: "2.5rem",
        16: "4rem",
        64: "16rem",
        80: "20rem", // 320px
        96: "24rem",
        136: "32rem", // 544px
        224: "56rem", // 896px
        240: "60rem", // 960px
      },
      borderRadius: {
        "custom-50": "50px",
      },

      boxShadow: {
        custom: "0px 0px 20px rgba(0, 0, 0, 0.1)",
        "custom-hover": "0px 0px 30px rgba(0, 0, 0, 0.1)",
      },

      fontFamily: {
        Roboto: ["var(--font-roboto)", "Arial", "sans-serif"],
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
