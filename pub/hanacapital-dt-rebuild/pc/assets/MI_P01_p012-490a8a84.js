import{_ as f,E as I,o as d,b as B,l as t,x,w as o,g as L,q as e,B as s}from"./index-82fbfa1a.js";import{P as h}from"./PageContents-bfe4e6bc.js";import{L as T}from"./LocationBar-ae2ba5e0.js";import{I as g,a as C}from"./IllustInfoTitle-0353c275.js";import{I as P}from"./IllustObject-1bd163cc.js";import{I as b}from"./IllustInfoText-880d1ac8.js";import{B as $,a as j}from"./ButtonListItem-1c2230e0.js";import{B as v}from"./BasicButton-4f3c34ae.js";const w={components:{PageContents:h,LocationBar:T,IllustInfo:g,IllustObject:P,IllustInfoTitle:C,IllustInfoText:b,ButtonList:$,ButtonListItem:j,BasicButton:v},setup(){const n={ui:{header:I()}};d(()=>{n.ui.header.setActive(()=>"onlineBranch")}),B(()=>{n.ui.header.setActive()})}};function O(n,k,A,M,N,U){const a=t("LocationBar"),l=t("IllustObject"),c=t("IllustInfoTitle"),u=t("IllustInfoText"),r=t("IllustInfo"),i=t("BasicButton"),_=t("ButtonListItem"),m=t("ButtonList"),p=t("PageContents");return L(),x(p,null,{head:o(()=>[e(a,{data:[{text:"홈",to:"/main/home"},{text:"온라인지점",to:"/"},{text:"내정보관리"},{text:"회원 탈퇴",to:"/"}]})]),default:o(()=>[e(r,null,{default:o(()=>[e(l,{type:"complete"}),e(c,null,{default:o(()=>[s("하나캐피탈 회원탈퇴가 완료되었습니다")]),_:1}),e(u,null,{default:o(()=>[s(" 그동안 하나캐피탈을 이용해주셔서 감사합니다. ")]),_:1})]),_:1}),e(m,{wrap:!0,align:"center"},{default:o(()=>[e(_,null,{default:o(()=>[e(i,null,{default:o(()=>[s("확인")]),_:1})]),_:1})]),_:1})]),_:1})}const F=f(w,[["render",O]]);export{F as default};
