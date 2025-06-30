<template>
  <div class="contents">
    <section><home /></section>
    <!-- <section v-fade-up="vFadeUp"><about /></section> -->
    <section v-fade-up="vFadeUp"><skill /></section>
    <section v-fade-up="vFadeUp"><portfolio /></section>
    <section v-fade-up="vFadeUp"><career /></section>
  </div>
</template>
<script setup>
import home from "@/components/comaLab01/contents/home.vue";
// import about from "@/components/comaLab01/contents/about.vue";
import skill from "@/components/comaLab01/contents/skill.vue";
import portfolio from "@/components/comaLab01/contents/portfolio.vue";
import career from "@/components/comaLab01/contents/career.vue";

// 커스텀 디렉티브 등록
const vFadeUp = {
  mounted(el) {
    el.classList.add("fade-up-init");
    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          el.classList.add("fade-up-active");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
  },
};
</script>
<style lang="scss">
@use "@/assets/scss/Uiguide/comaLab01/defaultcontents.scss" as *;

.fade-up-init {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-up-active {
  opacity: 1;
  transform: translateY(0);
}
</style>
