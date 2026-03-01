import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#FFFFFF',
        body: '#D3D3D3',
        muted: '#888888',
        border: '#1a1a1a',
        accent: {
          teal: '#00B4D8',
          blue: '#3A86FF',
          purple: '#8338EC',
          orange: '#FF9F1C',
          electric: '#00BFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 4.5rem)', { lineHeight: 1.1, letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 5vw, 3rem)', { lineHeight: 1.2, letterSpacing: '-0.01em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: 1.3 }],
        'body-lg': ['1.125rem', { lineHeight: 1.6 }],
        'body': ['1rem', { lineHeight: 1.7 }],
        'body-sm': ['0.875rem', { lineHeight: 1.6 }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        'section': '6rem',
      },
      maxWidth: {
        'prose': '65ch',
        'content': '1100px',
      },
    },
  },
  plugins: [],
}

export default config