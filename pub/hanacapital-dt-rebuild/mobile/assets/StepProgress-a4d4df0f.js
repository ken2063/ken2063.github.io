import{_ as i,c as l,g as u,d as m,e as n,n as a,x as g}from"./index-0ca40496.js";const d="_progress_1ggcz_1",p="_progress__bar_1ggcz_7",b={progress:d,progress__bar:p,"progress__bar-active":"_progress__bar-active_1ggcz_14"},_=()=>({wrap:"",text:"",current:"",total:"",bar:"",barActive:""}),f={inheritAttrs:!1,props:{classNames:{Type:Object,default(){return _()}},total:{Type:Number,default:1},current:{Type:Number,default:1}},setup(e){const o=l(()=>{const{classNames:s}=e;return Object.assign(_(),s)}),r=l(()=>{const{total:s,current:t}=e,c=100/s*t;return t===s?100:Number(c.toFixed(8))});return{customClassNames:o,activeWidth:r}}},N=["aria-label"];function v(e,o,r,s,t,c){return u(),m("div",{class:a([e.$style.progress,s.customClassNames.wrap]),role:"img","aria-label":`총 ${r.total}단계 중 ${r.current}단계`},[n("div",{class:a([e.$style.progress__bar,s.customClassNames.bar])},[n("div",{class:a([e.$style["progress__bar-active"],s.customClassNames.barActive]),style:g(`width: ${s.activeWidth}%;`)},null,6)],2)],10,N)}const y={$style:b},C=i(f,[["render",v],["__cssModules",y]]);export{C as S};
