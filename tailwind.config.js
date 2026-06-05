/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darija: {
          50: '#fdf4e7',
          100: '#fae3c0',
          200: '#f5c878',
          300: '#f0a830',
          400: '#e8890a',
          500: '#c96f05',
          600: '#a05504',
          700: '#7a3e03',
          800: '#532902',
          900: '#2c1501',
        },
        morocco: {
          red: '#C1272D',
          green: '#006233',
          gold: '#D4AF37',
        }
      },
      fontFamily: {
        arabic: ['Noto Sans Arabic', 'serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
