/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#0d0d0d',
          'bg-secondary': '#1a1a1a',
          orange: '#ff7733',
          'orange-primary': '#FF4500',
          'orange-highlight': '#FF4C29',
          'orange-red': '#FF5722',
          'orange-glow': '#FF6B1A',
          white: '#ffffff',
          'white-muted': '#cccccc',
          'text-secondary': '#999999',
          'success': '#00ff88',
          'warning': '#ff7733',
          'info': '#FFD700',
          'ascii': '#ff4c29',
          gray: '#1a1a1a',
          border: '#333333'
        }
      },
      fontFamily: {
        mono: ['Space Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-orange': 'pulseOrange 2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 5px #ff7733, 0 0 10px #ff7733, 0 0 15px #ff7733'
          },
          '100%': { 
            boxShadow: '0 0 10px #ff7733, 0 0 20px #ff7733, 0 0 30px #ff7733'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseOrange: {
          '0%, 100%': { 
            boxShadow: '0 0 10px #FF6B1A, 0 0 20px #FF6B1A'
          },
          '50%': { 
            boxShadow: '0 0 20px #FF6B1A, 0 0 40px #FF6B1A, 0 0 60px #FF6B1A'
          }
        }
      },
      backgroundImage: {
        'terminal-gradient': 'linear-gradient(145deg, #0d0d0d, #1a1a1a)',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.glow-orange': {
          boxShadow: '0 0 10px #ff7733, 0 0 20px #ff7733'
        },
        '.glow-orange-intense': {
          boxShadow: '0 0 15px #FF6B1A, 0 0 30px #FF6B1A, 0 0 45px #FF6B1A'
        },
        '.text-glow': {
          textShadow: '0 0 10px currentColor, 0 0 20px currentColor'
        },
        '.neumorphism': {
          background: 'linear-gradient(145deg, #1a1a1a, #0d0d0d)',
          borderRadius: '12px',
          boxShadow: '8px 8px 16px #0a0a0a, -8px -8px 16px #242424'
        }
      })
    }
  ],
}