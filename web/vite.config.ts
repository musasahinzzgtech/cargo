import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      constants: "/src/constants",
      models: "/src/models",
      store: "/src/store",
      api: "/src/api",
      service: "/src/service",

    },
  },
});
