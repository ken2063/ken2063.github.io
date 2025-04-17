<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isShowClass = ref(false);
let lastScrollPosition = 0;

function handleScroll() {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;
  // 스크롤을 내리면 클래스 제거, 올리면 클래스 추가
  isShowClass.value = currentScroll < lastScrollPosition;
  lastScrollPosition = currentScroll;
}

onMounted(() => {
  lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="foot-box" :class="{ show: isShowClass }"></div>
</template>

<style lang="scss">
@import "@/assets/scss/Uiguide/comaLab01/defaultfooterbtn.scss";
</style>
