import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  base: "/", // 웹 앱의 기본 경로, 보통 '/' 또는 GitHub Pages 등 저장소명에 맞게 조정
  plugins: [vue()], // Vue 플러그인 사용
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") }, // '@'를 src 폴더 경로로 별칭 지정
  },
  build: {
    outDir: "update", // 빌드 결과물 출력 폴더 (루트 내부 폴더 추천)
  },
  server: {
    port: 5001, // 개발 서버 포트 번호
    host: "localhost", // 서버 호스트 설정
    watch: {
      usePolling: true, 
    },
    // 파일 변경 감지 방법(폴링) 활성화, 일부 환경에서 안정성 증가
  },
});
