import{_ as d,E as p,o as B,b as f,l as t,x as P,w as e,g,q as o,B as a,e as s}from"./index-47f0144b.js";import{P as h}from"./PageContents-eaa89b0e.js";import{L as x}from"./LocationBar-a33719b5.js";import{P as L,a as C}from"./PageTitle-32f3e12d.js";import{B as v}from"./BasicButton-5b10203b.js";import{B as H,a as I}from"./ButtonListItem-c3f0c6e2.js";const T={components:{PageContents:h,LocationBar:x,PageHead:L,PageTitle:C,BasicButton:v,ButtonList:H,ButtonListItem:I},setup(){const n={ui:{header:p()}};B(()=>{n.ui.header.setActive(()=>"onlineBranch")}),f(()=>{n.ui.header.setActive()})}},$=s("br",null,null,-1),N=s("div",null,"// [공통 > 본인인증] 내용 노출",-1);function V(n,b,k,w,A,M){const c=t("LocationBar"),r=t("PageTitle"),i=t("PageHead"),u=t("BasicButton"),_=t("ButtonListItem"),l=t("ButtonList"),m=t("PageContents");return g(),P(m,null,{head:e(()=>[o(c,{data:[{text:"홈",to:"/main/home"},{text:"온라인지점",to:"/"},{text:"내정보관리"},{text:"회원 탈퇴",to:"/"}]})]),default:e(()=>[o(i,null,{default:e(()=>[o(r,null,{default:e(()=>[a(" 하나캐피탈 회원탈퇴를 위해"),$,a(" 본인인증이 필요합니다 ")]),_:1})]),_:1}),N,o(l,null,{default:e(()=>[o(_,null,{default:e(()=>[o(u,null,{default:e(()=>[a("다음")]),_:1})]),_:1})]),_:1})]),_:1})}const z=d(T,[["render",V]]);export{z as default};
