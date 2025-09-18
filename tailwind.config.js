/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#070a10', // purest dark
          100: '#0a0f16', // ultra dark
          200: '#10141a', // base dark
          300: '#181c24', // slightly lighter
          400: '#232a36', // for cards
          500: '#2c3442', // for borders
          600: '#364052', // for subtle highlights
          700: '#49546a', // for muted accents
          800: '#5d6882', // for hover states
          900: '#7a8ca3', // for text on dark
        },
        primary: {
          50: '#10141a',
          100: '#181c24',
          200: '#232a36',
          300: '#364052',
          400: '#49546a',
          500: '#5d6882',
          600: '#7a8ca3',
          700: '#a3b3c2',
          800: '#c7d0db',
          900: '#e2e8f0',
        },
        secondary: {
          50: '#1a1833',
          100: '#23204d',
          200: '#2e2a66',
          300: '#3a3780',
          400: '#4b4a99',
          500: '#5c5cb3',
          600: '#6d6dcc',
          700: '#7e7ee6',
          800: '#8f8fff',
          900: '#a0a0ff',
        },
        accent: {
          50: '#0d2536',
          100: '#133a4c',
          200: '#1a4f62',
          300: '#216478',
          400: '#28798e',
          500: '#2f8ea4',
          600: '#36a3ba',
          700: '#3db8d0',
          800: '#44cde6',
          900: '#4be2fc',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
