import{I as p}from"./check-l-6853efa8.js";import{_,v as a,c as b,l as u,g as n,d,e as k,x as C,h,n as r}from"./index-09d20b4d.js";const l=()=>({object:"",objectInner:""}),j={components:{IconCheck:p},props:{classNames:{Type:Object,default(){return l()}}},setup(s){const c=a("boxCheckstyleModule"),o=a("boxCheckType"),e=b(()=>{const{classNames:t}=s;return Object.assign(l(),t)});return{type:o,styleModule:c,customClassNames:e}}};function x(s,c,o,e,t,i){const m=u("IconCheck");return n(),d("span",{class:r([e.styleModule["box-check__object"],e.customClassNames.object])},[k("span",{class:r([e.styleModule["box-check__object-inner"],e.customClassNames.objectInner])},[e.type.value==="checkbox"?(n(),C(m,{key:0})):h("",!0)],2)],2)}const N=_(j,[["render",x]]);export{N as B};