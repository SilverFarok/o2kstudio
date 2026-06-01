import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b1d40",
        muted: "#53627a",
        line: "#dce3ec",
        accent: "#0757d9",
        "accent-dark": "#0648b8",
        panel: "#f7f9fc",
      },
      boxShadow: {
        soft: "0 14px 42px rgba(15, 38, 77, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
