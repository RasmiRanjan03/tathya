/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './tathya_groups_ecosystem_website.tsx',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 200ms ease-out',
      },
    },
  },
  plugins: [],
};
