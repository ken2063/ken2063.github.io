<script setup>
const skills = [
  {
    img: "/src/assets/images/comaLab01/portfolio/ico_vue.png",
    title: "Vue.js Skill",
    desc: "Vue 운영과 구축의 경험",
  },
  {
    img: "/src/assets/images/comaLab01/portfolio/ico_react.png",
    title: "React.js Skill",
    desc: "React 학원과정 경험과 공부",
  },
  {
    img: "/src/assets/images/comaLab01/portfolio/ico_html.png",
    title: "HTML Skill",
    desc: "12년 경력의 구축과 운영의 경험",
  },
  {
    img: "/src/assets/images/comaLab01/portfolio/ico_css.png",
    title: "CSS Skill",
    desc: "12년 경력의 구축과 운영의 경험",
  },
  {
    img: "/src/assets/images/comaLab01/portfolio/ico_sass.png",
    title: "SCSS Skill",
    desc: "12년 경력의 구축과 운영의 경험",
  },
  {
    img: "/src/assets/images/comaLab01/portfolio/ico_js.png",
    title: "JavaScript Skill",
    desc: "12년 경력의 구축과 운영의 경험",
  },
  {
    img: "/src/assets/images/comaLab01/portfolio/ico_jquery.png",
    title: "jQuery Skill",
    desc: "12년 경력의 구축과 운영의 경험",
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
