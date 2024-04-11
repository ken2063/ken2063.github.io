import{_ as b,X as P,B as v,Z as S,l as V,o as M,b as w,Q as o,q as N,s as t,g as y,V as e,e as d,W as a}from"./index-0ca40496.js";import{P as G}from"./PageContents-131cde60.js";import{P as H}from"./PageTextGroup-692d5231.js";import{B as U,a as R}from"./ButtonListItem-b1f6835b.js";import{F as q}from"./FormList-e7f69d6e.js";import{F as Q}from"./FormListItem-71a0d183.js";import{F as W,a as X}from"./FormInvalidMessage-6559d7e3.js";import{F as Z}from"./FormHelpText-80597eff.js";import{I as j,a as z}from"./InputBlockCell-abb707cb.js";import{B as A}from"./BasicDatepicker-b89f432e.js";import{B as J,a as K}from"./BoxCheckLabel-817ebd62.js";import{B as O,a as Y}from"./BoxCheckListItem-ce8334a3.js";import{B as $}from"./BottomSticky-889e7601.js";const tt={components:{PageContents:G,PageTextGroup:H,PageMainText:P,BasicButton:v,ButtonList:U,ButtonListItem:R,FormList:q,FormListItem:Q,FormInvalid:W,FormInvalidMessage:X,FormHelpText:Z,InputBlock:j,InputBlockCell:z,BasicDatepicker:A,BoxCheck:J,BoxCheckLabel:K,BoxCheckList:O,BoxCheckListItem:Y,BottomSticky:$},setup(){const r={ui:{header:S()}},s=V({minDate:"",maxDate:""});return M(()=>{r.ui.header.setTitle(()=>"타이틀"),r.ui.header.setLeftButtons(()=>["back"]),r.ui.header.setRightButtons(()=>[])}),w(()=>{r.ui.header.setTitle(),r.ui.header.setLeftButtons(),r.ui.header.setRightButtons()}),{state:s}}},et=d("br",null,null,-1),ot=d("div",{class:"text-body-3"},"~",-1),at={class:"bottom-wrap"};function nt(r,s,rt,n,st,lt){const p=o("PageMainText"),f=o("PageTextGroup"),l=o("BoxCheckLabel"),i=o("BoxCheck"),u=o("BoxCheckListItem"),B=o("BoxCheckList"),_=o("BasicDatepicker"),m=o("InputBlockCell"),x=o("InputBlock"),g=o("FormInvalidMessage"),k=o("FormHelpText"),h=o("FormInvalid"),C=o("FormListItem"),D=o("FormList"),I=o("BasicButton"),L=o("ButtonListItem"),F=o("ButtonList"),E=o("BottomSticky"),T=o("PageContents");return y(),N(T,null,{foot:t(()=>[e(E,null,{default:t(()=>[d("div",at,[e(F,{classNames:{wrap:"row-margin-none"}},{default:t(()=>[e(L,null,{default:t(()=>[e(I,null,{default:t(()=>[a("조회")]),_:1})]),_:1})]),_:1})])]),_:1})]),default:t(()=>[e(f,null,{default:t(()=>[e(p,null,{default:t(()=>[a(" 조회기간을"),et,a(" 선택해 주세요 ")]),_:1})]),_:1}),e(D,null,{default:t(()=>[e(C,{titleText:"조회기간",forceFocus:!0},{default:t(()=>[e(h,{error:n.state.testError001},{default:t(()=>[e(B,{classNames:{wrap:"row-margin-item-group"}},{default:t(()=>[e(u,null,{default:t(()=>[e(i,{minSide:!0,name:"guideEnterDateCheck",id:"guideEnterDateCheck001"},{default:t(()=>[e(l,null,{default:t(()=>[a("1개월")]),_:1})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(i,{minSide:!0,name:"guideEnterDateCheck",id:"guideEnterDateCheck002"},{default:t(()=>[e(l,null,{default:t(()=>[a("3개월")]),_:1})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(i,{minSide:!0,name:"guideEnterDateCheck",id:"guideEnterDateCheck003"},{default:t(()=>[e(l,null,{default:t(()=>[a("6개월")]),_:1})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(i,{minSide:!0,name:"guideEnterDateCheck",id:"guideEnterDateCheck004"},{default:t(()=>[e(l,null,{default:t(()=>[a("1년")]),_:1})]),_:1})]),_:1})]),_:1}),e(x,{error:n.state.testError001},{default:t(()=>[e(m,{flexible:!0},{default:t(()=>[e(_,{title:"조회기간 시작 날짜",id:"guideEnterDateStart",buttonId:"guideEnterDateStartButton",max:n.state.maxDate,modelValue:n.state.minDate,"onUpdate:modelValue":s[0]||(s[0]=c=>n.state.minDate=c)},null,8,["max","modelValue"])]),_:1}),e(m,{margin:"regular"},{default:t(()=>[ot]),_:1}),e(m,{flexible:!0,margin:"regular"},{default:t(()=>[e(_,{title:"조회기간 종료 날짜",id:"guideEnterDateEnd",buttonId:"guideEnterDateEndButton",min:n.state.minDate,modelValue:n.state.maxDate,"onUpdate:modelValue":s[1]||(s[1]=c=>n.state.maxDate=c)},null,8,["min","modelValue"])]),_:1})]),_:1},8,["error"]),e(g,null,{default:t(()=>[a("Error Message")]),_:1}),e(k,null,{default:t(()=>[a("조회기간은 최대 1년까지 가능해요.")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),_:1})}const Ct=b(tt,[["render",nt]]);export{Ct as default};