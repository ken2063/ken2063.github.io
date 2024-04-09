import{I as q}from"./calendar-b9ca54ea.js";import{_ as z,i as K,v as R,r as G,c as H,J as p,o as J,K as P,l as U,g as W,d as Q,e as _,y as X,n as g,t as Y,q as Z,G as T}from"./index-47f0144b.js";const $="_input_1i7kk_1",ee="_input__dummy_1i7kk_5",te="_input__text_1i7kk_18",ne="_input__icon_1i7kk_27",ae={input:$,input__dummy:ee,input__text:te,input__icon:ne,"input--align-right":"_input--align-right_1i7kk_41","input--disabled":"_input--disabled_1i7kk_44","input--focus":"_input--focus_1i7kk_53","input--error":"_input--error_1i7kk_58","is-date-picker-animated":"_is-date-picker-animated_1i7kk_97","input--direction-right":"_input--direction-right_1i7kk_110"},V=()=>({wrap:"",dummy:"",text:"",icon:""}),se={inheritAttrs:!1,components:{IconCalendar:q},props:{classNames:{Type:Object,default(){return V()}},title:{Type:String,default:null},id:{Type:String,default:null},buttonId:{Type:String,default:null},align:{Type:String,default:null},disabled:{Type:Boolean,default:!1},defaultValue:{Type:String,default:null},min:{Type:String,default:null},max:{Type:String,default:null},direction:{Type:String,default:"left"},onInit:{Type:Function,default(){return()=>{}}},onChange:{Type:Function,default(){return()=>{}}},pickerBlur:{Type:Function,default(){return()=>{}}},pickerChange:{Type:Function,default(){return()=>{}}},pickerFocus:{Type:Function,default(){return()=>{}}},pickerOpen:{Type:Function,default(){return()=>{}}},pickerClose:{Type:Function,default(){return()=>{}}},modelValue:{Type:String},error:{Type:Boolean,default:!1}},setup(a,{emit:c}){const o=/^(\d{4})\.(\d{2})\.(\d{2})$/,i=new Event("change"),d=[],n=K({val:"",element:null,date:null,isFocus:!1}),m=R("popupLayout",{}),r=G(null),I=H(()=>{const{classNames:e}=a;return Object.assign(V(),e)}),C=e=>{const{element:t}=n,l=t.getElementsByClassName("duet-date__toggle")[0],s=typeof e=="string"?e:"";l&&l.setAttribute("id",s)},y=(e=!1)=>{const{element:t}=n;[...t.querySelectorAll(".duet-date__select select")].forEach(s=>{s&&(e?(s.disabled=!0,s.setAttribute("aria-hidden","true"),s.setAttribute("inert","")):(s.disabled=!1,s.removeAttribute("aria-hidden"),s.removeAttribute("inert")))})},S=(e=()=>{})=>{const t=document.getElementsByTagName("html")[0];t.classList.add("is-date-picker-animated"),m.bodyScroll&&m.bodyScroll.value.SimpleBar.recalculate(),clearTimeout(d[0]),d[0]=setTimeout(function(){clearTimeout(d[0]),t.classList.remove("is-date-picker-animated"),m.bodyScroll&&m.bodyScroll.value.SimpleBar.recalculate(),e()},300)},A=()=>n.element,M=()=>n.val,D=()=>n.date,k=e=>{if(e===n.val)return;const{element:t}=n;if(!e||!e.length){t.value="",n.val="",n.date=null,c("update:modelValue",""),T(()=>{t.dispatchEvent(i)});return}const l=e.replace(/\./g,"-"),s=e.match(o);t.value=l,n.val=e,s?n.date=new Date(Number(s[1]),Number(s[2])-1,Number(s[3])):n.date=null,c("update:modelValue",e),T(()=>{t.dispatchEvent(i)})},v=e=>{const{element:t}=n;if(!e||!e.length){t.min="";return}const l=e.replace(/\./g,"-");t.min=l},b=e=>{const{element:t}=n;if(!e||!e.length){t.max="";return}const l=e.replace(/\./g,"-");t.max=l},L=e=>{const{pickerBlur:t}=a;t(e)},E=e=>{const{element:t}=n,{valueAsDate:l,value:s}=e.detail,{pickerChange:h}=a,f=s.replace(/-/g,".");n.val=f,n.date=l,c("update:modelValue",f),T(()=>{t.dispatchEvent(i),h(e)})},N=e=>{const{pickerFocus:t}=a;t(e)},F=e=>{const{pickerOpen:t}=a;document.getElementsByTagName("html")[0].classList.add("is-date-picker-opened"),y(!1),S(),t(e)},B=e=>{const{pickerClose:t}=a;document.getElementsByTagName("html")[0].classList.remove("is-date-picker-opened"),y(!0),S(),t(e)},x=()=>{clearTimeout(d[1]),n.isFocus=!0},w=()=>{clearTimeout(d[1]),d[1]=setTimeout(()=>{n.isFocus=!1},50)};return p(()=>a.buttonId,e=>{C(e)}),p(()=>a.modelValue,e=>{k(e)}),p(()=>a.min,e=>{v(e)}),p(()=>a.max,e=>{b(e)}),J(()=>{const{buttonId:e,onInit:t,defaultValue:l,modelValue:s,min:h,max:f}=a,u=r.value&&r.value.querySelector("duet-date-picker");if(u){const j=()=>{O.disconnect(),u.firstDayOfWeek=0,u.localization={buttonLabel:"날짜 선택",placeholder:"연도.월.일",selectedDateMessage:"선택 된 날짜",prevMonthLabel:"이전 달",nextMonthLabel:"다음 달",monthSelectLabel:"월",yearSelectLabel:"연도",closeLabel:"닫기",calendarHeading:"날짜 선택",dayNames:["일 요일","월 요일","화 요일","수 요일","목 요일","금 요일","토 요일"],monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],locale:"ko-KR"},C(e),y(!0),v(h),b(f),(s||l)&&k(s||l),u.addEventListener("duetBlur",L),u.addEventListener("duetChange",E),u.addEventListener("duetFocus",N),u.addEventListener("duetOpen",F),u.addEventListener("duetClose",B),t(u)},O=new MutationObserver(j);O.observe(u,{childList:!0}),n.element=u}}),P(()=>{const{element:e}=n;e&&(e.removeEventListener("duetBlur",L),e.removeEventListener("duetChange",E),e.removeEventListener("duetFocus",N),e.removeEventListener("duetOpen",F),e.removeEventListener("duetClose",B))}),{state:n,input:r,customClassNames:I,getElement:A,getValue:M,getDate:D,setValue:k,setMin:v,setMax:b,onfocusin:x,onfocusout:w}}},le=["title","identifier","disabled"];function ie(a,c,o,i,d,n){const m=U("IconCalendar");return W(),Q("div",{ref:"input",class:g([a.$style.input,{[a.$style[`input--align-${o.align}`]]:o.align,[a.$style["input--disabled"]]:o.disabled,[a.$style["input--focus"]]:i.state.isFocus,[a.$style["input--error"]]:o.error,[a.$style[`input--direction-${o.direction}`]]:o.direction},i.customClassNames.wrap]),onFocusin:c[1]||(c[1]=(...r)=>i.onfocusin&&i.onfocusin(...r)),onFocusout:c[2]||(c[2]=(...r)=>i.onfocusout&&i.onfocusout(...r))},[_("duet-date-picker",X(a.$attrs,{title:o.title,identifier:o.id,disabled:o.disabled,onChange:c[0]||(c[0]=(...r)=>o.onChange&&o.onChange(...r))}),null,16,le),_("div",{class:g([a.$style.input__dummy,i.customClassNames.dummy]),"aria-hidden":"true"},[_("div",{class:g([a.$style.input__text,i.customClassNames.text])},Y(i.state.val),3),_("div",{class:g([a.$style.input__icon,i.customClassNames.icon])},[Z(m)],2)],2)],34)}const oe={$style:ae},re=z(se,[["render",ie],["__cssModules",oe]]);export{re as S};
