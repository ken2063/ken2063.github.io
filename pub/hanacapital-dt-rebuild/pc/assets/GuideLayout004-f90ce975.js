import{_ as d,D as l,E as p,o as _,b as x,l as o,x as f,w as t,g as P,q as a,B as s,e as g}from"./index-89ea90fd.js";import{P as h}from"./PageContents-f8dfd722.js";import{L as T}from"./LocationBar-c816b7b5.js";import{P as C,a as b}from"./PageTitle-af1154e1.js";import{P as B}from"./PageMainText-de0a32a5.js";import{P as v}from"./PageSubText-66182d6f.js";const L={components:{PageContents:h,LocationBar:T,PageHead:C,PageTitle:b,PageMainText:B,PageSubText:v},setup(){const e={ui:{common:l(),header:p()}};_(()=>{e.ui.common.setRootClassName("page-optional-class"),e.ui.header.setActive(()=>"business"),e.ui.header.setDepthActive(()=>"business001")}),x(()=>{e.ui.common.setRootClassName(),e.ui.header.setActive(),e.ui.header.setDepthActive()})}},N=g("div",{style:{height:"1500px",border:"10px dotted #666"}}," 스크롤 생기게 하기 위한 더미 ",-1);function S(e,A,H,M,$,D){const n=o("LocationBar"),c=o("PageTitle"),i=o("PageMainText"),r=o("PageSubText"),m=o("PageHead"),u=o("PageContents");return P(),f(u,{size:"full"},{head:t(()=>[a(n,{data:[{text:"홈",to:"/main/home"},{text:"1 뎁스 링크가 없는 경우"},{text:"2 뎁스",to:"/"},{text:"3 뎁스",to:"/"},{text:"4 뎁스",to:"/"},{text:"5 뎁스",to:"/"},{text:"6 뎁스",to:"/"}]})]),foot:t(()=>[s("contents foot")]),default:t(()=>[a(m,null,{default:t(()=>[a(c,null,{default:t(()=>[s("타이틀")]),_:1}),a(i,null,{default:t(()=>[s(" 메인 텍스트 메인 텍스트 메인 텍스트 메인 텍스트 ")]),_:1}),a(r,null,{default:t(()=>[s(" 서브 텍스트 서브 텍스트 서브 텍스트 서브 텍스트 서브 텍스트 서브 텍스트 서브 텍스트 서브 텍스트 ")]),_:1})]),_:1}),N]),_:1})}const q=d(L,[["render",S]]);export{q as default};
