import{g as u,d as i,e as o,_ as y,c as l,Q as d,q as h,s as p,V as b,n as r,t as f,m as g,v as C,R as N}from"./index-0ca40496.js";const x={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},w=o("path",{fill:"#15181F",d:"M16.465 6.498a.706.706 0 0 1 .997 0 .703.703 0 0 1 0 .995l-9.967 9.95a.706.706 0 0 1-.997 0 .703.703 0 0 1 0-.995l9.967-9.95Z"},null,-1),S=o("path",{fill:"#15181F",d:"M6.537 7.552a.703.703 0 0 1 0-.995.706.706 0 0 1 .997 0l9.968 9.95a.703.703 0 0 1 0 .995.706.706 0 0 1-.997 0l-9.968-9.95Z"},null,-1),T=[w,S];function v(t,a){return u(),i("svg",x,T)}const B={render:v},k="_button_1h3yy_1",D="_button__text_1h3yy_39",M="_button__icon_1h3yy_57",I={button:k,button__text:D,button__icon:M,"button--theme-secondary":"_button--theme-secondary_1h3yy_66","button--theme-tertiary":"_button--theme-tertiary_1h3yy_69"},_=()=>({wrap:"",text:"",icon:""}),R={inheritAttrs:!1,components:{IconCloseSmall:B},props:{classNames:{Type:Object,default(){return _()}},tagName:{Type:String,default:"button"},type:{Type:String,default:"button"},theme:{Type:String,default:null},text:{Type:String,default:"삭제"}},setup(t){const a=l(()=>{const{classNames:s}=t;return Object.assign(_(),s)}),n=l(()=>{const{tagName:s}=t;return s==="RouterLink"?N:s}),e=l(()=>{const{tagName:s,type:c}=t;return s==="button"?c:null});return{customClassNames:a,setComponent:n,setType:e}}};function V(t,a,n,e,s,c){const m=d("IconCloseSmall");return u(),h(C(e.setComponent),g(t.$attrs,{type:e.setType,class:[t.$style.button,{[t.$style[`button--theme-${n.theme}`]]:n.theme},e.customClassNames.wrap]}),{default:p(()=>[o("span",{class:r([t.$style.button__icon,e.customClassNames.icon])},[b(m)],2),o("span",{class:r([t.$style.button__text,e.customClassNames.text])},f(n.text),3)]),_:1},16,["type","class"])}const $={$style:I},F=y(R,[["render",V],["__cssModules",$]]);export{F as D};
