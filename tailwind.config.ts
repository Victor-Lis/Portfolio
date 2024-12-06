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
      },
      animation: {
        'bounce-one': 'bounce-one .5s linear',
      },
      keyframes: {
        bounceOne: {
          '0%' : { 'transform': 'translateY(10%)' },
          '100%': { 'transform': 'translateY(0%)' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
