import{_ as h,E as x,o as C,b as y,l as a,x as L,w as t,g as k,q as e,B as l,e as s,n}from"./index-09d20b4d.js";import{P}from"./PageContents-36fc532b.js";import{L as $}from"./LocationBar-12d983fe.js";import{P as v,a as w}from"./PageTitle-73899e08.js";import{T}from"./TextButton-465efd7d.js";import{B as I,a as H}from"./BoxCheckLabel-41d423b2.js";import{B as z,a as M}from"./BoxCheckListItem-5ad58956.js";import{B as N}from"./BasicButton-c114d6f6.js";import{B as V,a as q}from"./ButtonListItem-20eeef64.js";const A={"basic-list":"_basic-list_33gnr_1","basic-list__item":"_basic-list__item_33gnr_7","basic-list__symbol":"_basic-list__symbol_33gnr_26","basic-list__content":"_basic-list__content_33gnr_80","basic-list--regular":"_basic-list--regular_33gnr_85","basic-list--medium":"_basic-list--medium_33gnr_96","basic-list--regular-margin":"_basic-list--regular-margin_33gnr_110","basic-list--normal-margin":"_basic-list--normal-margin_33gnr_113","basic-list--small-margin":"_basic-list--small-margin_33gnr_116"},S={components:{PageContents:P,LocationBar:$,PageHead:v,PageTitle:w,TextButton:T,BoxCheck:I,BoxCheckLabel:H,BoxCheckList:z,BoxCheckListItem:M,BasicButton:N,ButtonList:V,ButtonListItem:q},setup(){const o={ui:{header:x()}};C(()=>{o.ui.header.setActive(()=>"customer")}),y(()=>{o.ui.header.setActive()})}},U={class:"flex-box"},E=s("div",{class:"flex-box__cell"}," 고객정보 변경을 원하실 경우, [온라인지점 > 내 정보 관리] 메뉴를 이용하세요. ",-1),j={class:"flex-box__cell flex-box__cell--medium"},D={class:"row-margin-block-small row-margin-bottom-none"},F=s("h3",{class:"text-title-1 row-margin-contents"},"통지방법",-1),G=s("br",null,null,-1),J=s("br",null,null,-1),K=s("br",null,null,-1);function O(o,R,W,X,Y,Z){const m=a("LocationBar"),d=a("PageTitle"),b=a("PageHead"),p=a("TextButton"),i=a("BoxCheckLabel"),_=a("BoxCheck"),c=a("BoxCheckListItem"),g=a("BoxCheckList"),r=a("BasicButton"),u=a("ButtonListItem"),f=a("ButtonList"),B=a("PageContents");return k(),L(B,{size:"wide"},{head:t(()=>[e(m,{data:[{text:"홈",to:"/main/home"},{text:"고객센터",to:""},{text:"그룹사간 고객정보 제공내역 조회",to:"/"}]})]),default:t(()=>[e(b,null,{default:t(()=>[e(d,null,{default:t(()=>[l("그룹사간 고객정보 제공내역 조회")]),_:1})]),_:1}),s("ul",{class:n([o.$style["basic-list"],o.$style["basic-list--regular"],o.$style["basic-list--regular-margin"]])},[s("li",{class:n([o.$style["basic-list__item"],"font-weight-regular","text-body-3"])},[s("div",{class:n(o.$style["basic-list__symbol"])},null,2),s("div",{class:n(o.$style["basic-list__content"])}," 기 제공한 목적 범위 외로 그룹사간 고객정보를 제공하는 경우에는 고객에게 제공내역이 통지되오니 원하는 통지방법을 선택하여 주시기 바랍니다. ",2)],2),s("li",{class:n([o.$style["basic-list__item"],"font-weight-regular","text-body-3"])},[s("div",{class:n(o.$style["basic-list__symbol"])},null,2),s("div",{class:n(o.$style["basic-list__content"])},[s("div",U,[E,s("div",j,[e(p,{textSize:"regular",theme:"secondary",underline:!0,block:!0},{default:t(()=>[l(" 바로가기 ")]),_:1})])])],2)],2)],2),s("section",D,[F,e(g,null,{default:t(()=>[e(c,null,{default:t(()=>[e(_,{name:"Customer_P16_p003_type",id:"Customer_P16_p003_type_001",defaultChecked:!0},{default:t(()=>[e(i,null,{default:t(()=>[l(" 이메일"),G,l(" (kimhana@gmail.com/발송 가능) ")]),_:1})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(_,{name:"Customer_P16_p003_type",id:"Customer_P16_p003_type_002"},{default:t(()=>[e(i,null,{default:t(()=>[l(" 문자메시지"),J,l(" (010-1234-5678/발송 가능) ")]),_:1})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(_,{name:"Customer_P16_p003_type",id:"Customer_P16_p003_type_003"},{default:t(()=>[e(i,null,{default:t(()=>[l(" 사업장으로 우편신청"),K,l(" (서울특별시 강남구 개포동 ×××/발송 불가) ")]),_:1})]),_:1})]),_:1})]),_:1})]),e(f,{wrap:!0,align:"center",col:4},{default:t(()=>[e(u,null,{default:t(()=>[e(r,{line:!0,theme:"quaternary"},{default:t(()=>[l("취소")]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(r,null,{default:t(()=>[l("확인")]),_:1})]),_:1})]),_:1})]),_:1})}const Q={$style:A},ct=h(S,[["render",O],["__cssModules",Q]]);export{ct as default};
