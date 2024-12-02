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
        primary: "#2b2d42",
        secondary: "#32de8a",
        tertiary: "#FBFBFB",
        quaternary: "#E71D36",
        fifth: "#226CE0",
      },
      minHeight: {
        "section-common": "90svh",
      },
      height: {
        "section-common": "90svh",
      },
      clip: {
        "profile-photo": "polygon(10% 0, 100% 0%, 90% 100%, 0% 100%);"
      }
    },
  },
  plugins: [],
} satisfies Config;
