import{_,D as l,E as g,o as P,b as f,l as t,x,w as e,g as h,q as a,B as s,e as T}from"./index-47f0144b.js";import{P as S}from"./PageContents-eaa89b0e.js";import{L as C}from"./LocationBar-a33719b5.js";import{P as b,a as B}from"./PageTitle-32f3e12d.js";import{P as H}from"./PageHeadRow-8a0cce9e.js";import{P as v}from"./PageMainText-81e7fb66.js";import{P as w}from"./PageSubText-e95ebbf3.js";import{S as L}from"./StepProgress-e6b4e8fc.js";const N={components:{PageContents:S,LocationBar:C,PageHead:b,PageHeadRow:H,PageTitle:B,PageMainText:v,PageSubText:w,StepProgress:L},setup(){const o={ui:{common:l(),header:g()}};P(()=>{o.ui.common.setRootClassName("page-optional-class"),o.ui.header.setActive(()=>"business"),o.ui.header.setDepthActive(()=>"business001")}),f(()=>{o.ui.common.setRootClassName(),o.ui.header.setActive(),o.ui.header.setDepthActive()})}},R=T("div",{style:{height:"1500px",border:"10px dotted #666"}}," 스크롤 생기게 하기 위한 더미 ",-1);function A(o,M,$,D,U,V){const n=t("LocationBar"),r=t("PageTitle"),c=t("StepProgress"),i=t("PageHeadRow"),m=t("PageMainText"),d=t("PageSubText"),p=t("PageHead"),u=t("PageContents");return h(),x(u,null,{head:e(()=>[a(n,{data:[{text:"홈",to:"/main/home"},{text:"1 뎁스 링크가 없는 경우"},{text:"2 뎁스",to:"/"},{text:"3 뎁스",to:"/"},{text:"4 뎁스",to:"/"},{text:"5 뎁스",to:"/"},{text:"6 뎁스",to:"/"}]})]),foot:e(()=>[s("contents foot")]),default:e(()=>[a(p,null,{default:e(()=>[a(i,null,{right:e(()=>[a(c,{total:5,current:2})]),default:e(()=>[a(r,{align:"left"},{default:e(()=>[s("타이틀")]),_:1})]),_:1}),a(m,{align:"left"},{default:e(()=>[s(" 메인 텍스트 메인 텍스트 메인 텍스트 메인 텍스트 ")]),_:1}),a(d,{align:"left"},{default:e(()=>[s(" 서브 텍스트 서브 텍스트 서브 텍스트 서브 텍스트 서브 텍스트 서브 텍스트 서브 텍스트 서브 텍스트 ")]),_:1})]),_:1}),R]),_:1})}const I=_(N,[["render",A]]);export{I as default};
