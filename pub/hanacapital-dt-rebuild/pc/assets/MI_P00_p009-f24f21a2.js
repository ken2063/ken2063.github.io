import{_ as p,E as f,o as d,b as B,l as t,x as I,w as o,g as x,q as e,B as s,e as L}from"./index-89ea90fd.js";import{P as h}from"./PageContents-f8dfd722.js";import{L as b}from"./LocationBar-c816b7b5.js";import{B as g}from"./BasicButton-9f8538fd.js";import{B as C,a as P}from"./ButtonListItem-7021a724.js";import{I as S}from"./IllustObject-0c71f8f7.js";import{I as M,a as T}from"./IllustInfoTitle-e59218ed.js";const $={components:{PageContents:h,LocationBar:b,BasicButton:g,ButtonList:C,ButtonListItem:P,IllustObject:S,IllustInfo:M,IllustInfoTitle:T},setup(){const n={ui:{header:f()}};d(()=>{n.ui.header.setActive(()=>"onlineBranch")}),B(()=>{n.ui.header.setActive()})}},j=L("br",null,null,-1);function v(n,w,N,O,V,k){const a=t("LocationBar"),l=t("IllustObject"),c=t("IllustInfoTitle"),u=t("IllustInfo"),r=t("BasicButton"),i=t("ButtonListItem"),_=t("ButtonList"),m=t("PageContents");return x(),I(m,null,{head:o(()=>[e(a,{data:[{text:"홈",to:"/main/home"},{text:"온라인지점",to:"/"},{text:"계약정보"},{text:"SMS안내 수신/변경",to:"/"}]})]),default:o(()=>[e(u,null,{default:o(()=>[e(l,{type:"complete"}),e(c,null,{default:o(()=>[s(" SMS안내 수신 변경이"),j,s(" 완료되었습니다 ")]),_:1})]),_:1}),e(_,{wrap:!0,align:"center"},{default:o(()=>[e(i,null,{default:o(()=>[e(r,null,{default:o(()=>[s("확인")]),_:1})]),_:1})]),_:1})]),_:1})}const D=p($,[["render",v]]);export{D as default};
