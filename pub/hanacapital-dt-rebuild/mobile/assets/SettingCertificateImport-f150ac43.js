import{_ as C,X as F,B as P,C as L,l as k,Z as M,o as T,b as w,Q as l,q as S,s as n,g as q,V as e,e as t,W as _,n as o}from"./index-059b3cd0.js";import{P as R}from"./PageContents-26a955e0.js";import{P as E}from"./PageTextGroup-e85d9757.js";import{B as N,a as Q}from"./ButtonListItem-8a7855a8.js";import{I as V}from"./IllustObject-b76bb200.js";import{F as j}from"./FormList-cbde6fcb.js";import{F as G}from"./FormListItem-15ea4fed.js";import{F as O,a as U}from"./FormInvalidMessage-edc45528.js";import{I as z,a as H}from"./InputBlockCell-88d63319.js";import{B as W}from"./BottomSticky-bdaba37a.js";const X={"contents-list":"_contents-list_oyu6b_1","contents-list__list":"_contents-list__list_oyu6b_4","contents-list__item":"_contents-list__item_oyu6b_9","contents-list__head":"_contents-list__head_oyu6b_12","contents-list__symbol":"_contents-list__symbol_oyu6b_20","contents-list__title":"_contents-list__title_oyu6b_32","contents-list__right":"_contents-list__right_oyu6b_40","contents-list__opener":"_contents-list__opener_oyu6b_51","contents-list__contents":"_contents-list__contents_oyu6b_65","contents-list__depth":"_contents-list__depth_oyu6b_68","contents-list__depth-2":"_contents-list__depth-2_oyu6b_72","contents-list__depth-3":"_contents-list__depth-3_oyu6b_75","contents-list__depth-4":"_contents-list__depth-4_oyu6b_78","contents-list__list--secondary":"_contents-list__list--secondary_oyu6b_81","contents-list__list--tertiary":"_contents-list__list--tertiary_oyu6b_108","contents-list__list--quaternary":"_contents-list__list--quaternary_oyu6b_133","contents-list__list--quinary":"_contents-list__list--quinary_oyu6b_159","contents-list__list--senary":"_contents-list__list--senary_oyu6b_187"},Z={components:{PageContents:R,PageTextGroup:E,PageMainText:F,BasicButton:P,ButtonList:N,ButtonListItem:Q,IllustObject:V,FormList:j,FormListItem:G,FormInvalid:O,FormInvalidMessage:U,InputBlock:z,InputBlockCell:H,BasicInput:L,BottomSticky:W},setup(){const s=k({codeError:!1}),i={ui:{header:M()}};return T(()=>{i.ui.header.setTitle(()=>"공동인증서 가져오기"),i.ui.header.setLeftButtons(()=>["back"]),i.ui.header.setRightButtons(()=>[])}),w(()=>{i.ui.header.setTitle(),i.ui.header.setLeftButtons(),i.ui.header.setRightButtons()}),{state:s}}},A=t("br",null,null,-1),D={class:"row-margin-contents-group"},J=t("h2",{class:"text-body-2 row-margin-item-group"},"진행순서",-1),K=t("br",null,null,-1),Y=t("strong",{class:"color-green font-weight-medium"},"‘고객센터 > 인증센터 > 인증서 내보내기 [PC > 스마트폰]’",-1),x=t("p",{class:"text-body-4 font-weight-light color-gray-tertiary"}," (http://hanacapital.co.kr/cs/cert-center.hnc) ",-1),tt=[x],st={class:"bottom-wrap"};function et(s,i,nt,c,lt,_t){const m=l("PageMainText"),p=l("PageTextGroup"),y=l("IllustObject"),r=l("BasicInput"),a=l("InputBlockCell"),f=l("InputBlock"),h=l("FormInvalidMessage"),b=l("FormInvalid"),g=l("FormListItem"),B=l("FormList"),u=l("BasicButton"),d=l("ButtonListItem"),I=l("ButtonList"),v=l("BottomSticky"),$=l("PageContents");return q(),S($,null,{foot:n(()=>[e(v,null,{default:n(()=>[t("div",st,[e(I,{classNames:{wrap:"row-margin-none"}},{default:n(()=>[e(d,null,{default:n(()=>[e(u,{line:!0,minSide:!0},{default:n(()=>[_("QR코드로 가져오기")]),_:1})]),_:1}),e(d,null,{default:n(()=>[e(u,{minSide:!0},{default:n(()=>[_("공동인증서 가져오기 ")]),_:1})]),_:1})]),_:1})])]),_:1})]),default:n(()=>[e(p,null,{default:n(()=>[e(m,null,{default:n(()=>[_(" PC에 저장된 공동인증서를"),A,_(" 스마트폰으로 복사합니다 ")]),_:1})]),_:1}),e(y,{type:"certification"}),e(B,null,{default:n(()=>[e(g,{titleText:"인증번호로 가져오기",target:"#settingCertificateImportCode"},{default:n(()=>[e(b,{error:c.state.codeError},{default:n(()=>[e(f,{error:c.state.codeError},{default:n(()=>[e(a,{flexible:!0},{default:n(()=>[e(r,{type:"number",pattern:"\\d*",title:"인증번호 앞 4자리",id:"settingCertificateImportCode"})]),_:1}),e(a,{type:"sub"},{default:n(()=>[_("-")]),_:1}),e(a,{flexible:!0},{default:n(()=>[e(r,{type:"number",pattern:"\\d*",title:"인증번호 뒤 4자리"})]),_:1})]),_:1},8,["error"]),e(h,null,{default:n(()=>[_("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),t("section",D,[J,t("div",{class:o(s.$style["contents-list"])},[t("ol",{class:o([s.$style["contents-list__list"],s.$style["contents-list__list--senary"]])},[t("li",{class:o(s.$style["contents-list__item"])},[t("div",{class:o(s.$style["contents-list__head"])},[t("div",{class:o(s.$style["contents-list__symbol"])},"1",2),t("div",{class:o(s.$style["contents-list__title"])},[_(" 하나캐피탈 PC 홈페이지의"),K,Y,_("에 접속해주세요. ")],2)],2),t("div",{class:o([s.$style["contents-list__depth-4"],"row-margin-mini"])},tt,2)],2),t("li",{class:o(s.$style["contents-list__item"])},[t("div",{class:o(s.$style["contents-list__head"])},[t("div",{class:o(s.$style["contents-list__symbol"])},"2",2),t("div",{class:o(s.$style["contents-list__title"])}," ‘공동인증서 내보내기’ 버튼을 선택한 후, 인증서 비밀번호를 입력해주세요 ",2)],2)],2),t("li",{class:o(s.$style["contents-list__item"])},[t("div",{class:o(s.$style["contents-list__head"])},[t("div",{class:o(s.$style["contents-list__symbol"])},"3",2),t("div",{class:o(s.$style["contents-list__title"])}," PC 화면에 표시된 인증번호 8자리 입력하거나, ‘QR코드로 가져오기’ 선택하여 QR코드를 촬영해주세요. ",2)],2)],2),t("li",{class:o(s.$style["contents-list__item"])},[t("div",{class:o(s.$style["contents-list__head"])},[t("div",{class:o(s.$style["contents-list__symbol"])},"4",2),t("div",{class:o(s.$style["contents-list__title"])}," ‘공동인증서 가져오기’ 버튼 선택하시면 가져오기가 완료됩니다. ",2)],2)],2)],2)],2)])]),_:1})}const ot={$style:X},ht=C(Z,[["render",et],["__cssModules",ot]]);export{ht as default};