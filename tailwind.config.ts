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
        main900: "#464E53", // 濃いグレー
        main400: "#CCCCCC", // 中間グレー
        main200: "#E2E8F0", // 明るいグレー
        white: "#FFFFFF", // 白
        accent: "#FDBBD7", // ピンク
      },
      fontFamily: {
        header: ['"Concert One"', "sans-serif"],
        nav: ['"Concert One"', "sans-serif"],
        buttonLarge: ['"Poppins"', "sans-serif"],
        tag: ['"Concert One"', "sans-serif"],
        body: ['"Poppins"', "sans-serif"],
      },
      fontSize: {
        body: "1.2rem",
        tagline: "2rem",
        taglineSub: "1.5rem",
        heading: "2.5rem",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "text-main900",
            h1: {
              textAlign: "center",
              color: "text-main900",
            },
            h2: {
              color: "text-main900",
            },
            h3: {
              color: "text-main900",
            },
            p: {
              color: "text-main900",
              marginBottom: "1.0rem",
            },
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
