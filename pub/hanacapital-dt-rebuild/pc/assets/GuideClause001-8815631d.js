import{P as x}from"./PageContents-eaa89b0e.js";import{B as P}from"./BasicButton-5b10203b.js";import{B as C,a as L}from"./ButtonListItem-c3f0c6e2.js";import{_ as y,U as M,r as g,l as o,g as m,x as i,w as t,q as e,B as a,h as N,e as U}from"./index-47f0144b.js";import{P as T}from"./PopupTitle-c22c4d9d.js";import{P as V}from"./PopupButton-3272a5cd.js";import{M as v,a as H}from"./ModalPopupHead-998e1ce5.js";import{I as O}from"./IframeContents-5844f874.js";const q="/",z={components:{UiLayer:M,PopupTitle:T,PopupButton:V,ModalPopup:v,ModalPopupHead:H,BasicButton:P,ButtonList:C,ButtonListItem:L,IframeContents:O},setup(){const n=g(null);return{BASE_URL:q,layer:n}}};function A(n,d,l,r,h,$){const u=o("PopupButton"),c=o("PopupTitle"),_=o("ModalPopupHead"),p=o("IframeContents"),s=o("BasicButton"),f=o("ButtonListItem"),I=o("ButtonList"),k=o("ModalPopup"),w=o("UiLayer");return m(),i(w,{ref:"layer"},{default:t(B=>[B.display!=="none"?(m(),i(k,{key:0},{head:t(()=>[e(_,null,{right:t(()=>[e(u,{onClick:G=>B.close()},null,8,["onClick"])]),default:t(()=>[e(c,{classNames:{title:"ellipsis"}},{default:t(()=>[a("약관 타이틀")]),_:1})]),_:2},1024)]),foot:t(()=>[e(I,{wrap:!0,align:"center",classNames:{wrap:"row-margin-none"}},{default:t(()=>[e(f,null,{default:t(()=>[e(s,{size:"regular",line:!0,theme:"quaternary"},{default:t(()=>[a("Button 1")]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(s,{size:"regular"},{default:t(()=>[a("Button 2")]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(p,{url:`${r.BASE_URL}legacy/html/clause-detail.html`,id:"clauseDetailframe"},null,8,["url"])]),_:2},1024)):N("",!0)]),_:1},512)}const E=y(z,[["render",A]]),R={components:{PageContents:x,BasicButton:P,ButtonList:C,ButtonListItem:L,Common_P00_l001:E},setup(){const n=g(null);return{layer001:n,layer001Open:(l={})=>{n.value.layer.open(l.target)}}}},b=U("br",null,null,-1);function D(n,d,l,r,h,$){const u=o("BasicButton"),c=o("ButtonListItem"),_=o("ButtonList"),p=o("Common_P00_l001"),s=o("PageContents");return m(),i(s,null,{default:t(()=>[e(_,{classNames:{wrap:"row-margin-none"},align:"full"},{default:t(()=>[e(c,null,{default:t(()=>[e(u,{onClick:r.layer001Open},{default:t(()=>[a(" 약관동의_상세"),b,a("Common_P00_l001 ")]),_:1},8,["onClick"])]),_:1})]),_:1}),e(p,{ref:"layer001"},null,512)]),_:1})}const Y=y(R,[["render",D]]);export{Y as default};