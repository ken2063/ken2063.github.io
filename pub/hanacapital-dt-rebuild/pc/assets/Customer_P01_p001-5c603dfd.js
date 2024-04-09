import{_ as j,E as G,i as J,o as K,b as W,l,x as h,w as a,g as f,q as e,B as t,e as i,n as c,d as b,f as B,t as L,F as k,h as X}from"./index-09d20b4d.js";import{P as Y}from"./PageContents-36fc532b.js";import{L as Z}from"./LocationBar-12d983fe.js";import{P as ee,a as ae}from"./PageTitle-73899e08.js";import{I as te,a as ne}from"./InputBlockCell-7eb1eb54.js";import{B as le}from"./BasicInput-1a5a4356.js";import{B as oe}from"./BasicSelect-efb8f1e5.js";import{S as re}from"./SearchButton-0e7e2c65.js";import{P as se,a as ue,b as ie}from"./PaginationNavNumber-177dfb8a.js";import{P as _e}from"./PaginationNavEllipsis-aa82f338.js";import{F as ce,a as me}from"./FilterTabButton-98b033c5.js";import{S as de,a as pe}from"./SubTabButton-35de08ba.js";import{U as fe,a as ge,b as ye,c as we}from"./UiAccordionOpener-ff53a77d.js";import{T as qe}from"./TextButton-465efd7d.js";import{B as he}from"./BasicButton-c114d6f6.js";import{B as ve,a as Ne}from"./ButtonListItem-20eeef64.js";import{I as be}from"./right-arrow-207ae2f0.js";import"./text-delete-603f2948.js";import"./vue-select.es-ecf16441.js";import"./pagination-next-b75488d6.js";import"./UiTabButton-59885198.js";const Be="_qna_k45qx_6",ke="_qna__list_k45qx_9",Ae="_qna__item_k45qx_14",Pe="_qna__cell_k45qx_17",Ie="_qna__head_k45qx_21",Le="_qna__symbol_k45qx_26",Fe="_qna__right_k45qx_45",Te="_qna__opener_k45qx_52",$e="_qna__title_k45qx_61",xe="_qna__answer_k45qx_68",Ce="_qna__contents_k45qx_73",Se="_empty_k45qx_84",Ue="_empty__text_k45qx_89",Re="_nav_k45qx_104",De="_category_k45qx_108",Ee={"board-search-bar":"_board-search-bar_k45qx_1",qna:Be,qna__list:ke,qna__item:Ae,qna__cell:Pe,qna__head:Ie,qna__symbol:Le,"qna__symbol--answer":"_qna__symbol--answer_k45qx_41",qna__right:Fe,qna__opener:Te,qna__title:$e,qna__answer:xe,qna__contents:Ce,empty:Se,empty__text:Ue,"empty--secondary":"_empty--secondary_k45qx_97",nav:Re,category:De},Ve=()=>[{name:"금융상품",depth:[{name:"자동차금융"},{name:"개인금융"},{name:"기업금융"}]},{name:"고객서비스",depth:[{name:"결제/입금"},{name:"승계/연장"},{name:"온라인 약정"},{name:"금리인하요구"}]},{name:"홈페이지이용",depth:[{name:"본인인증"},{name:"서류발급"},{name:"회원가입"},{name:"아이핀"}]},{name:"기타",depth:[{name:"채용관련"}]}],He={components:{PageContents:Y,LocationBar:Z,PageHead:ee,PageTitle:ae,InputBlock:te,InputBlockCell:ne,BasicInput:le,BasicSelect:oe,SearchButton:re,PaginationNav:se,PaginationNavArrow:ue,PaginationNavEllipsis:_e,PaginationNavNumber:ie,FilterTab:ce,FilterTabButton:me,SubTab:de,SubTabButton:pe,UiAccordion:fe,UiAccordionItem:ge,UiAccordionLayer:ye,UiAccordionOpener:we,BasicButton:he,ButtonList:ve,ButtonListItem:Ne,TextButton:qe,IconRightArrow:be},setup(){const n={ui:{header:G()}},g=J({data:Ve(),active:0,activeDepth:0}),A=(_=0,P=0)=>{g.active=_,g.activeDepth=P};return K(()=>{n.ui.header.setActive(()=>"customer"),n.ui.header.setDepthActive(()=>"customer001")}),W(()=>{n.ui.header.setActive(),n.ui.header.setDepthActive()}),{state:g,setPage:A}}},Me={class:"row-margin-container-medium"},Oe=i("br",null,null,-1);function Qe(n,g,A,_,P,je){const F=l("LocationBar"),T=l("PageTitle"),$=l("PageHead"),x=l("BasicSelect"),v=l("InputBlockCell"),C=l("BasicInput"),S=l("SearchButton"),U=l("InputBlock"),I=l("FilterTabButton"),R=l("FilterTab"),D=l("SubTabButton"),E=l("SubTab"),V=l("UiAccordionOpener"),u=l("BasicButton"),o=l("ButtonListItem"),s=l("ButtonList"),m=l("IconRightArrow"),d=l("TextButton"),H=l("UiAccordionLayer"),M=l("UiAccordionItem"),O=l("UiAccordion"),y=l("PaginationNavArrow"),r=l("PaginationNavNumber"),q=l("PaginationNavEllipsis"),N=l("PaginationNav"),Q=l("PageContents");return f(),h(Q,{size:"wide"},{head:a(()=>[e(F,{data:[{text:"홈",to:"/main/home"},{text:"고객센터",to:"/"},{text:"FAQ",to:"/"}]})]),default:a(()=>[e($,null,{default:a(()=>[e(T,null,{default:a(()=>[t("FAQ")]),_:1})]),_:1}),i("div",{class:c(n.$style["board-search-bar"])},[e(U,null,{default:a(()=>[e(v,null,{default:a(()=>[e(x,{options:[{value:"1",label:"전체"},{value:"2",label:"제목"},{value:"3",label:"내용"}],title:"검색 조건 선택",defaultValue:"1",classNames:{wrap:"input-width-category"}})]),_:1}),e(v,{flexible:!0,margin:"regular"},{default:a(()=>[e(C,{type:"search",title:"게시물 검색어",placeholder:"검색어 입력"})]),_:1}),e(v,{type:"search"},{default:a(()=>[e(S)]),_:1})]),_:1})],2),i("div",{class:c([n.$style.empty,n.$style["empty--secondary"]])},[i("p",{class:c(n.$style.empty__text)},"검색된 결과가 없습니다.",2)],2),i("div",null,[i("div",Me,[e(R,{classNames:{wrap:n.$style.nav}},{default:a(()=>[e(I,{tagName:"button",type:"button",active:_.state.active===0,onClick:g[0]||(g[0]=w=>_.setPage(0))},{default:a(()=>[t(" 전체 ")]),_:1},8,["active"]),(f(!0),b(k,null,B(_.state.data,(w,p)=>(f(),h(I,{key:p,tagName:"button",type:"button",active:_.state.active===p+1,onClick:z=>_.setPage(p+1)},{default:a(()=>[t(L(w.name),1)]),_:2},1032,["active","onClick"]))),128))]),_:1},8,["classNames"]),_.state.active>0?(f(),h(E,{key:0,classNames:{wrap:n.$style.category}},{default:a(()=>[(f(!0),b(k,null,B(_.state.data[_.state.active-1].depth,(w,p)=>(f(),h(D,{key:p,tagName:"button",type:"button",active:_.state.activeDepth===p,onClick:z=>_.setPage(_.state.active,p)},{default:a(()=>[t(L(w.name),1)]),_:2},1032,["active","onClick"]))),128))]),_:1},8,["classNames"])):X("",!0)]),i("div",{class:c(n.$style.qna)},[e(O,{classNames:{wrap:n.$style.qna__list}},{default:a(()=>[(f(),b(k,null,B(10,w=>e(M,{key:w,classNames:{item:n.$style.qna__item}},{default:a(()=>[i("div",{class:c(n.$style.qna__head)},[i("div",{class:c(n.$style.qna__symbol)},"Q",2),i("div",{class:c(n.$style.qna__cell)},[i("h3",{class:c(n.$style.qna__title)}," [신차할부(오토론)] 신차할부 오토론이란? ",2)],2),i("div",{class:c(n.$style.qna__right)},[e(V,{classNames:{button:n.$style.qna__opener}},null,8,["classNames"])],2)],2),e(H,{classNames:{layer:n.$style.qna__layer}},{default:a(()=>[i("div",{class:c(n.$style.qna__answer)},[i("div",{class:c([n.$style.qna__symbol,n.$style["qna__symbol--answer"]])}," A ",2),i("div",{class:c(n.$style.qna__cell)},[i("section",{class:c(n.$style.qna__contents)},[t(" // 내용 노출"),Oe,t(" 차량을 구매할 목적으로 당사에서 대출 받고, 일정기간 동안 원금과 이자가 포함된 원리금을 매월 일정하게 납부하는 대출 상품입니다 "),e(s,{wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:a(()=>[e(o,null,{default:a(()=>[e(u,{tagName:"RouterLink",to:""},{default:a(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),e(s,{col:"4",wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:a(()=>[e(o,null,{default:a(()=>[e(u,{tagName:"RouterLink",to:""},{default:a(()=>[t("버튼")]),_:1})]),_:1}),e(o,null,{default:a(()=>[e(u,{tagName:"RouterLink",to:""},{default:a(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),e(s,{col:"4",wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:a(()=>[e(o,null,{default:a(()=>[e(u,{tagName:"RouterLink",to:""},{default:a(()=>[t("버튼")]),_:1})]),_:1}),e(o,null,{default:a(()=>[e(u,{tagName:"RouterLink",to:""},{default:a(()=>[t("버튼")]),_:1})]),_:1}),e(o,null,{default:a(()=>[e(u,{tagName:"RouterLink",to:""},{default:a(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),e(s,{wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:a(()=>[e(o,null,{default:a(()=>[e(u,{theme:"tertiary"},{default:a(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),e(s,{wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:a(()=>[e(o,null,{default:a(()=>[e(u,{theme:"secondary"},{default:a(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),e(s,{wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:a(()=>[e(o,null,{default:a(()=>[e(u,{theme:"quaternary"},{default:a(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),e(s,{wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:a(()=>[e(o,null,{default:a(()=>[e(u,{theme:"quaternary-green"},{default:a(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),e(s,{wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:a(()=>[e(o,null,{default:a(()=>[e(u,{theme:"quaternary-blue"},{default:a(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),e(s,{wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:a(()=>[e(o,null,{default:a(()=>[e(u,{theme:"quaternary-navy"},{default:a(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),e(s,{wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:a(()=>[e(o,null,{default:a(()=>[e(u,{line:!0,theme:"quaternary-green",tagName:"RouterLink",to:""},{default:a(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),e(s,{wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:a(()=>[e(o,null,{default:a(()=>[e(u,{line:!0,theme:"quaternary-blue",tagName:"RouterLink",to:""},{default:a(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),e(s,{wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:a(()=>[e(o,null,{default:a(()=>[e(u,{line:!0,theme:"quaternary",tagName:"RouterLink",to:""},{default:a(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),e(s,{wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:a(()=>[e(o,null,{default:a(()=>[e(u,{line:!0,theme:"quaternary-navy",tagName:"RouterLink",to:""},{default:a(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),e(s,{wrap:!0,align:"left",classNames:{wrap:"row-margin-container-medium"}},{default:a(()=>[e(o,null,{default:a(()=>[e(d,{theme:"secondary",iconFillAll:!0},{rightIcon:a(()=>[e(m)]),default:a(()=>[t(" 버튼 ")]),_:1})]),_:1})]),_:1}),e(s,{col:"2",wrap:!0,align:"left",classNames:{wrap:"row-margin-container-medium"}},{default:a(()=>[e(o,null,{default:a(()=>[e(d,{theme:"secondary",iconFillAll:!0},{rightIcon:a(()=>[e(m)]),default:a(()=>[t(" 버튼 ")]),_:1})]),_:1}),e(o,null,{default:a(()=>[e(d,{theme:"secondary",iconFillAll:!0},{rightIcon:a(()=>[e(m)]),default:a(()=>[t(" 버튼 ")]),_:1})]),_:1})]),_:1}),e(s,{col:"3",wrap:!0,align:"left",classNames:{wrap:"row-margin-container-medium"}},{default:a(()=>[e(o,null,{default:a(()=>[e(d,{theme:"secondary",iconFillAll:!0},{rightIcon:a(()=>[e(m)]),default:a(()=>[t(" 버튼 ")]),_:1})]),_:1}),e(o,null,{default:a(()=>[e(d,{theme:"secondary",iconFillAll:!0},{rightIcon:a(()=>[e(m)]),default:a(()=>[t(" 버튼 ")]),_:1})]),_:1}),e(o,null,{default:a(()=>[e(d,{theme:"secondary",iconFillAll:!0},{rightIcon:a(()=>[e(m)]),default:a(()=>[t(" 버튼 ")]),_:1})]),_:1})]),_:1}),e(s,{wrap:!0,align:"left",classNames:{wrap:"row-margin-container-medium"}},{default:a(()=>[e(o,null,{default:a(()=>[e(d,{theme:"tertiary",iconFillAll:!0},{rightIcon:a(()=>[e(m)]),default:a(()=>[t(" 버튼 ")]),_:1})]),_:1})]),_:1}),e(s,{wrap:!0,align:"left",classNames:{wrap:"row-margin-container-medium"}},{default:a(()=>[e(o,null,{default:a(()=>[e(d,{class:"color-gray-tertiary",iconFillAll:!0},{rightIcon:a(()=>[e(m)]),default:a(()=>[t(" 버튼 ")]),_:1})]),_:1})]),_:1}),e(s,{wrap:!0,align:"left",classNames:{wrap:"row-margin-container-medium"}},{default:a(()=>[e(o,null,{default:a(()=>[e(d,{class:"color-navy",iconFillAll:!0},{rightIcon:a(()=>[e(m)]),default:a(()=>[t(" 버튼 ")]),_:1})]),_:1})]),_:1})],2)],2)],2)]),_:1},8,["classNames"])]),_:2},1032,["classNames"])),64))]),_:1},8,["classNames"])],2),e(N,null,{default:a(()=>[e(y,{type:"prev",disabled:!0}),e(r,{active:!0},{default:a(()=>[t("1")]),_:1}),e(r,null,{default:a(()=>[t("2")]),_:1}),e(r,null,{default:a(()=>[t("3")]),_:1}),e(r,null,{default:a(()=>[t("4")]),_:1}),e(r,null,{default:a(()=>[t("5")]),_:1}),e(r,null,{default:a(()=>[t("6")]),_:1}),e(r,null,{default:a(()=>[t("7")]),_:1}),e(q),e(r,null,{default:a(()=>[t("999")]),_:1}),e(y,{type:"next"})]),_:1}),e(N,null,{default:a(()=>[e(y,{type:"prev"}),e(r,null,{default:a(()=>[t("1")]),_:1}),e(q),e(r,null,{default:a(()=>[t("13")]),_:1}),e(r,null,{default:a(()=>[t("14")]),_:1}),e(r,{active:!0},{default:a(()=>[t("15")]),_:1}),e(r,null,{default:a(()=>[t("16")]),_:1}),e(r,null,{default:a(()=>[t("17")]),_:1}),e(q),e(r,null,{default:a(()=>[t("99")]),_:1}),e(y,{type:"next"})]),_:1}),e(N,null,{default:a(()=>[e(y,{type:"prev"}),e(r,null,{default:a(()=>[t("1")]),_:1}),e(q),e(r,null,{default:a(()=>[t("93")]),_:1}),e(r,null,{default:a(()=>[t("94")]),_:1}),e(r,null,{default:a(()=>[t("95")]),_:1}),e(r,null,{default:a(()=>[t("96")]),_:1}),e(r,null,{default:a(()=>[t("97")]),_:1}),e(r,null,{default:a(()=>[t("98")]),_:1}),e(r,{active:!0},{default:a(()=>[t("99")]),_:1}),e(y,{type:"next",disabled:!0})]),_:1})])]),_:1})}const ze={$style:Ee},pa=j(He,[["render",Qe],["__cssModules",ze]]);export{pa as default};
