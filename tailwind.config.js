/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      animation: {
        'spin' : 'spin 15s linear infinite',
       }
    },
  },
  plugins: [],
}

