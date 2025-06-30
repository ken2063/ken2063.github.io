<template>
  <div id="portfolio">
    <defaultHead />
    <defaultContent />
    <defaultFooter />
    <defaultFooterBtn />
  </div>
</template>

<script setup>  
  import defaultHead from "@/components/comaLab01/head/defaultHead.vue";
  import defaultContent from "@/components/comaLab01/contents/defaultContent.vue";
  import defaultFooter from "@/components/comaLab01/footer/defaultFooter.vue";
  import defaultFooterBtn from "@/components/comaLab01/footer/defaultFooterBtn.vue";
</script>
<style lang="scss" scoped>
@use "@/assets/scss/Uiguide/comaLab01/portfolio.scss" as *;
</style>
