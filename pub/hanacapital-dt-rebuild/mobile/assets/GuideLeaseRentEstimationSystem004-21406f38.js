import{P as E}from"./PageContents-131cde60.js";import{_ as y,U,B,D as v,r as L,Q as o,g,q as x,s as t,V as e,W as n,e as a}from"./index-0ca40496.js";import{B as T,a as V}from"./ButtonListItem-b1f6835b.js";import{T as H}from"./ToastPopup-c9597c27.js";import{T as k}from"./ToastPopupHead-ec63cede.js";import{P as N}from"./PopupTitle-05b32b8e.js";import{K as R,a as S,b as O,c as X}from"./KeyValueText-f2ef9aed.js";import{C as q}from"./CarEmblem-59dc401e.js";const D={components:{UiLayer:U,ToastPopup:H,ToastPopupHead:k,PopupTitle:N,KeyValue:R,KeyValueItem:S,KeyValueTitle:O,KeyValueText:X,BasicButton:B,ButtonList:T,ButtonListItem:V,BasicHr:v,CarEmblem:q},setup(){return{layer:L(null)}}},G={class:"flex-box row-margin-small"},M={class:"flex-box__cell"},Q=a("div",{class:"flex-box__cell flex-box__cell--small"},[a("p",{class:"text-body-4 font-weight-light"},"2015년식")],-1),W=a("h3",{class:"text-body-1 font-weight-medium"},"11가1111",-1),Y=a("p",{class:"text-body-4 color-gray row-margin-small"}," 뉴 카니발(YP) 3.0 가솔린 9인승 노블레스 ",-1);function j(l,d,_,f,h,C){const r=o("PopupTitle"),m=o("ToastPopupHead"),i=o("CarEmblem"),p=o("BasicHr"),s=o("KeyValueTitle"),u=o("KeyValueText"),c=o("KeyValueItem"),P=o("KeyValue"),b=o("BasicButton"),K=o("ButtonListItem"),w=o("ButtonList"),$=o("ToastPopup"),I=o("UiLayer");return g(),x(I,{ref:"layer",type:"toast",backgroundClose:!0},{default:t(()=>[e($,null,{head:t(()=>[e(m,null,{default:t(()=>[e(r,null,{default:t(()=>[n("차량정보를 확인해 주세요")]),_:1})]),_:1})]),foot:t(()=>[e(w,{classNames:{wrap:"row-margin-none"}},{default:t(()=>[e(K,null,{default:t(()=>[e(b,null,{default:t(()=>[n("확인")]),_:1})]),_:1})]),_:1})]),default:t(()=>[a("div",null,[a("div",G,[a("div",M,[e(i,{src:"/images/_dummy/car-emblem.png",name:"현대"})]),Q]),W,Y]),e(p,{class:"row-margin-contents-small",theme:"quaternary",type:"contents"}),e(P,{margin:"regular"},{default:t(()=>[e(c,null,{default:t(()=>[e(s,null,{default:t(()=>[n("배기량")]),_:1}),e(u,null,{default:t(()=>[n("정보없음")]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(s,null,{default:t(()=>[n("전손/침수/도난")]),_:1}),e(u,null,{default:t(()=>[n("X / X / X")]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(s,null,{default:t(()=>[n("사고이력(내차 피해)")]),_:1}),e(u,null,{default:t(()=>[n("0회 / 0회")]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(s,null,{default:t(()=>[n("사고이력(타차 피해)")]),_:1}),e(u,null,{default:t(()=>[n("0회 / 0회")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},512)}const z=y(D,[["render",j]]),A={components:{PageContents:E,BasicButton:B,ButtonList:T,ButtonListItem:V,LayerLeaseRentEstimationSystemUsedLeaseConfirm:z},setup(){const l=L(null);return{layer001:l,layer001Open:(_={})=>{l.value.layer.open(_.target)}}}},F=a("br",null,null,-1);function J(l,d,_,f,h,C){const r=o("BasicButton"),m=o("ButtonListItem"),i=o("ButtonList"),p=o("LayerLeaseRentEstimationSystemUsedLeaseConfirm"),s=o("PageContents");return g(),x(s,null,{default:t(()=>[e(i,{classNames:{wrap:"row-margin-none"},align:"full"},{default:t(()=>[e(m,null,{default:t(()=>[e(r,{onClick:f.layer001Open},{default:t(()=>[n(" 차량정보 조회 팝업"),F,n("LR_M03_l002 ")]),_:1},8,["onClick"])]),_:1})]),_:1}),e(p,{ref:"layer001"},null,512)]),_:1})}const ut=y(A,[["render",J]]);export{ut as default};