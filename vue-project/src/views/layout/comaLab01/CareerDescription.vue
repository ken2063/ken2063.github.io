<template>
  <div class="cont">
    <p class="ta-r mb10">
      경력 - 12년 6개월
      <a href="/resume.doc" class="btn-down" title="이력서 다운로드">
        이력서 다운로드
      </a>
    </p>

    <h3 class="ta-c fs-big mb40">최석 - 경력정보</h3>

    <!-- 경력 정보 테이블 -->
    <div class="scroll-box-table type02 mb40">
      <ul>
        <li v-for="career in careers" :key="career.company">
<div v-html="career.company"></div>
<div>{{ career.period }}</div>
<div>{{ career.position }}</div>
<div>{{ career.work }}</div>
        </li>
      </ul>
      <table>
        <colgroup>
          <col span="1" width="25%" />
          <col span="1" width="25%" />
          <col span="1" width="25%" />
          <col span="1" width="25%" />
        </colgroup>
        <thead>
          <tr>
            <th class="thead">회사명</th>
            <th class="thead">기간</th>
            <th class="thead">직위</th>
            <th class="thead">담당업무</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="career in careers" :key="career.company">
            <td class="fw-b" v-html="career.company"></td>
            <td>{{ career.period }}</td>
            <td>{{ career.position }}</td>
            <td>{{ career.work }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 기술 스택 테이블 -->
    <div class="scroll-box-table mb40">
      <table>
        <colgroup>
          <col span="1" width="5%" />
          <col span="1" width="*" />
          <col span="1" width="10%" />
          <col span="1" width="10%" />
          <col span="1" width="10%" />
          <col span="1" width="10%" />
          <col span="1" width="5%" />
          <col span="1" width="5%" />
          <col span="1" width="5%" />
          <col span="1" width="5%" />
          <col span="1" width="5%" />
        </colgroup>
        <thead>
          <tr>
            <th class="thead" colspan="11">
              기타 (활용가능한 S/W 및 기법, FrameWork)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="11">
              <span v-for="(skill, index) in skills" :key="skill">
                <strong v-if="['Javascript', 'Vue', 'React'].includes(skill)">
                  {{ skill }}
                </strong>
                <span v-else>{{ skill }}</span>
                <span v-if="index < skills.length - 1"> / </span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <h3 class="ta-c fs-big mb40">최석 - 경력기술서</h3>

    <!-- 프로젝트 테이블 -->
    <div class="scroll-box-table mb20">
      <table>
        <colgroup>
          <col span="1" width="5%" />
          <col span="1" width="*" />
          <col span="1" width="10%" />
          <col span="1" width="10%" />
          <col span="1" width="10%" />
          <col span="1" width="10%" />
          <col span="1" width="5%" />
          <col span="1" width="5%" />
          <col span="1" width="5%" />
          <col span="1" width="5%" />
          <col span="1" width="5%" />
        </colgroup>
        <thead>
          <tr>
            <th class="thead" rowspan="2">No</th>
            <th class="thead" rowspan="2">프로젝트명<br />(업무명)</th>
            <th class="thead" rowspan="2">참여기간</th>
            <th class="thead" rowspan="2">고객사</th>
            <th class="thead" rowspan="2">근무회사</th>
            <th class="thead" rowspan="2">역할</th>
            <th class="thead" colspan="5">개발환경</th>
          </tr>
          <tr>
            <th class="thead">OS</th>
            <th class="thead">개발언어</th>
            <th class="thead">DBMS</th>
            <th class="thead">TOOL(프레임웍)</th>
            <th class="thead">기타</th>
          </tr>
        </thead>
        <tbody>
    <tr v-for="(project, index) in projects" :key="index">
      <td>{{ index + 1 }}</td>
      <td>{{ project.name }}</td>
      <td>{{ project.period }}</td>
      <td v-html="project.client"></td>
      <td>
        {{ project.company }}<br />
        <span :class="getEmploymentTypeClass(project.employmentType)">
          {{ project.employmentType }}
        </span>
      </td>
      <td>{{ project.role }}</td>
      <td>{{ project.os }}</td>
      <td>{{ project.language }}</td>
      <td>{{ project.dbms }}</td>
      <td>{{ project.tool }}</td>
      <td>{{ project.etc }}</td>
    </tr>
  </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const careers = [
  {
    company: 'LGU+ (프리랜서)<br />프레임아웃/디플러 1년 4개월',
    period: '2024.01 – 2025.04',
    position: '과장',
    work: '퍼블리싱'
  },
  {
    company: '제주은행 제주지니 (프리랜서)<br />코코아드림 1년6개월',
    period: '2022.07 – 2023.12',
    position: '과장',
    work: '퍼블리싱'
  },
  {
    company: '신한카드 마이데이터 (프리랜서)<br />미래아이씨티 6개월',
    period: '2022.01 – 2022.06',
    position: '과장',
    work: '퍼블리싱'
  },
  {
    company: '아시아경제 (정규직)<br />4년',
    period: '2018.01 – 2021.12',
    position: '대리',
    work: '퍼블리싱'
  },
  {
    company: '나이스평가정보 (계약직)<br />플랜브이 2년',
    period: '2015.09 – 2017.09',
    position: '대리',
    work: '퍼블리싱'
  },
  {
    company: '워드앤코드-웹에이젼시 (정규직)<br />3년',
    period: '2012.07 – 2015.07',
    position: '대리',
    work: '퍼블리싱'
  },
];

const skills = [
  'HTML', 'CSS', 'SCSS', 'Jquery', 'Javascript', 'Vue', 'React', 'WebSquare',
  'git', 'zeplin', 'Figma', 'VScode','Photoshop', 'illustrator', 
];

const projectsData  = [
  {
    name: 'LGU+ 알닷 구축 (PC/MO)',
    period: '2025.05 ~ 2025.08',
    client: 'LGU+',
    company: '플레닛닷츠',
    employmentType: '프리랜서',
    role: '퍼블리싱',
    os: 'win',
    language: 'Vue3, SCSS, js, figma, git',
    dbms: '-',
    tool: 'VScode',
    etc: '-'
  },
  {
    name: 'LGU+ 알닷 ADMIN 구축 (PC)',
    period: '2025.05 ~ 2025.08',
    client: 'LGU+',
    company: '플레닛닷츠',
    employmentType: '프리랜서',
    role: '퍼블리싱',
    os: 'win',
    language: 'websquare, figma, git',
    dbms: '-',
    tool: 'websquare',
    etc: '-'
  },
  {
    name: 'LGU+ 운영 (PC/MO/APP)',
    period: '2024.04 ~ 2025.04',
    client: 'LGU+',
    company: '프레임아웃/디플러',
    employmentType: '프리랜서',
    role: '퍼블리싱',
    os: 'win',
    language: 'Vue3, SCSS, js, figma, git',
    dbms: '-',
    tool: 'VScode',
    etc: '-'
  },
  {
    name: 'LGU+ 웹접근성 획득',
    period: '2024.07 ~ 2024.09',
    client: 'LGU+',
    company: '프레임아웃/디플러',
    employmentType: '프리랜서',
    role: '퍼블리싱',
    os: 'win',
    language: 'Vue3, SCSS, js, figma, git',
    dbms: '-',
    tool: 'VScode',
    etc: '-'
  },
  {
    name: '제주은행 제주지니 (PC/MO/APP)',
    period: '2022.07 ~ 2023.12',
    client: '제주은행',
    company: '코코아드림',
    employmentType: '프리랜서',
    role: '퍼블리싱',
    os: 'mac',
    language: 'Html, css, js, figma',
    dbms: '-',
    tool: 'VScode',
    etc: '-'
  },
  {
    name: '신한카드 마이데이터 (APP)',
    period: '2022.01 ~ 2022.06',
    client: '신한카드',
    company: '미래아이씨티',
    employmentType: '프리랜서',
    role: '퍼블리싱',
    os: 'mac',
    language: 'Vue2, sass, zeplin, git, js',
    dbms: '-',
    tool: 'VScode',
    etc: '-'
  },
  {
    name: '아시아경제 운영',
    period: '2018.01 ~ 2021.12',
    client: '아시아경제',
    company: '아시아경제',
    employmentType: '정규직',
    role: '퍼블리싱',
    os: 'mac',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'VScode',
    etc: '-'
  },
  {
    name: '재보궐선거',
    period: '2021.03 ~ 2021.04',
    client: '아시아경제',
    company: '아시아경제',
    employmentType: '정규직',
    role: '퍼블리싱',
    os: 'mac',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'VScode',
    etc: '-'
  },
  {
    name: 'Google AMP(Accelerated Mobile Pages)',
    period: '2020.10 ~ 2020.11',
    client: '아시아경제',
    company: '아시아경제',
    employmentType: '정규직',
    role: '퍼블리싱',
    os: 'mac',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'VScode',
    etc: '-'
  },
  {
    name: '아경CORE',
    period: '2020.09 ~ 2021.01',
    client: '아시아경제',
    company: '아시아경제',
    employmentType: '정규직',
    role: '퍼블리싱',
    os: 'mac',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'VScode',
    etc: '-'
  },
  {
    name: '밸류업심포지움',
    period: '2020.09 ~ 2020.09',
    client: '아시아경제',
    company: '아시아경제',
    employmentType: '정규직',
    role: '퍼블리싱',
    os: 'mac',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'VScode',
    etc: '-'
  },
  {
    name: '간편집밥 한상차림',
    period: '2020.04 ~ 2020.05',
    client: '아시아경제',
    company: '아시아경제',
    employmentType: '정규직',
    role: '퍼블리싱',
    os: 'mac',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'VScode',
    etc: '-'
  },
  {
    name: '양낙규의디펜스클럽',
    period: '2019.10 ~ 2019.11',
    client: '아시아경제',
    company: '아시아경제',
    employmentType: '정규직',
    role: '퍼블리싱',
    os: 'mac',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'VScode',
    etc: '-'
  },
  {
    name: '드링킷',
    period: '2019.06 ~ 2019.11',
    client: '아시아경제',
    company: '아시아경제',
    employmentType: '정규직',
    role: '퍼블리싱',
    os: 'mac',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'VScode',
    etc: '-'
  },
  {
    name: '사주',
    period: '2019.04 ~ 2019.07',
    client: '아시아경제',
    company: '아시아경제',
    employmentType: '정규직',
    role: '퍼블리싱',
    os: 'mac',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'VScode',
    etc: '-'
  },
  {
    name: '인트라넷',
    period: '2018.02 ~ 2018.04',
    client: '아시아경제',
    company: '아시아경제',
    employmentType: '정규직',
    role: '퍼블리싱',
    os: 'mac',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'VScode',
    etc: '-'
  },
  {
    name: 'NICE평가정보 사이트 운영(PC/MO)',
    period: '2017.05 ~ 2017.07',
    client: 'NICE평가정보',
    company: 'NICE평가정보-플랜브이',
    employmentType: '계약직',
    role: '퍼블리싱',
    os: 'Win',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'Dreamweaver',
    etc: '-'
  },
  {
    name: 'SKT- 신용지키미(유/무료)',
    period: '2017.05 ~ 2017.07',
    client: 'Skt',
    company: 'NICE평가정보-플랜브이',
    employmentType: '계약직',
    role: '퍼블리싱',
    os: 'Win',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'Dreamweaver',
    etc: '-'
  },
  {
    name: 'V3 - 365',
    period: '2017.04 ~ 2017.05',
    client: 'V3',
    company: 'NICE평가정보-플랜브이',
    employmentType: '계약직',
    role: '퍼블리싱',
    os: 'Win',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'Dreamweaver',
    etc: '-'
  },
  {
    name: '하나카드 - 내차지키미',
    period: '2017.03 ~ 2017.04',
    client: '하나카드',
    company: 'NICE평가정보-플랜브이',
    employmentType: '계약직',
    role: '퍼블리싱',
    os: 'Win',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'Dreamweaver',
    etc: '-'
  },
  {
    name: '국민카드 – 이지오토케어',
    period: '2017.02 ~ 2017.03',
    client: '국민카드',
    company: 'NICE평가정보-플랜브이',
    employmentType: '계약직',
    role: '퍼블리싱',
    os: 'Win',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'Dreamweaver',
    etc: '-'
  },
  {
    name: '롯데카드 – 올마이카',
    period: '2017.02 ~ 2017.03',
    client: '롯데카드',
    company: 'NICE평가정보-플랜브이',
    employmentType: '계약직',
    role: '퍼블리싱',
    os: 'Win',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'Dreamweaver',
    etc: '-'
  },
  {
    name: '삼성카드 – 종합정보보호',
    period: '2016.11 ~ 2016.12',
    client: '삼성카드',
    company: 'NICE평가정보-플랜브이',
    employmentType: '계약직',
    role: '퍼블리싱',
    os: 'Win',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'Dreamweaver',
    etc: '-'
  },
  {
    name: '신한카드 – 마이카',
    period: '2016.08 ~ 2016.09',
    client: '신한카드',
    company: 'NICE평가정보-플랜브이',
    employmentType: '계약직',
    role: '퍼블리싱',
    os: 'Win',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'Dreamweaver',
    etc: '-'
  },
  {
    name: '우리카드 – 이지오토플러스',
    period: '2016.05 ~ 2016.06',
    client: '우리카드',
    company: 'NICE평가정보-플랜브이',
    employmentType: '계약직',
    role: '퍼블리싱',
    os: 'Win',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'Dreamweaver',
    etc: '-'
  },
  {
    name: 'CJ라이온 - 락토페린',
    period: '2015.03 ~ 2015.06',
    client: 'CJ라이온',
    company: '워드앤코드',
    employmentType: '정규직',
    role: '퍼블리싱',
    os: 'Win',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'editor',
    etc: '-'
  },
  {
    name: '고려대학교 의료원',
    period: '2014.09 ~ 2014.12',
    client: '고려대학교',
    company: '워드앤코드',
    employmentType: '정규직',
    role: '퍼블리싱',
    os: 'Win',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'editor',
    etc: '-'
  },
  {
    name: '사학연금',
    period: '2013.05 ~ 2013.12',
    client: '사학연금',
    company: '워드앤코드',
    employmentType: '정규직',
    role: '퍼블리싱',
    os: 'Win',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'editor',
    etc: '-'
  },
  {
    name: '안전실천연합',
    period: '2013.05 ~ 2013.07',
    client: '안전실천연합',
    company: '워드앤코드',
    employmentType: '정규직',
    role: '퍼블리싱',
    os: 'Win',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'editor',
    etc: '-'
  },
  {
    name: '오송팜',
    period: '2012.09 ~ 2012.12',
    client: '오송팜',
    company: '워드앤코드',
    employmentType: '정규직',
    role: '퍼블리싱',
    os: 'Win',
    language: 'Html, css, js, jQuery',
    dbms: '-',
    tool: 'editor',
    etc: '-'
  },
];

const projects = projectsData.map((project, index) => ({
  no: index + 1,
  ...project
}));

const getEmploymentTypeClass = (type) => {
  switch(type) {
    case '프리랜서': return 'flag01';
    case '정규직': return 'flag02';
    case '계약직': return 'flag03';
    default: return '';
  }
};
</script>

<style scoped>
@import "@/assets/scss/Uiguide/comaLab01/CareerDescription.scss";
</style>
