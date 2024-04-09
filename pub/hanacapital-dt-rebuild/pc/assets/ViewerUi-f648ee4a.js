import{B as g}from"./BasicButton-c114d6f6.js";import{g as _,d as l,e as o,_ as h,c as p,l as i,n as t,q as n,w as y,B as N}from"./index-09d20b4d.js";import{I as b,a as C}from"./pagination-next-b75488d6.js";const f={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},x=o("path",{fill:"#15181F",d:"M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"},null,-1),z=o("path",{fill:"#15181F",d:"M11 5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0V5Z"},null,-1),B=[x,z];function j(e,a){return _(),l("svg",f,B)}const I={render:j},$={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},T=o("path",{fill:"#15181F",d:"M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"},null,-1),M=[T];function P(e,a){return _(),l("svg",$,M)}const V={render:P},k="_viewer_t4jhx_1",F="_viewer__body_t4jhx_9",Z="_viewer__bottom_t4jhx_15",H="_viewer__left_t4jhx_24",O="_viewer__right_t4jhx_24",q="_viewer__center_t4jhx_33",A="_viewer__guide_t4jhx_36",E="_viewer__icon_t4jhx_54",U="_viewer__zoom_t4jhx_57",D="_viewer__pagination_t4jhx_57",G={viewer:k,viewer__body:F,viewer__bottom:Z,viewer__left:H,viewer__right:O,viewer__center:q,viewer__guide:A,viewer__icon:E,viewer__zoom:U,viewer__pagination:D,"viewer__pagination-text":"_viewer__pagination-text_t4jhx_57","viewer__zoom-button":"_viewer__zoom-button_t4jhx_61","viewer__zoom-text":"_viewer__zoom-text_t4jhx_98","viewer__pagination-button":"_viewer__pagination-button_t4jhx_104","viewer__pagination-text-item":"_viewer__pagination-text-item_t4jhx_147"},r=()=>({wrap:"",body:"",bottom:"",left:"",center:"",right:"",icon:"",guide:"",zoom:"",zoomButton:"",zoomText:"",pagination:"",paginationButton:"",paginationText:"",paginationTextItem:""}),J={inheritAttrs:!1,components:{BasicButton:g,IconPlus:I,IconMinus:V,IconPrev:b,IconNext:C},props:{classNames:{Type:Object,default(){return r()}}},setup(e){return{customClassNames:p(()=>{const{classNames:c}=e;return Object.assign(r(),c)})}}},K=o("div",{style:{background:"rgba(255, 0, 0, 0.14)",flex:"1","min-height":"0","text-align":"center"}}," 외부 프로그램 영역 ",-1),L=[K];function Q(e,a,c,s,S,W){const m=i("IconMinus"),v=i("IconPlus"),w=i("IconPrev"),u=i("IconNext"),d=i("BasicButton");return _(),l("div",{class:t([e.$style.viewer,s.customClassNames.wrap])},[o("div",{class:t([e.$style.viewer__body,s.customClassNames.body])},L,2),o("div",{class:t([e.$style.viewer__bottom,s.customClassNames.bottom])},[o("div",{class:t([e.$style.viewer__left,s.customClassNames.left])},[o("div",{class:t([e.$style.viewer__zoom,s.customClassNames.zoom])},[o("button",{type:"button",class:t([e.$style["viewer__zoom-button"],s.customClassNames.zoomButton])},[n(m,{class:t([e.$style.viewer__icon,s.customClassNames.icon])},null,8,["class"]),o("span",{class:t([e.$style.viewer__guide,s.customClassNames.guide])},"축소",2)],2),o("div",{class:t([e.$style["viewer__zoom-text"],s.customClassNames.zoomText])}," 100% ",2),o("button",{type:"button",class:t([e.$style["viewer__zoom-button"],s.customClassNames.zoomButton])},[n(v,{class:t([e.$style.viewer__icon,s.customClassNames.icon])},null,8,["class"]),o("span",{class:t([e.$style.viewer__guide,s.customClassNames.guide])},"확대",2)],2)],2)],2),o("div",{class:t([e.$style.viewer__center,s.customClassNames.center])},[o("div",{class:t([e.$style.viewer__pagination,s.customClassNames.pagination])},[o("button",{type:"button",class:t([e.$style["viewer__pagination-button"],s.customClassNames.paginationButton]),disabled:!0},[n(w,{class:t([e.$style.viewer__icon,s.customClassNames.icon])},null,8,["class"]),o("span",{class:t([e.$style.viewer__guide,s.customClassNames.guide])},"이전",2)],2),o("div",{class:t([e.$style["viewer__pagination-text"],s.customClassNames.paginationText])},[o("div",{class:t([e.$style["viewer__pagination-text-item"],s.customClassNames.paginationTextItem])}," 1 ",2),o("div",{class:t([e.$style["viewer__pagination-text-item"],s.customClassNames.paginationTextItem])}," / ",2),o("div",{class:t([e.$style["viewer__pagination-text-item"],s.customClassNames.paginationTextItem])}," 7 ",2)],2),o("button",{type:"button",class:t([e.$style["viewer__pagination-button"],s.customClassNames.paginationButton])},[n(u,{class:t([e.$style.viewer__icon,s.customClassNames.icon])},null,8,["class"]),o("span",{class:t([e.$style.viewer__guide,s.customClassNames.guide])},"다음",2)],2)],2)],2),o("div",{class:t([e.$style.viewer__right,s.customClassNames.right])},[n(d,{size:"small",auto:!0},{default:y(()=>[N("약정하기")]),_:1})],2)],2)],2)}const R={$style:G},se=h(J,[["render",Q],["__cssModules",R]]);export{se as V};
