import{_ as y,C as h,D as k,S as x,T as I,Z as $,o as g,b as C,Q as o,q as w,s,g as r,V as e,e as _,n,d as T,f as v,F as S,W as N}from"./index-0ca40496.js";import{P as L}from"./PageContents-131cde60.js";import{I as P,a as V}from"./InputBlockCell-abb707cb.js";import{B as H}from"./BasicSelect-694c1948.js";import{I as R}from"./dropdown-607743bb.js";import"./SelectButton-da4f5354.js";import"./PopupTitle-05b32b8e.js";import"./ToastPopup-c9597c27.js";import"./ToastPopupHead-ec63cede.js";import"./check-l-61e0e83c.js";const A="_board_1m5nt_1",F="_board__list_1m5nt_4",M="_board__item_1m5nt_9",U="_board__link_1m5nt_20",q="_board__title_1m5nt_12",z="_board__text_1m5nt_54",D="_board__sub_1m5nt_70",E="_board__info_1m5nt_17",Q="_empty_1m5nt_134",W="_empty__text_1m5nt_139",Z={board:A,board__list:F,board__item:M,"board__item--mark":"_board__item--mark_1m5nt_12","board__title-text":"_board__title-text_1m5nt_12","board__item--hidden":"_board__item--hidden_1m5nt_16","board__info-item":"_board__info-item_1m5nt_17",board__link:U,board__title:q,board__text:z,board__sub:D,board__info:E,"board__info-item--hits":"_board__info-item--hits_1m5nt_130",empty:Q,empty__text:W},j={components:{PageContents:L,InputBlock:P,InputBlockCell:V,BasicInput:h,BasicSelect:H,BasicHr:k,SearchButton:x,TextButton:I,IconArrow:R},setup(){const t={ui:{header:$()}};g(()=>{t.ui.header.setTitle(()=>"금융소비자보호공시"),t.ui.header.setLeftButtons(()=>["back"]),t.ui.header.setRightButtons(()=>[])}),C(()=>{t.ui.header.setTitle(),t.ui.header.setLeftButtons(),t.ui.header.setRightButtons()})}},G={class:"inline-wrap align-center row-margin-contents"};function J(t,O,X,Y,tt,et){const i=o("BasicSelect"),a=o("InputBlockCell"),l=o("BasicInput"),c=o("SearchButton"),d=o("InputBlock"),m=o("BasicHr"),u=o("RouterLink"),p=o("IconArrow"),b=o("TextButton"),f=o("PageContents");return r(),w(f,null,{default:s(()=>[e(d,null,{default:s(()=>[e(a,null,{default:s(()=>[e(i,{option:[{value:"1",text:"전체"},{value:"2",text:"제목"},{value:"3",text:"내용"}],buttonTitle:"검색어 항목을 선택하기",layerTitle:"검색어 항목을 선택해 주세요",classNames:{wrap:"input-width-category"},defaultValue:"1"})]),_:1}),e(a,{flexible:!0},{default:s(()=>[e(l,{type:"search",title:"검색어",placeholder:"검색어 입력"})]),_:1}),e(a,{type:"search"},{default:s(()=>[e(c)]),_:1})]),_:1}),e(m,{className:"row-margin-container-medium"}),_("div",{class:n(t.$style.empty)},[_("p",{class:n(t.$style.empty__text)},"검색된 결과가 없습니다.",2)],2),_("div",{class:n(t.$style.board)},[_("ul",{class:n(t.$style.board__list)},[(r(),T(S,null,v(10,B=>_("li",{key:B,class:n(t.$style.board__item)},[e(u,{to:"/customer/financial-consumer-protection-notice-view",class:n(t.$style.board__link)},{default:s(()=>[_("span",{class:n(t.$style.board__title)},[_("span",{class:n(t.$style["board__title-text"])}," 건강한금융 금융생활정보 ",2)],2),_("span",{class:n(t.$style.board__text)},"2022.10.25",2)]),_:1},8,["class"])],2)),64))],2)],2),_("div",G,[e(b,{classNames:{wrap:"text-body-4 color-gray"}},{rightIcon:s(()=>[e(p)]),default:s(()=>[N(" 더보기 ")]),_:1})])]),_:1})}const K={$style:Z},mt=y(j,[["render",J],["__cssModules",K]]);export{mt as default};
