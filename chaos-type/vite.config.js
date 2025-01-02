import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the build output directory (default for Vite, but explicit for clarity)
  },
  base: './', // Ensures relative paths for assets, fixes issues with Netlify
});
