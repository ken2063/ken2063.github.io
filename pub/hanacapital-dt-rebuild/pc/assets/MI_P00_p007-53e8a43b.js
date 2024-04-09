import{_ as z,E as U,i as W,o as q,b as j,l as a,x as D,w as e,g as L,q as t,B as l,e as o,n as r,d as G,f as J,F as Q}from"./index-47f0144b.js";import{P as X}from"./PageContents-eaa89b0e.js";import{L as Y}from"./LocationBar-a33719b5.js";import{P as Z,a as tt}from"./PageTitle-32f3e12d.js";import{P as et}from"./PageHeadRow-8a0cce9e.js";import{P as lt}from"./PageMainText-81e7fb66.js";import{S as at}from"./StepProgress-e6b4e8fc.js";import{B as st}from"./BasicButton-5b10203b.js";import{B as ot,a as nt}from"./ButtonListItem-c3f0c6e2.js";import{B as rt}from"./BasicBox-c4e04874.js";import{B as it,a as _t}from"./BasicBoxHeadLeft-a703a292.js";import{B as ut}from"./BasicBoxHeadRight-36eb777e.js";import{R as ct}from"./RoundStatus-32e1a2fd.js";import{K as mt,a as dt,b as ft,c as pt}from"./KeyValueText-a855a888.js";import{T as gt}from"./TextButton-f2b85444.js";import{I as bt,a as Bt}from"./InputBlockCell-9017943e.js";import{F as yt,a as xt}from"./FormListItem-2264c1ad.js";import{F as vt}from"./FormInvalid-7352e204.js";import{F as ht}from"./FormInvalidMessage-bb1cfe97.js";import{B as Pt}from"./BasicSelect-40e32e8f.js";import{P as It,a as Mt,b as St}from"./PaginationNavNumber-fc37541d.js";import{P as wt}from"./PaginationNavEllipsis-d7a0964a.js";import"./vue-select.es-c01894e4.js";import"./pagination-next-67f8f5f3.js";const Lt={"basic-list":"_basic-list_17x6m_1","basic-list__item":"_basic-list__item_17x6m_7","basic-list__symbol":"_basic-list__symbol_17x6m_26","basic-list__content":"_basic-list__content_17x6m_80","basic-list--regular":"_basic-list--regular_17x6m_85","basic-list--medium":"_basic-list--medium_17x6m_96","basic-list--regular-margin":"_basic-list--regular-margin_17x6m_110","basic-list--normal-margin":"_basic-list--normal-margin_17x6m_113","basic-list--small-margin":"_basic-list--small-margin_17x6m_116","right-button":"_right-button_17x6m_120"},Nt={components:{PageContents:X,LocationBar:Y,PageHead:Z,PageHeadRow:et,PageTitle:tt,PageMainText:lt,StepProgress:at,BasicButton:st,ButtonList:ot,ButtonListItem:nt,BasicBox:rt,BasicBoxHead:it,BasicBoxHeadLeft:_t,BasicBoxHeadRight:ut,RoundStatus:ct,KeyValue:mt,KeyValueItem:dt,KeyValueTitle:ft,KeyValueText:pt,TextButton:gt,InputBlock:bt,InputBlockCell:Bt,FormList:yt,FormListItem:xt,FormInvalid:vt,FormInvalidMessage:ht,BasicSelect:Pt,PaginationNav:It,PaginationNavArrow:Mt,PaginationNavEllipsis:wt,PaginationNavNumber:St},setup(){const n={ui:{header:U()}},P=W({smsError:[!1,!1,!1,!1,!1],phoneError:[!1,!1,!1,!1,!1]});return q(()=>{n.ui.header.setActive(()=>"onlineBranch")}),j(()=>{n.ui.header.setActive()}),{state:P}}},Tt={class:"flex-box align-items-start"},Et=o("div",{class:"flex-box__cell flex-1"}," SMS안내 수신을 받을 전화번호 수정을 원하실 경우 [온라인지점 > 내정보관리] 메뉴를 이용하세요. ",-1),Vt={class:"flex-box__cell flex-box__cell--medium"},Ft={class:"row-margin-block-small row-margin-bottom-none"},Ht={class:"reset-list"},$t={class:"row-margin-contents"},kt=o("h3",{class:"text-title-2 font-weight-medium"}," 오토리스 20고5678 ",-1),Kt=o("p",{class:"text-body-3 color-gray-tertiary row-margin-item-small"}," BMW 435d ",-1),Rt=o("p",{class:"text-body-3 color-gray-tertiary row-margin-item-small"}," L99999999999999 ",-1),Ct=o("h3",{class:"text-title-2 font-weight-medium"}," 오토리스 20고5678 ",-1),At=o("p",{class:"text-body-3 color-gray-tertiary row-margin-item-small"}," BMW 435d ",-1),Ot=o("p",{class:"text-body-3 color-gray-tertiary row-margin-item-small"}," L99999999999999 ",-1);function zt(n,P,Wt,_,qt,jt){const N=a("LocationBar"),T=a("PageTitle"),E=a("StepProgress"),V=a("PageHeadRow"),F=a("PageMainText"),H=a("PageHead"),$=a("TextButton"),I=a("BasicBoxHeadLeft"),k=a("RoundStatus"),K=a("BasicBoxHeadRight"),M=a("BasicBoxHead"),u=a("KeyValueTitle"),c=a("KeyValueText"),m=a("KeyValueItem"),S=a("KeyValue"),f=a("BasicSelect"),p=a("InputBlockCell"),g=a("InputBlock"),b=a("FormInvalidMessage"),B=a("FormInvalid"),y=a("FormListItem"),w=a("FormList"),x=a("BasicBox"),d=a("PaginationNavArrow"),s=a("PaginationNavNumber"),v=a("PaginationNavEllipsis"),h=a("PaginationNav"),R=a("BasicButton"),C=a("ButtonListItem"),A=a("ButtonList"),O=a("PageContents");return L(),D(O,null,{head:e(()=>[t(N,{data:[{text:"홈",to:"/main/home"},{text:"온라인지점",to:"/"},{text:"계약정보"},{text:"SMS안내 수신/변경",to:"/"}]})]),default:e(()=>[t(H,null,{default:e(()=>[t(V,null,{right:e(()=>[t(E,{total:3,current:1})]),default:e(()=>[t(T,{align:"left"},{default:e(()=>[l("SMS안내 수신/변경")]),_:1})]),_:1}),t(F,{align:"left"},{default:e(()=>[l(" SMS안내 수신 변경을 진행해 주세요 ")]),_:1})]),_:1}),o("ul",{class:r([n.$style["basic-list"],n.$style["basic-list--regular"],n.$style["basic-list--regular-margin"]])},[o("li",{class:r([n.$style["basic-list__item"],"font-weight-regular"])},[o("div",{class:r(n.$style["basic-list__symbol"])},null,2),o("div",{class:r(n.$style["basic-list__content"])}," SMS안내 수신 여부와 안내를 받을 연락처를 설정할 수 있습니다. ",2)],2),o("li",{class:r([n.$style["basic-list__item"],"font-weight-regular"])},[o("div",{class:r(n.$style["basic-list__symbol"])},null,2),o("div",{class:r(n.$style["basic-list__content"])},[o("div",Tt,[Et,o("div",Vt,[t($,{textSize:"regular",theme:"secondary",underline:!0,block:!0,classNames:{wrap:n.$style["right-button"]}},{default:e(()=>[l(" 바로가기 ")]),_:1},8,["classNames"])])])],2)],2),o("li",{class:r([n.$style["basic-list__item"],"font-weight-regular"])},[o("div",{class:r(n.$style["basic-list__symbol"])},null,2),o("div",{class:r(n.$style["basic-list__content"])}," 스탁론은 변경이 불가하며 고객센터(1800-1110)로 연락 바랍니다. ",2)],2)],2),o("div",Ft,[o("ul",Ht,[o("li",$t,[t(x,null,{default:e(()=>[t(M,null,{default:e(()=>[t(I,null,{default:e(()=>[kt,Kt,Rt]),_:1}),t(K,null,{default:e(()=>[t(k,{theme:"nonary",size:"large",block:!0},{default:e(()=>[l(" 연체 ")]),_:1})]),_:1})]),_:1}),t(S,{wrap:!0},{default:e(()=>[t(m,null,{default:e(()=>[t(u,null,{default:e(()=>[l("대출금액")]),_:1}),t(c,null,{default:e(()=>[l("6,265,200 원")]),_:1})]),_:1}),t(m,null,{default:e(()=>[t(u,null,{default:e(()=>[l("대출기간")]),_:1}),t(c,null,{default:e(()=>[l("2021.02.02 ~ 2022.02.02")]),_:1})]),_:1}),t(m,null,{default:e(()=>[t(u,null,{default:e(()=>[l("결제일")]),_:1}),t(c,null,{default:e(()=>[l("05일")]),_:1})]),_:1})]),_:1}),t(x,{theme:"tertiary",className:"row-margin-contents"},{default:e(()=>[t(w,null,{default:e(()=>[t(y,{titleText:"SMS 수신",target:"#MI_P00_p007_sms_0",selectOnly:!0},{default:e(()=>[t(B,{error:_.state.smsError[0]},{default:e(()=>[t(g,{error:_.state.smsError[0]},{default:e(()=>[t(p,{flexible:!0},{default:e(()=>[t(f,{options:[{value:"1",label:"수신"},{value:"2",label:"미수신"}],title:"SMS 수신",inputId:"MI_P00_p007_sms_0",defaultValue:"1"})]),_:1})]),_:1},8,["error"]),t(b,null,{default:e(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),t(y,{titleText:"연락처",target:"#MI_P00_p007_phone_0",selectOnly:!0},{default:e(()=>[t(B,{error:_.state.phoneError[0]},{default:e(()=>[t(g,{error:_.state.phoneError[0]},{default:e(()=>[t(p,{flexible:!0},{default:e(()=>[t(f,{options:[{value:"1",label:"휴대전화1 (010-1234-5678)"},{value:"2",label:"휴대전화2 (010-1234-5678)"},{value:"3",label:"휴대전화3 (010-1234-5678)"}],title:"연락처",inputId:"MI_P00_p007_phone_0",defaultValue:"1"},null,8,["options"])]),_:1})]),_:1},8,["error"]),t(b,null,{default:e(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),_:1})]),_:1})]),(L(),G(Q,null,J(4,i=>o("li",{key:i,class:"row-margin-contents"},[t(x,null,{default:e(()=>[t(M,null,{default:e(()=>[t(I,null,{default:e(()=>[Ct,At,Ot]),_:1})]),_:1}),t(S,{wrap:!0},{default:e(()=>[t(m,null,{default:e(()=>[t(u,null,{default:e(()=>[l("대출금액")]),_:1}),t(c,null,{default:e(()=>[l("6,265,200 원")]),_:1})]),_:1}),t(m,null,{default:e(()=>[t(u,null,{default:e(()=>[l("대출기간")]),_:1}),t(c,null,{default:e(()=>[l("2021.02.02 ~ 2022.02.02")]),_:1})]),_:1}),t(m,null,{default:e(()=>[t(u,null,{default:e(()=>[l("결제일")]),_:1}),t(c,null,{default:e(()=>[l("05일")]),_:1})]),_:1})]),_:1}),t(x,{theme:"tertiary",className:"row-margin-contents"},{default:e(()=>[t(w,null,{default:e(()=>[t(y,{titleText:"SMS 수신",target:`#MI_P00_p007_sms_${i}`,selectOnly:!0},{default:e(()=>[t(B,{error:_.state.smsError[i]},{default:e(()=>[t(g,{error:_.state.smsError[i]},{default:e(()=>[t(p,{flexible:!0},{default:e(()=>[t(f,{options:[{value:"1",label:"수신"},{value:"2",label:"미수신"}],title:"SMS 수신",inputId:`MI_P00_p007_sms_${i}`,defaultValue:"1"},null,8,["inputId"])]),_:2},1024)]),_:2},1032,["error"]),t(b,null,{default:e(()=>[l("Error Message")]),_:1})]),_:2},1032,["error"])]),_:2},1032,["target"]),t(y,{titleText:"연락처",target:`#MI_P00_p007_phone_${i}`,selectOnly:!0},{default:e(()=>[t(B,{error:_.state.phoneError[i]},{default:e(()=>[t(g,{error:_.state.phoneError[i]},{default:e(()=>[t(p,{flexible:!0},{default:e(()=>[t(f,{options:[{value:"1",label:"휴대전화1 (010-1234-5678)"},{value:"2",label:"휴대전화2 (010-1234-5678)"},{value:"3",label:"휴대전화3 (010-1234-5678)"}],title:"연락처",inputId:`MI_P00_p007_phone_${i}`,defaultValue:"1"},null,8,["options","inputId"])]),_:2},1024)]),_:2},1032,["error"]),t(b,null,{default:e(()=>[l("Error Message")]),_:1})]),_:2},1032,["error"])]),_:2},1032,["target"])]),_:2},1024)]),_:2},1024)]),_:2},1024)])),64))]),t(h,null,{default:e(()=>[t(d,{type:"prev",disabled:!0}),t(s,{active:!0},{default:e(()=>[l("1")]),_:1}),t(s,null,{default:e(()=>[l("2")]),_:1}),t(s,null,{default:e(()=>[l("3")]),_:1}),t(s,null,{default:e(()=>[l("4")]),_:1}),t(s,null,{default:e(()=>[l("5")]),_:1}),t(s,null,{default:e(()=>[l("6")]),_:1}),t(s,null,{default:e(()=>[l("7")]),_:1}),t(v),t(s,null,{default:e(()=>[l("999")]),_:1}),t(d,{type:"next"})]),_:1}),t(h,null,{default:e(()=>[t(d,{type:"prev"}),t(s,null,{default:e(()=>[l("1")]),_:1}),t(v),t(s,null,{default:e(()=>[l("13")]),_:1}),t(s,null,{default:e(()=>[l("14")]),_:1}),t(s,{active:!0},{default:e(()=>[l("15")]),_:1}),t(s,null,{default:e(()=>[l("16")]),_:1}),t(s,null,{default:e(()=>[l("17")]),_:1}),t(v),t(s,null,{default:e(()=>[l("99")]),_:1}),t(d,{type:"next"})]),_:1}),t(h,null,{default:e(()=>[t(d,{type:"prev"}),t(s,null,{default:e(()=>[l("1")]),_:1}),t(v),t(s,null,{default:e(()=>[l("93")]),_:1}),t(s,null,{default:e(()=>[l("94")]),_:1}),t(s,null,{default:e(()=>[l("95")]),_:1}),t(s,null,{default:e(()=>[l("96")]),_:1}),t(s,null,{default:e(()=>[l("97")]),_:1}),t(s,null,{default:e(()=>[l("98")]),_:1}),t(s,{active:!0},{default:e(()=>[l("99")]),_:1}),t(d,{type:"next",disabled:!0})]),_:1})]),t(A,null,{default:e(()=>[t(C,null,{default:e(()=>[t(R,null,{default:e(()=>[l("변경 신청")]),_:1})]),_:1})]),_:1})]),_:1})}const Ut={$style:Lt},be=z(Nt,[["render",zt],["__cssModules",Ut]]);export{be as default};