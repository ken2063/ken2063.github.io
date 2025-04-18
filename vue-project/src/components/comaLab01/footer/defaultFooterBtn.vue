<script setup>
const imgSrc = "./images/comaLab01/portfolio/my.png";

import { ref, onMounted, onUnmounted } from "vue";
import Contact from "@/components/comaLab01/contents/contact.vue"; // 대문자로!

const isContactOpen = ref(false);
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
  <div class="foot-box" :class="{ show: isShowClass }">
    <button @click="isContactOpen = true">
      <img :src="imgSrc" alt="" />
    </button>
  </div>

  <!-- Contact 팝업: isContactOpen이 true일 때만 표시 -->
  <Contact v-if="isContactOpen" @close="isContactOpen = false" />
</template>

<style lang="scss">
@import "@/assets/scss/Uiguide/comaLab01/defaultfooterbtn.scss";
</style>
