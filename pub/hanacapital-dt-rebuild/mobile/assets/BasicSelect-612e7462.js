import{S as H}from"./SelectButton-2a048f3b.js";import{_ as M,U as W,l as q,i as j,r as V,c as w,w as z,o as D,Q as r,g as u,d as _,e as C,n as d,V as T,s as p,W as B,t as P,q as Q,F as S,f as E,h as x,$ as G}from"./index-059b3cd0.js";import{P as J}from"./PopupTitle-1615bfeb.js";import{T as K}from"./ToastPopup-0ca28b9b.js";import{T as R}from"./ToastPopupHead-49b7de23.js";import{I as X}from"./check-l-c56f2b0c.js";const Y="_select_1emmm_1",Z="_select__input_1emmm_5",$="_select__option_1emmm_10",ee={select:Y,select__input:Z,select__option:$,"select__option-list":"_select__option-list_1emmm_13","select__option-item":"_select__option-item_1emmm_18","select__option-button":"_select__option-button_1emmm_21","select__option-check":"_select__option-check_1emmm_53","select__option-item--checked":"_select__option-item--checked_1emmm_85","select--theme-sort":"_select--theme-sort_1emmm_98"},U=()=>({wrap:"",input:"",optionWrap:"",optionList:"",optionItem:"",optionButton:"",optionCheck:""}),v=()=>({value:"",text:"",disabled:!1}),te={components:{SelectButton:H,UiLayer:W,PopupTitle:J,ToastPopup:K,ToastPopupHead:R,IconCheck:X},props:{classNames:{Type:Object,default(){return U()}},buttonClassNames:{Type:Object,default:null},theme:{Type:String,default:null},option:{Type:Array,default(){return[v()]}},defaultValue:{Type:String,default:null},disabled:{Type:Boolean,default:!1},buttonTitle:{Type:String,default:null},layerTitle:{Type:String,default:null},id:{Type:String,default:null},name:{Type:String,default:null},placeholder:{Type:String,default:""},buttonId:{Type:String,default:null},openerFocusToAfterClose:{Type:Boolean,default:!0},onChange:{Type:Function,default(){return()=>{}}},onOptionClick:{Type:Function,default(){return()=>{}}},modelValue:{Type:String}},setup(t,{emit:m}){const l=t.option.map(o=>Object.assign(v(),o)),e=q({value:t.defaultValue||"",text:t.defaultValue&&l.filter(o=>o.value===t.defaultValue)[0].text||"",forcePlaceholder:!t.defaultValue}),n=j("formListItem",{}),c=j("inputBlock",{}),f=V(null),k=V(null),y=V(null),g=w(()=>{const{classNames:o}=t;return Object.assign(U(),o)}),N=w(()=>{const{option:o}=t;return o.map(i=>Object.assign(v(),i))});z(()=>t.modelValue,o=>{a(o)});const O=()=>{f.value.open(k.value.button),n&&n.selectFocus&&n.selectFocus(!0),c&&c.selectFocus&&c.selectFocus(!0)},s=o=>{e.value=o&&o.value||"",e.text=o&&o.text||"",e.forcePlaceholder=!o,f.value.close(),G(()=>{const i=new Event("change"),A=new Event("input");y.value.dispatchEvent(i),y.value.dispatchEvent(A),n&&n.checkInputed&&n.checkInputed()})},a=o=>{const{option:i}=t,L=i.map(F=>Object.assign(v(),F)).filter(F=>F.value===o);L.length?s(L[0]):s(null)},I=()=>{n&&n.selectFocus&&n.selectFocus(!1),c&&c.selectFocus&&c.selectFocus(!1)},h=o=>{m("update:modelValue",o.target.value)},b=o=>{const{onOptionClick:i}=t;i(o)};return D(()=>{a(t.modelValue||t.defaultValue)}),{state:e,layer:f,button:k,input:y,customClassNames:g,makeOption:N,layerOpen:O,selectOption:s,setValue:a,onAfterClosed:I,onInput:h,optionClick:b}}},oe=["id","name","disabled","value"],le=["title","disabled","onClick"],ne={key:0};function se(t,m,l,e,n,c){const f=r("SelectButton"),k=r("PopupTitle"),y=r("ToastPopupHead"),g=r("IconCheck"),N=r("ToastPopup"),O=r("UiLayer");return u(),_("div",{class:d([t.$style.select,{[t.$style[`select--theme-${l.theme}`]]:l.theme},e.customClassNames.wrap])},[C("input",{type:"hidden",ref:"input",class:d([t.$style.select__input,e.customClassNames.input]),id:l.id,name:l.name,disabled:l.disabled,value:e.state.value,onChange:m[0]||(m[0]=(...s)=>l.onChange&&l.onChange(...s)),onInput:m[1]||(m[1]=(...s)=>e.onInput&&e.onInput(...s))},null,42,oe),T(f,{ref:"button",classNames:l.buttonClassNames,disabled:l.disabled,title:l.buttonTitle,placeholder:l.placeholder,forcePlaceholder:e.state.forcePlaceholder,id:l.buttonId,theme:l.theme,onClick:e.layerOpen},{default:p(()=>[B(P(e.state.text),1)]),_:1},8,["classNames","disabled","title","placeholder","forcePlaceholder","id","theme","onClick"]),T(O,{ref:"layer",type:"toast",onAfterClosed:e.onAfterClosed,backgroundClose:!0,openerFocusToAfterClose:l.openerFocusToAfterClose},{default:p(s=>[s.display!=="none"?(u(),Q(N,{key:0},{head:p(()=>[T(y,null,{default:p(()=>[T(k,null,{default:p(()=>[B(P(l.layerTitle||"선택해 주세요"),1)]),_:1})]),_:1})]),default:p(()=>[C("div",{class:d([t.$style.select__option,e.customClassNames.optionWrap])},[C("ul",{class:d([t.$style["select__option-list"],e.customClassNames.optionList])},[(u(!0),_(S,null,E(e.makeOption,(a,I)=>(u(),_("li",{key:I,class:d([t.$style["select__option-item"],{[t.$style["select__option-item--checked"]]:e.state.value===a.value},e.customClassNames.optionItem])},[C("button",{type:"button",title:e.state.value===a.value?"선택 됨":null,class:d([t.$style["select__option-button"],e.customClassNames.optionButton]),disabled:a.disabled,onClick:h=>{e.selectOption(a),e.optionClick(h)}},[(u(!0),_(S,null,E(a.text.split(/\n/),(h,b)=>(u(),_(S,{key:b},[b>0?(u(),_("br",ne)):x("",!0),B(P(h),1)],64))),128)),C("span",{class:d([t.$style["select__option-check"],e.customClassNames.optionCheck])},[T(g)],2)],10,le)],2))),128))],2)],2)]),_:1})):x("",!0)]),_:1},8,["onAfterClosed","openerFocusToAfterClose"])],2)}const ae={$style:ee},_e=M(te,[["render",se],["__cssModules",ae]]);export{_e as B};