import{_ as v,i as p,c as l,j as U,J as B,p as b,k as M,g as u,d as k,x as i,w as _,m as N,n as r,z as d,v as f,y as g,e as j,R as q}from"./index-89ea90fd.js";import{U as T,a as x}from"./UiTabButton-a920cb5b.js";const R={"round-tab":"_round-tab_16qtr_1","round-tab__list":"_round-tab__list_16qtr_4","round-tab__item":"_round-tab__item_16qtr_15","round-tab__button":"_round-tab__button_16qtr_24","round-tab__text":"_round-tab__text_16qtr_58","round-tab__item--active":"_round-tab__item--active_16qtr_65"},y=()=>({wrap:"",list:""}),h={components:{UiTabList:T},props:{classNames:{Type:Object,default(){return y()}},useUiTab:{Type:Boolean,default:!1}},setup(s){const n=p({useUiTab:{value:null}}),e=l(()=>{const{classNames:a}=s;return Object.assign(y(),a)}),t=l(()=>{const{useUiTab:a}=s;return a?T:"ul"});return U(()=>{n.useUiTab.value=s.useUiTab}),B(()=>s.useUiTab,a=>{n.useUiTab.value=a}),b("roundTabStyleModule",M()),b("roundTab",{useUiTab:n.useUiTab}),{customClassNames:e,setComponent:t}}};function w(s,n,e,t,a,c){return u(),k("div",{class:r([s.$style["round-tab"],t.customClassNames.wrap])},[(u(),i(d(t.setComponent),{class:r([s.$style["round-tab__list"],t.customClassNames.list])},{default:_(()=>[N(s.$slots,"default")]),_:3},8,["class"]))],2)}const S={$style:R},$=v(h,[["render",w],["__cssModules",S]]),C=()=>({item:"",button:"",text:""}),O={inheritAttrs:!1,props:{classNames:{Type:Object,default(){return C()}},link:{Type:String,default:null},tagName:{Type:String,default:"div"},active:{Type:Boolean,default:!1}},setup(s){const n=f("roundTabStyleModule"),e=f("roundTab",{}),t=l(()=>{const{classNames:o}=s;return Object.assign(C(),o)}),a=l(()=>{const{useUiTab:o}=e;return o.value?x:"li"}),c=l(()=>{const{useUiTab:o}=e,{tagName:m}=s;return o.value?"div":m==="RouterLink"?q:m});return{styleModule:n,customClassNames:t,setItemComponent:a,setButtonComponent:c}}};function L(s,n,e,t,a,c){return u(),i(d(t.setItemComponent),{class:r([t.styleModule["round-tab__item"],{[t.styleModule["round-tab__item--active"]]:e.active},t.customClassNames.item]),link:e.link},{default:_(()=>[(u(),i(d(t.setButtonComponent),g(s.$attrs,{class:[t.styleModule["round-tab__button"],t.customClassNames.button],title:e.active?"선택 됨":null}),{default:_(()=>[j("span",{class:r([t.styleModule["round-tab__text"],t.customClassNames.text])},[N(s.$slots,"default")],2)]),_:3},16,["class","title"]))]),_:3},8,["class","link"])}const A=v(O,[["render",L]]);export{$ as R,A as a};
