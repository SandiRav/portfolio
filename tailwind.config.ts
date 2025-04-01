import type { Config } from "tailwindcss";

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
      maxWidth: {
        40: "160px",
      },
      fontFamily: {
        sans: "var(--font-inter)",
      },
    },
  },
  plugins: [],
} satisfies Config;
