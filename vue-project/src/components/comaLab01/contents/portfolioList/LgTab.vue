<script setup>
const lgPortfolio = [
  {
    img: "/src/assets/images/comaLab01/portfolio/portfolioList/lgu01.jpg", // 이미지 경로 입력
    title: "LG U+",
    desc: "PC/MO/APP 운영",
  },
  {
    img: "/src/assets/images/comaLab01/portfolio/portfolioList/lgu02.png", // 이미지 경로 입력
    title: "LG U+",
    desc: "웹접근성 획득",
  },
  // 필요시 더 추가
];
</script>

<template>
  <div class="portfolio-list">
    <ul>
      <li v-for="(item, idx) in lgPortfolio" :key="idx">
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
