import{_ as d,B as I,Z as B,o as h,b as T,Q as t,q as b,s as o,g,V as e,e as l,W as s}from"./index-0ca40496.js";import{P as x}from"./PageContents-131cde60.js";import{I as L}from"./IllustObject-29b7988e.js";import{I as k,a as C}from"./IllustInfoTitle-16a8dcec.js";import{I as w}from"./IllustInfoText-4d323244.js";import{B as y,a as N}from"./ButtonListItem-b1f6835b.js";import{B as P}from"./BottomSticky-889e7601.js";const S={components:{PageContents:x,IllustObject:L,IllustInfo:k,IllustInfoTitle:C,IllustInfoText:w,ButtonList:y,ButtonListItem:N,BasicButton:I,BottomSticky:P},setup(){const n={ui:{header:B()}};h(()=>{n.ui.header.setTitle(()=>"회원탈퇴"),n.ui.header.setLeftButtons(()=>["back"]),n.ui.header.setRightButtons(()=>[])}),T(()=>{n.ui.header.setTitle(),n.ui.header.setLeftButtons(),n.ui.header.setRightButtons()})}},V=l("br",null,null,-1),$=l("strong",null,"완료되었습니다",-1),j={class:"bottom-wrap"};function M(n,O,v,R,U,W){const a=t("IllustObject"),u=t("IllustInfoTitle"),c=t("IllustInfoText"),r=t("IllustInfo"),i=t("BasicButton"),_=t("ButtonListItem"),m=t("ButtonList"),f=t("BottomSticky"),p=t("PageContents");return g(),b(p,null,{foot:o(()=>[e(f,null,{default:o(()=>[l("div",j,[e(m,{classNames:{wrap:"row-margin-none"}},{default:o(()=>[e(_,null,{default:o(()=>[e(i,null,{default:o(()=>[s("확인")]),_:1})]),_:1})]),_:1})])]),_:1})]),default:o(()=>[e(r,null,{default:o(()=>[e(a,{type:"complete"}),e(u,null,{default:o(()=>[s(" 회원탈퇴가"),V,$]),_:1}),e(c,null,{default:o(()=>[s("하나캐피탈을 이용해 주셔서 감사합니다.")]),_:1})]),_:1})]),_:1})}const E=d(S,[["render",M]]);export{E as default};