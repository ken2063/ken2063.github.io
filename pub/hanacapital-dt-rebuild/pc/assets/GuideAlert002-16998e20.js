import{P as u}from"./PageContents-bfe4e6bc.js";import{B as _}from"./BasicButton-4f3c34ae.js";import{B as f,a as B}from"./ButtonListItem-1c2230e0.js";import{A as d}from"./AlertSystem-a39e0584.js";import{_ as g,r as C,l as e,x as k,w as o,g as x,q as n,B as A}from"./index-82fbfa1a.js";import"./PopupTitle-20b90072.js";import"./PopupText-e44214df.js";import"./AlertPopup-9e1d7dea.js";const L={components:{PageContents:u,BasicButton:_,ButtonList:f,ButtonListItem:B,AlertSystem:d},setup(){const s=C(null),a=t=>{s.value.open(t)};return{alert:s,alertOpen001:()=>{a({title:"타이틀",message:`여기에 내용이 표시될 예정입니다.
줄바꿈은 \\n 이용.
세 줄일 경우는 이렿게 표시됩니다.`,buttons:[{text:"취소",theme:"quaternary",line:!0,callback:t=>{console.log("취소"),t()},closeAfterCallback:()=>{console.log("[취소] 닫는 애니메이션 끝난 후 호출 될 함수")}},{callback:t=>{console.log("확인"),t()},closeAfterCallback:()=>{console.log("[확인] 닫는 애니메이션 끝난 후 호출 될 함수")}}]})}}}};function b(s,a,l,t,w,y){const r=e("BasicButton"),c=e("ButtonListItem"),m=e("ButtonList"),i=e("AlertSystem"),p=e("PageContents");return x(),k(p,null,{default:o(()=>[n(m,{classNames:{wrap:"row-margin-none"},align:"full"},{default:o(()=>[n(c,null,{default:o(()=>[n(r,{onClick:t.alertOpen001},{default:o(()=>[A("얼럿")]),_:1},8,["onClick"])]),_:1})]),_:1}),n(i,{ref:"alert"},null,512)]),_:1})}const v=g(L,[["render",b]]);export{v as default};
