import{a6 as M,_ as V,i as T,a7 as O,Z as P,l as Z,r as k,c as h,a5 as R,o as q,$ as A,a0 as D,p as F,g as G,d as J,e as L,k as Q,x as b,n as g}from"./index-0ca40496.js";const W=M("uiSticky",{state:()=>({items:[],count:1}),actions:{add(i=0){const n=this.count;return this.items.push({key:n,height:i}),this.count++,n},remove(i){const n=this.items.findIndex(e=>e.key===i);this.items.splice(n,1)},update(i,n=0){const e=this.items.findIndex(t=>t.key===i);this.items[e].height!==n&&(this.items[e].height=n)}}}),K=()=>({wrap:"",contents:"",fake:""}),X={props:{classNames:{Type:Object,default(){return K()}}},setup(i){const n=T("uiLayer",{}),e=T("popupLayout",{}),t={ui:{scrollBlock:O(),header:P(),sticky:W()}},s=Z({isSticky:!1,marginTop:"0",marginBottom:"0",height:"0",storeKey:null}),d=k(null),y=k(null),x=k(null),N=h(()=>{const{classNames:o}=i;return Object.assign(K(),o)}),v=h(()=>{const o=e&&e.head&&e.head.value;return(()=>o?o.offsetHeight:0)()||t.ui.header.height}),C=h(()=>S()),S=()=>{const{items:o}=t.ui.sticky;let a=0;if(s.storeKey)for(let r=0;r<o.length&&o[r].key!==s.storeKey;r++)a+=o[r].height;return a},_=()=>{const a=y.value.children[0],r=getComputedStyle(a),m=r.getPropertyValue("margin-top"),c=r.getPropertyValue("margin-bottom");s.marginTop=m,s.marginBottom=c},l=()=>{const o=d.value;if(o.offsetHeight<=0)return;const a=document.getElementsByTagName("html")[0],m=y.value.children[0],c=e&&e.body&&e.body.value,E=v.value,H=a.scrollTop,p=(()=>c?c.scrollTop+E:t.ui.scrollBlock.isBlocking?t.ui.scrollBlock.scrollTop:H)(),U=(c?p+H:p)+o.getBoundingClientRect().top,j=S(),f=m.offsetHeight;if(c?s.storeKey&&(t.ui.sticky.remove(s.storeKey),s.storeKey=null):s.storeKey?t.ui.sticky.update(s.storeKey,f):s.storeKey=t.ui.sticky.add(f),p<=U-E-j){s.isSticky&&(s.isSticky=!1);return}s.height=`${f}px`,s.isSticky||(s.isSticky=!0)},u=()=>{l()},B=()=>{l()},w=()=>{l()},z=()=>{const o=e&&e.body&&e.body.value;o&&o.addEventListener("scroll",u)},I=()=>d.value;return R(()=>{n&&n.stickyBar&&(n.stickyBar.value={update:l},e.stickyBar.value={scrollBind:z})}),q(()=>{_(),A(()=>{l()}),window.addEventListener("load",w),window.addEventListener("scroll",u),window.addEventListener("resize",B)}),D(()=>{s.storeKey&&t.ui.sticky.remove(s.storeKey),window.removeEventListener("load",w),window.removeEventListener("scroll",u),window.removeEventListener("resize",B);const o=e&&e.body&&e.body.value;o&&o.removeEventListener("scroll",u)}),F("stickyBar",{getElement:I}),{state:s,wrap:d,contents:y,fake:x,customClassNames:N,headerH:v,stickyH:C}}};function Y(i,n,e,t,s,d){return G(),J("div",{ref:"wrap",class:g(t.customClassNames.wrap)},[L("div",{ref:"contents",style:b({position:t.state.isSticky?"fixed":"static",top:t.state.isSticky?`${t.headerH+t.stickyH}px`:null,left:t.state.isSticky?"0":null,width:t.state.isSticky?"100%":null,zIndex:t.state.isSticky?"1000":null,transform:"translateZ(0)",transition:"transform 0s"}),class:g([{"is-sticky":t.state.isSticky},t.customClassNames.contents])},[Q(i.$slots,"default",{isSticky:t.state.isSticky})],6),L("div",{class:g(t.customClassNames.fake),style:b({display:t.state.isSticky?"block":"none",marginTop:t.state.marginTop,marginBottom:t.state.marginBottom,height:t.state.height})},null,6)],2)}const tt=V(X,[["render",Y]]);export{tt as S};
