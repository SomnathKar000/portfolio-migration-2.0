import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: "public",
  server: {
    allowedHosts: ["ec2-15-206-151-87.ap-south-1.compute.amazonaws.com"],
  },
});
