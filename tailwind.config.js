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
  keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
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

