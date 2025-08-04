<template>
    <div
      class="portfolio-item"
      v-for="item in jejuPortfolio"
      :key="item.id"
    >
      <div class="thumb">
        <img :src="item.img" :alt="item.title" />
      </div>
      <div class="txt-box">
        <p class="tit">{{ item.title }}</p>
      <span class="txt" v-html="item.desc"></span>
      </div>
    </div>
</template>
<script setup>
const jejuPortfolio = [
  {
    img: "/images/comaLab01/portfolio/portfolioList/jeju01.png", // 이미지 경로 입력
    title: "제주은행",
    desc: "제주은행 PC/MO/APP 운영<br/>(html, javascript, Jquery, Zeplin)",
  },
  // 필요시 더 추가
];
</script>