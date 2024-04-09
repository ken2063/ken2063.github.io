import{I as U}from"./calendar-ac0950f9.js";import{I as W}from"./text-delete-e17c104b.js";import{_ as Q,i as X,v as L,r as Y,c as Z,J as g,o as $,K as ee,l as M,g as A,d as w,e as _,y as te,n as p,t as ne,q,h as se,G as S}from"./index-89ea90fd.js";const le="_input_5nnb4_1",ae="_input__dummy_5nnb4_5",ie="_input__text_5nnb4_9",ce="_input__icon_5nnb4_19",ue="_input__delete_5nnb4_95",oe={input:le,input__dummy:ae,input__text:ie,input__icon:ce,"input--disabled":"_input--disabled_5nnb4_33","input--align-right":"_input--align-right_5nnb4_39","is-date-picker-animated":"_is-date-picker-animated_5nnb4_78","input--direction-right":"_input--direction-right_5nnb4_91",input__delete:ue,"input__delete-text":"_input__delete-text_5nnb4_142"},j=()=>({wrap:"",dummy:"",text:"",icon:"",isdelete:"",deleteText:""}),de={inheritAttrs:!1,components:{IconCalendar:U,IconDelete:W},props:{classNames:{Type:Object,default(){return j()}},title:{Type:String,default:null},id:{Type:String,default:null},buttonId:{Type:String,default:null},align:{Type:String,default:null},disabled:{Type:Boolean,default:!1},defaultValue:{Type:String,default:null},min:{Type:String,default:null},max:{Type:String,default:null},direction:{Type:String,default:"left"},onInit:{Type:Function,default(){return()=>{}}},onChange:{Type:Function,default(){return()=>{}}},pickerBlur:{Type:Function,default(){return()=>{}}},pickerChange:{Type:Function,default(){return()=>{}}},pickerFocus:{Type:Function,default(){return()=>{}}},pickerOpen:{Type:Function,default(){return()=>{}}},pickerClose:{Type:Function,default(){return()=>{}}},modelValue:{Type:String},isDelete:{Type:String,default:null}},setup(n,{emit:r}){const c=/^(\d{4})\.(\d{2})\.(\d{2})$/,o=new Event("change");let f=null;const s=X({val:"",element:null,date:null}),a=L("formListItem",{}),d=L("inputBlock",{}),m=L("popupLayout",{}),y=Y(null),z=Z(()=>{const{classNames:e}=n;return Object.assign(j(),e)}),E=e=>{const{element:t}=s,i=t.getElementsByClassName("duet-date__toggle")[0],l=typeof e=="string"?e:"";i&&i.setAttribute("id",l)},h=(e=!1)=>{const{element:t}=s;[...t.querySelectorAll(".duet-date__select select")].forEach(l=>{l&&(e?(l.disabled=!0,l.setAttribute("aria-hidden","true"),l.setAttribute("inert","")):(l.disabled=!1,l.removeAttribute("aria-hidden"),l.removeAttribute("inert")))})},I=(e=()=>{})=>{const t=document.getElementsByTagName("html")[0];t.classList.add("is-date-picker-animated"),m.bodyScroll&&m.bodyScroll.value.SimpleBar.recalculate(),clearTimeout(f),f=setTimeout(function(){clearTimeout(f),t.classList.remove("is-date-picker-animated"),m.bodyScroll&&m.bodyScroll.value.SimpleBar.recalculate(),e()},300)},K=()=>s.element,R=()=>s.val,G=()=>s.date,v=e=>{if(e===s.val)return;const{element:t}=s;if(!e||!e.length){t.value="",s.val="",s.date=null,r("update:modelValue",""),S(()=>{t.dispatchEvent(o),a&&a.checkInputed&&a.checkInputed()});return}const i=e.replace(/\./g,"-"),l=e.match(c);t.value=i,s.val=e,l?s.date=new Date(Number(l[1]),Number(l[2])-1,Number(l[3])):s.date=null,r("update:modelValue",e),S(()=>{t.dispatchEvent(o),a&&a.checkInputed&&a.checkInputed()})},k=e=>{const{element:t}=s;if(!e||!e.length){t.min="";return}const i=e.replace(/\./g,"-");t.min=i},C=e=>{const{element:t}=s;if(!e||!e.length){t.max="";return}const i=e.replace(/\./g,"-");t.max=i},N=e=>{const{pickerBlur:t}=n;t(e)},B=e=>{const{element:t}=s,{valueAsDate:i,value:l}=e.detail,{pickerChange:T}=n,b=l.replace(/-/g,".");s.val=b,s.date=i,r("update:modelValue",b),S(()=>{t.dispatchEvent(o),T(e)})},F=e=>{const{pickerFocus:t}=n;t(e)},D=e=>{const{pickerOpen:t}=n;document.getElementsByTagName("html")[0].classList.add("is-date-picker-opened"),a&&a.selectFocus&&a.selectFocus(!0),d&&d.selectFocus&&d.selectFocus(!0),h(!1),I(),t(e)},O=e=>{const{pickerClose:t}=n;document.getElementsByTagName("html")[0].classList.remove("is-date-picker-opened"),h(!0),I(()=>{a&&a.selectFocus&&a.selectFocus(!1),d&&d.selectFocus&&d.selectFocus(!1)}),t(e)};g(()=>n.buttonId,e=>{E(e)}),g(()=>n.modelValue,e=>{v(e)}),g(()=>n.min,e=>{k(e)}),g(()=>n.max,e=>{C(e)});const H=()=>{a&&a.checkInputed&&a.checkInputed()},V=new MutationObserver(H);return $(()=>{const{buttonId:e,onInit:t,defaultValue:i,modelValue:l,min:T,max:b}=n,u=y.value&&y.value.querySelector("duet-date-picker");if(u){const J=()=>{const P=u.querySelector('[name="date"]');V.observe(P,{attributes:!0}),x.disconnect(),u.firstDayOfWeek=0,u.localization={buttonLabel:"날짜 선택",placeholder:"연도.월.일",selectedDateMessage:"선택 된 날짜",prevMonthLabel:"이전 달",nextMonthLabel:"다음 달",monthSelectLabel:"월",yearSelectLabel:"연도",closeLabel:"닫기",calendarHeading:"날짜 선택",dayNames:["일 요일","월 요일","화 요일","수 요일","목 요일","금 요일","토 요일"],monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],locale:"ko-KR"},E(e),h(!0),k(T),C(b),(l||i)&&v(l||i),u.addEventListener("duetBlur",N),u.addEventListener("duetChange",B),u.addEventListener("duetFocus",F),u.addEventListener("duetOpen",D),u.addEventListener("duetClose",O),t(u)},x=new MutationObserver(J);x.observe(u,{childList:!0}),s.element=u}}),ee(()=>{const{element:e}=s;V.disconnect(),e&&(e.removeEventListener("duetBlur",N),e.removeEventListener("duetChange",B),e.removeEventListener("duetFocus",F),e.removeEventListener("duetOpen",D),e.removeEventListener("duetClose",O))}),{state:s,input:y,customClassNames:z,getElement:K,getValue:R,getDate:G,setValue:v,setMin:k,setMax:C}}},re=["title","identifier","disabled"];function me(n,r,c,o,f,s){const a=M("IconDelete"),d=M("IconCalendar");return A(),w("div",{ref:"input",class:p([n.$style.input,{[n.$style[`input--align-${c.align}`]]:c.align,[n.$style["input--disabled"]]:c.disabled,[n.$style[`input--direction-${c.direction}`]]:c.direction},o.customClassNames.wrap])},[_("duet-date-picker",te(n.$attrs,{title:c.title,identifier:c.id,disabled:c.disabled,onChange:r[0]||(r[0]=(...m)=>c.onChange&&c.onChange(...m))}),null,16,re),_("div",{class:p([n.$style.input__dummy,o.customClassNames.dummy]),"aria-hidden":"true"},[_("div",{class:p([n.$style.input__text,o.customClassNames.text])},ne(o.state.val),3),c.isDelete?(A(),w("button",{key:0,type:"button",class:p([n.$style.input__delete,o.customClassNames.isDelete])},[q(a),_("span",{class:p([n.$style["input__delete-text"],o.customClassNames.deleteText])},"입력 내용 지우기",2)],2)):se("",!0),_("div",{class:p([n.$style.input__icon,o.customClassNames.icon])},[q(d)],2)],2)],2)}const pe={$style:oe},ge=Q(de,[["render",me],["__cssModules",pe]]);export{ge as B};
