import{_ as p,E as f,o as B,b as I,l as t,x as d,w as o,g as x,q as e,B as s}from"./index-55dc959b.js";import{P as L}from"./PageContents-f716fc69.js";import{L as h}from"./LocationBar-64abe5b5.js";import{B as g}from"./BasicButton-672abef3.js";import{B as C,a as P}from"./ButtonListItem-019a78ac.js";import{I as b}from"./IllustObject-10b9fe94.js";import{I as T,a as $}from"./IllustInfoTitle-a52941ca.js";const j={components:{PageContents:L,LocationBar:h,BasicButton:g,ButtonList:C,ButtonListItem:P,IllustObject:b,IllustInfo:T,IllustInfoTitle:$},setup(){const n={ui:{header:f()}};B(()=>{n.ui.header.setActive(()=>"onlineBranch")}),I(()=>{n.ui.header.setActive()})}};function v(n,w,O,k,A,M){const a=t("LocationBar"),c=t("IllustObject"),l=t("IllustInfoTitle"),u=t("IllustInfo"),r=t("BasicButton"),i=t("ButtonListItem"),_=t("ButtonList"),m=t("PageContents");return x(),d(m,null,{head:o(()=>[e(a,{data:[{text:"홈",to:"/main/home"},{text:"온라인지점",to:"/"},{text:"내정보관리"},{text:"주소지/연락처 변경",to:"/"}]})]),default:o(()=>[e(u,null,{default:o(()=>[e(c,{type:"complete"}),e(l,null,{default:o(()=>[s("연락처 변경이 완료되었습니다")]),_:1})]),_:1}),e(_,{wrap:!0,align:"center"},{default:o(()=>[e(i,null,{default:o(()=>[e(r,null,{default:o(()=>[s("확인")]),_:1})]),_:1})]),_:1})]),_:1})}const S=p(j,[["render",v]]);export{S as default};
