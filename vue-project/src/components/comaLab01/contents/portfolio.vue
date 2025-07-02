<template>
  <section id="portfolio">
    <h2 class="fs-big">
      고객님, 어서<br />
      포트폴리오 <span>LIST</span>를 만나보세요!
    </h2>

    <div class="con-box">
      <div class="scroll-box">
        <ul>
          <li
            v-for="(tab, idx) in tabs"
            :key="tab.label"
            :class="{ active: activeTabIdx === idx }"
            @click="activeTabIdx = idx"
          >
            {{ tab.label }}
          </li>
        </ul>
      </div>

      <!-- portfolio-list -->
      <div class="portfolio-list">
        <!-- 전체 탭: 모든 포트폴리오 컴포넌트 이어서 보여주기 -->
        <template v-if="activeTabIdx === 0">
          <component
            v-for="(tab, idx) in tabs"
            v-if="idx !== 0"
            :is="tab.component"
            :key="tab.label"
          />
        </template>
        <!-- 개별 탭: 해당 컴포넌트만 보여주기 -->
        <template v-else>
          <component :is="tabs[activeTabIdx].component" />
        </template>
      </div>
      <!-- // portfolio-list -->
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import LgTab from "./portfolioList/LgTab.vue";
import JejuTab from "./portfolioList/JejuTab.vue";
import ShinhanTab from "./portfolioList/ShinhanTab.vue";
import AsiaTab from "./portfolioList/AsiaTab.vue";
import NiceTab from "./portfolioList/NiceTab.vue";
import WordTab from "./portfolioList/WordTab.vue";

const tabs = [
  { label: "전체", component: null },
  { label: "LG U+", component: LgTab },
  { label: "제주은행", component: JejuTab },
  { label: "신한카드", component: ShinhanTab },
  { label: "아시아경제", component: AsiaTab },
  { label: "NICE평가정보", component: NiceTab },
  { label: "워드앤코드", component: WordTab },
];

const activeTabIdx = ref(0);
</script>
