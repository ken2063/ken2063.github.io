import{_ as T,E as q,i as E,o as M,b as S,l as o,x as H,w as a,g as j,q as t,B as _,e as s,n as l}from"./index-89ea90fd.js";import{P as A}from"./PageContents-f8dfd722.js";import{L as O}from"./LocationBar-c816b7b5.js";import{P as R,a as V}from"./PageTitle-af1154e1.js";import{P as U}from"./PageHeadRow-f5361492.js";import{S as z}from"./StepProgress-7fb4efe9.js";import{P as D}from"./PageMainText-de0a32a5.js";import{P as G}from"./PageSubText-66182d6f.js";import{F as J,a as K}from"./FormListItem-1918e8b8.js";import{F as Q}from"./FormInvalid-83d8e491.js";import{I as W,a as X}from"./InputBlockCell-5acaa660.js";import{B as Y}from"./BasicInput-0a0e1561.js";import{F as Z}from"./FormInvalidMessage-78379f81.js";import{S as x}from"./SecurityInput-8eed734b.js";import{C as ee,a as se}from"./CheckBoxObject-f96a61cd.js";import{C as le}from"./CheckBoxLabelText-2419ddf7.js";import{B as te}from"./BasicButton-9f8538fd.js";import{B as ae,a as _e}from"./ButtonListItem-7021a724.js";import"./text-delete-e17c104b.js";import"./check-l-7d0b23af.js";const ie={"agree-list":"_agree-list_1r0dl_1","agree-list__container":"_agree-list__container_1r0dl_4","agree-list__right":"_agree-list__right_1r0dl_9","agree-list__all":"_agree-list__all_1r0dl_20","agree-list__all-head":"_agree-list__all-head_1r0dl_33","agree-list__all-checkbox":"_agree-list__all-checkbox_1r0dl_40","agree-list__all-contents":"_agree-list__all-contents_1r0dl_44","agree-list__depth":"_agree-list__depth_1r0dl_47","agree-list__depth-item":"_agree-list__depth-item_1r0dl_64","agree-list__depth-head":"_agree-list__depth-head_1r0dl_71","agree-list__depth-title":"_agree-list__depth-title_1r0dl_76","agree-list__depth-checkbox":"_agree-list__depth-checkbox_1r0dl_82","agree-list__depth-contents":"_agree-list__depth-contents_1r0dl_86","agree-list__list":"_agree-list__list_1r0dl_89","agree-list__item":"_agree-list__item_1r0dl_94","agree-list__head":"_agree-list__head_1r0dl_100","agree-list__checkbox":"_agree-list__checkbox_1r0dl_111","agree-list__link":"_agree-list__link_1r0dl_115","agree-list__link-text":"_agree-list__link-text_1r0dl_160","agree-list__contents":"_agree-list__contents_1r0dl_178","agree-list__list--secondary":"_agree-list__list--secondary_1r0dl_185","agree-list__list--secondary-no-padding":"_agree-list__list--secondary-no-padding_1r0dl_203","agree-list__list--tertiary":"_agree-list__list--tertiary_1r0dl_206","agree-list__list--tertiary-no-padding":"_agree-list__list--tertiary-no-padding_1r0dl_227","basic-list":"_basic-list_1r0dl_232","basic-list__item":"_basic-list__item_1r0dl_238","basic-list__symbol":"_basic-list__symbol_1r0dl_257","basic-list__content":"_basic-list__content_1r0dl_311","basic-list--regular":"_basic-list--regular_1r0dl_316","basic-list--medium":"_basic-list--medium_1r0dl_327","basic-list--regular-margin":"_basic-list--regular-margin_1r0dl_341","basic-list--normal-margin":"_basic-list--normal-margin_1r0dl_344","basic-list--small-margin":"_basic-list--small-margin_1r0dl_347"},re={components:{PageContents:A,LocationBar:O,PageHead:R,PageTitle:V,PageHeadRow:U,StepProgress:z,PageMainText:D,PageSubText:G,FormList:J,FormListItem:K,FormInvalid:Q,InputBlock:W,InputBlockCell:X,BasicInput:Y,FormInvalidMessage:Z,SecurityInput:x,CheckBox:ee,CheckBoxObject:se,CheckBoxLabelText:le,BasicButton:te,ButtonList:ae,ButtonListItem:_e},setup(){const e={ui:{header:q()}},$=E({nameError:!1,idNumberError:!1,phoneError:!1});return M(()=>{e.ui.header.setActive(()=>"personalLoan")}),S(()=>{e.ui.header.setActive()}),{state:$}}},ne=s("br",null,null,-1),oe=s("div",null,"// [공통 > 본인인증] 내용 노출",-1),ge={class:"row-margin-block-small row-margin-bottom-none"},de=s("h3",{class:"text-title-1 row-margin-contents"},"약관동의",-1);function ue(e,$,ye,g,me,pe){const h=o("LocationBar"),b=o("PageTitle"),f=o("StepProgress"),k=o("PageHeadRow"),P=o("PageMainText"),v=o("PageSubText"),N=o("PageHead"),u=o("BasicInput"),d=o("InputBlockCell"),c=o("InputBlock"),y=o("FormInvalidMessage"),m=o("FormInvalid"),p=o("FormListItem"),F=o("SecurityInput"),B=o("FormList"),i=o("CheckBoxObject"),r=o("CheckBoxLabelText"),n=o("CheckBox"),w=o("BasicButton"),I=o("ButtonListItem"),C=o("ButtonList"),L=o("PageContents");return j(),H(L,null,{head:a(()=>[t(h,{data:[{text:"홈",to:"/main/home"},{text:"개인금융",to:"/"},{text:"e하나신용대출",to:"/"}]})]),default:a(()=>[t(N,null,{default:a(()=>[t(k,null,{right:a(()=>[t(f,{total:5,current:2})]),default:a(()=>[t(b,{align:"left"},{default:a(()=>[_("e하나신용대출")]),_:1})]),_:1}),t(P,{align:"left"},{default:a(()=>[_(" 실명 및 본인 인증을 진행해 주세요 ")]),_:1}),t(v,{align:"left"},{default:a(()=>[_(" 대출상담 및 한도 조회를 위한 신용정보 조회는"),ne,_(" 개인신용평점에 영향을 주지 않습니다. ")]),_:1})]),_:1}),t(B,{classNames:{wrap:"row-margin-block-small row-margin-top-none"}},{default:a(()=>[t(p,{titleText:"이름",target:"#PF_P01_p002_name"},{default:a(()=>[t(m,{error:g.state.nameError},{default:a(()=>[t(c,{error:g.state.nameError},{default:a(()=>[t(d,{flexible:!0},{default:a(()=>[t(u,{title:"이름",id:"PF_P01_p002_name"})]),_:1})]),_:1},8,["error"]),t(y,null,{default:a(()=>[_("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),t(p,{titleText:"주민등록번호",target:"#PF_P01_p002_id"},{default:a(()=>[t(m,{error:g.state.idNumberError},{default:a(()=>[t(c,{error:g.state.idNumberError},{default:a(()=>[t(d,{flexible:!0},{default:a(()=>[t(u,{type:"number",pattern:"\\d*",title:"주민등록번호 앞 6자리",id:"PF_P01_p002_id"})]),_:1}),t(d,{type:"sub"},{default:a(()=>[_("-")]),_:1}),t(d,{flexible:!0},{default:a(()=>[t(F,{title:"주민등록번호 뒤 7자리",dot:[!0,!0,!0,!1,!1,!1,!1]})]),_:1})]),_:1},8,["error"]),t(y,null,{default:a(()=>[_("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),t(p,{titleText:"연락처",target:"#PF_P01_p002_phone"},{default:a(()=>[t(m,{error:g.state.phoneError},{default:a(()=>[t(c,{error:g.state.phoneError},{default:a(()=>[t(d,{flexible:!0},{default:a(()=>[t(u,{title:"연락처",id:"PF_P01_p002_phone"})]),_:1})]),_:1},8,["error"]),t(y,null,{default:a(()=>[_("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),oe,s("section",ge,[de,s("div",{class:l(e.$style["agree-list"])},[s("ul",{class:l(e.$style["agree-list__container"])},[s("li",{class:l(e.$style["agree-list__all"])},[s("div",{class:l(e.$style["agree-list__all-head"])},[t(n,{id:"PF_P01_p002_agreeAll",classNames:{wrap:e.$style["agree-list__all-checkbox"]}},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_("전체동의")]),_:1})]),_:1},8,["classNames"])],2),s("div",{class:l(e.$style["agree-list__all-contents"])},[s("ul",{class:l(e.$style["agree-list__depth"])},[s("li",{class:l(e.$style["agree-list__depth-item"])},[s("div",{class:l(e.$style["agree-list__depth-head"])},[t(n,{id:"PF_P01_p002_agree001",classNames:{wrap:e.$style["agree-list__depth-checkbox"]}},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_(" 서비스 이용약관 전체동의 ")]),_:1})]),_:1},8,["classNames"])],2),s("div",{class:l(e.$style["agree-list__depth-contents"])},[s("ul",{class:l(e.$style["agree-list__list"])},[s("li",{class:l(e.$style["agree-list__item"])},[s("div",{class:l(e.$style["agree-list__head"])},[t(n,{id:"PF_P01_p002_agree_001_001",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"tertiary"},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_(" 개인(신용)정보 필수적 수집 · 이용동의 ")]),_:1})]),_:1},8,["classNames"]),s("div",{class:l(e.$style["agree-list__right"])},[s("button",{type:"button",class:l(e.$style["agree-list__link"])},[s("span",{class:l(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2),s("ul",{class:l([e.$style["agree-list__list"],e.$style["agree-list__list--secondary"]])},[s("li",{class:l(e.$style["agree-list__item"])},[s("div",{class:l(e.$style["agree-list__head"])},[t(n,{id:"PF_P01_p002_agree_001_001_001",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_(" 개인(신용)정보 필수적 수집·이용 ")]),_:1})]),_:1},8,["classNames"]),s("div",{class:l(e.$style["agree-list__right"])},[s("button",{type:"button",class:l(e.$style["agree-list__link"])},[s("span",{class:l(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2),s("li",{class:l(e.$style["agree-list__item"])},[s("div",{class:l(e.$style["agree-list__head"])},[t(n,{id:"PF_P01_p002_agree_001_001_002",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_(" 고유식별번호 필수적 수집·이용 ")]),_:1})]),_:1},8,["classNames"]),s("div",{class:l(e.$style["agree-list__right"])},[s("button",{type:"button",class:l(e.$style["agree-list__link"])},[s("span",{class:l(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2)],2)],2),s("li",{class:l(e.$style["agree-list__item"])},[s("div",{class:l(e.$style["agree-list__head"])},[t(n,{id:"PF_P01_p002_agree_001_002",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"tertiary"},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_("개인(신용)정보 필수적 조회 동의")]),_:1})]),_:1},8,["classNames"]),s("div",{class:l(e.$style["agree-list__right"])},[s("button",{type:"button",class:l(e.$style["agree-list__link"])},[s("span",{class:l(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2),s("ul",{class:l([e.$style["agree-list__list"],e.$style["agree-list__list--secondary"]])},[s("li",{class:l(e.$style["agree-list__item"])},[s("div",{class:l(e.$style["agree-list__head"])},[t(n,{id:"PF_P01_p002_agree_001_002_001",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_("개인(신용)정보 필수적 조회")]),_:1})]),_:1},8,["classNames"]),s("div",{class:l(e.$style["agree-list__right"])},[s("button",{type:"button",class:l(e.$style["agree-list__link"])},[s("span",{class:l(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2),s("li",{class:l(e.$style["agree-list__item"])},[s("div",{class:l(e.$style["agree-list__head"])},[t(n,{id:"PF_P01_p002_agree_001_002_002",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_("고유식별번호 필수적 조회")]),_:1})]),_:1},8,["classNames"]),s("div",{class:l(e.$style["agree-list__right"])},[s("button",{type:"button",class:l(e.$style["agree-list__link"])},[s("span",{class:l(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2)],2)],2),s("li",{class:l(e.$style["agree-list__item"])},[s("div",{class:l(e.$style["agree-list__head"])},[t(n,{id:"PF_P01_p002_agree_001_003",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"tertiary"},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_("개인(신용)정보 필수적 제공 동의")]),_:1})]),_:1},8,["classNames"]),s("div",{class:l(e.$style["agree-list__right"])},[s("button",{type:"button",class:l(e.$style["agree-list__link"])},[s("span",{class:l(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2),s("ul",{class:l([e.$style["agree-list__list"],e.$style["agree-list__list--secondary"]])},[s("li",{class:l(e.$style["agree-list__item"])},[s("div",{class:l(e.$style["agree-list__head"])},[t(n,{id:"PF_P01_p002_agree_001_003_001",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_("개인(신용)정보 필수적 제공")]),_:1})]),_:1},8,["classNames"]),s("div",{class:l(e.$style["agree-list__right"])},[s("button",{type:"button",class:l(e.$style["agree-list__link"])},[s("span",{class:l(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2),s("li",{class:l(e.$style["agree-list__item"])},[s("div",{class:l(e.$style["agree-list__head"])},[t(n,{id:"PF_P01_p002_agree_001_003_002",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_("고유식별번호 필수적 제공")]),_:1})]),_:1},8,["classNames"]),s("div",{class:l(e.$style["agree-list__right"])},[s("button",{type:"button",class:l(e.$style["agree-list__link"])},[s("span",{class:l(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2)],2)],2),s("li",{class:l(e.$style["agree-list__item"])},[s("div",{class:l(e.$style["agree-list__head"])},[t(n,{id:"PF_P01_p002_agree_001_004",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"tertiary"},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_("금융상품안내")]),_:1})]),_:1},8,["classNames"]),s("div",{class:l(e.$style["agree-list__right"])},[s("button",{type:"button",class:l(e.$style["agree-list__link"])},[s("span",{class:l(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2),s("ul",{class:l([e.$style["agree-list__list"],e.$style["agree-list__list--secondary"]])},[s("li",{class:l(e.$style["agree-list__item"])},[s("div",{class:l(e.$style["agree-list__head"])},[t(n,{id:"PF_P01_p002_agree_001_004_001",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_("금융 상품 안내 동의")]),_:1})]),_:1},8,["classNames"]),s("div",{class:l(e.$style["agree-list__right"])},[s("button",{type:"button",class:l(e.$style["agree-list__link"])},[s("span",{class:l(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2)],2)],2)],2)],2)],2),s("li",{class:l(e.$style["agree-list__depth-item"])},[s("div",{class:l(e.$style["agree-list__depth-head"])},[t(n,{id:"PF_P01_p002_agree_002",classNames:{wrap:e.$style["agree-list__depth-checkbox"]}},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_("행정안전부 공공마이데이터서비스 이용 동의(증빙서류 자동 제출)")]),_:1})]),_:1},8,["classNames"])],2),s("div",{class:l(e.$style["agree-list__depth-contents"])},[s("ul",{class:l(e.$style["agree-list__list"])},[s("li",{class:l(e.$style["agree-list__item"])},[s("div",{class:l(e.$style["agree-list__head"])},[t(n,{id:"PF_P01_p002_agree_002_001",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"tertiary"},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_(" 개인(신용)정보 필수적 수집·이용 동의(공공 마이데이터) ")]),_:1})]),_:1},8,["classNames"]),s("div",{class:l(e.$style["agree-list__right"])},[s("button",{type:"button",class:l(e.$style["agree-list__link"])},[s("span",{class:l(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2),s("ul",{class:l([e.$style["agree-list__list"],e.$style["agree-list__list--secondary"]])},[s("li",{class:l(e.$style["agree-list__item"])},[s("div",{class:l(e.$style["agree-list__head"])},[t(n,{id:"PF_P01_p002_agree_002_001_001",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_(" 개인(신용)정보 수집·이용 동의 ")]),_:1})]),_:1},8,["classNames"]),s("div",{class:l(e.$style["agree-list__right"])},[s("button",{type:"button",class:l(e.$style["agree-list__link"])},[s("span",{class:l(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2),s("li",{class:l(e.$style["agree-list__item"])},[s("div",{class:l(e.$style["agree-list__head"])},[t(n,{id:"PF_P01_p002_agree_002_001_002",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_(" 고유식별정보 수집·이용 동의 ")]),_:1})]),_:1},8,["classNames"]),s("div",{class:l(e.$style["agree-list__right"])},[s("button",{type:"button",class:l(e.$style["agree-list__link"])},[s("span",{class:l(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2)],2)],2),s("li",{class:l(e.$style["agree-list__item"])},[s("div",{class:l(e.$style["agree-list__head"])},[t(n,{id:"PF_P01_p002_agree_002_002",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"tertiary"},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_(" 개인(신용)정보 필수적 제공 동의(공공 마이데이터) ")]),_:1})]),_:1},8,["classNames"]),s("div",{class:l(e.$style["agree-list__right"])},[s("button",{type:"button",class:l(e.$style["agree-list__link"])},[s("span",{class:l(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2),s("ul",{class:l([e.$style["agree-list__list"],e.$style["agree-list__list--secondary"]])},[s("li",{class:l(e.$style["agree-list__item"])},[s("div",{class:l(e.$style["agree-list__head"])},[t(n,{id:"PF_P01_p002_agree_002_002_001",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_(" 개인(신용)정보 제공 동의 ")]),_:1})]),_:1},8,["classNames"]),s("div",{class:l(e.$style["agree-list__right"])},[s("button",{type:"button",class:l(e.$style["agree-list__link"])},[s("span",{class:l(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2),s("li",{class:l(e.$style["agree-list__item"])},[s("div",{class:l(e.$style["agree-list__head"])},[t(n,{id:"PF_P01_p002_agree_002_002_002",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_(" 고유식별정보 제공 동의 ")]),_:1})]),_:1},8,["classNames"]),s("div",{class:l(e.$style["agree-list__right"])},[s("button",{type:"button",class:l(e.$style["agree-list__link"])},[s("span",{class:l(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2)],2)],2),s("li",{class:l(e.$style["agree-list__item"])},[s("div",{class:l(e.$style["agree-list__head"])},[t(n,{id:"PF_P01_p002_agree_002_003",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"tertiary"},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_(" 개인(신용)정보 필수적 제3자 제공 동의(공공 마이데이터) ")]),_:1})]),_:1},8,["classNames"]),s("div",{class:l(e.$style["agree-list__right"])},[s("button",{type:"button",class:l(e.$style["agree-list__link"])},[s("span",{class:l(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2),s("ul",{class:l([e.$style["agree-list__list"],e.$style["agree-list__list--secondary"]])},[s("li",{class:l(e.$style["agree-list__item"])},[s("div",{class:l(e.$style["agree-list__head"])},[t(n,{id:"PF_P01_p002_agree_002_003_001",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_(" 개인(신용)정보 제공(조회) 동의 ")]),_:1})]),_:1},8,["classNames"]),s("div",{class:l(e.$style["agree-list__right"])},[s("button",{type:"button",class:l(e.$style["agree-list__link"])},[s("span",{class:l(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2),s("li",{class:l(e.$style["agree-list__item"])},[s("div",{class:l(e.$style["agree-list__head"])},[t(n,{id:"PF_P01_p002_agree_002_003_002",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_(" 고유식별정보 제공(조회) 동의 ")]),_:1})]),_:1},8,["classNames"]),s("div",{class:l(e.$style["agree-list__right"])},[s("button",{type:"button",class:l(e.$style["agree-list__link"])},[s("span",{class:l(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2)],2)],2),s("li",{class:l(e.$style["agree-list__item"])},[s("div",{class:l(e.$style["agree-list__head"])},[t(n,{id:"PF_P01_p002_agree_002_004",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"tertiary"},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_(" 본인 행정정보 제3자 제공 요구서(공공 마이데이터) ")]),_:1})]),_:1},8,["classNames"]),s("div",{class:l(e.$style["agree-list__right"])},[s("button",{type:"button",class:l(e.$style["agree-list__link"])},[s("span",{class:l(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2),s("ul",{class:l([e.$style["agree-list__list"],e.$style["agree-list__list--secondary"]])},[s("li",{class:l(e.$style["agree-list__item"])},[s("div",{class:l(e.$style["agree-list__head"])},[t(n,{id:"PF_P01_p002_agree_002_004_001",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:a(()=>[t(i),t(r,null,{default:a(()=>[_(" 본인 행정정보 제3자 제공 요구 ")]),_:1})]),_:1},8,["classNames"]),s("div",{class:l(e.$style["agree-list__right"])},[s("button",{type:"button",class:l(e.$style["agree-list__link"])},[s("span",{class:l(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2)],2)],2)],2)],2)],2)],2)],2)],2)],2)],2)]),t(C,null,{default:a(()=>[t(I,null,{default:a(()=>[t(w,null,{default:a(()=>[_("다음")]),_:1})]),_:1})]),_:1})]),_:1})}const ce={$style:ie},je=T(re,[["render",ue],["__cssModules",ce]]);export{je as default};
