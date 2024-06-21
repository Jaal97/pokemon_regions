import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'roca': '#c8b68a',
        'hielo': '#73cebf',
        'bicho': '#8fbf2a',
        'electrico': '#f4cf39',
        'hada': '#eb8fe8',
        'siniestro': '#595164',
        'lucha': '#cd3d69',
        'fuego': '#fe9951',
        'volador': '#92aadd',
        'fantasma': '#5269ab',
        'planta': '#64ba5c',
        'veneno': '#ab69c7',
        'psiquico': '#f87076',
        'acero': '#5b8ea1',
        'agua': '#4d8fd4',
        'dragon': '#096cc3',
        'tierra': '#d97645',
        'normal': '#8d969f',
      },
      fontFamily: {
        heading: ['Pokemon Solid', 'sans-serif'],
        // body: ['OpenSans', 'sans-serif']
   }
    },
  },
  plugins: [],
};
export default config;
