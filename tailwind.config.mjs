/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'background': '#0A0E17',
        'foreground': '#E5EDF5',
        'terminal': '#121820',
        'neon': {
          'blue': '#00E5FF',
          'purple': '#BD00FF',
          'green': '#00FF9D',
          'pink': '#FF0080',
          'yellow': '#FFCB00'
        },
        'success': {
          'light': '#92FFC0',
          'DEFAULT': '#00FF9D',
          'dark': '#00CC7D'
        },
        'error': {
          'light': '#FF6F6F',
          'DEFAULT': '#FF0F4F',
          'dark': '#CC0C3F'
        },
        'warning': {
          'light': '#FFE16F',
          'DEFAULT': '#FFCB00',
          'dark': '#CCA200'
        }
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end), blink .75s step-end infinite',
        'glitch': 'glitch 1s linear infinite',
        'scan': 'scan 2s linear infinite',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        glow: {
          '0%': { filter: 'drop-shadow(0 0 1px rgba(0, 229, 255, 0.5))' },
          '100%': { filter: 'drop-shadow(0 0 5px rgba(0, 229, 255, 0.8))' }
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        blink: {
          '50%': { borderColor: 'transparent' }
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '10%': { transform: 'translate(-2px, 2px)' },
          '30%': { transform: 'translate(2px, -2px)' },
          '50%': { transform: 'translate(-1px, 1px)' },
          '70%': { transform: 'translate(3px, -3px)' },
          '90%': { transform: 'translate(-1px, -1px)' }
        },
        scan: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(0, 229, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 229, 255, 0.1) 1px, transparent 1px)',
        'glow-radial': 'radial-gradient(circle, rgba(0, 229, 255, 0.2) 0%, rgba(10, 14, 23, 0) 70%)'
      },
      backgroundSize: {
        'grid': '40px 40px'
      }
    },
  },
  plugins: [],
};

export default config;