import{_ as f,v as h,i as S,c as r,J as C,g as c,d as m,e as l,m as N,n as a,h as d,x as T,w as v,t as B,y as E,z as k,A as M,R as w}from"./index-09d20b4d.js";const R="_banner_vyd32_1",j="_banner__contents_vyd32_10",x="_banner__thumb_vyd32_16",z="_banner__button_vyd32_31",A={banner:R,banner__contents:j,banner__thumb:x,"banner__thumb-img":"_banner__thumb-img_vyd32_22",banner__button:z,"banner__button-text":"_banner__button-text_vyd32_62"},L="/pub/hanacapital-dt-rebuild/pc/",i=()=>({wrap:"",contents:"",thumb:"",thumbImg:"",button:"",buttonText:""}),p={inheritAttrs:!1,props:{tagName:{Type:String,default:"button"},type:{Type:String,default:"button"},classNames:{Type:Object,default(){return i()}},buttonText:{Type:String,default:"상세보기"},bgColor:{Type:String,default:null},thumb:{Type:String,default:null},action:{Type:Boolean,default:!0},disabled:{Type:Boolean,default:!1},disabledStyle:{Type:Boolean,default:!1}},setup(e){const o=h("basicBannerSlideStyleModule",{}),n=S({isError:!1}),t=r(()=>{const{tagName:s}=e;return s==="RouterLink"?w:s}),u=r(()=>{const{tagName:s,type:g}=e;return s==="button"?g:null}),_=r(()=>{const{classNames:s}=e;return Object.assign(i(),s)}),b=r(()=>{const{thumb:s=""}=e;return s.match(/^\//)?L+s.replace(/^\//,""):s}),y=()=>{n.isError=!0};return C(()=>e.thumb,()=>{n.isError=!1}),{slideStyleModule:o,state:n,setComponent:t,setType:u,customClassNames:_,imgSrc:b,onError:y}}},D=["src"];function I(e,o,n,t,u,_){return c(),m("div",{class:a([e.$style.banner,{[e.$style["banner--disabled"]]:n.disabled||n.disabledStyle},t.slideStyleModule.banner__block,t.customClassNames.wrap]),style:M({backgroundColor:n.bgColor})},[l("div",{class:a([e.$style.banner__contents,t.customClassNames.contents])},[N(e.$slots,"default")],2),n.thumb?(c(),m("div",{key:0,class:a([e.$style.banner__thumb,t.slideStyleModule.banner__thumb,t.customClassNames.thumb])},[l("div",{class:a([e.$style["banner__thumb-img"],t.slideStyleModule["banner__thumb-img"],{"is-error":t.state.isError},t.customClassNames.thumbImg])},[l("img",{src:t.imgSrc,onError:o[0]||(o[0]=(...b)=>t.onError&&t.onError(...b))},null,40,D)],2)],2)):d("",!0),!n.disabled&&n.action?(c(),T(k(t.setComponent),E({key:1},e.$attrs,{type:t.setType,class:[e.$style.banner__button,t.customClassNames.button]}),{default:v(()=>[l("span",{class:a([e.$style["banner__button-text"],t.customClassNames.buttonText])},B(n.buttonText),3)]),_:1},16,["type","class"])):d("",!0)],6)}const O={$style:A},J=f(p,[["render",I],["__cssModules",O]]);export{J as B};
