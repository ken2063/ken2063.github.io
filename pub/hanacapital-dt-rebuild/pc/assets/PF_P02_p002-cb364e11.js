import{_ as T,E as q,i as E,o as M,b as S,l as n,x as H,w as t,g as j,q as s,B as _,e as l,n as a}from"./index-47f0144b.js";import{P as A}from"./PageContents-eaa89b0e.js";import{L as O}from"./LocationBar-a33719b5.js";import{P as R,a as V}from"./PageTitle-32f3e12d.js";import{P as U}from"./PageHeadRow-8a0cce9e.js";import{S as z}from"./StepProgress-e6b4e8fc.js";import{P as D}from"./PageMainText-81e7fb66.js";import{P as G}from"./PageSubText-e95ebbf3.js";import{F as J,a as K}from"./FormListItem-2264c1ad.js";import{F as Q}from"./FormInvalid-7352e204.js";import{I as W,a as X}from"./InputBlockCell-9017943e.js";import{B as Y}from"./BasicInput-5622c3d1.js";import{F as Z}from"./FormInvalidMessage-bb1cfe97.js";import{S as x}from"./SecurityInput-61176f07.js";import{C as ee,a as se}from"./CheckBoxObject-8305fb27.js";import{C as le}from"./CheckBoxLabelText-10f700ac.js";import{B as ae}from"./BasicButton-5b10203b.js";import{B as te,a as _e}from"./ButtonListItem-c3f0c6e2.js";import"./text-delete-5c18c577.js";import"./check-l-6551bef3.js";const ie={"agree-list":"_agree-list_1r0dl_1","agree-list__container":"_agree-list__container_1r0dl_4","agree-list__right":"_agree-list__right_1r0dl_9","agree-list__all":"_agree-list__all_1r0dl_20","agree-list__all-head":"_agree-list__all-head_1r0dl_33","agree-list__all-checkbox":"_agree-list__all-checkbox_1r0dl_40","agree-list__all-contents":"_agree-list__all-contents_1r0dl_44","agree-list__depth":"_agree-list__depth_1r0dl_47","agree-list__depth-item":"_agree-list__depth-item_1r0dl_64","agree-list__depth-head":"_agree-list__depth-head_1r0dl_71","agree-list__depth-title":"_agree-list__depth-title_1r0dl_76","agree-list__depth-checkbox":"_agree-list__depth-checkbox_1r0dl_82","agree-list__depth-contents":"_agree-list__depth-contents_1r0dl_86","agree-list__list":"_agree-list__list_1r0dl_89","agree-list__item":"_agree-list__item_1r0dl_94","agree-list__head":"_agree-list__head_1r0dl_100","agree-list__checkbox":"_agree-list__checkbox_1r0dl_111","agree-list__link":"_agree-list__link_1r0dl_115","agree-list__link-text":"_agree-list__link-text_1r0dl_160","agree-list__contents":"_agree-list__contents_1r0dl_178","agree-list__list--secondary":"_agree-list__list--secondary_1r0dl_185","agree-list__list--secondary-no-padding":"_agree-list__list--secondary-no-padding_1r0dl_203","agree-list__list--tertiary":"_agree-list__list--tertiary_1r0dl_206","agree-list__list--tertiary-no-padding":"_agree-list__list--tertiary-no-padding_1r0dl_227","basic-list":"_basic-list_1r0dl_232","basic-list__item":"_basic-list__item_1r0dl_238","basic-list__symbol":"_basic-list__symbol_1r0dl_257","basic-list__content":"_basic-list__content_1r0dl_311","basic-list--regular":"_basic-list--regular_1r0dl_316","basic-list--medium":"_basic-list--medium_1r0dl_327","basic-list--regular-margin":"_basic-list--regular-margin_1r0dl_341","basic-list--normal-margin":"_basic-list--normal-margin_1r0dl_344","basic-list--small-margin":"_basic-list--small-margin_1r0dl_347"},re={components:{PageContents:A,LocationBar:O,PageHead:R,PageTitle:V,PageHeadRow:U,StepProgress:z,PageMainText:D,PageSubText:G,FormList:J,FormListItem:K,FormInvalid:Q,InputBlock:W,InputBlockCell:X,BasicInput:Y,FormInvalidMessage:Z,SecurityInput:x,CheckBox:ee,CheckBoxObject:se,CheckBoxLabelText:le,BasicButton:ae,ButtonList:te,ButtonListItem:_e},setup(){const e={ui:{header:q()}},h=E({nameError:!1,idNumberError:!1,phoneError:!1});return M(()=>{e.ui.header.setActive(()=>"personalLoan")}),S(()=>{e.ui.header.setActive()}),{state:h}}},oe=l("br",null,null,-1),ne=l("div",null,"// [공통 > 본인인증] 내용 노출",-1),de={class:"row-margin-block-small row-margin-bottom-none"},ge=l("h3",{class:"text-title-1 row-margin-contents"},"약관동의",-1);function ce(e,h,ue,d,ye,pe){const $=n("LocationBar"),f=n("PageTitle"),b=n("StepProgress"),P=n("PageHeadRow"),k=n("PageMainText"),N=n("PageSubText"),v=n("PageHead"),c=n("BasicInput"),g=n("InputBlockCell"),m=n("InputBlock"),u=n("FormInvalidMessage"),y=n("FormInvalid"),p=n("FormListItem"),F=n("SecurityInput"),B=n("FormList"),i=n("CheckBoxObject"),r=n("CheckBoxLabelText"),o=n("CheckBox"),w=n("BasicButton"),I=n("ButtonListItem"),C=n("ButtonList"),L=n("PageContents");return j(),H(L,null,{head:t(()=>[s($,{data:[{text:"홈",to:"/main/home"},{text:"개인금융",to:"/"},{text:"행복아파트론",to:"/"}]})]),default:t(()=>[s(v,null,{default:t(()=>[s(P,null,{right:t(()=>[s(b,{total:5,current:2})]),default:t(()=>[s(f,{align:"left"},{default:t(()=>[_("행복아파트론")]),_:1})]),_:1}),s(k,{align:"left"},{default:t(()=>[_(" 실명 및 본인 인증을 진행해 주세요 ")]),_:1}),s(N,{align:"left"},{default:t(()=>[_(" 대출상담 및 한도 조회를 위한 신용정보 조회는"),oe,_(" 개인신용평점에 영향을 주지 않습니다. ")]),_:1})]),_:1}),s(B,{classNames:{wrap:"row-margin-block-small row-margin-top-none"}},{default:t(()=>[s(p,{titleText:"이름",target:"#PF_P02_p002_name"},{default:t(()=>[s(y,{error:d.state.nameError},{default:t(()=>[s(m,{error:d.state.nameError},{default:t(()=>[s(g,{flexible:!0},{default:t(()=>[s(c,{title:"이름",id:"PF_P02_p002_name"})]),_:1})]),_:1},8,["error"]),s(u,null,{default:t(()=>[_("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),s(p,{titleText:"주민등록번호",target:"#PF_P02_p002_id"},{default:t(()=>[s(y,{error:d.state.idNumberError},{default:t(()=>[s(m,{error:d.state.idNumberError},{default:t(()=>[s(g,{flexible:!0},{default:t(()=>[s(c,{type:"number",pattern:"\\d*",title:"주민등록번호 앞 6자리",id:"PF_P02_p002_id"})]),_:1}),s(g,{type:"sub"},{default:t(()=>[_("-")]),_:1}),s(g,{flexible:!0},{default:t(()=>[s(F,{title:"주민등록번호 뒤 7자리",dot:[!0,!0,!0,!1,!1,!1,!1]})]),_:1})]),_:1},8,["error"]),s(u,null,{default:t(()=>[_("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),s(p,{titleText:"연락처",target:"#PF_P02_p002_phone"},{default:t(()=>[s(y,{error:d.state.phoneError},{default:t(()=>[s(m,{error:d.state.phoneError},{default:t(()=>[s(g,{flexible:!0},{default:t(()=>[s(c,{title:"연락처",id:"PF_P02_p002_phone"})]),_:1})]),_:1},8,["error"]),s(u,null,{default:t(()=>[_("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),ne,l("section",de,[ge,l("div",{class:a(e.$style["agree-list"])},[l("ul",{class:a(e.$style["agree-list__container"])},[l("li",{class:a(e.$style["agree-list__all"])},[l("div",{class:a(e.$style["agree-list__all-head"])},[s(o,{id:"PF_P02_p002_agreeAll",classNames:{wrap:e.$style["agree-list__all-checkbox"]}},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_("전체동의")]),_:1})]),_:1},8,["classNames"])],2),l("div",{class:a(e.$style["agree-list__all-contents"])},[l("ul",{class:a(e.$style["agree-list__depth"])},[l("li",{class:a(e.$style["agree-list__depth-item"])},[l("div",{class:a(e.$style["agree-list__depth-head"])},[s(o,{id:"PF_P02_p002_agree001",classNames:{wrap:e.$style["agree-list__depth-checkbox"]}},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_(" 서비스 이용약관 전체동의 ")]),_:1})]),_:1},8,["classNames"])],2),l("div",{class:a(e.$style["agree-list__depth-contents"])},[l("ul",{class:a(e.$style["agree-list__list"])},[l("li",{class:a(e.$style["agree-list__item"])},[l("div",{class:a(e.$style["agree-list__head"])},[s(o,{id:"PF_P02_p002_agree_001_001",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"tertiary"},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_(" 개인(신용)정보 필수적 수집 · 이용동의 ")]),_:1})]),_:1},8,["classNames"]),l("div",{class:a(e.$style["agree-list__right"])},[l("button",{type:"button",class:a(e.$style["agree-list__link"])},[l("span",{class:a(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2),l("ul",{class:a([e.$style["agree-list__list"],e.$style["agree-list__list--secondary"]])},[l("li",{class:a(e.$style["agree-list__item"])},[l("div",{class:a(e.$style["agree-list__head"])},[s(o,{id:"PF_P02_p002_agree_001_001_001",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_(" 개인(신용)정보 필수적 수집·이용 ")]),_:1})]),_:1},8,["classNames"])],2)],2),l("li",{class:a(e.$style["agree-list__item"])},[l("div",{class:a(e.$style["agree-list__head"])},[s(o,{id:"PF_P02_p002_agree_001_001_002",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_(" 고유식별번호 필수적 수집·이용 ")]),_:1})]),_:1},8,["classNames"])],2)],2)],2)],2),l("li",{class:a(e.$style["agree-list__item"])},[l("div",{class:a(e.$style["agree-list__head"])},[s(o,{id:"PF_P02_p002_agree_001_002",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"tertiary"},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_("개인(신용)정보 필수적 조회 동의")]),_:1})]),_:1},8,["classNames"]),l("div",{class:a(e.$style["agree-list__right"])},[l("button",{type:"button",class:a(e.$style["agree-list__link"])},[l("span",{class:a(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2),l("ul",{class:a([e.$style["agree-list__list"],e.$style["agree-list__list--secondary"]])},[l("li",{class:a(e.$style["agree-list__item"])},[l("div",{class:a(e.$style["agree-list__head"])},[s(o,{id:"PF_P02_p002_agree_001_002_001",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_("개인(신용)정보 필수적 조회")]),_:1})]),_:1},8,["classNames"])],2)],2),l("li",{class:a(e.$style["agree-list__item"])},[l("div",{class:a(e.$style["agree-list__head"])},[s(o,{id:"PF_P02_p002_agree_001_002_002",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_("고유식별번호 필수적 조회")]),_:1})]),_:1},8,["classNames"])],2)],2)],2)],2),l("li",{class:a(e.$style["agree-list__item"])},[l("div",{class:a(e.$style["agree-list__head"])},[s(o,{id:"PF_P02_p002_agree_001_003",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"tertiary"},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_("개인(신용)정보 필수적 제공 동의")]),_:1})]),_:1},8,["classNames"]),l("div",{class:a(e.$style["agree-list__right"])},[l("button",{type:"button",class:a(e.$style["agree-list__link"])},[l("span",{class:a(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2),l("ul",{class:a([e.$style["agree-list__list"],e.$style["agree-list__list--secondary"]])},[l("li",{class:a(e.$style["agree-list__item"])},[l("div",{class:a(e.$style["agree-list__head"])},[s(o,{id:"PF_P02_p002_agree_001_003_001",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_("개인(신용)정보 필수적 제공")]),_:1})]),_:1},8,["classNames"])],2)],2),l("li",{class:a(e.$style["agree-list__item"])},[l("div",{class:a(e.$style["agree-list__head"])},[s(o,{id:"PF_P02_p002_agree_001_003_002",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_("고유식별번호 필수적 제공")]),_:1})]),_:1},8,["classNames"])],2)],2)],2)],2),l("li",{class:a(e.$style["agree-list__item"])},[l("div",{class:a(e.$style["agree-list__head"])},[s(o,{id:"PF_P02_p002_agree_001_004",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"tertiary"},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_("금융상품안내")]),_:1})]),_:1},8,["classNames"]),l("div",{class:a(e.$style["agree-list__right"])},[l("button",{type:"button",class:a(e.$style["agree-list__link"])},[l("span",{class:a(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2),l("ul",{class:a([e.$style["agree-list__list"],e.$style["agree-list__list--secondary"]])},[l("li",{class:a(e.$style["agree-list__item"])},[l("div",{class:a(e.$style["agree-list__head"])},[s(o,{id:"PF_P02_p002_agree_001_004_001",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_("금융 상품 안내 동의")]),_:1})]),_:1},8,["classNames"])],2)],2)],2)],2)],2)],2)],2),l("li",{class:a(e.$style["agree-list__depth-item"])},[l("div",{class:a(e.$style["agree-list__depth-head"])},[s(o,{id:"PF_P02_p002_agree_002",classNames:{wrap:e.$style["agree-list__depth-checkbox"]}},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_("행정안전부 공공마이데이터서비스 이용 동의(증빙서류 자동 제출)")]),_:1})]),_:1},8,["classNames"])],2),l("div",{class:a(e.$style["agree-list__depth-contents"])},[l("ul",{class:a(e.$style["agree-list__list"])},[l("li",{class:a(e.$style["agree-list__item"])},[l("div",{class:a(e.$style["agree-list__head"])},[s(o,{id:"PF_P02_p002_agree_002_001",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"tertiary"},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_(" 개인(신용)정보 필수적 수집·이용 동의(공공 마이데이터) ")]),_:1})]),_:1},8,["classNames"]),l("div",{class:a(e.$style["agree-list__right"])},[l("button",{type:"button",class:a(e.$style["agree-list__link"])},[l("span",{class:a(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2),l("ul",{class:a([e.$style["agree-list__list"],e.$style["agree-list__list--secondary"]])},[l("li",{class:a(e.$style["agree-list__item"])},[l("div",{class:a(e.$style["agree-list__head"])},[s(o,{id:"PF_P02_p002_agree_002_001_001",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_(" 개인(신용)정보 수집·이용 동의 ")]),_:1})]),_:1},8,["classNames"])],2)],2),l("li",{class:a(e.$style["agree-list__item"])},[l("div",{class:a(e.$style["agree-list__head"])},[s(o,{id:"PF_P02_p002_agree_002_001_002",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_(" 고유식별정보 수집·이용 동의 ")]),_:1})]),_:1},8,["classNames"])],2)],2)],2)],2),l("li",{class:a(e.$style["agree-list__item"])},[l("div",{class:a(e.$style["agree-list__head"])},[s(o,{id:"PF_P02_p002_agree_002_002",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"tertiary"},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_(" 개인(신용)정보 필수적 제공 동의(공공 마이데이터) ")]),_:1})]),_:1},8,["classNames"]),l("div",{class:a(e.$style["agree-list__right"])},[l("button",{type:"button",class:a(e.$style["agree-list__link"])},[l("span",{class:a(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2),l("ul",{class:a([e.$style["agree-list__list"],e.$style["agree-list__list--secondary"]])},[l("li",{class:a(e.$style["agree-list__item"])},[l("div",{class:a(e.$style["agree-list__head"])},[s(o,{id:"PF_P02_p002_agree_002_002_001",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_(" 개인(신용)정보 제공 동의 ")]),_:1})]),_:1},8,["classNames"])],2)],2),l("li",{class:a(e.$style["agree-list__item"])},[l("div",{class:a(e.$style["agree-list__head"])},[s(o,{id:"PF_P02_p002_agree_002_002_002",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_(" 고유식별정보 제공 동의 ")]),_:1})]),_:1},8,["classNames"])],2)],2)],2)],2),l("li",{class:a(e.$style["agree-list__item"])},[l("div",{class:a(e.$style["agree-list__head"])},[s(o,{id:"PF_P02_p002_agree_002_003",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"tertiary"},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_(" 개인(신용)정보 필수적 제3자 제공 동의(공공 마이데이터) ")]),_:1})]),_:1},8,["classNames"]),l("div",{class:a(e.$style["agree-list__right"])},[l("button",{type:"button",class:a(e.$style["agree-list__link"])},[l("span",{class:a(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2),l("ul",{class:a([e.$style["agree-list__list"],e.$style["agree-list__list--secondary"]])},[l("li",{class:a(e.$style["agree-list__item"])},[l("div",{class:a(e.$style["agree-list__head"])},[s(o,{id:"PF_P02_p002_agree_002_003_001",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_(" 개인(신용)정보 제공(조회) 동의 ")]),_:1})]),_:1},8,["classNames"])],2)],2),l("li",{class:a(e.$style["agree-list__item"])},[l("div",{class:a(e.$style["agree-list__head"])},[s(o,{id:"PF_P02_p002_agree_002_003_002",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_(" 고유식별정보 제공(조회) 동의 ")]),_:1})]),_:1},8,["classNames"])],2)],2)],2)],2),l("li",{class:a(e.$style["agree-list__item"])},[l("div",{class:a(e.$style["agree-list__head"])},[s(o,{id:"PF_P02_p002_agree_002_004",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"tertiary"},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_(" 본인 행정정보 제3자 제공 요구서(공공 마이데이터) ")]),_:1})]),_:1},8,["classNames"]),l("div",{class:a(e.$style["agree-list__right"])},[l("button",{type:"button",class:a(e.$style["agree-list__link"])},[l("span",{class:a(e.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2),l("ul",{class:a([e.$style["agree-list__list"],e.$style["agree-list__list--secondary"]])},[l("li",{class:a(e.$style["agree-list__item"])},[l("div",{class:a(e.$style["agree-list__head"])},[s(o,{id:"PF_P02_p002_agree_002_004_001",classNames:{wrap:e.$style["agree-list__checkbox"]},theme:"quinary"},{default:t(()=>[s(i),s(r,null,{default:t(()=>[_(" 본인 행정정보 제3자 제공 요구 ")]),_:1})]),_:1},8,["classNames"])],2)],2)],2)],2)],2)],2)],2)],2)],2)],2)],2)],2)]),s(C,null,{default:t(()=>[s(I,null,{default:t(()=>[s(w,null,{default:t(()=>[_("다음")]),_:1})]),_:1})]),_:1})]),_:1})}const me={$style:ie},je=T(re,[["render",ce],["__cssModules",me]]);export{je as default};
