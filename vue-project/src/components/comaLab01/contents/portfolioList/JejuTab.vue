<template>
  <div class="portfolio-list">
    <ul>
      <li v-for="(item, idx) in jejuPortfolio" :key="idx">
        <div class="thumb">
          <img :src="item.img" :alt="item.title" />
        </div>
        <div class="txt-box">
          <p class="tit">{{ item.title }}</p>
          <span class="txt">{{ item.desc }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
const jejuPortfolio = [
  {
    img: "./images/comaLab01/portfolio/portfolioList/jeju01.png", // 이미지 경로 입력
    title: "제주은행",
    desc: "제주은행 PC/MO/APP 운영",
  },
  // 필요시 더 추가
];
</script>