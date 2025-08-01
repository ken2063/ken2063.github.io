<template>
  <section id="career">
    <h2 class="fs-big">CAREER</h2>
    <ul class="con-box">
      <li v-for="(career, idx) in careers" :key="idx">
        <span :class="career.flagClass">{{ career.flag }}</span>
        <p class="com_name01" v-html="career.company"></p>
        <p class="com_name02">{{ career.companySub }}</p>
        <div class="flex">
          <p class="work">{{ career.position }}</p>
          <p class="date">{{ career.date }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
<script setup>
const careers = [
  {
    flag: "프리랜서",
    flagClass: "flag01",
    company: "LG U+ 알닷",
    companySub: "플래닛닷츠 4개월",
    position: "선임",
    date: "2025.05 – 2025.08",
  },
  {
    flag: "프리랜서",
    flagClass: "flag01",
    company: "LG U+",
    companySub: "프레임아웃/디플러 1년 4개월",
    position: "과장",
    date: "2024.01 – 2025.04",
  },
  {
    flag: "프리랜서",
    flagClass: "flag01",
    company: "제주은행 제주지니",
    companySub: "코코아드림 1년6개월",
    position: "과장",
    date: "2022.07 – 2023.12",
  },
  {
    flag: "프리랜서",
    flagClass: "flag01",
    company: "신한카드 마이데이터",
    companySub: "미래아이씨티 6개월",
    position: "과장",
    date: "2022.01 – 2022.06",
  },
  {
    flag: "정규직",
    flagClass: "flag02",
    company: "아시아경제",
    companySub: "4년",
    position: "대리",
    date: "2018.01 – 2021.12",
  },
  {
    flag: "계약직",
    flagClass: "flag03",
    company: "나이스평가정보",
    companySub: "플랜브이 2년",
    position: "대리",
    date: "2015.09 – 2017.09",
  },
  {
    flag: "정규직",
    flagClass: "flag02",
    company: "워드앤코드-웹에이젼시",
    companySub: "3년",
    position: "대리",
    date: "2012.07 – 2015.07",
  },
];
</script>