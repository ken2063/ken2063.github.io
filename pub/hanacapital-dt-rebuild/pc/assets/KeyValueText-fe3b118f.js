import{_ as u,c as n,p as g,k as f,g as c,d as r,e as b,m as i,n as t,v as o}from"./index-89ea90fd.js";const N={"key-value":"_key-value_b407g_2","key-value__list":"_key-value__list_b407g_5","key-value__item":"_key-value__item_b407g_9","key-value__key":"_key-value__key_b407g_19","key-value__value":"_key-value__value_b407g_24","key-value--align-left":"_key-value--align-left_b407g_30","key-value--vertical-align-center":"_key-value--vertical-align-center_b407g_33","key-value--direction-vertical":"_key-value--direction-vertical_b407g_36","key-value--direction-vertical-small":"_key-value--direction-vertical-small_b407g_49","key-value--wrap":"_key-value--wrap_b407g_65","key-value--col-3":"_key-value--col-3_b407g_83","key-value--margin-small":"_key-value--margin-small_b407g_86","key-value--margin-regular":"_key-value--margin-regular_b407g_108","key-value--size-small":"_key-value--size-small_b407g_130","key-value--size-regular":"_key-value--size-regular_b407g_133","key-value--size-medium":"_key-value--size-medium_b407g_136"},d=()=>({wrap:"",list:""}),$={props:{classNames:{Type:Object,default(){return d()}},align:{Type:String,default:null},verticalAlign:{Type:String,default:null},direction:{Type:String,default:null},margin:{Type:String,default:null},size:{Type:String,default:null},wrap:{Type:Boolean,default:!1},col:{Type:Number,default:2}},setup(l){const s=n(()=>{const{classNames:e}=l;return Object.assign(d(),e)});return g("keyValueStyleModule",f()),{customClassNames:s}}};function p(l,s,e,a,_,y){return c(),r("div",{class:t([l.$style["key-value"],{[l.$style[`key-value--align-${e.align}`]]:e.align,[l.$style[`key-value--vertical-align-${e.verticalAlign}`]]:e.verticalAlign,[l.$style[`key-value--direction-${e.direction}`]]:e.direction,[l.$style[`key-value--margin-${e.margin}`]]:e.margin,[l.$style[`key-value--size-${e.size}`]]:e.size,[l.$style["key-value--wrap"]]:e.wrap,[l.$style[`key-value--col-${e.col}`]]:e.wrap&&e.col>2},a.customClassNames.wrap])},[b("dl",{class:t([l.$style["key-value__list"],a.customClassNames.list])},[i(l.$slots,"default")],2)],2)}const C={$style:N},O=u($,[["render",p],["__cssModules",C]]),m=()=>({item:""}),M={props:{classNames:{Type:Object,default(){return m()}}},setup(l){const s=o("keyValueStyleModule"),e=n(()=>{const{classNames:a}=l;return Object.assign(m(),a)});return{styleModule:s,customClassNames:e}}};function T(l,s,e,a,_,y){return c(),r("div",{class:t([a.styleModule["key-value__item"],a.customClassNames.item])},[i(l.$slots,"default")],2)}const K=u(M,[["render",T]]),v=()=>({title:""}),z={props:{classNames:{Type:Object,default(){return v()}}},setup(l){const s=o("keyValueStyleModule"),e=n(()=>{const{classNames:a}=l;return Object.assign(v(),a)});return{styleModule:s,customClassNames:e}}};function S(l,s,e,a,_,y){return c(),r("dt",{class:t([a.styleModule["key-value__key"],a.customClassNames.title])},[i(l.$slots,"default")],2)}const h=u(z,[["render",S]]),k=()=>({text:""}),j={props:{classNames:{Type:Object,default(){return k()}}},setup(l){const s=o("keyValueStyleModule"),e=n(()=>{const{classNames:a}=l;return Object.assign(k(),a)});return{styleModule:s,customClassNames:e}}};function V(l,s,e,a,_,y){return c(),r("dd",{class:t([a.styleModule["key-value__value"],a.customClassNames.text])},[i(l.$slots,"default")],2)}const B=u(j,[["render",V]]);export{O as K,K as a,h as b,B as c};
