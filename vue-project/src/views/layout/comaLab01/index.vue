<script></script>

<template>
  <!-- cont -->
  <div class="cont">
    <h2>최석 - codeLab01</h2>

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
              <router-link to="/comaLab01/HelloWorld" target="_blank"
                >@/views/layout/comaLab01/HelloWorld.vue</router-link
              >
            </td>
            <td>2025.02.14</td>
            <td>2025.02.14</td>
            <td>
              <div class="state">
                <p class="txt">100%</p>
                <span style="width: 100%"></span>
              </div>
            </td>
            <td>2025.02.14</td>
            <td>
              <ul class="log">
                <!-- log - li -->
                <li class="flex">
                  <!-- 수정내용 작성 -->
                  <!-- 
                    <p class="date">2025.02.14</p>
                    <div class="txt">내용</div> 
                  -->
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
</template>
