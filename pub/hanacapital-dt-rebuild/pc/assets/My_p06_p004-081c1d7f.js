import{_ as d,E as B,o as x,b as h,l as t,x as L,w as o,g as T,q as e,B as n,e as a}from"./index-09d20b4d.js";import{P as b}from"./PageContents-36fc532b.js";import{L as N}from"./LocationBar-12d983fe.js";import{I as g,a as w}from"./IllustInfoTitle-746b3bd8.js";import{I as C}from"./IllustObject-93e2b4c7.js";import{I as P}from"./IllustInfoText-4a25035b.js";import{B as $,a as j}from"./ButtonListItem-20eeef64.js";import{B as k}from"./BasicButton-c114d6f6.js";import{N as v}from"./NoticeText-152a1b30.js";const O={components:{PageContents:b,LocationBar:N,IllustInfo:g,IllustObject:C,IllustInfoTitle:w,IllustInfoText:P,ButtonList:$,ButtonListItem:j,BasicButton:k,NoticeText:v},setup(){const s={ui:{header:B()}};x(()=>{s.ui.header.setActive(()=>"onlineBranch")}),h(()=>{s.ui.header.setActive()})}},V=a("br",null,null,-1),y=a("br",null,null,-1),A=a("br",null,null,-1);function M(s,U,q,E,H,S){const l=t("LocationBar"),c=t("IllustObject"),u=t("IllustInfoTitle"),r=t("IllustInfoText"),_=t("IllustInfo"),i=t("BasicButton"),m=t("ButtonListItem"),p=t("ButtonList"),f=t("NoticeText"),I=t("PageContents");return T(),L(I,null,{head:o(()=>[e(l,{data:[{text:"홈",to:"/main/home"},{text:"온라인 지점",to:"/"},{text:"계약정보"},{text:"청약철회권 신청",to:"/"}]})]),default:o(()=>[e(_,null,{default:o(()=>[e(c,{type:"complete"}),e(u,null,{default:o(()=>[n("청약철회 신청이 완료되었습니다")]),_:1}),e(r,null,{default:o(()=>[n(" 금일 17시 이내로 상환금액을 입금해 주시면"),V,n(" 청약철회 후 문자로 안내 드리겠습니다."),y,n(" 감사합니다. ")]),_:1})]),_:1}),e(p,{wrap:!0,align:"center"},{default:o(()=>[e(m,null,{default:o(()=>[e(i,null,{default:o(()=>[n("확인")]),_:1})]),_:1})]),_:1}),e(f,{classNames:{wrap:"row-margin-block"}},{default:o(()=>[n(" 당일 철회완료 문자를 받지 못하셨거나 기타 문의는 고객센터(1800-1110)로 연락바랍니다."),A,n(" (상담가능시간 : 평일 09~18시) ")]),_:1})]),_:1})}const X=d(O,[["render",M]]);export{X as default};