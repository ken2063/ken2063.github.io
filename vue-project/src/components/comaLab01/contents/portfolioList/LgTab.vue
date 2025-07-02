<template>
    <div
      class="portfolio-item"
      v-for="item in lgPortfolio"
      :key="item.id"
    >
      <div class="thumb">
        <img :src="item.img" :alt="item.title" />
      </div>
      <div class="txt-box">
        <p class="tit">{{ item.title }}</p>
        <span class="txt">{{ item.desc }}</span>
      </div>
    </div>
</template>
<script setup>
const lgPortfolio = [
  {
    id: 1,
    img: "./images/comaLab01/portfolio/portfolioList/lgu01.jpg",
    title: "LG U+",
    desc: "PC/MO/APP 운영",
  },
  {
    id: 2,
    img: "./images/comaLab01/portfolio/portfolioList/lgu02.png",
    title: "LG U+",
    desc: "웹접근성 획득",
  },
  {
    id: 3,
    img: "./images/comaLab01/portfolio/portfolioList/lgu02.png",
    title: "LG U+ 알닷",
    desc: "PC/MO 구축",
  },
  {
    id: 4,
    img: "./images/comaLab01/portfolio/portfolioList/lgu02.png",
    title: "LG U+ 알닷",
    desc: "ADMIN 구축",
  },
];
</script>