/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#2a2a2a',
        teal: {
          DEFAULT: '#00586b',
          deep: '#0a2a32',
        },
        cyan: {
          DEFAULT: '#069ec0',
          brand: '#51d6f3',
        },
        gold: '#c9973d',
        mute: '#cacaca',
        ivory: '#f7f9fa',
      },
      fontFamily: {
        signika: ['Signika', 'Open Sans', 'sans-serif'],
        opensans: ['"Open Sans"', 'Arial', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(0,88,107,0.18)',
        card: '0 20px 45px -20px rgba(0,88,107,0.25)',
        gold: '0 12px 30px -10px rgba(201,151,61,0.45)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        kenburns: {
          '0%': { transform: 'scale(1) translate(0,0)' },
          '100%': { transform: 'scale(1.08) translate(-1%,-1%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease both',
        fadeIn: 'fadeIn 0.9s ease both',
        kenburns: 'kenburns 14s ease-in-out infinite alternate',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}