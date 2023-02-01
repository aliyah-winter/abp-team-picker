import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
  },
  // [
  //   react({
  //     fastRefresh: process.env.NODE_ENV !== 'test',
  //   }),
  // ],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3001',
  //       changeOrigin: true,
  //     },
  //   },
  // },
})
