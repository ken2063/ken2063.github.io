import{_ as M,E as v,i as H,o as V,b as D,l as r,x as R,w as t,g as q,q as e,B as o,e as P}from"./index-09d20b4d.js";import{B as z}from"./BasicInput-1a5a4356.js";import{L as A}from"./LocationBar-12d983fe.js";import{F as U,a as W}from"./FormListItem-a5180354.js";import{F as j}from"./FormHelpText-e4f8f37f.js";import{F as G}from"./FormInvalid-fdd8697f.js";import{F as J}from"./FormInvalidMessage-df5a6726.js";import{I as K,a as O}from"./InputBlockCell-7eb1eb54.js";import{P as Q}from"./PageContents-36fc532b.js";import{S as X}from"./StepProgress-a673e169.js";import{P as Y,a as Z}from"./PageTitle-73899e08.js";import{P as $}from"./PageHeadRow-e9de67a2.js";import{P as ee}from"./PageMainText-e5e373b9.js";import{P as te}from"./PageSubText-21fd4d7f.js";import{S as re}from"./SecurityInput-9c7fd89f.js";import{B as oe,a as ae}from"./BoxCheckListItem-5ad58956.js";import{B as le,a as ne}from"./BoxCheckLabel-41d423b2.js";import{B as _e}from"./BasicButton-c114d6f6.js";import{B as se,a as ie}from"./ButtonListItem-20eeef64.js";import{B as ue}from"./BasicDatepicker-59705bf8.js";import"./text-delete-603f2948.js";import"./calendar-3be30ddc.js";const ce={components:{PageContents:Q,LocationBar:A,PageHead:Y,PageTitle:Z,PageHeadRow:$,StepProgress:X,PageMainText:ee,PageSubText:te,FormList:U,FormListItem:W,FormHelpText:j,FormInvalid:G,FormInvalidMessage:J,InputBlock:K,InputBlockCell:O,BasicInput:z,SecurityInput:re,BoxCheckList:oe,BoxCheckListItem:ae,BoxCheck:le,BoxCheckLabel:ne,BasicButton:_e,ButtonList:se,ButtonListItem:ie,BasicDatepicker:ue},setup(){const c={ui:{header:v()}},B=H({typeError:!1,workplaceNameError001:!1,workplaceNameError002:!1,dayError001:!1,dayError002:!1,incomeError:!1,businessNumberError:!1});return V(()=>{c.ui.header.setActive(()=>"personalLoan")}),D(()=>{c.ui.header.setActive()}),{state:B}}},de={class:"row-margin-block-small row-margin-bottom-none"},me=P("h3",{class:"text-title-1 row-margin-contents"},"소득구분",-1),pe=P("div",{class:"text-body-1"},"만원",-1);function fe(c,B,Pe,a,Be,xe){const F=r("LocationBar"),b=r("PageTitle"),k=r("StepProgress"),h=r("PageHeadRow"),I=r("PageMainText"),E=r("PageSubText"),L=r("PageHead"),s=r("BasicInput"),l=r("InputBlockCell"),n=r("InputBlock"),_=r("FormListItem"),y=r("SecurityInput"),x=r("FormList"),d=r("BoxCheckLabel"),m=r("BoxCheck"),p=r("BoxCheckListItem"),C=r("BoxCheckList"),f=r("BasicButton"),i=r("FormInvalidMessage"),u=r("FormInvalid"),g=r("BasicDatepicker"),T=r("FormHelpText"),w=r("ButtonListItem"),N=r("ButtonList"),S=r("PageContents");return q(),R(S,null,{head:t(()=>[e(F,{data:[{text:"홈",to:"/main/home"},{text:"개인금융",to:"/"},{text:"우수고객추가대출",to:"/"}]})]),default:t(()=>[e(L,null,{default:t(()=>[e(h,null,{right:t(()=>[e(k,{total:5,current:2})]),default:t(()=>[e(b,{align:"left"},{default:t(()=>[o("우수고객추가대출")]),_:1})]),_:1}),e(I,{align:"left"},{default:t(()=>[o("고객정보를 입력해 주세요")]),_:1}),e(E,{align:"left"},{default:t(()=>[o(" 실제 정보와 상이할 경우 한도 및 금리가 달라질 수 있습니다. ")]),_:1})]),_:1}),e(x,{classNames:{wrap:"row-margin-contents"}},{default:t(()=>[e(_,{titleText:"이름",disabled:!0,target:"#PF_P05_p003_name"},{default:t(()=>[e(n,{disabled:!0},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(s,{title:"이름",defaultValue:"김하나",disabled:!0,id:"PF_P05_p003_name"})]),_:1})]),_:1})]),_:1}),e(_,{titleText:"주민등록번호",target:"#PF_P05_p003_id",disabled:!0},{default:t(()=>[e(n,{disabled:!0},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(s,{type:"number",pattern:"\\d*",title:"주민등록번호 앞 6자리",id:"PF_P05_p003_id",disabled:!0,defaultValue:"951222"})]),_:1}),e(l,{type:"sub"},{default:t(()=>[o("-")]),_:1}),e(l,{flexible:!0},{default:t(()=>[e(y,{title:"주민등록번호 뒤 7자리",dot:[!0,!0,!0,!0,!0,!0,!0],disabled:!0})]),_:1})]),_:1})]),_:1})]),_:1}),P("section",de,[me,e(C,null,{default:t(()=>[e(p,null,{default:t(()=>[e(m,{minSide:!0,name:"PF_P05_p003_checkBox001",id:"PF_P05_p003_checkBox001_001",defaultChecked:!0},{default:t(()=>[e(d,null,{default:t(()=>[o("급여소득자")]),_:1})]),_:1})]),_:1}),e(p,null,{default:t(()=>[e(m,{minSide:!0,name:"PF_P05_p003_checkBox001",id:"PF_P05_p003_checkBox001_002"},{default:t(()=>[e(d,null,{default:t(()=>[o("자영업자")]),_:1})]),_:1})]),_:1}),e(p,null,{default:t(()=>[e(m,{minSide:!0,name:"PF_P05_p003_checkBox001",id:"PF_P05_p003_checkBox001_003"},{default:t(()=>[e(d,null,{default:t(()=>[o("기타")]),_:1})]),_:1})]),_:1})]),_:1}),e(x,{classNames:{wrap:"row-margin-container-medium"}},{default:t(()=>[e(_,{titleText:"직장명",target:"#PF_P05_p003_WorkplaceName001SearchButton"},{default:t(()=>[e(u,{error:a.state.workplaceNameError001},{default:t(()=>[e(n,{error:a.state.workplaceNameError001},{right:t(()=>[e(f,{size:"small",theme:"tertiary",id:"PF_P05_p003_WorkplaceName001SearchButton"},{default:t(()=>[o(" 직장 검색 ")]),_:1})]),default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(s,{title:"직장명",disabled:!0})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"입사일",target:"#PF_P05_p003_day_001_Button"},{default:t(()=>[e(u,{error:a.state.dayError001},{default:t(()=>[e(n,{error:a.state.dayError001},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(g,{title:"입사일",id:"PF_P05_p003_day_001",buttonId:"PF_P05_p003_day_001_Button"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"연소득",target:"#PF_P05_p003_income"},{default:t(()=>[e(u,{error:a.state.incomeError},{default:t(()=>[e(n,{error:a.state.incomeError},{innerRight:t(()=>[pe]),default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(s,{align:"right",useDelete:!1,type:"number",pattern:"\\d*",title:"연소득",id:"PF_P05_p003_income"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"상호명",target:"#PF_P05_p003_workplaceName002"},{default:t(()=>[e(u,{error:a.state.workplaceNameError002},{default:t(()=>[e(n,{error:a.state.workplaceNameError002},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(s,{title:"상호명",id:"PF_P05_p003_workplaceName002"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"사업자번호",target:"#PF_P05_p003_businessNumber"},{default:t(()=>[e(u,{error:a.state.businessNumberError},{default:t(()=>[e(n,{error:a.state.businessNumberError},{right:t(()=>[e(f,{size:"small",theme:"quaternary"},{default:t(()=>[o(" 확인 ")]),_:1})]),default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(s,{pattern:"\\d*",title:"사업자번호",id:"PF_P05_p003_businessNumber"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[o("Error Message")]),_:1}),e(T,null,{default:t(()=>[o("‘-’를 제외하고 입력해주세요.")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"사업개시일",target:"#PF_P05_p003_day_002_Button"},{default:t(()=>[e(u,{error:a.state.dayError002},{default:t(()=>[e(n,{error:a.state.dayError002},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(g,{title:"사업개시일",id:"PF_P05_p003_day_002",buttonId:"PF_P05_p003_day_002_Button"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),e(N,null,{default:t(()=>[e(w,null,{default:t(()=>[e(f,null,{default:t(()=>[o("확인")]),_:1})]),_:1})]),_:1})]),_:1})}const Ae=M(ce,[["render",fe]]);export{Ae as default};