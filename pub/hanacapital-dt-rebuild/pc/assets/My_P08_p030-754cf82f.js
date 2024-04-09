import{_ as K,E as k,i as N,o as C,b as H,l as s,x as E,w as t,g as S,q as e,B as a,e as o,n}from"./index-09d20b4d.js";import{P as D}from"./PageContents-36fc532b.js";import{L as R}from"./LocationBar-12d983fe.js";import{P as A,a as U}from"./PageTitle-73899e08.js";import{P as q}from"./PageHeadRow-e9de67a2.js";import{P as z}from"./PageMainText-e5e373b9.js";import{S as j}from"./StepProgress-a673e169.js";import{B as G}from"./BasicButton-c114d6f6.js";import{B as J,a as O}from"./ButtonListItem-20eeef64.js";import{B as Q}from"./BasicBox-ccb699cd.js";import{K as W,a as X,b as Y,c as Z}from"./KeyValueText-22ab1718.js";import{F as tt,a as et}from"./FormListItem-a5180354.js";import{F as st}from"./FormInvalid-fdd8697f.js";import{F as at}from"./FormInvalidMessage-df5a6726.js";import{I as ot,a as lt}from"./InputBlockCell-7eb1eb54.js";import{B as nt}from"./BasicDatepicker-59705bf8.js";import{N as it}from"./NoticeText-152a1b30.js";import"./calendar-3be30ddc.js";import"./text-delete-603f2948.js";const rt={"basic-list":"_basic-list_33gnr_1","basic-list__item":"_basic-list__item_33gnr_7","basic-list__symbol":"_basic-list__symbol_33gnr_26","basic-list__content":"_basic-list__content_33gnr_80","basic-list--regular":"_basic-list--regular_33gnr_85","basic-list--medium":"_basic-list--medium_33gnr_96","basic-list--regular-margin":"_basic-list--regular-margin_33gnr_110","basic-list--normal-margin":"_basic-list--normal-margin_33gnr_113","basic-list--small-margin":"_basic-list--small-margin_33gnr_116"},_t={components:{PageContents:D,LocationBar:R,PageHead:A,PageHeadRow:q,PageTitle:U,PageMainText:z,StepProgress:j,BasicButton:G,ButtonList:J,ButtonListItem:O,BasicBox:Q,KeyValue:W,KeyValueItem:X,KeyValueTitle:Y,KeyValueText:Z,FormList:tt,FormListItem:et,FormInvalid:st,FormInvalidMessage:at,InputBlock:ot,InputBlockCell:lt,BasicDatepicker:nt,NoticeText:it},setup(){const l={ui:{header:k()}},c=N({dateError:!1});return C(()=>{l.ui.header.setActive(()=>"onlineBranch")}),H(()=>{l.ui.header.setActive()}),{state:c}}},ct=o("span",{class:"color-red"},"계약 종료일로부터 60일이내에 취득세(2%)를 신고 납부",-1),mt=o("span",{class:"color-red"},"저당해지",-1),ut={class:"row-margin-block-small"},dt=o("h3",{class:"text-title-1 row-margin-contents"},"정산 정보",-1),pt=o("br",null,null,-1);function ft(l,c,bt,m,Bt,yt){const f=s("LocationBar"),g=s("PageTitle"),b=s("StepProgress"),B=s("PageHeadRow"),y=s("PageMainText"),P=s("PageHead"),i=s("KeyValueTitle"),r=s("KeyValueText"),_=s("KeyValueItem"),u=s("KeyValue"),d=s("BasicBox"),I=s("BasicDatepicker"),v=s("InputBlockCell"),h=s("InputBlock"),w=s("FormInvalidMessage"),T=s("FormInvalid"),L=s("FormListItem"),F=s("FormList"),p=s("NoticeText"),V=s("BasicButton"),$=s("ButtonListItem"),x=s("ButtonList"),M=s("PageContents");return S(),E(M,null,{head:t(()=>[e(f,{data:[{text:"홈",to:"/main/home"},{text:"온라인 지점",to:"/"},{text:"계약정보"},{text:"만기후처리"},{text:"구매 신청",to:"/"}]})]),default:t(()=>[e(P,null,{default:t(()=>[e(B,null,{right:t(()=>[e(b,{total:3,current:2})]),default:t(()=>[e(g,{align:"left"},{default:t(()=>[a("만기후처리 구매 신청")]),_:1})]),_:1}),e(y,{align:"left"},{default:t(()=>[a("구매 정보를 확인해 주세요")]),_:1})]),_:1}),o("div",null,[o("ul",{class:n([l.$style["basic-list"],l.$style["basic-list--regular"],l.$style["basic-list--regular-margin"]])},[o("li",{class:n([l.$style["basic-list__item"],"font-weight-regular"])},[o("div",{class:n(l.$style["basic-list__symbol"])},null,2),o("div",{class:n(l.$style["basic-list__content"])}," 이용자 명의 리스상품으로, 소유권 이전 등록 절차가 필요하지 않습니다. ",2)],2),o("li",{class:n([l.$style["basic-list__item"],"font-weight-regular"])},[o("div",{class:n(l.$style["basic-list__symbol"])},null,2),o("div",{class:n(l.$style["basic-list__content"])},[a(" 취득세가 발생됩니다. 리스차량 이용자는 리스 "),ct,a("하여야 합니다. 불이행시 가산세를 포함한 금액으로 과세됩니다. ")],2)],2),o("li",{class:n([l.$style["basic-list__item"],"font-weight-regular"])},[o("div",{class:n(l.$style["basic-list__symbol"])},null,2),o("div",{class:n(l.$style["basic-list__content"])},[a(" 리스 종료 이후, "),mt,a("가 필요합니다. ")],2)],2)],2),o("section",ut,[dt,o("div",null,[e(d,null,{default:t(()=>[e(u,{wrap:!0},{default:t(()=>[e(_,null,{default:t(()=>[e(i,null,{default:t(()=>[a("정산금액")]),_:1}),e(r,null,{default:t(()=>[a("99,999,999 원")]),_:1})]),_:1}),e(_,null,{default:t(()=>[e(i,null,{default:t(()=>[a("입금계좌번호")]),_:1}),e(r,null,{default:t(()=>[a(" 하나"),pt,a(" 21556-412-94556 ")]),_:1})]),_:1})]),_:1})]),_:1}),e(F,{classNames:{wrap:"row-margin-contents"}},{default:t(()=>[e(L,{titleText:"입금예약일자",target:"#My_P08_p030_dateButton"},{default:t(()=>[e(T,{error:m.state.dateError},{default:t(()=>[e(h,{error:m.state.dateError},{default:t(()=>[e(v,{flexible:!0},{default:t(()=>[e(I,{title:"입금예약일자",id:"My_P08_p030_date",buttonId:"My_P08_p030_dateButton"})]),_:1})]),_:1},8,["error"]),e(w,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),e(p,{classNames:{wrap:"row-margin-item-medium"}},{default:t(()=>[a(" 차량번호 혹은 계약자명으로 입금 부탁드립니다. ")]),_:1})]),o("div",null,[e(d,null,{default:t(()=>[e(u,{wrap:!0},{default:t(()=>[e(_,null,{default:t(()=>[e(i,null,{default:t(()=>[a("정산금액")]),_:1}),e(r,null,{default:t(()=>[a("-99,999,999 원")]),_:1})]),_:1}),e(_,null,{default:t(()=>[e(i,null,{default:t(()=>[a("환불예정일자")]),_:1}),e(r,null,{default:t(()=>[a("2023.01.10")]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{classNames:{wrap:"row-margin-contents-small"}},{default:t(()=>[a(" 환불예정일자는 회사 내부사정에 따라 변경 될 수 있습니다. ")]),_:1})])])]),e(x,null,{default:t(()=>[e($,null,{default:t(()=>[e(V,null,{default:t(()=>[a("다음")]),_:1})]),_:1})]),_:1})]),_:1})}const gt={$style:rt},Dt=K(_t,[["render",ft],["__cssModules",gt]]);export{Dt as default};
