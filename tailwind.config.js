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
          50: '#0f1419',
          100: '#1a1f2e',
          200: '#2d3748',
          300: '#4a5568',
          400: '#718096',
          500: '#a0aec0',
          600: '#cbd5e0',
          700: '#e2e8f0',
          800: '#f7fafc',
          900: '#ffffff',
        },
        secondary: {
          50: '#1a0d1f',
          100: '#2d1b3d',
          200: '#44337a',
          300: '#553c9a',
          400: '#7c3aed',
          500: '#8b5cf6',
          600: '#a78bfa',
          700: '#c4b5fd',
          800: '#ddd6fe',
          900: '#ede9fe',
        },
        accent: {
          50: '#064e3b',
          100: '#065f46',
          200: '#047857',
          300: '#059669',
          400: '#10b981',
          500: '#34d399',
          600: '#6ee7b7',
          700: '#a7f3d0',
          800: '#d1fae5',
          900: '#ecfdf5',
        },
        dark: {
          50: '#0a0a0a',
          100: '#121212',
          200: '#1a1a1a',
          300: '#2a2a2a',
          400: '#3a3a3a',
          500: '#4a4a4a',
          600: '#6a6a6a',
          700: '#8a8a8a',
          800: '#aaaaaa',
          900: '#cccccc',
        }
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
