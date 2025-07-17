import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: "public",
  server: {
    allowedHosts: ["ec2-3-110-124-43.ap-south-1.compute.amazonaws.com"],
  },
});
