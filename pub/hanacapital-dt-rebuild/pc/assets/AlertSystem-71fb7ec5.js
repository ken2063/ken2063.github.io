import{B as v}from"./BasicButton-c114d6f6.js";import{B as O,a as w}from"./ButtonListItem-20eeef64.js";import{_ as N,U,i as I,r as V,l,g as a,x as _,w as s,q as k,B as b,t as C,h as y,d,f as L,F as A,G as j}from"./index-09d20b4d.js";import{P as F}from"./PopupTitle-95e43b58.js";import{P as S}from"./PopupText-6f1d5510.js";import{A as q}from"./AlertPopup-79c3b244.js";const h=()=>({title:"",message:[""],buttons:[{}],speed:null}),x=()=>({text:"확인",theme:null,line:!1,callback:u=>{u()},closeAfterCallback:()=>{}}),z={components:{BasicButton:v,UiLayer:U,PopupTitle:F,PopupText:S,AlertPopup:q,ButtonList:O,ButtonListItem:w},setup(){const u=h(),t=I({title:u.title,message:u.message,buttons:[x()],onAfterClosed:()=>{}}),p=V(null),o=n=>{const r=Object.assign(h(),n),{title:c,message:m,buttons:i,speed:B}=r;for(let e=0;e<i.length;e++)i[e]=Object.assign(x(),i[e]);t.title=c,t.message=typeof m=="string"?m.split(/\n/):m,t.buttons=i,p.value.open(null,B)},g=n=>{p.value.close(n)};return{state:t,layer:p,open:o,close:g,clear:()=>{p.value.close(0)},buttonClick:n=>{const{buttons:r}=t;t.onAfterClosed=()=>{const c=h();r[n].closeAfterCallback(),t.title=c.title,t.message=c.message,t.buttons=[x()]},j(()=>{r[n].callback(g)})}}}},D={key:0};function E(u,t,p,o,g,T){const P=l("PopupTitle"),n=l("PopupText"),r=l("BasicButton"),c=l("ButtonListItem"),m=l("ButtonList"),i=l("AlertPopup"),B=l("UiLayer");return a(),_(B,{ref:"layer",onAfterClosed:o.state.onAfterClosed},{default:s(()=>[k(i,null,{head:s(()=>[o.state.title.length?(a(),_(P,{key:0},{default:s(()=>[b(C(o.state.title),1)]),_:1})):y("",!0)]),foot:s(()=>[k(m,{classNames:{wrap:"row-margin-none"}},{default:s(()=>[(a(!0),d(A,null,L(o.state.buttons,(e,f)=>(a(),_(c,{key:f},{default:s(()=>[k(r,{size:"regular",line:e.line,theme:e.theme,onClick:G=>o.buttonClick(f)},{default:s(()=>[b(C(e.text),1)]),_:2},1032,["line","theme","onClick"])]),_:2},1024))),128))]),_:1})]),default:s(()=>[o.state.message[0].length?(a(),_(n,{key:0},{default:s(()=>[(a(!0),d(A,null,L(o.state.message,(e,f)=>(a(),d(A,{key:f},[f>0?(a(),d("br",D)):y("",!0),b(C(e),1)],64))),128))]),_:1})):y("",!0)]),_:1})]),_:1},8,["onAfterClosed"])}const W=N(z,[["render",E]]);export{W as A};
