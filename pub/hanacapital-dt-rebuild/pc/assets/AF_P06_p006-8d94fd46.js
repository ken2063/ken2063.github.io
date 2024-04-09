import{_ as q,E as D,o as G,b as j,i as z,l as o,x as J,w as e,g as O,q as t,B as a,e as n}from"./index-09d20b4d.js";import{P as Q}from"./PageContents-36fc532b.js";import{L as W}from"./LocationBar-12d983fe.js";import{P as X,a as Y}from"./PageTitle-73899e08.js";import{P as Z}from"./PageHeadRow-e9de67a2.js";import{S as $}from"./StepProgress-a673e169.js";import{P as ee}from"./PageMainText-e5e373b9.js";import{P as te}from"./PageSubText-21fd4d7f.js";import{B as oe}from"./BasicBox-ccb699cd.js";import{B as ae,a as ne}from"./BasicBoxHeadLeft-3f8b6a0e.js";import{C as le}from"./CarEmblem-fb56477e.js";import{K as se,a as re,b as _e,c as ce}from"./KeyValueText-22ab1718.js";import{U as ie}from"./UnitText-2e8b454e.js";import{F as me,a as ue}from"./FormListItem-a5180354.js";import{F as de}from"./FormInvalid-fdd8697f.js";import{I as pe,a as fe}from"./InputBlockCell-7eb1eb54.js";import{B as xe}from"./BasicInput-1a5a4356.js";import{F as Be}from"./FormInvalidMessage-df5a6726.js";import{F as ge}from"./FormHelpText-e4f8f37f.js";import{N as he}from"./NoticeText-152a1b30.js";import{B as Pe,a as Le}from"./BoxCheckListItem-5ad58956.js";import{B as Fe,a as Ce}from"./BoxCheckLabel-41d423b2.js";import{B as ke,a as Te}from"./ButtonListItem-20eeef64.js";import{B as Ae}from"./BasicButton-c114d6f6.js";import"./text-delete-603f2948.js";const Ie={components:{PageContents:Q,LocationBar:W,PageHead:X,PageTitle:Y,PageHeadRow:Z,StepProgress:$,PageMainText:ee,PageSubText:te,BasicBox:oe,BasicBoxHead:ae,BasicBoxHeadLeft:ne,CarEmblem:le,KeyValue:se,KeyValueItem:re,KeyValueTitle:_e,KeyValueText:ce,UnitText:ie,FormList:me,FormListItem:ue,FormInvalid:de,InputBlock:pe,InputBlockCell:fe,BasicInput:xe,FormInvalidMessage:Be,FormHelpText:ge,NoticeText:he,BoxCheckList:Pe,BoxCheckListItem:Le,BoxCheck:Fe,BoxCheckLabel:Ce,ButtonList:ke,ButtonListItem:Te,BasicButton:Ae},setup(){const c={ui:{header:D()}};return G(()=>{c.ui.header.setActive(()=>"auto")}),j(()=>{c.ui.header.setActive()}),{state:z({carAmountError:!1,loanAmountError:!1,typeError:!1})}}},be={class:"flex-box row-margin-small"},ye={class:"flex-box__cell"},ve=n("div",{class:"flex-box__cell flex-box__cell--small"},[n("p",{class:"text-body-4 font-weight-light"},"2020년식")],-1),He=n("h4",{class:"text-title-2 font-weight-medium"}," 쏘나타 뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏) ",-1),Ee=n("strong",null,"23,500,000",-1),Ve={class:"row-margin-container-medium row-margin-bottom-none"},we=n("div",{class:"text-body-1"},"만원",-1),Ke=n("div",{class:"text-body-1"},"만원",-1);function Se(c,B,Ne,l,Me,Ue){const g=o("LocationBar"),h=o("PageTitle"),P=o("StepProgress"),L=o("PageHeadRow"),F=o("PageMainText"),C=o("PageSubText"),k=o("PageHead"),T=o("CarEmblem"),A=o("BasicBoxHeadLeft"),I=o("BasicBoxHead"),b=o("KeyValueTitle"),y=o("UnitText"),v=o("KeyValueText"),H=o("KeyValueItem"),E=o("KeyValue"),V=o("BasicBox"),d=o("BasicInput"),p=o("InputBlockCell"),f=o("InputBlock"),i=o("FormInvalidMessage"),x=o("FormHelpText"),m=o("FormInvalid"),u=o("FormListItem"),w=o("NoticeText"),s=o("BoxCheckLabel"),r=o("BoxCheck"),_=o("BoxCheckListItem"),K=o("BoxCheckList"),S=o("FormList"),N=o("BasicButton"),M=o("ButtonListItem"),U=o("ButtonList"),R=o("PageContents");return O(),J(R,null,{head:e(()=>[t(g,{data:[{text:"홈",to:"/main/home"},{text:"오토금융",to:"/"},{text:"중고차오토론",to:"/"}]})]),default:e(()=>[t(k,null,{default:e(()=>[t(L,null,{right:e(()=>[t(P,{total:4,current:2})]),default:e(()=>[t(h,{align:"left"},{default:e(()=>[a("중고차오토론")]),_:1})]),_:1}),t(F,{align:"left"},{default:e(()=>[a("신청정보를 입력해 주세요")]),_:1}),t(C,{align:"left"},{default:e(()=>[a(" 고객님의 신용등급에 따라 금리와 한도가 달라질 수 있습니다. ")]),_:1})]),_:1}),t(V,null,{default:e(()=>[t(I,null,{default:e(()=>[t(A,null,{default:e(()=>[n("div",be,[n("div",ye,[t(T,{src:"/images/_dummy/car-emblem.png",name:"현대"})]),ve]),He]),_:1})]),_:1}),t(E,{verticalAlign:"center"},{default:e(()=>[t(H,null,{default:e(()=>[t(b,{classNames:{title:"color-black"}},{default:e(()=>[a(" 차량 가격 ")]),_:1}),t(v,null,{default:e(()=>[t(y,{rightUnit:"원",align:"right"},{default:e(()=>[Ee]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),n("div",Ve,[t(S,null,{default:e(()=>[t(u,{titleText:"차량구입금액",require:!0,target:"#AF_P06_p006_carAmount",forceFocus:!0},{default:e(()=>[t(m,{error:l.state.carAmountError},{default:e(()=>[t(f,{error:l.state.carAmountError},{innerRight:e(()=>[we]),default:e(()=>[t(p,{flexible:!0},{default:e(()=>[t(d,{align:"right",useDelete:!1,pattern:"\\d*",title:"차량구입금액",placeholder:"매매계약서상 매매금액을 입력해 주세요.",id:"AF_P06_p006_carAmount"})]),_:1})]),_:1},8,["error"]),t(i,null,{default:e(()=>[a("Error Message")]),_:1}),t(x,{classNames:{wrap:"align-right"}},{default:e(()=>[a("천오백삼십만원")]),_:1})]),_:1},8,["error"])]),_:1}),t(u,{titleText:"대출신청금액",target:"#AF_P06_p006_loanAmount",forceFocus:!0},{default:e(()=>[t(m,{error:l.state.loanAmountError},{default:e(()=>[t(f,{error:l.state.loanAmountError},{innerRight:e(()=>[Ke]),default:e(()=>[t(p,{flexible:!0},{default:e(()=>[t(d,{align:"right",useDelete:!1,pattern:"\\d*",title:"대출신청금액",placeholder:"최소 대출금액은 200만원 입니다.",id:"AF_P06_p006_loanAmount"})]),_:1})]),_:1},8,["error"]),t(i,null,{default:e(()=>[a("Error Message")]),_:1}),t(x,{classNames:{wrap:"align-right"}},{default:e(()=>[a("천삼백만원")]),_:1}),t(w,{classNames:{wrap:"row-margin-item-medium"}},{default:e(()=>[a(" 대출신청금액은 차량 기준가격과 차량구입비용을 초과할 수 없습니다. ")]),_:1})]),_:1},8,["error"])]),_:1}),t(u,{titleText:"대출신청기간",forceFocus:!0},{default:e(()=>[t(m,{error:l.state.typeError},{default:e(()=>[t(K,null,{default:e(()=>[t(_,null,{default:e(()=>[t(r,{minSide:!0,name:"AF_P06_p006_BoxCheckList001",id:"AF_P06_p006_BoxCheckList001_001"},{default:e(()=>[t(s,null,{default:e(()=>[a("24개월")]),_:1})]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(r,{minSide:!0,name:"AF_P06_p006_BoxCheckList001",id:"AF_P06_p006_BoxCheckList001_002",defaultChecked:!0},{default:e(()=>[t(s,null,{default:e(()=>[a("36개월")]),_:1})]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(r,{minSide:!0,name:"AF_P06_p006_BoxCheckList001",id:"AF_P06_p006_BoxCheckList001_003"},{default:e(()=>[t(s,null,{default:e(()=>[a("48개월")]),_:1})]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(r,{minSide:!0,name:"AF_P06_p006_BoxCheckList001",id:"AF_P06_p006_BoxCheckList001_004"},{default:e(()=>[t(s,null,{default:e(()=>[a("60개월")]),_:1})]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(r,{minSide:!0,name:"AF_P06_p006_BoxCheckList001",id:"AF_P06_p006_BoxCheckList001_005"},{default:e(()=>[t(s,null,{default:e(()=>[a("72개월")]),_:1})]),_:1})]),_:1})]),_:1}),t(i,null,{default:e(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),t(U,null,{default:e(()=>[t(M,null,{default:e(()=>[t(N,null,{default:e(()=>[a("다음")]),_:1})]),_:1})]),_:1})]),_:1})}const mt=q(Ie,[["render",Se]]);export{mt as default};
