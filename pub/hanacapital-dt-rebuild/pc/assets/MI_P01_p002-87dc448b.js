import{_ as f,E as P,o as g,b as B,l as t,x,w as e,g as h,q as o,B as n,e as L}from"./index-47f0144b.js";import{P as H}from"./PageContents-eaa89b0e.js";import{L as T}from"./LocationBar-a33719b5.js";import{P as w,a as C}from"./PageTitle-32f3e12d.js";import{P as M}from"./PageHeadRow-8a0cce9e.js";import{P as S}from"./PageMainText-81e7fb66.js";import{S as v}from"./StepProgress-e6b4e8fc.js";import{B as I}from"./BasicButton-5b10203b.js";import{B as $,a as N}from"./ButtonListItem-c3f0c6e2.js";const R={components:{PageContents:H,LocationBar:T,PageHead:w,PageHeadRow:M,PageTitle:C,PageMainText:S,StepProgress:v,BasicButton:I,ButtonList:$,ButtonListItem:N},setup(){const a={ui:{header:P()}};g(()=>{a.ui.header.setActive(()=>"onlineBranch")}),B(()=>{a.ui.header.setActive()})}},V=L("div",null,"// [공통 > 본인인증] 내용 노출",-1);function k(a,A,U,b,q,E){const s=t("LocationBar"),r=t("PageTitle"),c=t("StepProgress"),i=t("PageHeadRow"),_=t("PageMainText"),m=t("PageHead"),l=t("BasicButton"),u=t("ButtonListItem"),p=t("ButtonList"),d=t("PageContents");return h(),x(d,null,{head:e(()=>[o(s,{data:[{text:"홈",to:"/main/home"},{text:"온라인지점",to:"/"},{text:"내정보관리"},{text:"비밀번호 변경",to:"/"}]})]),default:e(()=>[o(m,null,{default:e(()=>[o(i,null,{right:e(()=>[o(c,{total:3,current:2})]),default:e(()=>[o(r,{align:"left"},{default:e(()=>[n("비밀번호 변경")]),_:1})]),_:1}),o(_,{align:"left"},{default:e(()=>[n("본인인증을 진행해 주세요")]),_:1})]),_:1}),V,o(p,null,{default:e(()=>[o(u,null,{default:e(()=>[o(l,null,{default:e(()=>[n("다음")]),_:1})]),_:1})]),_:1})]),_:1})}const Q=f(R,[["render",k]]);export{Q as default};