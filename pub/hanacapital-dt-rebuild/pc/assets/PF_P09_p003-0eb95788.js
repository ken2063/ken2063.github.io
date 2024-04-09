import{_ as V,E as H,i as z,o as R,b as q,l as o,x as D,w as t,g as U,q as e,B as a,e as r,n as f}from"./index-47f0144b.js";import{L as O}from"./LocationBar-a33719b5.js";import{B as j}from"./BasicInput-5622c3d1.js";import{F as G}from"./FormInvalid-7352e204.js";import{F as J}from"./FormInvalidMessage-bb1cfe97.js";import{F as K,a as Q}from"./FormListItem-2264c1ad.js";import{I as W,a as X}from"./InputBlockCell-9017943e.js";import{P as Y}from"./PageContents-eaa89b0e.js";import{S as Z}from"./StepProgress-e6b4e8fc.js";import{P as $,a as ee}from"./PageTitle-32f3e12d.js";import{P as te}from"./PageHeadRow-8a0cce9e.js";import{P as re}from"./PageMainText-81e7fb66.js";import{P as ae}from"./PageSubText-e95ebbf3.js";import{S as oe}from"./SecurityInput-61176f07.js";import{B as le,a as se}from"./BoxCheckListItem-6d496e21.js";import{B as ne,a as ie}from"./BoxCheckLabel-0d3d3f25.js";import{B as ue}from"./BasicButton-5b10203b.js";import{F as _e}from"./FormHelpText-b9c7c882.js";import{B as de,a as me}from"./ButtonListItem-c3f0c6e2.js";import{B as ce}from"./BasicSelect-40e32e8f.js";import{N as fe}from"./NoticeText-022032a0.js";import{T as pe}from"./TextButton-f2b85444.js";import"./text-delete-5c18c577.js";import"./vue-select.es-c01894e4.js";const be={"basic-table":"_basic-table_1cnaf_1","basic-table__left-line":"_basic-table__left-line_1cnaf_75","basic-table--secondary":"_basic-table--secondary_1cnaf_78","not-table":"_not-table_1cnaf_82","text-button":"_text-button_1cnaf_95","estate-setting-info":"_estate-setting-info_1cnaf_99"},ge={components:{PageContents:Y,LocationBar:O,PageHead:$,PageTitle:ee,PageHeadRow:te,StepProgress:Z,PageMainText:re,PageSubText:ae,FormList:K,FormListItem:Q,FormInvalid:G,InputBlock:W,InputBlockCell:X,BasicInput:j,FormInvalidMessage:J,SecurityInput:oe,BoxCheckList:le,BoxCheckListItem:se,BoxCheck:ne,BoxCheckLabel:ie,BasicButton:ue,FormHelpText:_e,ButtonList:de,ButtonListItem:me,BasicSelect:ce,NoticeText:fe,TextButton:pe},setup(){const d={ui:{header:H()}},h=z({nameError:!1,idNumberError:!1,businessNameError:!1,businessNumberError:!1,businessAddressError:!1,apartmentInfoError:!1,setAmountError:!1,residenceError:!1,limitAmountError:!1});return R(()=>{d.ui.header.setActive(()=>"personalLoan")}),q(()=>{d.ui.header.setActive()}),{state:h}}},xe={class:"row-margin-block-small row-margin-bottom-none"},Pe=r("h3",{class:"text-title-1 row-margin-contents"},"소득구분",-1),he={class:"row-margin-block-small row-margin-bottom-none"},Be=r("h3",{class:"text-title-1 row-margin-contents"},"아파트 정보",-1),Fe=r("div",{class:"text-body-1 font-weight-medium"},"만원",-1),we={class:"flex-box align-items-start row-margin-item-medium"},Ee={class:"flex-box__cell flex-1"},Ie={class:"flex-box__cell flex-box__cell--medium"},Ne={class:"row-margin-container-medium"},Te=r("h4",{class:"text-body-1 row-margin-item-group"},"부동산설정정보",-1),ke=r("table",null,[r("colgroup",null,[r("col",{style:{width:"80px"}}),r("col",{style:{width:"120px"}}),r("col",{style:{width:"131px"}}),r("col"),r("col",{style:{width:"92px"}})]),r("thead",null,[r("tr",null,[r("th",null,"순위번호"),r("th",null,"등기목적"),r("th",null,"접수정보"),r("th",null,"주요등기사항"),r("th",null,"대상소유자")])]),r("tbody",null,[r("tr",null,[r("td",null,"3"),r("td",null,"근저당권설정"),r("td",null,"2021년2월5일 제4845호"),r("td",null,[a(" 채권최고금액"),r("br"),a("금330,000,000원"),r("br"),a(" 근저당권자 주식회사"),r("br"),a("국민은행 ")]),r("td",null,"박지혜")])])],-1),ye=[ke],Le=r("section",{class:"row-margin-container-medium"},[r("h4",{class:"text-body-1 row-margin-item-group"}," 표제부(전유 부분의 건물의 표시) 건물내역 "),r("p",{class:"text-body-3"},"철근콘크리트조60.69㎡")],-1),Ce=r("div",{class:"text-body-1 font-weight-medium"},"만원",-1);function ve(d,h,Se,l,Me,Ve){const I=o("LocationBar"),N=o("PageTitle"),T=o("StepProgress"),k=o("PageHeadRow"),y=o("PageMainText"),L=o("PageSubText"),C=o("PageHead"),n=o("BasicInput"),s=o("InputBlockCell"),i=o("InputBlock"),m=o("FormInvalidMessage"),u=o("FormInvalid"),_=o("FormListItem"),v=o("SecurityInput"),p=o("FormList"),b=o("BoxCheckLabel"),g=o("BoxCheck"),x=o("BoxCheckListItem"),B=o("BoxCheckList"),c=o("BasicButton"),F=o("FormHelpText"),w=o("ButtonListItem"),E=o("ButtonList"),A=o("BasicSelect"),P=o("NoticeText"),S=o("TextButton"),M=o("PageContents");return U(),D(M,null,{head:t(()=>[e(I,{data:[{text:"홈",to:"/main/home"},{text:"개인금융",to:"/"},{text:"사업자 주택담보대출",to:"/"}]})]),default:t(()=>[e(C,null,{default:t(()=>[e(k,null,{right:t(()=>[e(T,{total:3,current:2})]),default:t(()=>[e(N,{align:"left"},{default:t(()=>[a("사업자 주택담보대출")]),_:1})]),_:1}),e(y,{align:"left"},{default:t(()=>[a("고객정보를 입력해 주세요")]),_:1}),e(L,{align:"left"},{default:t(()=>[a(" 실제 정보와 상이할 경우 한도 및 금리가 달라질 수 있습니다. ")]),_:1})]),_:1}),e(p,null,{default:t(()=>[e(_,{titleText:"이름",target:"#PF_P09_p003_name",disabled:!0},{default:t(()=>[e(u,{error:l.state.nameError},{default:t(()=>[e(i,{error:l.state.nameError,disabled:!0},{default:t(()=>[e(s,{flexible:!0},{default:t(()=>[e(n,{title:"이름",id:"PF_P09_p003_name",defaultValue:"김하나",disabled:!0})]),_:1})]),_:1},8,["error"]),e(m,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"주민등록번호",target:"#PF_P09_p003_idNumber",disabled:!0},{default:t(()=>[e(u,{error:l.state.idNumberError},{default:t(()=>[e(i,{error:l.state.idNumberError,disabled:!0},{default:t(()=>[e(s,{flexible:!0},{default:t(()=>[e(n,{type:"number",pattern:"\\d*",title:"주민등록번호 앞 6자리",id:"PF_P09_p003_idNumber",defaultValue:"123456",disabled:!0})]),_:1}),e(s,{type:"sub"},{default:t(()=>[a("-")]),_:1}),e(s,{flexible:!0},{default:t(()=>[e(v,{title:"주민등록번호 뒤 7자리",dot:[!0,!0,!0,!0,!0,!0,!0],disabled:!0})]),_:1})]),_:1},8,["error"]),e(m,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),r("section",xe,[Pe,e(B,null,{default:t(()=>[e(x,null,{default:t(()=>[e(g,{name:"PF_P09_p003_incomeCheck",id:"PF_P09_p003_incomeCheck",defaultChecked:!0,disabled:!1},{default:t(()=>[e(b,null,{default:t(()=>[a("자영업자")]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{classNames:{wrap:"row-margin-container-medium"}},{default:t(()=>[e(_,{titleText:"상호명",target:"#PF_P09_p003_businessName",disabled:!1},{default:t(()=>[e(u,{error:l.state.businessNameError},{default:t(()=>[e(i,{error:l.state.businessNameError,disabled:!1},{default:t(()=>[e(s,{flexible:!0},{default:t(()=>[e(n,{title:"상호명",id:"PF_P09_p003_businessName",disabled:!1})]),_:1})]),_:1},8,["error"]),e(m,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"사업자번호",target:"#PF_P09_p003_businessNumber",disabled:!1},{default:t(()=>[e(u,{error:l.state.businessNumberError},{default:t(()=>[e(i,{error:l.state.businessNumberError,disabled:!1},{right:t(()=>[e(c,{size:"small",theme:"quaternary",disabled:!1},{default:t(()=>[a("확인")]),_:1})]),default:t(()=>[e(s,{flexible:!0},{default:t(()=>[e(n,{pattern:"\\d*",title:"사업자번호",id:"PF_P09_p003_businessNumber",disabled:!1})]),_:1})]),_:1},8,["error"]),e(m,null,{default:t(()=>[a("Error Message")]),_:1}),e(F,null,{default:t(()=>[a("‘-’를 제외하고 입력해주세요.")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"사업자주소",target:"#PF_P09_p003_businessAddress",disabled:!1},{default:t(()=>[e(u,{error:l.state.businessAddressError},{default:t(()=>[e(i,{error:l.state.businessAddressError},{right:t(()=>[e(c,{size:"small",theme:"tertiary",id:"PF_P09_p003_businessAddress",disabled:!1},{default:t(()=>[a("검색")]),_:1})]),default:t(()=>[e(s,{flexible:!0},{default:t(()=>[e(n,{title:"사업자주소",defaultValue:"01000",disabled:!0})]),_:1})]),_:1},8,["error"]),e(i,{error:l.state.businessAddressError,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:t(()=>[e(s,{flexible:!0},{default:t(()=>[e(n,{title:"사업자주소",defaultValue:"인천 서구 에코로 181",disabled:!0})]),_:1})]),_:1},8,["error"]),e(i,{error:l.state.businessAddressError,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:t(()=>[e(s,{flexible:!0},{default:t(()=>[e(n,{title:"사업자주소",defaultValue:"하나금융 로비",disabled:!0})]),_:1})]),_:1},8,["error"])]),_:1},8,["error"])]),_:1})]),_:1})]),e(E,null,{default:t(()=>[e(w,null,{default:t(()=>[e(c,null,{default:t(()=>[a("다음")]),_:1})]),_:1})]),_:1}),r("section",he,[Be,e(p,null,{default:t(()=>[e(_,{titleText:"아파트 정보",target:"#PF_P09_p003_apartmentInfo"},{default:t(()=>[e(u,{error:l.state.apartmentInfoError},{default:t(()=>[e(i,{error:l.state.apartmentInfoError},{right:t(()=>[e(c,{size:"small",theme:"tertiary",id:"PF_P09_p003_apartmentInfo"},{default:t(()=>[a("아파트 검색")]),_:1})]),default:t(()=>[e(s,{flexible:!0},{default:t(()=>[e(n,{title:"아파트 정보",defaultValue:"인천광역시 연수구 송도동 39-1",disabled:!0})]),_:1})]),_:1},8,["error"]),e(i,{error:l.state.apartmentInfoError,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:t(()=>[e(s,{flexible:!0},{default:t(()=>[e(n,{title:"아파트 정보",defaultValue:"더샵 랜드마크시티",disabled:!0})]),_:1}),e(s,null,{default:t(()=>[e(A,{options:[{value:"1",label:"85㎡"},{value:"2",label:"100㎡"}],title:"아파트 평형",inputId:"PF_P09_p003_apartmentInfoArea",classNames:{wrap:"input-width-area"},defaultValue:"1"})]),_:1})]),_:1},8,["error"]),e(P,{classNames:{wrap:"row-margin-item-medium"}},{default:t(()=>[a(" 본인 소유 또는 배우자 공동소유만 대출진행 가능합니다. ")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"부동산 설정금액",titleOptionalText:"(선택)",target:"#PF_P09_p003_amount"},{default:t(()=>[e(u,{error:l.state.setAmountError},{default:t(()=>[e(i,{error:l.state.setAmountError},{innerRight:t(()=>[Fe]),default:t(()=>[e(s,{flexible:!0},{default:t(()=>[e(n,{pattern:"\\d*",id:"PF_P09_p003_amount",title:"부동산 설정금액 (선택)",useDelete:!1,align:"right"})]),_:1})]),_:1},8,["error"]),e(m,null,{default:t(()=>[a("Error Message")]),_:1}),r("div",we,[r("div",Ee,[e(P,null,{default:t(()=>[a(" 등기부등본 조회버튼을 클릭하여 확인되는 하단의 채권최고액을 부동산설정금액란에 입력바랍니다. (근저당설정이 2건 이상일 경우 합산하여 입력) ")]),_:1})]),r("div",Ie,[r("div",{class:f(d.$style["text-button"])},[e(S,{theme:"secondary",underline:!0,block:!0,textSize:"regular"},{default:t(()=>[a(" 등기부등본 조회 ")]),_:1})],2)])])]),_:1},8,["error"]),r("div",{class:f(d.$style["estate-setting-info"])},[r("section",Ne,[Te,r("div",{class:f(d.$style["basic-table"])},ye,2),r("div",{class:f(d.$style["not-table"])},"기록사항 없음",2)]),Le],2)]),_:1}),e(_,{titleText:"소유지 거주여부",forceFocus:!0},{default:t(()=>[e(u,{error:l.state.residenceError},{default:t(()=>[e(B,null,{default:t(()=>[e(x,null,{default:t(()=>[e(g,{minSide:!0,name:"PF_P09_p003_residence",id:"PF_P09_p003_residence01",defaultChecked:!0},{default:t(()=>[e(b,null,{default:t(()=>[a("예")]),_:1})]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(g,{minSide:!0,name:"PF_P09_p003_residence",id:"PF_P09_p003_residence02"},{default:t(()=>[e(b,null,{default:t(()=>[a("아니오")]),_:1})]),_:1})]),_:1})]),_:1}),e(m,null,{default:t(()=>[a("Error Message")]),_:1}),e(P,{classNames:{wrap:"row-margin-item-medium"}},{default:t(()=>[a(" 주민등록등본 주소와 아파트 주소가 일치하면 ‘예‘, 다르면 ‘아니오’를 선택해주세요. ")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"희망한도",target:"#PF_P09_p003_limitAmount"},{default:t(()=>[e(u,{error:l.state.limitAmountError},{default:t(()=>[e(i,{error:l.state.limitAmountError},{innerRight:t(()=>[Ce]),default:t(()=>[e(s,{flexible:!0},{default:t(()=>[e(n,{pattern:"\\d*",id:"PF_P09_p003_limitAmount",title:"희망한도",useDelete:!1,align:"right"})]),_:1})]),_:1},8,["error"]),e(m,null,{default:t(()=>[a("Error Message")]),_:1}),e(F,{classNames:{wrap:"align-right"}},{default:t(()=>[a("구천만원")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),e(E,null,{default:t(()=>[e(w,null,{default:t(()=>[e(c,null,{default:t(()=>[a("확인")]),_:1})]),_:1})]),_:1})]),_:1})}const Ae={$style:be},nt=V(ge,[["render",ve],["__cssModules",Ae]]);export{nt as default};
