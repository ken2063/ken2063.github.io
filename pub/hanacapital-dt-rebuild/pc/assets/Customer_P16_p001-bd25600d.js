import{_ as p,E as B,o as f,b as g,l as t,x as P,w as e,g as h,q as o,B as n,e as s}from"./index-89ea90fd.js";import{P as x}from"./PageContents-f8dfd722.js";import{L}from"./LocationBar-c816b7b5.js";import{P as T,a as v}from"./PageTitle-af1154e1.js";import{P as C}from"./PageMainText-de0a32a5.js";import{B as w,a as A}from"./ButtonListItem-7021a724.js";import{B as H}from"./BasicButton-9f8538fd.js";const M={components:{PageContents:x,LocationBar:L,PageHead:T,PageTitle:v,PageMainText:C,ButtonList:w,ButtonListItem:A,BasicButton:H},setup(){const a={ui:{header:B()}};f(()=>{a.ui.header.setActive(()=>"customer"),a.ui.header.setDepthActive(()=>"customer008")}),g(()=>{a.ui.header.setActive(),a.ui.header.setDepthActive()})}},N=s("br",null,null,-1),$=s("div",null,"// [공통 > 본인인증] 내용 노출",-1);function I(a,V,b,k,D,U){const c=t("LocationBar"),r=t("PageTitle"),i=t("PageMainText"),u=t("PageHead"),_=t("BasicButton"),l=t("ButtonListItem"),m=t("ButtonList"),d=t("PageContents");return h(),P(d,null,{head:e(()=>[o(c,{data:[{text:"홈",to:"/main/home"},{text:"고객센터",to:"/"},{text:"그룹사간 고객정보 제공내역 조회",to:"/"}]})]),default:e(()=>[o(u,null,{default:e(()=>[o(r,null,{default:e(()=>[n(" 그룹사간 고객정보 제공내역 조회를 위해"),N,n(" 본인인증이 필요합니다 ")]),_:1}),o(i,{align:"center",classNames:{wrap:"text-title-2 font-weight-regular"}},{default:e(()=>[n(" 증금융지주사법 제48조의 2에 따라 하나금융그룹 내 관계사에 고객정보가 제공되는 현황을 조회할 수 있습니다. ")]),_:1})]),_:1}),$,o(m,null,{default:e(()=>[o(l,null,{default:e(()=>[o(_,null,{default:e(()=>[n("다음")]),_:1})]),_:1})]),_:1})]),_:1})}const G=p(M,[["render",I]]);export{G as default};
