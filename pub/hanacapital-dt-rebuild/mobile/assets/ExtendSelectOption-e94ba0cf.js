import{_ as I,U as R,l as V,i as v,r as S,c as A,o as B,w as h,p as x,j as D,Q as m,g as k,d as q,e as z,n as b,V as y,s as p,W as N,t as O,q as j,k as E,h as Q,$ as W,a0 as G,m as J,v as K}from"./index-0ca40496.js";import{S as X}from"./SelectButton-da4f5354.js";import{P as Y}from"./PopupTitle-05b32b8e.js";import{T as Z}from"./ToastPopup-c9597c27.js";import{T as $}from"./ToastPopupHead-ec63cede.js";const ee="_select_e58ro_1",te="_select__input_e58ro_5",oe="_select__option_e58ro_10",ne={select:ee,select__input:te,select__option:oe},P=()=>({wrap:"",input:""}),le={components:{SelectButton:X,UiLayer:R,PopupTitle:Y,ToastPopup:Z,ToastPopupHead:$},props:{classNames:{Type:Object,default(){return P()}},buttonClassNames:{Type:Object,default:null},defaultValue:{Type:String,default:null},disabled:{Type:Boolean,default:!1},buttonTitle:{Type:String,default:null},layerTitle:{Type:String,default:null},id:{Type:String,default:null},name:{Type:String,default:null},placeholder:{Type:String,default:""},buttonId:{Type:String,default:null},openerFocusToAfterClose:{Type:Boolean,default:!0},onChange:{Type:Function,default(){return()=>{}}},onOptionClick:{Type:Function,default(){return()=>{}}},modelValue:{Type:String}},setup(o,{emit:a}){const e=V({options:[],count:0,value:{value:o.defaultValue||""},text:"",forcePlaceholder:!o.defaultValue}),t=v("formListItem",{}),c=v("inputBlock",{}),i=S(null),u=S(null),n=S(null),f=A(()=>{const{classNames:l}=o;return Object.assign(P(),l)}),_=l=>{const s=e.count;return e.options.push(Object.assign({},l,{key:s})),e.count++,s},C=l=>{const s=e.options.findIndex(r=>r.key===l);e.options.splice(s,1)},d=(l,s)=>{const r=e.options.findIndex(H=>H.key===l);Object.assign(e.options[r],s,{key:l})},T=l=>{e.value.value=l.value,e.text=l.text,e.forcePlaceholder=!1,i.value.close(),W(()=>{const s=new Event("change"),r=new Event("input");n.value.dispatchEvent(s),n.value.dispatchEvent(r),t&&t.checkInputed&&t.checkInputed()})},g=l=>{const s=e.options.findIndex(r=>r.value===l);s>-1&&T(e.options[s])},M=()=>{i.value.open(u.value.button),t&&t.selectFocus&&t.selectFocus(!0),c&&c.selectFocus&&c.selectFocus(!0)},w=()=>{t&&t.selectFocus&&t.selectFocus(!1),c&&c.selectFocus&&c.selectFocus(!1)},L=l=>{a("update:modelValue",l.target.value)},U=l=>{const{onOptionClick:s}=o;s(l)};return B(()=>{g(o.modelValue)}),h(()=>o.modelValue,l=>{g(l)}),x("extendSelectStyleModule",D()),x("extendSelect",{options:e.options,value:e.value,optionsAdd:_,optionsRemove:C,optionsChange:d,selectOption:T,optionClick:U}),{state:e,layer:i,button:u,input:n,customClassNames:f,setValue:g,selectOption:T,layerOpen:M,onAfterClosed:w,onInput:L}}},se=["id","name","disabled","value"];function ae(o,a,e,t,c,i){const u=m("SelectButton"),n=m("PopupTitle"),f=m("ToastPopupHead"),_=m("ToastPopup"),C=m("UiLayer");return k(),q("div",{class:b([o.$style.select,t.customClassNames.wrap])},[z("input",{type:"hidden",ref:"input",class:b([o.$style.select__input,t.customClassNames.input]),id:e.id,name:e.name,disabled:e.disabled,value:t.state.value.value,onChange:a[0]||(a[0]=(...d)=>e.onChange&&e.onChange(...d)),onInput:a[1]||(a[1]=(...d)=>t.onInput&&t.onInput(...d))},null,42,se),y(u,{ref:"button",classNames:e.buttonClassNames,disabled:e.disabled,title:e.buttonTitle,placeholder:e.placeholder,forcePlaceholder:t.state.forcePlaceholder,id:e.buttonId,onClick:t.layerOpen},{default:p(()=>[N(O(t.state.text),1)]),_:1},8,["classNames","disabled","title","placeholder","forcePlaceholder","id","onClick"]),y(C,{ref:"layer",type:"toast",onAfterClosed:t.onAfterClosed,backgroundClose:!0,openerFocusToAfterClose:e.openerFocusToAfterClose},{default:p(d=>[d.display!=="none"?(k(),j(_,{key:0},{head:p(()=>[y(f,null,{default:p(()=>[y(n,null,{default:p(()=>[N(O(e.layerTitle||"선택해 주세요"),1)]),_:1})]),_:1})]),default:p(()=>[E(o.$slots,"default")]),_:3})):Q("",!0)]),_:3},8,["onAfterClosed","openerFocusToAfterClose"])],2)}const ce={$style:ne},ye=I(le,[["render",ae],["__cssModules",ce]]),F=()=>({option:""}),ue={inheritAttrs:!1,props:{tagName:{Type:String,default:"button"},classNames:{Type:Object,default(){return F()}},value:{Type:String,default:""},text:{Type:String,default:""},type:{Type:String,default:"button"}},setup(o){const a=v("extendSelectStyleModule"),e=v("extendSelect",{}),t=V({key:null}),c=A(()=>{const{classNames:n}=o;return Object.assign(F(),n)}),i=()=>{const n={value:o.value,text:o.text};e&&e.selectOption&&e.selectOption(n)},u=n=>{const{optionClick:f}=e;f(n)};return B(()=>{const n={value:o.value,text:o.text};e&&e.optionsAdd&&(t.key=e.optionsAdd(n),e.value&&e.value.value&&e.value.value===n.value&&e.selectOption&&e.selectOption(n))}),G(()=>{e&&e.optionsRemove&&e.optionsRemove(t.key)}),h(()=>o.value,n=>{e&&e.optionsChange&&e.optionsChange(t.key,{value:n})}),h(()=>o.text,n=>{e&&e.optionsChange&&e.optionsChange(t.key,{text:n})}),{extendSelect:e,styleModule:a,customClassNames:c,selectOption:i,optionClick:u}}};function ie(o,a,e,t,c,i){return k(),j(K(e.tagName),J(o.$attrs,{type:e.type,title:t.extendSelect.value&&t.extendSelect.value.value===e.value?"선택 됨":null,class:[t.styleModule.select__option,{"is-selected":t.extendSelect.value&&t.extendSelect.value.value===e.value},t.customClassNames.option],onClick:a[0]||(a[0]=u=>{t.selectOption(),t.optionClick(u)})}),{default:p(()=>[E(o.$slots,"default")]),_:3},16,["type","title","class"])}const ve=I(ue,[["render",ie]]);export{ye as E,ve as a};