/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': 'var(--bg)',
        'surface': 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        'primary': 'var(--primary)',
        'primary-glow': 'var(--primary-glow)',
        'accent': 'var(--accent)',
        'text': 'var(--text)',
        'text-muted': 'var(--text-muted)',
        'border': 'var(--border)',
      },
      borderRadius: {
        'large': 'var(--radius)',
      },
      fontFamily: {
        heading: ['"Clash Display"', 'sans-serif'],
        body: ['Figtree', 'sans-serif'],
      },
      boxShadow: {
        'primary-glow': '0 0 15px var(--primary-glow)',
        'card-hover-glow': '0 0 20px var(--primary-glow)',
        'button-glow': '0 0 10px var(--primary-glow)',
      },
      transitionProperty: {
        'glow': 'box-shadow, transform',
      }
    },
  },
  plugins: [],
}