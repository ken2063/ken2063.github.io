import{_ as c,c as g,g as l,d as s,n as i,t as a,h as u,e as f,m as d}from"./index-89ea90fd.js";const o={"unit-text":"_unit-text_11fwd_1","unit-text__left":"_unit-text__left_11fwd_5","unit-text__right":"_unit-text__right_11fwd_5","unit-text__val":"_unit-text__val_11fwd_20","unit-text--align-center":"_unit-text--align-center_11fwd_29","unit-text--align-right":"_unit-text--align-right_11fwd_32","unit-text--vertical-align-center":"_unit-text--vertical-align-center_11fwd_35","unit-text--size-regular":"_unit-text--size-regular_11fwd_38","unit-text--size-large":"_unit-text--size-large_11fwd_56"},r=()=>({wrap:"",val:"",leftUnit:"",rightUnit:""}),m={props:{classNames:{Type:Object,default(){return r()}},leftUnit:{Type:String,default:null},rightUnit:{Type:String,default:null},align:{Type:String,default:null},verticalAlign:{Type:String,default:null},size:{Type:String,default:null}},setup(e){return{customClassNames:g(()=>{const{classNames:t}=e;return Object.assign(r(),t)})}}};function x(e,_,t,n,h,U){return l(),s("span",{class:i([e.$style["unit-text"],{[e.$style[`unit-text--align-${t.align}`]]:t.align,[e.$style[`unit-text--vertical-align-${t.verticalAlign}`]]:t.verticalAlign,[e.$style[`unit-text--size-${t.size}`]]:t.size},n.customClassNames.wrap])},[t.leftUnit?(l(),s("span",{key:0,class:i([e.$style["unit-text__left"],n.customClassNames.leftUnit])},a(t.leftUnit),3)):u("",!0),f("span",{class:i([e.$style["unit-text__val"],n.customClassNames.val])},[d(e.$slots,"default")],2),t.rightUnit?(l(),s("span",{key:1,class:i([e.$style["unit-text__right"],n.customClassNames.rightUnit])},a(t.rightUnit),3)):u("",!0)],2)}const y={$style:o},w=c(m,[["render",x],["__cssModules",y]]);export{w as U};
