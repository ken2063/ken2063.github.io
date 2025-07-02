<template>
  <section id="contact">
    <div class="contact-con">
      <button class="close-btn" @click="$emit('close')">닫기</button>

      <div class="con-box">
        <!-- profile -->
        <div class="profile-box">
          <div class="thumb">
            <img :src="imgSrc" alt="" />
          </div>

          <dl>
            <dt class="tit">최석 1988년 (만 37세)</dt>
            <dd></dd>

            <dt class="tit"><address>ADDRESS</address></dt>
            <dd class="txt">경기도 안산시 선부동 선부광장 서로 42</dd>

            <dt class="tit">PHONE</dt>
            <dd class="txt">010 - 7211 - 9367</dd>

            <dt class="tit">E-MAIL</dt>
            <dd class="txt">ken2063@naver.com</dd>
          </dl>
        </div>
        <!-- // profile -->
      </div>

      <div class="con-box">
        <!-- skill -->
         <div class="skill-box01">
          <ul>
            <li>
              <span class="tit01">학력</span>
              <p class="tit02">안산대학교</p>
              <p class="txt">
                대학(2,3년) - 졸업
              </p>
            </li>

            <li>
              <span class="tit01">경력</span>
              <p class="tit02">플래닛닷츠</p>
              <p class="txt">
                퇴사 - 총 12년 6개월
              </p>
            </li>

            
            <li>
              <span class="tit01">인턴·대외활동 / 해외경험</span>
              <p class="tit02">캐나다 해외경험</p>
              <p class="txt"></p>
            </li>
            
            <li>
              <span class="tit01">자격증 / 어학</span>
              <p class="tit02">2종보통운전면허</p>
              <p class="txt"></p>
            </li>
          </ul>
         </div>

         <div class="skill-box02">
          <h3>기타 (활용가능한 S/W 및 기법, FrameWork)</h3>
          <ul class="sklii-list">
            <li v-for="(skill, index) in skills" :key="skill">
                <strong v-if="['Javascript', 'Vue', 'React'].includes(skill)">
                  {{ skill }}
                </strong>
                <span v-else>{{ skill }}</span>
            </li>
          </ul>
        </div>
        <!-- // skill -->
      </div>

      <!-- career -->
      <h2 class="mgt40 mgb10">경력</h2>
      <div class="con-box">
        <div class="career-box">
          <ul class="data-list-box">
            <li v-for="(career, index) in careers" :key="index">
              <div class="date">
                <p class="date-to">{{ career.dateTo }}</p>
                <p class="date-total">{{ career.dateTotal }}</p>
              </div>
              <div class="info">
                <p class="tit">{{ career.title }}<span>{{ career.subTitle }}</span></p>
                <p class="txt">{{ career.description }}</p>
                <dl>
                    <dt class="name">{{ career.payName }}</dt>
                    <dd>{{ career.payValue }}</dd>
                </dl>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- // career -->

      <!-- education -->
      <h2 class="mgt40 mgb10">교육</h2>
      <div class="con-box">
        <div class="edu-box">
          <ul class="data-list-box">
            <li v-for="(education, index) in education" :key="index">
              <div class="date">
                <p class="date-to">{{ education.dateTo }}</p>
              </div>
              <div class="info">
                <p class="tit">{{ education.title }}<span>{{ education.subTitle }}</span></p>
                <p class="txt">{{ education.description }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- // education -->

      <!-- license -->
      <h2 class="mgt40 mgb10">자격증</h2>
      <div class="con-box">
        <div class="license-box">
          <ul class="data-list-box">
            <li v-for="(license, index) in license" :key="index">
              <div class="date">
                <p class="date-to">{{ license.dateTo }}</p>
              </div>
              <div class="info">
                <p class="tit">{{ license.title }}<span>{{ license.subTitle }}</span></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- // license -->

      <!-- prize -->
      <h2 class="mgt40 mgb10">수상</h2>
      <div class="con-box">
        <div class="prize-box">
          <ul class="data-list-box">
            <li v-for="(prize, index) in prize" :key="index">
              <div class="date">
                <p class="date-to">{{ prize.dateTo }}</p>
              </div>
              <div class="info">
                <p class="tit">{{ prize.title }}<span>{{ prize.subTitle }}</span></p>
                <p class="txt">{{ prize.description }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- // prize -->

      <!-- foreign -->
      <h2 class="mgt40 mgb10">해외 경험</h2>
      <div class="con-box">
        <div class="foreign-box">
          <ul class="data-list-box">
            <li v-for="(foreign, index) in foreign" :key="index">
              <div class="date">
                <p class="date-to">{{ foreign.dateTo }}</p>
                <p class="date-total">{{ foreign.dateTotal }}</p>
              </div>
              <div class="info">
                <p class="tit">{{ foreign.title }}<span>{{ foreign.subTitle }}</span></p>
                <p class="txt">{{ foreign.description }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- // foreign -->
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';

const imgSrc = "./images/comaLab01/portfolio/profile.jpg";

const skills = [
  'HTML', 'CSS', 'SCSS', 'Jquery', 'Javascript', 'Vue', 'React', 'WebSquare',
  'git', 'zeplin', 'Figma', 'VScode','Photoshop', 'illustrator', 
];

const careers = ref([
  {
    dateTo: '2025. 05 ~ 2025. 08',
    dateTotal: '4개월',
    title: '플래닛닷츠',
    subTitle: 'UX디자인팀 선임',
    description: 'LGU+ 알뜰폰닷컴 (PC/MOBILE/ADMIN) 구축',
    payName: '연봉',
    payValue: '500만원',
  },
  {
    dateTo: '2024. 01 ~ 2025. 04',
    dateTotal: '1년 4개월',
    title: '프레임아웃',
    subTitle: 'UX디자인팀 과장',
    description: 'LGU+ 사이트(PC/MOBILE/APP) 운영 및 2024년 9월 웹접근성 획득',
    payName: '연봉',
    payValue: '510만원',
  },
  {
    dateTo: '2022. 07 ~ 2023. 12',
    dateTotal: '1년 6개월',
    title: '코코아드림',
    subTitle: '모바일 서비스팀 과장',
    description: '제주지니 앱/웹 운영 및 관리 (html, css, figma, js, jquery)',
    payName: '연봉',
    payValue: '540만원',
  },
  {
    dateTo: '2022. 01 ~ 2022. 06',
    dateTotal: '6개월',
    title: '미래아이씨티',
    subTitle: '마이데이터 과장',
    description: '신한카드 마이데이터 앱 운영 작업(Zeplin, SSAS, VUE.js - 운영)',
    payName: '연봉',
    payValue: '520만원',
  },
  {
    dateTo: '2018. 01 ~ 2021. 12',
    dateTotal: '4년',
    title: '아시아경제',
    subTitle: '디자인팀 대리',
    description: '운영 및 관리 (html, css, photoshop, js, jquery)',
    payName: '연봉',
    payValue: '4,000만원',
  },
  {
    dateTo: '2015. 09 ~ 2017. 09',
    dateTotal: '2년 1개월',
    title: '플랜브이',
    subTitle: '정보디자인팀 대리',
    description: '나이스신용정보 운영 및 관리 (html, css, photoshop, js, jquery)',
    payName: '연봉',
    payValue: '2,800만원',
  },
  {
    dateTo: '2012. 07 ~ 2015. 07',
    dateTotal: '3년 1개월',
    title: '워드앤코드',
    subTitle: '디자인팀 주임/계장(연구원)',
    description: '구축, 운영 및 관리 (html, css, photoshop, js, jquery)',
    payName: '연봉',
    payValue: '2,400만원',
  },
]);

const education = ref([
  {
    dateTo: '2024. 10 ~ 2024. 11',
    title: '프론트앤드개발의시작 (React.JS)',
    subTitle: '그린아카데미',
    description: '프론트앤드개발의시작 (React.JS)',
  },
]);

const license = ref([
  {
    dateTo: '2012. 12',
    title: '2종보통운전면허',
    subTitle: '경찰청(운전면허시험관리단)',
  },
]);

const prize = ref([
  {
    dateTo: '2010',
    title: '2010 멀티미디어 학과 과제전 최우수상',
    subTitle: '안산대학교',
    description: '학교 과제전 최우수상',
  },
]);

const foreign = ref([
  {
    dateTo: '2010. 12 ~ 2011. 12',
    dateTotal: '1년 1개월',
    title: '캐나다 해외취업 연수',
    subTitle: '안산대학교 - 경기도 지자체',
    description: '어학 연수 및 해외 취업',
  },
]);
</script>