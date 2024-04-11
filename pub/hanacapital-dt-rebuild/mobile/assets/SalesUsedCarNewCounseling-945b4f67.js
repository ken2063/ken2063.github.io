import{_ as E,X as N,B as P,C as b,Z as U,l as M,o as v,b as y,Q as o,q as S,s as t,g as H,V as e,W as r,e as i}from"./index-0ca40496.js";import{P as R}from"./PageContents-131cde60.js";import{P as V}from"./PageTextGroup-692d5231.js";import{B as G,a as q}from"./ButtonListItem-b1f6835b.js";import{F as A}from"./FormList-e7f69d6e.js";import{F as O}from"./FormListItem-71a0d183.js";import{F as Q,a as W}from"./FormInvalidMessage-6559d7e3.js";import{F as X}from"./FormHelpText-80597eff.js";import{B as Z}from"./BasicTextarea-b8ec99eb.js";import{I as j,a as z}from"./InputBlockCell-abb707cb.js";import{B as D,a as J}from"./BoxCheckLabel-817ebd62.js";import{B as K,a as Y}from"./BoxCheckListItem-ce8334a3.js";const $={components:{PageContents:R,PageTextGroup:V,PageMainText:N,BasicButton:P,ButtonList:G,ButtonListItem:q,InputBlock:j,InputBlockCell:z,BasicInput:b,FormList:A,FormListItem:O,FormInvalid:Q,FormInvalidMessage:W,FormHelpText:X,BoxCheck:D,BoxCheckLabel:J,BoxCheckList:K,BoxCheckListItem:Y,BasicTextarea:Z},setup(){const n={ui:{header:U()}},p=M({nameError:!1,birthdayError:!1,phoneError:!1,productError:!1,memoError:!1});return v(()=>{n.ui.header.setTitle(()=>"중고할부·론"),n.ui.header.setLeftButtons(()=>["back"]),n.ui.header.setRightButtons(()=>[])}),y(()=>{n.ui.header.setTitle(),n.ui.header.setLeftButtons(),n.ui.header.setRightButtons()}),{state:p}}},ee=i("br",null,null,-1),te={class:"row-margin-contents-group row-margin-bottom-none"},oe=i("h3",{class:"text-body-2 row-margin-item-medium"},"신용조회동의 요청",-1);function re(n,p,ae,a,ne,se){const I=o("PageMainText"),L=o("PageTextGroup"),c=o("BasicInput"),d=o("InputBlockCell"),m=o("InputBlock"),s=o("FormInvalidMessage"),l=o("FormInvalid"),u=o("FormListItem"),B=o("FormHelpText"),C=o("BoxCheckLabel"),g=o("BoxCheck"),h=o("BoxCheckListItem"),k=o("BoxCheckList"),T=o("BasicTextarea"),F=o("FormList"),_=o("BasicButton"),f=o("ButtonListItem"),x=o("ButtonList"),w=o("PageContents");return H(),S(w,null,{default:t(()=>[e(L,null,{default:t(()=>[e(I,null,{default:t(()=>[r(" 손님 정보를"),ee,r(" 입력해 주세요 ")]),_:1})]),_:1}),i("div",null,[e(F,null,{default:t(()=>[e(u,{titleText:"성명",target:"#salesUsedCarNewCounselingName"},{default:t(()=>[e(l,{error:a.state.nameError},{default:t(()=>[e(m,{error:a.state.nameError},{default:t(()=>[e(d,{flexible:!0},{default:t(()=>[e(c,{title:"성명",id:"salesUsedCarNewCounselingName"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:t(()=>[r("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(u,{titleText:"생년월일",target:"#salesUsedCarNewCounselingBirthday"},{default:t(()=>[e(l,{error:a.state.birthdayError},{default:t(()=>[e(m,{error:a.state.birthdayError},{default:t(()=>[e(d,{flexible:!0},{default:t(()=>[e(c,{type:"number",pattern:"\\d*",title:"생년월일",id:"salesUsedCarNewCounselingBirthday"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:t(()=>[r("Error Message")]),_:1}),e(B,null,{default:t(()=>[r("숫자만 입력해 주세요. (예:230503)")]),_:1})]),_:1},8,["error"])]),_:1}),e(u,{titleText:"휴대폰번호",target:"#salesUsedCarNewCounselingPhone"},{default:t(()=>[e(l,{error:a.state.phoneError},{default:t(()=>[e(m,{error:a.state.phoneError},{default:t(()=>[e(d,{flexible:!0},{default:t(()=>[e(c,{pattern:"\\d*",title:"휴대폰번호",id:"salesUsedCarNewCounselingPhone"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:t(()=>[r("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(u,{titleText:"상품선택",forceFocus:!0},{default:t(()=>[e(l,{error:a.state.productError},{default:t(()=>[e(k,{classNames:{wrap:"row-margin-item-group"}},{default:t(()=>[e(h,null,{default:t(()=>[e(g,{minSide:!0,name:"salesUsedCarNewCounselingProduct",id:"salesUsedCarNewCounselingProduct001",defaultChecked:!0},{default:t(()=>[e(C,null,{default:t(()=>[r("모바일")]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(g,{minSide:!0,name:"salesUsedCarNewCounselingProduct",id:"salesUsedCarNewCounselingProduct002"},{default:t(()=>[e(C,null,{default:t(()=>[r("중고차할부")]),_:1})]),_:1})]),_:1})]),_:1}),e(s,null,{default:t(()=>[r("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(T,{error:a.state.memoError,titleText:"메모",titleOptionalText:"(매매상사, 직원명, 연락처를 입력하세요.)",maxlength:20,count:!0,title:"메모"},{bottom:t(()=>[e(s,null,{default:t(()=>[r("Error Message")]),_:1}),e(B,null,{default:t(()=>[r("최대 20자 이내로 입력해주세요.")]),_:1})]),_:1},8,["error"])]),_:1})]),i("section",te,[oe,e(x,{classNames:{wrap:"row-margin-none"}},{default:t(()=>[e(f,null,{default:t(()=>[e(_,{theme:"tertiary"},{default:t(()=>[r("ARS연결")]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(_,null,{default:t(()=>[r("URL전송")]),_:1})]),_:1})]),_:1})]),e(x,null,{default:t(()=>[e(f,null,{default:t(()=>[e(_,{line:!0,theme:"quaternary"},{default:t(()=>[r("목록")]),_:1})]),_:1})]),_:1})]),_:1})}const he=E($,[["render",re]]);export{he as default};