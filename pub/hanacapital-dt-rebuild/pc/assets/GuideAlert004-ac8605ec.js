import{P as u}from"./PageContents-f716fc69.js";import{B as _}from"./BasicButton-672abef3.js";import{B as f,a as B}from"./ButtonListItem-019a78ac.js";import{A as d}from"./AlertSystem-a98afe3d.js";import{_ as g,r as C,l as o,x as k,w as e,g as x,q as n,B as A}from"./index-55dc959b.js";import"./PopupTitle-7388f4c9.js";import"./PopupText-5150c693.js";import"./AlertPopup-5a10e3f3.js";const L={components:{PageContents:u,BasicButton:_,ButtonList:f,ButtonListItem:B,AlertSystem:d},setup(){const s=C(null),a=t=>{s.value.open(t)};return{alert:s,alertOpen001:()=>{a({message:`여기에 내용이 표시될 예정입니다.
줄바꿈은 \\n 이용.
세 줄일 경우는 이렿게 표시됩니다.`,buttons:[{callback:t=>{console.log("확인"),t()},closeAfterCallback:()=>{console.log("[확인] 닫는 애니메이션 끝난 후 호출 될 함수")}}]})}}}};function w(s,a,r,t,O,P){const l=o("BasicButton"),c=o("ButtonListItem"),m=o("ButtonList"),p=o("AlertSystem"),i=o("PageContents");return x(),k(i,null,{default:e(()=>[n(m,{classNames:{wrap:"row-margin-none"},align:"full"},{default:e(()=>[n(c,null,{default:e(()=>[n(l,{onClick:t.alertOpen001},{default:e(()=>[A("얼럿")]),_:1},8,["onClick"])]),_:1})]),_:1}),n(p,{ref:"alert"},null,512)]),_:1})}const V=g(L,[["render",w]]);export{V as default};
