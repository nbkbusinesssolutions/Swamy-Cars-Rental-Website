/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './components/**/*.html',
    './assets/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif']
      },
      colors: {
        primary: '#1A1D23',
        accent: '#25D366',
        secondary: '#0EA5E9'
      },
      keyframes: {
        fadeUpIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        }
      },
      animation: {
        'fade-up': 'fadeUpIn 0.5s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease-out forwards'
      }
    }
  },
  plugins: []
};
