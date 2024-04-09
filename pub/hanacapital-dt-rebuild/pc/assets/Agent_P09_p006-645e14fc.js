import{_ as F,E as M,i as R,o as V,b as j,l as n,x as C,w as l,g as w,q as e,B as o,e as t,n as d,d as T,f as U,t as E,F as $}from"./index-89ea90fd.js";import{P as z}from"./PageContents-f8dfd722.js";import{P as H,a as O}from"./PageTitle-af1154e1.js";import{P as G,a as Y,b as q}from"./PaginationNavNumber-24e9d9e1.js";import{P as J}from"./PaginationNavEllipsis-d3ab03d9.js";import{S as K,a as Q,b as W}from"./SearchFormItem-3cf78e7c.js";import{S as X}from"./SimpleInput-9ec7cf54.js";import{S as Z}from"./SimpleSelect-100b30c6.js";import{S as tt}from"./SimpleDatepicker-0f0c1fca.js";import{R as et,a as lt}from"./RadioButtonObject-7e6067c8.js";import{R as ot}from"./RadioButtonLabelText-9899d923.js";import{B as at,a as nt}from"./ButtonListItem-7021a724.js";import{B as st}from"./BasicButton-9f8538fd.js";import{U as _t}from"./UiScroller-a4a04c8e.js";import{I as it}from"./download-aeb3c0ed.js";import"./pagination-next-da7f99c7.js";import"./FormInvalid-83d8e491.js";import"./vue-select.es-fec1bfc7.js";import"./calendar-ac0950f9.js";const ut="_empty_x23eu_82",ct="_empty__text_x23eu_87",dt={"basic-table":"_basic-table_x23eu_1","basic-table__left-line":"_basic-table__left-line_x23eu_75","basic-table--secondary":"_basic-table--secondary_x23eu_78",empty:ut,empty__text:ct,"empty--secondary":"_empty--secondary_x23eu_95","scroll-table-wrap":"_scroll-table-wrap_x23eu_102"},rt={components:{PageContents:z,PageHead:H,PageTitle:O,PaginationNav:G,PaginationNavArrow:Y,PaginationNavEllipsis:J,PaginationNavNumber:q,SearchForm:K,SearchFormList:Q,SearchFormItem:W,SimpleInput:X,SimpleSelect:Z,SimpleDatepicker:tt,RadioButton:et,RadioButtonLabelText:ot,RadioButtonObject:lt,ButtonList:at,ButtonListItem:nt,BasicButton:st,UiScroller:_t,IconDownload:it},setup(){const s={ui:{header:M()}},_=R({searchMinDate:"2023.04.21",searchMaxDate:"2023.04.21"});return V(()=>{s.ui.header.setActive(()=>"agent003")}),j(()=>{s.ui.header.setActive()}),{state:_}}},mt=t("h3",{class:"for-a11y"},"조회 조건",-1),pt={class:"flex-box"},ft={class:"flex-box__cell"},ht=t("div",{class:"flex-box__cell"},[t("div",{class:"text-body-3"},"~")],-1),xt={class:"flex-box__cell"},bt={class:"flex-box"},yt={class:"flex-box__cell"},gt={class:"flex-box__cell"},vt={class:"flex-box"},wt={class:"flex-box__cell flex-box__cell--medium"},Pt={class:"flex-box__cell flex-box__cell--medium"},St={class:"flex-box__cell flex-box__cell--medium"},Bt=t("table",null,[t("colgroup",null,[t("col",{style:{width:"120px"}}),t("col")]),t("thead",null,[t("tr",null,[t("th",null,"항목"),t("th",null,"전체")])]),t("tbody",null,[t("tr",null,[t("th",null,"건수"),t("td",null,"368")]),t("tr",null,[t("th",null,"채권잔액"),t("td",null,"2,152,580,000")]),t("tr",null,[t("th",null,"매각금액"),t("td",null,"2,152,580,000")])])],-1),Nt=[Bt],It={class:"row-margin-block-small row-margin-bottom-none"},Dt=t("colgroup",null,[t("col",{style:{width:"80px"}}),t("col",{style:{width:"114px"}}),t("col"),t("col"),t("col"),t("col",{style:{width:"80px"}}),t("col",{style:{width:"122px"}}),t("col",{style:{width:"107px"}}),t("col",{style:{width:"122px"}}),t("col",{style:{width:"66px"}}),t("col",{style:{width:"80px"}}),t("col",{style:{width:"103px"}})],-1),Lt=t("thead",null,[t("tr",null,[t("th",null,"순번"),t("th",null,"매각요청일자"),t("th",null,"제휴사주문번호"),t("th",null,"채권번호"),t("th",null,"고객명"),t("th",null,"연체회차"),t("th",null,"채권잔액"),t("th",null,"매각적용비율"),t("th",null,"연체금액"),t("th",null,"총회차"),t("th",null,"수납회차"),t("th",null,"SGI가입여부")])],-1),kt=t("td",null,"2023.01.01",-1),At=t("td",null,"CT1234567891234",-1),Ft=t("td",null,"L12345678901234",-1),Mt=t("td",null,"홍길동",-1),Rt=t("td",null,"0",-1),Vt=t("td",null,"999,999,999",-1),jt=t("td",null,"40",-1),Ct=t("td",null,"999,999,999",-1),Tt=t("td",null,"60",-1),Ut=t("td",null,"60",-1),Et=t("td",null,"Y",-1);function $t(s,_,Ht,i,Ot,Gt){const P=n("PageTitle"),S=n("PageHead"),b=n("SimpleDatepicker"),m=n("SearchFormItem"),B=n("SimpleSelect"),N=n("SimpleInput"),p=n("RadioButtonObject"),f=n("RadioButtonLabelText"),h=n("RadioButton"),I=n("SearchFormList"),y=n("BasicButton"),g=n("ButtonListItem"),v=n("ButtonList"),D=n("SearchForm"),L=n("IconDownload"),k=n("UiScroller"),u=n("PaginationNavArrow"),a=n("PaginationNavNumber"),r=n("PaginationNavEllipsis"),x=n("PaginationNav"),A=n("PageContents");return w(),C(A,{size:"max"},{default:l(()=>[e(S,null,{default:l(()=>[e(P,null,{default:l(()=>[o("연체매각리스트")]),_:1})]),_:1}),e(D,null,{bottom:l(()=>[e(v,{wrap:!0,col:5,align:"center",classNames:{wrap:"row-margin-none"}},{default:l(()=>[e(g,null,{default:l(()=>[e(y,{size:"regular",theme:"tertiary"},{default:l(()=>[o("조회")]),_:1})]),_:1})]),_:1})]),default:l(()=>[mt,e(I,null,{default:l(()=>[e(m,null,{key:l(()=>[o("매각요청일자")]),default:l(()=>[t("div",pt,[t("div",ft,[e(b,{title:"매각요청일자 시작 날짜",classNames:{wrap:"input-width-regular"},max:i.state.searchMaxDate,modelValue:i.state.searchMinDate,"onUpdate:modelValue":_[0]||(_[0]=c=>i.state.searchMinDate=c)},null,8,["max","modelValue"])]),ht,t("div",xt,[e(b,{title:"매각요청일자 종료 날짜",classNames:{wrap:"input-width-regular"},min:i.state.searchMinDate,modelValue:i.state.searchMaxDate,"onUpdate:modelValue":_[1]||(_[1]=c=>i.state.searchMaxDate=c)},null,8,["min","modelValue"])])])]),_:1}),e(m,null,{key:l(()=>[o("검색조건")]),default:l(()=>[t("div",bt,[t("div",yt,[e(B,{options:[{value:"1",label:"제휴사주문번호"},{value:"2",label:"채권번호"}],title:"검색범위",defaultValue:"1",classNames:{wrap:"input-width-large"}})]),t("div",gt,[e(N,{title:"검색어",classNames:{wrap:"input-width-wide"}})])])]),_:1}),e(m,null,{key:l(()=>[o("SGI가입여부")]),default:l(()=>[t("div",vt,[t("div",wt,[e(h,{name:"Agent_P09_p006_join",id:"Agent_P09_p006_join_001",theme:"tertiary",defaultChecked:!0},{default:l(()=>[e(p),e(f,null,{default:l(()=>[o("전체")]),_:1})]),_:1})]),t("div",Pt,[e(h,{name:"Agent_P09_p006_join",id:"Agent_P09_p006_join_002",theme:"tertiary"},{default:l(()=>[e(p),e(f,null,{default:l(()=>[o("Y")]),_:1})]),_:1})]),t("div",St,[e(h,{name:"Agent_P09_p006_join",id:"Agent_P09_p006_join_003",theme:"tertiary"},{default:l(()=>[e(p),e(f,null,{default:l(()=>[o("N")]),_:1})]),_:1})])])]),_:1})]),_:1})]),_:1}),t("div",{class:d(s.$style["basic-table"])},Nt,2),t("div",It,[e(v,{align:"right",classNames:{wrap:"row-margin-contents"}},{default:l(()=>[e(g,null,{default:l(()=>[e(y,{size:"small",line:!0},{leftIcon:l(()=>[e(L)]),default:l(()=>[o(" 엑셀변환 ")]),_:1})]),_:1})]),_:1}),t("div",{class:d([s.$style.empty,s.$style["empty--secondary"]])},[t("p",{class:d(s.$style.empty__text)},"조회내역이 없습니다.",2)],2),e(k,null,{default:l(()=>[t("div",{class:d(s.$style["scroll-table-wrap"])},[t("div",{class:d(s.$style["basic-table"])},[t("table",null,[Dt,Lt,t("tbody",null,[(w(),T($,null,U(10,c=>t("tr",{key:c,title:"더블 클릭으로 상세 보기",tabindex:"0"},[t("td",null,E(c),1),kt,At,Ft,Mt,Rt,Vt,jt,Ct,Tt,Ut,Et])),64))])])],2)],2)]),_:1})]),e(x,null,{default:l(()=>[e(u,{type:"prev",disabled:!0}),e(a,{active:!0},{default:l(()=>[o("1")]),_:1}),e(a,null,{default:l(()=>[o("2")]),_:1}),e(a,null,{default:l(()=>[o("3")]),_:1}),e(a,null,{default:l(()=>[o("4")]),_:1}),e(a,null,{default:l(()=>[o("5")]),_:1}),e(a,null,{default:l(()=>[o("6")]),_:1}),e(a,null,{default:l(()=>[o("7")]),_:1}),e(r),e(a,null,{default:l(()=>[o("999")]),_:1}),e(u,{type:"next"})]),_:1}),e(x,null,{default:l(()=>[e(u,{type:"prev"}),e(a,null,{default:l(()=>[o("1")]),_:1}),e(r),e(a,null,{default:l(()=>[o("13")]),_:1}),e(a,null,{default:l(()=>[o("14")]),_:1}),e(a,{active:!0},{default:l(()=>[o("15")]),_:1}),e(a,null,{default:l(()=>[o("16")]),_:1}),e(a,null,{default:l(()=>[o("17")]),_:1}),e(r),e(a,null,{default:l(()=>[o("99")]),_:1}),e(u,{type:"next"})]),_:1}),e(x,null,{default:l(()=>[e(u,{type:"prev"}),e(a,null,{default:l(()=>[o("1")]),_:1}),e(r),e(a,null,{default:l(()=>[o("93")]),_:1}),e(a,null,{default:l(()=>[o("94")]),_:1}),e(a,null,{default:l(()=>[o("95")]),_:1}),e(a,null,{default:l(()=>[o("96")]),_:1}),e(a,null,{default:l(()=>[o("97")]),_:1}),e(a,null,{default:l(()=>[o("98")]),_:1}),e(a,{active:!0},{default:l(()=>[o("99")]),_:1}),e(u,{type:"next",disabled:!0})]),_:1})]),_:1})}const zt={$style:dt},de=F(rt,[["render",$t],["__cssModules",zt]]);export{de as default};
