import{_ as q,E as w,o as x,b as S,l as s,x as A,w as e,g as p,q as t,B as l,e as a,n as _,d as f,f as b,t as y,F as v}from"./index-89ea90fd.js";import{P as L}from"./PageContents-f8dfd722.js";import{L as E}from"./LocationBar-c816b7b5.js";import{P as F,a as H}from"./PageTitle-af1154e1.js";import{I as T,a as V}from"./InputBlockCell-5acaa660.js";import{B as D}from"./BasicInput-0a0e1561.js";import{B as M}from"./BasicSelect-7add552b.js";import{S as z}from"./SearchButton-3e0043e0.js";import{P as R,a as U,b as j}from"./PaginationNavNumber-24e9d9e1.js";import{P as G}from"./PaginationNavEllipsis-d3ab03d9.js";import{I as J}from"./file-4c6c527e.js";import"./text-delete-e17c104b.js";import"./vue-select.es-fec1bfc7.js";import"./pagination-next-da7f99c7.js";const K="_board_bqn1v_1",O="_board__link_bqn1v_30",Q="_board__num_bqn1v_60",W="_board__title_bqn1v_65",X="_board__status_bqn1v_84",Y="_empty_bqn1v_91",Z="_empty__text_bqn1v_96",tt={"board-search-bar":"_board-search-bar_bqn1v_1",board:K,board__link:O,board__num:Q,board__title:W,"board__title--multi":"_board__title--multi_bqn1v_77",board__status:X,empty:Y,empty__text:Z,"empty--secondary":"_empty--secondary_bqn1v_104"},et={components:{PageContents:L,LocationBar:E,PageHead:F,PageTitle:H,InputBlock:T,InputBlockCell:V,BasicInput:D,BasicSelect:M,SearchButton:z,PaginationNav:R,PaginationNavArrow:U,PaginationNavEllipsis:G,PaginationNavNumber:j,IconFile:J},setup(){const n={ui:{header:w()}};x(()=>{n.ui.header.setActive(()=>"customer"),n.ui.header.setDepthActive(()=>"customer003")}),S(()=>{n.ui.header.setActive(),n.ui.header.setDepthActive()})}},at=a("colgroup",null,[a("col",{style:{width:"67px"}}),a("col"),a("col",{style:{width:"64px"}}),a("col",{style:{width:"120px"}})],-1),lt=a("span",{class:"for-a11y"},"첨부 파일 있음",-1),ot=a("td",null,"2022.08.30",-1),nt=a("td",null,null,-1),st=a("td",null,"2022.08.30",-1);function _t(n,rt,ct,dt,it,pt){const h=s("LocationBar"),g=s("PageTitle"),P=s("PageHead"),B=s("BasicSelect"),d=s("InputBlockCell"),k=s("BasicInput"),N=s("SearchButton"),$=s("InputBlock"),m=s("RouterLink"),I=s("IconFile"),u=s("PaginationNavArrow"),o=s("PaginationNavNumber"),c=s("PaginationNavEllipsis"),i=s("PaginationNav"),C=s("PageContents");return p(),A(C,{size:"wide"},{head:e(()=>[t(h,{data:[{text:"홈",to:"/main/home"},{text:"고객센터",to:"/"},{text:"공지사항",to:"/"}]})]),default:e(()=>[t(P,null,{default:e(()=>[t(g,null,{default:e(()=>[l("공지사항")]),_:1})]),_:1}),a("div",{class:_(n.$style["board-search-bar"])},[t($,null,{default:e(()=>[t(d,null,{default:e(()=>[t(B,{options:[{value:"1",label:"전체"},{value:"2",label:"제목"},{value:"3",label:"내용"}],title:"검색 조건 선택",defaultValue:"1",classNames:{wrap:"input-width-category"}})]),_:1}),t(d,{flexible:!0,margin:"regular"},{default:e(()=>[t(k,{type:"search",title:"게시물 검색어",placeholder:"검색어 입력"})]),_:1}),t(d,{type:"search"},{default:e(()=>[t(N)]),_:1})]),_:1})],2),a("div",{class:_([n.$style.empty,n.$style["empty--secondary"]])},[a("p",{class:_(n.$style.empty__text)},"검색된 결과가 없습니다.",2)],2),a("div",null,[a("div",{class:_(n.$style.board)},[a("table",null,[at,a("tbody",null,[(p(),f(v,null,b(5,r=>a("tr",{key:r},[a("td",null,[a("span",{class:_(n.$style.board__num)},y(101-r),3)]),a("td",null,[t(m,{to:"/customer/Customer_P03_p002",class:_(n.$style.board__link)},{default:e(()=>[a("span",{class:_(n.$style.board__title)}," 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 ",2)]),_:1},8,["class"])]),a("td",null,[t(I,{class:"display-block"}),lt]),ot])),64)),(p(),f(v,null,b(5,r=>a("tr",{key:r},[a("td",null,[a("span",{class:_(n.$style.board__num)},y(96-r),3)]),a("td",null,[t(m,{to:"/customer/Customer_P03_p002",class:_(n.$style.board__link)},{default:e(()=>[a("span",{class:_(n.$style.board__title)}," 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 ",2)]),_:1},8,["class"])]),nt,st])),64))])])],2),t(i,null,{default:e(()=>[t(u,{type:"prev",disabled:!0}),t(o,{active:!0},{default:e(()=>[l("1")]),_:1}),t(o,null,{default:e(()=>[l("2")]),_:1}),t(o,null,{default:e(()=>[l("3")]),_:1}),t(o,null,{default:e(()=>[l("4")]),_:1}),t(o,null,{default:e(()=>[l("5")]),_:1}),t(o,null,{default:e(()=>[l("6")]),_:1}),t(o,null,{default:e(()=>[l("7")]),_:1}),t(c),t(o,null,{default:e(()=>[l("999")]),_:1}),t(u,{type:"next"})]),_:1}),t(i,null,{default:e(()=>[t(u,{type:"prev"}),t(o,null,{default:e(()=>[l("1")]),_:1}),t(c),t(o,null,{default:e(()=>[l("13")]),_:1}),t(o,null,{default:e(()=>[l("14")]),_:1}),t(o,{active:!0},{default:e(()=>[l("15")]),_:1}),t(o,null,{default:e(()=>[l("16")]),_:1}),t(o,null,{default:e(()=>[l("17")]),_:1}),t(c),t(o,null,{default:e(()=>[l("99")]),_:1}),t(u,{type:"next"})]),_:1}),t(i,null,{default:e(()=>[t(u,{type:"prev"}),t(o,null,{default:e(()=>[l("1")]),_:1}),t(c),t(o,null,{default:e(()=>[l("93")]),_:1}),t(o,null,{default:e(()=>[l("94")]),_:1}),t(o,null,{default:e(()=>[l("95")]),_:1}),t(o,null,{default:e(()=>[l("96")]),_:1}),t(o,null,{default:e(()=>[l("97")]),_:1}),t(o,null,{default:e(()=>[l("98")]),_:1}),t(o,{active:!0},{default:e(()=>[l("99")]),_:1}),t(u,{type:"next",disabled:!0})]),_:1})])]),_:1})}const ut={$style:tt},qt=q(et,[["render",_t],["__cssModules",ut]]);export{qt as default};
