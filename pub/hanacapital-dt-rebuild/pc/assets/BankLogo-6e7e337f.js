import{_ as m,c as _,g as o,d as n,n as t,h as g}from"./index-47f0144b.js";const i={"bank-logo":"_bank-logo_1fa2p_1","bank-logo__img":"_bank-logo__img_1fa2p_11","bank-logo--size-small":"_bank-logo--size-small_1fa2p_19"},r="/",c=()=>({wrap:"",img:""}),u={props:{classNames:{Type:Object,default(){return c()}},type:{Type:String,default:"bank"},size:{Type:String,default:null},code:{Type:String,default:null},name:{Type:String,default:null}},setup(e){const l=_(()=>{const{classNames:s}=e;return Object.assign(c(),s)});return{BASE_URL:r,customClassNames:l}}},d=["src","alt"];function f(e,l,s,a,y,b){return o(),n("span",{class:t([e.$style["bank-logo"],{[e.$style[`bank-logo--size-${s.size}`]]:s.size},a.customClassNames.wrap])},[s.code?(o(),n("img",{key:0,src:`${a.BASE_URL}images/${s.type}-logo/${s.code}.svg`,alt:s.name,class:t([e.$style["bank-logo__img"],a.customClassNames.img])},null,10,d)):g("",!0)],2)}const k={$style:i},z=m(u,[["render",f],["__cssModules",k]]);export{z as B};
