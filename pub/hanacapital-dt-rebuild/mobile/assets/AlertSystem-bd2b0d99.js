import{_ as v,B as O,U as N,l as U,r as V,Q as l,g as a,q as _,s,V as B,W as b,t as C,h as y,d,f as L,F as A,$ as w}from"./index-0ca40496.js";import{B as I,a as j}from"./ButtonListItem-b1f6835b.js";import{P as F}from"./PopupTitle-05b32b8e.js";import{P as S}from"./PopupText-bcbfadfd.js";import{A as q}from"./AlertPopup-bcb82e5e.js";const h=()=>({title:"",message:[""],buttons:[{}],speed:null}),x=()=>({text:"확인",theme:null,line:!1,callback:u=>{u()},closeAfterCallback:()=>{}}),D={components:{BasicButton:O,UiLayer:N,PopupTitle:F,PopupText:S,AlertPopup:q,ButtonList:I,ButtonListItem:j},setup(){const u=h(),t=U({title:u.title,message:u.message,buttons:[x()],onAfterClosed:()=>{}}),p=V(null),o=n=>{const c=Object.assign(h(),n),{title:r,message:m,buttons:i,speed:k}=c;for(let e=0;e<i.length;e++)i[e]=Object.assign(x(),i[e]);t.title=r,t.message=typeof m=="string"?m.split(/\n/):m,t.buttons=i,p.value.open(null,k)},g=n=>{p.value.close(n)};return{state:t,layer:p,open:o,close:g,clear:()=>{p.value.close(0)},buttonClick:n=>{const{buttons:c}=t;t.onAfterClosed=()=>{const r=h();c[n].closeAfterCallback(),t.title=r.title,t.message=r.message,t.buttons=[x()]},w(()=>{c[n].callback(g)})}}}},E={key:0};function Q(u,t,p,o,g,T){const P=l("PopupTitle"),n=l("PopupText"),c=l("BasicButton"),r=l("ButtonListItem"),m=l("ButtonList"),i=l("AlertPopup"),k=l("UiLayer");return a(),_(k,{ref:"layer",onAfterClosed:o.state.onAfterClosed},{default:s(()=>[B(i,null,{head:s(()=>[o.state.title.length?(a(),_(P,{key:0},{default:s(()=>[b(C(o.state.title),1)]),_:1})):y("",!0)]),foot:s(()=>[B(m,{classNames:{wrap:"row-margin-none"}},{default:s(()=>[(a(!0),d(A,null,L(o.state.buttons,(e,f)=>(a(),_(r,{key:f},{default:s(()=>[B(c,{line:e.line,theme:e.theme,onClick:W=>o.buttonClick(f)},{default:s(()=>[b(C(e.text),1)]),_:2},1032,["line","theme","onClick"])]),_:2},1024))),128))]),_:1})]),default:s(()=>[o.state.message[0].length?(a(),_(n,{key:0},{default:s(()=>[(a(!0),d(A,null,L(o.state.message,(e,f)=>(a(),d(A,{key:f},[f>0?(a(),d("br",E)):y("",!0),b(C(e),1)],64))),128))]),_:1})):y("",!0)]),_:1})]),_:1},8,["onAfterClosed"])}const M=v(D,[["render",Q]]);export{M as A};
