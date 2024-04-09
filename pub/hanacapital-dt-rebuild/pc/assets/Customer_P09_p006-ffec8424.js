import{_ as p,E as h,o as y,b as N,l as u,x as b,w as e,g as B,q as a,B as t,e as s,n as i}from"./index-47f0144b.js";import{P as I}from"./PageContents-eaa89b0e.js";import{L}from"./LocationBar-a33719b5.js";import{P as $,a as z}from"./PageTitle-32f3e12d.js";import{B as k}from"./BasicButton-5b10203b.js";import{B as A,a as R}from"./ButtonListItem-c3f0c6e2.js";import{T as P}from"./TextButton-f2b85444.js";import{I as v}from"./download-small-30aa1490.js";import{I as q}from"./right-arrow-6ff6aa3f.js";const F={"board-detail":"_board-detail_zahn1_1","board-detail__head":"_board-detail__head_zahn1_5","board-detail__head-cell":"_board-detail__head-cell_zahn1_10","board-detail__head-cell--title":"_board-detail__head-cell--title_zahn1_19","board-detail__title":"_board-detail__title_zahn1_23","board-detail__contents":"_board-detail__contents_zahn1_31","board-detail__foot":"_board-detail__foot_zahn1_38","download-list__list":"_download-list__list_zahn1_43","download-list__item":"_download-list__item_zahn1_48","download-list__icon":"_download-list__icon_zahn1_55"},C={components:{PageContents:I,LocationBar:L,PageHead:$,PageTitle:z,BasicButton:k,ButtonList:A,ButtonListItem:R,TextButton:P,IconDownloadSmall:v,IconRightArrow:q},setup(){const o={ui:{header:h()}};y(()=>{o.ui.header.setActive(()=>"customer")}),N(()=>{o.ui.header.setActive()})}};function S(o,H,D,M,V,U){const m=u("LocationBar"),f=u("PageTitle"),g=u("PageHead"),r=u("BasicButton"),l=u("ButtonListItem"),n=u("ButtonList"),_=u("IconRightArrow"),d=u("TextButton"),c=u("IconDownloadSmall"),w=u("PageContents");return B(),b(w,{size:"wide"},{head:e(()=>[a(m,{data:[{text:"홈",to:"/main/home"},{text:"고객센터",to:"/"},{text:"금융소비자보호"},{text:"금융소비자보호공시",to:"/"}]})]),default:e(()=>[a(g,null,{default:e(()=>[a(f,null,{default:e(()=>[t("금융소비자보호공시")]),_:1})]),_:1}),s("div",{class:i(o.$style["board-detail"])},[s("div",{class:i(o.$style["board-detail__head"])},[s("div",{class:i([o.$style["board-detail__head-cell"],o.$style["board-detail__head-cell--title"]])},[s("h3",{class:i(o.$style["board-detail__title"])},"게시물 제목",2)],2),s("div",{class:i(o.$style["board-detail__head-cell"])},"2022.08.30",2)],2),s("section",{class:i(o.$style["board-detail__contents"])},[t(" // 게시물 내용 노출 "),a(n,{wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:e(()=>[a(l,null,{default:e(()=>[a(r,{tagName:"RouterLink",to:""},{default:e(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),a(n,{col:"4",wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:e(()=>[a(l,null,{default:e(()=>[a(r,{tagName:"RouterLink",to:""},{default:e(()=>[t("버튼")]),_:1})]),_:1}),a(l,null,{default:e(()=>[a(r,{tagName:"RouterLink",to:""},{default:e(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),a(n,{col:"4",wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:e(()=>[a(l,null,{default:e(()=>[a(r,{tagName:"RouterLink",to:""},{default:e(()=>[t("버튼")]),_:1})]),_:1}),a(l,null,{default:e(()=>[a(r,{tagName:"RouterLink",to:""},{default:e(()=>[t("버튼")]),_:1})]),_:1}),a(l,null,{default:e(()=>[a(r,{tagName:"RouterLink",to:""},{default:e(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),a(n,{wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:e(()=>[a(l,null,{default:e(()=>[a(r,{theme:"tertiary"},{default:e(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),a(n,{wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:e(()=>[a(l,null,{default:e(()=>[a(r,{theme:"secondary"},{default:e(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),a(n,{wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:e(()=>[a(l,null,{default:e(()=>[a(r,{theme:"quaternary"},{default:e(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),a(n,{wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:e(()=>[a(l,null,{default:e(()=>[a(r,{theme:"quaternary-green"},{default:e(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),a(n,{wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:e(()=>[a(l,null,{default:e(()=>[a(r,{theme:"quaternary-blue"},{default:e(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),a(n,{wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:e(()=>[a(l,null,{default:e(()=>[a(r,{theme:"quaternary-navy"},{default:e(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),a(n,{wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:e(()=>[a(l,null,{default:e(()=>[a(r,{line:!0,theme:"quaternary-green",tagName:"RouterLink",to:""},{default:e(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),a(n,{wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:e(()=>[a(l,null,{default:e(()=>[a(r,{line:!0,theme:"quaternary-blue",tagName:"RouterLink",to:""},{default:e(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),a(n,{wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:e(()=>[a(l,null,{default:e(()=>[a(r,{line:!0,theme:"quaternary",tagName:"RouterLink",to:""},{default:e(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),a(n,{wrap:!0,align:"center",classNames:{wrap:"row-margin-container-medium"}},{default:e(()=>[a(l,null,{default:e(()=>[a(r,{line:!0,theme:"quaternary-navy",tagName:"RouterLink",to:""},{default:e(()=>[t("버튼")]),_:1})]),_:1})]),_:1}),a(n,{wrap:!0,align:"left",classNames:{wrap:"row-margin-container-medium"}},{default:e(()=>[a(l,null,{default:e(()=>[a(d,{theme:"secondary",iconFillAll:!0},{rightIcon:e(()=>[a(_)]),default:e(()=>[t(" 버튼 ")]),_:1})]),_:1})]),_:1}),a(n,{col:"2",wrap:!0,align:"left",classNames:{wrap:"row-margin-container-medium"}},{default:e(()=>[a(l,null,{default:e(()=>[a(d,{theme:"secondary",iconFillAll:!0},{rightIcon:e(()=>[a(_)]),default:e(()=>[t(" 버튼 ")]),_:1})]),_:1}),a(l,null,{default:e(()=>[a(d,{theme:"secondary",iconFillAll:!0},{rightIcon:e(()=>[a(_)]),default:e(()=>[t(" 버튼 ")]),_:1})]),_:1})]),_:1}),a(n,{col:"3",wrap:!0,align:"left",classNames:{wrap:"row-margin-container-medium"}},{default:e(()=>[a(l,null,{default:e(()=>[a(d,{theme:"secondary",iconFillAll:!0},{rightIcon:e(()=>[a(_)]),default:e(()=>[t(" 버튼 ")]),_:1})]),_:1}),a(l,null,{default:e(()=>[a(d,{theme:"secondary",iconFillAll:!0},{rightIcon:e(()=>[a(_)]),default:e(()=>[t(" 버튼 ")]),_:1})]),_:1}),a(l,null,{default:e(()=>[a(d,{theme:"secondary",iconFillAll:!0},{rightIcon:e(()=>[a(_)]),default:e(()=>[t(" 버튼 ")]),_:1})]),_:1})]),_:1}),a(n,{wrap:!0,align:"left",classNames:{wrap:"row-margin-container-medium"}},{default:e(()=>[a(l,null,{default:e(()=>[a(d,{theme:"tertiary",iconFillAll:!0},{rightIcon:e(()=>[a(_)]),default:e(()=>[t(" 버튼 ")]),_:1})]),_:1})]),_:1}),a(n,{wrap:!0,align:"left",classNames:{wrap:"row-margin-container-medium"}},{default:e(()=>[a(l,null,{default:e(()=>[a(d,{class:"color-gray-tertiary",iconFillAll:!0},{rightIcon:e(()=>[a(_)]),default:e(()=>[t(" 버튼 ")]),_:1})]),_:1})]),_:1}),a(n,{wrap:!0,align:"left",classNames:{wrap:"row-margin-container-medium"}},{default:e(()=>[a(l,null,{default:e(()=>[a(d,{class:"color-navy",iconFillAll:!0},{rightIcon:e(()=>[a(_)]),default:e(()=>[t(" 버튼 ")]),_:1})]),_:1})]),_:1})],2),s("div",{class:i(o.$style["board-detail__foot"])},[s("div",{class:i(o.$style["download-list"])},[s("ul",{class:i(o.$style["download-list__list"])},[s("li",{class:i(o.$style["download-list__item"])},[a(d,{iconSize:"large",textSize:"regular",tagName:"a",href:"/foo/bar.pdf",download:""},{rightIcon:e(()=>[a(c,{class:i(o.$style["download-list__icon"])},null,8,["class"])]),default:e(()=>[t(" 첨부파일.pdf ")]),_:1})],2),s("li",{class:i(o.$style["download-list__item"])},[a(d,{iconSize:"large",textSize:"regular",tagName:"a",href:"/foo/bar.pdf",download:""},{rightIcon:e(()=>[a(c,{class:i(o.$style["download-list__icon"])},null,8,["class"])]),default:e(()=>[t(" 첨부파일.pdf ")]),_:1})],2)],2)],2)],2)],2),a(n,{wrap:!0,align:"center",classNames:{wrap:"row-margin-block-small"}},{default:e(()=>[a(l,null,{default:e(()=>[a(r,{line:!0,theme:"quaternary",tagName:"RouterLink",to:"/customer/Customer_P09_p005"},{default:e(()=>[t("목록")]),_:1})]),_:1})]),_:1})]),_:1})}const T={$style:F},X=p(C,[["render",S],["__cssModules",T]]);export{X as default};
