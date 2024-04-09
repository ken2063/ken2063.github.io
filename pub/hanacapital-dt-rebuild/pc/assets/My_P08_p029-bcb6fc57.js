import{_ as x,E as P,o as B,b as h,l as o,x as w,w as e,g as L,q as a,B as s,e as t}from"./index-82fbfa1a.js";import{P as T}from"./PageContents-bfe4e6bc.js";import{L as N}from"./LocationBar-ae2ba5e0.js";import{P as b,a as y}from"./PageTitle-d5eca824.js";import{P as H}from"./PageHeadRow-6d77c4a4.js";import{P as C}from"./PageMainText-8c0e5f52.js";import{S as M}from"./StepProgress-7129bd2b.js";import{B as S}from"./BasicButton-4f3c34ae.js";import{B as v,a as $}from"./ButtonListItem-1c2230e0.js";import{N as I}from"./NoticeText-e579b8f4.js";const R={components:{PageContents:T,LocationBar:N,PageHead:b,PageHeadRow:H,PageTitle:y,PageMainText:C,StepProgress:M,BasicButton:S,ButtonList:v,ButtonListItem:$,NoticeText:I},setup(){const n={ui:{header:P()}};B(()=>{n.ui.header.setActive(()=>"onlineBranch")}),h(()=>{n.ui.header.setActive()})}},V=t("section",{class:"row-margin-container-medium"},[t("h3",{class:"text-body-1 row-margin-item-group"},"소유권 이전등록"),t("p",{class:"text-body-1"}," 이용자 명의 리스상품으로, 소유권 이전 등록 절차가 필요하지 않습니다. ")],-1),k={class:"row-margin-container-medium"},A=t("h3",{class:"text-body-1 row-margin-item-group"},"취득세",-1),U=t("p",{class:"text-body-1"},[s(" 리스차량 이용자는 "),t("span",{class:"color-red"},"리스 계약 종료일로부터 60일이내에 취득세(2%)를 신고 납부"),s("하여야 합니다. (자진신고납부)"),t("br"),s(" 불이행시 가산세를 포함한 금액으로 과세됩니다. ")],-1),q={class:"row-margin-container-medium"},E=t("h3",{class:"text-body-1 row-margin-item-group"},"저당해지",-1),j=t("p",{class:"text-body-1"},[s(" 리스 종료 이후, "),t("span",{class:"color-red"},"저당해지"),s("가 필요합니다. ")],-1);function z(n,D,F,G,J,K){const c=o("LocationBar"),i=o("PageTitle"),m=o("StepProgress"),_=o("PageHeadRow"),l=o("PageMainText"),d=o("PageHead"),r=o("NoticeText"),u=o("BasicButton"),p=o("ButtonListItem"),g=o("ButtonList"),f=o("PageContents");return L(),w(f,null,{head:e(()=>[a(c,{data:[{text:"홈",to:"/main/home"},{text:"온라인 지점",to:"/"},{text:"계약정보"},{text:"만기후처리"},{text:"구매 신청",to:"/"}]})]),default:e(()=>[a(d,null,{default:e(()=>[a(_,null,{right:e(()=>[a(m,{total:3,current:1})]),default:e(()=>[a(i,{align:"left"},{default:e(()=>[s("만기후처리 구매 신청")]),_:1})]),_:1}),a(l,{align:"left"},{default:e(()=>[s("구매 유의사항을 확인해 주세요")]),_:1})]),_:1}),t("div",null,[V,t("section",k,[A,U,a(r,{classNames:{wrap:"row-margin-item-medium"}},{default:e(()=>[s(" 지방세법 제15조(세율의특례)제2항제8호 및 같은법시행령 제30조 제2항 제4호에 의거 ")]),_:1})]),t("section",q,[E,j,a(r,{classNames:{wrap:"row-margin-item-medium"}},{default:e(()=>[s("저당해지문의(대표번호) 1800-1110")]),_:1})])]),a(g,null,{default:e(()=>[a(p,null,{default:e(()=>[a(u,null,{default:e(()=>[s("네, 모두 확인했습니다")]),_:1})]),_:1})]),_:1})]),_:1})}const st=x(R,[["render",z]]);export{st as default};