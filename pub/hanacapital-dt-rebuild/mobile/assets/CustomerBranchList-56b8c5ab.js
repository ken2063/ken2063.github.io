import{_ as w,U as C,P as T,z as P,A as K,r as F,Q as e,g as B,q as v,s as o,V as t,W as _,e as n,n as r,D as M,T as H,l as N,Z as U,o as E,b as R,d as A,f as D,F as O}from"./index-059b3cd0.js";import{P as S}from"./PageContents-26a955e0.js";import{F as z}from"./FormList-cbde6fcb.js";import{F as j}from"./FormListItem-15ea4fed.js";import{F as q,a as Q}from"./FormInvalidMessage-edc45528.js";import{I as W,a as Z}from"./InputBlockCell-88d63319.js";import{B as G}from"./BasicSelect-612e7462.js";import{K as J,a as X,b as Y,c as tt}from"./KeyValueText-cf3c5730.js";import{I as et}from"./dropdown-e1777569.js";import"./SelectButton-2a048f3b.js";import"./PopupTitle-1615bfeb.js";import"./ToastPopup-0ca28b9b.js";import"./ToastPopupHead-49b7de23.js";import"./check-l-c56f2b0c.js";const ot={"map-area":"_map-area_10jea_1"},at={components:{UiLayer:C,PopupButton:T,FullPopup:P,FullPopupHead:K,KeyValue:J,KeyValueItem:X,KeyValueTitle:Y,KeyValueText:tt},setup(){return{layer:F(null)}}},nt=n("h3",{class:"text-title-2"},"하나캐피탈 본점",-1),st=n("br",null,null,-1),rt=n("div",{style:{height:"100%","background-color":"lightgray"}}," // 지도 영역 ",-1),lt=[rt];function _t(a,s,c,l,m,x){const p=e("PopupButton"),b=e("FullPopupHead"),i=e("KeyValueTitle"),u=e("KeyValueText"),d=e("KeyValueItem"),f=e("KeyValue"),y=e("FullPopup"),g=e("UiLayer");return B(),v(g,{ref:"layer",type:"full"},{default:o(h=>[t(y,null,{head:o(()=>[t(b,null,{right:o(()=>[t(p,{onClick:I=>h.close()},null,8,["onClick"])]),_:2},1024)]),default:o(()=>[nt,t(f,{margin:"regular",classNames:{wrap:"row-margin-contents"}},{default:o(()=>[t(d,null,{default:o(()=>[t(i,null,{default:o(()=>[_("연락처")]),_:1}),t(u,null,{default:o(()=>[_("1800-1110")]),_:1})]),_:1}),t(d,null,{default:o(()=>[t(i,null,{default:o(()=>[_("주소")]),_:1}),t(u,null,{default:o(()=>[_(" 서울특별시 강남구 648-19"),st,_(" 하나금융그룹 강남사옥 20층 ")]),_:1})]),_:1})]),_:1}),n("div",{class:r(a.$style["map-area"])},lt,2)]),_:2},1024)]),_:1},512)}const ct={$style:ot},it=w(at,[["render",_t],["__cssModules",ct]]),ut="_board_8gwo2_1",dt="_board__list_8gwo2_4",mt="_board__item_8gwo2_9",pt="_board__link_8gwo2_20",bt="_board__title_8gwo2_12",ft="_board__text_8gwo2_54",yt="_board__sub_8gwo2_70",gt="_board__info_8gwo2_17",ht={board:ut,board__list:dt,board__item:mt,"board__item--mark":"_board__item--mark_8gwo2_12","board__title-text":"_board__title-text_8gwo2_12","board__item--hidden":"_board__item--hidden_8gwo2_16","board__info-item":"_board__info-item_8gwo2_17",board__link:pt,board__title:bt,board__text:ft,board__sub:yt,board__info:gt,"board__info-item--hits":"_board__info-item--hits_8gwo2_130"},Bt={components:{PageContents:S,FormList:z,FormListItem:j,FormInvalid:q,InputBlock:W,InputBlockCell:Z,BasicSelect:G,FormInvalidMessage:Q,BasicHr:M,TextButton:H,LayerCustomerBranchDetail:it,IconArrow:et},setup(){const a=N({branchError:!1}),s={ui:{header:U()}},c=F(null),l=(m={})=>{c.value.layer.open(m.target)};return E(()=>{s.ui.header.setTitle(()=>"지점안내"),s.ui.header.setLeftButtons(()=>["back"]),s.ui.header.setRightButtons(()=>[])}),R(()=>{s.ui.header.setTitle(),s.ui.header.setLeftButtons(),s.ui.header.setRightButtons()}),{state:a,layer:c,layerOpen:l}}},It={class:"inline-wrap align-center row-margin-contents"};function wt(a,s,c,l,m,x){const p=e("BasicSelect"),b=e("InputBlockCell"),i=e("InputBlock"),u=e("FormInvalidMessage"),d=e("FormInvalid"),f=e("FormListItem"),y=e("FormList"),g=e("BasicHr"),h=e("IconArrow"),I=e("TextButton"),k=e("LayerCustomerBranchDetail"),$=e("PageContents");return B(),v($,null,{default:o(()=>[t(y,null,{default:o(()=>[t(f,{titleText:"지역",target:"#customerBranchListRegionButton",selectOnly:!0},{default:o(()=>[t(d,{error:l.state.branchError},{default:o(()=>[t(i,{error:l.state.branchError},{default:o(()=>[t(b,{flexible:!0},{default:o(()=>[t(p,{option:[{value:"1",text:"전체"},{value:"2",text:"서울"},{value:"3",text:"경기"},{value:"4",text:"강원"},{value:"5",text:"충청"},{value:"6",text:"경상"},{value:"7",text:"전라"},{value:"8",text:"제주"}],buttonTitle:"지역 선택하기",layerTitle:"지역을 선택해 주세요",id:"customerBranchListRegion",buttonId:"customerBranchListRegionButton",defaultValue:"1"})]),_:1})]),_:1},8,["error"]),t(u,null,{default:o(()=>[_("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),t(g,{className:"row-margin-container-medium"}),n("div",{class:r(a.$style.board)},[n("ul",{class:r(a.$style.board__list)},[(B(),A(O,null,D(10,L=>n("li",{key:L,class:r(a.$style.board__item)},[n("button",{type:"button",class:r(a.$style.board__link),onClick:s[0]||(s[0]=(...V)=>l.layerOpen&&l.layerOpen(...V))},[n("span",{class:r(a.$style.board__title)},[n("span",{class:r(a.$style["board__title-text"])},"본사",2),n("span",{class:r(a.$style.board__sub)},"1800-1110",2)],2),n("span",{class:r(a.$style.board__text)}," 서울 강남구 테헤란로 127 하나금융그룹 (역삼동,강남사옥) ",2)],2)],2)),64))],2)],2),n("div",It,[t(I,{classNames:{wrap:"text-body-4 color-gray"}},{rightIcon:o(()=>[t(h)]),default:o(()=>[_(" 더보기 ")]),_:1})]),t(k,{ref:"layer"},null,512)]),_:1})}const Ft={$style:ht},Et=w(Bt,[["render",wt],["__cssModules",Ft]]);export{Et as default};