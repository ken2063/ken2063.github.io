import{_ as F,E as M,i as R,o as A,b as U,l as n,x as T,w as l,g as m,q as e,B as a,e as t,d as f,h as E,n as r,f as j,t as z,F as H}from"./index-82fbfa1a.js";import{P as O}from"./PageContents-bfe4e6bc.js";import{P as q,a as Y}from"./PageTitle-d5eca824.js";import{P as $,a as G,b as J}from"./PaginationNavNumber-0d292072.js";import{P as K}from"./PaginationNavEllipsis-190d1e23.js";import{S as Q,a as W,b as X}from"./SearchFormItem-0e8edc06.js";import{S as Z}from"./SimpleInput-21761118.js";import{S as tt}from"./SimpleSelect-fb289030.js";import{S as et}from"./SimpleDatepicker-429c5703.js";import{R as lt,a as at}from"./RadioButtonObject-7eddc2fa.js";import{R as ot}from"./RadioButtonLabelText-d1d3fff9.js";import{B as nt,a as st}from"./ButtonListItem-1c2230e0.js";import{B as _t}from"./BasicButton-4f3c34ae.js";import{U as it}from"./UiScroller-ae4f68c8.js";import{I as ut}from"./download-62aeac1d.js";import"./pagination-next-a526001f.js";import"./FormInvalid-868ec577.js";import"./vue-select.es-0a69f9d3.js";import"./calendar-c7992768.js";const ct="_empty_x23eu_82",rt="_empty__text_x23eu_87",dt={"basic-table":"_basic-table_x23eu_1","basic-table__left-line":"_basic-table__left-line_x23eu_75","basic-table--secondary":"_basic-table--secondary_x23eu_78",empty:ct,empty__text:rt,"empty--secondary":"_empty--secondary_x23eu_95","scroll-table-wrap":"_scroll-table-wrap_x23eu_102"},mt={components:{PageContents:O,PageHead:q,PageTitle:Y,PaginationNav:$,PaginationNavArrow:G,PaginationNavEllipsis:K,PaginationNavNumber:J,SearchForm:Q,SearchFormList:W,SearchFormItem:X,SimpleInput:Z,SimpleSelect:tt,SimpleDatepicker:et,RadioButton:lt,RadioButtonLabelText:ot,RadioButtonObject:at,ButtonList:nt,ButtonListItem:st,BasicButton:_t,UiScroller:it,IconDownload:ut},setup(){const _={ui:{header:M()}},i=R({searchMinDate:"2023.04.21",searchMaxDate:"2023.04.21",searchColumn:"1"});return A(()=>{_.ui.header.setActive(()=>"agent004")}),U(()=>{_.ui.header.setActive()}),{state:i}}},pt=t("h3",{class:"for-a11y"},"조회 조건",-1),ft={class:"flex-box"},ht={class:"flex-box__cell"},bt=t("div",{class:"flex-box__cell"},[t("div",{class:"text-body-3"},"~")],-1),xt={class:"flex-box__cell"},yt={class:"flex-box"},vt={class:"flex-box__cell"},gt={key:0,class:"flex-box__cell"},wt={key:1,class:"flex-box__cell flex-box__cell--medium flex-box"},Pt={class:"flex-box__cell flex-box__cell--medium"},St={class:"flex-box__cell flex-box__cell--medium"},Bt=t("table",null,[t("colgroup",null,[t("col",{style:{width:"120px"}}),t("col"),t("col"),t("col")]),t("thead",null,[t("tr",null,[t("th",null,"항목"),t("th",null,"전체"),t("th",null,"승인"),t("th",null,"부결")])]),t("tbody",null,[t("tr",null,[t("th",null,"건수"),t("td",null,"368"),t("td",null,"368"),t("td",null,"368")]),t("tr",null,[t("th",null,"금액"),t("td",null,"2,152,580,000"),t("td",null,"2,152,580,000"),t("td",null,"2,152,580,000")])])],-1),Nt=[Bt],Dt={class:"row-margin-block-small row-margin-bottom-none"},It=t("colgroup",null,[t("col",{style:{width:"80px"}}),t("col",{style:{width:"114px"}}),t("col"),t("col"),t("col",{style:{width:"80px"}}),t("col"),t("col"),t("col"),t("col")],-1),kt=t("thead",null,[t("tr",null,[t("th",null,"순번"),t("th",null,"수신일자"),t("th",null,"고객명"),t("th",null,"채널명"),t("th",null,"승인여부"),t("th",null,"승인일자"),t("th",null,"한도금액"),t("th",null,"제휴사 ID"),t("th",null,"채널ID")])],-1),Ct=t("td",null,"2023.01.01",-1),Lt=t("td",null,"한송이",-1),Vt=t("td",null,"에이블리",-1),Ft=t("td",null,"N",-1),Mt=t("td",null,"2023.01.01",-1),Rt=t("td",null,"999,999,999",-1),At=t("td",null,"471860200",-1),Ut=t("td",null,"hanajoah",-1);function Tt(_,i,jt,s,zt,Ht){const S=n("PageTitle"),B=n("PageHead"),h=n("SimpleDatepicker"),b=n("SearchFormItem"),N=n("SimpleSelect"),D=n("SimpleInput"),x=n("RadioButtonObject"),y=n("RadioButtonLabelText"),v=n("RadioButton"),I=n("SearchFormList"),g=n("BasicButton"),w=n("ButtonListItem"),P=n("ButtonList"),k=n("SearchForm"),C=n("IconDownload"),L=n("UiScroller"),c=n("PaginationNavArrow"),o=n("PaginationNavNumber"),d=n("PaginationNavEllipsis"),p=n("PaginationNav"),V=n("PageContents");return m(),T(V,{size:"max"},{default:l(()=>[e(B,null,{default:l(()=>[e(S,null,{default:l(()=>[a("심사승인내역")]),_:1})]),_:1}),e(k,null,{bottom:l(()=>[e(P,{wrap:!0,col:5,align:"center",classNames:{wrap:"row-margin-none"}},{default:l(()=>[e(w,null,{default:l(()=>[e(g,{size:"regular",theme:"tertiary"},{default:l(()=>[a("조회")]),_:1})]),_:1})]),_:1})]),default:l(()=>[pt,e(I,null,{default:l(()=>[e(b,null,{key:l(()=>[a("수신일자")]),default:l(()=>[t("div",ft,[t("div",ht,[e(h,{title:"수신일자 시작 날짜",classNames:{wrap:"input-width-regular"},max:s.state.searchMaxDate,modelValue:s.state.searchMinDate,"onUpdate:modelValue":i[0]||(i[0]=u=>s.state.searchMinDate=u)},null,8,["max","modelValue"])]),bt,t("div",xt,[e(h,{title:"수신일자 종료 날짜",classNames:{wrap:"input-width-regular"},min:s.state.searchMinDate,modelValue:s.state.searchMaxDate,"onUpdate:modelValue":i[1]||(i[1]=u=>s.state.searchMaxDate=u)},null,8,["min","modelValue"])])])]),_:1}),e(b,null,{key:l(()=>[a("검색조건")]),default:l(()=>[t("div",yt,[t("div",vt,[e(N,{options:[{value:"1",label:"고객명"},{value:"2",label:"승인여부"}],title:"검색범위",modelValue:s.state.searchColumn,"onUpdate:modelValue":i[2]||(i[2]=u=>s.state.searchColumn=u),classNames:{wrap:"input-width-regular"}},null,8,["modelValue"])]),s.state.searchColumn==="1"?(m(),f("div",gt,[e(D,{title:"검색어",classNames:{wrap:"input-width-wide"}})])):s.state.searchColumn==="2"?(m(),f("div",wt,[t("div",Pt,[e(v,{name:"Agent_P10_p003_approval",id:"Agent_P10_p003_approval_001",theme:"tertiary",defaultChecked:!0},{default:l(()=>[e(x),e(y,null,{default:l(()=>[a("Y")]),_:1})]),_:1})]),t("div",St,[e(v,{name:"Agent_P10_p003_approval",id:"Agent_P10_p003_approval_002",theme:"tertiary"},{default:l(()=>[e(x),e(y,null,{default:l(()=>[a("N")]),_:1})]),_:1})])])):E("",!0)])]),_:1})]),_:1})]),_:1}),t("div",{class:r(_.$style["basic-table"])},Nt,2),t("div",Dt,[e(P,{align:"right",classNames:{wrap:"row-margin-contents"}},{default:l(()=>[e(w,null,{default:l(()=>[e(g,{size:"small",line:!0},{leftIcon:l(()=>[e(C)]),default:l(()=>[a(" 엑셀변환 ")]),_:1})]),_:1})]),_:1}),t("div",{class:r([_.$style.empty,_.$style["empty--secondary"]])},[t("p",{class:r(_.$style.empty__text)},"조회내역이 없습니다.",2)],2),e(L,null,{default:l(()=>[t("div",{class:r(_.$style["scroll-table-wrap"])},[t("div",{class:r(_.$style["basic-table"])},[t("table",null,[It,kt,t("tbody",null,[(m(),f(H,null,j(10,u=>t("tr",{key:u},[t("td",null,z(u),1),Ct,Lt,Vt,Ft,Mt,Rt,At,Ut])),64))])])],2)],2)]),_:1})]),e(p,null,{default:l(()=>[e(c,{type:"prev",disabled:!0}),e(o,{active:!0},{default:l(()=>[a("1")]),_:1}),e(o,null,{default:l(()=>[a("2")]),_:1}),e(o,null,{default:l(()=>[a("3")]),_:1}),e(o,null,{default:l(()=>[a("4")]),_:1}),e(o,null,{default:l(()=>[a("5")]),_:1}),e(o,null,{default:l(()=>[a("6")]),_:1}),e(o,null,{default:l(()=>[a("7")]),_:1}),e(d),e(o,null,{default:l(()=>[a("999")]),_:1}),e(c,{type:"next"})]),_:1}),e(p,null,{default:l(()=>[e(c,{type:"prev"}),e(o,null,{default:l(()=>[a("1")]),_:1}),e(d),e(o,null,{default:l(()=>[a("13")]),_:1}),e(o,null,{default:l(()=>[a("14")]),_:1}),e(o,{active:!0},{default:l(()=>[a("15")]),_:1}),e(o,null,{default:l(()=>[a("16")]),_:1}),e(o,null,{default:l(()=>[a("17")]),_:1}),e(d),e(o,null,{default:l(()=>[a("99")]),_:1}),e(c,{type:"next"})]),_:1}),e(p,null,{default:l(()=>[e(c,{type:"prev"}),e(o,null,{default:l(()=>[a("1")]),_:1}),e(d),e(o,null,{default:l(()=>[a("93")]),_:1}),e(o,null,{default:l(()=>[a("94")]),_:1}),e(o,null,{default:l(()=>[a("95")]),_:1}),e(o,null,{default:l(()=>[a("96")]),_:1}),e(o,null,{default:l(()=>[a("97")]),_:1}),e(o,null,{default:l(()=>[a("98")]),_:1}),e(o,{active:!0},{default:l(()=>[a("99")]),_:1}),e(c,{type:"next",disabled:!0})]),_:1})]),_:1})}const Et={$style:dt},ie=F(mt,[["render",Tt],["__cssModules",Et]]);export{ie as default};
