import{_ as f,X as B,B as g,Z as h,o as P,b as x,Q as o,q as T,s as t,g as b,V as e,e as c,W as s}from"./index-0ca40496.js";import{P as I}from"./PageContents-131cde60.js";import{P as L}from"./PageTextGroup-692d5231.js";import{P as S}from"./PageSubText-82bbb03d.js";import{I as k}from"./IllustObject-29b7988e.js";import{B as y,a as M}from"./ButtonListItem-b1f6835b.js";import{B as w}from"./BottomSticky-889e7601.js";const C={components:{PageContents:I,PageTextGroup:L,PageMainText:B,PageSubText:S,IllustObject:k,BasicButton:g,ButtonList:y,ButtonListItem:M,BottomSticky:w},setup(){const n={ui:{header:h()}};P(()=>{n.ui.header.setTitle(()=>"회원탈퇴"),n.ui.header.setLeftButtons(()=>["back"]),n.ui.header.setRightButtons(()=>[])}),x(()=>{n.ui.header.setTitle(),n.ui.header.setLeftButtons(),n.ui.header.setRightButtons()})}},N=c("br",null,null,-1),V={class:"bottom-wrap"};function $(n,j,G,O,q,v){const r=o("PageMainText"),l=o("PageSubText"),i=o("PageTextGroup"),_=o("IllustObject"),a=o("BasicButton"),u=o("ButtonListItem"),m=o("ButtonList"),p=o("BottomSticky"),d=o("PageContents");return b(),T(d,null,{foot:t(()=>[e(p,null,{default:t(()=>[c("div",V,[e(m,{classNames:{wrap:"row-margin-none"}},{default:t(()=>[e(u,null,{default:t(()=>[e(a,{line:!0,theme:"quaternary"},{default:t(()=>[s("취소")]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(a,null,{default:t(()=>[s("네, 탈퇴하겠습니다")]),_:1})]),_:1})]),_:1})])]),_:1})]),default:t(()=>[e(i,null,{default:t(()=>[e(r,null,{default:t(()=>[s(" 회원탈퇴를"),N,s(" 하시겠어요? ")]),_:1}),e(l,null,{default:t(()=>[s("본인인증이 완료되면 회원탈퇴가 완료됩니다.")]),_:1})]),_:1}),e(_,{type:"accountDelete"})]),_:1})}const Z=f(C,[["render",$]]);export{Z as default};
