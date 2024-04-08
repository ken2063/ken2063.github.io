import{_ as S,E as O,i as V,o as H,b as D,l as _,x as j,w as t,g as z,q as e,B as l,e as n,n as m}from"./index-55dc959b.js";import{B as A}from"./BasicInput-b03c5ab1.js";import{L as R}from"./LocationBar-64abe5b5.js";import{F as U,a as q}from"./FormListItem-e93ca3ef.js";import{I as G,a as J}from"./InputBlockCell-bd7aff68.js";import{P as K}from"./PageContents-f716fc69.js";import{S as Q}from"./StepProgress-71a0202a.js";import{P as W,a as X}from"./PageTitle-96bdc852.js";import{P as Y}from"./PageHeadRow-30007a37.js";import{P as Z}from"./PageMainText-797540ac.js";import{F as $}from"./FormInvalid-55f490a6.js";import{B as ee}from"./BasicSelect-b8855b5a.js";import{F as te}from"./FormInvalidMessage-14365b90.js";import{B as re}from"./BasicButton-672abef3.js";import{B as le,a as ae}from"./BoxCheckListItem-a8d615b9.js";import{B as oe,a as _e}from"./BoxCheckLabel-44346c4c.js";import{B as se}from"./BasicDatepicker-844e1373.js";import{F as ie}from"./FormHelpText-581c2509.js";import{N as ue}from"./NoticeText-3228353a.js";import{B as ne,a as de}from"./ButtonListItem-019a78ac.js";import"./text-delete-2b2178c8.js";import"./vue-select.es-8675d864.js";import"./calendar-234ea0db.js";const ce={"basic-list":"_basic-list_15w4r_1","basic-list__item":"_basic-list__item_15w4r_7","basic-list__symbol":"_basic-list__symbol_15w4r_26","basic-list__content":"_basic-list__content_15w4r_80","basic-list--regular":"_basic-list--regular_15w4r_85","basic-list--medium":"_basic-list--medium_15w4r_96","basic-list--regular-margin":"_basic-list--regular-margin_15w4r_110","basic-list--normal-margin":"_basic-list--normal-margin_15w4r_113","basic-list--small-margin":"_basic-list--small-margin_15w4r_116","agree-list":"_agree-list_15w4r_120","agree-list__container":"_agree-list__container_15w4r_123","agree-list__right":"_agree-list__right_15w4r_128","agree-list__all":"_agree-list__all_15w4r_139","agree-list__all-head":"_agree-list__all-head_15w4r_152","agree-list__all-checkbox":"_agree-list__all-checkbox_15w4r_159","agree-list__all-contents":"_agree-list__all-contents_15w4r_163","agree-list__depth":"_agree-list__depth_15w4r_166","agree-list__depth-item":"_agree-list__depth-item_15w4r_183","agree-list__depth-head":"_agree-list__depth-head_15w4r_190","agree-list__depth-title":"_agree-list__depth-title_15w4r_195","agree-list__depth-checkbox":"_agree-list__depth-checkbox_15w4r_201","agree-list__depth-contents":"_agree-list__depth-contents_15w4r_205","agree-list__list":"_agree-list__list_15w4r_208","agree-list__item":"_agree-list__item_15w4r_213","agree-list__head":"_agree-list__head_15w4r_219","agree-list__checkbox":"_agree-list__checkbox_15w4r_230","agree-list__link":"_agree-list__link_15w4r_234","agree-list__link-text":"_agree-list__link-text_15w4r_279","agree-list__contents":"_agree-list__contents_15w4r_297","agree-list__list--secondary":"_agree-list__list--secondary_15w4r_304","agree-list__list--secondary-no-padding":"_agree-list__list--secondary-no-padding_15w4r_322","agree-list__list--tertiary":"_agree-list__list--tertiary_15w4r_325","agree-list__list--tertiary-no-padding":"_agree-list__list--tertiary-no-padding_15w4r_346"},fe={components:{PageContents:K,LocationBar:R,PageHead:W,PageTitle:X,PageHeadRow:Y,StepProgress:Q,PageMainText:Z,FormList:U,FormListItem:q,InputBlock:G,InputBlockCell:J,BasicInput:A,FormInvalid:$,BasicSelect:ee,FormInvalidMessage:te,BasicButton:re,BoxCheckList:le,BoxCheckListItem:ae,BoxCheck:oe,BoxCheckLabel:_e,BasicDatepicker:se,FormHelpText:ie,NoticeText:ue,ButtonList:ne,ButtonListItem:de},setup(){const c={ui:{header:O()}},p=V({idNumberError:!1,mailError:!1,homeNumberError:!1,phoneError:!1,addressError001:!1,addressError002:!1,dayError001:!1,bankError:!1,dateError:!1,MethodSelectError:!1,addressMethodSelectError:!1,amountError:!1,rateError:!1,methodError:!1,commissionError:!1,residenceTypeError:!1,additionalTypeError:!1,routeError:!1,objectError:!1,ownerError:!1});return H(()=>{c.ui.header.setActive(()=>"personalLoan")}),D(()=>{c.ui.header.setActive()}),{state:p}}},me={class:"row-margin-block-small"},be={class:"row-margin-block-small"},ge=n("h3",{class:"text-title-1 row-margin-contents"},"신분증 정보",-1),pe={class:"row-margin-block-small"},Pe=n("h3",{class:"text-title-1 row-margin-contents"},"결제 정보",-1),he={class:"row-margin-block-small"},xe=n("h3",{class:"text-title-1 row-margin-small"},"대출신청정보",-1),Ee=n("div",{class:"text-body-1 color-gray-secondary font-weight-light"}," 대출조건 변경 시 한도 및 금리 등이 변경될 수 있으므로 반드시 약정서를 확인하여 주시기 바랍니다. ",-1),ve=n("div",{class:"text-body-1"},"만원",-1),we={class:"row-margin-block-small"},Fe=n("h3",{class:"text-title-1 row-margin-contents"},"부가 정보",-1);function ye(c,p,ke,r,Te,Me){const y=_("LocationBar"),B=_("PageTitle"),k=_("StepProgress"),T=_("PageHeadRow"),M=_("PageMainText"),I=_("PageHead"),d=_("BasicInput"),a=_("InputBlockCell"),o=_("InputBlock"),s=_("FormListItem"),f=_("BasicSelect"),i=_("FormInvalidMessage"),u=_("FormInvalid"),g=_("BasicButton"),b=_("FormList"),P=_("BoxCheckLabel"),h=_("BoxCheck"),x=_("BoxCheckListItem"),L=_("BoxCheckList"),N=_("BasicDatepicker"),E=_("ButtonListItem"),v=_("ButtonList"),w=_("FormHelpText"),F=_("NoticeText"),C=_("PageContents");return z(),j(C,null,{head:t(()=>[e(y,{data:[{text:"홈",to:"/main/home"},{text:"개인금융",to:"/"},{text:"우수고객추가대출",to:"/"}]})]),default:t(()=>[e(I,null,{default:t(()=>[e(T,null,{right:t(()=>[e(k,{total:5,current:2})]),default:t(()=>[e(B,{align:"left"},{default:t(()=>[l("우수고객추가대출")]),_:1})]),_:1}),e(M,{align:"left"},{default:t(()=>[l("손님 정보를 입력해 주세요")]),_:1})]),_:1}),n("div",null,[n("section",me,[e(b,null,{default:t(()=>[e(s,{titleText:"이름",disabled:!0,target:"#PF_P05_p005_name"},{default:t(()=>[e(o,{disabled:!0},{default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(d,{title:"이름",defaultValue:"김하나",disabled:!0,id:"PF_P05_p005_name"})]),_:1})]),_:1})]),_:1}),e(s,{titleText:"이메일",titleOptionalText:"(선택)",target:"#PF_P05_p005_EmailId"},{default:t(()=>[e(u,{error:r.state.mailError},{default:t(()=>[e(o,{error:r.state.mailError},{default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(d,{title:"이메일 아이디",id:"PF_P05_p005_EmailId"})]),_:1}),e(a,{margin:"regular"},{default:t(()=>[l("@")]),_:1}),e(a,{margin:"regular",flexible:!0},{default:t(()=>[e(f,{options:[{value:"1",label:"naver.com"},{value:"2",label:"hanmail.net"},{value:"3",label:"gmail.com"},{value:"4",label:"nate.com"},{value:"5",label:"paran.com"},{value:"6",label:"dreamwiz.com"},{value:"7",label:"yahoo.com"},{value:"8",label:"freechal.com"}],title:"이메일 도메인"},null,8,["options"])]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(s,{titleText:"자택전화번호",titleOptionalText:"(선택)",target:"#PF_P05_p005_homeNumber"},{default:t(()=>[e(u,{error:r.state.homeNumberError},{default:t(()=>[e(o,{error:r.state.homeNumberError},{default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(d,{title:"자택전화번호",id:"PF_P05_p005_homeNumber"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(s,{titleText:"휴대전화번호",target:"#PF_P05_p005_phone"},{default:t(()=>[e(u,{error:r.state.phoneError},{default:t(()=>[e(o,{error:r.state.phoneError},{default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(d,{title:"휴대전화번호",id:"PF_P05_p005_phone"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(s,{titleText:"자택주소",target:"#PF_P05_p005_addressSerachButton"},{default:t(()=>[e(u,{error:r.state.addressError001},{default:t(()=>[e(o,{error:r.state.addressError001},{right:t(()=>[e(g,{size:"small",theme:"tertiary",id:"PF_P05_p005_addressSerachButton"},{default:t(()=>[l("주소검색")]),_:1})]),default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(d,{title:"자택주소 - 우편번호",defaultValue:"12345",disabled:!0})]),_:1})]),_:1},8,["error"]),e(o,{error:r.state.addressError001,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(d,{title:"자택주소 - 주소",defaultValue:"인천광역시 서구 에코로 181",disabled:!0})]),_:1})]),_:1},8,["error"]),e(o,{error:r.state.addressError001,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(d,{title:"자택주소 - 상세주소",defaultValue:"하나아파트 835동 4590호",disabled:!0})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),n("section",be,[ge,n("ul",{class:m([c.$style["basic-list"],c.$style["basic-list--regular"],c.$style["basic-list--regular-margin"]])},[n("li",{class:m([c.$style["basic-list__item"],"font-weight-regular"])},[n("div",{class:m(c.$style["basic-list__symbol"])},null,2),n("div",{class:m(c.$style["basic-list__content"])}," 소지하고 계신 신분증종류를 선택하여 주세요. ",2)],2),n("li",{class:m([c.$style["basic-list__item"],"font-weight-regular"])},[n("div",{class:m(c.$style["basic-list__symbol"])},null,2),n("div",{class:m(c.$style["basic-list__content"])}," 특정금융거래정보의 보고 및 이용 등에 관한 법률 제5조 2에 따라 고객확인을 위해 신분증 개인 등의 확인이 필요합니다. 만일 정보/자료 제출이 안될 경우 본 금융거래가 거절 또는 중단될 수 있습니다. ",2)],2)],2),e(L,{classNames:{wrap:"row-margin-container-medium"}},{default:t(()=>[e(x,null,{default:t(()=>[e(h,{minSide:!0,name:"PF_P05_p005_checkBox001",id:"PF_P05_p005_checkBox001_001",defaultChecked:!0},{default:t(()=>[e(P,null,{default:t(()=>[l("주민등록증")]),_:1})]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(h,{minSide:!0,name:"PF_P05_p005_checkBox001",id:"PF_P05_p005_checkBox001_002"},{default:t(()=>[e(P,null,{default:t(()=>[l("운전면허증")]),_:1})]),_:1})]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(s,{titleText:"발급일자",target:"#PF_P05_p005_day_001_Button"},{default:t(()=>[e(u,{error:r.state.dayError001},{default:t(()=>[e(o,{error:r.state.dayError001},{default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(N,{title:"발급일자",id:"PF_P05_p005_day_001",buttonId:"PF_P05_p005_day_001_Button"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(s,{titleText:"면허발급번호",target:"#PF_P05_p005_license001"},{default:t(()=>[e(u,{error:r.state.licenseError},{default:t(()=>[e(o,{error:r.state.licenseError},{default:t(()=>[e(a,null,{default:t(()=>[e(f,{options:[{value:"1",label:"서울 (11)"},{value:"2",label:"부산 (12)"},{value:"3",label:"경기 (13)"},{value:"4",label:"강원 (14)"},{value:"5",label:"충북 (15)"},{value:"6",label:"충남 (16)"},{value:"7",label:"전북 (17)"},{value:"8",label:"경남 (18)"},{value:"9",label:"제주 (19)"},{value:"10",label:"대구 (20)"},{value:"11",label:"인천 (21)"},{value:"12",label:"광주 (22)"},{value:"13",label:"대전 (23)"},{value:"14",label:"울산 (24)"}],title:"면허발급번호 지역번호 선택하기",inputId:"PF_P05_p005_license001",classNames:{wrap:"input-width-driving-license"}})]),_:1}),e(a,{flexible:!0,margin:"regular"},{default:t(()=>[e(d,{type:"number",pattern:"\\d*",title:"면허발급번호 앞 2자리",useDelete:!1})]),_:1}),e(a,{type:"sub"},{default:t(()=>[l("-")]),_:1}),e(a,{classNames:{cell:"flex-2"},margin:"regular"},{default:t(()=>[e(d,{type:"number",pattern:"\\d*",title:"면허발급번호 두번째 6자리",useDelete:!1})]),_:1}),e(a,{type:"sub"},{default:t(()=>[l("-")]),_:1}),e(a,{flexible:!0,margin:"regular"},{default:t(()=>[e(d,{type:"number",pattern:"\\d*",title:"면허발급번호 뒤 2자리",useDelete:!1})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),e(v,null,{default:t(()=>[e(E,null,{default:t(()=>[e(g,null,{default:t(()=>[l("진위여부확인")]),_:1})]),_:1})]),_:1})]),n("section",pe,[Pe,e(b,null,{default:t(()=>[e(s,{titleText:"은행명",target:"#PF_P05_p005_bank",selectOnly:!0},{default:t(()=>[e(u,{error:r.state.bankError},{default:t(()=>[e(o,{error:r.state.bankError},{default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(f,{options:[{value:"1",label:"하나은행"}],title:"은행명",inputId:"PF_P05_p005_bank"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(s,{titleText:"계좌번호",target:"#PF_P05_p005_accountNumber"},{default:t(()=>[e(u,{error:r.state.workplaceNameError001},{default:t(()=>[e(o,{error:r.state.workplaceNameError001},{right:t(()=>[e(g,{size:"small",theme:"tertiary"},{default:t(()=>[l(" 1원 인증 ")]),_:1})]),default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(d,{title:"계좌번호",id:"PF_P05_p005_accountNumber"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[l("Error Message")]),_:1}),e(w,null,{default:t(()=>[l("‘-’없이 숫자만 입력")]),_:1})]),_:1},8,["error"])]),_:1}),e(s,{titleText:"결제일",target:"#PF_P05_p005_date",selectOnly:!0},{default:t(()=>[e(u,{error:r.state.dateError},{default:t(()=>[e(o,{error:r.state.dateError},{default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(f,{options:[{value:"1",label:"1일"},{value:"2",label:"5일"},{value:"3",label:"11일"},{value:"4",label:"15일"},{value:"5",label:"21일"}],title:"결제일",inputId:"PF_P05_p005_date"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(s,{titleText:"청구방법",target:"#PF_P05_p005_Method",selectOnly:!0},{default:t(()=>[e(u,{error:r.state.MethodSelectError},{default:t(()=>[e(o,{error:r.state.MethodSelectError},{default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(f,{options:[{value:"1",label:"미발송"},{value:"2",label:"온라인(SMS)"},{value:"3",label:"우편"},{value:"4",label:"이메일"},{value:"5",label:"우편+이메일"},{value:"6",label:"우편(지속)"}],title:"청구방법",inputId:"PF_P05_p005_Method"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(s,{titleText:"청구지",target:"#PF_P05_p005_addressMethod",selectOnly:!0},{default:t(()=>[e(u,{error:r.state.addressMethodSelectError},{default:t(()=>[e(o,{error:r.state.addressMethodSelectError},{default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(f,{options:[{value:"1",label:"22742 인천 서구 에코로 181 하나금융그룹통합데이터센터"}],title:"청구지",inputId:"PF_P05_p005_addressMethod"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),n("section",he,[xe,Ee,e(b,{classNames:{wrap:"row-margin-contents"}},{default:t(()=>[e(s,{titleText:"대출신청금액",target:"#PF_P05_p005_Amount"},{default:t(()=>[e(u,{error:r.state.amountError},{default:t(()=>[e(o,{error:r.state.amountError},{innerRight:t(()=>[ve]),default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(d,{title:"대출신청금액",id:"PF_P05_p005_Amount",pattern:"\\d*",useDelete:!1,align:"right"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[l("Error Message")]),_:1}),e(w,{classNames:{wrap:"align-right"}},{default:t(()=>[l("이억원")]),_:1}),e(F,{classNames:{wrap:"row-margin-item-medium"}},{default:t(()=>[l("대출가능한도 20,000만원")]),_:1})]),_:1},8,["error"])]),_:1}),e(s,{titleText:"대출금리",target:"#PF_P05_p005_rate",disabled:!0},{default:t(()=>[e(u,{error:r.state.rateError},{default:t(()=>[e(o,{error:r.state.rateError},{default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(d,{title:"대출금리",id:"PF_P05_p005_rate",pattern:"\\d*",useDelete:!1,disabled:!0,defaultValue:"13.2%"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[l("Error Message")]),_:1}),e(F,{classNames:{wrap:"color-red row-margin-item-medium"}},{default:t(()=>[l("대출가능한도 20,000만원")]),_:1})]),_:1},8,["error"])]),_:1}),e(s,{titleText:"대출기간",target:"#PF_P05_p005_period",selectOnly:!0},{default:t(()=>[e(u,{error:r.state.periodError},{default:t(()=>[e(o,{error:r.state.periodError},{default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(f,{options:[{value:"1",label:"12개월"},{value:"2",label:"24개월"},{value:"3",label:"36개월"},{value:"4",label:"48개월"},{value:"5",label:"60개월"},{value:"6",label:"72개월"},{value:"7",label:"84개월"},{value:"8",label:"96개월"},{value:"9",label:"108개월"},{value:"10",label:"120개월"}],title:"대출기간",inputId:"PF_P05_p005_period"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(s,{titleText:"상환방법",target:"#PF_P05_p005_inputMethod",disabled:!0},{default:t(()=>[e(u,{error:r.state.methodError},{default:t(()=>[e(o,{error:r.state.methodError,disabled:!0},{default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(d,{title:"상환방법",id:"PF_P05_p005_inputMethod",defaultValue:"원리금균등분할상환",disabled:!0})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(s,{titleText:"중도상환수수료",target:"#PF_P05_p005_commission",disabled:!0},{default:t(()=>[e(u,{error:r.state.commissionError},{default:t(()=>[e(o,{error:r.state.commissionError,disabled:!0},{default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(d,{title:"중도상환수수료",id:"PF_P05_p005_inputMethod",defaultValue:"0%",disabled:!0})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),n("section",we,[Fe,e(b,null,{default:t(()=>[e(s,{titleText:"주거형태",target:"#PF_P05_p005_residenceType",selectOnly:!0},{default:t(()=>[e(u,{error:r.state.residenceTypeError},{default:t(()=>[e(o,{error:r.state.residenceTypeError},{default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(f,{options:[{value:"1",label:"아파트"},{value:"2",label:"오피스텔"},{value:"3",label:"단독주택"},{value:"4",label:"빌라/연립"},{value:"5",label:"다가구/다세대"},{value:"6",label:"사택"},{value:"7",label:"기술사"},{value:"8",label:"분양아파트"},{value:"9",label:"기타"},{value:"10",label:"무응답"}],title:"주거형태",inputId:"PF_P05_p005_residenceType"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(s,{titleText:"주택소유구분",target:"#PF_P05_p005_additionalType",selectOnly:!0},{default:t(()=>[e(u,{error:r.state.additionalTypeError},{default:t(()=>[e(o,{error:r.state.additionalTypeError},{default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(f,{options:[{value:"1",label:"본인소유"},{value:"2",label:"전/월세"},{value:"3",label:"기타"}],title:"주택소유구분",inputId:"PF_P05_p005_additionalType"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(s,{titleText:"상품인지경로",target:"#PF_P05_p005_route",selectOnly:!0},{default:t(()=>[e(u,{error:r.state.routeError},{default:t(()=>[e(o,{error:r.state.routeError},{default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(f,{options:[{value:"1",label:"직접 방문"},{value:"2",label:"택배"},{value:"3",label:"기타"}],title:"상품인지경로",inputId:"PF_P05_p005_route"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(s,{titleText:"대출목적",target:"#PF_P05_p005_object",selectOnly:!0},{default:t(()=>[e(u,{error:r.state.objectError},{default:t(()=>[e(o,{error:r.state.objectError},{default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(f,{options:[{value:"1",label:"차량구입자금"},{value:"2",label:"주택자금"},{value:"3",label:"경조사금"},{value:"4",label:"타기관 대출금상환"},{value:"5",label:"교육비"},{value:"6",label:"의료비"},{value:"7",label:"사업자금(운전자금)"},{value:"8",label:"가계자금"},{value:"9",label:"기타"}],title:"대출목적선택하기",inputId:"PF_P05_p005_object"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(s,{titleText:"거래자금의 원천",target:"#PF_P05_p005_source",disabled:!0},{default:t(()=>[e(u,{error:r.state.sourceError},{default:t(()=>[e(o,{error:r.state.sourceError,disabled:!0},{default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(d,{title:"거래자금의 원천",id:"PF_P05_p005_source",defaultValue:"대출금",disabled:!0})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(s,{titleText:"실제소유자 확인",target:"#PF_P05_p005_owner",selectOnly:!0},{default:t(()=>[e(u,{error:r.state.ownerError},{default:t(()=>[e(o,{error:r.state.ownerError},{default:t(()=>[e(a,{flexible:!0},{default:t(()=>[e(f,{options:[{value:"1",label:"본인"}],title:"실제소유자 확인",inputId:"PF_P05_p005_owner"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})])]),e(v,null,{default:t(()=>[e(E,null,{default:t(()=>[e(g,null,{default:t(()=>[l("다음")]),_:1})]),_:1})]),_:1})]),_:1})}const Be={$style:ce},$e=S(fe,[["render",ye],["__cssModules",Be]]);export{$e as default};
