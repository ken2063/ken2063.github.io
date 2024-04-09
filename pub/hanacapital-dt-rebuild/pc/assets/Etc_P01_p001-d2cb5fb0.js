import{_ as F,E as M,i as w,o as A,b as H,l as t,x as O,w as l,g as S,q as e,B as _,e as o,n as i}from"./index-82fbfa1a.js";import{P as j}from"./PageContents-bfe4e6bc.js";import{L as V}from"./LocationBar-ae2ba5e0.js";import{P as D,a as U}from"./PageTitle-d5eca824.js";import{B as q,a as z}from"./BoxCheckLabel-12c16eae.js";import{B as $,a as G}from"./BoxCheckListItem-6d8caf35.js";import{I as J,a as K}from"./InputBlockCell-c22a4c3d.js";import{F as Q,a as R}from"./FormListItem-06cd731c.js";import{F as W}from"./FormInvalid-868ec577.js";import{F as X}from"./FormInvalidMessage-6faaaf0b.js";import{B as Y}from"./BasicInput-52ae3246.js";import{B as Z}from"./BasicSelect-dec6cc8a.js";import{C as ee,a as le}from"./CheckBoxObject-73db20f1.js";import{C as te}from"./CheckBoxLabelText-14f0ec60.js";import{B as ae}from"./BasicButton-4f3c34ae.js";import{B as re,a as _e}from"./ButtonListItem-1c2230e0.js";import"./text-delete-14661a09.js";import"./vue-select.es-0a69f9d3.js";import"./check-l-32b1e9d8.js";const oe={"agree-list":"_agree-list_4yro6_1","agree-list__container":"_agree-list__container_4yro6_4","agree-list__right":"_agree-list__right_4yro6_9","agree-list__all":"_agree-list__all_4yro6_20","agree-list__all-head":"_agree-list__all-head_4yro6_33","agree-list__all-checkbox":"_agree-list__all-checkbox_4yro6_40","agree-list__all-contents":"_agree-list__all-contents_4yro6_44","agree-list__depth":"_agree-list__depth_4yro6_47","agree-list__depth-item":"_agree-list__depth-item_4yro6_64","agree-list__depth-head":"_agree-list__depth-head_4yro6_71","agree-list__depth-title":"_agree-list__depth-title_4yro6_76","agree-list__depth-checkbox":"_agree-list__depth-checkbox_4yro6_82","agree-list__depth-contents":"_agree-list__depth-contents_4yro6_86","agree-list__list":"_agree-list__list_4yro6_89","agree-list__item":"_agree-list__item_4yro6_94","agree-list__head":"_agree-list__head_4yro6_100","agree-list__checkbox":"_agree-list__checkbox_4yro6_111","agree-list__link":"_agree-list__link_4yro6_115","agree-list__link-text":"_agree-list__link-text_4yro6_160","agree-list__contents":"_agree-list__contents_4yro6_178","agree-list__list--secondary":"_agree-list__list--secondary_4yro6_185","agree-list__list--secondary-no-padding":"_agree-list__list--secondary-no-padding_4yro6_203","agree-list__list--tertiary":"_agree-list__list--tertiary_4yro6_206","agree-list__list--tertiary-no-padding":"_agree-list__list--tertiary-no-padding_4yro6_227"},se={components:{PageContents:j,LocationBar:V,PageHead:D,PageTitle:U,BoxCheck:q,BoxCheckLabel:z,BoxCheckList:$,BoxCheckListItem:G,InputBlock:J,InputBlockCell:K,FormList:Q,FormListItem:R,FormInvalid:W,FormInvalidMessage:X,BasicInput:Y,BasicSelect:Z,CheckBox:ee,CheckBoxLabelText:te,CheckBoxObject:le,BasicButton:ae,ButtonList:re,ButtonListItem:_e},setup(){const a={ui:{header:M()}},f=w({type001Error:!1,field001Error:!1,nameError:!1,businessNameError:!1,phoneError:!1,time001Error:!1,carTypeError:!1,carNameError:!1,areaError:!1});return A(()=>{a.ui.header.setActive(()=>"customer"),a.ui.header.setDepthActive(()=>"customer011")}),H(()=>{a.ui.header.setActive(),a.ui.header.setDepthActive()}),{state:f}}},ie=o("br",null,null,-1),ne=o("div",{class:"text-body-1"},"시",-1),ue=o("div",{class:"text-title-1"},"~",-1),ce=o("div",{class:"text-body-1"},"시 사이",-1);function de(a,f,me,r,fe,be){const B=t("LocationBar"),x=t("PageTitle"),k=t("PageHead"),b=t("BoxCheckLabel"),g=t("BoxCheck"),v=t("BoxCheckListItem"),P=t("BoxCheckList"),u=t("FormInvalidMessage"),c=t("FormInvalid"),n=t("FormListItem"),p=t("BasicSelect"),s=t("InputBlockCell"),d=t("InputBlock"),m=t("BasicInput"),h=t("CheckBoxObject"),y=t("CheckBoxLabelText"),E=t("CheckBox"),C=t("FormList"),I=t("BasicButton"),L=t("ButtonListItem"),T=t("ButtonList"),N=t("PageContents");return S(),O(N,null,{head:l(()=>[e(B,{data:[{text:"홈",to:"/main/home"},{text:"부가서비스"},{text:"전화상담신청",to:"/"}]})]),default:l(()=>[e(k,null,{default:l(()=>[e(x,null,{default:l(()=>[_(" 연락처를 남겨주시면"),ie,_(" 상담원이 친절하게 상담해 드리겠습니다 ")]),_:1})]),_:1}),e(C,null,{default:l(()=>[e(n,{titleText:"회원구분",forceFocus:!0},{default:l(()=>[e(c,{error:r.state.type001Error},{default:l(()=>[e(P,null,{default:l(()=>[e(v,null,{default:l(()=>[e(g,{name:"Etc_P01_p001_type",id:"Etc_P01_p001_type_001",defaultChecked:!0},{default:l(()=>[e(b,null,{default:l(()=>[_("개인 (개인사업자 포함)")]),_:1})]),_:1})]),_:1}),e(v,null,{default:l(()=>[e(g,{name:"Etc_P01_p001_type",id:"Etc_P01_p001_type_002"},{default:l(()=>[e(b,null,{default:l(()=>[_("법인")]),_:1})]),_:1})]),_:1})]),_:1}),e(u,null,{default:l(()=>[_("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"상담 서비스 분야",target:"#Etc_P01_p001_field001"},{default:l(()=>[e(c,{error:r.state.field001Error},{default:l(()=>[e(d,{error:r.state.field001Error},{default:l(()=>[e(s,{flexible:!0},{default:l(()=>[e(p,{options:[{value:"1",label:"개인금융"},{value:"2",label:"자동차금융"},{value:"3",label:"기업금융"}],title:"대출기간",inputId:"Etc_P01_p001_field001"})]),_:1}),e(s,{flexible:!0,margin:"regular"},{default:l(()=>[e(p,{options:[{value:"1",label:"신용대출"},{value:"2",label:"자동차담보대출"},{value:"3",label:"스탁론"},{value:"4",label:"신차할부(오토론)"},{value:"5",label:"신차리스"},{value:"6",label:"중고차오토론"},{value:"7",label:"렌터카"},{value:"8",label:"의료기리스"},{value:"9",label:"건설/상용금융"}],title:"대출기간",inputId:"Etc_P01_p001_field002"})]),_:1})]),_:1},8,["error"]),e(u,null,{default:l(()=>[_("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"이름",target:"#Etc_P01_p001_name"},{default:l(()=>[e(c,{error:r.state.nameError},{default:l(()=>[e(d,{error:r.state.nameError},{default:l(()=>[e(s,{flexible:!0},{default:l(()=>[e(m,{title:"이름",id:"Etc_P01_p001_name"})]),_:1})]),_:1},8,["error"]),e(u,null,{default:l(()=>[_("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"법인명",target:"#Etc_P01_p001_businessName"},{default:l(()=>[e(c,{error:r.state.businessNameError},{default:l(()=>[e(d,{error:r.state.businessNameError},{default:l(()=>[e(s,{flexible:!0},{default:l(()=>[e(m,{title:"법인명",id:"Etc_P01_p001_businessName"})]),_:1})]),_:1},8,["error"]),e(u,null,{default:l(()=>[_("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"연락처",target:"#Etc_P01_p001_phone"},{default:l(()=>[e(c,{error:r.state.phoneError},{default:l(()=>[e(d,{error:r.state.phoneError},{default:l(()=>[e(s,null,{default:l(()=>[e(p,{options:[{value:"1",label:"010"},{value:"2",label:"011"},{value:"3",label:"0130"},{value:"4",label:"016"},{value:"5",label:"017"},{value:"6",label:"018"},{value:"7",label:"019"},{value:"8",label:"0505"},{value:"9",label:"02"},{value:"10",label:"070"},{value:"11",label:"031"},{value:"12",label:"032"},{value:"13",label:"033"},{value:"14",label:"041"},{value:"15",label:"042"},{value:"16",label:"043"},{value:"17",label:"044"},{value:"18",label:"051"},{value:"19",label:"052"},{value:"20",label:"053"},{value:"21",label:"054"},{value:"22",label:"055"},{value:"23",label:"061"},{value:"24",label:"062"},{value:"25",label:"063"},{value:"26",label:"064"}],title:"연락처 앞자리 번호 선택",inputId:"Etc_P01_p001_phone",classNames:{wrap:"input-width-telecom"}})]),_:1}),e(s,{flexible:!0,margin:"regular"},{default:l(()=>[e(m,{pattern:"\\d*",title:"연락처 나머지 번호 입력"})]),_:1})]),_:1},8,["error"]),e(u,null,{default:l(()=>[_("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"연락가능시간",target:"#Etc_P01_p001_time001"},{default:l(()=>[e(c,{error:r.state.time001Error},{default:l(()=>[e(d,{error:r.state.time001Error},{default:l(()=>[e(s,{flexible:!0},{default:l(()=>[e(p,{options:[{value:"1",label:"9"},{value:"2",label:"10"},{value:"3",label:"11"},{value:"4",label:"12"},{value:"5",label:"13"},{value:"6",label:"14"},{value:"7",label:"15"},{value:"8",label:"16"},{value:"9",label:"17"}],title:"연락가능시간 시작시간",inputId:"Etc_P01_p001_time001"})]),_:1}),e(s,{margin:"regular"},{default:l(()=>[ne]),_:1}),e(s,{margin:"regular"},{default:l(()=>[ue]),_:1}),e(s,{flexible:!0,margin:"regular"},{default:l(()=>[e(p,{options:[{value:"1",label:"9"},{value:"2",label:"10"},{value:"3",label:"11"},{value:"4",label:"12"},{value:"5",label:"13"},{value:"6",label:"14"},{value:"7",label:"15"},{value:"8",label:"16"},{value:"9",label:"17"}],title:"연락가능시간 종료시간",inputId:"Etc_P01_p001_time002"})]),_:1}),e(s,{margin:"regular"},{default:l(()=>[ce]),_:1})]),_:1},8,["error"]),e(u,null,{default:l(()=>[_("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"차량구분",target:"#Etc_P01_p001_carType"},{default:l(()=>[e(c,{error:r.state.carTypeError},{default:l(()=>[e(d,{error:r.state.carTypeError},{default:l(()=>[e(s,{flexible:!0},{default:l(()=>[e(p,{options:[{value:"1",label:"국산차"},{value:"2",label:"수입차"}],title:"차량구분",inputId:"Etc_P01_p001_carType"})]),_:1})]),_:1},8,["error"]),e(u,null,{default:l(()=>[_("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"관심차량",target:"#Etc_P01_p001_carName"},{default:l(()=>[e(c,{error:r.state.carNameError},{default:l(()=>[e(d,{error:r.state.carNameError},{default:l(()=>[e(s,{flexible:!0},{default:l(()=>[e(m,{title:"관심차량",id:"Etc_P01_p001_carName"})]),_:1})]),_:1},8,["error"]),e(u,null,{default:l(()=>[_("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"지역",target:"#Etc_P01_p001_area",selectOnly:!0},{default:l(()=>[e(c,{error:r.state.areaError},{default:l(()=>[e(d,{error:r.state.areaError},{default:l(()=>[e(s,{flexible:!0},{default:l(()=>[e(p,{options:[{value:"1",label:"전체"},{value:"2",label:"서울"},{value:"3",label:"부산"},{value:"4",label:"대구"},{value:"5",label:"광주"},{value:"6",label:"인천"},{value:"7",label:"대전"},{value:"8",label:"울산"},{value:"9",label:"경기"},{value:"10",label:"경남"},{value:"11",label:"경북"},{value:"12",label:"강원"},{value:"13",label:"충남"},{value:"14",label:"충북"},{value:"15",label:"전남"},{value:"16",label:"전북"},{value:"17",label:"제주"}],title:"시/도/명 선택하기",inputId:"Etc_P01_p001_area"})]),_:1})]),_:1},8,["error"]),e(u,null,{default:l(()=>[_("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(n,{titleText:"약관동의",forceFocus:!0},{default:l(()=>[o("div",{class:i(a.$style["agree-list"])},[o("ul",{class:i(a.$style["agree-list__depth"])},[o("li",{class:i(a.$style["agree-list__depth-item"])},[o("div",{class:i(a.$style["agree-list__depth-head"])},[e(E,{id:"Etc_P01_p001_phoneAgree001",classNames:{wrap:a.$style["agree-list__depth-checkbox"]}},{default:l(()=>[e(h),e(y,null,{default:l(()=>[_("서비스 이용약관")]),_:1})]),_:1},8,["classNames"])],2),o("div",{class:i(a.$style["agree-list__depth-contents"])},[o("ul",{class:i(a.$style["agree-list__list"])},[o("li",{class:i(a.$style["agree-list__item"])},[o("div",{class:i(a.$style["agree-list__head"])},[e(E,{id:"Etc_P01_p001_phoneAgree001_001",classNames:{wrap:a.$style["agree-list__checkbox"]},theme:"tertiary"},{default:l(()=>[e(h),e(y,null,{default:l(()=>[_(" 개인정보 수집·이용 동의 ")]),_:1})]),_:1},8,["classNames"]),o("div",{class:i(a.$style["agree-list__right"])},[o("button",{type:"button",class:i(a.$style["agree-list__link"])},[o("span",{class:i(a.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2)],2)],2)],2)],2)],2)]),_:1})]),_:1}),e(T,null,{default:l(()=>[e(L,null,{default:l(()=>[e(I,null,{default:l(()=>[_("상담예약신청")]),_:1})]),_:1})]),_:1})]),_:1})}const pe={$style:oe},Oe=F(se,[["render",de],["__cssModules",pe]]);export{Oe as default};
