import{P as V}from"./PageContents-f716fc69.js";import{B as M}from"./BasicButton-672abef3.js";import{B as $,a as b}from"./ButtonListItem-019a78ac.js";import{_ as I,U as z,i as S,r as C,l,g as x,x as v,w as t,q as e,B as o,e as a,n as _}from"./index-55dc959b.js";import{P as q}from"./PopupTitle-7388f4c9.js";import{P as A}from"./PopupButton-a28c1407.js";import{M as G,a as D}from"./ModalPopupHead-b41e6629.js";import{F as J,a as K}from"./FormListItem-e93ca3ef.js";import{B as Q}from"./BasicTextarea-edbef07f.js";import{F as R}from"./FormInvalidMessage-14365b90.js";import{F as W}from"./FormInvalid-55f490a6.js";import{I as X,a as Y}from"./InputBlockCell-bd7aff68.js";import{B as Z}from"./BasicInput-b03c5ab1.js";import{C as ee,b as te,a as se}from"./CheckBoxObject-52679c06.js";import"./text-delete-2b2178c8.js";import"./check-l-ed94b49b.js";const le={"agree-list":"_agree-list_4yro6_1","agree-list__container":"_agree-list__container_4yro6_4","agree-list__right":"_agree-list__right_4yro6_9","agree-list__all":"_agree-list__all_4yro6_20","agree-list__all-head":"_agree-list__all-head_4yro6_33","agree-list__all-checkbox":"_agree-list__all-checkbox_4yro6_40","agree-list__all-contents":"_agree-list__all-contents_4yro6_44","agree-list__depth":"_agree-list__depth_4yro6_47","agree-list__depth-item":"_agree-list__depth-item_4yro6_64","agree-list__depth-head":"_agree-list__depth-head_4yro6_71","agree-list__depth-title":"_agree-list__depth-title_4yro6_76","agree-list__depth-checkbox":"_agree-list__depth-checkbox_4yro6_82","agree-list__depth-contents":"_agree-list__depth-contents_4yro6_86","agree-list__list":"_agree-list__list_4yro6_89","agree-list__item":"_agree-list__item_4yro6_94","agree-list__head":"_agree-list__head_4yro6_100","agree-list__checkbox":"_agree-list__checkbox_4yro6_111","agree-list__link":"_agree-list__link_4yro6_115","agree-list__link-text":"_agree-list__link-text_4yro6_160","agree-list__contents":"_agree-list__contents_4yro6_178","agree-list__list--secondary":"_agree-list__list--secondary_4yro6_185","agree-list__list--secondary-no-padding":"_agree-list__list--secondary-no-padding_4yro6_203","agree-list__list--tertiary":"_agree-list__list--tertiary_4yro6_206","agree-list__list--tertiary-no-padding":"_agree-list__list--tertiary-no-padding_4yro6_227"},ae={components:{UiLayer:z,PopupTitle:q,PopupButton:A,ModalPopup:G,ModalPopupHead:D,BasicButton:M,ButtonList:$,ButtonListItem:b,FormList:J,BasicTextarea:Q,FormInvalidMessage:R,FormListItem:K,FormInvalid:W,InputBlock:X,InputBlockCell:Y,BasicInput:Z,CheckBox:ee,CheckBoxObject:te,CheckBoxLabelText:se},setup(){const s=S({counselingError:!1,nameError:!1,phoneError:!1}),i=C(null);return{state:s,layer:i}}};function _e(s,i,c,r,F,T){const p=l("PopupButton"),d=l("PopupTitle"),u=l("ModalPopupHead"),n=l("FormInvalidMessage"),m=l("BasicTextarea"),h=l("BasicInput"),B=l("InputBlockCell"),k=l("InputBlock"),L=l("FormInvalid"),P=l("FormListItem"),w=l("FormList"),g=l("CheckBoxObject"),y=l("CheckBoxLabelText"),f=l("CheckBox"),E=l("BasicButton"),N=l("ButtonListItem"),O=l("ButtonList"),U=l("ModalPopup"),j=l("UiLayer");return x(),v(j,{ref:"layer"},{default:t(H=>[e(U,null,{head:t(()=>[e(u,null,{right:t(()=>[e(p,{onClick:pe=>H.close()},null,8,["onClick"])]),default:t(()=>[e(d,null,{default:t(()=>[o("SMS 상담")]),_:1})]),_:2},1024)]),foot:t(()=>[e(O,{wrap:!0,align:"center",classNames:{wrap:"row-margin-none"}},{default:t(()=>[e(N,null,{default:t(()=>[e(E,{size:"regular"},{default:t(()=>[o("상담신청")]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(w,null,{default:t(()=>[e(m,{error:r.state.counselingError,titleText:"상담내용",title:"상담내용"},{bottom:t(()=>[e(n,null,{default:t(()=>[o("Error Message")]),_:1})]),_:1},8,["error"]),e(P,{titleText:"이름",target:"#LM_P07_l005_name"},{default:t(()=>[e(L,{error:r.state.nameError},{default:t(()=>[e(k,{error:r.state.nameError},{default:t(()=>[e(B,{flexible:!0},{default:t(()=>[e(h,{title:"이름",id:"LM_P07_l005_name"})]),_:1})]),_:1},8,["error"]),e(n,null,{default:t(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(P,{titleText:"휴대폰번호",target:"#LM_P07_l005_phone"},{default:t(()=>[e(L,{error:r.state.phoneError},{default:t(()=>[e(k,{error:r.state.phoneError},{default:t(()=>[e(B,{flexible:!0},{default:t(()=>[e(h,{pattern:"\\d*",title:"휴대폰번호",id:"LM_P07_l005_phone"})]),_:1})]),_:1},8,["error"]),e(n,null,{default:t(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),a("div",{class:_([s.$style["agree-list"],"row-margin-contents-small"])},[a("ul",{class:_(s.$style["agree-list__depth"])},[a("li",{class:_(s.$style["agree-list__depth-item"])},[a("div",{class:_(s.$style["agree-list__depth-head"])},[e(f,{id:"LM_P07_l005_agreeAll",classNames:{wrap:s.$style["agree-list__depth-checkbox"]}},{default:t(()=>[e(g),e(y,null,{default:t(()=>[o("전체동의")]),_:1})]),_:1},8,["classNames"])],2),a("div",{class:_(s.$style["agree-list__depth-contents"])},[a("ul",{class:_(s.$style["agree-list__list"])},[a("li",{class:_(s.$style["agree-list__item"])},[a("div",{class:_(s.$style["agree-list__head"])},[e(f,{id:"LM_P07_l005_agree001",classNames:{wrap:s.$style["agree-list__checkbox"]},theme:"tertiary"},{default:t(()=>[e(g),e(y,null,{default:t(()=>[o("개인정보 수집 및 이용 동의")]),_:1})]),_:1},8,["classNames"]),a("div",{class:_(s.$style["agree-list__right"])},[a("button",{type:"button",class:_(s.$style["agree-list__link"])},[a("span",{class:_(s.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2),a("li",{class:_(s.$style["agree-list__item"])},[a("div",{class:_(s.$style["agree-list__head"])},[e(f,{id:"LM_P07_l005_agree002",classNames:{wrap:s.$style["agree-list__checkbox"]},theme:"tertiary"},{default:t(()=>[e(g),e(y,null,{default:t(()=>[o("개인정보 제공 동의")]),_:1})]),_:1},8,["classNames"]),a("div",{class:_(s.$style["agree-list__right"])},[a("button",{type:"button",class:_(s.$style["agree-list__link"])},[a("span",{class:_(s.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2)],2)],2)],2)],2)],2)]),_:2},1024)]),_:1},512)}const oe={$style:le},re=I(ae,[["render",_e],["__cssModules",oe]]),ne={components:{PageContents:V,BasicButton:M,ButtonList:$,ButtonListItem:b,LM_P07_l005:re},setup(){const s=C(null);return{layer001:s,layer001Open:(c={})=>{s.value.layer.open(c.target)}}}},ie=a("br",null,null,-1);function ce(s,i,c,r,F,T){const p=l("BasicButton"),d=l("ButtonListItem"),u=l("ButtonList"),n=l("LM_P07_l005"),m=l("PageContents");return x(),v(m,null,{default:t(()=>[e(u,{classNames:{wrap:"row-margin-none"},align:"full"},{default:t(()=>[e(d,null,{default:t(()=>[e(p,{onClick:r.layer001Open},{default:t(()=>[o(" 신청정보 입력"),ie,o("LM_P07_l005 ")]),_:1},8,["onClick"])]),_:1})]),_:1}),e(n,{ref:"layer001"},null,512)]),_:1})}const xe=I(ne,[["render",ce]]);export{xe as default};
