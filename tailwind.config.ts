import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#1e90ff",
        customGreen: "#32cd32",
        customOrange: "#ff7f50",
        back:{
          DEFAULT:'#000',
          100:'#000319'
        }
      },
      animation: {
        slideIn: "slideIn 0.5s ease-in-out",
      },
      keyframes: {
        slideIn: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
    },
  },
  plugins: [],
} 
}