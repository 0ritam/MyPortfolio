import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {      animation: {
        'scroll': 'scroll 25s linear infinite',
        'scroll-reverse': 'scroll-reverse 25s linear infinite',
      },
      keyframes: {
        'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'scroll-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      extend: {
        utilities: {
          '.animation-play-state-paused': {
            'animation-play-state': 'paused'
          }
        }
      },
    },
  },
  plugins: [],
}

export default config
