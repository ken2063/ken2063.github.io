import{P as p}from"./PageContents-eaa89b0e.js";import{L as I}from"./LocationBar-a33719b5.js";import{B as d}from"./BasicButton-5b10203b.js";import{B,a as x}from"./ButtonListItem-c3f0c6e2.js";import{I as L}from"./IllustObject-2512d307.js";import{I as T,a as h}from"./IllustInfoTitle-aac7c012.js";import{I as b}from"./IllustInfoText-b118f92f.js";import{_ as C,l as n,x as P,w as o,g,q as t,B as e,e as c}from"./index-47f0144b.js";const $={components:{PageContents:p,LocationBar:I,BasicButton:d,ButtonList:B,ButtonListItem:x,IllustObject:L,IllustInfo:T,IllustInfoTitle:h,IllustInfoText:b}},j=c("br",null,null,-1),y=c("br",null,null,-1);function N(O,V,k,w,q,v){const _=n("LocationBar"),l=n("IllustObject"),s=n("IllustInfoTitle"),r=n("IllustInfoText"),m=n("IllustInfo"),a=n("BasicButton"),u=n("ButtonListItem"),f=n("ButtonList"),i=n("PageContents");return g(),P(i,null,{head:o(()=>[t(_,{data:[{text:"홈",to:"/main/home"},{text:"부가서비스"},{text:"서류등록",to:"/"}]})]),default:o(()=>[t(m,null,{default:o(()=>[t(l,{type:"fail"}),t(s,null,{default:o(()=>[e("서류등록에 실패하였습니다")]),_:1}),t(l,{type:"complete"}),t(s,null,{default:o(()=>[e("서류등록이 완료되었습니다")]),_:1}),t(r,null,{default:o(()=>[e(" 고객님 감사합니다."),j,e(" 접수하신 서류를 확인하여 빠른 시일내에 답변 드리겠습니다."),y,e(" (단, 토요일 및 공휴일에 신청하신 경우 연락이 지연될 수 있으니 양해바랍니다.) ")]),_:1})]),_:1}),t(f,null,{default:o(()=>[t(u,null,{default:o(()=>[t(a,{line:!0},{default:o(()=>[e("서류등록 추가")]),_:1})]),_:1}),t(u,null,{default:o(()=>[t(a,null,{default:o(()=>[e("확인")]),_:1})]),_:1})]),_:1})]),_:1})}const J=C($,[["render",N]]);export{J as default};