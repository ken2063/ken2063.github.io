import{_ as N,c as O,p as x,k as v,g as u,d,e as c,m as q,n as r,v as h,i as w,r as B,j,o as I,a as L,J as E,t as T,h as C}from"./index-09d20b4d.js";const K="_form_13ylp_1",V="_form__list_13ylp_15",z="_form__item_13ylp_20",A="_form__title_13ylp_27",D="_form__require_13ylp_58",J="_form__contents_13ylp_87",U="_form__area_13ylp_90",G="_form__help_13ylp_128",H={form:K,form__list:V,form__item:z,form__title:A,"form__title-text":"_form__title-text_13ylp_45","form__title-optional":"_form__title-optional_13ylp_48",form__require:D,"form__require-text":"_form__require-text_13ylp_69",form__contents:J,form__area:U,"form__item--focus":"_form__item--focus_13ylp_94","form__item--inputed":"_form__item--inputed_13ylp_94","form__item--force-focus":"_form__item--force-focus_13ylp_94","form__item--error":"_form__item--error_13ylp_94","form__item--select-only":"_form__item--select-only_13ylp_118","form__item--disabled":"_form__item--disabled_13ylp_124",form__help:G,"form--wrap":"_form--wrap_13ylp_141"},b=()=>({wrap:"",list:""}),P={props:{classNames:{Type:Object,default(){return b()}},wrap:{Type:Boolean,default:!1},col:{Type:Number,default:2}},setup(l){const o=O(()=>{const{classNames:t}=l;return Object.assign(b(),t)});return x("formListStyleModule",v()),{customClassNames:o}}};function Q(l,o,t,e,m,_){return u(),d("div",{class:r([l.$style.form,{[l.$style["form--wrap"]]:t.wrap,[l.$style[`form--col-${t.col}`]]:t.wrap&&t.col>2},e.customClassNames.wrap])},[c("dl",{class:r([l.$style.form__list,e.customClassNames.list])},[q(l.$slots,"default")],2)],2)}const R={$style:H},Z=N(P,[["render",Q],["__cssModules",R]]),M=()=>({item:"",title:"",titleText:"",titleOptionalText:"",require:"",requireText:"",contents:""}),W={props:{classNames:{Type:Object,default(){return M()}},require:{Type:Boolean,default:!1},forceFocus:{Type:Boolean,default:!1},titleText:{Type:String,default:""},titleOptionalText:{Type:String,default:null},target:{Type:String,default:null},disabled:{Type:Boolean,default:!1},selectOnly:{Type:Boolean,default:!1}},setup(l){const o=h("formListStyleModule");let t=null;const e=w({isFocus:!1,isSelectFocus:!1,isInputed:!1,isError:!1,selectOnly:{value:!1}}),m=o.form__area,_=B(null),n=O(()=>{const{classNames:s}=l;return Object.assign(M(),s)}),i=()=>{const s=_.value.querySelectorAll(`.${m} input:not(.js-ignore):not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="image"])`);let f=!1;for(let a=0;a<s.length;a++)if(s[a].value.length){f=!0;break}e.isInputed=f},y=()=>{const{disabled:s}=l;s||(clearTimeout(t),e.isFocus=!0,i())},p=()=>{const{disabled:s}=l;s||(clearTimeout(t),t=setTimeout(()=>{e.isFocus=!1,clearTimeout(t)},50))},g=()=>{const{disabled:s}=l;s||i()},k=()=>{const{target:s,disabled:f}=l;if(f||!s)return;const a=_.value.querySelector(s);a.focus(),a.matches("button, a")&&a.click()},F=s=>{e.isError=s},S=s=>{e.isSelectFocus=s};return j(()=>{e.selectOnly.value=l.selectOnly}),I(()=>{i()}),L(()=>{i()}),E(()=>l.selectOnly,s=>{e.selectOnly.value=s}),x("formListItem",{areaClass:m,onfocusin:y,onfocusout:p,error:F,selectFocus:S,helpClass:o.form__help,selectOnly:e.selectOnly,checkInputed:i}),{state:e,styleModule:o,contents:_,customClassNames:n,onfocusin:y,onfocusout:p,onKeyup:g,labelClick:k}}};function X(l,o,t,e,m,_){return u(),d("div",{class:r([e.styleModule.form__item,{[e.styleModule["form__item--focus"]]:e.state.isFocus||e.state.isSelectFocus,[e.styleModule["form__item--inputed"]]:e.state.isInputed,[e.styleModule["form__item--force-focus"]]:t.forceFocus,[e.styleModule["form__item--error"]]:e.state.isError,[e.styleModule["form__item--disabled"]]:t.disabled,[e.styleModule["form__item--select-only"]]:t.selectOnly},e.customClassNames.item])},[c("dt",{class:r([e.styleModule.form__title,e.customClassNames.title]),onClick:o[0]||(o[0]=(...n)=>e.labelClick&&e.labelClick(...n))},[c("span",{class:r([e.styleModule["form__title-text"],e.customClassNames.titleText])},T(t.titleText),3),t.titleOptionalText?(u(),d("span",{key:0,class:r([e.styleModule["form__title-optional"],e.customClassNames.titleOptionalText])},T(t.titleOptionalText),3)):C("",!0),t.require?(u(),d("span",{key:1,class:r([e.styleModule.form__require,e.customClassNames.require])},[c("span",{class:r([e.styleModule["form__require-text"],e.customClassNames.requireText])}," (필수) ",2)],2)):C("",!0)],2),c("dd",{ref:"contents",class:r([e.styleModule.form__contents,e.customClassNames.contents]),onKeyup:o[1]||(o[1]=(...n)=>e.onKeyup&&e.onKeyup(...n))},[q(l.$slots,"default")],34)],2)}const $=N(W,[["render",X]]);export{Z as F,$ as a};
