/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}" 
    ],
    theme: {
      extend: {
        screens: {
          sm: "640px", 
          md: "768px",
          lg: "1024px",
        },
        colors: {
          whitesmoke: '#f5f5f5', 
        },
        fontFamily: {
          raleway: ['Raleway', 'sans-serif'],
        },
      }, 
    },
    plugins: [],
  };
  