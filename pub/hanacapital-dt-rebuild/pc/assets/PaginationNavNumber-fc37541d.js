import{_ as m,c,p as C,k as v,g as l,d as r,e as o,m as g,n as e,v as y,x as N,z as f,t as M,y as x,w as b,R as j}from"./index-47f0144b.js";import{a as k,I as w}from"./pagination-next-67f8f5f3.js";const T="_pagination_13xjg_1",h="_pagination__list_13xjg_4",S="_pagination__guide_13xjg_12",B="_pagination__link_13xjg_30",O="_pagination__text_13xjg_58",P="_pagination__icon_13xjg_65",A="_pagination__item_13xjg_70",I={pagination:T,pagination__list:h,pagination__guide:S,pagination__link:B,pagination__text:O,pagination__icon:P,pagination__item:A,"pagination__item--active":"_pagination__item--active_13xjg_76","pagination__item--arrow-prev":"_pagination__item--arrow-prev_13xjg_84","pagination__item--arrow-next":"_pagination__item--arrow-next_13xjg_87","pagination__item--arrow":"_pagination__item--arrow_13xjg_84","pagination__item--ellipsis":"_pagination__item--ellipsis_13xjg_107"},d=()=>({wrap:"",list:""}),R={inheritAttrs:!1,props:{classNames:{Type:Object,default(){return d()}},label:{Type:String,default:"페이지네이션"}},setup(t){const i=c(()=>{const{classNames:s}=t;return Object.assign(d(),s)});return C("paginationNavStyleModule",v()),{customClassNames:i}}},z=["aria-label"];function D(t,i,s,a,_,n){return l(),r("div",{role:"navigation","aria-label":s.label,class:e([t.$style.pagination,a.customClassNames.wrap])},[o("ul",{class:e([t.$style.pagination__list,a.customClassNames.list])},[g(t.$slots,"default")],2)],10,z)}const L={$style:I},K=m(R,[["render",D],["__cssModules",L]]),u=()=>({item:"",link:"",guide:"",icon:""}),E={inheritAttrs:!1,props:{classNames:{Type:Object,default(){return u()}},type:{Type:String,default:"next"},disabled:{Type:Boolean,default:!1}},setup(t){const i=y("paginationNavStyleModule"),s=c(()=>{const{classNames:n}=t;return Object.assign(u(),n)});return{styleModule:i,customClassNames:s,icons:{next:k,prev:w},texts:{next:"다음 페이지 이동",prev:"이전 페이지 이동"}}}},V=["disabled"];function q(t,i,s,a,_,n){return l(),r("li",{class:e([a.styleModule.pagination__item,a.styleModule["pagination__item--arrow"],a.styleModule[`pagination__item--arrow-${s.type}`],a.customClassNames.item])},[o("button",x({type:"button"},t.$attrs,{class:[a.styleModule.pagination__link,a.customClassNames.link],disabled:s.disabled}),[(l(),N(f(a.icons[s.type]),{class:e([a.styleModule.pagination__icon,a.customClassNames.icon])},null,8,["class"])),o("span",{class:e([a.styleModule.pagination__guide,a.customClassNames.guide])},M(a.texts[s.type]),3)],16,V)],2)}const Q=m(E,[["render",q]]),p=()=>({item:"",link:"",guide:"",text:""}),F={inheritAttrs:!1,props:{tagName:{Type:String,default:"button"},classNames:{Type:Object,default(){return p()}},active:{Type:Boolean,default:!1}},setup(t){const i=y("paginationNavStyleModule"),s=c(()=>{const{tagName:n}=t;return n==="RouterLink"?j:n}),a=c(()=>{const{tagName:n}=t;return n==="button"?"button":null}),_=c(()=>{const{classNames:n}=t;return Object.assign(p(),n)});return{styleModule:i,setComponent:s,setType:a,customClassNames:_}}};function G(t,i,s,a,_,n){return l(),r("li",{class:e([a.styleModule.pagination__item,{[a.styleModule["pagination__item--active"]]:s.active},a.customClassNames.item])},[s.active?(l(),r("span",{key:0,class:e([a.styleModule.pagination__link,a.customClassNames.link])},[o("span",{class:e([a.styleModule.pagination__text,a.customClassNames.text])},[g(t.$slots,"default")],2),o("span",{class:e([a.styleModule.pagination__guide,a.customClassNames.guide])}," (현재 페이지) ",2)],2)):(l(),N(f(a.setComponent),x({key:1},t.$attrs,{type:a.setType,class:[a.styleModule.pagination__link,a.customClassNames.link]}),{default:b(()=>[o("span",{class:e([a.styleModule.pagination__text,a.customClassNames.text])},[g(t.$slots,"default")],2),o("span",{class:e([a.styleModule.pagination__guide,a.customClassNames.guide])}," 페이지 이동 ",2)]),_:3},16,["type","class"]))],2)}const U=m(F,[["render",G]]);export{K as P,Q as a,U as b};
