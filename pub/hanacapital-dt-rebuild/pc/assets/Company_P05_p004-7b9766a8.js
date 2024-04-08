import{P as S}from"./PageContents-f716fc69.js";import{L as I}from"./LocationBar-64abe5b5.js";import{P as x,a as L}from"./PageTitle-96bdc852.js";import{I as R,a as z}from"./InputBlockCell-bd7aff68.js";import{B as E}from"./BasicInput-b03c5ab1.js";import{B as T}from"./BasicSelect-b8855b5a.js";import{S as V}from"./SearchButton-aad82083.js";import{P as A,a as H,b as F}from"./PaginationNavNumber-09ccea75.js";import{P as M}from"./PaginationNavEllipsis-9c6f4411.js";import{R as q}from"./RoundStatus-4660de40.js";import{_ as D,l as o,x as j,w as a,g as p,q as t,B as l,e,n as _,d as y,f as b,t as g,F as v}from"./index-55dc959b.js";import"./text-delete-2b2178c8.js";import"./vue-select.es-8675d864.js";import"./pagination-next-499e1e22.js";const G="_empty_1pnga_1",J="_empty__text_1pnga_6",K="_board_1pnga_21",O="_board__link_1pnga_45",Q="_board__num_1pnga_75",U="_board__title_1pnga_80",W="_board__status_1pnga_99",X={empty:G,empty__text:J,"empty--secondary":"_empty--secondary_1pnga_14",board:K,board__link:O,board__num:Q,board__title:U,"board__title--multi":"_board__title--multi_1pnga_92",board__status:W,"board-search-bar":"_board-search-bar_1pnga_106"},Y={components:{PageContents:S,LocationBar:I,PageHead:x,PageTitle:L,InputBlock:R,InputBlockCell:z,BasicInput:E,BasicSelect:T,SearchButton:V,PaginationNav:A,PaginationNavArrow:H,PaginationNavEllipsis:M,PaginationNavNumber:F,RoundStatus:q}},Z=e("colgroup",null,[e("col",{style:{width:"67px"}}),e("col"),e("col",{style:{width:"103px"}}),e("col",{style:{width:"120px"}})],-1),tt=e("td",null,"2022.08.30",-1),at=e("td",null,"2022.08.30",-1);function et(s,nt,ot,st,_t,ut){const P=o("LocationBar"),B=o("PageTitle"),h=o("PageHead"),N=o("BasicSelect"),i=o("InputBlockCell"),k=o("BasicInput"),$=o("SearchButton"),C=o("InputBlock"),m=o("RouterLink"),f=o("RoundStatus"),u=o("PaginationNavArrow"),n=o("PaginationNavNumber"),d=o("PaginationNavEllipsis"),c=o("PaginationNav"),w=o("PageContents");return p(),j(w,{size:"wide"},{head:a(()=>[t(P,{data:[{text:"홈",to:"/main/home"},{text:"회사소개",to:"/"},{text:"채용정보"},{text:"채용공고",to:"/"}]})]),default:a(()=>[t(h,null,{default:a(()=>[t(B,null,{default:a(()=>[l("채용공고")]),_:1})]),_:1}),e("div",{class:_(s.$style["board-search-bar"])},[t(C,null,{default:a(()=>[t(i,null,{default:a(()=>[t(N,{options:[{value:"1",label:"전체"},{value:"2",label:"제목"},{value:"3",label:"내용"}],title:"검색 조건 선택",defaultValue:"1",classNames:{wrap:"input-width-category"}})]),_:1}),t(i,{flexible:!0,margin:"regular"},{default:a(()=>[t(k,{type:"search",title:"게시물 검색어",placeholder:"검색어 입력"})]),_:1}),t(i,{type:"search"},{default:a(()=>[t($)]),_:1})]),_:1})],2),e("div",{class:_([s.$style.empty,s.$style["empty--secondary"]])},[e("p",{class:_(s.$style.empty__text)},"검색된 결과가 없습니다.",2)],2),e("div",null,[e("div",{class:_(s.$style.board)},[e("table",null,[Z,e("tbody",null,[(p(),y(v,null,b(5,r=>e("tr",{key:r},[e("td",null,[e("span",{class:_(s.$style.board__num)},g(101-r),3)]),e("td",null,[t(m,{to:"/company/Company_P05_p005",class:_(s.$style.board__link)},{default:a(()=>[e("span",{class:_(s.$style.board__title)}," 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 ",2)]),_:1},8,["class"])]),e("td",null,[e("div",{class:_(s.$style.board__status)},[t(f,{theme:"secondary",size:"large"},{default:a(()=>[l("진행중")]),_:1})],2)]),tt])),64)),(p(),y(v,null,b(5,r=>e("tr",{key:r},[e("td",null,[e("span",{class:_(s.$style.board__num)},g(96-r),3)]),e("td",null,[t(m,{to:"/company/Company_P05_p005",class:_(s.$style.board__link)},{default:a(()=>[e("span",{class:_(s.$style.board__title)}," 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 ",2)]),_:1},8,["class"])]),e("td",null,[e("div",{class:_(s.$style.board__status)},[t(f,{size:"large"},{default:a(()=>[l("마감")]),_:1})],2)]),at])),64))])])],2),t(c,null,{default:a(()=>[t(u,{type:"prev",disabled:!0}),t(n,{active:!0},{default:a(()=>[l("1")]),_:1}),t(n,null,{default:a(()=>[l("2")]),_:1}),t(n,null,{default:a(()=>[l("3")]),_:1}),t(n,null,{default:a(()=>[l("4")]),_:1}),t(n,null,{default:a(()=>[l("5")]),_:1}),t(n,null,{default:a(()=>[l("6")]),_:1}),t(n,null,{default:a(()=>[l("7")]),_:1}),t(d),t(n,null,{default:a(()=>[l("999")]),_:1}),t(u,{type:"next"})]),_:1}),t(c,null,{default:a(()=>[t(u,{type:"prev"}),t(n,null,{default:a(()=>[l("1")]),_:1}),t(d),t(n,null,{default:a(()=>[l("13")]),_:1}),t(n,null,{default:a(()=>[l("14")]),_:1}),t(n,{active:!0},{default:a(()=>[l("15")]),_:1}),t(n,null,{default:a(()=>[l("16")]),_:1}),t(n,null,{default:a(()=>[l("17")]),_:1}),t(d),t(n,null,{default:a(()=>[l("99")]),_:1}),t(u,{type:"next"})]),_:1}),t(c,null,{default:a(()=>[t(u,{type:"prev"}),t(n,null,{default:a(()=>[l("1")]),_:1}),t(d),t(n,null,{default:a(()=>[l("93")]),_:1}),t(n,null,{default:a(()=>[l("94")]),_:1}),t(n,null,{default:a(()=>[l("95")]),_:1}),t(n,null,{default:a(()=>[l("96")]),_:1}),t(n,null,{default:a(()=>[l("97")]),_:1}),t(n,null,{default:a(()=>[l("98")]),_:1}),t(n,{active:!0},{default:a(()=>[l("99")]),_:1}),t(u,{type:"next",disabled:!0})]),_:1})])]),_:1})}const lt={$style:X},Nt=D(Y,[["render",et],["__cssModules",lt]]);export{Nt as default};
