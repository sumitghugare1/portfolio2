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
          bg: '#000000',           // Pure black
          'bg-secondary': '#0d0d0d', // Very dark black
          orange: '#ff7733',       // Primary orange
          'orange-light': '#ff8c4a', // Lighter orange 
          'orange-dark': '#e06629',  // Darker orange
          blue: '#0ea5e9',         // Bright blue accent
          'blue-light': '#38bdf8',  // Lighter blue
          'blue-dark': '#0284c7',   // Darker blue
          white: '#ffffff',        // Pure white
          'white-muted': '#f0f0f0', // Slightly muted white
          gray: '#1a1a1a',         // Dark gray for borders (very dark)
          'gray-light': '#2a2a2a'  // Slightly lighter gray
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
        'pulse-blue': 'pulseBlue 2s ease-in-out infinite',
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
            boxShadow: '0 0 10px #ff7733, 0 0 20px #ff7733'
          },
          '50%': { 
            boxShadow: '0 0 20px #ff7733, 0 0 40px #ff7733, 0 0 60px #ff7733'
          }
        },
        pulseBlue: {
          '0%, 100%': { 
            boxShadow: '0 0 10px #0ea5e9, 0 0 20px #0ea5e9'
          },
          '50%': { 
            boxShadow: '0 0 20px #0ea5e9, 0 0 40px #0ea5e9, 0 0 60px #0ea5e9'
          }
        }
      },
      backgroundImage: {
        'terminal-gradient': 'linear-gradient(145deg, #000000, #1a1a1a)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
          boxShadow: '0 0 15px #ff7733, 0 0 30px #ff7733, 0 0 45px #ff7733'
        },
        '.glow-blue': {
          boxShadow: '0 0 10px #0ea5e9, 0 0 20px #0ea5e9'
        },
        '.glow-blue-intense': {
          boxShadow: '0 0 15px #0ea5e9, 0 0 30px #0ea5e9, 0 0 45px #0ea5e9'
        },
        '.text-glow': {
          textShadow: '0 0 10px currentColor, 0 0 20px currentColor'
        },
        '.neumorphism': {
          background: 'linear-gradient(145deg, #1a1a1a, #000000)',
          borderRadius: '12px',
          boxShadow: '8px 8px 16px #000000, -8px -8px 16px #333333'
        }
      })
    }
  ],
}