<template>
  <div class="foot-box" :class="{ show: isShowClass }">
    <button @click="openContact">
      <img :src="imgSrc" alt="" />
    </button>
  </div>

  <!-- Contact 팝업: isContactOpen이 true일 때만 표시 -->
  <Contact v-if="isContactOpen" @close="closeContact" />
</template>

<script setup>
const imgSrc = "./images/comaLab01/portfolio/my.png";

import { ref, onMounted, onUnmounted, watch } from "vue";
import Contact from "@/components/comaLab01/contents/contact.vue";

const isContactOpen = ref(false);
const isShowClass = ref(false);

let lastScrollPosition = 0;

// 팝업 열기 함수
function openContact() {
  isContactOpen.value = true;
}

// 팝업 닫기 함수
function closeContact() {
  isContactOpen.value = false;
}

// html 스크롤 제어 함수들
function disableHtmlScroll() {
  document.documentElement.style.overflow = 'hidden';
}

function enableHtmlScroll() {
  document.documentElement.style.overflow = '';
}

// 스크롤 핸들러
function handleScroll() {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;
  // 스크롤을 내리면 클래스 제거, 올리면 클래스 추가
  isShowClass.value = currentScroll < lastScrollPosition;
  lastScrollPosition = currentScroll;
}

// isContactOpen 상태 변화 감지하여 스크롤 제어
watch(isContactOpen, (newValue) => {
  if (newValue) {
    disableHtmlScroll();
  } else {
    enableHtmlScroll();
  }
});

onMounted(() => {
  lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  // 컴포넌트 언마운트 시 스크롤 복원
  enableHtmlScroll();
});
</script>

<style lang="scss">
@use "@/assets/scss/Uiguide/comaLab01/defaultfooterbtn.scss" as *;
</style>
