import{P as f}from"./PageContents-f8dfd722.js";import{L as b}from"./LocationBar-c816b7b5.js";import{P as B,a as w}from"./PageTitle-af1154e1.js";import{B as y}from"./BasicButton-9f8538fd.js";import{B as $,a as g}from"./ButtonListItem-7021a724.js";import{T as z}from"./TextButton-e13cf57f.js";import{I as P}from"./download-small-1056c15e.js";import{_ as L,l as e,x as v,w as l,g as C,q as s,B as n,e as o,n as a}from"./index-89ea90fd.js";const I={"board-detail":"_board-detail_zahn1_1","board-detail__head":"_board-detail__head_zahn1_5","board-detail__head-cell":"_board-detail__head-cell_zahn1_10","board-detail__head-cell--title":"_board-detail__head-cell--title_zahn1_19","board-detail__title":"_board-detail__title_zahn1_23","board-detail__contents":"_board-detail__contents_zahn1_31","board-detail__foot":"_board-detail__foot_zahn1_38","download-list__list":"_download-list__list_zahn1_43","download-list__item":"_download-list__item_zahn1_48","download-list__icon":"_download-list__icon_zahn1_55"},T={components:{PageContents:f,LocationBar:b,PageHead:B,PageTitle:w,BasicButton:y,ButtonList:$,ButtonListItem:g,TextButton:z,IconDownloadSmall:P}};function N(t,k,D,H,V,q){const _=e("LocationBar"),d=e("PageTitle"),i=e("PageHead"),r=e("IconDownloadSmall"),c=e("TextButton"),m=e("BasicButton"),p=e("ButtonListItem"),u=e("ButtonList"),h=e("PageContents");return C(),v(h,{size:"wide"},{head:l(()=>[s(_,{data:[{text:"홈",to:"/main/home"},{text:"회사소개",to:"/"},{text:"지속가능경영",to:"/"}]})]),default:l(()=>[s(i,null,{default:l(()=>[s(d,null,{default:l(()=>[n("지속가능경영")]),_:1})]),_:1}),o("div",{class:a(t.$style["board-detail"])},[o("div",{class:a(t.$style["board-detail__head"])},[o("div",{class:a([t.$style["board-detail__head-cell"],t.$style["board-detail__head-cell--title"]])},[o("h3",{class:a(t.$style["board-detail__title"])},"게시물 제목",2)],2),o("div",{class:a(t.$style["board-detail__head-cell"])},"2022.08.30",2),o("div",{class:a(t.$style["board-detail__head-cell"])},"23",2)],2),o("section",{class:a(t.$style["board-detail__contents"])}," // 게시물 내용 노출 ",2),o("div",{class:a(t.$style["board-detail__foot"])},[o("div",{class:a(t.$style["download-list"])},[o("ul",{class:a(t.$style["download-list__list"])},[o("li",{class:a(t.$style["download-list__item"])},[s(c,{iconSize:"large",textSize:"regular",tagName:"a",href:"/foo/bar.pdf",download:""},{rightIcon:l(()=>[s(r,{class:a(t.$style["download-list__icon"])},null,8,["class"])]),default:l(()=>[n(" 첨부파일.pdf ")]),_:1})],2)],2)],2)],2)],2),s(u,{wrap:!0,align:"center",classNames:{wrap:"row-margin-block-small"}},{default:l(()=>[s(p,null,{default:l(()=>[s(m,{line:!0,theme:"quaternary",tagName:"RouterLink",to:"/company/Company_P01_p007"},{default:l(()=>[n("목록")]),_:1})]),_:1})]),_:1})]),_:1})}const S={$style:I},J=L(T,[["render",N],["__cssModules",S]]);export{J as default};
