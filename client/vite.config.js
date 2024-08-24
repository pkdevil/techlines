import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxying requests starting with '/api'
      "/api": {
        target: "http://localhost:5000", // The target server
        changeOrigin: true, // Needed for virtual hosted sites
      },
    },
  },
});
