import { defineConfig } from 'vite'
import purgeCss from 'vite-plugin-purgecss';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    purgeCss({
      content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    }),
  ],
})
