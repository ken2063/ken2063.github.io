import{I as C}from"./text-delete-14661a09.js";import{_ as V,i as B,v as k,r as D,c as F,j as h,J as j,l as w,g as m,d as f,e as p,y as A,n as c,q as E,h as K,G as L}from"./index-82fbfa1a.js";const S="_input_796va_1",x="_input__cell_796va_5",M="_input__input_796va_9",O="_input__delete_796va_103",q={input:S,input__cell:x,input__input:M,"input__input--align-left":"_input__input--align-left_796va_74","input__input--align-center":"_input__input--align-center_796va_77","input__input--align-right":"_input__input--align-right_796va_80",input__delete:O,"input__delete-text":"_input__delete-text_796va_149","input--focus":"_input--focus_796va_167","input--inputed":"_input--inputed_796va_167"},v=()=>({wrap:"",cell:"",input:"",delete:"",deleteText:""}),z={components:{IconDelete:C},inheritAttrs:!1,props:{classNames:{Type:Object,default(){return v()}},type:{Type:String,default:"text"},maxLength:{Type:Number,default:null},onDelete:{Type:Function,default(){return()=>{}}},useDelete:{Type:Boolean,default:!0},readonly:{Type:Boolean,default:!1},disabled:{Type:Boolean,default:!1},align:{Type:String,default:null},defaultValue:{Type:String,default:null},modelValue:{Type:String}},setup(t,{emit:l}){let n=null;const e=B({isFocus:!1,isInputed:!1,val:""}),o=k("formListItem",{}),a=D(null),d=F(()=>{const{classNames:s}=t;return Object.assign(v(),s)}),u=()=>a.value,y=()=>{a.value.focus()},g=()=>{const{onDelete:s}=t;a.value.value="",a.value.focus(),s();const i=new Event("input");a.value.dispatchEvent(i)},I=()=>{clearTimeout(n),e.isFocus=!0,e.isInputed=!!a.value.value.length},T=()=>{clearTimeout(n),n=setTimeout(()=>{e.isFocus=!1,clearTimeout(n)},50)},N=s=>{const{value:i}=s.target,{maxLength:r}=t,_=r===null?i:i.substr(0,Number(r));s.target.value=_,e.val=_,l("update:modelValue",_)},b=s=>{e.isInputed=!!s.target.value.length};return h(()=>{e.val=t.modelValue||t.defaultValue||""}),j(()=>t.modelValue,s=>{e.val=s,L(()=>{o&&o.checkInputed&&o.checkInputed()})}),{state:e,input:a,customClassNames:d,getInputElement:u,focus:y,deleteAction:g,onfocusin:I,onInput:N,onKeyup:b,onfocusout:T}}},G=["type","value","disabled","readonly"];function J(t,l,n,e,o,a){const d=w("IconDelete");return m(),f("div",{class:c([t.$style.input,{[t.$style["input--focus"]]:e.state.isFocus,[t.$style["input--inputed"]]:e.state.isInputed},e.customClassNames.wrap]),onFocusin:l[3]||(l[3]=(...u)=>e.onfocusin&&e.onfocusin(...u)),onFocusout:l[4]||(l[4]=(...u)=>e.onfocusout&&e.onfocusout(...u))},[p("div",{class:c([t.$style.input__cell,e.customClassNames.cell])},[p("input",A({ref:"input"},t.$attrs,{type:n.type,class:[t.$style.input__input,{[t.$style[`input__input--align-${n.align}`]]:n.align},e.customClassNames.input],value:n.modelValue||e.state.val,disabled:n.disabled,readonly:n.readonly,onInput:l[0]||(l[0]=(...u)=>e.onInput&&e.onInput(...u)),onKeyup:l[1]||(l[1]=(...u)=>e.onKeyup&&e.onKeyup(...u))}),null,16,G)],2),!n.disabled&&!n.readonly&&n.useDelete?(m(),f("button",{key:0,type:"button",class:c([t.$style.input__delete,e.customClassNames.delete]),onClick:l[2]||(l[2]=(...u)=>e.deleteAction&&e.deleteAction(...u))},[E(d),p("span",{class:c([t.$style["input__delete-text"],e.customClassNames.deleteText])},"입력 내용 지우기",2)],2)):K("",!0)],34)}const P={$style:q},R=V(z,[["render",J],["__cssModules",P]]);export{R as B};