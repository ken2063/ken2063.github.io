// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

export default defineConfig({
  base: "/", // 저장소 이름에 맞게 수정!
  plugins: [vue()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  build: {
    outDir: "../update", // (추천) 루트 내부의 'dist' 폴더로 지정
  },
  server: {
    port: 8001,
    host: 'localhost',
    watch: {
      usePolling: true,
    }
  },
});
