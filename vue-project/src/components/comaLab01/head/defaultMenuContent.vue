<script setup>
// 별도의 로직이 없으므로 비워둡니다.
</script>

<template>
  <div class="defaultMenuContent">
    <div class="pop_head">
      <p class="pop_tit">&nbsp;</p>
      <button type="button" @click="$emit('close-modal')" class="closeBtn">
        <img src="@/assets/images/common/close.svg" alt="close" />
      </button>
    </div>

    <div class="pop_cont">
      <ul class="menu-box">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SKILL</li>
        <li>PORTFOLIO</li>
        <li>CAREER</li>
        <li>CONTACT</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* 필요에 따라 스타일을 추가하세요 */
</style>
