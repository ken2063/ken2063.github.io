import{_ as I,E as d,o as B,b as x,l as t,x as L,w as o,g as h,q as e,B as n,e as a}from"./index-09d20b4d.js";import{P as T}from"./PageContents-36fc532b.js";import{L as b}from"./LocationBar-12d983fe.js";import{B as C}from"./BasicButton-c114d6f6.js";import{B as g,a as P}from"./ButtonListItem-20eeef64.js";import{I as $}from"./IllustObject-93e2b4c7.js";import{I as j,a as v}from"./IllustInfoTitle-746b3bd8.js";import{I as w}from"./IllustInfoText-4a25035b.js";const N={components:{PageContents:T,LocationBar:b,BasicButton:C,ButtonList:g,ButtonListItem:P,IllustObject:$,IllustInfo:j,IllustInfoTitle:v,IllustInfoText:w},setup(){const s={ui:{header:d()}};B(()=>{s.ui.header.setActive(()=>"customer")}),x(()=>{s.ui.header.setActive()})}},O=a("br",null,null,-1),V=a("br",null,null,-1);function k(s,A,U,q,y,E){const l=t("LocationBar"),u=t("IllustObject"),c=t("IllustInfoTitle"),r=t("IllustInfoText"),_=t("IllustInfo"),i=t("BasicButton"),m=t("ButtonListItem"),p=t("ButtonList"),f=t("PageContents");return h(),L(f,null,{head:o(()=>[e(l,{data:[{text:"홈",to:"/main/home"},{text:"고객센터",to:"/"},{text:"전자민원접수",to:"/"}]})]),default:o(()=>[e(_,null,{default:o(()=>[e(u,{type:"complete"}),e(c,null,{default:o(()=>[n("민원접수가 완료되었습니다")]),_:1}),e(r,null,{default:o(()=>[n(" 고객님 감사합니다."),O,n(" 문의하신 사항에 대해서는 빠른 시일 내에 답변 드리겠습니다."),V,n(" (상담가능시간 : 평일 09-18시) ")]),_:1})]),_:1}),e(p,{wrap:!0,align:"center"},{default:o(()=>[e(m,null,{default:o(()=>[e(i,null,{default:o(()=>[n("확인")]),_:1})]),_:1})]),_:1})]),_:1})}const K=I(N,[["render",k]]);export{K as default};
