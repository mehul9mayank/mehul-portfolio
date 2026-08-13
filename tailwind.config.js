/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Rajdhani', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        cursive: ['Great Vibes', 'cursive'],
      },
      colors: {
        cyber: {
          bg: '#0a0a0c',
          card: '#121216',
          border: '#2a2a35',
          gold: '#ffbd2e',
          green: '#27c93f',
          red: '#ff5f56',
          cyan: '#5a9fd4',
          gray: '#999999',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
