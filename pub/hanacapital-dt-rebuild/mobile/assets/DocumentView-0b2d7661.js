import{_ as g,l as h,c as k,r as f,o as p,a0 as y,g as z,d as N,e as m,n as r,x as v,k as E}from"./index-059b3cd0.js";const C="_viewer_9qe7v_1",$="_viewer__fake_9qe7v_5",B="_viewer__origin_9qe7v_8",L={viewer:C,viewer__fake:$,viewer__origin:B},w=()=>({wrap:"",fake:"",origin:""}),W={inheritAttrs:!1,props:{classNames:{Type:Object,default(){return w()}}},setup(t){const o=h({zoom:1,height:0}),i=k(()=>{const{classNames:n}=t;return Object.assign(w(),n)}),e=f(null),a=f(null),s=()=>{const n=e.value,l=a.value,c=n.offsetWidth,_=l.offsetWidth,u=l.offsetHeight;if(c<=0||_<=0)return;const d=(1/_*c).toFixed(6);o.zoom=d,o.height=(u*d).toFixed(6)};return p(()=>{s(),window.addEventListener("load",s),window.addEventListener("resize",s)}),y(()=>{window.removeEventListener("load",s),window.removeEventListener("resize",s)}),{state:o,customClassNames:i,fake:e,origin:a,update:s}}};function q(t,o,i,e,a,s){return z(),N("div",{class:r([t.$style.viewer,e.customClassNames.wrap])},[m("div",{ref:"fake",class:r([t.$style.viewer__fake,e.customClassNames.fake]),style:v(`height: ${e.state.height}px;`)},null,6),m("div",{ref:"origin",class:r([t.$style.viewer__origin,e.customClassNames.origin]),style:v(`transform: scale(${e.state.zoom}) translateZ(0);`)},[E(t.$slots,"default")],6)],2)}const x={$style:L},b=g(W,[["render",q],["__cssModules",x]]);export{b as D};
