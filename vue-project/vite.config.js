import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

export default defineConfig({
  base: "/", // ← 저장소 이름에 맞게 수정!
  plugins: [vue()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  build: {
    outDir: "../", // 기본값, dist 폴더에 빌드 결과 생성
  },
});
