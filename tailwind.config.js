/** @type {import('tailwindcss').Config} */
import { blackA, mauve, violet } from "@radix-ui/colors";
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...mauve,
        ...violet,
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
