import{_ as D,E as F,o as L,b as M,i as A,l as n,x as j,w as s,g as y,e as t,q as e,B as l,d as E,h as O,$ as T,a0 as H}from"./index-47f0144b.js";import{P as U}from"./PageContents-eaa89b0e.js";import z from"./Crm_P00_p002-cb1ec486.js";import{S as q,a as G,b as J}from"./SearchFormItem-f2a39f00.js";import{S as K}from"./SimpleSelect-a7fbe7b5.js";import{S as Q}from"./SimpleInput-2bcd2fe6.js";import{S as R}from"./SimpleDatepicker-9f85e604.js";import{B as W}from"./BasicButton-5b10203b.js";import{B as X,a as Y}from"./ButtonListItem-c3f0c6e2.js";import{C as Z,a as $}from"./CheckBoxObject-8305fb27.js";import{T as tt}from"./TextButton-f2b85444.js";import{B as et}from"./BasicHr-990550cd.js";import{P as st,a as ot,b as lt}from"./PaginationNavNumber-fc37541d.js";import{P as at}from"./PaginationNavEllipsis-d7a0964a.js";import"./UiScroller-2b7d6e30.js";import"./vue-select.es-c01894e4.js";import"./FormInvalid-7352e204.js";import"./calendar-b9ca54ea.js";import"./check-l-6551bef3.js";import"./pagination-next-67f8f5f3.js";const nt={components:{PageContents:U,Crm_P00_p002:z,SearchForm:q,SearchFormList:G,SearchFormItem:J,SimpleSelect:K,SimpleInput:Q,SimpleDatepicker:R,ButtonList:X,ButtonListItem:Y,BasicButton:W,CheckBox:Z,TextButton:tt,CheckBoxObject:$,BasicHr:et,PaginationNav:st,PaginationNavArrow:ot,PaginationNavEllipsis:at,PaginationNavNumber:lt},setup(){const c={ui:{header:F()}};return L(()=>{c.ui.header.setActive(()=>"crm001")}),M(()=>{c.ui.header.setActive()}),{state:A({searchMinDate:"2024.04.21",searchMaxDate:"2024.04.21"})}},data(){return{show:!1}}},o=c=>(T("data-v-7bd0d1be"),c=c(),H(),c),ct={class:"container main"},it=o(()=>t("h3",{class:"for-a11y"},"상담목록",-1)),_t=o(()=>t("span",{class:"tit"},"접수일자",-1)),dt={class:"flex-box"},rt={class:"flex-box__cell"},ut=o(()=>t("div",{class:"flex-box__cell"},[t("div",{class:"text-body-3"},"~")],-1)),mt={class:"flex-box__cell"},pt=o(()=>t("span",{class:"tit"},"상담그룹",-1)),ht={class:"flex-box"},ft={class:"flex-box__cell"},xt=o(()=>t("span",{class:"tit"},"상담원",-1)),vt={class:"flex-box"},bt={class:"flex-box__cell"},wt=o(()=>t("span",{class:"tit"},"진행상태",-1)),gt={class:"flex-box"},Bt={class:"flex-box__cell"},St=o(()=>t("span",{class:"tit"},"상담상태",-1)),yt={class:"flex-box"},Nt={class:"flex-box__cell"},Pt=o(()=>t("span",{class:"tit"},"고객명",-1)),kt={class:"flex-box"},Ct={class:"flex-box__cell"},Vt=o(()=>t("span",{class:"tit"},"접수번호",-1)),It={class:"flex-box"},Dt={class:"flex-box__cell"},Ft={class:"title"},Lt=o(()=>t("table",{class:"table-type-01 none-search"},[t("tbody",null,[t("tr",null,[t("td",null,"조회된 내용이 없습니다.")])])],-1)),Mt={class:"table-type-01"},At=o(()=>t("colgroup",null,[t("col",{width:"5%"}),t("col",{width:"10%"}),t("col",{width:"11%"}),t("col",{width:"10%"}),t("col",{width:"10%"}),t("col",{width:"6%"}),t("col",{width:"10%"}),t("col",{width:"12%"}),t("col",{width:"5%"}),t("col",{width:"6%"}),t("col",{width:"12%"})],-1)),jt=o(()=>t("th",null,"접수일",-1)),Et=o(()=>t("th",null,"접수번호",-1)),Ot=o(()=>t("th",null,"진행상태",-1)),Tt=o(()=>t("th",null,"상품대분류",-1)),Ht=o(()=>t("th",null,"손님명",-1)),Ut=o(()=>t("th",null,"고객구분",-1)),zt=o(()=>t("th",null,"생년월일(사업자번호)",-1)),qt=o(()=>t("th",null,"상담그룹",-1)),Gt=o(()=>t("th",null,"상담원",-1)),Jt=o(()=>t("th",null,"견적번호",-1)),Kt={class:"txt-center"},Qt=o(()=>t("td",{class:"txt-center"},"2023.01.01",-1)),Rt={class:"txt-center"},Wt=o(()=>t("a",{href:"#detailSection",class:"txtcolor"},"2024030900001",-1)),Xt=o(()=>t("td",{class:"txt-center"},"동의완료",-1)),Yt=o(()=>t("td",{class:"txt-center"},"렌터카",-1)),Zt=o(()=>t("td",{class:"txt-center"},"홍길동",-1)),$t=o(()=>t("td",{class:"txt-center"},"개인사업자",-1)),te=o(()=>t("td",{class:"txt-center"},"000-000-*****",-1)),ee=o(()=>t("td",{class:"txt-center"},"A",-1)),se=o(()=>t("td",{class:"txt-center"},"정하나",-1)),oe=o(()=>t("td",{class:"txt-center"},"A00000000000007",-1)),le={key:0,class:"pt_100",id:"detailSection"},ae={class:"mt_100"};function ne(c,i,ce,d,h,ie){const x=n("SimpleDatepicker"),_=n("SearchFormItem"),u=n("SimpleSelect"),v=n("SimpleInput"),N=n("SearchFormList"),b=n("BasicButton"),w=n("ButtonListItem"),g=n("ButtonList"),P=n("SearchForm"),B=n("CheckBoxObject"),S=n("CheckBox"),k=n("TextButton"),r=n("PaginationNavArrow"),a=n("PaginationNavNumber"),m=n("PaginationNavEllipsis"),f=n("PaginationNav"),C=n("BasicHr"),V=n("Crm_P00_p002"),I=n("PageContents");return y(),j(I,{size:"max"},{default:s(()=>[t("div",ct,[e(P,null,{bottom:s(()=>[e(g,{wrap:!0,col:5,align:"center",classNames:{wrap:"row-margin-none"}},{default:s(()=>[e(w,null,{default:s(()=>[e(b,{classNames:{wrap:"btn btn-primary btn-search-02"}},{default:s(()=>[l("검색")]),_:1})]),_:1})]),_:1})]),default:s(()=>[it,e(N,{class:"margin_0"},{default:s(()=>[e(_,{class:"grid_colspan2"},{key:s(()=>[_t]),default:s(()=>[t("div",dt,[t("div",rt,[e(x,{title:"조회기간 시작 날짜",classNames:{wrap:"input-width-large"},max:d.state.searchMaxDate,modelValue:d.state.searchMinDate,"onUpdate:modelValue":i[0]||(i[0]=p=>d.state.searchMinDate=p)},null,8,["max","modelValue"])]),ut,t("div",mt,[e(x,{title:"조회기간 종료 날짜",classNames:{wrap:"input-width-large"},min:d.state.searchMinDate,modelValue:d.state.searchMaxDate,"onUpdate:modelValue":i[1]||(i[1]=p=>d.state.searchMaxDate=p)},null,8,["min","modelValue"])])])]),_:1}),e(_,null,{key:s(()=>[pt]),default:s(()=>[t("div",ht,[t("div",ft,[e(u,{options:[{value:"1",label:"고객명"}],title:"조회기간",defaultValue:"1",classNames:{wrap:"input-width-large"}})])])]),_:1}),e(_,null,{key:s(()=>[xt]),default:s(()=>[t("div",vt,[t("div",bt,[e(u,{options:[{value:"1",label:"고객명"}],title:"조회기간",defaultValue:"1",classNames:{wrap:"input-width-large"}})])])]),_:1}),e(_,null,{key:s(()=>[wt]),default:s(()=>[t("div",gt,[t("div",Bt,[e(u,{options:[{value:"1",label:"고객명"}],title:"조회기간",defaultValue:"1",classNames:{wrap:"input-width-large"}})])])]),_:1}),e(_,null,{key:s(()=>[St]),default:s(()=>[t("div",yt,[t("div",Nt,[e(u,{options:[{value:"1",label:"고객명"}],title:"조회기간",defaultValue:"1",classNames:{wrap:"input-width-large"}})])])]),_:1}),e(_,null,{key:s(()=>[Pt]),default:s(()=>[t("div",kt,[t("div",Ct,[e(v,{classNames:{wrap:"input-width-large"}})])])]),_:1}),e(_,null,{key:s(()=>[Vt]),default:s(()=>[t("div",It,[t("div",Dt,[e(v,{classNames:{wrap:"input-width-large"}})])])]),_:1})]),_:1})]),_:1}),t("div",Ft,[l(" 손님 접수 목록 "),e(g,{align:"right",classNames:{wrap:"row-margin-contents"}},{default:s(()=>[e(w,null,{default:s(()=>[e(b,{size:"small",line:!0},{default:s(()=>[l("상담원 변경")]),_:1})]),_:1})]),_:1})]),Lt,t("table",Mt,[At,t("thead",null,[t("tr",null,[t("th",null,[e(S,{id:"testCheckBox000",onlyObject:!0,theme:"tertiary"},{default:s(()=>[e(B)]),_:1})]),jt,Et,Ot,Tt,Ht,Ut,zt,qt,Gt,Jt])]),t("tbody",null,[t("tr",null,[t("td",Kt,[e(S,{id:"testCheckBox001",onlyObject:!0,theme:"tertiary"},{default:s(()=>[e(B)]),_:1})]),Qt,t("td",Rt,[e(k,{theme:"secondary",underline:!0,textSize:"regular",onClick:i[2]||(i[2]=p=>h.show=!h.show)},{default:s(()=>[Wt]),_:1})]),Xt,Yt,Zt,$t,te,ee,se,oe])])]),e(f,null,{default:s(()=>[e(r,{type:"prev",disabled:!0}),e(a,{active:!0},{default:s(()=>[l("1")]),_:1}),e(a,null,{default:s(()=>[l("2")]),_:1}),e(a,null,{default:s(()=>[l("3")]),_:1}),e(a,null,{default:s(()=>[l("4")]),_:1}),e(a,null,{default:s(()=>[l("5")]),_:1}),e(a,null,{default:s(()=>[l("6")]),_:1}),e(a,null,{default:s(()=>[l("7")]),_:1}),e(m),e(a,null,{default:s(()=>[l("999")]),_:1}),e(r,{type:"next"})]),_:1}),e(f,null,{default:s(()=>[e(r,{type:"prev"}),e(a,null,{default:s(()=>[l("1")]),_:1}),e(m),e(a,null,{default:s(()=>[l("13")]),_:1}),e(a,null,{default:s(()=>[l("14")]),_:1}),e(a,{active:!0},{default:s(()=>[l("15")]),_:1}),e(a,null,{default:s(()=>[l("16")]),_:1}),e(a,null,{default:s(()=>[l("17")]),_:1}),e(m),e(a,null,{default:s(()=>[l("99")]),_:1}),e(r,{type:"next"})]),_:1}),e(f,null,{default:s(()=>[e(r,{type:"prev"}),e(a,null,{default:s(()=>[l("1")]),_:1}),e(m),e(a,null,{default:s(()=>[l("93")]),_:1}),e(a,null,{default:s(()=>[l("94")]),_:1}),e(a,null,{default:s(()=>[l("95")]),_:1}),e(a,null,{default:s(()=>[l("96")]),_:1}),e(a,null,{default:s(()=>[l("97")]),_:1}),e(a,null,{default:s(()=>[l("98")]),_:1}),e(a,{active:!0},{default:s(()=>[l("99")]),_:1}),e(r,{type:"next",disabled:!0})]),_:1}),h.show?(y(),E("div",le,[e(C,{theme:"quaternary",className:"row-margin-contents"}),t("div",ae,[e(V,{class:"mt_60"})])])):O("",!0)])]),_:1})}const Ve=D(nt,[["render",ne],["__scopeId","data-v-7bd0d1be"]]);export{Ve as default};
