
<template>
  <div class="portfolio-list">
    <ul>
      <li v-for="(item, idx) in asiaPortfolio" :key="idx">
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
const asiaPortfolio = [
  {
    img: "./images/comaLab01/portfolio/portfolioList/asiae01.png", // 이미지 경로 입력
    title: "아시아경제",
    desc: "PC/MO/APP 운영",
  },
  {
    img: "./images/comaLab01/portfolio/portfolioList/asiae02.jpg", // 이미지 경로 입력
    title: "아시아경제",
    desc: "재보궐선거 구축",
  },
  {
    img: "./images/comaLab01/portfolio/portfolioList/asiae03.jpg", // 이미지 경로 입력
    title: "아시아경제",
    desc: "AMP(Accelerated Mobile Pages) 구축 및 운영",
  },
  {
    img: "./images/comaLab01/portfolio/portfolioList/asiae04.jpg", // 이미지 경로 입력
    title: "아시아경제",
    desc: "아경CORE 구축 및운영",
  },
  {
    img: "./images/comaLab01/portfolio/portfolioList/asiae05.jpg", // 이미지 경로 입력
    title: "아시아경제",
    desc: "벨류업심포지움 구축 및 운영",
  },
  {
    img: "./images/comaLab01/portfolio/portfolioList/asiae06.jpg", // 이미지 경로 입력
    title: "아시아경제",
    desc: "간편집밥 한상차림 구축 및 운영",
  },
  {
    img: "./images/comaLab01/portfolio/portfolioList/asiae07.jpg", // 이미지 경로 입력
    title: "아시아경제",
    desc: "양낙규의 디펜스클럽 구축 및 운영",
  },
  {
    img: "./images/comaLab01/portfolio/portfolioList/asiae08.jpg", // 이미지 경로 입력
    title: "아시아경제",
    desc: "드링킷 구축 및 운영",
  },
  {
    img: "./images/comaLab01/portfolio/portfolioList/asiae09.jpg", // 이미지 경로 입력
    title: "아시아경제",
    desc: "사주 구축 및 운영",
  },
  {
    img: "./images/comaLab01/portfolio/portfolioList/asiae10.jpg", // 이미지 경로 입력
    title: "아시아경제",
    desc: "인트라넷 구축 및 운영",
  },
  // 필요시 더 추가
];
</script>
