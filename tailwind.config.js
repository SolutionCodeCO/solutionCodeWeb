/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary:{
          DEFAULT:"#0F1035",
          900:"#0f1135",
          400:"#141655",
          300:"#1c2084",
          200:"#252abc",
          100:"#3a40ea",
          50:"#565bf8"
        },
        redProyect:{
          DEFAULT:"#FF2626",
          900:"#b81515",
          400:"#f95050",
        },
        whiteP:{
          DEFAULT:"#F5F5F5",
          900:"#f5f5f5",
          600:"#E5E5E5",
          400:"#d9d9d9",
          300:"#ffffff",
          100:"#ffffff60",
          50:"#f5f5f536"
        },
        blackP:{
          DEFAULT:"#050505",
          900:"#000000",
          300:"#05050569"

        }
      },
      fontFamily:{
        outfit:["Outfit", "sans-serif"]
      },
      boxShadow:{
        buttons : "0px 3px 5px #a8a8a8 "
      }
    },
  },
  plugins: [],
}

