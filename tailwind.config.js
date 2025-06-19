/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
  colors: {
    butter: "#FCEF91", // 👈 this defines the custom color
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

