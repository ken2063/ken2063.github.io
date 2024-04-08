import{_ as k,E as C,i as F,o as M,b as L,l as n,x as U,w as e,g as m,q as l,B as a,e as t,d as f,h as A,n as _,f as E,t as z,F as H}from"./index-55dc959b.js";import{P as T}from"./PageContents-f716fc69.js";import{P as q,a as $}from"./PageTitle-96bdc852.js";import{P as j,a as G,b as J}from"./PaginationNavNumber-09ccea75.js";import{P as K}from"./PaginationNavEllipsis-9c6f4411.js";import{S as O,a as Q,b as R}from"./SearchFormItem-f227a7d1.js";import{S as W}from"./SimpleInput-acb5ac52.js";import{S as X}from"./SimpleSelect-dde7a4e5.js";import{S as Y}from"./SimpleDatepicker-6fca8a5d.js";import{B as Z,a as tt}from"./ButtonListItem-019a78ac.js";import{B as lt}from"./BasicButton-672abef3.js";import{U as et}from"./UiScroller-084450c4.js";import{I as at}from"./download-09cbf45e.js";import"./pagination-next-499e1e22.js";import"./FormInvalid-55f490a6.js";import"./vue-select.es-8675d864.js";import"./calendar-234ea0db.js";const ot="_empty_x23eu_82",nt="_empty__text_x23eu_87",st={"basic-table":"_basic-table_x23eu_1","basic-table__left-line":"_basic-table__left-line_x23eu_75","basic-table--secondary":"_basic-table--secondary_x23eu_78",empty:ot,empty__text:nt,"empty--secondary":"_empty--secondary_x23eu_95","scroll-table-wrap":"_scroll-table-wrap_x23eu_102"},ut={components:{PageContents:T,PageHead:q,PageTitle:$,PaginationNav:j,PaginationNavArrow:G,PaginationNavEllipsis:K,PaginationNavNumber:J,SearchForm:O,SearchFormList:Q,SearchFormItem:R,SimpleInput:W,SimpleSelect:X,SimpleDatepicker:Y,ButtonList:Z,ButtonListItem:tt,BasicButton:lt,UiScroller:et,IconDownload:at},setup(){const u={ui:{header:C()}},i=F({searchMinDate:"2023.04.21",searchMaxDate:"2023.04.21",searchColumn:"1"});return M(()=>{u.ui.header.setActive(()=>"agent004")}),L(()=>{u.ui.header.setActive()}),{state:i}}},it=t("h3",{class:"for-a11y"},"조회 조건",-1),ct={class:"flex-box"},rt={class:"flex-box__cell"},_t=t("div",{class:"flex-box__cell"},[t("div",{class:"text-body-3"},"~")],-1),dt={class:"flex-box__cell"},mt={class:"flex-box"},pt={class:"flex-box__cell"},ft={key:0,class:"flex-box__cell"},ht={key:1,class:"flex-box__cell"},bt=t("table",null,[t("colgroup",null,[t("col",{style:{width:"120px"}}),t("col"),t("col"),t("col")]),t("thead",null,[t("tr",null,[t("th",null,"항목"),t("th",null,"전체"),t("th",null,"한도금액"),t("th",null,"한도잔액")])]),t("tbody",null,[t("tr",null,[t("th",null,"건수"),t("td",null,"368"),t("td",null,"368"),t("td",null,"368")]),t("tr",null,[t("th",null,"금액"),t("td",null,"2,152,580,000"),t("td",null,"2,152,580,000"),t("td",null,"2,152,580,000")])])],-1),vt=[bt],yt={class:"row-margin-block-small row-margin-bottom-none"},xt=t("colgroup",null,[t("col",{style:{width:"80px"}}),t("col"),t("col"),t("col"),t("col",{style:{width:"140px"}}),t("col",{style:{width:"140px"}}),t("col"),t("col")],-1),gt=t("thead",null,[t("tr",null,[t("th",null,"순번"),t("th",null,"고객명"),t("th",null,"한도금액"),t("th",null,"한도잔액"),t("th",null,"한도발생일자"),t("th",null,"한도만기일자"),t("th",null,"사업자번호"),t("th",null,"가상계좌번호")])],-1),wt=t("td",null,"윤전한",-1),St=t("td",null,"999,999,999",-1),Nt=t("td",null,"999,999,999",-1),Pt=t("td",null,"2023.01.01",-1),Bt=t("td",null,"2023.01.01",-1),Dt=t("td",null,"471860200",-1),It=t("td",null,"하나 1234567890",-1);function Vt(u,i,Ct,s,Ft,Mt){const w=n("PageTitle"),S=n("PageHead"),h=n("SimpleDatepicker"),b=n("SearchFormItem"),v=n("SimpleSelect"),N=n("SimpleInput"),P=n("SearchFormList"),y=n("BasicButton"),x=n("ButtonListItem"),g=n("ButtonList"),B=n("SearchForm"),D=n("IconDownload"),I=n("UiScroller"),r=n("PaginationNavArrow"),o=n("PaginationNavNumber"),d=n("PaginationNavEllipsis"),p=n("PaginationNav"),V=n("PageContents");return m(),U(V,{size:"max"},{default:e(()=>[l(S,null,{default:e(()=>[l(w,null,{default:e(()=>[a("한도현황")]),_:1})]),_:1}),l(B,null,{bottom:e(()=>[l(g,{wrap:!0,col:5,align:"center",classNames:{wrap:"row-margin-none"}},{default:e(()=>[l(x,null,{default:e(()=>[l(y,{size:"regular",theme:"tertiary"},{default:e(()=>[a("조회")]),_:1})]),_:1})]),_:1})]),default:e(()=>[it,l(P,null,{default:e(()=>[l(b,null,{key:e(()=>[a("수신일자")]),default:e(()=>[t("div",ct,[t("div",rt,[l(h,{title:"수신일자 시작 날짜",classNames:{wrap:"input-width-regular"},max:s.state.searchMaxDate,modelValue:s.state.searchMinDate,"onUpdate:modelValue":i[0]||(i[0]=c=>s.state.searchMinDate=c)},null,8,["max","modelValue"])]),_t,t("div",dt,[l(h,{title:"수신일자 종료 날짜",classNames:{wrap:"input-width-regular"},min:s.state.searchMinDate,modelValue:s.state.searchMaxDate,"onUpdate:modelValue":i[1]||(i[1]=c=>s.state.searchMaxDate=c)},null,8,["min","modelValue"])])])]),_:1}),l(b,null,{key:e(()=>[a("검색조건")]),default:e(()=>[t("div",mt,[t("div",pt,[l(v,{options:[{value:"1",label:"고객명"},{value:"2",label:"채널명"}],title:"검색범위",modelValue:s.state.searchColumn,"onUpdate:modelValue":i[2]||(i[2]=c=>s.state.searchColumn=c),classNames:{wrap:"input-width-regular"}},null,8,["modelValue"])]),s.state.searchColumn==="1"?(m(),f("div",ft,[l(N,{title:"검색어",classNames:{wrap:"input-width-wide"}})])):s.state.searchColumn==="2"?(m(),f("div",ht,[l(v,{options:[{value:"1",label:"채널명 001"},{value:"2",label:"채널명 002"},{value:"2",label:"채널명 003"},{value:"2",label:"채널명 004"},{value:"2",label:"채널명 005"},{value:"2",label:"채널명 006"},{value:"2",label:"채널명 007"},{value:"2",label:"채널명 008"}],title:"채널명",classNames:{wrap:"input-width-wide"}})])):A("",!0)])]),_:1})]),_:1})]),_:1}),t("div",{class:_(u.$style["basic-table"])},vt,2),t("div",yt,[l(g,{align:"right",classNames:{wrap:"row-margin-contents"}},{default:e(()=>[l(x,null,{default:e(()=>[l(y,{size:"small",line:!0},{leftIcon:e(()=>[l(D)]),default:e(()=>[a(" 엑셀변환 ")]),_:1})]),_:1})]),_:1}),t("div",{class:_([u.$style.empty,u.$style["empty--secondary"]])},[t("p",{class:_(u.$style.empty__text)},"조회내역이 없습니다.",2)],2),l(I,null,{default:e(()=>[t("div",{class:_(u.$style["scroll-table-wrap"])},[t("div",{class:_(u.$style["basic-table"])},[t("table",null,[xt,gt,t("tbody",null,[(m(),f(H,null,E(10,c=>t("tr",{key:c},[t("td",null,z(c),1),wt,St,Nt,Pt,Bt,Dt,It])),64))])])],2)],2)]),_:1})]),l(p,null,{default:e(()=>[l(r,{type:"prev",disabled:!0}),l(o,{active:!0},{default:e(()=>[a("1")]),_:1}),l(o,null,{default:e(()=>[a("2")]),_:1}),l(o,null,{default:e(()=>[a("3")]),_:1}),l(o,null,{default:e(()=>[a("4")]),_:1}),l(o,null,{default:e(()=>[a("5")]),_:1}),l(o,null,{default:e(()=>[a("6")]),_:1}),l(o,null,{default:e(()=>[a("7")]),_:1}),l(d),l(o,null,{default:e(()=>[a("999")]),_:1}),l(r,{type:"next"})]),_:1}),l(p,null,{default:e(()=>[l(r,{type:"prev"}),l(o,null,{default:e(()=>[a("1")]),_:1}),l(d),l(o,null,{default:e(()=>[a("13")]),_:1}),l(o,null,{default:e(()=>[a("14")]),_:1}),l(o,{active:!0},{default:e(()=>[a("15")]),_:1}),l(o,null,{default:e(()=>[a("16")]),_:1}),l(o,null,{default:e(()=>[a("17")]),_:1}),l(d),l(o,null,{default:e(()=>[a("99")]),_:1}),l(r,{type:"next"})]),_:1}),l(p,null,{default:e(()=>[l(r,{type:"prev"}),l(o,null,{default:e(()=>[a("1")]),_:1}),l(d),l(o,null,{default:e(()=>[a("93")]),_:1}),l(o,null,{default:e(()=>[a("94")]),_:1}),l(o,null,{default:e(()=>[a("95")]),_:1}),l(o,null,{default:e(()=>[a("96")]),_:1}),l(o,null,{default:e(()=>[a("97")]),_:1}),l(o,null,{default:e(()=>[a("98")]),_:1}),l(o,{active:!0},{default:e(()=>[a("99")]),_:1}),l(r,{type:"next",disabled:!0})]),_:1})]),_:1})}const kt={$style:st},Xt=k(ut,[["render",Vt],["__cssModules",kt]]);export{Xt as default};
