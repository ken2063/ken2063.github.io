import{_ as g,c as r,g as o,d as t,n,h as _}from"./index-89ea90fd.js";const i={"bank-logo":"_bank-logo_dy1s2_1","bank-logo__img":"_bank-logo__img_dy1s2_5","bank-logo--size-large":"_bank-logo--size-large_dy1s2_10"},m="/pub/hanacapital-dt-rebuild/pc/",c=()=>({wrap:"",img:""}),u={props:{classNames:{Type:Object,default(){return c()}},type:{Type:String,default:"bank"},size:{Type:String,default:null},code:{Type:String,default:null},name:{Type:String,default:null}},setup(e){const l=r(()=>{const{classNames:s}=e;return Object.assign(c(),s)});return{BASE_URL:m,customClassNames:l}}},d=["src","alt"];function y(e,l,s,a,k,f){return o(),t("span",{class:n([e.$style["bank-logo"],{[e.$style[`bank-logo--size-${s.size}`]]:s.size},a.customClassNames.wrap])},[s.code?(o(),t("img",{key:0,src:`${a.BASE_URL}images/${s.type}-full-logo/${s.code}.svg`,alt:s.name,class:n([e.$style["bank-logo__img"],a.customClassNames.img])},null,10,d)):_("",!0)],2)}const b={$style:i},z=g(u,[["render",y],["__cssModules",b]]);export{z as B};
