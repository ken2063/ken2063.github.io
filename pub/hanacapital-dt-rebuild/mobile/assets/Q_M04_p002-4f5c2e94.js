import{_ as C,X as L,C as F,B as U,Z as A,l as S,o as O,b as P,Q as _,q,s as t,g as G,V as e,e as a,W as r,n as s}from"./index-0ca40496.js";import{P as K}from"./PageContents-131cde60.js";import{P as V}from"./PageTextGroup-692d5231.js";import{I as j,a as R}from"./InputBlockCell-abb707cb.js";import{F as z}from"./FormList-e7f69d6e.js";import{F as H}from"./FormListItem-71a0d183.js";import{F as W,a as X}from"./FormInvalidMessage-6559d7e3.js";import{C as Z,b as D,a as J}from"./CheckBoxObject-eb86af70.js";import{B as Y,a as ee}from"./ButtonListItem-b1f6835b.js";import{B as te}from"./BottomSticky-889e7601.js";import{B as le}from"./BasicSelect-694c1948.js";import{S as ae}from"./SecurityInput-ac769a83.js";import{U as se,a as re,c as _e,b as ie}from"./UiAccordionOpener-46b64760.js";import"./check-fc1c20d1.js";import"./check-l-61e0e83c.js";import"./SelectButton-da4f5354.js";import"./dropdown-607743bb.js";import"./PopupTitle-05b32b8e.js";import"./ToastPopup-c9597c27.js";import"./ToastPopupHead-ec63cede.js";const oe={"agree-list":"_agree-list_1k12p_1","agree-list__container":"_agree-list__container_1k12p_4","agree-list__right":"_agree-list__right_1k12p_9","agree-list__all":"_agree-list__all_1k12p_20","agree-list__all-head":"_agree-list__all-head_1k12p_23","agree-list__all-checkbox":"_agree-list__all-checkbox_1k12p_30","agree-list__all-opener":"_agree-list__all-opener_1k12p_34","agree-list__all-contents":"_agree-list__all-contents_1k12p_41","agree-list__depth":"_agree-list__depth_1k12p_44","agree-list__depth-item":"_agree-list__depth-item_1k12p_50","agree-list__depth-head":"_agree-list__depth-head_1k12p_53","agree-list__depth-checkbox":"_agree-list__depth-checkbox_1k12p_57","agree-list__depth-opener":"_agree-list__depth-opener_1k12p_61","agree-list__depth-contents":"_agree-list__depth-contents_1k12p_70","agree-list__list":"_agree-list__list_1k12p_73","agree-list__item":"_agree-list__item_1k12p_78","agree-list__head":"_agree-list__head_1k12p_81","agree-list__checkbox":"_agree-list__checkbox_1k12p_88","agree-list__link":"_agree-list__link_1k12p_92","agree-list__link-text":"_agree-list__link-text_1k12p_137","agree-list__detail":"_agree-list__detail_1k12p_155","agree-list__detail-secondary":"_agree-list__detail-secondary_1k12p_158","agree-list__list--secondary":"_agree-list__list--secondary_1k12p_161","agree-list__list--tertiary":"_agree-list__list--tertiary_1k12p_171","input-timer":"_input-timer_1k12p_184","is-disabled":"_is-disabled_1k12p_190"},ne={components:{PageContents:K,PageTextGroup:V,PageMainText:L,InputBlock:j,InputBlockCell:R,BasicInput:F,FormList:z,FormListItem:H,FormInvalid:W,FormInvalidMessage:X,CheckBox:Z,CheckBoxObject:D,CheckBoxLabelText:J,BasicButton:U,ButtonList:Y,ButtonListItem:ee,BottomSticky:te,BasicSelect:le,SecurityInput:ae,UiAccordion:se,UiAccordionItem:re,UiAccordionOpener:_e,UiAccordionLayer:ie},setup(){const l={ui:{header:A()}},k=S({nameError:!1,idNumberError:!1,timeError:!1,branchError:!1,phone001Error:!1,phone002Error:!1,codeError:!1});return O(()=>{l.ui.header.setTitle(()=>"중고차 오토론"),l.ui.header.setLeftButtons(()=>["back"]),l.ui.header.setRightButtons(()=>[])}),P(()=>{l.ui.header.setTitle(),l.ui.header.setLeftButtons(),l.ui.header.setRightButtons()}),{state:k}}},ue=a("br",null,null,-1),de=a("div",{class:"text-body-3"},"시",-1),ce=a("div",{class:"text-body-3"},"~",-1),ge=a("div",{class:"text-body-3"},"시 사이",-1),pe={class:"row-margin-container-medium"},me=a("h3",{class:"text-title-2 row-margin-contents"},"휴대전화 인증",-1),ye=a("h3",{class:"text-title-2 row-margin-contents"},"서비스 이용약관",-1),fe={class:"bottom-wrap"};function he(l,k,ke,u,ve,$e){const T=_("PageMainText"),Q=_("PageTextGroup"),f=_("BasicInput"),d=_("InputBlockCell"),c=_("InputBlock"),g=_("FormInvalidMessage"),p=_("FormInvalid"),m=_("FormListItem"),x=_("SecurityInput"),y=_("BasicSelect"),h=_("FormList"),i=_("CheckBoxObject"),o=_("CheckBoxLabelText"),n=_("CheckBox"),v=_("UiAccordionOpener"),$=_("UiAccordionLayer"),B=_("UiAccordionItem"),N=_("UiAccordion"),b=_("BasicButton"),M=_("ButtonListItem"),I=_("ButtonList"),E=_("BottomSticky"),w=_("PageContents");return G(),q(w,null,{foot:t(()=>[e(E,null,{default:t(()=>[a("div",fe,[e(I,{classNames:{wrap:"row-margin-none"},align:"full"},{default:t(()=>[e(M,null,{default:t(()=>[e(b,null,{default:t(()=>[r("인증번호 전송")]),_:1})]),_:1}),e(M,null,{default:t(()=>[e(b,null,{default:t(()=>[r("다음")]),_:1})]),_:1})]),_:1})])]),_:1})]),default:t(()=>[e(Q,null,{default:t(()=>[e(T,null,{default:t(()=>[r(" 손님정보를"),ue,r(" 입력해 주세요 ")]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(m,{titleText:"이름",target:"#Q_M04_p002_name"},{default:t(()=>[e(p,{error:u.state.nameError},{default:t(()=>[e(c,{error:u.state.nameError},{default:t(()=>[e(d,{flexible:!0},{default:t(()=>[e(f,{title:"이름",id:"Q_M04_p002_name"})]),_:1})]),_:1},8,["error"]),e(g,null,{default:t(()=>[r("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(m,{titleText:"주민등록번호",target:"#Q_M04_p002_idNumber"},{default:t(()=>[e(p,{error:u.state.idNumberError},{default:t(()=>[e(c,{error:u.state.idNumberError},{default:t(()=>[e(d,{flexible:!0},{default:t(()=>[e(f,{type:"number",pattern:"\\d*",title:"주민등록번호 앞 6자리",id:"Q_M04_p002_idNumber"})]),_:1}),e(d,{type:"sub"},{default:t(()=>[r("-")]),_:1}),e(d,{flexible:!0},{default:t(()=>[e(x,{title:"주민등록번호 뒤 7자리",dot:[!0,!0,!0,!1,!1,!1,!1]})]),_:1})]),_:1},8,["error"]),e(g,null,{default:t(()=>[r("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(m,{titleText:"연락가능시간",target:"#Q_M04_p002_startTimeButton"},{default:t(()=>[e(p,{error:u.state.timeError},{default:t(()=>[e(c,{error:u.state.timeError},{default:t(()=>[e(d,{flexible:!0},{default:t(()=>[e(y,{option:[{value:"9",text:"9"},{value:"10",text:"10"},{value:"11",text:"11"},{value:"12",text:"12"},{value:"13",text:"13"},{value:"14",text:"14"},{value:"15",text:"15"},{value:"16",text:"16"},{value:"17",text:"17"}],buttonTitle:"시작시간 선택하기",layerTitle:"시작시간을 선택해 주세요",id:"Q_M04_p002_startTime",buttonId:"Q_M04_p002_startTimeButton"})]),_:1}),e(d,{margin:"regular"},{default:t(()=>[de]),_:1}),e(d,{margin:"regular"},{default:t(()=>[ce]),_:1}),e(d,{flexible:!0,margin:"regular"},{default:t(()=>[e(y,{option:[{value:"10",text:"10"},{value:"11",text:"11"},{value:"12",text:"12"},{value:"13",text:"13"},{value:"14",text:"14"},{value:"15",text:"15"},{value:"16",text:"16"},{value:"17",text:"17"},{value:"18",text:"18"}],buttonTitle:"종료시간 선택하기",layerTitle:"종료시간을 선택해 주세요",id:"Q_M04_p002_endTime",buttonId:"Q_M04_p002_endTimeButton"})]),_:1}),e(d,{margin:"regular"},{default:t(()=>[ge]),_:1})]),_:1},8,["error"]),e(g,null,{default:t(()=>[r("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(m,{titleText:"차량구매지",target:"#Q_M04_p002_branchButton",selectOnly:!0},{default:t(()=>[e(p,{error:u.state.branchError},{default:t(()=>[e(c,{error:u.state.branchError},{default:t(()=>[e(d,{flexible:!0},{default:t(()=>[e(y,{option:[{value:"1",text:"서울"},{value:"2",text:"인천"},{value:"3",text:"경기북부"},{value:"4",text:"경기남부"},{value:"5",text:"경기안산"},{value:"6",text:"강원도"},{value:"7",text:"충청도"},{value:"8",text:"전라도"},{value:"9",text:"대구"},{value:"10",text:"부산"},{value:"11",text:"경상도"},{value:"12",text:"제주도"}],buttonTitle:"차량구매지 선택하기",layerTitle:"지역을 선택해 주세요",id:"Q_M04_p002_branch",buttonId:"Q_M04_p002_branchButton"})]),_:1})]),_:1},8,["error"]),e(g,null,{default:t(()=>[r("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),a("section",pe,[me,e(h,null,{default:t(()=>[e(m,{titleText:"통신사",target:"#Q_M04_p002_phone001Button",selectOnly:!0},{default:t(()=>[e(p,{error:u.state.phone001Error},{default:t(()=>[e(c,{error:u.state.phone001Error},{default:t(()=>[e(d,{flexible:!0},{default:t(()=>[e(y,{option:[{value:"1",text:"SKT"},{value:"2",text:"KT"},{value:"3",text:"LG U+"},{value:"4",text:"알뜰폰 SKT"},{value:"5",text:"알뜰폰 KT"},{value:"6",text:"알뜰폰 LG +"}],buttonTitle:"통신사 선택하기",layerTitle:"통신사를 선택해 주세요",id:"Q_M04_p002_phone001",buttonId:"Q_M04_p002_phone001Button"})]),_:1})]),_:1},8,["error"]),e(g,null,{default:t(()=>[r("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(m,{titleText:"휴대폰번호",target:"#Q_M04_p002_phone002"},{default:t(()=>[e(p,{error:u.state.phone002Error},{default:t(()=>[e(c,{error:u.state.phone002Error},{default:t(()=>[e(d,null,{default:t(()=>[e(y,{option:[{value:"1",text:"010"},{value:"2",text:"011"},{value:"3",text:"0130"},{value:"4",text:"016"},{value:"5",text:"017"},{value:"6",text:"018"},{value:"7",text:"019"},{value:"8",text:"0505"}],buttonTitle:"통신사 선택하기",layerTitle:"통신사를 선택해 주세요",buttonId:"Q_M04_p002_phone002",classNames:{wrap:"input-width-telecom"}})]),_:1}),e(d,{flexible:!0,margin:"regular"},{default:t(()=>[e(f,{title:"휴대폰번호"})]),_:1})]),_:1},8,["error"]),e(g,null,{default:t(()=>[r("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),a("div",{class:s([l.$style["agree-list"],"row-margin-contents"])},[e(N,{classNames:{wrap:l.$style["agree-list__container"]}},{default:t(()=>[e(B,{classNames:{item:l.$style["agree-list__all"]},initialOpen:!0},{default:t(()=>[a("div",{class:s(l.$style["agree-list__all-head"])},[e(n,{id:"Q_M04_p002_agreeAll001",classNames:{wrap:l.$style["agree-list__all-checkbox"]}},{default:t(()=>[e(i),e(o,null,{default:t(()=>[r("전체동의")]),_:1})]),_:1},8,["classNames"]),a("div",{class:s(l.$style["agree-list__right"])},[e(v,{classNames:{button:l.$style["agree-list__all-opener"]}},null,8,["classNames"])],2)],2),e($,null,{default:t(()=>[a("div",{class:s(l.$style["agree-list__all-contents"])},[a("ul",{class:s(l.$style["agree-list__list"])},[a("li",{class:s(l.$style["agree-list__item"])},[a("div",{class:s(l.$style["agree-list__head"])},[e(n,{id:"Q_M04_p002_agree_001_001",classNames:{wrap:l.$style["agree-list__checkbox"]},theme:"tertiary"},{default:t(()=>[e(i),e(o,null,{default:t(()=>[r("개인정보 수집∙이용, 취급위탁 동의")]),_:1})]),_:1},8,["classNames"]),a("div",{class:s(l.$style["agree-list__right"])},[a("button",{type:"button",class:s(l.$style["agree-list__link"])},[a("span",{class:s(l.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2),a("li",{class:s(l.$style["agree-list__item"])},[a("div",{class:s(l.$style["agree-list__head"])},[e(n,{id:"Q_M04_p002_agree_001_002",classNames:{wrap:l.$style["agree-list__checkbox"]},theme:"tertiary"},{default:t(()=>[e(i),e(o,null,{default:t(()=>[r("고유식별정보 처리동의")]),_:1})]),_:1},8,["classNames"]),a("div",{class:s(l.$style["agree-list__right"])},[a("button",{type:"button",class:s(l.$style["agree-list__link"])},[a("span",{class:s(l.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2),a("li",{class:s(l.$style["agree-list__item"])},[a("div",{class:s(l.$style["agree-list__head"])},[e(n,{id:"Q_M04_p002_agree_001_003",classNames:{wrap:l.$style["agree-list__checkbox"]},theme:"tertiary"},{default:t(()=>[e(i),e(o,null,{default:t(()=>[r("본인확인 이용약관")]),_:1})]),_:1},8,["classNames"]),a("div",{class:s(l.$style["agree-list__right"])},[a("button",{type:"button",class:s(l.$style["agree-list__link"])},[a("span",{class:s(l.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2),a("li",{class:s(l.$style["agree-list__item"])},[a("div",{class:s(l.$style["agree-list__head"])},[e(n,{id:"Q_M04_p002_agree_001_004",classNames:{wrap:l.$style["agree-list__checkbox"]},theme:"tertiary"},{default:t(()=>[e(i),e(o,null,{default:t(()=>[r("통신사 본인확인 이용약관 동의")]),_:1})]),_:1},8,["classNames"]),a("div",{class:s(l.$style["agree-list__right"])},[a("button",{type:"button",class:s(l.$style["agree-list__link"])},[a("span",{class:s(l.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2)],2)],2)]),_:1})]),_:1},8,["classNames"])]),_:1},8,["classNames"])],2),e(h,null,{default:t(()=>[e(m,{titleText:"인증번호",titleOptionalText:"(6자리)",target:"#Q_M04_p002_phoneCode",forceFocus:!0,disabled:!1},{default:t(()=>[e(p,{error:u.state.codeError},{default:t(()=>[e(c,{error:u.state.codeError,disabled:!1},{innerRight:t(()=>[a("div",{class:s(l.$style["input-timer"])},"00:00",2)]),right:t(()=>[e(b,{size:"mini",theme:"quaternary",inline:"true"},{default:t(()=>[r(" 재요청 ")]),_:1})]),default:t(()=>[e(d,{flexible:!0},{default:t(()=>[e(f,{type:"number",pattern:"\\d*",title:"인증번호 (6자리)",id:"Q_M04_p002_phoneCode",placeholder:"인증번호를 입력해 주세요",disabled:!1})]),_:1})]),_:1},8,["error"]),e(g,null,{default:t(()=>[r("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),a("section",null,[ye,a("div",{class:s(l.$style["agree-list"])},[e(N,{classNames:{wrap:l.$style["agree-list__container"]}},{default:t(()=>[e(B,{classNames:{item:l.$style["agree-list__all"]},initialOpen:!0},{default:t(()=>[a("div",{class:s(l.$style["agree-list__all-head"])},[e(n,{id:"Q_M04_p002_agreeAll002",classNames:{wrap:l.$style["agree-list__all-checkbox"]}},{default:t(()=>[e(i),e(o,null,{default:t(()=>[r("전체동의")]),_:1})]),_:1},8,["classNames"]),a("div",{class:s(l.$style["agree-list__right"])},[e(v,{classNames:{button:l.$style["agree-list__all-opener"]}},null,8,["classNames"])],2)],2),e($,null,{default:t(()=>[a("div",{class:s(l.$style["agree-list__all-contents"])},[a("ul",{class:s(l.$style["agree-list__list"])},[a("li",{class:s(l.$style["agree-list__item"])},[a("div",{class:s(l.$style["agree-list__head"])},[e(n,{id:"Q_M04_p002_agree_002_001",classNames:{wrap:l.$style["agree-list__checkbox"]},theme:"tertiary"},{default:t(()=>[e(i),e(o,null,{default:t(()=>[r(" 개인(신용)정보 필수적 수집·이용 동의 ")]),_:1})]),_:1},8,["classNames"]),a("div",{class:s(l.$style["agree-list__right"])},[a("button",{type:"button",class:s(l.$style["agree-list__link"])},[a("span",{class:s(l.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2),a("ul",{class:s([l.$style["agree-list__list"],l.$style["agree-list__list--secondary"]])},[a("li",{class:s(l.$style["agree-list__item"])},[a("div",{class:s(l.$style["agree-list__head"])},[e(n,{id:"Q_M04_p002_agree_002_001_001",classNames:{wrap:l.$style["agree-list__checkbox"]},theme:"quinary"},{default:t(()=>[e(i),e(o,null,{default:t(()=>[r(" 개인(신용)정보 필수적 수집·이용 ")]),_:1})]),_:1},8,["classNames"])],2)],2),a("li",{class:s(l.$style["agree-list__item"])},[a("div",{class:s(l.$style["agree-list__head"])},[e(n,{id:"Q_M04_p002_agree_002_001_002",classNames:{wrap:l.$style["agree-list__checkbox"]},theme:"quinary"},{default:t(()=>[e(i),e(o,null,{default:t(()=>[r(" 고유식별번호 필수적 수집·이용 ")]),_:1})]),_:1},8,["classNames"])],2)],2)],2)],2),a("li",{class:s(l.$style["agree-list__item"])},[a("div",{class:s(l.$style["agree-list__head"])},[e(n,{id:"Q_M04_p002_agree_002_002",classNames:{wrap:l.$style["agree-list__checkbox"]},theme:"tertiary"},{default:t(()=>[e(i),e(o,null,{default:t(()=>[r(" 개인(신용)정보 필수적 조회 동의 ")]),_:1})]),_:1},8,["classNames"]),a("div",{class:s(l.$style["agree-list__right"])},[a("button",{type:"button",class:s(l.$style["agree-list__link"])},[a("span",{class:s(l.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2),a("ul",{class:s([l.$style["agree-list__list"],l.$style["agree-list__list--secondary"]])},[a("li",{class:s(l.$style["agree-list__item"])},[a("div",{class:s(l.$style["agree-list__head"])},[e(n,{id:"Q_M04_p002_agree_002_002_001",classNames:{wrap:l.$style["agree-list__checkbox"]},theme:"quinary"},{default:t(()=>[e(i),e(o,null,{default:t(()=>[r(" 개인(신용)정보 필수적 조회 ")]),_:1})]),_:1},8,["classNames"])],2)],2),a("li",{class:s(l.$style["agree-list__item"])},[a("div",{class:s(l.$style["agree-list__head"])},[e(n,{id:"Q_M04_p002_agree_002_002_002",classNames:{wrap:l.$style["agree-list__checkbox"]},theme:"quinary"},{default:t(()=>[e(i),e(o,null,{default:t(()=>[r(" 고유식별번호 필수적 조회 ")]),_:1})]),_:1},8,["classNames"])],2)],2)],2)],2),a("li",{class:s(l.$style["agree-list__item"])},[a("div",{class:s(l.$style["agree-list__head"])},[e(n,{id:"Q_M04_p002_agree_002_003",classNames:{wrap:l.$style["agree-list__checkbox"]},theme:"tertiary"},{default:t(()=>[e(i),e(o,null,{default:t(()=>[r(" 개인(신용)정보 필수적 제공 동의 ")]),_:1})]),_:1},8,["classNames"]),a("div",{class:s(l.$style["agree-list__right"])},[a("button",{type:"button",class:s(l.$style["agree-list__link"])},[a("span",{class:s(l.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2),a("ul",{class:s([l.$style["agree-list__list"],l.$style["agree-list__list--secondary"]])},[a("li",{class:s(l.$style["agree-list__item"])},[a("div",{class:s(l.$style["agree-list__head"])},[e(n,{id:"Q_M04_p002_agree_002_003_001",classNames:{wrap:l.$style["agree-list__checkbox"]},theme:"quinary"},{default:t(()=>[e(i),e(o,null,{default:t(()=>[r(" 개인(신용)정보 필수적 제공에 관한 사항 ")]),_:1})]),_:1},8,["classNames"])],2)],2),a("li",{class:s(l.$style["agree-list__item"])},[a("div",{class:s(l.$style["agree-list__head"])},[e(n,{id:"Q_M04_p002_agree_002_003_002",classNames:{wrap:l.$style["agree-list__checkbox"]},theme:"quinary"},{default:t(()=>[e(i),e(o,null,{default:t(()=>[r(" 고유식별번호 필수적 제공 ")]),_:1})]),_:1},8,["classNames"])],2)],2)],2)],2)],2)],2)]),_:1})]),_:1},8,["classNames"])]),_:1},8,["classNames"])],2)])]),_:1})}const be={$style:oe},Ve=C(ne,[["render",he],["__cssModules",be]]);export{Ve as default};
