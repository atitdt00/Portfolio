import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      screens: {
        ss: "240px",
        xs: "480px",
      },
    },
  },
  plugins: [react(), tailwindcss()],
    
})
