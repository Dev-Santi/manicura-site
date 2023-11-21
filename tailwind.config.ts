import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#D1AC6D",
          200: "#A56D51",
          300: "#403736",
        },
        skin: {
          100: "#EAD3C4",
          200: "#D9B69F",
        },
        gray: {
          100: "#555555",
          200: "#222222",
        },
        background: "#EEF0E1",
      },
    },
  },
  plugins: [],
};
export default config;
