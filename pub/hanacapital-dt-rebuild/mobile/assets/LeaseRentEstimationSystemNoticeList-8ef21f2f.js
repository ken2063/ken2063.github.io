import{_ as g,R as I,B as w,C as L,D as C,T as N,S as v,Z as S,o as T,b as R,Q as a,q as V,s as n,g as c,e,V as o,W as r,n as s,d as H,f as P,F as q}from"./index-059b3cd0.js";import{P as A}from"./PageContents-26a955e0.js";import{B as M,a as E}from"./ButtonListItem-8a7855a8.js";import{I as F,a as U}from"./InputBlockCell-88d63319.js";import{B as z}from"./BasicSelect-612e7462.js";import{I as D}from"./dropdown-e1777569.js";import"./SelectButton-2a048f3b.js";import"./PopupTitle-1615bfeb.js";import"./ToastPopup-0ca28b9b.js";import"./ToastPopupHead-49b7de23.js";import"./check-l-c56f2b0c.js";const Q="_empty_rihc7_1",W="_empty__text_rihc7_6",Z="_board_rihc7_14",j="_board__list_rihc7_17",G="_board__item_rihc7_22",J="_board__link_rihc7_33",K="_board__title_rihc7_25",O="_board__text_rihc7_67",X="_board__sub_rihc7_83",Y="_board__info_rihc7_30",x={empty:Q,empty__text:W,board:Z,board__list:j,board__item:G,"board__item--mark":"_board__item--mark_rihc7_25","board__title-text":"_board__title-text_rihc7_25","board__item--hidden":"_board__item--hidden_rihc7_29","board__info-item":"_board__info-item_rihc7_30",board__link:J,board__title:K,board__text:O,board__sub:X,board__info:Y,"board__info-item--hits":"_board__info-item--hits_rihc7_143"},tt={components:{RouterLink:I,PageContents:A,ButtonList:M,ButtonListItem:E,BasicButton:w,InputBlock:F,InputBlockCell:U,BasicSelect:z,BasicInput:L,BasicHr:C,TextButton:N,SearchButton:v,IconArrow:D},setup(){const t={ui:{header:S()}};T(()=>{t.ui.header.setTitle(()=>"공지사항(즉시출고)"),t.ui.header.setLeftButtons(()=>["back"]),t.ui.header.setRightButtons(()=>[])}),R(()=>{t.ui.header.setTitle(),t.ui.header.setLeftButtons(),t.ui.header.setRightButtons()})}},et={class:"contents-wrap"},st={class:"row-margin-contents"},ot=e("p",{class:"text-body-4 font-weight-light color-gray-secondary"},[e("strong",{class:"font-weight-medium color-green"},"999"),r(" 건 ")],-1),at={class:"inline-wrap align-center row-margin-contents"};function nt(t,_t,rt,lt,ct,dt){const d=a("BasicButton"),m=a("ButtonListItem"),u=a("ButtonList"),p=a("BasicSelect"),i=a("InputBlockCell"),b=a("BasicInput"),y=a("SearchButton"),h=a("InputBlock"),l=a("BasicHr"),_=a("RouterLink"),f=a("IconArrow"),B=a("TextButton"),$=a("PageContents");return c(),V($,null,{default:n(()=>[e("div",null,[o(u,{classNames:{wrap:"row-margin-contents"}},{default:n(()=>[o(m,null,{default:n(()=>[o(d,{line:!0,theme:"quaternary",tagName:"RouterLink",to:"/lease-rent-estimation-system/notice-edit"},{default:n(()=>[r("글쓰기")]),_:1})]),_:1})]),_:1}),o(h,null,{default:n(()=>[o(i,null,{default:n(()=>[o(p,{option:[{value:"1",text:"제목"},{value:"2",text:"내용"}],buttonTitle:"검색 조건 선택하기",layerTitle:"검색 조건을 선택해 주세요",classNames:{wrap:"input-width-category"},defaultValue:"1"})]),_:1}),o(i,{flexible:!0},{default:n(()=>[o(b,{type:"search",title:"검색어 입력",placeholder:"검색어 입력"})]),_:1}),o(i,{type:"search"},{default:n(()=>[o(y)]),_:1})]),_:1})]),o(l,{className:"row-margin-container-medium"}),e("div",et,[e("div",st,[ot,o(l,{theme:"quaternary",type:"contents",className:"row-margin-item-medium"})]),e("div",{class:s(t.$style.empty)},[e("p",{class:s(t.$style.empty__text)},"검색된 결과가 없습니다.",2)],2),e("div",{class:s(t.$style.board)},[e("ul",{class:s(t.$style.board__list)},[e("li",{class:s([t.$style.board__item,t.$style["board__item--mark"]])},[o(_,{to:"/lease-rent-estimation-system/notice-detail",class:s(t.$style.board__link)},{default:n(()=>[e("span",{class:s(t.$style.board__title)},[e("span",{class:s(t.$style["board__title-text"])}," 중요 지정된 게시물 ",2)],2),e("span",{class:s(t.$style.board__info)},[e("span",{class:s(t.$style["board__info-item"])},"2021.03.16",2),e("span",{class:s([t.$style["board__info-item"],t.$style["board__info-item--hits"]])},"조회 18",2)],2)]),_:1},8,["class"])],2),e("li",{class:s([t.$style.board__item,t.$style["board__item--hidden"]])},[o(_,{to:"/lease-rent-estimation-system/notice-detail",class:s(t.$style.board__link)},{default:n(()=>[e("span",{class:s(t.$style.board__title)},[e("span",{class:s(t.$style["board__title-text"])}," [노출 중지됨] 테스트2 ",2)],2),e("span",{class:s(t.$style.board__info)},[e("span",{class:s(t.$style["board__info-item"])},"2021.03.16",2),e("span",{class:s([t.$style["board__info-item"],t.$style["board__info-item--hits"]])},"조회 18",2)],2)]),_:1},8,["class"])],2),(c(),H(q,null,P(3,k=>e("li",{key:k,class:s(t.$style.board__item)},[o(_,{to:"/lease-rent-estimation-system/notice-detail",class:s(t.$style.board__link)},{default:n(()=>[e("span",{class:s(t.$style.board__title)},[e("span",{class:s(t.$style["board__title-text"])}," 첨부파일 테스트 ",2)],2),e("span",{class:s(t.$style.board__info)},[e("span",{class:s(t.$style["board__info-item"])},"2021.03.16",2),e("span",{class:s([t.$style["board__info-item"],t.$style["board__info-item--hits"]])},"조회 18",2)],2)]),_:1},8,["class"])],2)),64))],2)],2),e("div",at,[o(B,{classNames:{wrap:"text-body-4 color-gray"}},{rightIcon:n(()=>[o(f)]),default:n(()=>[r(" 더보기 ")]),_:1})])])]),_:1})}const it={$style:x},It=g(tt,[["render",nt],["__cssModules",it]]);export{It as default};
