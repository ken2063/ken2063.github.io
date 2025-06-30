<template>
  <div class="portfolio-list">
    <ul>
      <li v-for="(item, idx) in wordPortfolio" :key="idx">
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
const wordPortfolio = [
  {
    img: "./images/comaLab01/portfolio/portfolioList/word01.jpg", // 이미지 경로 입력
    title: "워드앤코드",
    desc: "CJ라이온 - 락토페린 PC 구축 및 운영",
  },
  {
    img: "./images/comaLab01/portfolio/portfolioList/word02.jpg", // 이미지 경로 입력
    title: "워드앤코드",
    desc: "고려대학교 의료원 PC 구축 및 운영",
  },
  {
    img: "./images/comaLab01/portfolio/portfolioList/word03.jpg", // 이미지 경로 입력
    title: "워드앤코드",
    desc: "사학연금 PC 구축 및 운영",
  },
  {
    img: "./images/comaLab01/portfolio/portfolioList/word04.jpg", // 이미지 경로 입력
    title: "워드앤코드",
    desc: "안전실천연합 PC 구축 및 운영",
  },
  // 필요시 더 추가
];
</script>