import{g as c,d as i,e as t,_,v as m,c as d,l as u,q as p,n as e}from"./index-47f0144b.js";const g={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},h=t("path",{fill:"#9E9E9E",d:"M6 11h2v2H6zM11 11h2v2h-2zM16 11h2v2h-2z"},null,-1),N=[h];function f(n,o){return c(),i("svg",g,N)}const v={render:f},l=()=>({item:"",link:"",guide:"",icon:""}),M={inheritAttrs:!1,components:{IconDot:v},props:{classNames:{Type:Object,default(){return l()}}},setup(n){const o=m("paginationNavStyleModule"),a=d(()=>{const{classNames:s}=n;return Object.assign(l(),s)});return{styleModule:o,customClassNames:a}}};function y(n,o,a,s,C,w){const r=u("IconDot");return c(),i("li",{class:e([s.styleModule.pagination__item,s.styleModule["pagination__item--ellipsis"],s.customClassNames.item])},[t("span",{class:e([s.styleModule.pagination__link,s.customClassNames.link])},[p(r,{class:e([s.styleModule.pagination__icon,s.customClassNames.icon])},null,8,["class"]),t("span",{class:e([s.styleModule.pagination__guide,s.customClassNames.guide])}," ... ",2)],2)],2)}const k=_(M,[["render",y]]);export{k as P};
