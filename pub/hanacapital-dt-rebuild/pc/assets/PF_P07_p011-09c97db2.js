import{_ as w,E as T,i as M,o as E,b as S,l as _,x as q,w as s,g as H,q as e,B as r,e as l,n as a}from"./index-09d20b4d.js";import{P as j}from"./PageContents-36fc532b.js";import{L as O}from"./LocationBar-12d983fe.js";import{P as R,a as V}from"./PageTitle-73899e08.js";import{P as A}from"./PageHeadRow-e9de67a2.js";import{S as U}from"./StepProgress-a673e169.js";import{P as x}from"./PageMainText-e5e373b9.js";import{F as z,a as D}from"./FormListItem-a5180354.js";import{F as G}from"./FormInvalid-fdd8697f.js";import{I as J,a as K}from"./InputBlockCell-7eb1eb54.js";import{B as Q}from"./BasicInput-1a5a4356.js";import{F as W}from"./FormInvalidMessage-df5a6726.js";import{S as X}from"./SecurityInput-9c7fd89f.js";import{B as Y}from"./BasicButton-c114d6f6.js";import{B as Z,a as ee}from"./ButtonListItem-20eeef64.js";import{C as te,a as se}from"./CheckBoxObject-6d3f779b.js";import{C as le}from"./CheckBoxLabelText-ad6f4cd5.js";import"./text-delete-603f2948.js";import"./check-l-6853efa8.js";const ae={"agree-list":"_agree-list_1r0dl_1","agree-list__container":"_agree-list__container_1r0dl_4","agree-list__right":"_agree-list__right_1r0dl_9","agree-list__all":"_agree-list__all_1r0dl_20","agree-list__all-head":"_agree-list__all-head_1r0dl_33","agree-list__all-checkbox":"_agree-list__all-checkbox_1r0dl_40","agree-list__all-contents":"_agree-list__all-contents_1r0dl_44","agree-list__depth":"_agree-list__depth_1r0dl_47","agree-list__depth-item":"_agree-list__depth-item_1r0dl_64","agree-list__depth-head":"_agree-list__depth-head_1r0dl_71","agree-list__depth-title":"_agree-list__depth-title_1r0dl_76","agree-list__depth-checkbox":"_agree-list__depth-checkbox_1r0dl_82","agree-list__depth-contents":"_agree-list__depth-contents_1r0dl_86","agree-list__list":"_agree-list__list_1r0dl_89","agree-list__item":"_agree-list__item_1r0dl_94","agree-list__head":"_agree-list__head_1r0dl_100","agree-list__checkbox":"_agree-list__checkbox_1r0dl_111","agree-list__link":"_agree-list__link_1r0dl_115","agree-list__link-text":"_agree-list__link-text_1r0dl_160","agree-list__contents":"_agree-list__contents_1r0dl_178","agree-list__list--secondary":"_agree-list__list--secondary_1r0dl_185","agree-list__list--secondary-no-padding":"_agree-list__list--secondary-no-padding_1r0dl_203","agree-list__list--tertiary":"_agree-list__list--tertiary_1r0dl_206","agree-list__list--tertiary-no-padding":"_agree-list__list--tertiary-no-padding_1r0dl_227","basic-list":"_basic-list_1r0dl_232","basic-list__item":"_basic-list__item_1r0dl_238","basic-list__symbol":"_basic-list__symbol_1r0dl_257","basic-list__content":"_basic-list__content_1r0dl_311","basic-list--regular":"_basic-list--regular_1r0dl_316","basic-list--medium":"_basic-list--medium_1r0dl_327","basic-list--regular-margin":"_basic-list--regular-margin_1r0dl_341","basic-list--normal-margin":"_basic-list--normal-margin_1r0dl_344","basic-list--small-margin":"_basic-list--small-margin_1r0dl_347"},_e={components:{PageContents:j,LocationBar:O,PageHead:R,PageTitle:V,PageHeadRow:A,StepProgress:U,PageMainText:x,FormList:z,FormListItem:D,FormInvalid:G,InputBlock:J,InputBlockCell:K,BasicInput:Q,FormInvalidMessage:W,SecurityInput:X,BasicButton:Y,ButtonList:Z,ButtonListItem:ee,CheckBox:te,CheckBoxObject:se,CheckBoxLabelText:le},setup(){const t={ui:{header:T()}},g=M({nameError:!1,idNumberError:!1});return E(()=>{t.ui.header.setActive(()=>"personalLoan")}),S(()=>{t.ui.header.setActive()}),{state:g}}},re={class:"row-margin-block-small row-margin-bottom-none"},ie=l("h3",{class:"text-title-1 row-margin-contents"},"약관동의",-1);function oe(t,g,de,d,ce,ge){const f=_("LocationBar"),b=_("PageTitle"),P=_("StepProgress"),$=_("PageHeadRow"),k=_("PageMainText"),B=_("PageHead"),m=_("BasicInput"),c=_("InputBlockCell"),u=_("InputBlock"),p=_("FormInvalidMessage"),h=_("FormInvalid"),y=_("FormListItem"),F=_("SecurityInput"),v=_("FormList"),i=_("CheckBoxObject"),o=_("CheckBoxLabelText"),n=_("CheckBox"),N=_("BasicButton"),I=_("ButtonListItem"),C=_("ButtonList"),L=_("PageContents");return H(),q(L,null,{head:s(()=>[e(f,{data:[{text:"홈",to:"/main/home"},{text:"개인금융",to:"/"},{text:"스탁론",to:"/"}]})]),default:s(()=>[e(B,null,{default:s(()=>[e($,null,{right:s(()=>[e(P,{total:5,current:2})]),default:s(()=>[e(b,{align:"left"},{default:s(()=>[r("스탁론")]),_:1})]),_:1}),e(k,{align:"left"},{default:s(()=>[r(" 실명 및 본인인증을 진행해 주세요 ")]),_:1})]),_:1}),e(v,null,{default:s(()=>[e(y,{titleText:"이름",target:"#PF_P07_p011_name"},{default:s(()=>[e(h,{error:d.state.nameError},{default:s(()=>[e(u,{error:d.state.nameError},{default:s(()=>[e(c,{flexible:!0},{default:s(()=>[e(m,{title:"이름",id:"PF_P07_p011_name"})]),_:1})]),_:1},8,["error"]),e(p,null,{default:s(()=>[r("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(y,{titleText:"주민등록번호",target:"#PF_P07_p011_id"},{default:s(()=>[e(h,{error:d.state.idNumberError},{default:s(()=>[e(u,{error:d.state.idNumberError},{default:s(()=>[e(c,{flexible:!0},{default:s(()=>[e(m,{type:"number",pattern:"\\d*",title:"주민등록번호 앞 6자리",id:"PF_P07_p011_id"})]),_:1}),e(c,{type:"sub"},{default:s(()=>[r("-")]),_:1}),e(c,{flexible:!0},{default:s(()=>[e(F,{title:"주민등록번호 뒤 7자리",dot:[!0,!0,!0,!1,!1,!1,!1]})]),_:1})]),_:1},8,["error"]),e(p,null,{default:s(()=>[r("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),l("section",re,[ie,l("div",{class:a(t.$style["agree-list"])},[l("div",{class:a(t.$style["agree-list__all-contents"])},[l("ul",{class:a(t.$style["agree-list__depth"])},[l("li",{class:a(t.$style["agree-list__depth-item"])},[l("div",{class:a(t.$style["agree-list__depth-head"])},[e(n,{id:"PF_P07_p011_agree001",classNames:{wrap:t.$style["agree-list__depth-checkbox"]}},{default:s(()=>[e(i),e(o,null,{default:s(()=>[r(" 서비스 이용약관 전체동의 ")]),_:1})]),_:1},8,["classNames"])],2),l("div",{class:a(t.$style["agree-list__depth-contents"])},[l("ul",{class:a(t.$style["agree-list__list"])},[l("li",{class:a(t.$style["agree-list__item"])},[l("div",{class:a(t.$style["agree-list__head"])},[e(n,{id:"PF_P07_p011_agree_001_001",classNames:{wrap:t.$style["agree-list__checkbox"]},theme:"tertiary"},{default:s(()=>[e(i),e(o,null,{default:s(()=>[r(" 개인(신용)정보 필수적 수집 · 이용동의 ")]),_:1})]),_:1},8,["classNames"]),l("div",{class:a(t.$style["agree-list__right"])},[l("button",{type:"button",class:a(t.$style["agree-list__link"])},[l("span",{class:a(t.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2),l("ul",{class:a([t.$style["agree-list__list"],t.$style["agree-list__list--secondary"]])},[l("li",{class:a(t.$style["agree-list__item"])},[l("div",{class:a(t.$style["agree-list__head"])},[e(n,{id:"PF_P07_p011_agree_001_001_001",classNames:{wrap:t.$style["agree-list__checkbox"]},theme:"quinary"},{default:s(()=>[e(i),e(o,null,{default:s(()=>[r(" 개인(신용)정보 필수적 수집·이용 ")]),_:1})]),_:1},8,["classNames"])],2)],2),l("li",{class:a(t.$style["agree-list__item"])},[l("div",{class:a(t.$style["agree-list__head"])},[e(n,{id:"PF_P07_p011_agree_001_001_002",classNames:{wrap:t.$style["agree-list__checkbox"]},theme:"quinary"},{default:s(()=>[e(i),e(o,null,{default:s(()=>[r(" 고유식별번호 필수적 수집·이용 ")]),_:1})]),_:1},8,["classNames"])],2)],2)],2)],2),l("li",{class:a(t.$style["agree-list__item"])},[l("div",{class:a(t.$style["agree-list__head"])},[e(n,{id:"PF_P07_p011_agree_001_002",classNames:{wrap:t.$style["agree-list__checkbox"]},theme:"tertiary"},{default:s(()=>[e(i),e(o,null,{default:s(()=>[r("개인(신용)정보 필수적 조회 동의")]),_:1})]),_:1},8,["classNames"]),l("div",{class:a(t.$style["agree-list__right"])},[l("button",{type:"button",class:a(t.$style["agree-list__link"])},[l("span",{class:a(t.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2),l("ul",{class:a([t.$style["agree-list__list"],t.$style["agree-list__list--secondary"]])},[l("li",{class:a(t.$style["agree-list__item"])},[l("div",{class:a(t.$style["agree-list__head"])},[e(n,{id:"PF_P07_p011_agree_001_002_001",classNames:{wrap:t.$style["agree-list__checkbox"]},theme:"quinary"},{default:s(()=>[e(i),e(o,null,{default:s(()=>[r("개인(신용)정보 필수적 조회")]),_:1})]),_:1},8,["classNames"])],2)],2),l("li",{class:a(t.$style["agree-list__item"])},[l("div",{class:a(t.$style["agree-list__head"])},[e(n,{id:"PF_P07_p011_agree_001_002_002",classNames:{wrap:t.$style["agree-list__checkbox"]},theme:"quinary"},{default:s(()=>[e(i),e(o,null,{default:s(()=>[r("고유식별번호 필수적 조회")]),_:1})]),_:1},8,["classNames"])],2)],2)],2)],2),l("li",{class:a(t.$style["agree-list__item"])},[l("div",{class:a(t.$style["agree-list__head"])},[e(n,{id:"PF_P07_p011_agree_001_003",classNames:{wrap:t.$style["agree-list__checkbox"]},theme:"tertiary"},{default:s(()=>[e(i),e(o,null,{default:s(()=>[r("개인(신용)정보 필수적 제공 동의")]),_:1})]),_:1},8,["classNames"]),l("div",{class:a(t.$style["agree-list__right"])},[l("button",{type:"button",class:a(t.$style["agree-list__link"])},[l("span",{class:a(t.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2),l("ul",{class:a([t.$style["agree-list__list"],t.$style["agree-list__list--secondary"]])},[l("li",{class:a(t.$style["agree-list__item"])},[l("div",{class:a(t.$style["agree-list__head"])},[e(n,{id:"PF_P07_p011_agree_001_003_001",classNames:{wrap:t.$style["agree-list__checkbox"]},theme:"quinary"},{default:s(()=>[e(i),e(o,null,{default:s(()=>[r("개인(신용)정보 필수적 제공")]),_:1})]),_:1},8,["classNames"])],2)],2),l("li",{class:a(t.$style["agree-list__item"])},[l("div",{class:a(t.$style["agree-list__head"])},[e(n,{id:"PF_P07_p011_agree_001_003_002",classNames:{wrap:t.$style["agree-list__checkbox"]},theme:"quinary"},{default:s(()=>[e(i),e(o,null,{default:s(()=>[r("고유식별번호 필수적 제공")]),_:1})]),_:1},8,["classNames"])],2)],2)],2)],2)],2)],2)],2)],2)],2)],2)]),e(C,null,{default:s(()=>[e(I,null,{default:s(()=>[e(N,null,{default:s(()=>[r("다음")]),_:1})]),_:1})]),_:1})]),_:1})}const ne={$style:ae},Me=w(_e,[["render",oe],["__cssModules",ne]]);export{Me as default};
