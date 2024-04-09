import{_ as F,E as M,i as R,o as V,b as U,l as o,x as C,w as e,g as P,q as l,B as n,e as t,n as c,d as T,f as E,t as $,F as z}from"./index-82fbfa1a.js";import{P as H}from"./PageContents-bfe4e6bc.js";import{P as j,a as O}from"./PageTitle-d5eca824.js";import{P as q,a as G,b as J}from"./PaginationNavNumber-0d292072.js";import{P as K}from"./PaginationNavEllipsis-190d1e23.js";import{S as Q,a as W,b as X}from"./SearchFormItem-0e8edc06.js";import{S as Y}from"./SimpleInput-21761118.js";import{S as Z}from"./SimpleSelect-fb289030.js";import{S as tt}from"./SimpleDatepicker-429c5703.js";import{R as lt,a as et}from"./RadioButtonObject-7eddc2fa.js";import{R as nt}from"./RadioButtonLabelText-d1d3fff9.js";import{B as at,a as ot}from"./ButtonListItem-1c2230e0.js";import{B as st}from"./BasicButton-4f3c34ae.js";import{U as ut}from"./UiScroller-ae4f68c8.js";import{I as _t}from"./download-62aeac1d.js";import"./pagination-next-a526001f.js";import"./FormInvalid-868ec577.js";import"./vue-select.es-0a69f9d3.js";import"./calendar-c7992768.js";const it="_empty_x23eu_82",dt="_empty__text_x23eu_87",ct={"basic-table":"_basic-table_x23eu_1","basic-table__left-line":"_basic-table__left-line_x23eu_75","basic-table--secondary":"_basic-table--secondary_x23eu_78",empty:it,empty__text:dt,"empty--secondary":"_empty--secondary_x23eu_95","scroll-table-wrap":"_scroll-table-wrap_x23eu_102"},rt={components:{PageContents:H,PageHead:j,PageTitle:O,PaginationNav:q,PaginationNavArrow:G,PaginationNavEllipsis:K,PaginationNavNumber:J,SearchForm:Q,SearchFormList:W,SearchFormItem:X,SimpleInput:Y,SimpleSelect:Z,SimpleDatepicker:tt,RadioButton:lt,RadioButtonLabelText:nt,RadioButtonObject:et,ButtonList:at,ButtonListItem:ot,BasicButton:st,UiScroller:ut,IconDownload:_t},setup(){const s={ui:{header:M()}},u=R({searchMinDate:"2023.04.21",searchMaxDate:"2023.04.21"});return V(()=>{s.ui.header.setActive(()=>"agent003")}),U(()=>{s.ui.header.setActive()}),{state:u}}},mt=t("h3",{class:"for-a11y"},"조회 조건",-1),pt={class:"flex-box"},ft={class:"flex-box__cell"},ht=t("div",{class:"flex-box__cell"},[t("div",{class:"text-body-3"},"~")],-1),xt={class:"flex-box__cell"},bt={class:"flex-box"},gt={class:"flex-box__cell flex-box__cell--medium"},yt={class:"flex-box__cell flex-box__cell--medium"},vt={class:"flex-box__cell flex-box__cell--medium"},Pt={class:"flex-box__cell flex-box__cell--medium"},wt={class:"flex-box"},St={class:"flex-box__cell"},Bt={class:"flex-box__cell"},Nt=t("table",null,[t("colgroup",null,[t("col",{style:{width:"120px"}}),t("col"),t("col"),t("col"),t("col")]),t("thead",null,[t("tr",null,[t("th",null,"항목"),t("th",null,"전체"),t("th",null,"오류"),t("th",null,"연체"),t("th",null,"수납")])]),t("tbody",null,[t("tr",null,[t("th",null,"건수"),t("td",null,"18553"),t("td",null,"0"),t("td",null,"0"),t("td",null,"0")]),t("tr",null,[t("th",null,"대상금액"),t("td",null,"660,826,070"),t("td",null,"0"),t("td",null,"0"),t("td",null,"0")]),t("tr",null,[t("th",null,"수납수수료"),t("td",null,"0"),t("td",null,"0"),t("td",null,"0"),t("td",null,"0")]),t("tr",null,[t("th",null,"실수납금액"),t("td",null,"660,826,070"),t("td",null,"0"),t("td",null,"0"),t("td",null,"0")])])],-1),Lt=[Nt],Dt={class:"row-margin-block-small row-margin-bottom-none"},At=t("colgroup",null,[t("col",{style:{width:"80px"}}),t("col",{style:{width:"114px"}}),t("col"),t("col"),t("col"),t("col",{style:{width:"160px"}}),t("col"),t("col",{style:{width:"160px"}})],-1),It=t("thead",null,[t("tr",null,[t("th",null,"순번"),t("th",null,"수납요청일"),t("th",null,"채권번호"),t("th",null,"제휴사주문번호"),t("th",null,"고객명"),t("th",null,"진행상태"),t("th",null,"수납금액"),t("th",null,"요청구분")])],-1),kt=t("tr",null,[t("td",null,"1"),t("td",null,"2023.01.01"),t("td",null,"L12345678"),t("td",null,"1234567891234"),t("td",null,"홍길동"),t("td",null,[t("span",{class:"color-red"},"오류")]),t("td",null,"999,999,999"),t("td",null,"정상수납")],-1),Ft=t("tr",null,[t("td",null,"2"),t("td",null,"2023.01.01"),t("td",null,"L12345678"),t("td",null,"1234567891234"),t("td",null,"홍길동"),t("td",null,[t("span",{class:"color-green"},"정상")]),t("td",null,"999,999,999"),t("td",null,"정상수납")],-1),Mt=t("td",null,"2023.01.01",-1),Rt=t("td",null,"L12345678",-1),Vt=t("td",null,"1234567891234",-1),Ut=t("td",null,"홍길동",-1),Ct=t("td",null,[t("span",null,"보류")],-1),Tt=t("td",null,"999,999,999",-1),Et=t("td",null,"정상수납",-1);function $t(s,u,Ht,_,jt,Ot){const w=o("PageTitle"),S=o("PageHead"),b=o("SimpleDatepicker"),h=o("SearchFormItem"),r=o("RadioButtonObject"),m=o("RadioButtonLabelText"),p=o("RadioButton"),B=o("SimpleSelect"),N=o("SimpleInput"),L=o("SearchFormList"),g=o("BasicButton"),y=o("ButtonListItem"),v=o("ButtonList"),D=o("SearchForm"),A=o("IconDownload"),I=o("UiScroller"),i=o("PaginationNavArrow"),a=o("PaginationNavNumber"),f=o("PaginationNavEllipsis"),x=o("PaginationNav"),k=o("PageContents");return P(),C(k,{size:"max"},{default:e(()=>[l(S,null,{default:e(()=>[l(w,null,{default:e(()=>[n("수납진행내역")]),_:1})]),_:1}),l(D,null,{bottom:e(()=>[l(v,{wrap:!0,col:5,align:"center",classNames:{wrap:"row-margin-none"}},{default:e(()=>[l(y,null,{default:e(()=>[l(g,{size:"regular",theme:"tertiary"},{default:e(()=>[n("조회")]),_:1})]),_:1})]),_:1})]),default:e(()=>[mt,l(L,null,{default:e(()=>[l(h,null,{key:e(()=>[n("수납요청일자")]),default:e(()=>[t("div",pt,[t("div",ft,[l(b,{title:"수납요청일자 시작 날짜",classNames:{wrap:"input-width-regular"},max:_.state.searchMaxDate,modelValue:_.state.searchMinDate,"onUpdate:modelValue":u[0]||(u[0]=d=>_.state.searchMinDate=d)},null,8,["max","modelValue"])]),ht,t("div",xt,[l(b,{title:"수납요청일자 종료 날짜",classNames:{wrap:"input-width-regular"},min:_.state.searchMinDate,modelValue:_.state.searchMaxDate,"onUpdate:modelValue":u[1]||(u[1]=d=>_.state.searchMaxDate=d)},null,8,["min","modelValue"])])])]),_:1}),l(h,null,{key:e(()=>[n("진행상태")]),default:e(()=>[t("div",bt,[t("div",gt,[l(p,{name:"Agent_P09_p002_status",id:"Agent_P09_p002_status_001",theme:"tertiary",defaultChecked:!0},{default:e(()=>[l(r),l(m,null,{default:e(()=>[n("전체")]),_:1})]),_:1})]),t("div",yt,[l(p,{name:"Agent_P09_p002_status",id:"Agent_P09_p002_status_002",theme:"tertiary"},{default:e(()=>[l(r),l(m,null,{default:e(()=>[n("정상")]),_:1})]),_:1})]),t("div",vt,[l(p,{name:"Agent_P09_p002_status",id:"Agent_P09_p002_status_003",theme:"tertiary"},{default:e(()=>[l(r),l(m,null,{default:e(()=>[n("오류")]),_:1})]),_:1})]),t("div",Pt,[l(p,{name:"Agent_P09_p002_status",id:"Agent_P09_p002_status_004",theme:"tertiary"},{default:e(()=>[l(r),l(m,null,{default:e(()=>[n("보류")]),_:1})]),_:1})])])]),_:1}),l(h,null,{key:e(()=>[n("검색조건")]),default:e(()=>[t("div",wt,[t("div",St,[l(B,{options:[{value:"1",label:"고객명"},{value:"2",label:"제휴사주문번호"},{value:"3",label:"채권번호"}],title:"검색범위",defaultValue:"1",classNames:{wrap:"input-width-large"}})]),t("div",Bt,[l(N,{title:"검색어",classNames:{wrap:"input-width-large"}})])])]),_:1})]),_:1})]),_:1}),t("div",{class:c(s.$style["basic-table"])},Lt,2),t("div",Dt,[l(v,{align:"right",classNames:{wrap:"row-margin-contents"}},{default:e(()=>[l(y,null,{default:e(()=>[l(g,{size:"small",line:!0},{leftIcon:e(()=>[l(A)]),default:e(()=>[n(" 엑셀변환 ")]),_:1})]),_:1})]),_:1}),t("div",{class:c([s.$style.empty,s.$style["empty--secondary"]])},[t("p",{class:c(s.$style.empty__text)},"조회내역이 없습니다.",2)],2),l(I,null,{default:e(()=>[t("div",{class:c(s.$style["scroll-table-wrap"])},[t("div",{class:c(s.$style["basic-table"])},[t("table",null,[At,It,t("tbody",null,[kt,Ft,(P(),T(z,null,E(8,d=>t("tr",{key:d},[t("td",null,$(d+2),1),Mt,Rt,Vt,Ut,Ct,Tt,Et])),64))])])],2)],2)]),_:1})]),l(x,null,{default:e(()=>[l(i,{type:"prev",disabled:!0}),l(a,{active:!0},{default:e(()=>[n("1")]),_:1}),l(a,null,{default:e(()=>[n("2")]),_:1}),l(a,null,{default:e(()=>[n("3")]),_:1}),l(a,null,{default:e(()=>[n("4")]),_:1}),l(a,null,{default:e(()=>[n("5")]),_:1}),l(a,null,{default:e(()=>[n("6")]),_:1}),l(a,null,{default:e(()=>[n("7")]),_:1}),l(f),l(a,null,{default:e(()=>[n("999")]),_:1}),l(i,{type:"next"})]),_:1}),l(x,null,{default:e(()=>[l(i,{type:"prev"}),l(a,null,{default:e(()=>[n("1")]),_:1}),l(f),l(a,null,{default:e(()=>[n("13")]),_:1}),l(a,null,{default:e(()=>[n("14")]),_:1}),l(a,{active:!0},{default:e(()=>[n("15")]),_:1}),l(a,null,{default:e(()=>[n("16")]),_:1}),l(a,null,{default:e(()=>[n("17")]),_:1}),l(f),l(a,null,{default:e(()=>[n("99")]),_:1}),l(i,{type:"next"})]),_:1}),l(x,null,{default:e(()=>[l(i,{type:"prev"}),l(a,null,{default:e(()=>[n("1")]),_:1}),l(f),l(a,null,{default:e(()=>[n("93")]),_:1}),l(a,null,{default:e(()=>[n("94")]),_:1}),l(a,null,{default:e(()=>[n("95")]),_:1}),l(a,null,{default:e(()=>[n("96")]),_:1}),l(a,null,{default:e(()=>[n("97")]),_:1}),l(a,null,{default:e(()=>[n("98")]),_:1}),l(a,{active:!0},{default:e(()=>[n("99")]),_:1}),l(i,{type:"next",disabled:!0})]),_:1})]),_:1})}const zt={$style:ct},dl=F(rt,[["render",$t],["__cssModules",zt]]);export{dl as default};
