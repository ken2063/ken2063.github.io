import{_ as p,B as I,Z as B,o as h,b,Q as e,q as L,s as t,g as T,V as o,e as l,W as s}from"./index-0ca40496.js";import{P as g}from"./PageContents-131cde60.js";import{I as x,a as k}from"./IllustInfoTitle-16a8dcec.js";import{I as y}from"./IllustInfoText-4d323244.js";import{I as C}from"./IllustObject-29b7988e.js";import{B as w,a as N}from"./ButtonListItem-b1f6835b.js";import{B as P}from"./BottomSticky-889e7601.js";const S={components:{PageContents:g,IllustInfo:x,IllustInfoTitle:k,IllustInfoText:y,IllustObject:C,ButtonList:w,ButtonListItem:N,BasicButton:I,BottomSticky:P},setup(){const n={ui:{header:B()}};h(()=>{n.ui.header.setTitle(()=>"서류등록"),n.ui.header.setLeftButtons(()=>["back"]),n.ui.header.setRightButtons(()=>[])}),b(()=>{n.ui.header.setTitle(),n.ui.header.setLeftButtons(),n.ui.header.setRightButtons()})}},V=l("br",null,null,-1),$=l("strong",null,"완료되었습니다",-1),j=l("br",null,null,-1),O=l("br",null,null,-1),q=l("br",null,null,-1),v={class:"bottom-wrap"};function M(n,R,U,A,D,H){const c=e("IllustObject"),r=e("IllustInfoTitle"),_=e("IllustInfoText"),i=e("IllustInfo"),u=e("BasicButton"),a=e("ButtonListItem"),m=e("ButtonList"),d=e("BottomSticky"),f=e("PageContents");return T(),L(f,null,{foot:t(()=>[o(d,null,{default:t(()=>[l("div",v,[o(m,{classNames:{wrap:"row-margin-none"}},{default:t(()=>[o(a,null,{default:t(()=>[o(u,{line:!0,theme:"quaternary"},{default:t(()=>[s("홈으로")]),_:1})]),_:1}),o(a,null,{default:t(()=>[o(u,null,{default:t(()=>[s("서류등록 내역 확인")]),_:1})]),_:1})]),_:1})])]),_:1})]),default:t(()=>[o(i,null,{default:t(()=>[o(c,{type:"complete"}),o(r,null,{default:t(()=>[s(" 서류 등록이 "),V,$]),_:1}),o(_,null,{default:t(()=>[s(" 접수하신 서류를 확인하여 빠른 시일 내에"),j,s(" 답변 드리겠습니다."),O,s(" (단, 토요일 및 공휴일에 신청하신 경우,"),q,s(" 연락이 지연될 수 있으니 양해 바랍니다.) ")]),_:1})]),_:1})]),_:1})}const J=p(S,[["render",M]]);export{J as default};