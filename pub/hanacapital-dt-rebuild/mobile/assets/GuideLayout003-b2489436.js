import{_ as m,B as l,Y as d,Z as _,o as B,b as p,Q as s,q as f,s as t,g as h,W as n,V as o,e as C}from"./index-0ca40496.js";import{P as L}from"./PageContents-131cde60.js";import{B as g,a as k}from"./ButtonListItem-b1f6835b.js";import{B as N}from"./BottomSticky-889e7601.js";const x={components:{PageContents:L,BasicButton:l,ButtonList:g,ButtonListItem:k,BottomSticky:N},setup(){const e={ui:{common:d(),header:_()}};B(()=>{e.ui.common.setRootClassName("page-optional-class"),e.ui.header.setTitle(()=>"타이틀"),e.ui.header.setLeftButtons(()=>["back"]),e.ui.header.setRightButtons(()=>[{name:"close",onClick:()=>alert("닫기 클릭")}])}),p(()=>{e.ui.common.setRootClassName(),e.ui.header.setTitle(),e.ui.header.setLeftButtons()})}},y={class:"bottom-wrap"};function S(e,w,P,V,$,b){const a=s("BasicButton"),u=s("ButtonListItem"),c=s("ButtonList"),i=s("BottomSticky"),r=s("PageContents");return h(),f(r,null,{head:t(()=>[n("contents head")]),foot:t(()=>[o(i,null,{default:t(()=>[C("div",y,[o(c,{classNames:{wrap:"row-margin-none"}},{default:t(()=>[o(u,null,{default:t(()=>[o(a,{line:!0,theme:"quaternary"},{default:t(()=>[n("Button 1")]),_:1})]),_:1}),o(u,null,{default:t(()=>[o(a,null,{default:t(()=>[n("Button 2")]),_:1})]),_:1})]),_:1})])]),_:1})]),default:t(()=>[n(" // contents ")]),_:1})}const q=m(x,[["render",S]]);export{q as default};