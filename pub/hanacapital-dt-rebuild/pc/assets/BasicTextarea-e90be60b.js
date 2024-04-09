import{_ as F,k as q,v as w,i as K,r as O,c as C,j,o as E,a as z,J as A,p as T,l as D,g as u,d as r,e as _,n as i,t as f,h as c,q as G,w as J,y as P,m as U,G as H}from"./index-89ea90fd.js";import{F as Q}from"./FormInvalid-83d8e491.js";const R="_input_13x0s_1",W="_input__title_13x0s_4",X="_input__contents_13x0s_10",Y="_input__input_13x0s_13",Z="_input__bottom_13x0s_89",$="_input__count_13x0s_97",tt="_input__help_13x0s_108",et="_input__invalid_13x0s_108",nt={input:R,input__title:W,input__contents:X,input__input:Y,"input--focus":"_input--focus_13x0s_81","input--error":"_input--error_13x0s_86",input__bottom:Z,"input__bottom-left":"_input__bottom-left_13x0s_93",input__count:$,"input__count-current":"_input__count-current_13x0s_105",input__help:tt,input__invalid:et,"input--inputed":"_input--inputed_13x0s_111","input--disabled":"_input--disabled_13x0s_117"},x=()=>({item:"",title:"",titleText:"",titleOptionalText:"",require:"",requireText:"",contents:"",input:"",bottom:"",bottomLeft:"",count:"",countCurrent:""}),ot={components:{FormInvalid:Q},inheritAttrs:!1,props:{classNames:{Type:Object,default(){return x()}},require:{Type:Boolean,default:!1},titleText:{Type:String,default:""},titleOptionalText:{Type:String,default:null},disabled:{Type:Boolean,default:!1},count:{Type:Boolean,default:!1},error:{Type:Boolean,default:!1},maxlength:{Type:Number,default:null},defaultValue:{Type:String,default:null},modelValue:{Type:String}},setup(e,s){const{emit:o}=s;let t=null;const y=q(),p=w("formListStyleModule"),a=K({isFocus:!1,isInputed:!1,val:"",count:e.modelValue?e.modelValue.length:0}),n=O(null),g=C(()=>{const{classNames:l}=e;return Object.assign(x(),l)}),N=C(()=>!!s.slots.bottom),S=()=>n.value,b=()=>{n.value.focus()},M=()=>{b()},m=()=>{const{maxlength:l}=e;if(typeof l!="number")return;const d=n.value.value;if(d.length>l){n.value.value=d.substr(0,l);const V=new Event("input");n.value.dispatchEvent(V)}},v=()=>{const l=n.value.value.length;a.isInputed=!!l,a.count=l},k=()=>{clearTimeout(t),m(),a.isFocus=!0,a.isInputed=!!n.value.value.length},I=()=>{clearTimeout(t),m(),t=setTimeout(()=>{a.isFocus=!1,clearTimeout(t)},50)},L=l=>{const{value:d}=l.target;a.val=d,o("update:modelValue",d)},h=()=>{m()},B=()=>{m(),v()};return j(()=>{a.val=e.modelValue||e.defaultValue||""}),E(()=>{m(),v()}),z(()=>{m()}),A(()=>e.modelValue,l=>{a.val=l,H(()=>{v()})}),T("formListItem",{helpClass:p.form__help}),T("basicTextarea",{helpClass:y.input__help,invalidClass:y.input__invalid}),{formListStyleModule:p,state:a,input:n,customClassNames:g,isBottom:N,getInputElement:S,focus:b,labelClick:M,onfocusin:k,onInput:L,onKeydown:h,onKeyup:B,onfocusout:I}}},st=["value","disabled"],lt={key:0};function it(e,s,o,t,y,p){const a=D("FormInvalid");return u(),r("div",{class:i([t.formListStyleModule.form__item,{[t.formListStyleModule["form__item--focus"]]:t.state.isFocus,[t.formListStyleModule["form__item--inputed"]]:t.state.isInputed,[t.formListStyleModule["form__item--error"]]:o.error,[t.formListStyleModule["form__item--disabled"]]:o.disabled},e.$style.input,{[e.$style["input--focus"]]:t.state.isFocus,[e.$style["input--inputed"]]:t.state.isInputed,[e.$style["input--error"]]:o.error,[e.$style["input--disabled"]]:o.disabled},t.customClassNames.item])},[_("dt",{class:i([t.formListStyleModule.form__title,e.$style.input__title,t.customClassNames.title]),onClick:s[0]||(s[0]=(...n)=>t.labelClick&&t.labelClick(...n))},[_("span",{class:i([t.formListStyleModule["form__title-text"],t.customClassNames.titleText])},f(o.titleText),3),o.titleOptionalText?(u(),r("span",{key:0,class:i([t.formListStyleModule["form__title-optional"],t.customClassNames.titleOptionalText])},f(o.titleOptionalText),3)):c("",!0),o.require?(u(),r("span",{key:1,class:i([t.formListStyleModule.form__require,t.customClassNames.require])},[_("span",{class:i([t.formListStyleModule["form__require-text"],t.customClassNames.requireText])}," (필수) ",2)],2)):c("",!0)],2),_("dd",{class:i([t.formListStyleModule.form__contents,e.$style.input__contents,t.customClassNames.contents])},[G(a,{error:o.error},{default:J(()=>[_("div",{class:i([e.$style.input__input,t.customClassNames.input])},[_("textarea",P({ref:"input"},e.$attrs,{value:o.modelValue||t.state.val,disabled:o.disabled,onInput:s[1]||(s[1]=(...n)=>t.onInput&&t.onInput(...n)),onFocusin:s[2]||(s[2]=(...n)=>t.onfocusin&&t.onfocusin(...n)),onFocusout:s[3]||(s[3]=(...n)=>t.onfocusout&&t.onfocusout(...n)),onKeydown:s[4]||(s[4]=(...n)=>t.onKeydown&&t.onKeydown(...n)),onKeyup:s[5]||(s[5]=(...n)=>t.onKeyup&&t.onKeyup(...n))}),null,16,st)],2),t.isBottom||o.count?(u(),r("div",{key:0,class:i([e.$style.input__bottom,t.customClassNames.bottom])},[t.isBottom?(u(),r("div",{key:0,class:i([e.$style["input__bottom-left"],t.customClassNames.bottom])},[U(e.$slots,"bottom")],2)):c("",!0),o.count?(u(),r("div",{key:1,class:i([e.$style.input__count,t.customClassNames.bottom])},[_("span",{class:i([e.$style["input__count-current"],t.customClassNames.countCurrent])},f(t.state.count),3),o.maxlength?(u(),r("span",lt,"/"+f(o.maxlength),1)):c("",!0)],2)):c("",!0)],2)):c("",!0)]),_:3},8,["error"])],2)],2)}const at={$style:nt},_t=F(ot,[["render",it],["__cssModules",at]]);export{_t as B};
