import{_ as B,i as V,r as $,c as u,J as p,j as w,p as y,k as O,g as d,d as r,e as f,y as A,n as i,m as b,h as x,v as C}from"./index-09d20b4d.js";const I={"box-check":"_box-check_1up6p_1","box-check__input":"_box-check__input_1up6p_8","box-check__block":"_box-check__block_1up6p_19","box-check__left":"_box-check__left_1up6p_35","box-check__right":"_box-check__right_1up6p_39","box-check__center":"_box-check__center_1up6p_43","box-check__label":"_box-check__label_1up6p_47","box-check__object":"_box-check__object_1up6p_62","box-check__object-inner":"_box-check__object-inner_1up6p_70","box-check--checkbox":"_box-check--checkbox_1up6p_149","box-check--contents":"_box-check--contents_1up6p_181","box-check--align-top":"_box-check--align-top_1up6p_191","box-check--min-side":"_box-check--min-side_1up6p_194"},v=()=>({wrap:"",input:"",block:"",left:"",center:"",right:""}),L={inheritAttrs:!1,props:{classNames:{Type:Object,default(){return v()}},type:{Type:String,default:"radio"},name:{Type:String,default:null},id:{Type:String,required:!0},align:{Type:String,default:null},contents:{Type:Boolean,default:!1},minSide:{Type:Boolean,default:!1},defaultChecked:{Type:Boolean,default:!1},modelValue:{Type:Boolean}},setup(e,{emit:l,slots:t}){const c=new Event("siblingsChange"),s=V({type:{value:null},id:{value:null},checked:!1}),h=$(null),_=u(()=>{const{classNames:o}=e;return Object.assign(v(),o)}),S=u(()=>!!t.left),T=u(()=>!!t.right),j=()=>h.value,M=o=>{const a=o.target,{checked:n}=a,{type:k,name:g}=e;s.checked=n,l("update:modelValue",n),k==="radio"&&g&&Array.prototype.filter.call(document.querySelectorAll(`[name="${g}"]`),m=>m!==a).forEach(m=>{m.dispatchEvent(c)})},E=o=>{const a=o.target,{checked:n}=a;s.checked=n,l("update:modelValue",n)};return p(()=>e.type,o=>{s.type.value=o}),p(()=>e.id,o=>{s.id.value=o}),p(()=>e.modelValue,o=>{s.checked=o}),w(()=>{const{type:o,id:a,modelValue:n,defaultChecked:k}=e;s.type.value=o,s.id.value=a,s.checked=typeof n=="boolean"?n:k}),y("boxCheckstyleModule",O()),y("boxCheckType",s.type),y("boxCheckId",s.id),{state:s,input:h,customClassNames:_,getInputElement:j,isLeft:S,isRight:T,onChange:M,onSiblingsChange:E}}},q=["type","name","id","checked"];function R(e,l,t,c,s,h){return d(),r("div",{class:i([e.$style["box-check"],{[e.$style["box-check--checkbox"]]:t.type==="checkbox",[e.$style[`box-check--align-${t.align}`]]:t.align,[e.$style["box-check--contents"]]:t.contents,[e.$style["box-check--min-side"]]:t.minSide},c.customClassNames.wrap])},[f("input",A({ref:"input"},e.$attrs,{type:t.type,class:[e.$style["box-check__input"],c.customClassNames.input],name:t.name,id:t.id,checked:c.state.checked,onChange:l[0]||(l[0]=(..._)=>c.onChange&&c.onChange(..._)),"on:siblingsChange":l[1]||(l[1]=(..._)=>c.onSiblingsChange&&c.onSiblingsChange(..._))}),null,16,q),f("div",{class:i([e.$style["box-check__block"],c.customClassNames.block])},[c.isLeft?(d(),r("div",{key:0,class:i([e.$style["box-check__left"],c.customClassNames.left])},[b(e.$slots,"left")],2)):x("",!0),f("div",{class:i([e.$style["box-check__center"],c.customClassNames.center])},[b(e.$slots,"default")],2),c.isRight?(d(),r("div",{key:1,class:i([e.$style["box-check__right"],c.customClassNames.right])},[b(e.$slots,"right")],2)):x("",!0)],2)],2)}const z={$style:I},H=B(L,[["render",R],["__cssModules",z]]),N=()=>({label:""}),J={props:{classNames:{Type:Object,default(){return N()}}},setup(e){const l=C("boxCheckstyleModule"),t=C("boxCheckId"),c=u(()=>{const{classNames:s}=e;return Object.assign(N(),s)});return{styleModule:l,id:t,customClassNames:c}}},P=["for"];function D(e,l,t,c,s,h){return d(),r("label",{for:c.id.value,class:i([c.styleModule["box-check__label"],c.customClassNames.label])},[b(e.$slots,"default")],10,P)}const K=B(J,[["render",D]]);export{H as B,K as a};