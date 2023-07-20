/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        btn: {
          background: 'hsl(var(--btn-background))',
          'background-hover': 'hsl(var(--btn-background-hover))',
        },
      },
      fontFamily: {
        serif : ['var(--font-noto-serif)'],
        cursive: ['var(--font-poiret-one)']
      },
      borderWidth:{
        1 : "1px",
        "1/2" : "0.5px",
      }
    },
  },
  plugins: [],
}
