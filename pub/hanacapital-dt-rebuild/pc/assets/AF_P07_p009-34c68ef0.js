import{_ as S,E as K,o as G,b as H,i as U,r as O,l as o,x as j,w as t,g as R,q as e,B as a,e as d}from"./index-82fbfa1a.js";import{P as V}from"./PageContents-bfe4e6bc.js";import{L as q}from"./LocationBar-ae2ba5e0.js";import{P as z,a as D}from"./PageTitle-d5eca824.js";import{P as J}from"./PageHeadRow-6d77c4a4.js";import{S as Q}from"./StepProgress-7129bd2b.js";import{P as W}from"./PageMainText-8c0e5f52.js";import{B as X,a as Y}from"./BoxCheckLabel-12c16eae.js";import{B as Z,a as $}from"./BoxCheckListItem-6d8caf35.js";import{I as ee,a as te}from"./InputBlockCell-c22a4c3d.js";import{F as re,a as ae}from"./FormListItem-06cd731c.js";import{F as le}from"./FormInvalid-868ec577.js";import{F as oe}from"./FormInvalidMessage-6faaaf0b.js";import{S as _e}from"./SecurityInput-9c0cce9e.js";import{B as se}from"./BasicInput-52ae3246.js";import{B as ne}from"./BasicSelect-dec6cc8a.js";import{C as ue,a as ie}from"./CheckBoxObject-73db20f1.js";import{C as de}from"./CheckBoxLabelText-14f0ec60.js";import{B as fe,a as me}from"./ButtonListItem-1c2230e0.js";import{B as ce}from"./BasicButton-4f3c34ae.js";import"./text-delete-14661a09.js";import"./vue-select.es-0a69f9d3.js";import"./check-l-32b1e9d8.js";const pe={components:{PageContents:V,LocationBar:q,PageHead:z,PageTitle:D,PageHeadRow:J,StepProgress:Q,PageMainText:W,BoxCheck:X,BoxCheckLabel:Y,BoxCheckList:Z,BoxCheckListItem:$,InputBlock:ee,InputBlockCell:te,FormList:re,FormListItem:ae,FormInvalid:le,FormInvalidMessage:oe,SecurityInput:_e,BasicInput:se,BasicSelect:ne,CheckBox:ue,CheckBoxLabelText:de,CheckBoxObject:ie,ButtonList:fe,ButtonListItem:me,BasicButton:ce},setup(){const g={ui:{header:K()}};G(()=>{g.ui.header.setActive(()=>"auto")}),H(()=>{g.ui.header.setActive()});const E=U({corporationNameError:!1,representativeNameError:!1,businessNumberError:!1,suretyError:!1,relationshipType:!1,name001Error:!1,name002Error:!1,name003Error:!1,idNumber001Error:!1,idNumber002Error:!1,idNumber003Error:!1,phone001Error:!1,phone002Error:!1,phone003Error:!1,businessNameError:!1,businessLicense001Error:!1,businessLicense002Error:!1,birthNumberError:!1}),P=O(null);return{state:E,layer:P}}},be=d("h3",{class:"text-title-1 row-margin-contents"}," 양수인(승계후이용자) 정보 ",-1),xe={class:"row-margin-container-medium row-margin-bottom-none"},ge={class:"row-margin-block-small row-margin-bottom-none"},Ee=d("div",{class:"flex-box row-margin-contents"},[d("div",{class:"flex-box__cell"},[d("h3",{class:"text-title-1"},"신청인 정보")]),d("div",{class:"flex-box__cell flex-box__cell--small"},[d("p",{class:"text-body-1"},"(심사결과 안내 및 승계상담 담당자 정보)")])],-1);function Pe(g,E,P,r,he,Fe){const F=o("LocationBar"),B=o("PageTitle"),A=o("StepProgress"),T=o("PageHeadRow"),v=o("PageMainText"),L=o("PageHead"),f=o("BoxCheckLabel"),m=o("BoxCheck"),c=o("BoxCheckListItem"),h=o("BoxCheckList"),i=o("BasicInput"),l=o("InputBlockCell"),u=o("InputBlock"),_=o("FormInvalidMessage"),s=o("FormInvalid"),n=o("FormListItem"),b=o("SecurityInput"),p=o("BasicSelect"),x=o("FormList"),N=o("CheckBoxObject"),y=o("CheckBoxLabelText"),C=o("CheckBox"),I=o("BasicButton"),k=o("ButtonListItem"),M=o("ButtonList"),w=o("PageContents");return R(),j(w,null,{head:t(()=>[e(F,{data:[{text:"홈",to:"/main/home"},{text:"오토금융",to:"/"},{text:"오토승계",to:"/"}]})]),default:t(()=>[e(L,null,{default:t(()=>[e(T,null,{right:t(()=>[e(A,{total:6,current:2})]),default:t(()=>[e(B,{align:"left"},{default:t(()=>[a("오토승계")]),_:1})]),_:1}),e(v,{align:"left"},{default:t(()=>[a(" 양수인(승계후이용자) 및 신청인 정보를 입력해 주세요 ")]),_:1})]),_:1}),d("section",null,[be,e(h,null,{default:t(()=>[e(c,null,{default:t(()=>[e(m,{name:"AF_P07_p009_type",id:"AF_P07_p009_type_001",defaultChecked:!0},{default:t(()=>[e(f,null,{default:t(()=>[a("개인")]),_:1})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(m,{name:"AF_P07_p009_type",id:"AF_P07_p009_type_002"},{default:t(()=>[e(f,null,{default:t(()=>[a("개인사업자")]),_:1})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(m,{name:"AF_P07_p009_type",id:"AF_P07_p009_type_003"},{default:t(()=>[e(f,null,{default:t(()=>[a("법인사업자")]),_:1})]),_:1})]),_:1})]),_:1})]),d("div",xe,[e(x,null,{default:t(()=>[e(n,{titleText:"이름",target:"#AF_P07_p009_name001"},{default:t(()=>[e(s,{error:r.state.name001Error},{default:t(()=>[e(u,{error:r.state.name001Error},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(i,{title:"이름",id:"AF_P07_p009_name001"})]),_:1})]),_:1},8,["error"]),e(_,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"주민등록번호",target:"#AF_P07_p009_idNumber001"},{default:t(()=>[e(s,{error:r.state.idNumber001Error},{default:t(()=>[e(u,{error:r.state.idNumber001Error},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(i,{type:"number",pattern:"\\d*",title:"주민등록번호 앞 6자리",id:"AF_P07_p009_idNumber001"})]),_:1}),e(l,{type:"sub"},{default:t(()=>[a("-")]),_:1}),e(l,{flexible:!0},{default:t(()=>[e(b,{title:"주민등록번호 뒤 7자리",dot:[!0,!0,!0,!1,!1,!1,!1]})]),_:1})]),_:1},8,["error"]),e(_,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"휴대폰번호",target:"#AF_P07_p009_phone001_telecom"},{default:t(()=>[e(s,{error:r.state.phone001Error},{default:t(()=>[e(u,{error:r.state.phone001Error},{default:t(()=>[e(l,null,{default:t(()=>[e(p,{options:[{value:"1",label:"SKT"},{value:"2",label:"KT"},{value:"3",label:"LG U+"},{value:"4",label:"알뜰폰 SKT"},{value:"5",label:"알뜰폰 KT"},{value:"6",label:"알뜰폰 LG +"}],title:"통신사",inputId:"AF_P07_p009_phone001_telecom",classNames:{wrap:"input-width-telecom"}})]),_:1}),e(l,{flexible:!0,margin:"regular"},{default:t(()=>[e(i,{type:"number",pattern:"\\d*",title:"휴대폰번호"})]),_:1})]),_:1},8,["error"]),e(_,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(n,{titleText:"이름",target:"#AF_P07_p009_name002"},{default:t(()=>[e(s,{error:r.state.name002Error},{default:t(()=>[e(u,{error:r.state.name002Error},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(i,{title:"이름",id:"AF_P07_p009_name002"})]),_:1})]),_:1},8,["error"]),e(_,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"주민등록번호",target:"#AF_P07_p009_idNumber002"},{default:t(()=>[e(s,{error:r.state.idNumber002Error},{default:t(()=>[e(u,{error:r.state.idNumber002Error},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(i,{type:"number",pattern:"\\d*",title:"주민등록번호 앞 6자리",id:"AF_P07_p009_idNumber002"})]),_:1}),e(l,{type:"sub"},{default:t(()=>[a("-")]),_:1}),e(l,{flexible:!0},{default:t(()=>[e(b,{title:"주민등록번호 뒤 7자리",dot:[!0,!0,!0,!1,!1,!1,!1]})]),_:1})]),_:1},8,["error"]),e(_,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"휴대폰번호",target:"#AF_P07_p009_phone002_telecom"},{default:t(()=>[e(s,{error:r.state.phone002Error},{default:t(()=>[e(u,{error:r.state.phone002Error},{default:t(()=>[e(l,null,{default:t(()=>[e(p,{options:[{value:"1",label:"SKT"},{value:"2",label:"KT"},{value:"3",label:"LG U+"},{value:"4",label:"알뜰폰 SKT"},{value:"5",label:"알뜰폰 KT"},{value:"6",label:"알뜰폰 LG +"}],title:"통신사",inputId:"AF_P07_p009_phone002_telecom",classNames:{wrap:"input-width-telecom"}})]),_:1}),e(l,{flexible:!0,margin:"regular"},{default:t(()=>[e(i,{type:"number",pattern:"\\d*",title:"휴대폰번호"})]),_:1})]),_:1},8,["error"]),e(_,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"사업자명",target:"#AF_P07_p009_businessName"},{default:t(()=>[e(s,{error:r.state.businessNameError},{default:t(()=>[e(u,{error:r.state.businessNameError},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(i,{title:"사업자명",id:"AF_P07_p009_businessName"})]),_:1})]),_:1},8,["error"]),e(_,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"사업자등록번호",target:"#AF_P07_p009_BusinessLicense"},{default:t(()=>[e(s,{error:r.state.businessLicense001Error},{default:t(()=>[e(u,{error:r.state.businessLicense001Error},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(i,{title:"사업자등록번호",id:"AF_P07_p009_BusinessLicense"})]),_:1})]),_:1},8,["error"]),e(_,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(n,{titleText:"법인명",target:"#AF_P07_p009_corporationName"},{default:t(()=>[e(s,{error:r.state.corporationNameError},{default:t(()=>[e(u,{error:r.state.corporationNameError},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(i,{title:"법인명",id:"AF_P07_p009_corporationName"})]),_:1})]),_:1},8,["error"]),e(_,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"대표자명",target:"#AF_P07_p009_representativeName"},{default:t(()=>[e(s,{error:r.state.representativeNameError},{default:t(()=>[e(u,{error:r.state.representativeNameError},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(i,{title:"대표자명",id:"AF_P07_p009_representativeName"})]),_:1})]),_:1},8,["error"]),e(_,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"법인번호",target:"#AF_P07_p009_businessNumber"},{default:t(()=>[e(s,{error:r.state.businessNumberError},{default:t(()=>[e(u,{error:r.state.businessNumberError},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(i,{type:"number",pattern:"\\d*",title:"법인번호 앞 6자리",id:"AF_P07_p009_businessNumber"})]),_:1}),e(l,{type:"sub"},{default:t(()=>[a("-")]),_:1}),e(l,{flexible:!0},{default:t(()=>[e(b,{title:"법인번호 뒤 7자리",dot:[!0,!0,!0,!1,!1,!1,!1]})]),_:1})]),_:1},8,["error"]),e(_,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"사업자번호",target:"#AF_P07_p009_BusinessLicense"},{default:t(()=>[e(s,{error:r.state.businessLicense002Error},{default:t(()=>[e(u,{error:r.state.businessLicense002Error},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(i,{pattern:"\\d*",title:"사업자번호",id:"AF_P07_p009_BusinessLicense"})]),_:1})]),_:1},8,["error"]),e(_,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"연대보증인 여부",forceFocus:!0},{default:t(()=>[e(s,{error:r.state.suretyError},{default:t(()=>[e(h,null,{default:t(()=>[e(c,null,{default:t(()=>[e(m,{name:"AF_P07_p009_surety",id:"AF_P07_p009_surety001",defaultChecked:!0},{default:t(()=>[e(f,null,{default:t(()=>[a("개인")]),_:1})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(m,{name:"AF_P07_p009_surety",id:"AF_P07_p009_surety002"},{default:t(()=>[e(f,null,{default:t(()=>[a("없음")]),_:1})]),_:1})]),_:1})]),_:1}),e(_,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"계약자와의 관계",target:"#AF_P07_p009_relationshipType",selectOnly:!0},{default:t(()=>[e(s,{error:r.state.AF_P07_p009_relationshipType},{default:t(()=>[e(u,{error:r.state.AF_P07_p009_relationshipType},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(p,{options:[{value:"1",label:"최대주주"},{value:"2",label:"대주주"},{value:"3",label:"대표이사"},{value:"4",label:"무한책임 사원"}],title:"계약자와의 관계",inputId:"AF_P07_p009_relationshipType"})]),_:1})]),_:1},8,["error"]),e(_,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"이름",target:"#AF_P07_p009_name003"},{default:t(()=>[e(s,{error:r.state.name003Error},{default:t(()=>[e(u,{error:r.state.name003Error},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(i,{title:"이름",id:"AF_P07_p009_name003"})]),_:1})]),_:1},8,["error"]),e(_,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"주민등록번호",target:"#AF_P07_p009_idNumber003"},{default:t(()=>[e(s,{error:r.state.idNumber003Error},{default:t(()=>[e(u,{error:r.state.idNumber003Error},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(i,{type:"number",pattern:"\\d*",title:"주민등록번호 앞 6자리",id:"AF_P07_p009_idNumber003"})]),_:1}),e(l,{type:"sub"},{default:t(()=>[a("-")]),_:1}),e(l,{flexible:!0},{default:t(()=>[e(b,{title:"주민등록번호 뒤 7자리",dot:[!0,!0,!0,!1,!1,!1,!1]})]),_:1})]),_:1},8,["error"]),e(_,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"휴대폰번호",target:"#AF_P07_p009_phone003_telecom"},{default:t(()=>[e(s,{error:r.state.phone003Error},{default:t(()=>[e(u,{error:r.state.phone003Error},{default:t(()=>[e(l,null,{default:t(()=>[e(p,{options:[{value:"1",label:"SKT"},{value:"2",label:"KT"},{value:"3",label:"LG U+"},{value:"4",label:"알뜰폰 SKT"},{value:"5",label:"알뜰폰 KT"},{value:"6",label:"알뜰폰 LG +"}],title:"통신사",inputId:"AF_P07_p009_phone003_telecom",classNames:{wrap:"input-width-telecom"}})]),_:1}),e(l,{flexible:!0,margin:"regular"},{default:t(()=>[e(i,{type:"number",pattern:"\\d*",title:"휴대폰번호"})]),_:1})]),_:1},8,["error"]),e(_,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),d("section",ge,[Ee,e(C,{id:"AF_P07_p009_agree001",theme:"tertiary"},{default:t(()=>[e(N),e(y,null,{default:t(()=>[a("신청인 정보와 동일")]),_:1})]),_:1}),e(x,{classNames:{wrap:"row-margin-contents"}},{default:t(()=>[e(n,{titleText:"이름",target:"#AF_P07_p009_name002"},{default:t(()=>[e(s,{error:r.state.name002Error},{default:t(()=>[e(u,{error:r.state.name002Error},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(i,{title:"이름",id:"AF_P07_p009_name002"})]),_:1})]),_:1},8,["error"]),e(_,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"생년월일",target:"#AF_P07_p009_birth"},{default:t(()=>[e(s,{error:r.state.birthNumberError},{default:t(()=>[e(u,{error:r.state.birthNumberError},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(i,{type:"number",pattern:"\\d*",title:"생년월일",id:"AF_P07_p009_birth"})]),_:1})]),_:1},8,["error"]),e(_,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"휴대폰번호",target:"#AF_P07_p009_phone002_telecom"},{default:t(()=>[e(s,{error:r.state.phone002Error},{default:t(()=>[e(u,{error:r.state.phone002Error},{default:t(()=>[e(l,null,{default:t(()=>[e(p,{options:[{value:"1",label:"SKT"},{value:"2",label:"KT"},{value:"3",label:"LG U+"},{value:"4",label:"알뜰폰 SKT"},{value:"5",label:"알뜰폰 KT"},{value:"6",label:"알뜰폰 LG +"}],title:"통신사",inputId:"AF_P07_p009_phone002_telecom",classNames:{wrap:"input-width-telecom"}})]),_:1}),e(l,{flexible:!0,margin:"regular"},{default:t(()=>[e(i,{type:"number",pattern:"\\d*",title:"휴대폰번호"})]),_:1})]),_:1},8,["error"]),e(_,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})])]),e(M,null,{default:t(()=>[e(k,null,{default:t(()=>[e(I,null,{default:t(()=>[a("다음")]),_:1})]),_:1})]),_:1})]),_:1})}const De=S(pe,[["render",Pe]]);export{De as default};
