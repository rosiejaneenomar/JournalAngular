module.exports = {
  mode: process.env.TAILWIND_MODE ? 'jit' : 'aot',
  content: [
    "./src/app/**/*.{html,ts,tsx,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

