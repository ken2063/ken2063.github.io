<template>
  <div>
    <button class="menuBtn" @click="openModal">
      <span class="top"></span>
      <span class="mid"></span>
      <span class="bottom"></span>
    </button>
    <defaultMenuContent v-if="isModalViewed" @close-modal="closeModal" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import defaultMenuContent from "@/components/comaLab01/head/defaultMenuContent.vue";

const isModalViewed = ref(false);

function openModal() {
  isModalViewed.value = true;
}

function closeModal() {
  isModalViewed.value = false;
}
</script>
<style scoped>
/* 필요에 따라 스타일을 추가하세요 */
</style>
