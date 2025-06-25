/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      scrollBehavior: ['responsive'],
      colors: {
        butter: "#FCEF91", // 👈 this defines the custom color
        primary: "#22C55E",
  },
},
    container:{
      center:true,
      padding:{
        DEFAULT:"20px",
        md: "40px",
      },
    },
  },
  plugins: [],
}

