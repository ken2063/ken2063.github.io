import{_ as I,E as d,o as B,b as x,l as t,x as L,w as o,g as h,q as e,B as n,e as a}from"./index-47f0144b.js";import{P as T}from"./PageContents-eaa89b0e.js";import{L as b}from"./LocationBar-a33719b5.js";import{I as P,a as g}from"./IllustInfoTitle-aac7c012.js";import{I as C}from"./IllustObject-2512d307.js";import{I as $}from"./IllustInfoText-b118f92f.js";import{B as j,a as v}from"./ButtonListItem-c3f0c6e2.js";import{B as w}from"./BasicButton-5b10203b.js";const N={components:{PageContents:T,LocationBar:b,IllustInfo:P,IllustObject:C,IllustInfoTitle:g,IllustInfoText:$,ButtonList:j,ButtonListItem:v,BasicButton:w},setup(){const s={ui:{header:d()}};B(()=>{s.ui.header.setActive(()=>"personalLoan")}),x(()=>{s.ui.header.setActive()})}},O=a("br",null,null,-1),V=a("br",null,null,-1);function k(s,A,U,q,y,E){const l=t("LocationBar"),c=t("IllustObject"),u=t("IllustInfoTitle"),r=t("IllustInfoText"),_=t("IllustInfo"),i=t("BasicButton"),m=t("ButtonListItem"),p=t("ButtonList"),f=t("PageContents");return h(),L(f,null,{head:o(()=>[e(l,{data:[{text:"홈",to:"/main/home"},{text:"개인금융",to:"/"},{text:"사업자 주택담보대출",to:"/"}]})]),default:o(()=>[e(_,null,{default:o(()=>[e(c,{type:"complete"}),e(u,null,{default:o(()=>[n("상담신청이 접수 되었습니다")]),_:1}),e(r,null,{default:o(()=>[n(" 고객님 감사합니다."),O,n(" 신청하신 사항에 대해서는 빠른 시일 내에 답변 드리겠습니다."),V,n(" (상담가능시간 : 평일 09~18시) ")]),_:1})]),_:1}),e(p,{wrap:!0,align:"center"},{default:o(()=>[e(m,null,{default:o(()=>[e(i,null,{default:o(()=>[n("확인")]),_:1})]),_:1})]),_:1})]),_:1})}const K=I(N,[["render",k]]);export{K as default};