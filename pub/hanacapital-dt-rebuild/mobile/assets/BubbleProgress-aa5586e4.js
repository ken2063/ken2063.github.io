import{_ as i,c as n,g as m,d,e as o,n as a,x as c,t as b}from"./index-059b3cd0.js";const g="_progress_azokk_1",p="_progress__text_azokk_5",y="_progress__bar_azokk_14",f="_progress__bubble_azokk_41",k={progress:g,progress__text:p,progress__bar:y,"progress__bar-active":"_progress__bar-active_azokk_22","progress__bar-point":"_progress__bar-point_azokk_29",progress__bubble:f},u=()=>({wrap:"",text:"",current:"",total:"",bar:"",barActive:"",barPoint:"",bubble:""}),v={inheritAttrs:!1,props:{classNames:{Type:Object,default(){return u()}},total:{Type:Number,default:1},current:{Type:Number,default:1},label:{Type:Function,default(){return(s,r)=>`총 ${s}단계 중 ${r}단계`}},text:{Type:Function,default(){return s=>`${s}단계`}},bubble:{Type:Function,default(){return(s,r)=>`${r}단계`}}},setup(s){const r=n(()=>{const{classNames:e}=s;return Object.assign(u(),e)}),t=n(()=>{const{total:e,current:l}=s,_=100/e*l;return l===e?100:Number(_.toFixed(8))});return{customClassNames:r,activeWidth:t}}},N=["aria-label"];function C(s,r,t,e,l,_){return m(),d("div",{class:a([s.$style.progress,e.customClassNames.wrap]),role:"img","aria-label":t.label(t.total,t.current)},[o("div",{class:a([s.$style.progress__bar,e.customClassNames.bar])},[o("div",{class:a([s.$style["progress__bar-active"],e.customClassNames.barActive]),style:c(`width: ${e.activeWidth}%;`)},null,6),o("div",{class:a([s.$style["progress__bar-point"],e.customClassNames.barPoint]),style:c(`left: ${e.activeWidth}%;`)},[o("div",{class:a([s.$style.progress__bubble,e.customClassNames.bubble])},b(t.bubble(t.total,t.current)),3)],6)],2),o("div",{class:a([s.$style.progress__text,e.customClassNames.text])},b(t.text(t.total,t.current)),3)],10,N)}const z={$style:k},x=i(v,[["render",C],["__cssModules",z]]);export{x as B};
