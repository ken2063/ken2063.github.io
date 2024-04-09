import{_ as f,C as y,D as k,S as g,T as x,R as I,Z as $,o as C,b as w,Q as o,q as S,s,g as r,V as e,e as a,n as _,d as T,f as v,F as L,W as N}from"./index-059b3cd0.js";import{P as R}from"./PageContents-26a955e0.js";import{B as V}from"./BasicSelect-612e7462.js";import{I as H,a as M}from"./InputBlockCell-88d63319.js";import{I as P}from"./dropdown-e1777569.js";import"./SelectButton-2a048f3b.js";import"./PopupTitle-1615bfeb.js";import"./ToastPopup-0ca28b9b.js";import"./ToastPopupHead-49b7de23.js";import"./check-l-c56f2b0c.js";const A="_empty_rihc7_1",E="_empty__text_rihc7_6",F="_board_rihc7_14",U="_board__list_rihc7_17",q="_board__item_rihc7_22",z="_board__link_rihc7_33",D="_board__title_rihc7_25",G="_board__text_rihc7_67",Q="_board__sub_rihc7_83",W="_board__info_rihc7_30",Z={empty:A,empty__text:E,board:F,board__list:U,board__item:q,"board__item--mark":"_board__item--mark_rihc7_25","board__title-text":"_board__title-text_rihc7_25","board__item--hidden":"_board__item--hidden_rihc7_29","board__info-item":"_board__info-item_rihc7_30",board__link:z,board__title:D,board__text:G,board__sub:Q,board__info:W,"board__info-item--hits":"_board__info-item--hits_rihc7_143"},j={components:{PageContents:R,BasicSelect:V,InputBlock:H,InputBlockCell:M,BasicInput:y,BasicHr:k,SearchButton:g,TextButton:x,RouterLink:I,IconArrow:P},setup(){const t={ui:{header:$()}};C(()=>{t.ui.header.setTitle(()=>"지속가능경영"),t.ui.header.setLeftButtons(()=>["back"]),t.ui.header.setRightButtons(()=>[])}),w(()=>{t.ui.header.setTitle(),t.ui.header.setLeftButtons(),t.ui.header.setRightButtons()})}},J={class:"inline-wrap align-center row-margin-item-group"};function K(t,X,Y,tt,et,ot){const i=o("BasicSelect"),n=o("InputBlockCell"),c=o("BasicInput"),l=o("SearchButton"),d=o("InputBlock"),m=o("BasicHr"),u=o("RouterLink"),p=o("IconArrow"),b=o("TextButton"),h=o("PageContents");return r(),S(h,null,{default:s(()=>[e(d,null,{default:s(()=>[e(n,null,{default:s(()=>[e(i,{option:[{value:"1",text:"전체"},{value:"2",text:"제목"},{value:"3",text:"내용"}],buttonTitle:"검색어 항목을 선택하기",layerTitle:"검색어 항목을 선택해 주세요",classNames:{wrap:"input-width-category"},defaultValue:"1"})]),_:1}),e(n,{flexible:!0},{default:s(()=>[e(c,{type:"search",title:"검색어",placeholder:"검색어 입력"})]),_:1}),e(n,{type:"search"},{default:s(()=>[e(l)]),_:1})]),_:1}),e(m,{className:"row-margin-container-medium"}),a("div",{class:_(t.$style.empty)},[a("p",{class:_(t.$style.empty__text)},"검색된 결과가 없습니다.",2)],2),a("div",{class:_(t.$style.board)},[a("ul",{class:_(t.$style.board__list)},[(r(),T(L,null,v(10,B=>a("li",{key:B,class:_(t.$style.board__item)},[e(u,{to:"/company/sustainable-management-detail",class:_(t.$style.board__link)},{default:s(()=>[a("span",{class:_(t.$style.board__title)},[a("span",{class:_(t.$style["board__title-text"])}," ESG채권 인증보고서 ",2)],2),a("span",{class:_(t.$style.board__text)},"2020.09.08",2)]),_:1},8,["class"])],2)),64))],2)],2),a("div",J,[e(b,{classNames:{wrap:"text-body-4 color-gray"}},{rightIcon:s(()=>[e(p)]),default:s(()=>[N(" 더보기 ")]),_:1})])]),_:1})}const O={$style:Z},ut=f(j,[["render",K],["__cssModules",O]]);export{ut as default};
