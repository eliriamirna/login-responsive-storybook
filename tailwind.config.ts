import type { Config } from "tailwindcss";

export default {
  content: [
    './src/**/*.tsx',
    './.storybook/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '32px',
      '2xl': '40px',
    },
    fontWheight: {
      bold: 'font-bold',
      semiBold: 'font-semibold',
      normal: 'font-normal'
    },
    colors: {
      gray: {
        100: '#F7F8F9',
        150: '#8A8A8E',
        200: '#B3B4B5',
        300: '#F7F8F933',
        400: '#363636',
        500: '#282E38',
        600: '#1E232C',
      },
      yellow: {
        100: '#EFC532',
        200: '#FFC709',
        300: '#FDB528',
        400: '#EBB700',
        500: '#8B5C01',
      },
      red: {
        500: '#FF0000',
      },
      green: {
        500: '#03C219',
      },
      white: {
        100: '#F2F2F7',
        200: '#E8E8E8',
        300: '#FCFDFF',
        400: '#FCFDFFCC',
        500: '#FFFFFF',        
      },
      transparent: 'transparent',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },    
    },
  },
  plugins: [],
} satisfies Config;
