import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/SDEV255FinalProjectCTRLALTELITE/",
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
