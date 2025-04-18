<script setup>
const nicePortfolio = [
  {
    img: "./images/comaLab01/portfolio/portfolioList/nice01.jpg", // 이미지 경로 입력
    title: "NICE평가정보",
    desc: "PC운영",
  },
  {
    img: "./images/comaLab01/portfolio/portfolioList/nice02.jpg", // 이미지 경로 입력
    title: "NICE평가정보",
    desc: "SKT- 신용지키미(유/무료) PC구축 및 운영",
  },
  {
    img: "./images/comaLab01/portfolio/portfolioList/nice03.jpg", // 이미지 경로 입력
    title: "NICE평가정보",
    desc: "V3 365 PC구축 및 운영",
  },
  {
    img: "./images/comaLab01/portfolio/portfolioList/nice04.jpg", // 이미지 경로 입력
    title: "NICE평가정보",
    desc: "하나카드 - 내차지키미 PC구축 및 운영",
  },
  {
    img: "./images/comaLab01/portfolio/portfolioList/nice05.jpg", // 이미지 경로 입력
    title: "NICE평가정보",
    desc: "국민카드 - 이지오토케어 PC구축 및 운영",
  },
  {
    img: "./images/comaLab01/portfolio/portfolioList/nice06.jpg", // 이미지 경로 입력
    title: "NICE평가정보",
    desc: "롯데카드 - 올마이카 PC구축 및 운영",
  },
  {
    img: "./images/comaLab01/portfolio/portfolioList/nice07.jpg", // 이미지 경로 입력
    title: "NICE평가정보",
    desc: "삼성카드 - 종합정보보호 PC구축 및 운영",
  },
  {
    img: "./images/comaLab01/portfolio/portfolioList/nice08.jpg", // 이미지 경로 입력
    title: "NICE평가정보",
    desc: "신한카드 - 마이카 PC 구축 및 운영",
  },
  {
    img: "./images/comaLab01/portfolio/portfolioList/nice09.jpg", // 이미지 경로 입력
    title: "NICE평가정보",
    desc: "우리카드 - 이지오토플러스 PC 구축 및 운영",
  },

  // 필요시 더 추가
];
</script>

<template>
  <div class="portfolio-list">
    <ul>
      <li v-for="(item, idx) in nicePortfolio" :key="idx">
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
