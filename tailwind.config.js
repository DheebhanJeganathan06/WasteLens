/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Source Serif Pro"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#1f2422',
          soft: '#3d4441',
          mute: '#6b716e',
        },
        paper: {
          DEFAULT: '#f8f5ef',
          card: '#ffffff',
          line: '#e6e1d6',
        },
        accent: {
          DEFAULT: '#3a7d7b',
          deep: '#28605e',
          soft: '#cfe1e0',
        },
        confidence: {
          high: '#3a7d7b',
          med: '#c9a227',
          low: '#c97b27',
          misleading: '#a13a2c',
        },
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
