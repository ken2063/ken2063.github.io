<script setup>
const shinhanPortfolio = [
  {
    img: "/src/assets/images/comaLab01/portfolio/portfolioList/item19.png", // 이미지 경로 입력
    title: "신한카드",
    desc: "마이데이터 APP 운영",
  },
  // 필요시 더 추가
];
</script>

<template>
  <div class="portfolio-list">
    <ul>
      <li v-for="(item, idx) in shinhanPortfolio" :key="idx">
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
