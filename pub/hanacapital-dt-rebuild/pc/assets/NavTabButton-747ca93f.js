import{_ as g,s as L,k as S,i as E,r as T,c,j,o as w,J as D,p,l as O,g as m,d as R,e as z,q as x,w as d,x as v,m as M,n as r,z as f,v as N,y as A,R as I}from"./index-82fbfa1a.js";import{U as C,a as V}from"./UiTabButton-9e009c2d.js";const q={"nav-tab":"_nav-tab_zr60e_1","nav-tab__inner":"_nav-tab__inner_zr60e_4","nav-tab__list":"_nav-tab__list_zr60e_44","nav-tab__item":"_nav-tab__item_zr60e_52","nav-tab__button":"_nav-tab__button_zr60e_59","nav-tab__text":"_nav-tab__text_zr60e_92","nav-tab__item--active":"_nav-tab__item--active_zr60e_99","nav-tab__item--disabled":"_nav-tab__item--disabled_zr60e_113","nav-tab__scroller":"_nav-tab__scroller_zr60e_125","nav-tab--auto":"_nav-tab--auto_zr60e_160","nav-tab--type-popup":"_nav-tab--type-popup_zr60e_166","nav-tab--type-popup-head":"_nav-tab--type-popup-head_zr60e_181"},B=()=>({wrap:"",inner:"",scroller:"",list:""}),J={components:{UiTabList:C,Simplebar:L},props:{classNames:{Type:Object,default(){return B()}},useUiTab:{Type:Boolean,default:!1},auto:{Type:Boolean,default:!1},type:{Type:String,default:null}},setup(a){const o=S(),t=E({useUiTab:{value:null}}),e=T(null),n=T(null),u=c(()=>{const{classNames:s}=a;return Object.assign(B(),s)}),_=c(()=>{const{useUiTab:s}=a;return s?C:"ul"}),b=()=>{const{auto:s}=a;if(!s)return;const l=e.value.scrollElement,i=n.value.el||n.value,y=(()=>n.value.el?i.getElementsByClassName("is-tab-opened"):i.getElementsByClassName(o["nav-tab__item--active"]))(),k=i.getElementsByClassName(o["nav-tab__item"])[0].offsetLeft-i.offsetLeft;if(!y.length)return;const h=y[0].offsetLeft-i.offsetLeft-k;l.scrollLeft=h};return j(()=>{t.useUiTab.value=a.useUiTab}),w(()=>{b()}),D(()=>a.useUiTab,s=>{t.useUiTab.value=s}),p("navTabStyleModule",o),p("navTab",{useUiTab:t.useUiTab}),{scroller:e,list:n,customClassNames:u,setComponent:_,scrollToActive:b}}};function P(a,o,t,e,n,u){const _=O("Simplebar");return m(),R("div",{class:r([a.$style["nav-tab"],{[a.$style["nav-tab--auto"]]:t.auto,[a.$style[`nav-tab--type-${t.type}`]]:t.type},e.customClassNames.wrap])},[z("div",{class:r([a.$style["nav-tab__inner"],e.customClassNames.inner])},[x(_,{ref:"scroller","data-simplebar-auto-hide":"false",class:r([a.$style["nav-tab__scroller"],e.customClassNames.scroller])},{default:d(()=>[(m(),v(f(e.setComponent),{ref:"list",class:r([a.$style["nav-tab__list"],e.customClassNames.list])},{default:d(()=>[M(a.$slots,"default")]),_:3},8,["class"]))]),_:3},8,["class"])],2)],2)}const F={$style:q},W=g(J,[["render",P],["__cssModules",F]]),U=()=>({item:"",button:"",text:""}),G={inheritAttrs:!1,props:{classNames:{Type:Object,default(){return U()}},link:{Type:String,default:null},tagName:{Type:String,default:"div"},active:{Type:Boolean,default:!1},disabled:{Type:Boolean,default:!1}},setup(a){const o=N("navTabStyleModule"),t=N("navTab",{}),e=c(()=>{const{classNames:s}=a;return Object.assign(U(),s)}),n=c(()=>{const{useUiTab:s}=t;return s.value?V:"li"}),u=c(()=>{const{useUiTab:s}=t,{tagName:l}=a;return s.value?"div":l==="RouterLink"?I:l}),_=c(()=>{const{useUiTab:s}=t,{disabled:l}=a;return s.value&&l||null}),b=c(()=>{const{useUiTab:s}=t,{tagName:l,disabled:i}=a;return s.value?null:l==="button"?i:null});return{styleModule:o,customClassNames:e,setItemComponent:n,setButtonComponent:u,itemDisabled:_,buttonDisabled:b}}};function H(a,o,t,e,n,u){return m(),v(f(e.setItemComponent),{class:r([e.styleModule["nav-tab__item"],{[e.styleModule["nav-tab__item--active"]]:t.active,[e.styleModule["nav-tab__item--disabled"]]:t.disabled},e.customClassNames.item]),link:t.link,disabled:e.itemDisabled},{default:d(()=>[(m(),v(f(e.setButtonComponent),A(a.$attrs,{class:[e.styleModule["nav-tab__button"],e.customClassNames.button],title:t.active?"선택 됨":null,disabled:e.buttonDisabled}),{default:d(()=>[z("span",{class:r([e.styleModule["nav-tab__text"],e.customClassNames.text])},[M(a.$slots,"default")],2)]),_:3},16,["class","title","disabled"]))]),_:3},8,["class","link","disabled"])}const X=g(G,[["render",H]]);export{W as N,X as a};