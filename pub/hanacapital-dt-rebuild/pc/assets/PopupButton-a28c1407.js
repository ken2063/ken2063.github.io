import{_ as i,v as y,c as u,g as e,d as n,x as b,n as a,z as d,t as f,h as c,m as h,y as x,M as C}from"./index-55dc959b.js";const N={"popup-button":"_popup-button_2oxm2_1","popup-button__icon":"_popup-button__icon_2oxm2_43","popup-button__text":"_popup-button__text_2oxm2_51","popup-button--theme-white":"_popup-button--theme-white_2oxm2_69"},m=()=>({wrap:"",icon:"",text:""}),S={inheritAttrs:!1,props:{type:{Type:String,default:"close"},theme:{Type:String,default:null},classNames:{Type:Object,default(){return m()}}},setup(s,l){const o=y("popupStyleModule",{}),t=u(()=>{const{classNames:_}=s;return Object.assign(m(),_)}),p=u(()=>!!l.slots.default);return{styleModule:o,customClassNames:t,isSlot:p,icons:{close:C},texts:{close:"레이어 닫기"}}}};function M(s,l,o,t,p,r){return e(),n("button",x(s.$attrs,{type:"button",class:[s.$style["popup-button"],{[s.$style[`popup-button--theme-${o.theme}`]]:o.theme},t.customClassNames.wrap,t.styleModule.popup__button]}),[(e(),b(d(t.icons[o.type]),{class:a([s.$style["popup-button__icon"],t.customClassNames.icon,t.styleModule["popup__button-icon"]])},null,8,["class"])),t.isSlot?c("",!0):(e(),n("span",{key:0,class:a([s.$style["popup-button__text"],t.customClassNames.text])},f(t.texts[o.type]),3)),t.isSlot?(e(),n("span",{key:1,class:a([s.$style["popup-button__text"],t.customClassNames.text])},[h(s.$slots,"default")],2)):c("",!0)],16)}const g={$style:N},w=i(S,[["render",M],["__cssModules",g]]);export{w as P};
