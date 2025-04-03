<script>
import codeLab01 from "@/views/layout/comaLab01/index.vue";
import codeLab02 from "@/views/layout/comaLab02/index.vue";
import codeLab03 from "@/views/layout/comaLab03/index.vue";
import codeLab04 from "@/views/layout/comaLab04/index.vue";
import codeLab05 from "@/views/layout/comaLab05/index.vue";

export default {
  name: "indexGuide",
  components: {
    codeLab01,
    codeLab02,
    codeLab03,
    codeLab04,
    codeLab05,
  },
};
</script>

<template>
  <!-- list_header -->
  <div class="list_header">
    <h1>VUE - STUDY</h1>
    <p class="info">Publishing List</p>
  </div>
  <!-- //list_header -->

  <!-- cont -->
  <div class="cont">
    <h2>공통</h2>
    <div class="scroll-box-table">
      <table>
        <colgroup>
          <col span="1" width="5%" />
          <col span="1" width="*" />
          <col span="1" width="5%" />
          <col span="1" width="5%" />
          <col span="1" width="10%" />
          <col span="1" width="5%" />
          <col span="1" width="20%" />
        </colgroup>
        <thead>
          <tr>
            <th class="thead">No</th>
            <th class="thead">files</th>
            <th class="thead">start-Date</th>
            <th class="thead">end-Date</th>
            <th class="thead">state</th>
            <th class="thead">up-Date</th>
            <th class="thead">Log</th>
          </tr>
        </thead>
        <tbody>
          <!-- tr -->
          <tr>
            <td>1</td>
            <td class="file">
              <router-link to="/indexGuide">@/views/indexGuide.vue</router-link>
            </td>
            <td>2024.04.05</td>
            <td>2024.04.08</td>
            <td>
              <div class="state">
                <p class="txt">30%</p>
                <span style="width: 30%"></span>
              </div>
            </td>
            <td>2024.04.08</td>
            <td>
              <ul class="log">
                <!-- log - li -->
                <li class="flex">
                  <p class="date">2024.04.05</p>
                  <div class="txt">
                    그냥 수정해봄 그냥 수정해봄 그냥 수정해봄 그냥 수정해봄
                  </div>
                </li>
                <!-- // log - li -->

                <!-- log - li -->
                <li class="flex">
                  <p class="date">2024.04.08</p>
                  <div class="txt">
                    오늘도 수정해봄 오늘도 수정해봄 오늘도 수정해봄 오늘도
                    수정해봄
                  </div>
                </li>
                <!-- // log - li -->
              </ul>
            </td>
          </tr>
          <!-- // tr -->
        </tbody>
      </table>
    </div>
  </div>
  <!-- // cont -->
  <codeLab01 id="codeLab01" />

  <codeLab02 id="codeLab02" />

  <codeLab03 id="codeLab03" />

  <codeLab04 id="codeLab04" />

  <codeLab05 id="codeLab05" />
</template>
