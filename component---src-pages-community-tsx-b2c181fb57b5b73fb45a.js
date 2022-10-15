"use strict";(self.webpackChunkinweb=self.webpackChunkinweb||[]).push([[619],{4093:function(e,t,r){r.d(t,{Z:function(){return R}});var n=r(4942),a=r(5987),c=r(5900),o=r.n(c),i=r(7294),s=r(9541),l=r(8870),d=r(6132),f=r(5893),p=["bsPrefix","className","variant","as"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var u=i.forwardRef((function(e,t){var r=e.bsPrefix,c=e.className,i=e.variant,l=e.as,d=void 0===l?"img":l,u=(0,a.Z)(e,p),b=(0,s.vE)(r,"card-img");return(0,f.jsx)(d,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,className:o()(i?"".concat(b,"-").concat(i):b,c)},u))}));u.displayName="CardImg";var b=u,g=i.createContext(null);g.displayName="CardHeaderContext";var h=g,v=["bsPrefix","className","as"];function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=i.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.as,l=void 0===c?"div":c,d=(0,a.Z)(e,v),p=(0,s.vE)(r,"card-header"),m=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:p}}),[p]);return(0,f.jsx)(h.Provider,{value:m,children:(0,f.jsx)(l,x(x({ref:t},d),{},{className:o()(n,p)}))})}));O.displayName="CardHeader";var w=O,E=["bsPrefix","className","bg","text","border","body","children","as"];function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=(0,d.Z)("h5"),P=(0,d.Z)("h6"),C=(0,l.Z)("card-body"),S=(0,l.Z)("card-title",{Component:N}),_=(0,l.Z)("card-subtitle",{Component:P}),k=(0,l.Z)("card-link",{Component:"a"}),D=(0,l.Z)("card-text",{Component:"p"}),A=(0,l.Z)("card-footer"),H=(0,l.Z)("card-img-overlay"),I=i.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.bg,i=e.text,l=e.border,d=e.body,p=e.children,m=e.as,u=void 0===m?"div":m,b=(0,a.Z)(e,E),g=(0,s.vE)(r,"card");return(0,f.jsx)(u,Z(Z({ref:t},b),{},{className:o()(n,g,c&&"bg-".concat(c),i&&"text-".concat(i),l&&"border-".concat(l)),children:d?(0,f.jsx)(C,{children:p}):p}))}));I.displayName="Card",I.defaultProps={body:!1};var R=Object.assign(I,{Img:b,Title:S,Subtitle:_,Body:C,Link:k,Text:D,Header:w,Footer:A,ImgOverlay:H})},6132:function(e,t,r){var n=r(4942),a=r(7294),c=r(5900),o=r.n(c),i=r(5893);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){return a.forwardRef((function(t,r){return(0,i.jsx)("div",l(l({},t),{},{ref:r,className:o()(t.className,e)}))}))}},1528:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=void 0===t?n.createElement(n.Fragment,null):t,a=e.imgUrl,c=void 0===a?"":a,o=e.height,i=void 0===o?"100px":o,s=e.width,l=void 0===s?"100px":s;return n.createElement("div",{className:"d-flex",style:{backgroundImage:"url("+c+")",height:i,width:l,position:"relative",borderTopRightRadius:"4px",borderTopLeftRadius:"4px"}},r)}},7776:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.extraClass,a=void 0===r?"":r;return n.createElement("div",{className:"card "+a},t)}},5539:function(e,t,r){var n=r(7294),a=r(3494).default.div.withConfig({displayName:"postpad__Slip",componentId:"sc-1bt55e1-0"})(["width:4px;align-self:stretch;display:flex;margin-right:10px;"]);t.Z=function(e){var t=e.children,r=e.extraClass,c=void 0===r?"":r,o=e.colorClass,i=void 0===o?"":o;return n.createElement("div",{className:"d-flex flex-row  "+c},n.createElement(a,{className:i}),n.createElement("div",null,t))}},9311:function(e,t,r){r.r(t),r.d(t,{Head:function(){return E},default:function(){return w}});var n=r(7294),a=r(439),c=r(7776),o=r(1528),i=r(3494),s=r(7442),l=r(5539),d=r(3639),f=r(994),p=r(7408),m=r(6594),u=r(4802),b=r(4093),g=i.default.div.withConfig({displayName:"dashboard__Cover",componentId:"sc-dn4gtr-0"})(["height:14px;width:100%;position:absolute;bottom:0px;"]),h=i.default.div.withConfig({displayName:"dashboard__TrustScore",componentId:"sc-dn4gtr-1"})(["width:103px;position:absolute;right:0px;top:18px;"]),v=i.default.div.withConfig({displayName:"dashboard__PolygonHolder",componentId:"sc-dn4gtr-2"})(["display:flex;flex-wrap:wrap;justify-content:center;flex:1;div,img{align-self:flex-end;}z-index:1;"]),y=i.default.div.withConfig({displayName:"dashboard__Member",componentId:"sc-dn4gtr-3"})(["display:flex;padding:10px;"]),x=i.default.div.withConfig({displayName:"dashboard__Sideway",componentId:"sc-dn4gtr-4"})(["writing-mode:vertical-rl;text-orientation:sideways-right;padding:7px;margin-right:13px;transform:rotate(180deg);"]),O=function(e){var t=e.mode,r=void 0===t?"personal":t;return n.createElement(d.Z,{className:"bg-brand-1 color-white  overflow-hidden"},n.createElement(f.Z,{className:"g-5"},n.createElement(p.Z,{span:12},n.createElement(o.Z,{height:"220px",width:"100%",imgUrl:"https://scontent.fsin10-1.fna.fbcdn.net/v/t1.6435-9/56561445_103372110858082_5095361363874676736_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=kLg7knADjswAX-Wi84K&tn=B6O4VRB7-8be7VVe&_nc_ht=scontent.fsin10-1.fna&oh=00_AT8cAnjvV4ARkdw0OJxFbMEqfCq-7NSX-Ii9E5tsHINlvg&oe=63395F14"},n.createElement(n.Fragment,null,n.createElement(h,null,n.createElement(l.Z,{colorClass:"bg-brand-3",extraClass:"bg-brand-1 color-brand-1"},n.createElement("div",{className:"fs-6 color-brand-2"},"Trust Score:"),n.createElement("div",{className:"fs-6 color-brand-2"},"99.80%"))),n.createElement(v,null,n.createElement("div",{className:"bg-white polygon",style:{padding:"8px",height:"136px",width:"136px"}},n.createElement("img",{src:"https://ae01.alicdn.com/kf/Sfc644e9f40c747c09bf5325331d55cdbu/SiLu-Zhao-Hairpins-Sweet-Hair-Clips-Shiny-Barrettes-Slid-Clip-Fashion-Hair-Accessories.jpg",style:{height:"120px",width:"120px"},className:"avatar polygon"})))),n.createElement(g,{className:"bg-brand-1"})))),"personal"===r&&n.createElement(f.Z,{className:"g-2  color-white d-flex flex-row"},n.createElement(p.Z,null,n.createElement(b.Z,{className:"p-3  bg-brand-4  text-center d-flex flex-row flex-grow-1  justify-content-between"},n.createElement("div",null,"Rose"),n.createElement("div",{className:"fs-6  fw-light"},"@rose"),n.createElement("div",{className:"fs-6  fw-light"},"this is a")))),n.createElement(f.Z,{className:"g-2  color-white d-flex flex-row"},n.createElement(p.Z,{className:"d-flex",xs:3},n.createElement(u.Z,{defaultActiveKey:"0",className:"w-100 mt-2 b-0"},[{},{}].map((function(e,t){return n.createElement(u.Z.Item,{eventKey:""+t},n.createElement(u.Z.Header,null,n.createElement(x,{className:"bg-brand-7 fs-6"},"NFT"),"Azuki"),n.createElement(u.Z.Body,null,n.createElement(m.Z,{variant:"brand-1 color-white"},n.createElement("i",{className:"bi-discord"})," Discord"),n.createElement(m.Z,{variant:"primary"},n.createElement("i",{className:"bi-twitter"})," Twitter")))})))),n.createElement(p.Z,{className:"d-flex flex-column",xs:6},n.createElement(c.Z,{extraClass:"bg-brand-4 p-3 w-100 d-flex flex-grow-1 mt-2"},"Events Last three transaction",n.createElement(s.Z,null,[{},{},{}].map((function(e){return n.createElement(b.Z,{className:"border-0 color-brand-1",style:{width:"18rem"}},n.createElement(b.Z.Img,{style:{height:"130px"},variant:"top",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdyVNr_nMnCxAXcCyeZJhWYcx1_hKoyuC9hA&usqp=CAU"}),n.createElement(b.Z.Title,null,n.createElement("div",{className:"fs-6"},"Shan Yi Chun")))})))),n.createElement(c.Z,{extraClass:"bg-brand-4 flex-grow-1  mt-2"},"Events",n.createElement(s.Z,null,[{},{},{}].map((function(e){return n.createElement(b.Z,{className:"border-0 color-brand-1",style:{width:"18rem"}},n.createElement(b.Z.Img,{style:{height:"118px"},variant:"top",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdyVNr_nMnCxAXcCyeZJhWYcx1_hKoyuC9hA&usqp=CAU"}))}))))),n.createElement(p.Z,{className:"d-flex",xs:3},n.createElement(c.Z,{extraClass:"bg-brand-4 p-3 w-100 mt-2"},"Team Members",[{},{},{},{},{},{},{}].map((function(e,t){return n.createElement(l.Z,{colorClass:"bg-brand-"+(t+2),extraClass:"bg-brand-1  color-brand-2 mt-2"},n.createElement(y,null,n.createElement("img",{src:"https://ae01.alicdn.com/kf/Sfc644e9f40c747c09bf5325331d55cdbu/SiLu-Zhao-Hairpins-Sweet-Hair-Clips-Shiny-Barrettes-Slid-Clip-Fashion-Hair-Accessories.jpg",style:{height:"36px",width:"36px"},className:"avatar circle"}),n.createElement("div",null," Roseee")))}))))))},w=function(){return n.createElement(a.Z,null,n.createElement(O,{mode:"community"}))},E=function(){return n.createElement("title",null,"Home Page")}},7442:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(7294),a=r(2982),c=r(4942),o=r(5987),i=r(5900),s=r.n(i),l=r(9541),d=r(885);function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.Hz,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.cs,n=[];return Object.entries(e).forEach((function(e){var a=(0,d.Z)(e,2),c=a[0],o=a[1];null!=o&&("object"==typeof o?t.forEach((function(e){var t=o[e];if(null!=t){var a=e!==r?"-".concat(e):"";n.push("".concat(c).concat(a,"-").concat(t))}})):n.push("".concat(c,"-").concat(o)))})),n}var p=r(5893),m=["as","bsPrefix","className","direction","gap"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=n.forwardRef((function(e,t){var r=e.as,n=void 0===r?"div":r,c=e.bsPrefix,i=e.className,d=e.direction,u=e.gap,g=(0,o.Z)(e,m);c=(0,l.vE)(c,"horizontal"===d?"hstack":"vstack");var h=(0,l.pi)(),v=(0,l.zG)();return(0,p.jsx)(n,b(b({},g),{},{ref:t,className:s().apply(void 0,[i,c].concat((0,a.Z)(f({gap:u,breakpoints:h,minBreakpoint:v}))))}))}));g.displayName="Stack";var h=g,v=function(e){var t=e.children;e.extraClass,e.items;return n.createElement(h,{direction:"horizontal",gap:3},t)}}}]);
//# sourceMappingURL=component---src-pages-community-tsx-b2c181fb57b5b73fb45a.js.map