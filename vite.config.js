import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/SDEV_255_Final_Project_Ctrl-Alt-Elite/",
  plugins: [react()],
  root: './frontend', 
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "bootstrap/scss/bootstrap" as *;`,
        quietDeps: true, 
      },
    },
  },
});
