<script setup>
const skills = [
  {
    img: "./images/comaLab01/portfolio/ico_vue.png",
    title: "Vue.js",
    desc: "Vue 운영과 구축의 경험, 컴포넌트 기반 구조와 반응형 데이터 바인딩을 활용",
  },
  {
    img: "./images/comaLab01/portfolio/ico_react.png",
    title: "React.js",
    desc: "React 학원과정 경험과 공부",
  },
  {
    img: "./images/comaLab01/portfolio/ico_html.png",
    title: "HTML",
    desc: "웹사이트 구축 및 운영 경험, 웹 표준과 접근성 준수에 강점이 있습니다.",
  },
  {
    img: "./images/comaLab01/portfolio/ico_css.png",
    title: "CSS",
    desc: "CSS를 활용한 반응형 웹 디자인 및 크로스브라우징 최적화 경험",
  },
  {
    img: "./images/comaLab01/portfolio/ico_sass.png",
    title: "SCSS",
    desc: "SCSS를 활용한 반응형 웹 디자인 및 크로스브라우징 최적화 경험",
  },
  {
    img: "./images/comaLab01/portfolio/ico_js.png",
    title: "JavaScript",
    desc: "스크립트를 활용한 동적 UI 구현 및 웹 기능 개발 경험",
  },
  {
    img: "./images/comaLab01/portfolio/ico_jquery.png",
    title: "jQuery",
    desc: "제이쿼리를 활용한 동적 UI 구현 및 웹 기능 개발 경험",
  },
];
</script>

<template>
  <section id="skill">
    <h2>바로 지금, <span>SKILL</span> 항목을 알려드려요!</h2>
    <div class="con-box">
      <ul class="skill-list">
        <li v-for="(skill, idx) in skills" :key="idx">
          <div class="thumb">
            <img :src="skill.img" :alt="skill.title" />
          </div>
          <dl>
            <dt class="pub-tit">{{ skill.title }}</dt>
            <dd class="pub-txt">{{ skill.desc }}</dd>
          </dl>
        </li>
      </ul>
    </div>
  </section>
</template>
