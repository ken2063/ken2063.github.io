import{_ as f,E as I,o as d,b as B,l as o,x,w as e,g as L,q as t,B as n,e as h}from"./index-09d20b4d.js";import{P as T}from"./PageContents-36fc532b.js";import{L as b}from"./LocationBar-12d983fe.js";import{B as g}from"./BasicButton-c114d6f6.js";import{B as C,a as P}from"./ButtonListItem-20eeef64.js";import{I as $}from"./IllustObject-93e2b4c7.js";import{I as j,a as v}from"./IllustInfoTitle-746b3bd8.js";import{I as w}from"./IllustInfoText-4a25035b.js";const y={components:{PageContents:T,LocationBar:b,BasicButton:g,ButtonList:C,ButtonListItem:P,IllustObject:$,IllustInfo:j,IllustInfoTitle:v,IllustInfoText:w},setup(){const s={ui:{header:I()}};d(()=>{s.ui.header.setActive(()=>"onlineBranch")}),B(()=>{s.ui.header.setActive()})}},N=h("br",null,null,-1);function O(s,V,k,A,M,U){const c=o("LocationBar"),a=o("IllustObject"),l=o("IllustInfoTitle"),u=o("IllustInfoText"),r=o("IllustInfo"),_=o("BasicButton"),i=o("ButtonListItem"),m=o("ButtonList"),p=o("PageContents");return L(),x(p,null,{head:e(()=>[t(c,{data:[{text:"홈",to:"/main/home"},{text:"온라인 지점",to:"/"},{text:"계약정보"},{text:"근저당설정 조회/해지신청",to:"/"}]})]),default:e(()=>[t(r,null,{default:e(()=>[t(a,{type:"complete"}),t(l,null,{default:e(()=>[n("근저당설정 해지 신청이 완료되었습니다")]),_:1}),t(a,{type:"fail"}),t(l,null,{default:e(()=>[n("근저당설정 해지 신청이 불가합니다")]),_:1}),t(u,null,{default:e(()=>[n(" 문의사항이 있으시면 고객센터(1800-1110)로 연락 바랍니다."),N,n(" (상담가능시간: 평일 09시 ~ 18시) ")]),_:1})]),_:1}),t(m,{wrap:!0,align:"center"},{default:e(()=>[t(i,null,{default:e(()=>[t(_,null,{default:e(()=>[n("확인")]),_:1})]),_:1})]),_:1})]),_:1})}const J=f(y,[["render",O]]);export{J as default};
