/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: 'var(--text-primary)',
        'ink-2': 'var(--text-secondary)',
        accent: 'var(--accent)',
      },
      maxWidth: {
        content: 'min(1700px, 93vw)',
      },
    },
  },
  plugins: [],
}
