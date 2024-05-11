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
        snowWhite: "#F2F5F8",
        flashWhite: "#F0F2F5",
        platinum: "#E8E8E8",
        colorGray: "#999999",
        colorSilver: "#707070",
        metalBlack: "#2d2e2f",
        greyBlack: "#434445",
        lightOrange: "#ffb657",
        greyBlack200: "#333333",
        nightBlack: "#212223",
        power__black: "#18191a",
        themeHoverColor: " #069c7a",
        themeColor: "#00bc91",
      },
    },
  },
  plugins: [],
};
export default config;
