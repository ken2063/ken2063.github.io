import{_ as h,i as y,c as p,j as C,a as N,p as b,k as v,g as a,d as _,n as l,m as u,h as d}from"./index-89ea90fd.js";const k="_popup_dr07m_1",M="_popup__head_dr07m_7",S="_popup__body_dr07m_10",$="_popup__foot_dr07m_21",g="_popup__title_dr07m_25",j="_popup__text_dr07m_32",B={popup:k,popup__head:M,popup__body:S,popup__foot:$,popup__title:g,popup__text:j},f=()=>({wrap:"",head:"",body:"",foot:""}),r=o=>{if(!o||typeof o!="function")return!1;const e=o();let s=0;return e.forEach(t=>t.children==="v-if"&&s++),e.length!==s},w={props:{classNames:{Type:Object,default(){return f()}}},setup(o,{slots:e}){const s=y({slots:{}}),t=p(()=>{const{classNames:i}=o;return Object.assign(f(),i)}),n=p(()=>r(s.slots.default)),c=p(()=>r(s.slots.head)),m=p(()=>r(s.slots.foot));return C(()=>{s.slots.default=e.default,s.slots.head=e.head,s.slots.foot=e.foot}),N(()=>{s.slots.default=e.default,s.slots.head=e.head,s.slots.foot=e.foot}),b("popupStyleModule",v()),{customClassNames:t,isSlotDefault:n,isHead:c,isFoot:m}}};function A(o,e,s,t,n,c){return a(),_("div",{class:l([o.$style.popup,t.customClassNames.wrap])},[t.isHead?(a(),_("div",{key:0,class:l([o.$style.popup__head,t.customClassNames.head])},[u(o.$slots,"head")],2)):d("",!0),t.isSlotDefault?(a(),_("div",{key:1,class:l([o.$style.popup__body,t.customClassNames.body])},[u(o.$slots,"default")],2)):d("",!0),t.isFoot?(a(),_("div",{key:2,class:l([o.$style.popup__foot,t.customClassNames.foot])},[u(o.$slots,"foot")],2)):d("",!0)],2)}const D={$style:B},F=h(w,[["render",A],["__cssModules",D]]);export{F as A};
