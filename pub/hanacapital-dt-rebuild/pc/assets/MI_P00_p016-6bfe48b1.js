import{_ as I,E as d,o as B,b as x,l as t,x as h,w as o,g as L,q as e,B as n,e as a}from"./index-09d20b4d.js";import{P as g}from"./PageContents-36fc532b.js";import{L as T}from"./LocationBar-12d983fe.js";import{B as b}from"./BasicButton-c114d6f6.js";import{B as C,a as P}from"./ButtonListItem-20eeef64.js";import{I as $}from"./IllustObject-93e2b4c7.js";import{I as j,a as v}from"./IllustInfoTitle-746b3bd8.js";import{I as w}from"./IllustInfoText-4a25035b.js";const N={components:{PageContents:g,LocationBar:T,BasicButton:b,ButtonList:C,ButtonListItem:P,IllustObject:$,IllustInfo:j,IllustInfoTitle:v,IllustInfoText:w},setup(){const s={ui:{header:d()}};B(()=>{s.ui.header.setActive(()=>"onlineBranch")}),x(()=>{s.ui.header.setActive()})}},O=a("strong",{class:"color-green"},"###-####-####",-1),V=a("br",null,null,-1);function k(s,A,M,U,q,y){const l=t("LocationBar"),c=t("IllustObject"),u=t("IllustInfoTitle"),r=t("IllustInfoText"),_=t("IllustInfo"),i=t("BasicButton"),m=t("ButtonListItem"),p=t("ButtonList"),f=t("PageContents");return L(),h(f,null,{head:o(()=>[e(l,{data:[{text:"홈",to:"/main/home"},{text:"온라인지점",to:"/"},{text:"계약정보"},{text:"지정운전자 등록",to:"/"}]})]),default:o(()=>[e(_,null,{default:o(()=>[e(c,{type:"complete"}),e(u,null,{default:o(()=>[n("지정운전자 등록이 완료되었습니다")]),_:1}),e(r,null,{default:o(()=>[O,n(" 번호로 등록 신청 문자가 발송되었습니다."),V,n(" 서비스 이용약관 동의 및 지정운전자 정보 등록 완료 신청이 완료됩니다. ")]),_:1})]),_:1}),e(p,{wrap:!0,align:"center"},{default:o(()=>[e(m,null,{default:o(()=>[e(i,null,{default:o(()=>[n("확인")]),_:1})]),_:1})]),_:1})]),_:1})}const K=I(N,[["render",k]]);export{K as default};