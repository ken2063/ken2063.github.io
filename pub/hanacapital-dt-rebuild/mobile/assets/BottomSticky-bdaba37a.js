import{_ as N,i as z,Y as _,a7 as x,l as O,r as p,c as b,o as H,$ as I,a0 as j,g as U,d as V,e as S,k as M,x as h,n as k}from"./index-059b3cd0.js";const E=()=>({wrap:"",contents:"",fake:""}),P={props:{classNames:{Type:Object,default(){return E()}}},setup(l){const t=z("pageContents",{}),o={ui:{common:_(),scrollBlock:x()}},e=O({isSticky:!1,marginTop:"0",marginBottom:"0",height:"0"}),d=p(null),a=p(null),B=p(null),C=b(()=>{const{classNames:s}=l;return Object.assign(E(),s)}),L=()=>{const y=a.value.children[0],r=getComputedStyle(y),c=r.getPropertyValue("margin-top"),m=r.getPropertyValue("margin-bottom");e.marginTop=c,e.marginBottom=m},n=()=>{const s=d.value;if(s.offsetHeight<=0)return;const r=a.value.children[0],c=(()=>o.ui.scrollBlock.isBlocking?o.ui.scrollBlock.scrollTop:document.getElementsByTagName("html")[0].scrollTop)(),m=c+s.getBoundingClientRect().top,v=r.offsetHeight,T=window.innerHeight;if(o.ui.common.keypadOpened||c>=m+v-T){e.isSticky&&(e.isSticky=!1);return}e.height=`${v}px`,e.isSticky||(e.isSticky=!0)},u=()=>{n()},i=()=>{n()},w=()=>{n()},f=()=>{n()},g=()=>{n()};return H(()=>{L(),I(()=>{n()}),window.addEventListener("load",w),window.addEventListener("scroll",u),window.addEventListener("resize",i),window.addEventListener("keypadOpened",f),window.addEventListener("keypadClosed",g),t.wrap&&t.wrap.value&&t.wrap.value.addEventListener("resize",i)}),j(()=>{window.removeEventListener("load",w),window.removeEventListener("scroll",u),window.removeEventListener("resize",i),window.removeEventListener("keypadOpened",f),window.removeEventListener("keypadClosed",g),t.wrap&&t.wrap.value&&t.wrap.value.removeEventListener("resize",i)}),{state:e,wrap:d,contents:a,fake:B,customClassNames:C}}};function R(l,t,o,e,d,a){return U(),V("div",{ref:"wrap",class:k(e.customClassNames.wrap)},[S("div",{ref:"contents",style:h({position:e.state.isSticky?"fixed":"static",bottom:e.state.isSticky?"0":null,left:e.state.isSticky?"0":null,width:e.state.isSticky?"100%":null,zIndex:e.state.isSticky?"1000":null,transform:"translateZ(0)",transition:"transform 0s"}),class:k([{"is-sticky":e.state.isSticky},e.customClassNames.contents])},[M(l.$slots,"default",{isSticky:e.state.isSticky})],6),S("div",{class:k(e.customClassNames.fake),style:h({display:e.state.isSticky?"block":"none",marginTop:e.state.marginTop,marginBottom:e.state.marginBottom,height:e.state.height})},null,6)],2)}const q=N(P,[["render",R]]);export{q as B};
