import{P as u}from"./PageContents-36fc532b.js";import{B as _}from"./BasicButton-c114d6f6.js";import{B as f,a as B}from"./ButtonListItem-20eeef64.js";import{A as d}from"./AlertSystem-71fb7ec5.js";import{_ as g,r as C,l as e,x as k,w as o,g as x,q as n,B as A}from"./index-09d20b4d.js";import"./PopupTitle-95e43b58.js";import"./PopupText-6f1d5510.js";import"./AlertPopup-79c3b244.js";const L={components:{PageContents:u,BasicButton:_,ButtonList:f,ButtonListItem:B,AlertSystem:d},setup(){const s=C(null),a=t=>{s.value.open(t)};return{alert:s,alertOpen001:()=>{a({title:"타이틀",message:`여기에 내용이 표시될 예정입니다.
줄바꿈은 \\n 이용.
세 줄일 경우는 이렿게 표시됩니다.`,buttons:[{callback:t=>{console.log("확인"),t()},closeAfterCallback:()=>{console.log("[확인] 닫는 애니메이션 끝난 후 호출 될 함수")}}]})}}}};function w(s,a,r,t,O,P){const l=e("BasicButton"),c=e("ButtonListItem"),m=e("ButtonList"),p=e("AlertSystem"),i=e("PageContents");return x(),k(i,null,{default:o(()=>[n(m,{classNames:{wrap:"row-margin-none"},align:"full"},{default:o(()=>[n(c,null,{default:o(()=>[n(l,{onClick:t.alertOpen001},{default:o(()=>[A("얼럿")]),_:1},8,["onClick"])]),_:1})]),_:1}),n(p,{ref:"alert"},null,512)]),_:1})}const V=g(L,[["render",w]]);export{V as default};