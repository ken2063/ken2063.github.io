import{g as T,d as L,e as r,_ as P,a8 as Q,l as U,i as O,r as W,c as G,w as h,o as J,a0 as X,Q as w,m as Y,n as _,t as ee,V as A,h as te,$ as E}from"./index-059b3cd0.js";const ne={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},se=r("path",{fill:"#9E9E9E","fill-rule":"evenodd",d:"M17 8H7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM7 6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H7Z","clip-rule":"evenodd"},null,-1),le=r("path",{fill:"#9E9E9E","fill-rule":"evenodd",d:"M5 10a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z","clip-rule":"evenodd"},null,-1),ae=r("path",{fill:"#9E9E9E",d:"M7 4.5a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2ZM15 4.5a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2Z"},null,-1),ie=[se,le,ae];function ue(n,m){return T(),L("svg",ne,ie)}const ce={render:ue},oe="_input_658nv_1",de="_input__dummy_658nv_5",re="_input__text_658nv_9",me="_input__icon_658nv_18",_e="_input__delete_658nv_94",pe={input:oe,input__dummy:de,input__text:re,input__icon:me,"input--disabled":"_input--disabled_658nv_32","input--align-right":"_input--align-right_658nv_38","is-date-picker-animated":"_is-date-picker-animated_658nv_77","input--direction-right":"_input--direction-right_658nv_90",input__delete:_e,"input__delete-text":"_input__delete-text_658nv_141","input--focus":"_input--focus_658nv_159","input--inputed":"_input--inputed_658nv_159"},Z=()=>({wrap:"",dummy:"",text:"",icon:"",isdelete:"",deleteText:""}),fe={inheritAttrs:!1,components:{IconCalendar:ce,IconDelete:Q},props:{classNames:{Type:Object,default(){return Z()}},title:{Type:String,default:null},id:{Type:String,default:null},buttonId:{Type:String,default:null},align:{Type:String,default:null},disabled:{Type:Boolean,default:!1},defaultValue:{Type:String,default:null},min:{Type:String,default:null},max:{Type:String,default:null},direction:{Type:String,default:"left"},onInit:{Type:Function,default(){return()=>{}}},onChange:{Type:Function,default(){return()=>{}}},pickerBlur:{Type:Function,default(){return()=>{}}},pickerChange:{Type:Function,default(){return()=>{}}},pickerFocus:{Type:Function,default(){return()=>{}}},pickerOpen:{Type:Function,default(){return()=>{}}},pickerClose:{Type:Function,default(){return()=>{}}},modelValue:{Type:String},isDelete:{Type:String,default:null}},setup(n,{emit:m}){const u=/^(\d{4})\.(\d{2})\.(\d{2})$/,o=new Event("change");let f=null;const s=U({val:"",element:null,date:null}),a=O("formListItem",{}),d=O("inputBlock",{}),p=W(null),H=G(()=>{const{classNames:e}=n;return Object.assign(Z(),e)}),N=e=>{const{element:t}=s,i=t.getElementsByClassName("duet-date__toggle")[0],l=typeof e=="string"?e:"";i&&i.setAttribute("id",l)},g=(e=!1)=>{const{element:t}=s;[...t.querySelectorAll(".duet-date__select select")].forEach(l=>{l&&(e?(l.disabled=!0,l.setAttribute("aria-hidden","true"),l.setAttribute("inert","")):(l.disabled=!1,l.removeAttribute("aria-hidden"),l.removeAttribute("inert")))})},F=(e=()=>{})=>{const t=document.getElementsByTagName("html")[0];t.classList.add("is-date-picker-animated"),clearTimeout(f),f=setTimeout(function(){clearTimeout(f),t.classList.remove("is-date-picker-animated"),e()},300)},j=()=>s.element,q=()=>s.val,z=()=>s.date,y=e=>{if(e===s.val)return;const{element:t}=s;if(!e||!e.length){t.value="",s.val="",s.date=null,m("update:modelValue",""),E(()=>{t.dispatchEvent(o),a&&a.checkInputed&&a.checkInputed()});return}const i=e.replace(/\./g,"-"),l=e.match(u);t.value=i,s.val=e,l?s.date=new Date(Number(l[1]),Number(l[2])-1,Number(l[3])):s.date=null,m("update:modelValue",e),E(()=>{t.dispatchEvent(o),a&&a.checkInputed&&a.checkInputed()})},b=e=>{const{element:t}=s;if(!e||!e.length){t.min="";return}const i=e.replace(/\./g,"-");t.min=i},k=e=>{const{element:t}=s;if(!e||!e.length){t.max="";return}const i=e.replace(/\./g,"-");t.max=i},I=e=>{const{pickerBlur:t}=n;t(e)},B=e=>{const{element:t}=s,{valueAsDate:i,value:l}=e.detail,{pickerChange:C}=n,v=l.replace(/-/g,".");s.val=v,s.date=i,m("update:modelValue",v),E(()=>{t.dispatchEvent(o),C(e)})},S=e=>{const{pickerFocus:t}=n;t(e)},M=e=>{const{pickerOpen:t}=n;document.getElementsByTagName("html")[0].classList.add("is-date-picker-opened"),a&&a.selectFocus&&a.selectFocus(!0),d&&d.selectFocus&&d.selectFocus(!0),g(!1),F(),t(e)},V=e=>{const{pickerClose:t}=n;document.getElementsByTagName("html")[0].classList.remove("is-date-picker-opened"),g(!0),F(()=>{a&&a.selectFocus&&a.selectFocus(!1),d&&d.selectFocus&&d.selectFocus(!1)}),t(e)};h(()=>n.buttonId,e=>{N(e)}),h(()=>n.modelValue,e=>{y(e)}),h(()=>n.min,e=>{b(e)}),h(()=>n.max,e=>{k(e)});const R=()=>{a&&a.checkInputed&&a.checkInputed()},x=new MutationObserver(R);return J(()=>{const{buttonId:e,onInit:t,defaultValue:i,modelValue:l,min:C,max:v}=n,c=p.value&&p.value.querySelector("duet-date-picker");if(c){const $=()=>{const K=c.querySelector('[name="date"]');x.observe(K,{attributes:!0}),D.disconnect(),c.firstDayOfWeek=0,c.localization={buttonLabel:"날짜 선택",placeholder:"연도.월.일",selectedDateMessage:"선택 된 날짜",prevMonthLabel:"이전 달",nextMonthLabel:"다음 달",monthSelectLabel:"월",yearSelectLabel:"연도",closeLabel:"닫기",calendarHeading:"날짜 선택",dayNames:["일 요일","월 요일","화 요일","수 요일","목 요일","금 요일","토 요일"],monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],locale:"ko-KR"},N(e),g(!0),b(C),k(v),(l||i)&&y(l||i),c.addEventListener("duetBlur",I),c.addEventListener("duetChange",B),c.addEventListener("duetFocus",S),c.addEventListener("duetOpen",M),c.addEventListener("duetClose",V),t(c)},D=new MutationObserver($);D.observe(c,{childList:!0}),s.element=c}}),X(()=>{const{element:e}=s;x.disconnect(),e&&(e.removeEventListener("duetBlur",I),e.removeEventListener("duetChange",B),e.removeEventListener("duetFocus",S),e.removeEventListener("duetOpen",M),e.removeEventListener("duetClose",V))}),{state:s,input:p,customClassNames:H,getElement:j,getValue:q,getDate:z,setValue:y,setMin:b,setMax:k}}},ve=["title","identifier","disabled"];function he(n,m,u,o,f,s){const a=w("IconDelete"),d=w("IconCalendar");return T(),L("div",{ref:"input",class:_([n.$style.input,{[n.$style[`input--align-${u.align}`]]:u.align,[n.$style["input--disabled"]]:u.disabled,[n.$style[`input--direction-${u.direction}`]]:u.direction},o.customClassNames.wrap])},[r("duet-date-picker",Y(n.$attrs,{title:u.title,identifier:u.id,disabled:u.disabled,onChange:m[0]||(m[0]=(...p)=>u.onChange&&u.onChange(...p))}),null,16,ve),r("div",{class:_([n.$style.input__dummy,o.customClassNames.dummy]),"aria-hidden":"true"},[r("div",{class:_([n.$style.input__text,o.customClassNames.text])},ee(o.state.val),3),u.isDelete?(T(),L("button",{key:0,type:"button",class:_([n.$style.input__delete,o.customClassNames.isDelete])},[A(a),r("span",{class:_([n.$style["input__delete-text"],o.customClassNames.deleteText])},"입력 내용 지우기",2)],2)):te("",!0),r("div",{class:_([n.$style.input__icon,o.customClassNames.icon])},[A(d)],2)],2)],2)}const ge={$style:pe},be=P(fe,[["render",he],["__cssModules",ge]]);export{be as B};