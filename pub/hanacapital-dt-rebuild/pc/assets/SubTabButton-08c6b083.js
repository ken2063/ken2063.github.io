import{_ as v,k as U,i as p,r as B,c as u,j as M,J as k,p as d,g as b,d as g,x as c,w as _,m as N,n as i,z as r,v as f,y as S,e as j,R as z}from"./index-47f0144b.js";import{U as T,a as h}from"./UiTabButton-6f6e37b7.js";const w={"sub-tab":"_sub-tab_1b5oi_1","sub-tab__list":"_sub-tab__list_1b5oi_8","sub-tab__item":"_sub-tab__item_1b5oi_18","sub-tab__button":"_sub-tab__button_1b5oi_40","sub-tab__text":"_sub-tab__text_1b5oi_72","sub-tab__item--active":"_sub-tab__item--active_1b5oi_80"},y=()=>({wrap:"",list:""}),x={components:{UiTabList:T},props:{classNames:{Type:Object,default(){return y()}},useUiTab:{Type:Boolean,default:!1},size:{Type:String,default:null}},setup(t){const l=U(),e=p({useUiTab:{value:null}}),s=B(null),n=u(()=>{const{classNames:a}=t;return Object.assign(y(),a)}),o=u(()=>{const{useUiTab:a}=t;return a?T:"ul"});return M(()=>{e.useUiTab.value=t.useUiTab}),k(()=>t.useUiTab,a=>{e.useUiTab.value=a}),d("subTabStyleModule",l),d("subTab",{useUiTab:e.useUiTab}),{list:s,customClassNames:n,setComponent:o}}};function O(t,l,e,s,n,o){return b(),g("div",{class:i([t.$style["sub-tab"],{[t.$style[`sub-tab--size-${e.size}`]]:e.size},s.customClassNames.wrap])},[(b(),c(r(s.setComponent),{ref:"list",class:i([t.$style["sub-tab__list"],s.customClassNames.list])},{default:_(()=>[N(t.$slots,"default")]),_:3},8,["class"]))],2)}const L={$style:w},D=v(x,[["render",O],["__cssModules",L]]),C=()=>({item:"",button:"",text:""}),R={inheritAttrs:!1,props:{classNames:{Type:Object,default(){return C()}},link:{Type:String,default:null},tagName:{Type:String,default:"div"},active:{Type:Boolean,default:!1}},setup(t){const l=f("subTabStyleModule"),e=f("subTab",{}),s=u(()=>{const{classNames:a}=t;return Object.assign(C(),a)}),n=u(()=>{const{useUiTab:a}=e;return a.value?h:"li"}),o=u(()=>{const{useUiTab:a}=e,{tagName:m}=t;return a.value?"div":m==="RouterLink"?z:m});return{styleModule:l,customClassNames:s,setItemComponent:n,setButtonComponent:o}}};function I(t,l,e,s,n,o){return b(),c(r(s.setItemComponent),{class:i([s.styleModule["sub-tab__item"],{[s.styleModule["sub-tab__item--active"]]:e.active},s.customClassNames.item]),link:e.link},{default:_(()=>[(b(),c(r(s.setButtonComponent),S(t.$attrs,{class:[s.styleModule["sub-tab__button"],s.customClassNames.button],title:e.active?"선택 됨":null}),{default:_(()=>[j("span",{class:i([s.styleModule["sub-tab__text"],s.customClassNames.text])},[N(t.$slots,"default")],2)]),_:3},16,["class","title"]))]),_:3},8,["class","link"])}const E=v(R,[["render",I]]);export{D as S,E as a};
