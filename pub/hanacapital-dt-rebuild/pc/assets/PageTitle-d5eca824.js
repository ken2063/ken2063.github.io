import{_ as c,c as o,g as r,d,m as u,n as p,x as g,w as _,z as f}from"./index-82fbfa1a.js";const $={"page-head":"_page-head_1oqx4_1"},l=()=>({wrap:""}),N={props:{classNames:{Type:Object,default(){return l()}}},setup(s){return{customClassNames:o(()=>{const{classNames:e}=s;return Object.assign(l(),e)})}}};function y(s,a,e,t,m,i){return r(),d("div",{class:p([s.$style["page-head"],t.customClassNames.wrap])},[u(s.$slots,"default")],2)}const C={$style:$},v=c(N,[["render",y],["__cssModules",C]]),h={"page-title":"_page-title_v49pb_1","page-title--align-left":"_page-title--align-left_v49pb_12"},n=()=>({wrap:""}),b={props:{tagName:{Type:String,default:"h2"},classNames:{Type:Object,default(){return n()}},align:{Type:String,default:null}},setup(s){return{customClassNames:o(()=>{const{classNames:e}=s;return Object.assign(n(),e)})}}};function w(s,a,e,t,m,i){return r(),g(f(e.tagName),{class:p([s.$style["page-title"],{[s.$style[`page-title--align-${e.align}`]]:e.align},t.customClassNames.wrap])},{default:_(()=>[u(s.$slots,"default")]),_:3},8,["class"])}const T={$style:h},M=c(b,[["render",w],["__cssModules",T]]);export{v as P,M as a};