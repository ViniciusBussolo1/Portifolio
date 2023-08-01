/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient:
          'radial-gradient(circle, rgba(116,119,119,1) 0%, rgba(0,0,0,1) 57%)',
      },
      colors: {
        black: {
          300: '#3C3C3C',
          500: '#262626',
          800: '#1A1A1A',
          900: '#111111',
        },
        white: {
          300: '#E1E1E6',
        },
      },
    },
  },
  plugins: [],
}
