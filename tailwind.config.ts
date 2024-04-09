import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {borderRadius: {
    'bd1': '50px',
    'bd2': '100px',
    'full': '9999px',
  },
    extend: {
      scale: {
        '300': '3',
      },
      spacing: {
        'ht1':"150px",
        'ht2':"120px",
        "left1":"150px",
        'button2':'36rem',
        'button3':'26.5rem',
        'buttonright':'21rem',
        'buttonright1':'26rem',

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
        'pgPeach':'#CF8B8C',
        'pgLight':'#F7E5F0',
        'pgText':'#5D0654',
        'github':'#24292E',
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