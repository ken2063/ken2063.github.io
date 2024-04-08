import{_ as N,E as S,i as R,o as D,b as U,l as _,x as q,w as e,g as j,q as t,B as a,e as r}from"./index-55dc959b.js";import{P as z}from"./PageContents-f716fc69.js";import{L as G}from"./LocationBar-64abe5b5.js";import{P as J,a as O}from"./PageTitle-96bdc852.js";import{S as Q}from"./StepProgress-71a0202a.js";import{P as W}from"./PageHeadRow-30007a37.js";import{P as X}from"./PageMainText-797540ac.js";import{B as Y}from"./BasicBox-be061164.js";import{B as Z,a as $}from"./BasicBoxHeadLeft-85733993.js";import{K as ee,a as te,b as ae,c as _e}from"./KeyValueText-4674fba1.js";import{B as le,a as ne}from"./BoxCheckLabel-44346c4c.js";import{B as oe,a as ue}from"./BoxCheckListItem-a8d615b9.js";import{F as re,a as de}from"./FormListItem-e93ca3ef.js";import{F as pe}from"./FormInvalid-55f490a6.js";import{F as se}from"./FormInvalidMessage-14365b90.js";import{N as me}from"./NoticeText-3228353a.js";import{B as ce}from"./BasicButton-672abef3.js";import{B as fe,a as ie}from"./ButtonListItem-019a78ac.js";import{I as ye,a as ge}from"./InputBlockCell-bd7aff68.js";import{B as Pe}from"./BasicInput-b03c5ab1.js";import"./text-delete-2b2178c8.js";const Me={components:{PageContents:z,LocationBar:G,PageHead:J,PageTitle:O,PageHeadRow:W,StepProgress:Q,PageMainText:X,BasicBox:Y,BasicBoxHead:Z,BasicBoxHeadLeft:$,KeyValue:ee,KeyValueItem:te,KeyValueTitle:ae,KeyValueText:_e,BoxCheck:le,BoxCheckLabel:ne,BoxCheckList:oe,BoxCheckListItem:ue,FormList:re,FormListItem:de,FormInvalid:pe,FormInvalidMessage:se,NoticeText:me,BasicButton:ce,ButtonList:fe,ButtonListItem:ie,InputBlock:ye,InputBlockCell:ge,BasicInput:Pe},setup(){const g={ui:{header:S()}},P=R({productTypeError:!1,dateTypeError:!1,paymentAmountTypeError:!1,percentage001Error:!1,percentage002Error:!1,paymentAmount001Error:!1,paymentAmount002Error:!1});return D(()=>{g.ui.header.setActive(()=>"onlineBranch")}),U(()=>{g.ui.header.setActive()}),{state:P}}},Be=r("h3",{class:"text-title-2 font-weight-medium"},"오토리스 07호3994",-1),xe={class:"row-margin-container-medium row-margin-bottom-none"},he={class:"row-margin-item-medium"},Te=r("span",{class:"color-red"},"(계산서 발행)",-1),Ie=r("span",{class:"color-red"},"(계산서 미발행)",-1),Le={class:"row-margin-item-medium"},ke=r("br",null,null,-1),Ce=r("div",{class:"text-body-1"},"원",-1),Ee=r("div",{class:"text-body-1"},"원",-1);function Ae(g,P,we,u,Fe,Ve){const h=_("LocationBar"),T=_("PageTitle"),I=_("StepProgress"),L=_("PageHeadRow"),k=_("PageMainText"),C=_("PageHead"),E=_("BasicBoxHeadLeft"),A=_("BasicBoxHead"),m=_("KeyValueTitle"),c=_("KeyValueText"),f=_("KeyValueItem"),w=_("KeyValue"),F=_("BasicBox"),l=_("BoxCheckLabel"),n=_("BoxCheck"),o=_("BoxCheckListItem"),i=_("BoxCheckList"),d=_("FormInvalidMessage"),y=_("NoticeText"),p=_("FormInvalid"),s=_("FormListItem"),M=_("BasicInput"),B=_("InputBlockCell"),x=_("InputBlock"),V=_("FormList"),v=_("BasicButton"),b=_("ButtonListItem"),H=_("ButtonList"),K=_("PageContents");return j(),q(K,null,{head:e(()=>[t(h,{data:[{text:"홈",to:"/main/home"},{text:"온라인 지점",to:"/"},{text:"계약정보"},{text:"만기후처리"},{text:"연장 신청",to:"/"}]})]),default:e(()=>[t(C,null,{default:e(()=>[t(L,null,{right:e(()=>[t(I,{total:3,current:1})]),default:e(()=>[t(T,{align:"left"},{default:e(()=>[a("만기후처리 연장 신청")]),_:1})]),_:1}),t(k,{align:"left"},{default:e(()=>[a("연장 조건을 선택하세요")]),_:1})]),_:1}),t(F,null,{default:e(()=>[t(A,null,{default:e(()=>[t(E,null,{default:e(()=>[Be]),_:1})]),_:1}),t(w,{wrap:!0},{default:e(()=>[t(f,null,{default:e(()=>[t(m,null,{default:e(()=>[a("계약기간")]),_:1}),t(c,null,{default:e(()=>[a("2016.01.01-2021.01.01")]),_:1})]),_:1}),t(f,null,{default:e(()=>[t(m,null,{default:e(()=>[a("실납리스료")]),_:1}),t(c,null,{default:e(()=>[a("999,999 원")]),_:1})]),_:1}),t(f,null,{default:e(()=>[t(m,null,{default:e(()=>[a("잔존가치")]),_:1}),t(c,null,{default:e(()=>[a("99,999,999 원")]),_:1})]),_:1}),t(f,null,{default:e(()=>[t(m,null,{default:e(()=>[a("자동차세")]),_:1}),t(c,null,{default:e(()=>[a("포함")]),_:1})]),_:1}),t(f,null,{default:e(()=>[t(m,null,{default:e(()=>[a("보증금")]),_:1}),t(c,null,{default:e(()=>[a("999,999 원")]),_:1})]),_:1}),t(f,null,{default:e(()=>[t(m,null,{default:e(()=>[a("약정주행거리")]),_:1}),t(c,null,{default:e(()=>[a("999,999 km")]),_:1})]),_:1})]),_:1})]),_:1}),r("div",xe,[t(V,null,{default:e(()=>[t(s,{titleText:"상품 선택",forceFocus:!0},{default:e(()=>[t(p,{error:u.state.productTypeError},{default:e(()=>[t(i,null,{default:e(()=>[t(o,null,{default:e(()=>[t(n,{name:"My_P08_p007_product_type",id:"My_P08_p007_product_type001",defaultChecked:!0},{default:e(()=>[t(l,null,{default:e(()=>[a("운용리스")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p007_product_type",id:"My_P08_p007_product_type002"},{default:e(()=>[t(l,null,{default:e(()=>[a("금융리스")]),_:1})]),_:1})]),_:1})]),_:1}),t(d,null,{default:e(()=>[a("Error Message")]),_:1}),r("div",he,[t(y,{classNames:{wrap:"row-margin-item-medium"}},{default:e(()=>[a(" 운용리스: 잔가를 설정하여 이용자에게 임대하는 상품"),Te]),_:1}),t(y,{classNames:{wrap:"row-margin-item-medium"}},{default:e(()=>[a(" 금융리스: 잔가를 별도로 운영하지 않고 이용자에게 임대하는 상품"),Ie]),_:1})])]),_:1},8,["error"])]),_:1}),t(s,{titleText:"기간 선택",forceFocus:!0},{default:e(()=>[t(p,{error:u.state.dateTypeError},{default:e(()=>[t(i,null,{default:e(()=>[t(o,null,{default:e(()=>[t(n,{name:"My_P08_p007_date_type",id:"My_P08_p007_date_type001",defaultChecked:!0},{default:e(()=>[t(l,null,{default:e(()=>[a("12개월")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p007_date_type",id:"My_P08_p007_date_type002"},{default:e(()=>[t(l,null,{default:e(()=>[a("24개월")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p007_date_type",id:"My_P08_p007_date_type003"},{default:e(()=>[t(l,null,{default:e(()=>[a("36개월")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p007_date_type",id:"My_P08_p007_date_type004"},{default:e(()=>[t(l,null,{default:e(()=>[a("48개월")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p007_date_type",id:"My_P08_p007_date_type005"},{default:e(()=>[t(l,null,{default:e(()=>[a("60개월")]),_:1})]),_:1})]),_:1})]),_:1}),t(d,null,{default:e(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),t(s,{titleText:"보증금/선납금 선택",forceFocus:!0},{default:e(()=>[t(p,{error:u.state.paymentAmountTypeError},{default:e(()=>[t(i,null,{default:e(()=>[t(o,null,{default:e(()=>[t(n,{name:"My_P08_p007_paymentAmount_type",id:"My_P08_p007_paymentAmount_type_001",defaultChecked:!0},{default:e(()=>[t(l,null,{default:e(()=>[a("보증금")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p007_paymentAmount_type",id:"My_P08_p007_paymentAmount_type002"},{default:e(()=>[t(l,null,{default:e(()=>[a("선납금")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{minSide:!0,name:"My_P08_p007_paymentAmount_type",id:"My_P08_p007_paymentAmount_type003"},{default:e(()=>[t(l,null,{default:e(()=>[a("보증금+선납금")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p007_paymentAmount_type",id:"My_P08_p007_paymentAmount_type004"},{default:e(()=>[t(l,null,{default:e(()=>[a("해당사항없음")]),_:1})]),_:1})]),_:1})]),_:1}),t(d,null,{default:e(()=>[a("Error Message")]),_:1}),r("div",Le,[t(y,{classNames:{wrap:"row-margin-item-medium"}},{default:e(()=>[a(" 보증금: 보증금을 납입하는 경우 리스료가 할인됩니다."),ke,a(" (계약이 중도해지 되거나, 약정서에 기재된 채무를 전부 이행한 때에는 리스보증금을 반환해 드립니다.) ")]),_:1}),t(y,{classNames:{wrap:"row-margin-item-medium"}},{default:e(()=>[a(" 선납금: 리스기간 회차로 나누어 매월 리스료에 충당 (만기 시 반환되지 않습니다.) ")]),_:1})])]),_:1},8,["error"])]),_:1}),t(s,{titleText:"보증금비율",forceFocus:!0},{default:e(()=>[t(p,{error:u.state.percentage001Error},{default:e(()=>[t(i,{wrap:!0,col:4},{default:e(()=>[t(o,null,{default:e(()=>[t(n,{name:"My_P08_p007_percentage001",id:"My_P08_p007_percentage001_001",defaultChecked:!0},{default:e(()=>[t(l,null,{default:e(()=>[a("10%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p007_percentage001",id:"My_P08_p007_percentage001_002"},{default:e(()=>[t(l,null,{default:e(()=>[a("20%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{minSide:!0,name:"My_P08_p007_percentage001",id:"My_P08_p007_percentage001_003"},{default:e(()=>[t(l,null,{default:e(()=>[a("30%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p007_percentage001",id:"My_P08_p007_percentage001_004"},{default:e(()=>[t(l,null,{default:e(()=>[a("40%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p007_percentage001",id:"My_P08_p007_percentage001_005"},{default:e(()=>[t(l,null,{default:e(()=>[a("50%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p007_percentage001",id:"My_P08_p007_percentage001_006"},{default:e(()=>[t(l,null,{default:e(()=>[a("60%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{minSide:!0,name:"My_P08_p007_percentage001",id:"My_P08_p007_percentage001_007"},{default:e(()=>[t(l,null,{default:e(()=>[a("70%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p007_percentage001",id:"My_P08_p007_percentage001_008"},{default:e(()=>[t(l,null,{default:e(()=>[a("금액입력")]),_:1})]),_:1})]),_:1})]),_:1}),t(d,null,{default:e(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),t(s,{titleText:"금액",target:"#My_P08_p007_paymentAmount001"},{default:e(()=>[t(p,{error:u.state.paymentAmount001Error},{default:e(()=>[t(x,{error:u.state.paymentAmount001Error,disabled:!0},{innerRight:e(()=>[Ce]),default:e(()=>[t(B,{flexible:!0},{default:e(()=>[t(M,{pattern:"\\d*",title:"보증금 금액",id:"My_P08_p007_paymentAmount001",useDelete:!1,align:"right",disabled:!0,defaultValue:"10,002,120"})]),_:1})]),_:1},8,["error"]),t(d,null,{default:e(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),t(s,{titleText:"선납금비율",forceFocus:!0},{default:e(()=>[t(p,{error:u.state.percentage002Error},{default:e(()=>[t(i,{wrap:!0,col:4},{default:e(()=>[t(o,null,{default:e(()=>[t(n,{name:"My_P08_p007_percentage002",id:"My_P08_p007_percentage002_001",defaultChecked:!0},{default:e(()=>[t(l,null,{default:e(()=>[a("10%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p007_percentage002",id:"My_P08_p007_percentage002_002"},{default:e(()=>[t(l,null,{default:e(()=>[a("20%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{minSide:!0,name:"My_P08_p007_percentage002",id:"My_P08_p007_percentage002_003"},{default:e(()=>[t(l,null,{default:e(()=>[a("30%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p007_percentage002",id:"My_P08_p007_percentage002_004"},{default:e(()=>[t(l,null,{default:e(()=>[a("40%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p007_percentage002",id:"My_P08_p007_percentage002_005"},{default:e(()=>[t(l,null,{default:e(()=>[a("50%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p007_percentage002",id:"My_P08_p007_percentage002_006"},{default:e(()=>[t(l,null,{default:e(()=>[a("60%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{minSide:!0,name:"My_P08_p007_percentage002",id:"My_P08_p007_percentage002_007"},{default:e(()=>[t(l,null,{default:e(()=>[a("70%")]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(n,{name:"My_P08_p007_percentage002",id:"My_P08_p007_percentage002_008"},{default:e(()=>[t(l,null,{default:e(()=>[a("금액입력")]),_:1})]),_:1})]),_:1})]),_:1}),t(d,null,{default:e(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),t(s,{titleText:"금액",target:"#My_P08_p007_paymentAmount002"},{default:e(()=>[t(p,{error:u.state.paymentAmount002Error},{default:e(()=>[t(x,{error:u.state.paymentAmount002Error},{innerRight:e(()=>[Ee]),default:e(()=>[t(B,{flexible:!0},{default:e(()=>[t(M,{pattern:"\\d*",title:"선납금 금액",id:"My_P08_p007_paymentAmount002",useDelete:!1,align:"right"})]),_:1})]),_:1},8,["error"]),t(d,null,{default:e(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),t(H,null,{default:e(()=>[t(b,null,{default:e(()=>[t(v,null,{default:e(()=>[a("매회리스료 산출")]),_:1})]),_:1})]),_:1})]),_:1})}const et=N(Me,[["render",Ae]]);export{et as default};
