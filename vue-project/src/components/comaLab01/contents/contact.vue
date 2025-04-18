<script setup>
// 별도의 로직이 없으므로 비워둡니다.
</script>

<template>
  <section id="contact">
    <div class="contact-con">
      <button class="close-btn" @click="$emit('close')">닫기</button>

      <h2 class="fs-big">CONTACT</h2>
      <div class="con-box">
        <div class="thumb">
          <img src="/src/assets/images/comaLab01/portfolio/pic.jpg" alt="" />
        </div>

        <p class="fs-large p-tit">CONTACT</p>
        <dl>
          <dt class="tit"><address>ADDRESS</address></dt>
          <dd class="txt">경기도 안산시 선부동 선부광장 서로 42</dd>

          <dt class="tit">PHONE</dt>
          <dd class="txt">010 - 7211 - 9367</dd>

          <dt class="tit">E-MAIL</dt>
          <dd class="txt">ken2063@naver.com</dd>
        </dl>
      </div>
    </div>
  </section>
</template>
