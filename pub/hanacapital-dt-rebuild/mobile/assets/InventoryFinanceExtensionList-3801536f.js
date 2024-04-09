import{_ as z,X as A,D as q,C as J,B as Q,J as W,T as X,Z,l as j,o as O,b as Y,Q as o,q as $,s as t,g as ee,V as e,W as a,e as n,n as C}from"./index-0ca40496.js";import{P as te}from"./PageContents-131cde60.js";import{P as oe}from"./PageTextGroup-692d5231.js";import{P as ae}from"./PageSubText-82bbb03d.js";import{S as ne}from"./StepProgress-a4d4df0f.js";import{B as se}from"./BasicBox-2a591a43.js";import{B as le}from"./BasicBoxHead-008eb1b0.js";import{B as re}from"./BasicBoxHeadLeft-830a442c.js";import{B as ie}from"./BasicBoxHeadRight-017b58a6.js";import{K as ce,a as me,b as ue,c as _e}from"./KeyValueText-f2ef9aed.js";import{F as de}from"./FormList-e7f69d6e.js";import{F as fe}from"./FormListItem-71a0d183.js";import{F as pe,a as xe}from"./FormInvalidMessage-6559d7e3.js";import{F as Be}from"./FormHelpText-80597eff.js";import{I as ge,a as ye}from"./InputBlockCell-abb707cb.js";import{S as he}from"./StickyBar-8f4095c2.js";import{B as be}from"./BasicDatepicker-b89f432e.js";import{B as ke,a as Fe}from"./BoxCheckLabel-817ebd62.js";import{B as Ie,a as Le}from"./BoxCheckListItem-ce8334a3.js";import{I as Ce}from"./dropdown-607743bb.js";const we="_empty_nds8f_1",Te="_empty__text_nds8f_6",ve={empty:we,empty__text:Te},Ne={components:{PageContents:te,PageTextGroup:oe,PageMainText:A,PageSubText:ae,StepProgress:ne,BasicBox:se,BasicBoxHead:le,BasicBoxHeadLeft:re,BasicBoxHeadRight:ie,KeyValue:ce,KeyValueItem:me,KeyValueTitle:ue,KeyValueText:_e,BasicHr:q,FormList:de,FormListItem:fe,FormInvalid:pe,FormInvalidMessage:xe,FormHelpText:Be,InputBlock:ge,InputBlockCell:ye,BasicInput:J,BasicButton:Q,StickyBar:he,RoundStatus:W,TextButton:X,BasicDatepicker:be,BoxCheck:ke,BoxCheckLabel:Fe,BoxCheckList:Ie,BoxCheckListItem:Le,IconArrow:Ce},setup(){const l={ui:{header:Z()}},r=j({carNumberError:!1,dateError:!1,minDate:"2023.04.21",maxDate:"2023.04.21"});return O(()=>{l.ui.header.setTitle(()=>"재고금융 만기연장"),l.ui.header.setLeftButtons(()=>["back"]),l.ui.header.setRightButtons(()=>[])}),Y(()=>{l.ui.header.setTitle(),l.ui.header.setLeftButtons(),l.ui.header.setRightButtons()}),{state:r}}},De=n("br",null,null,-1),Ee=n("br",null,null,-1),Ve=n("div",{class:"text-body-3"},"~",-1),Se={class:"contents-wrap"},Pe=n("h3",{class:"text-title-2 row-margin-contents"},"대출내역",-1),He={class:"reset-list"},Ke={class:"row-margin-item-group"},Me=n("h3",{class:"text-body-1 font-weight-medium"},"25버 9969",-1),Re=n("p",{class:"text-body-4 color-gray row-margin-small"}," 쏘나타 하이브리드(DN8) 스파이더 ",-1),Ge={class:"row-margin-item-group"},Ue=n("h3",{class:"text-body-1 font-weight-medium"},"10나 8941",-1),ze=n("p",{class:"text-body-4 color-gray row-margin-small"}," 엑센트 신형 1.6 VGT 프리미어 ",-1),Ae={class:"inline-wrap align-center row-margin-item-group"};function qe(l,r,Qe,s,We,Xe){const w=o("StepProgress"),T=o("StickyBar"),v=o("PageMainText"),N=o("PageSubText"),D=o("PageTextGroup"),E=o("BasicInput"),u=o("InputBlockCell"),B=o("InputBlock"),g=o("FormInvalidMessage"),y=o("FormInvalid"),h=o("FormListItem"),_=o("BoxCheckLabel"),d=o("BoxCheck"),f=o("BoxCheckListItem"),V=o("BoxCheckList"),b=o("BasicDatepicker"),S=o("FormHelpText"),P=o("FormList"),p=o("BasicButton"),H=o("BasicHr"),k=o("BasicBoxHeadLeft"),F=o("BasicBoxHead"),i=o("KeyValueTitle"),c=o("KeyValueText"),m=o("KeyValueItem"),I=o("KeyValue"),L=o("BasicBox"),K=o("RoundStatus"),M=o("BasicBoxHeadRight"),R=o("IconArrow"),G=o("TextButton"),U=o("PageContents");return ee(),$(U,null,{head:t(()=>[e(T,null,{default:t(()=>[e(w,{total:5,current:1})]),_:1})]),default:t(()=>[e(D,null,{default:t(()=>[e(v,null,{default:t(()=>[a(" 재고금융 만기연장건에 대한"),De,a(" 세부내역 확인 후 만기연장을"),Ee,a(" 신청해 주세요 ")]),_:1}),e(N,{classNames:{wrap:"font-weight-medium color-green"}},{default:t(()=>[a("주식회사알차이노베이션")]),_:1})]),_:1}),n("div",null,[e(P,null,{default:t(()=>[e(h,{titleText:"차량번호",target:"#inventoryFinanceExtensionListCarNumber"},{default:t(()=>[e(y,{error:s.state.carNumberError},{default:t(()=>[e(B,{error:s.state.carNumberError},{default:t(()=>[e(u,{flexible:!0},{default:t(()=>[e(E,{title:"차량번호",id:"inventoryFinanceExtensionListCarNumber"})]),_:1})]),_:1},8,["error"]),e(g,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(h,{titleText:"조회기간",forceFocus:!0},{default:t(()=>[e(y,{error:s.state.dateError},{default:t(()=>[e(V,{classNames:{wrap:"row-margin-item-group"}},{default:t(()=>[e(f,null,{default:t(()=>[e(d,{minSide:!0,name:"inventoryFinanceExtensionListDateCheck",id:"inventoryFinanceExtensionListDateCheck001"},{default:t(()=>[e(_,null,{default:t(()=>[a("1개월")]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(d,{minSide:!0,name:"inventoryFinanceExtensionListDateCheck",id:"inventoryFinanceExtensionListDateCheck002"},{default:t(()=>[e(_,null,{default:t(()=>[a("2개월")]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(d,{minSide:!0,name:"inventoryFinanceExtensionListDateCheck",id:"inventoryFinanceExtensionListDateCheck003"},{default:t(()=>[e(_,null,{default:t(()=>[a("3개월")]),_:1})]),_:1})]),_:1})]),_:1}),e(B,{error:s.state.dateError},{default:t(()=>[e(u,{flexible:!0},{default:t(()=>[e(b,{title:"조회기간 시작 날짜",id:"inventoryFinanceExtensionListDateStart",buttonId:"inventoryFinanceExtensionListDateStartButton",max:s.state.maxDate,modelValue:s.state.minDate,"onUpdate:modelValue":r[0]||(r[0]=x=>s.state.minDate=x)},null,8,["max","modelValue"])]),_:1}),e(u,{margin:"regular"},{default:t(()=>[Ve]),_:1}),e(u,{flexible:!0,margin:"regular"},{default:t(()=>[e(b,{title:"조회기간 종료 날짜",id:"inventoryFinanceExtensionListDateEnd",buttonId:"inventoryFinanceExtensionListDateEndButton",min:s.state.minDate,modelValue:s.state.maxDate,"onUpdate:modelValue":r[1]||(r[1]=x=>s.state.maxDate=x)},null,8,["min","modelValue"])]),_:1})]),_:1},8,["error"]),e(g,null,{default:t(()=>[a("Error Message")]),_:1}),e(S,null,{default:t(()=>[a("조회기간은 최대 1년까지 가능해요.")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),e(p,{line:!0,classNames:{wrap:"row-margin-contents-group"}},{default:t(()=>[a("조회")]),_:1})]),e(H,{className:"row-margin-container-medium"}),n("section",Se,[Pe,n("div",{class:C(l.$style.empty)},[n("p",{class:C(l.$style.empty__text)},"만기리스트가 존재하지 않습니다.",2)],2),n("ul",He,[n("li",Ke,[e(L,null,{default:t(()=>[e(F,null,{default:t(()=>[e(k,null,{default:t(()=>[Me,Re]),_:1})]),_:1}),e(I,{margin:"regular"},{default:t(()=>[e(m,{classNames:{item:"text-body-3"}},{default:t(()=>[e(i,null,{default:t(()=>[a("대출실행금액")]),_:1}),e(c,null,{default:t(()=>[a("3,500,000 원")]),_:1})]),_:1}),e(m,{classNames:{item:"text-body-3"}},{default:t(()=>[e(i,null,{default:t(()=>[a("대출기간")]),_:1}),e(c,null,{default:t(()=>[a("2019.05.30 ~ 2019.06.30")]),_:1})]),_:1}),e(m,{classNames:{item:"text-body-3"}},{default:t(()=>[e(i,null,{default:t(()=>[a("대출금리")]),_:1}),e(c,null,{default:t(()=>[a("7.5%")]),_:1})]),_:1})]),_:1}),e(p,{size:"small",classNames:{wrap:"row-margin-contents-small"}},{default:t(()=>[a("만기연장신청")]),_:1})]),_:1})]),n("li",Ge,[e(L,{className:"row-margin-item-group"},{default:t(()=>[e(F,null,{default:t(()=>[e(k,null,{default:t(()=>[Ue,ze]),_:1}),e(M,null,{default:t(()=>[e(K,{classNames:{wrap:"display-block"},theme:"nonary"},{default:t(()=>[a("연체")]),_:1})]),_:1})]),_:1}),e(I,{margin:"regular"},{default:t(()=>[e(m,{classNames:{item:"text-body-3"}},{default:t(()=>[e(i,null,{default:t(()=>[a("대출실행금액")]),_:1}),e(c,null,{default:t(()=>[a("3,500,000 원")]),_:1})]),_:1}),e(m,{classNames:{item:"text-body-3"}},{default:t(()=>[e(i,null,{default:t(()=>[a("대출기간")]),_:1}),e(c,null,{default:t(()=>[a("2019.05.30 ~ 2019.06.30")]),_:1})]),_:1}),e(m,{classNames:{item:"text-body-3"}},{default:t(()=>[e(i,null,{default:t(()=>[a("대출금리")]),_:1}),e(c,null,{default:t(()=>[a("7.5%")]),_:1})]),_:1})]),_:1}),e(p,{size:"small",disabled:!0,classNames:{wrap:"row-margin-contents-small"}},{default:t(()=>[a("만기연장신청")]),_:1})]),_:1})])]),n("div",Ae,[e(G,{classNames:{wrap:"text-body-4 color-gray"}},{rightIcon:t(()=>[e(R)]),default:t(()=>[a(" 더보기 ")]),_:1})])])]),_:1})}const Je={$style:ve},pt=z(Ne,[["render",qe],["__cssModules",Je]]);export{pt as default};
