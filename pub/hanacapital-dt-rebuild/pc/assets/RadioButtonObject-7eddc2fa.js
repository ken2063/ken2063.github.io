import{_ as j,i as T,r as v,c as C,J as y,j as M,p as h,k as E,g as p,d as k,e as _,y as O,m as V,n as c,v as f}from"./index-82fbfa1a.js";const w="_radio_e1nro_1",A="_radio__input_e1nro_6",I="_radio__label_e1nro_17",R="_radio__object_e1nro_28",q="_radio__text_e1nro_90",$={radio:w,radio__input:A,radio__label:I,radio__object:R,"radio__object-inner":"_radio__object-inner_e1nro_34",radio__text:q,"radio--align-center":"_radio--align-center_e1nro_101","radio--only-object":"_radio--only-object_e1nro_104","radio--full":"_radio--full_e1nro_129","radio--theme-secondary":"_radio--theme-secondary_e1nro_132","radio--theme-tertiary":"_radio--theme-tertiary_e1nro_159"},b=()=>({wrap:"",input:"",label:""}),z={inheritAttrs:!1,props:{classNames:{Type:Object,default(){return b()}},type:{Type:String,default:"radio"},name:{Type:String,default:null},id:{Type:String,required:!0},align:{Type:String,default:null},theme:{Type:String,default:null},onlyObject:{Type:Boolean,default:!1},full:{Type:Boolean,default:!1},defaultChecked:{Type:Boolean,default:!1},modelValue:{Type:Boolean}},setup(t,{emit:n}){const a=new Event("siblingsChange"),e=T({theme:{value:null},checked:!1}),r=v(null),d=C(()=>{const{classNames:o}=t;return Object.assign(b(),o)}),i=()=>r.value,B=o=>{const s=o.target,{checked:l}=s,{type:S,name:m}=t;e.checked=l,n("update:modelValue",l),S==="radio"&&m&&Array.prototype.filter.call(document.querySelectorAll(`[name="${m}"]`),u=>u!==s).forEach(u=>{u.dispatchEvent(a)})},N=o=>{const s=o.target,{checked:l}=s;e.checked=l,n("update:modelValue",l)};return y(()=>t.theme,o=>{e.theme.value=o}),y(()=>t.modelValue,o=>{e.checked=o}),M(()=>{const{theme:o,modelValue:s,defaultChecked:l}=t;e.theme.value=o,e.checked=typeof s=="boolean"?s:l}),h("radioButtonStyleModule",E()),h("radioButtonTheme",e.theme),{state:e,input:r,customClassNames:d,getInputElement:i,onChange:B,onSiblingsChange:N}}},J=["type","name","id","checked"],P=["for"];function D(t,n,a,e,r,d){return p(),k("div",{class:c([t.$style.radio,{[t.$style[`radio--theme-${a.theme}`]]:a.theme,[t.$style[`radio--align-${a.align}`]]:a.align,[t.$style["radio--only-object"]]:a.onlyObject,[t.$style["radio--full"]]:a.full},e.customClassNames.wrap])},[_("input",O({ref:"input"},t.$attrs,{type:a.type,class:[t.$style.radio__input,e.customClassNames.input],name:a.name,id:a.id,checked:e.state.checked,onChange:n[0]||(n[0]=(...i)=>e.onChange&&e.onChange(...i)),"on:siblingsChange":n[1]||(n[1]=(...i)=>e.onSiblingsChange&&e.onSiblingsChange(...i))}),null,16,J),_("label",{for:a.id,class:c([t.$style.radio__label,e.customClassNames.label])},[V(t.$slots,"default")],10,P)],2)}const F={$style:$},Q=j(z,[["render",D],["__cssModules",F]]),g=()=>({object:"",objectInner:""}),G={props:{classNames:{Type:Object,default(){return g()}}},setup(t){const n=f("radioButtonStyleModule"),a=f("radioButtonTheme"),e=C(()=>{const{classNames:r}=t;return Object.assign(g(),r)});return{theme:a,styleModule:n,customClassNames:e}}};function H(t,n,a,e,r,d){return p(),k("span",{class:c([e.styleModule.radio__object,e.customClassNames.object])},[_("span",{class:c([e.styleModule["radio__object-inner"],e.customClassNames.objectInner])},null,2)],2)}const U=j(G,[["render",H]]);export{Q as R,U as a};
