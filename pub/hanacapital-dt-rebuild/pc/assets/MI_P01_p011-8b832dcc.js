import{_ as d,E as p,o as B,b as f,l as t,x as P,w as e,g,q as o,B as a,e as s}from"./index-82fbfa1a.js";import{P as h}from"./PageContents-bfe4e6bc.js";import{L as x}from"./LocationBar-ae2ba5e0.js";import{P as L,a as C}from"./PageTitle-d5eca824.js";import{B as v}from"./BasicButton-4f3c34ae.js";import{B as H,a as I}from"./ButtonListItem-1c2230e0.js";const T={components:{PageContents:h,LocationBar:x,PageHead:L,PageTitle:C,BasicButton:v,ButtonList:H,ButtonListItem:I},setup(){const n={ui:{header:p()}};B(()=>{n.ui.header.setActive(()=>"onlineBranch")}),f(()=>{n.ui.header.setActive()})}},$=s("br",null,null,-1),N=s("div",null,"// [공통 > 본인인증] 내용 노출",-1);function V(n,b,k,w,A,M){const c=t("LocationBar"),r=t("PageTitle"),i=t("PageHead"),u=t("BasicButton"),_=t("ButtonListItem"),l=t("ButtonList"),m=t("PageContents");return g(),P(m,null,{head:e(()=>[o(c,{data:[{text:"홈",to:"/main/home"},{text:"온라인지점",to:"/"},{text:"내정보관리"},{text:"회원 탈퇴",to:"/"}]})]),default:e(()=>[o(i,null,{default:e(()=>[o(r,null,{default:e(()=>[a(" 하나캐피탈 회원탈퇴를 위해"),$,a(" 본인인증이 필요합니다 ")]),_:1})]),_:1}),N,o(l,null,{default:e(()=>[o(_,null,{default:e(()=>[o(u,null,{default:e(()=>[a("다음")]),_:1})]),_:1})]),_:1})]),_:1})}const z=d(T,[["render",V]]);export{z as default};
