import{_ as f,E as P,o as g,b as B,l as t,x,w as e,g as h,q as o,B as n,e as L}from"./index-55dc959b.js";import{P as H}from"./PageContents-f716fc69.js";import{L as T}from"./LocationBar-64abe5b5.js";import{P as w,a as C}from"./PageTitle-96bdc852.js";import{P as M}from"./PageHeadRow-30007a37.js";import{P as S}from"./PageMainText-797540ac.js";import{S as v}from"./StepProgress-71a0202a.js";import{B as I}from"./BasicButton-672abef3.js";import{B as $,a as N}from"./ButtonListItem-019a78ac.js";const R={components:{PageContents:H,LocationBar:T,PageHead:w,PageHeadRow:M,PageTitle:C,PageMainText:S,StepProgress:v,BasicButton:I,ButtonList:$,ButtonListItem:N},setup(){const a={ui:{header:P()}};g(()=>{a.ui.header.setActive(()=>"onlineBranch")}),B(()=>{a.ui.header.setActive()})}},V=L("div",null,"// [공통 > 본인인증] 내용 노출",-1);function k(a,A,U,b,q,E){const s=t("LocationBar"),r=t("PageTitle"),c=t("StepProgress"),i=t("PageHeadRow"),_=t("PageMainText"),m=t("PageHead"),l=t("BasicButton"),u=t("ButtonListItem"),p=t("ButtonList"),d=t("PageContents");return h(),x(d,null,{head:e(()=>[o(s,{data:[{text:"홈",to:"/main/home"},{text:"온라인지점",to:"/"},{text:"계약정보"},{text:"지정운전자 등록",to:"/"}]})]),default:e(()=>[o(m,null,{default:e(()=>[o(i,null,{right:e(()=>[o(c,{total:4,current:3})]),default:e(()=>[o(r,{align:"left"},{default:e(()=>[n("지정운전자 등록")]),_:1})]),_:1}),o(_,{align:"left"},{default:e(()=>[n("본인인증을 진행해 주세요")]),_:1})]),_:1}),V,o(p,null,{default:e(()=>[o(u,null,{default:e(()=>[o(l,null,{default:e(()=>[n("다음")]),_:1})]),_:1})]),_:1})]),_:1})}const Q=f(R,[["render",k]]);export{Q as default};
