import{_ as d,v as o,c as i,g as u,d as b,e as c,n as m,y as _}from"./index-82fbfa1a.js";const n=()=>({radio:"",radioText:""}),T={inheritAttrs:!1,props:{classNames:{Type:Object,default(){return n()}},action:{Type:Boolean,default:!0}},setup(l){const t=o("selectTableStyleModule"),s=o("selectTableRow",{}),e=i(()=>{const{classNames:a}=l;return Object.assign(n(),a)});return{styleModule:t,selectTableRow:s,customClassNames:e,click:()=>{s.radioClick(),s.select()}}}},f=["disabled","title"];function y(l,t,s,e,r,a){return u(),b("td",null,[c("button",_(l.$attrs,{type:"button",class:[e.styleModule["select-table__radio"],{"is-selected":e.selectTableRow.selected.value},e.customClassNames.radio],disabled:e.selectTableRow.disabled.value,onClick:t[0]||(t[0]=()=>{s.action&&e.click()}),title:e.selectTableRow.selected.value?"선택 됨":null}),[c("span",{class:m([e.styleModule["select-table__radio-text"],e.customClassNames.radioText])},"선택",2)],16,f)])}const k=d(T,[["render",y]]);export{k as S};
