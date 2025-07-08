/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FB7392',
          light: '#FFF5F7',
        },
        secondary: '#4A5568',
        background: '#FFFFFF',
        text: '#1A202C',
        accent: {
          light: '#FFF5F7',
          DEFAULT: '#FB7392',
          dark: '#E84C77'
        },
        gray: {
          50: '#F7FAFC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}