import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px -3.004px 0.751px 0px rgba(227, 227, 234, 0.40) inset, 0px 3.004px 6.009px -1.502px rgba(95, 95, 95, 0.15), 0px 0px 0px 0.751px rgba(234, 236, 241, 0.10)',
      },
    },
  },
  plugins: [],
};
export default config;
