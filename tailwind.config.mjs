/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#124749',
        secondary: '#F6B643',
        tertiary: '#A94029',
      },
    },
  },
  plugins: [],
};
