import{P as g}from"./PageContents-131cde60.js";import{_ as f,U as w,B as d,r as B,Q as e,g as y,q as P,s as t,V as o,W as n,e as _}from"./index-0ca40496.js";import{B as h,a as L}from"./ButtonListItem-b1f6835b.js";import{T as x}from"./ToastPopup-c9597c27.js";import{T as C}from"./ToastPopupHead-ec63cede.js";import{P as k}from"./PopupTitle-05b32b8e.js";import{P as N}from"./PopupText-bcbfadfd.js";const W={components:{UiLayer:w,ToastPopup:x,ToastPopupHead:C,PopupTitle:k,BasicButton:d,ButtonList:h,ButtonListItem:L,PopupText:N},setup(){return{layer:B(null)}}},U=_("br",null,null,-1),V=_("br",null,null,-1);function A(a,i,l,m,T,I){const u=e("PopupTitle"),p=e("ToastPopupHead"),c=e("PopupText"),s=e("BasicButton"),r=e("ButtonListItem"),M=e("ButtonList"),$=e("ToastPopup"),b=e("UiLayer");return y(),P(b,{ref:"layer",type:"toast",backgroundClose:!0},{default:t(()=>[o($,null,{head:t(()=>[o(p,null,{default:t(()=>[o(u,null,{default:t(()=>[n("하나캐피탈 멤버십을 탈퇴하시겠어요?")]),_:1})]),_:1})]),foot:t(()=>[o(M,{classNames:{wrap:"row-margin-none"}},{default:t(()=>[o(r,null,{default:t(()=>[o(s,{line:!0,theme:"quaternary"},{default:t(()=>[n("아니오")]),_:1})]),_:1}),o(r,null,{default:t(()=>[o(s,null,{default:t(()=>[n("네")]),_:1})]),_:1})]),_:1})]),default:t(()=>[o(c,null,{default:t(()=>[n(" 하나캐피탈 멤버십을 탈퇴하면"),U,n(" 이용중인 서비스가 모두 중단됩니다."),V,n(" 다시 한 번 신중하게 생각해 주세요. ")]),_:1})]),_:1})]),_:1},512)}const H=f(W,[["render",A]]),O={components:{PageContents:g,BasicButton:d,ButtonList:h,ButtonListItem:L,LayerMyInfoWithdrawMembershipAlert:H},setup(){const a=B(null);return{layer001:a,layer001Open:(l={})=>{a.value.layer.open(l.target)}}}},q=_("br",null,null,-1);function v(a,i,l,m,T,I){const u=e("BasicButton"),p=e("ButtonListItem"),c=e("ButtonList"),s=e("LayerMyInfoWithdrawMembershipAlert"),r=e("PageContents");return y(),P(r,null,{default:t(()=>[o(c,{classNames:{wrap:"row-margin-none"},align:"full"},{default:t(()=>[o(p,null,{default:t(()=>[o(u,{onClick:m.layer001Open},{default:t(()=>[n(" 탈퇴 안내"),q,n("MI_M01_b007 ")]),_:1},8,["onClick"])]),_:1})]),_:1}),o(s,{ref:"layer001"},null,512)]),_:1})}const J=f(O,[["render",v]]);export{J as default};
