import{_ as B,i as T,r as I,c as v,J as y,j as w,p as x,k as M,g as i,d as k,e as r,y as E,m as O,n as _,v as f,l as g,x as C}from"./index-89ea90fd.js";import{I as q}from"./check-l-7d0b23af.js";const V="_checkbox_1isy6_1",$="_checkbox__input_1isy6_6",A="_checkbox__label_1isy6_17",D="_checkbox__object_1isy6_28",L="_checkbox__text_1isy6_81",z={checkbox:V,checkbox__input:$,checkbox__label:A,checkbox__object:D,"checkbox__object-inner":"_checkbox__object-inner_1isy6_34",checkbox__text:L,"checkbox--align-center":"_checkbox--align-center_1isy6_92","checkbox--only-object":"_checkbox--only-object_1isy6_95","checkbox--full":"_checkbox--full_1isy6_120","checkbox--theme-secondary":"_checkbox--theme-secondary_1isy6_123","checkbox--theme-tertiary":"_checkbox--theme-tertiary_1isy6_123","checkbox--theme-quinary":"_checkbox--theme-quinary_1isy6_123","checkbox--theme-quaternary":"_checkbox--theme-quaternary_1isy6_161"},p=()=>({wrap:"",input:"",label:""}),J={inheritAttrs:!1,props:{classNames:{Type:Object,default(){return p()}},type:{Type:String,default:"checkbox"},name:{Type:String,default:null},id:{Type:String,required:!0},align:{Type:String,default:null},theme:{Type:String,default:null},onlyObject:{Type:Boolean,default:!1},full:{Type:Boolean,default:!1},defaultChecked:{Type:Boolean,default:!1},modelValue:{Type:Boolean}},setup(c,{emit:o}){const t=new Event("siblingsChange"),e=T({theme:{value:null},checked:!1}),h=I(null),u=v(()=>{const{classNames:n}=c;return Object.assign(p(),n)}),s=()=>h.value,b=n=>{const l=n.target,{checked:a}=l,{type:S,name:m}=c;e.checked=a,o("update:modelValue",a),S==="radio"&&m&&Array.prototype.filter.call(document.querySelectorAll(`[name="${m}"]`),d=>d!==l).forEach(d=>{d.dispatchEvent(t)})},N=n=>{const l=n.target,{checked:a}=l;e.checked=a,o("update:modelValue",a)};return y(()=>c.theme,n=>{e.theme.value=n}),y(()=>c.modelValue,n=>{e.checked=n}),w(()=>{const{theme:n,modelValue:l,defaultChecked:a}=c;e.theme.value=n,e.checked=typeof l=="boolean"?l:a}),x("checkBoxStyleModule",M()),x("checkBoxTheme",e.theme),{state:e,input:h,customClassNames:u,getInputElement:s,onChange:b,onSiblingsChange:N}}},P=["type","name","id","checked"],Z=["for"];function F(c,o,t,e,h,u){return i(),k("div",{class:_([c.$style.checkbox,{[c.$style[`checkbox--theme-${t.theme}`]]:t.theme,[c.$style[`checkbox--align-${t.align}`]]:t.align,[c.$style["checkbox--only-object"]]:t.onlyObject,[c.$style["checkbox--full"]]:t.full},e.customClassNames.wrap])},[r("input",E({ref:"input"},c.$attrs,{type:t.type,class:[c.$style.checkbox__input,e.customClassNames.input],name:t.name,id:t.id,checked:e.state.checked,onChange:o[0]||(o[0]=(...s)=>e.onChange&&e.onChange(...s)),"on:siblingsChange":o[1]||(o[1]=(...s)=>e.onSiblingsChange&&e.onSiblingsChange(...s))}),null,16,P),r("label",{for:t.id,class:_([c.$style.checkbox__label,e.customClassNames.label])},[O(c.$slots,"default")],10,Z)],2)}const G={$style:z},te=B(J,[["render",F],["__cssModules",G]]),H={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},K=r("path",{fill:"#BDBDBD","fill-rule":"evenodd",d:"M17.708 8.294a1 1 0 0 1-.002 1.414l-6.511 6.5a1 1 0 0 1-1.415-.002l-3.488-3.5a1 1 0 1 1 1.416-1.412l2.782 2.791 5.804-5.793a1 1 0 0 1 1.414.002Z","clip-rule":"evenodd"},null,-1),Q=[K];function R(c,o){return i(),k("svg",H,Q)}const U={render:R},j=()=>({object:"",objectInner:""}),W={components:{IconCheck:U,IconCheckLarge:q},props:{classNames:{Type:Object,default(){return j()}}},setup(c){const o=f("checkBoxStyleModule"),t=f("checkBoxTheme"),e=v(()=>{const{classNames:h}=c;return Object.assign(j(),h)});return{theme:t,styleModule:o,customClassNames:e}}};function X(c,o,t,e,h,u){const s=g("IconCheckLarge"),b=g("IconCheck");return i(),k("span",{class:_([e.styleModule.checkbox__object,e.customClassNames.object])},[r("span",{class:_([e.styleModule["checkbox__object-inner"],e.customClassNames.objectInner])},[e.theme.value==="secondary"?(i(),C(s,{key:0})):(i(),C(b,{key:1}))],2)],2)}const oe=B(W,[["render",X]]);export{te as C,oe as a};
