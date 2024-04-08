import{_ as B,E as I,i as k,o as N,b as S,l as d,x as L,w as r,g as O,q as e,B as l,e as c}from"./index-55dc959b.js";import{B as V}from"./BasicInput-b03c5ab1.js";import{L as H}from"./LocationBar-64abe5b5.js";import{F as C,a as j}from"./FormListItem-e93ca3ef.js";import{I as A,a as R}from"./InputBlockCell-bd7aff68.js";import{P as z}from"./PageContents-f716fc69.js";import{S as D}from"./StepProgress-71a0202a.js";import{P as U,a as q}from"./PageTitle-96bdc852.js";import{P as G}from"./PageHeadRow-30007a37.js";import{P as J}from"./PageMainText-797540ac.js";import{F as K}from"./FormInvalid-55f490a6.js";import{F as Q}from"./FormInvalidMessage-14365b90.js";import{B as W}from"./BasicSelect-b8855b5a.js";import{B as X}from"./BasicButton-672abef3.js";import{F as Y}from"./FormHelpText-581c2509.js";import{N as Z}from"./NoticeText-3228353a.js";import{B as $,a as ee}from"./ButtonListItem-019a78ac.js";import"./text-delete-2b2178c8.js";import"./vue-select.es-8675d864.js";const re={"basic-list":"_basic-list_15w4r_1","basic-list__item":"_basic-list__item_15w4r_7","basic-list__symbol":"_basic-list__symbol_15w4r_26","basic-list__content":"_basic-list__content_15w4r_80","basic-list--regular":"_basic-list--regular_15w4r_85","basic-list--medium":"_basic-list--medium_15w4r_96","basic-list--regular-margin":"_basic-list--regular-margin_15w4r_110","basic-list--normal-margin":"_basic-list--normal-margin_15w4r_113","basic-list--small-margin":"_basic-list--small-margin_15w4r_116","agree-list":"_agree-list_15w4r_120","agree-list__container":"_agree-list__container_15w4r_123","agree-list__right":"_agree-list__right_15w4r_128","agree-list__all":"_agree-list__all_15w4r_139","agree-list__all-head":"_agree-list__all-head_15w4r_152","agree-list__all-checkbox":"_agree-list__all-checkbox_15w4r_159","agree-list__all-contents":"_agree-list__all-contents_15w4r_163","agree-list__depth":"_agree-list__depth_15w4r_166","agree-list__depth-item":"_agree-list__depth-item_15w4r_183","agree-list__depth-head":"_agree-list__depth-head_15w4r_190","agree-list__depth-title":"_agree-list__depth-title_15w4r_195","agree-list__depth-checkbox":"_agree-list__depth-checkbox_15w4r_201","agree-list__depth-contents":"_agree-list__depth-contents_15w4r_205","agree-list__list":"_agree-list__list_15w4r_208","agree-list__item":"_agree-list__item_15w4r_213","agree-list__head":"_agree-list__head_15w4r_219","agree-list__checkbox":"_agree-list__checkbox_15w4r_230","agree-list__link":"_agree-list__link_15w4r_234","agree-list__link-text":"_agree-list__link-text_15w4r_279","agree-list__contents":"_agree-list__contents_15w4r_297","agree-list__list--secondary":"_agree-list__list--secondary_15w4r_304","agree-list__list--secondary-no-padding":"_agree-list__list--secondary-no-padding_15w4r_322","agree-list__list--tertiary":"_agree-list__list--tertiary_15w4r_325","agree-list__list--tertiary-no-padding":"_agree-list__list--tertiary-no-padding_15w4r_346"},te={components:{PageContents:z,LocationBar:H,PageHead:U,PageTitle:q,PageHeadRow:G,StepProgress:D,PageMainText:J,FormList:C,FormListItem:j,InputBlock:A,InputBlockCell:R,BasicInput:V,FormInvalid:K,FormInvalidMessage:Q,BasicSelect:W,BasicButton:X,FormHelpText:Y,NoticeText:Z,ButtonList:$,ButtonListItem:ee},setup(){const m={ui:{header:I()}},b=k({idNumberError:!1,mailError:!1,homeNumberError:!1,phoneError:!1,addressError001:!1,addressError002:!1,dayError001:!1,bankError:!1,dateError:!1,MethodSelectError:!1,addressMethodSelectError:!1,amountError:!1,rateError:!1,methodError:!1,commissionError:!1,residenceTypeError:!1,additionalTypeError:!1,routeError:!1,objectError:!1,ownerError:!1});return N(()=>{m.ui.header.setActive(()=>"personalLoan")}),S(()=>{m.ui.header.setActive()}),{state:b}}},le={class:"row-margin-block-small"},ae={class:"row-margin-block-small"},oe=c("h3",{class:"text-title-1 row-margin-contents"},"결제 정보",-1),_e={class:"row-margin-block-small"},se=c("h3",{class:"text-title-1 row-margin-small"},"대출신청정보",-1),ie=c("div",{class:"text-body-1 color-gray-secondary font-weight-light"}," 대출조건 변경 시 한도 및 금리 등이 변경될 수 있으므로 반드시 약정서를 확인하여 주시기 바랍니다. ",-1),de=c("div",{class:"text-body-1"},"만원",-1),ne={class:"row-margin-block-small"},ue=c("h3",{class:"text-title-1 row-margin-contents"},"부가 정보",-1);function ce(m,b,me,t,ge,be){const h=d("LocationBar"),E=d("PageTitle"),x=d("StepProgress"),v=d("PageHeadRow"),w=d("PageMainText"),F=d("PageHead"),n=d("BasicInput"),a=d("InputBlockCell"),o=d("InputBlock"),_=d("FormListItem"),u=d("BasicSelect"),s=d("FormInvalidMessage"),i=d("FormInvalid"),g=d("BasicButton"),f=d("FormList"),p=d("FormHelpText"),P=d("NoticeText"),T=d("ButtonListItem"),M=d("ButtonList"),y=d("PageContents");return O(),L(y,null,{head:r(()=>[e(h,{data:[{text:"홈",to:"/main/home"},{text:"개인금융",to:"/"},{text:"원큐자동차담보대출",to:"/"}]})]),default:r(()=>[e(F,null,{default:r(()=>[e(v,null,{right:r(()=>[e(x,{total:5,current:2})]),default:r(()=>[e(E,{align:"left"},{default:r(()=>[l("원큐자동차담보대출")]),_:1})]),_:1}),e(w,{align:"left"},{default:r(()=>[l("손님 정보를 입력해 주세요")]),_:1})]),_:1}),c("div",null,[c("section",le,[e(f,null,{default:r(()=>[e(_,{titleText:"이름",disabled:!0,target:"#PF_P04_p005_name"},{default:r(()=>[e(o,{disabled:!0},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(n,{title:"이름",defaultValue:"김하나",disabled:!0,id:"PF_P04_p005_name"})]),_:1})]),_:1})]),_:1}),e(_,{titleText:"이메일",titleOptionalText:"(선택)",target:"#PF_P04_p005_EmailId"},{default:r(()=>[e(i,{error:t.state.mailError},{default:r(()=>[e(o,{error:t.state.mailError},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(n,{title:"이메일 아이디",id:"PF_P04_p005_EmailId"})]),_:1}),e(a,{margin:"regular"},{default:r(()=>[l("@")]),_:1}),e(a,{margin:"regular",flexible:!0},{default:r(()=>[e(u,{options:[{value:"1",label:"naver.com"},{value:"2",label:"hanmail.net"},{value:"3",label:"gmail.com"},{value:"4",label:"nate.com"},{value:"5",label:"paran.com"},{value:"6",label:"dreamwiz.com"},{value:"7",label:"yahoo.com"},{value:"8",label:"freechal.com"}],title:"이메일 도메인"},null,8,["options"])]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"자택전화번호",titleOptionalText:"(선택)",target:"#PF_P04_p005_homeNumber"},{default:r(()=>[e(i,{error:t.state.homeNumberError},{default:r(()=>[e(o,{error:t.state.homeNumberError},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(n,{title:"자택전화번호",id:"PF_P04_p005_homeNumber"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"휴대전화번호",target:"#PF_P04_p005_phone"},{default:r(()=>[e(i,{error:t.state.phoneError},{default:r(()=>[e(o,{error:t.state.phoneError},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(n,{title:"휴대전화번호",id:"PF_P04_p005_phone"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"자택주소",target:"#PF_P04_p005_addressSerachButton"},{default:r(()=>[e(i,{error:t.state.addressError001},{default:r(()=>[e(o,{error:t.state.addressError001},{right:r(()=>[e(g,{size:"small",theme:"tertiary",id:"PF_P04_p005_addressSerachButton"},{default:r(()=>[l("주소검색")]),_:1})]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(n,{title:"자택주소 - 우편번호",defaultValue:"12345",disabled:!0})]),_:1})]),_:1},8,["error"]),e(o,{error:t.state.addressError001,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(n,{title:"자택주소 - 주소",defaultValue:"인천광역시 서구 에코로 181",disabled:!0})]),_:1})]),_:1},8,["error"]),e(o,{error:t.state.addressError001,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(n,{title:"자택주소 - 상세주소",defaultValue:"하나아파트 835동 4590호",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),c("section",ae,[oe,e(f,null,{default:r(()=>[e(_,{titleText:"은행명",target:"#PF_P04_p005_bank",selectOnly:!0},{default:r(()=>[e(i,{error:t.state.bankError},{default:r(()=>[e(o,{error:t.state.bankError},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(u,{options:[{value:"1",label:"하나은행"}],title:"은행명",inputId:"PF_P04_p005_bank"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"계좌번호",target:"#PF_P04_p005_accountNumber"},{default:r(()=>[e(i,{error:t.state.workplaceNameError001},{default:r(()=>[e(o,{error:t.state.workplaceNameError001},{right:r(()=>[e(g,{size:"small",theme:"tertiary"},{default:r(()=>[l(" 1원 인증 ")]),_:1})]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(n,{title:"계좌번호",id:"PF_P04_p005_accountNumber"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1}),e(p,null,{default:r(()=>[l("‘-’없이 숫자만 입력")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"결제일",target:"#PF_P04_p005_date",selectOnly:!0},{default:r(()=>[e(i,{error:t.state.dateError},{default:r(()=>[e(o,{error:t.state.dateError},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(u,{options:[{value:"1",label:"1일"},{value:"2",label:"5일"},{value:"3",label:"11일"},{value:"4",label:"15일"},{value:"5",label:"21일"}],title:"결제일",inputId:"PF_P04_p005_date"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"청구방법",target:"#PF_P04_p005_Method",selectOnly:!0},{default:r(()=>[e(i,{error:t.state.MethodSelectError},{default:r(()=>[e(o,{error:t.state.MethodSelectError},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(u,{options:[{value:"1",label:"미발송"},{value:"2",label:"온라인(SMS)"},{value:"3",label:"우편"},{value:"4",label:"이메일"},{value:"5",label:"우편+이메일"},{value:"6",label:"우편(지속)"}],title:"청구방법",inputId:"PF_P04_p005_Method"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"청구지",target:"#PF_P04_p005_addressMethod",selectOnly:!0},{default:r(()=>[e(i,{error:t.state.addressMethodSelectError},{default:r(()=>[e(o,{error:t.state.addressMethodSelectError},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(u,{options:[{value:"1",label:"22742 인천 서구 에코로 181 하나금융그룹통합데이터센터"}],title:"청구지",inputId:"PF_P04_p005_addressMethod"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),c("section",_e,[se,ie,e(f,{classNames:{wrap:"row-margin-contents"}},{default:r(()=>[e(_,{titleText:"대출신청금액",target:"#PF_P04_p005_Amount"},{default:r(()=>[e(i,{error:t.state.amountError},{default:r(()=>[e(o,{error:t.state.amountError},{innerRight:r(()=>[de]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(n,{title:"대출신청금액",id:"PF_P04_p005_Amount",pattern:"\\d*",useDelete:!1,align:"right"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1}),e(p,{classNames:{wrap:"align-right"}},{default:r(()=>[l("이억원")]),_:1}),e(P,{classNames:{wrap:"row-margin-item-medium"}},{default:r(()=>[l("대출가능한도 20,000만원")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"대출금리",target:"#PF_P04_p005_rate",disabled:!0},{default:r(()=>[e(i,{error:t.state.rateError},{default:r(()=>[e(o,{error:t.state.rateError},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(n,{title:"대출금리",id:"PF_P04_p005_rate",pattern:"\\d*",useDelete:!1,disabled:!0,defaultValue:"13.2%"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1}),e(P,{classNames:{wrap:"color-red row-margin-item-medium"}},{default:r(()=>[l("대출가능한도 20,000만원")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"대출기간",target:"#PF_P04_p005_period",selectOnly:!0},{default:r(()=>[e(i,{error:t.state.periodError},{default:r(()=>[e(o,{error:t.state.periodError},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(u,{options:[{value:"1",label:"12개월"},{value:"2",label:"24개월"},{value:"3",label:"36개월"},{value:"4",label:"48개월"},{value:"5",label:"60개월"},{value:"6",label:"72개월"},{value:"7",label:"84개월"},{value:"8",label:"96개월"},{value:"9",label:"108개월"},{value:"10",label:"120개월"}],title:"대출기간",inputId:"PF_P04_p005_period"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"상환방법",target:"#PF_P04_p005_inputMethod",disabled:!0},{default:r(()=>[e(i,{error:t.state.methodError},{default:r(()=>[e(o,{error:t.state.methodError,disabled:!0},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(n,{title:"상환방법",id:"PF_P04_p005_inputMethod",defaultValue:"원리금균등분할상환",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"중도상환수수료",target:"#PF_P04_p005_commission",disabled:!0},{default:r(()=>[e(i,{error:t.state.commissionError},{default:r(()=>[e(o,{error:t.state.commissionError,disabled:!0},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(n,{title:"중도상환수수료",id:"PF_P04_p005_inputMethod",defaultValue:"0%",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),c("section",ne,[ue,e(f,null,{default:r(()=>[e(_,{titleText:"주거형태",target:"#PF_P04_p005_residenceType",selectOnly:!0},{default:r(()=>[e(i,{error:t.state.residenceTypeError},{default:r(()=>[e(o,{error:t.state.residenceTypeError},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(u,{options:[{value:"1",label:"아파트"},{value:"2",label:"오피스텔"},{value:"3",label:"단독주택"},{value:"4",label:"빌라/연립"},{value:"5",label:"다가구/다세대"},{value:"6",label:"사택"},{value:"7",label:"기술사"},{value:"8",label:"분양아파트"},{value:"9",label:"기타"},{value:"10",label:"무응답"}],title:"주거형태",inputId:"PF_P04_p005_residenceType"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"주택소유구분",target:"#PF_P04_p005_additionalType",selectOnly:!0},{default:r(()=>[e(i,{error:t.state.additionalTypeError},{default:r(()=>[e(o,{error:t.state.additionalTypeError},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(u,{options:[{value:"1",label:"본인소유"},{value:"2",label:"전/월세"},{value:"3",label:"기타"}],title:"주택소유구분",inputId:"PF_P04_p005_additionalType"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"상품인지경로",target:"#PF_P04_p005_route",selectOnly:!0},{default:r(()=>[e(i,{error:t.state.routeError},{default:r(()=>[e(o,{error:t.state.routeError},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(u,{options:[{value:"1",label:"직접 방문"},{value:"2",label:"택배"},{value:"3",label:"기타"}],title:"상품인지경로",inputId:"PF_P04_p005_route"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"대출목적",target:"#PF_P04_p005_object",selectOnly:!0},{default:r(()=>[e(i,{error:t.state.objectError},{default:r(()=>[e(o,{error:t.state.objectError},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(u,{options:[{value:"1",label:"차량구입자금"},{value:"2",label:"주택자금"},{value:"3",label:"경조사금"},{value:"4",label:"타기관 대출금상환"},{value:"5",label:"교육비"},{value:"6",label:"의료비"},{value:"7",label:"사업자금(운전자금)"},{value:"8",label:"가계자금"},{value:"9",label:"기타"}],title:"대출목적선택하기",inputId:"PF_P04_p005_object"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"거래자금의 원천",target:"#PF_P04_p005_source",disabled:!0},{default:r(()=>[e(i,{error:t.state.sourceError},{default:r(()=>[e(o,{error:t.state.sourceError,disabled:!0},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(n,{title:"거래자금의 원천",id:"PF_P04_p005_source",defaultValue:"대출금",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"실제소유자 확인",target:"#PF_P04_p005_owner",selectOnly:!0},{default:r(()=>[e(i,{error:t.state.ownerError},{default:r(()=>[e(o,{error:t.state.ownerError},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(u,{options:[{value:"1",label:"본인"}],title:"실제소유자 확인",inputId:"PF_P04_p005_owner"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})])]),e(M,null,{default:r(()=>[e(T,null,{default:r(()=>[e(g,null,{default:r(()=>[l("다음")]),_:1})]),_:1})]),_:1})]),_:1})}const fe={$style:re},He=B(te,[["render",ce],["__cssModules",fe]]);export{He as default};
