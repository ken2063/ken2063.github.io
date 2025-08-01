<template>
    <div
      class="portfolio-item"
      v-for="item in shinhanPortfolio"
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
const shinhanPortfolio = [
  {
    img: "./images/comaLab01/portfolio/portfolioList/shinhan01.png", // 이미지 경로 입력
    title: "신한카드",
    desc: "마이데이터 APP 운영<br/>(Vue, html, javascript, Jquery, Zeplin)",
  },
  // 필요시 더 추가
];
</script>