import{_ as p,E as f,o as d,b as B,l as t,x as I,w as o,g as x,q as e,B as s,e as L}from"./index-82fbfa1a.js";import{P as h}from"./PageContents-bfe4e6bc.js";import{L as b}from"./LocationBar-ae2ba5e0.js";import{B as g}from"./BasicButton-4f3c34ae.js";import{B as C,a as P}from"./ButtonListItem-1c2230e0.js";import{I as S}from"./IllustObject-1bd163cc.js";import{I as M,a as T}from"./IllustInfoTitle-0353c275.js";const $={components:{PageContents:h,LocationBar:b,BasicButton:g,ButtonList:C,ButtonListItem:P,IllustObject:S,IllustInfo:M,IllustInfoTitle:T},setup(){const n={ui:{header:f()}};d(()=>{n.ui.header.setActive(()=>"onlineBranch")}),B(()=>{n.ui.header.setActive()})}},j=L("br",null,null,-1);function v(n,w,N,O,V,k){const a=t("LocationBar"),l=t("IllustObject"),c=t("IllustInfoTitle"),u=t("IllustInfo"),r=t("BasicButton"),i=t("ButtonListItem"),_=t("ButtonList"),m=t("PageContents");return x(),I(m,null,{head:o(()=>[e(a,{data:[{text:"홈",to:"/main/home"},{text:"온라인지점",to:"/"},{text:"계약정보"},{text:"SMS안내 수신/변경",to:"/"}]})]),default:o(()=>[e(u,null,{default:o(()=>[e(l,{type:"complete"}),e(c,null,{default:o(()=>[s(" SMS안내 수신 변경이"),j,s(" 완료되었습니다 ")]),_:1})]),_:1}),e(_,{wrap:!0,align:"center"},{default:o(()=>[e(i,null,{default:o(()=>[e(r,null,{default:o(()=>[s("확인")]),_:1})]),_:1})]),_:1})]),_:1})}const D=p($,[["render",v]]);export{D as default};