import{_ as k,r as g,c as s,g as a,x as T,w as B,d as u,m as i,n as r,h as _,y as C,z as N,R as z}from"./index-55dc959b.js";const I="_button_ol44k_1",S="_button__text_ol44k_42",q="_button__icon_ol44k_45",R={button:I,button__text:S,button__icon:q,"button--auto":"_button--auto_ol44k_61","button--icon-only":"_button--icon-only_ol44k_64","button--inline":"_button--inline_ol44k_67","button--size-regular":"_button--size-regular_ol44k_72","button--size-small":"_button--size-small_ol44k_87","button--line":"_button--line_ol44k_107","button--theme-secondary":"_button--theme-secondary_ol44k_119","button--theme-tertiary":"_button--theme-tertiary_ol44k_139","button--theme-quaternary":"_button--theme-quaternary_ol44k_159","button--theme-quaternary-green":"_button--theme-quaternary-green_ol44k_181","button--theme-quaternary-navy":"_button--theme-quaternary-navy_ol44k_203","button--theme-quaternary-blue":"_button--theme-quaternary-blue_ol44k_225","button--disabled":"_button--disabled_ol44k_247","button--min-side":"_button--min-side_ol44k_266"},m=()=>({wrap:"",text:"",icon:""}),L={inheritAttrs:!1,props:{tagName:{Type:String,default:"button"},type:{Type:String,default:"button"},classNames:{Type:Object,default(){return m()}},size:{Type:String,default:null},theme:{Type:String,default:null},line:{Type:Boolean,default:!1},inline:{Type:Boolean,default:!1},disabledStyle:{Type:Boolean,default:!1},minSide:{Type:Boolean,default:!1},auto:{Type:Boolean,default:!1}},setup(t,l){const n=g(null),e=s(()=>{const{tagName:o}=t;return o==="RouterLink"?z:o}),b=s(()=>{const{tagName:o,type:h}=t;return o==="button"?h:null}),c=s(()=>!!l.slots.default),y=s(()=>!!l.slots.leftIcon),d=s(()=>!!l.slots.rightIcon),f=s(()=>{const{classNames:o}=t;return Object.assign(m(),o)});return{button:n,setComponent:e,setType:b,isText:c,isLeftIcon:y,isRightIcon:d,customClassNames:f,getElement:()=>n.value}}};function v(t,l,n,e,b,c){return a(),T(N(e.setComponent),C(t.$attrs,{ref:"button",type:e.setType,class:[t.$style.button,{[t.$style["button--icon-only"]]:(e.isLeftIcon||e.isRightIcon)&&!e.isText,[t.$style[`button--size-${n.size}`]]:n.size,[t.$style[`button--theme-${n.theme}`]]:n.theme,[t.$style["button--line"]]:n.line,[t.$style["button--inline"]]:n.inline,[t.$style["button--disabled"]]:n.disabledStyle,[t.$style["button--min-side"]]:n.minSide,[t.$style["button--auto"]]:n.auto},e.customClassNames.wrap]}),{default:B(()=>[e.isLeftIcon?(a(),u("span",{key:0,class:r([t.$style.button__icon,e.customClassNames.icon])},[i(t.$slots,"leftIcon")],2)):_("",!0),e.isText?(a(),u("span",{key:1,class:r([t.$style.button__text,e.customClassNames.text])},[i(t.$slots,"default")],2)):_("",!0),e.isRightIcon?(a(),u("span",{key:2,class:r([t.$style.button__icon,e.customClassNames.icon])},[i(t.$slots,"rightIcon")],2)):_("",!0)]),_:3},16,["type","class"])}const w={$style:R},j=k(L,[["render",v],["__cssModules",w]]);export{j as B};
