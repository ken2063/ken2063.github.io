<template>
  <section id="home">
    <ul class="bxslider">
      <li class="slide01">
        <div class="txt-box">
          <p class="tit">WELCOME TO MY<br />PORTFOLIO</p>
          <span class="txt">저의 포트폴리오를 소개합니다.01</span>
        </div>
      </li>

      <li class="slide02">
        <div class="txt-box">
          <p class="tit">WELCOME TO MY<br />PORTFOLIO</p>
          <span class="txt">저의 포트폴리오를 소개합니다.02</span>
        </div>
      </li>
    </ul>
  </section>
</template>
<script setup>
import { onMounted } from "vue";

// jQuery, bxSlider가 이미 <head> 또는 public/index.html에 로드되어 있다고 가정합니다.
onMounted(() => {
  // DOM이 렌더링된 후에 bxSlider를 실행해야 합니다.
  $(".bxslider").bxSlider({
    mode: "horizontal",
    captions: true,
    infiniteLoop: true,
    responsive: true,
    controls: false,
    slideMargin: 20,
    auto: true, // 자동 슬라이드 활성화
    pause: 3000, // 각 슬라이드가 보여지는 시간 (ms), 예: 4000ms = 4초
    autoStart: true, // (기본값 true, 명시해도 무방)
  });
});
</script>