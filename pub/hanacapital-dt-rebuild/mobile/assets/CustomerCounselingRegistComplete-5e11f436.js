import{_ as p,B as I,Z as B,o as h,b as g,Q as t,q as b,s as o,g as T,V as e,e as l,W as s}from"./index-059b3cd0.js";import{P as x}from"./PageContents-26a955e0.js";import{I as C}from"./IllustObject-b76bb200.js";import{I as L,a as k}from"./IllustInfoTitle-30602fbd.js";import{I as w}from"./IllustInfoText-2e47e5a0.js";import{B as y,a as N}from"./ButtonListItem-8a7855a8.js";import{B as P}from"./BottomSticky-bdaba37a.js";const S={components:{PageContents:x,IllustObject:C,IllustInfo:L,IllustInfoTitle:k,IllustInfoText:w,BasicButton:I,ButtonList:y,ButtonListItem:N,BottomSticky:P},setup(){const n={ui:{header:B()}};h(()=>{n.ui.header.setTitle(()=>"고객상담"),n.ui.header.setLeftButtons(()=>["back"]),n.ui.header.setRightButtons(()=>[])}),g(()=>{n.ui.header.setTitle(),n.ui.header.setLeftButtons(),n.ui.header.setRightButtons()})}},V=l("br",null,null,-1),$=l("strong",null,"완료되었습니다",-1),j=l("br",null,null,-1),O=l("br",null,null,-1),R={class:"bottom-wrap"};function v(n,U,q,H,M,Q){const u=t("IllustObject"),a=t("IllustInfoTitle"),c=t("IllustInfoText"),i=t("IllustInfo"),r=t("BasicButton"),_=t("ButtonListItem"),m=t("ButtonList"),f=t("BottomSticky"),d=t("PageContents");return T(),b(d,null,{foot:o(()=>[e(f,null,{default:o(()=>[l("div",R,[e(m,{classNames:{wrap:"row-margin-none"}},{default:o(()=>[e(_,null,{default:o(()=>[e(r,null,{default:o(()=>[s("확인")]),_:1})]),_:1})]),_:1})])]),_:1})]),default:o(()=>[e(i,null,{default:o(()=>[e(u,{type:"complete"}),e(a,null,{default:o(()=>[s(" 상담등록이"),V,$]),_:1}),e(c,null,{default:o(()=>[s(" 고객님 감사합니다. 문의하신 사항에 대해서는"),j,s(" 빠른 시일 내에 답변 드리겠습니다."),O,s(" (상담가능시간 : 평일 09-18시) ")]),_:1})]),_:1})]),_:1})}const G=p(S,[["render",v]]);export{G as default};