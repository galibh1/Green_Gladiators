/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji']
      },
      colors: {
        gg: '#00ff47',
        ggWash: '#E8FBE8',
        ggSoft: '#F0FFF0',
        brand: {
          50: '#effcf5',
          100: '#d9f7e6',
          200: '#b5eccf',
          300: '#84d9b2',
          400: '#4ec18b',
          500: '#2aa96f',
          600: '#1e8a5a',
          700: '#1a6e49',
          800: '#17593c',
          900: '#134a33'
        }
      },
      boxShadow: {
        soft: '0 14px 40px rgba(0,0,0,0.10)',
        glow: '0 10px 26px rgba(0,255,71,0.35), 0 0 18px rgba(0,255,71,0.45)'
      }
    }
  },
  plugins: []
}
