import{_ as g,k as h,i as S,r as C,c as u,o as N,l as O,g as B,d as T,e as k,q as I,y as P,n as F,N as M,I as U,O as j}from"./index-55dc959b.js";import{C as w}from"./vue-select.es-8675d864.js";const q="_select_1ku4c_1",z="_select__list_1ku4c_172",A={select:q,select__list:z,"select--error":"_select--error_1ku4c_238"},d=()=>({wrap:"",list:""}),D={components:{VueSelect:w},inheritAttrs:!1,props:{classNames:{Type:Object,default(){return d()}},filterable:{Type:Boolean,default:!1},searchable:{Type:Boolean,default:!1},clearable:{Type:Boolean,default:!1},reduce:{type:Function,default:t=>t.value},onSelected:{type:Function,default:()=>{}},onUpdate:{type:Function,default:()=>{}},defaultValue:{Type:String,default:null},modelValue:{Type:String},error:{Type:Boolean,default:!1}},setup(t,{emit:c}){const a=h(),l=S({placement:"bottom-start",value:""}),s=C(null),i=u(()=>{const{classNames:e}=t;return Object.assign(d(),e)}),n=u({get(){return _(t.modelValue),t.modelValue},set(e){c("update:modelValue",e)}}),r=(e,o,{width:y})=>{e.style.width=y;const v=M(o.$refs.toggle,e,{placement:l.placement,modifiers:[{name:"offset",options:{offset:[0,0]}},{name:"toggleClass",enabled:!0,phase:"write",fn({state:m}){const{classNames:b}=t,f=Object.assign(d(),b);e.classList.add(a.select__list),f.list.length&&e.classList.add(f.list),e.classList.toggle("drop-up",m.placement==="top-start"),o.$el.classList.toggle("drop-up",m.placement==="top-start")}}]});return()=>v.destroy()},p=e=>{l.value=e.value,t.onSelected(e)},_=e=>{l.value=e,t.onUpdate(e)},V=u(()=>({render:()=>U(j)}));return N(()=>{const{modelValue:e,defaultValue:o}=t;!e&&o&&s.value.setInternalValueFromOptions(o),s.value.selectedValue[0]&&(l.value=s.value.selectedValue[0].value)}),{state:l,select:s,customClassNames:i,vmVal:n,withPopper:r,optionSelected:p,OpenIndicator:V}}},E=["value"];function x(t,c,a,l,s,i){const n=O("VueSelect");return B(),T("div",{class:F([t.$style.select,{[t.$style["select--error"]]:a.error},l.customClassNames.wrap])},[k("input",{type:"hidden",value:l.state.value},null,8,E),I(n,P({ref:"select"},t.$attrs,{filterable:a.filterable,searchable:a.searchable,clearable:a.clearable,reduce:a.reduce,appendToBody:!0,calculatePosition:l.withPopper,components:{OpenIndicator:l.OpenIndicator},"onOption:selected":l.optionSelected,modelValue:l.vmVal,"onUpdate:modelValue":c[0]||(c[0]=r=>l.vmVal=r)}),null,16,["filterable","searchable","clearable","reduce","calculatePosition","components","onOption:selected","modelValue"])],2)}const G={$style:A},K=g(D,[["render",x],["__cssModules",G]]);export{K as S};
