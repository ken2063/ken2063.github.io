import{P as $}from"./PageContents-26a955e0.js";import{_ as y,l as h,r as N,c as T,o as A,a0 as b,g as l,d as c,e as w,F as d,f as g,n as f,h as L,W as C,t as P,$ as x,B as z,Q as m,q as V,s as i,V as _}from"./index-059b3cd0.js";import{B as I,a as j}from"./ButtonListItem-8a7855a8.js";const M={"toast-alert":"_toast-alert_so1z6_1","toast-alert__inner":"_toast-alert__inner_so1z6_9","toast-alert__message":"_toast-alert__message_so1z6_16","message-animation":"_message-animation_so1z6_1"},B=()=>({wrap:"",inner:"",message:""}),E={props:{classNames:{Type:Object,default(){return B()}}},setup(a){const s=h({count:0,messages:[]}),o=N(null),n=T(()=>{const{classNames:t}=a;return Object.assign(B(),t)}),p=t=>{const r=s.count,e={key:r,message:t.split(/\n/),timer:null};s.messages.push(e),s.count++,x(()=>{e.timer=setTimeout(()=>{u(r),clearTimeout(e.timer)},2100)})},u=t=>{const r=s.messages.findIndex(e=>e.key===t);s.messages.splice(r,1)};return A(()=>{const t=document.getElementsByTagName("body")[0];o.value.parentNode.matches("body")||t.append(o.value)}),b(()=>{o.value.remove()}),{state:s,wrap:o,customClassNames:n,push:p,clear:u}}},F={key:0};function O(a,s,o,n,p,u){return l(),c("div",{ref:"wrap",class:f([a.$style["toast-alert"],n.customClassNames.wrap])},[w("div",{class:f([a.$style["toast-alert__inner"],n.customClassNames.inner])},[(l(!0),c(d,null,g(n.state.messages,t=>(l(),c("p",{key:t.key,class:f([a.$style["toast-alert__message"],n.customClassNames.message]),"aria-role":"alert","aria-live":"assertive"},[(l(!0),c(d,null,g(t.message,(r,e)=>(l(),c(d,{key:e},[e>0?(l(),c("br",F)):L("",!0),C(P(r),1)],64))),128))],2))),128))],2)],2)}const q={$style:M},D=y(E,[["render",O],["__cssModules",q]]),G={components:{PageContents:$,BasicButton:z,ButtonList:I,ButtonListItem:j,ToastAlert:D},setup(){const a=N(null);return{toastAlert:a,toastAlertPush:o=>{a.value.push(o)}}}};function Q(a,s,o,n,p,u){const t=m("BasicButton"),r=m("ButtonListItem"),e=m("ButtonList"),v=m("ToastAlert"),k=m("PageContents");return l(),V(k,null,{default:i(()=>[_(e,{classNames:{wrap:"row-margin-none"},align:"full"},{default:i(()=>[_(r,null,{default:i(()=>[_(t,{onClick:s[0]||(s[0]=S=>n.toastAlertPush(`여기에 내용이 표시될 예정입니다.
줄바꿈은 \\n 이용.
세 줄일 경우는 이렿게 표시됩니다.`))},{default:i(()=>[C("토스트 얼럿")]),_:1})]),_:1})]),_:1}),_(v,{ref:"toastAlert"},null,512)]),_:1})}const J=y(G,[["render",Q]]);export{J as default};
