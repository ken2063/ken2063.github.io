import{P as x}from"./PageContents-36fc532b.js";import{B as L}from"./BasicButton-c114d6f6.js";import{B as N,a as C}from"./ButtonListItem-20eeef64.js";import{S,a as h,P as E,A as T}from"./swiper-slide-276225ca.js";import{_ as w,U as H,i as I,r as g,o as U,l,g as b,x as y,w as e,q as a,e as t,n as _,B,h as V}from"./index-09d20b4d.js";import{P as O}from"./PopupButton-468eb017.js";import{M as z,a as A}from"./ModalPopupHead-d3a9d2e3.js";import{T as q}from"./TextButton-465efd7d.js";const u="/pub/hanacapital-dt-rebuild/pc/assets/box-detail-3-5d8a3cc7.png",G="_banner_awle4_19",j="_banner__block_awle4_22",D={"image-view":"_image-view_awle4_1","image-view--popup-full":"_image-view--popup-full_awle4_4","body-inner":"_body-inner_awle4_14",banner:G,banner__block:j,"banner-pagination":"_banner-pagination_awle4_34"},F={components:{Swiper:S,SwiperSlide:h,UiLayer:H,PopupButton:O,ModalPopup:z,ModalPopupHead:A,TextButton:q},setup(){const n=I({paginationEl:null}),o=g(null),r=g(null);return U(()=>{n.paginationEl=r.value}),{state:n,layer:o,pagination:r,modules:[E,T]}}},J=["alt"],K=["alt"],Q=["alt"],R=["alt"],W={class:"flex-box"},X={class:"flex-box__cell flex-1"},Y={class:"flex-box__cell flex-box__cell--regular"};function Z(n,o,r,c,P,v){const p=l("PopupButton"),d=l("ModalPopupHead"),i=l("SwiperSlide"),m=l("Swiper"),f=l("TextButton"),k=l("ModalPopup"),$=l("UiLayer");return b(),y($,{ref:"layer"},{default:e(M=>[a(k,{classNames:{bodyInner:n.$style["body-inner"]}},{head:e(()=>[a(d,null,{right:e(()=>[a(p,{onClick:s=>M.close()},null,8,["onClick"])]),_:2},1024)]),outerBottom:e(()=>[t("div",W,[t("div",X,[t("div",{ref:"pagination",class:_(n.$style["banner-pagination"])},null,2)]),t("div",Y,[a(f,{textSize:"regular",underline:!0,block:!0,classNames:{wrap:"color-white"}},{default:e(()=>[B(" 오늘 하루 보지 않기 ")]),_:1})])])]),default:e(()=>[t("div",{class:_(n.$style.banner)},[c.state.paginationEl?(b(),y(m,{key:0,modules:c.modules,pagination:{el:c.state.paginationEl,clickable:!0},autoHeight:!0},{default:e(()=>[a(i,null,{default:e(()=>[t("div",{class:_(n.$style.banner__block)},[t("img",{src:u,alt:"배너 설명 넣어주세요.",onError:o[0]||(o[0]=s=>{s.target.parentNode.classList.add("is-error")})},null,40,J)],2)]),_:1}),a(i,null,{default:e(()=>[t("a",{href:"",class:_(n.$style.banner__block)},[t("img",{src:u,alt:"배너 설명 넣어주세요.",onError:o[1]||(o[1]=s=>{s.target.parentNode.classList.add("is-error")})},null,40,K)],2)]),_:1}),a(i,null,{default:e(()=>[t("div",{class:_(n.$style.banner__block)},[t("img",{src:u,alt:"배너 설명 넣어주세요.",onError:o[2]||(o[2]=s=>{s.target.parentNode.classList.add("is-error")})},null,40,Q)],2)]),_:1}),a(i,null,{default:e(()=>[t("div",{class:_(n.$style.banner__block)},[t("img",{src:u,alt:"배너 설명 넣어주세요.",onError:o[3]||(o[3]=s=>{s.target.parentNode.classList.add("is-error")})},null,40,R)],2)]),_:1})]),_:1},8,["modules","pagination"])):V("",!0)],2)]),_:2},1032,["classNames"])]),_:1},512)}const ee={$style:D},ne=w(F,[["render",Z],["__cssModules",ee]]),te={components:{PageContents:x,BasicButton:L,ButtonList:N,ButtonListItem:C,Main_P01_l001:ne},setup(){const n=g(null);return{layer001:n,layer001Open:(r={})=>{n.value.layer.open(r.target)}}}},oe=t("br",null,null,-1);function ae(n,o,r,c,P,v){const p=l("BasicButton"),d=l("ButtonListItem"),i=l("ButtonList"),m=l("Main_P01_l001"),f=l("PageContents");return b(),y(f,null,{default:e(()=>[a(i,{classNames:{wrap:"row-margin-none"},align:"full"},{default:e(()=>[a(d,null,{default:e(()=>[a(p,{onClick:c.layer001Open},{default:e(()=>[B(" 공지팝업"),oe,B("Main_P01_l001 ")]),_:1},8,["onClick"])]),_:1})]),_:1}),a(m,{ref:"layer001"},null,512)]),_:1})}const de=w(te,[["render",ae]]);export{de as default};
