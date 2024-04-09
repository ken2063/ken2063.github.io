import{_ as y,E as T,i as h,o as F,b as S,l as r,x as N,w as t,g as k,q as e,B as o}from"./index-47f0144b.js";import{P as C}from"./PageContents-eaa89b0e.js";import{L as V}from"./LocationBar-a33719b5.js";import{P as w,a as H}from"./PageTitle-32f3e12d.js";import{S as K}from"./StepProgress-e6b4e8fc.js";import{P as R}from"./PageHeadRow-8a0cce9e.js";import{P as U}from"./PageMainText-81e7fb66.js";import{F as A,a as G}from"./FormListItem-2264c1ad.js";import{F as q}from"./FormInvalid-7352e204.js";import{F as j}from"./FormInvalidMessage-bb1cfe97.js";import{B as z}from"./BasicButton-5b10203b.js";import{B as D,a as J}from"./ButtonListItem-c3f0c6e2.js";import{I as O,a as Q}from"./InputBlockCell-9017943e.js";import{B as W}from"./BasicSelect-40e32e8f.js";import{B as X}from"./BasicInput-5622c3d1.js";import{S as Y}from"./SecurityInput-61176f07.js";import"./vue-select.es-c01894e4.js";import"./text-delete-5c18c577.js";const Z={components:{PageContents:C,LocationBar:V,PageHead:w,PageTitle:H,PageHeadRow:R,StepProgress:K,PageMainText:U,FormList:A,FormListItem:G,FormInvalid:q,FormInvalidMessage:j,BasicButton:z,ButtonList:D,ButtonListItem:J,InputBlock:O,InputBlockCell:Q,BasicSelect:W,BasicInput:X,SecurityInput:Y},setup(){const d={ui:{header:T()}},m=h({nameError:!1,idNumberError:!1,phoneError:!1,businessNameError:!1,businessLicenseError:!1});return F(()=>{d.ui.header.setActive(()=>"onlineBranch")}),S(()=>{d.ui.header.setActive()}),{state:m}}};function $(d,m,ee,a,te,re){const c=r("LocationBar"),f=r("PageTitle"),p=r("StepProgress"),b=r("PageHeadRow"),g=r("PageMainText"),B=r("PageHead"),s=r("BasicInput"),l=r("InputBlockCell"),n=r("InputBlock"),u=r("FormInvalidMessage"),i=r("FormInvalid"),_=r("FormListItem"),P=r("SecurityInput"),I=r("BasicSelect"),x=r("FormList"),L=r("BasicButton"),M=r("ButtonListItem"),E=r("ButtonList"),v=r("PageContents");return k(),N(v,null,{head:t(()=>[e(c,{data:[{text:"홈",to:"/main/home"},{text:"온라인 지점",to:"/"},{text:"계약정보"},{text:"만기후처리"},{text:"연장 신청",to:"/"}]})]),default:t(()=>[e(B,null,{default:t(()=>[e(b,null,{right:t(()=>[e(p,{total:6,current:3})]),default:t(()=>[e(f,{align:"left"},{default:t(()=>[o("만기후처리 연장 신청")]),_:1})]),_:1}),e(g,{align:"left"},{default:t(()=>[o("계약자 정보를 확인해 주세요")]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(_,{titleText:"이름",target:"#My_P08_p010_name",disabled:!0},{default:t(()=>[e(i,{error:a.state.nameError},{default:t(()=>[e(n,{error:a.state.nameError,disabled:!0},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(s,{title:"이름",id:"My_P08_p010_name",defaultValue:"김하나",disabled:!0})]),_:1})]),_:1},8,["error"]),e(u,null,{default:t(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"주민등록번호",target:"#My_P08_p010_id",disabled:!0},{default:t(()=>[e(i,{error:a.state.idNumberError},{default:t(()=>[e(n,{error:a.state.idNumberError,disabled:!0},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(s,{type:"number",pattern:"\\d*",title:"주민등록번호 앞 6자리",id:"My_P08_p010_id",defaultValue:"123456",disabled:!0})]),_:1}),e(l,{type:"sub"},{default:t(()=>[o("-")]),_:1}),e(l,{flexible:!0},{default:t(()=>[e(P,{title:"주민등록번호 뒤 7자리",dot:[!0,!0,!0,!0,!0,!0,!0],disabled:!0})]),_:1})]),_:1},8,["error"]),e(u,null,{default:t(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"휴대폰번호",target:"#My_P08_p010_phone_telecom",disabled:!0},{default:t(()=>[e(i,{error:a.state.phoneError},{default:t(()=>[e(n,{error:a.state.phoneError,disabled:!0},{default:t(()=>[e(l,null,{default:t(()=>[e(I,{options:[{value:"1",label:"SKT"},{value:"2",label:"KT"},{value:"3",label:"LG U+"},{value:"4",label:"알뜰폰 SKT"},{value:"5",label:"알뜰폰 KT"},{value:"6",label:"알뜰폰 LG +"}],title:"통신사",inputId:"My_P08_p010_phone_telecom",classNames:{wrap:"input-width-telecom"},defaultValue:"1",disabled:!0})]),_:1}),e(l,{flexible:!0,margin:"regular"},{default:t(()=>[e(s,{pattern:"\\d*",title:"휴대폰번호",defaultValue:"010-1234-5678",disabled:!0})]),_:1})]),_:1},8,["error"]),e(u,null,{default:t(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"사업자명",target:"#My_P08_p010_businessName",disabled:!0},{default:t(()=>[e(i,{error:a.state.businessNameError},{default:t(()=>[e(n,{error:a.state.businessNameError,disabled:!0},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(s,{title:"사업자명",id:"My_P08_p010_businessName",defaultValue:"하나테크",disabled:!0})]),_:1})]),_:1},8,["error"]),e(u,null,{default:t(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"사업자등록번호",target:"#My_P08_p010_BusinessLicense",disabled:!0},{default:t(()=>[e(i,{error:a.state.businessLicenseError},{default:t(()=>[e(n,{error:a.state.businessLicenseError,disabled:!0},{default:t(()=>[e(l,{flexible:!0},{default:t(()=>[e(s,{ref:"license",title:"사업자등록번호",id:"My_P08_p010_BusinessLicense",defaultValue:"123-12-12345",disabled:!0},null,512)]),_:1})]),_:1},8,["error"]),e(u,null,{default:t(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),e(E,null,{default:t(()=>[e(M,null,{default:t(()=>[e(L,null,{default:t(()=>[o("다음")]),_:1})]),_:1})]),_:1})]),_:1})}const xe=y(Z,[["render",$]]);export{xe as default};
