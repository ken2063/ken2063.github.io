<script>
import home from "@/components/comaLab01/contents/home.vue";
import about from "@/components/comaLab01/contents/about.vue";
import skill from "@/components/comaLab01/contents/skill.vue";
import portfolio from "@/components/comaLab01/contents/portfolio.vue";
import career from "@/components/comaLab01/contents/career.vue";
import contact from "@/components/comaLab01/contents/contact.vue";

export default {
  name: "defaultContent",
  components: {
    home,
    about,
    skill,
    portfolio,
    career,
    contact,
  },
};
</script>

<template>
  <div class="contents">
    <home />
    <about />
    <skill />
    <portfolio />
    <career />
    <contact />
  </div>
</template>
<style>
@import "@/assets/scss/Uiguide/comaLab01/defaultcontents.scss";
</style>
