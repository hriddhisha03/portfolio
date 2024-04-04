import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {borderRadius: {
    'bd1': '50px',
  },
    extend: {
      scale: {
        '300': '2.9',
      },
      colors: {
        'color1' : '#EFB5B5',
        'color2': '#BFA7C5',
        'color3' : '#9B9CD1',
        'color4' : '#3E4E79',
        'textColor':'#5A072F',
        'maroon':'#5A072F',
        'r8dark':'#C01064',
        'peach':'#FDD1D1',
        'beige':"#F1DED1",
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;