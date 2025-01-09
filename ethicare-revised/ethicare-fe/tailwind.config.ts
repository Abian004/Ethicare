import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'continuous-gradient': `repeating-linear-gradient(
          180deg,
          #ffffff 0vh,
          #ffdddc 100vh,
          #ffdddc 100vh,
          #ffffff 200vh,
          #ffffff 200vh,
          #ddfff9 300vh,
          #ddfff9 300vh,
          #ffffff 400vh
        )`,
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'ethicare-pink': "#f19eb9",
        'ethicare-pink-two': "#e385a4",
        'ethicare-green': "#83c1b4",
      },
    },
  },
  plugins: [],
} satisfies Config;
