import{_ as S,E as N,i as R,o as D,b as U,l as _,x as q,w as e,g as j,q as t,B as a,e as f}from"./index-55dc959b.js";import{P as z}from"./PageContents-f716fc69.js";import{L as G}from"./LocationBar-64abe5b5.js";import{P as J,a as O}from"./PageTitle-96bdc852.js";import{S as Q}from"./StepProgress-71a0202a.js";import{P as W}from"./PageHeadRow-30007a37.js";import{P as X}from"./PageMainText-797540ac.js";import{B as Y}from"./BasicBox-be061164.js";import{B as Z,a as $}from"./BasicBoxHeadLeft-85733993.js";import{K as ee,a as te,b as ae,c as _e}from"./KeyValueText-4674fba1.js";import{B as le,a as ne}from"./BoxCheckLabel-44346c4c.js";import{B as oe,a as ue}from"./BoxCheckListItem-a8d615b9.js";import{F as re,a as de}from"./FormListItem-e93ca3ef.js";import{F as pe}from"./FormInvalid-55f490a6.js";import{F as se}from"./FormInvalidMessage-14365b90.js";import{N as me}from"./NoticeText-3228353a.js";import{B as ce}from"./BasicButton-672abef3.js";import{B as fe,a as ie}from"./ButtonListItem-019a78ac.js";import{I as ye,a as ge}from"./InputBlockCell-bd7aff68.js";import{B as Pe}from"./BasicInput-b03c5ab1.js";import"./text-delete-2b2178c8.js";const Be={components:{PageContents:z,LocationBar:G,PageHead:J,PageTitle:O,PageHeadRow:W,StepProgress:Q,PageMainText:X,BasicBox:Y,BasicBoxHead:Z,BasicBoxHeadLeft:$,KeyValue:ee,KeyValueItem:te,KeyValueTitle:ae,KeyValueText:_e,BoxCheck:le,BoxCheckLabel:ne,BoxCheckList:oe,BoxCheckListItem:ue,FormList:re,FormListItem:de,FormInvalid:pe,FormInvalidMessage:se,NoticeText:me,BasicButton:ce,ButtonList:fe,ButtonListItem:ie,InputBlock:ye,InputBlockCell:ge,BasicInput:Pe},setup(){const y={ui:{header:N()}},g=R({dateTypeError:!1,paymentAmountTypeError:!1,percentage001Error:!1,percentage002Error:!1,paymentAmount001Error:!1,paymentAmount002Error:!1});return D(()=>{y.ui.header.setActive(()=>"onlineBranch")}),U(()=>{y.ui.header.setActive()}),{state:g}}},Me=f("h3",{class:"text-title-2 font-weight-medium"},"렌터카 07호3994",-1),xe={class:"row-margin-container-medium row-margin-bottom-none"},he={class:"row-margin-item-medium"},Ie=f("br",null,null,-1),Le=f("div",{class:"text-body-1"},"원",-1),Te=f("div",{class:"text-body-1"},"원",-1);function ke(y,g,Ae,u,Ce,Ee){const h=_("LocationBar"),I=_("PageTitle"),L=_("StepProgress"),T=_("PageHeadRow"),k=_("PageMainText"),A=_("PageHead"),C=_("BasicBoxHeadLeft"),E=_("BasicBoxHead"),r=_("KeyValueTitle"),d=_("KeyValueText"),p=_("KeyValueItem"),F=_("KeyValue"),V=_("BasicBox"),l=_("BoxCheckLabel"),n=_("BoxCheck"),o=_("BoxCheckListItem"),i=_("BoxCheckList"),s=_("FormInvalidMessage"),m=_("FormInvalid"),c=_("FormListItem"),P=_("NoticeText"),B=_("BasicInput"),M=_("InputBlockCell"),x=_("InputBlock"),w=_("FormList"),v=_("BasicButton"),b=_("ButtonListItem"),H=_("ButtonList"),K=_("PageContents");return j(),q(K,null,{head:e(()=>[t(h,{data:[{text:"홈",to:"/main/home"},{text:"온라인 지점",to:"/"},{text:"계약정보"},{text:"만기후처리"},{text:"연장 신청",to:"/"}]})]),default:e(()=>[t(A,null,{default:e(()=>[t(T,null,{right:e(()=>[t(L,{total:3,current:1})]),default:e(()=>[t(I,{align:"left"},{default:e(()=>[a("만기후처리 연장 신청")]),_:1})]),_:1}),t(k,{align:"left"},{default:e(()=>[a("연장 조건을 선택하세요")]),_:1})]),_:1}),t(V,null,{default:e(()=>[t(E,null,{default:e(()=>[t(C,null,{default:e(()=>[Me]),_:1})]),_:1}),t(F,{wrap:!0},{default:e(()=>[t(p,null,{default:e(()=>[t(r,null,{default:e(()=>[a("계약기간")]),_:1}),t(d,null,{default:e(()=>[a("2016.01.01-2021.01.01")]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(r,null,{default:e(()=>[a("실납렌트료(VAT포함)")]),_:1}),t(d,null,{default:e(()=>[a("999,999 원")]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(r,null,{default:e(()=>[a("잔존가치(VAT포함)")]),_:1}),t(d,null,{default:e(()=>[a("99,999,999 원")]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(r,null,{default:e(()=>[a("약정주행거리")]),_:1}),t(d,null,{default:e(()=>[a("999,999 km")]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(r,null,{default:e(()=>[a("보증금")]),_:1}),t(d,null,{default:e(()=>[a("99,999,999 원")]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(r,null,{default:e(()=>[a("정비서비스")]),_:1}),t(d,null,{default:e(()=>[a("프리미엄")]),_:1})]),_:1})]),_:1})]),_:1}),f("div",xe,[t(w,null,{default:e(()=>[t(c,{titleText:"기간 선택",forceFocus:!0},{default:e(()=>[t(m,{error:u.state.dateTypeError},{default:e(()=>[t(i,null,{default:e(()=>[t(o,null,{default:e(()=>[t(n,{name:"My_P08_p005_date_type",id:"My_P08_p005_date_type001",defaultChecked:!0},{default:e(()=>[t(l,null,{default:e(()=>[a("12개월")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p005_date_type",id:"My_P08_p005_date_type002"},{default:e(()=>[t(l,null,{default:e(()=>[a("24개월")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p005_date_type",id:"My_P08_p005_date_type003"},{default:e(()=>[t(l,null,{default:e(()=>[a("36개월")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p005_date_type",id:"My_P08_p005_date_type004"},{default:e(()=>[t(l,null,{default:e(()=>[a("48개월")]),_:1})]),_:1})]),_:1})]),_:1}),t(s,null,{default:e(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),t(c,{titleText:"보증금/선납금 선택",forceFocus:!0},{default:e(()=>[t(m,{error:u.state.paymentAmountTypeError},{default:e(()=>[t(i,null,{default:e(()=>[t(o,null,{default:e(()=>[t(n,{name:"My_P08_p005_paymentAmount_type",id:"My_P08_p005_paymentAmount_type_001",defaultChecked:!0},{default:e(()=>[t(l,null,{default:e(()=>[a("보증금")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p005_paymentAmount_type",id:"My_P08_p005_paymentAmount_type002"},{default:e(()=>[t(l,null,{default:e(()=>[a("선납금")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{minSide:!0,name:"My_P08_p005_paymentAmount_type",id:"My_P08_p005_paymentAmount_type003"},{default:e(()=>[t(l,null,{default:e(()=>[a("보증금+선납금")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p005_paymentAmount_type",id:"My_P08_p005_paymentAmount_type004"},{default:e(()=>[t(l,null,{default:e(()=>[a("해당사항없음")]),_:1})]),_:1})]),_:1})]),_:1}),t(s,null,{default:e(()=>[a("Error Message")]),_:1}),f("div",he,[t(P,{classNames:{wrap:"row-margin-item-medium"}},{default:e(()=>[a(" 보증금: 보증금을 납입하는 경우 리스료가 할인됩니다."),Ie,a(" (계약이 중도해지 되거나, 약정서에 기재된 채무를 전부 이행한 때에는 리스보증금을 반환해 드립니다.) ")]),_:1}),t(P,{classNames:{wrap:"row-margin-item-medium"}},{default:e(()=>[a(" 선납금: 리스기간 회차로 나누어 매월 리스료에 충당 (만기 시 반환되지 않습니다.) ")]),_:1})])]),_:1},8,["error"])]),_:1}),t(c,{titleText:"보증금비율",forceFocus:!0},{default:e(()=>[t(m,{error:u.state.percentage001Error},{default:e(()=>[t(i,{wrap:!0,col:4},{default:e(()=>[t(o,null,{default:e(()=>[t(n,{name:"My_P08_p005_percentage001",id:"My_P08_p005_percentage001_001",defaultChecked:!0},{default:e(()=>[t(l,null,{default:e(()=>[a("10%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p005_percentage001",id:"My_P08_p005_percentage001_002"},{default:e(()=>[t(l,null,{default:e(()=>[a("20%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{minSide:!0,name:"My_P08_p005_percentage001",id:"My_P08_p005_percentage001_003"},{default:e(()=>[t(l,null,{default:e(()=>[a("30%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p005_percentage001",id:"My_P08_p005_percentage001_004"},{default:e(()=>[t(l,null,{default:e(()=>[a("40%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p005_percentage001",id:"My_P08_p005_percentage001_005"},{default:e(()=>[t(l,null,{default:e(()=>[a("50%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p005_percentage001",id:"My_P08_p005_percentage001_006"},{default:e(()=>[t(l,null,{default:e(()=>[a("60%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{minSide:!0,name:"My_P08_p005_percentage001",id:"My_P08_p005_percentage001_007"},{default:e(()=>[t(l,null,{default:e(()=>[a("70%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p005_percentage001",id:"My_P08_p005_percentage001_008"},{default:e(()=>[t(l,null,{default:e(()=>[a("금액입력")]),_:1})]),_:1})]),_:1})]),_:1}),t(s,null,{default:e(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),t(c,{titleText:"금액",target:"#My_P08_p005_paymentAmount001"},{default:e(()=>[t(m,{error:u.state.paymentAmount001Error},{default:e(()=>[t(x,{error:u.state.paymentAmount001Error,disabled:!0},{innerRight:e(()=>[Le]),default:e(()=>[t(M,{flexible:!0},{default:e(()=>[t(B,{pattern:"\\d*",title:"보증금 금액",id:"My_P08_p005_paymentAmount001",useDelete:!1,align:"right",disabled:!0,defaultValue:"10,002,120"})]),_:1})]),_:1},8,["error"]),t(s,null,{default:e(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),t(c,{titleText:"선납금비율",forceFocus:!0},{default:e(()=>[t(m,{error:u.state.percentage002Error},{default:e(()=>[t(i,{wrap:!0,col:4},{default:e(()=>[t(o,null,{default:e(()=>[t(n,{name:"My_P08_p005_percentage002",id:"My_P08_p005_percentage002_001",defaultChecked:!0},{default:e(()=>[t(l,null,{default:e(()=>[a("10%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p005_percentage002",id:"My_P08_p005_percentage002_002"},{default:e(()=>[t(l,null,{default:e(()=>[a("20%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{minSide:!0,name:"My_P08_p005_percentage002",id:"My_P08_p005_percentage002_003"},{default:e(()=>[t(l,null,{default:e(()=>[a("30%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p005_percentage002",id:"My_P08_p005_percentage002_004"},{default:e(()=>[t(l,null,{default:e(()=>[a("40%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p005_percentage002",id:"My_P08_p005_percentage002_005"},{default:e(()=>[t(l,null,{default:e(()=>[a("50%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p005_percentage002",id:"My_P08_p005_percentage002_006"},{default:e(()=>[t(l,null,{default:e(()=>[a("60%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{minSide:!0,name:"My_P08_p005_percentage002",id:"My_P08_p005_percentage002_007"},{default:e(()=>[t(l,null,{default:e(()=>[a("70%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p005_percentage002",id:"My_P08_p005_percentage002_008"},{default:e(()=>[t(l,null,{default:e(()=>[a("금액입력")]),_:1})]),_:1})]),_:1})]),_:1}),t(s,null,{default:e(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),t(c,{titleText:"금액",target:"#My_P08_p005_paymentAmount002"},{default:e(()=>[t(m,{error:u.state.paymentAmount002Error},{default:e(()=>[t(x,{error:u.state.paymentAmount002Error},{innerRight:e(()=>[Te]),default:e(()=>[t(M,{flexible:!0},{default:e(()=>[t(B,{pattern:"\\d*",title:"선납금 금액",id:"My_P08_p005_paymentAmount002",useDelete:!1,align:"right"})]),_:1})]),_:1},8,["error"]),t(s,null,{default:e(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),t(H,null,{default:e(()=>[t(b,null,{default:e(()=>[t(v,null,{default:e(()=>[a("다음")]),_:1})]),_:1})]),_:1})]),_:1})}const Ye=S(Be,[["render",ke]]);export{Ye as default};
