import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: {
      usePolling: true, // Enable polling for WSL2
      interval: 100     // Polling interval in ms
    }
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: path.resolve(__dirname, "./src/main.tsx"),
    },
  },
})
