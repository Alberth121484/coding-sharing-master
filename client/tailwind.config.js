/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'notecode': {
          'white': '#FFFFFE',
          'dark': '#121826',
          'gray': '#364153',
          'light-gray': '#CED6E1',
          'blue': '#406AFF',
        }
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
      fontSize: {
        'heading-lg': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],  // 40px
        'heading-sm': ['2rem', { lineHeight: '1.2', fontWeight: '600' }],    // 32px
        'button-md': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],     // 16px
        'button-sm': ['0.625rem', { lineHeight: '1.5', fontWeight: '600' }], // 10px
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to bottom right, rgba(183, 135, 245, 1), rgba(116, 62, 228, 1))',
      },
    },
  },
  plugins: [],
}
