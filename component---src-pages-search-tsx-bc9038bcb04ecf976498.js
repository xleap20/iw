"use strict";(self.webpackChunkinweb=self.webpackChunkinweb||[]).push([[334],{1118:function(e,t,a){a.d(t,{FT:function(){return i}});var n=a(885),l=a(7294),r=a(5893),c=["as","disabled"];function i(e){var t=e.tagName,a=e.disabled,n=e.href,l=e.target,r=e.rel,c=e.role,i=e.onClick,s=e.tabIndex,o=void 0===s?0:s,m=e.type;t||(t=null!=n||null!=l||null!=r?"a":"button");var u={tagName:t};if("button"===t)return[{type:m||"button",disabled:a},u];var d=function(e){(a||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),a?e.stopPropagation():null==i||i(e)};return"a"===t&&(n||(n="#"),a&&(n=void 0)),[{role:null!=c?c:"button",disabled:void 0,tabIndex:a?void 0:o,href:n,target:"a"===t?l:void 0,"aria-disabled":a||void 0,rel:"a"===t?r:void 0,onClick:d,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),d(e))}},u]}var s=l.forwardRef((function(e,t){var a=e.as,l=e.disabled,s=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,c),o=i(Object.assign({tagName:a,disabled:l},s)),m=(0,n.Z)(o,2),u=m[0],d=m[1].tagName;return(0,r.jsx)(d,Object.assign({},s,u,{ref:t}))}));s.displayName="Button",t.ZP=s},8870:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(4942),l=a(5987),r=a(5900),c=a.n(r),i=/-(.)/g;var s=a(7294),o=a(9541),m=a(5893),u=["className","bsPrefix","as"];function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v=function(e){return e[0].toUpperCase()+(t=e,t.replace(i,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.displayName,n=void 0===a?v(e):a,r=t.Component,i=t.defaultProps,d=s.forwardRef((function(t,a){var n=t.className,i=t.bsPrefix,s=t.as,d=void 0===s?r||"div":s,v=(0,l.Z)(t,u),p=(0,o.vE)(i,e);return(0,m.jsx)(d,f({ref:a,className:c()(n,p)},v))}));return d.defaultProps=i,d.displayName=n,d}},9637:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.items,a=(e.cols,e.TemplateComponent),l=(e.onClick,e.onSearch),r=e.pageSize,c=void 0===r?10:r,i=(e.offset,(0,n.useState)("")),s=i[0],o=i[1];Math.ceil(t.length/c);return n.createElement(n.Fragment,null,n.createElement("div",{className:"container"},n.createElement("div",{className:"row justify-content-center"},n.createElement("div",{className:"col-lg-12"},n.createElement("div",{className:"candidate-list-widgets mb-4"},n.createElement("form",{action:"#"},n.createElement("div",{className:"row g-2"},n.createElement("div",{className:"col-lg-9"},n.createElement("div",{className:"filler-job-form"},n.createElement("i",{className:"uil uil-briefcase-alt"}),n.createElement("input",{type:"text",className:"form-control filter-job-input-box",id:"exampleFormControlInput1",placeholder:"Job, Company name... ",onChange:function(e){o(e.target.value)},onChang:!0}))),n.createElement("div",{className:"col-lg-3"},n.createElement("div",null,n.createElement("a",{href:"javascript:void(0)",onClick:function(){l&&l(s)},className:"btn btn-primary"},n.createElement("i",{className:"uil uil-filter"})," Search")))))))),n.createElement("div",{className:"row align-items-center"},n.createElement("div",{className:"col-lg-8"},n.createElement("div",{className:"mb-3 mb-lg-0"},n.createElement("h6",{className:"fs-16 mb-0"}," ","Showing ",t.length<c?t.length:c," –"," ",t.length<c?t.length:c," of"," ",t.length," results"," ")))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-12"},n.createElement("div",{className:"candidate-list"},t.map((function(e,t){return n.createElement(a,{key:t,data:e})}))))),""))}},2766:function(e,t,a){a.r(t),a.d(t,{Head:function(){return E},default:function(){return b}});var n=a(7294),l=a(2529),r=a(4118),c=a(3639),i=a(994),s=a(7408),o=a(9637),m=a(3652),u=function(e){e.data;var t=e.title,a=e.subtitle1,l=e.subtitle2,r=e.subtitle3,c=e.badges,i=e.hideAvatar,s=e.iconAction;return n.createElement("div",{className:"candidate-list-box card mt-4"},n.createElement("div",{className:"card-body p-4"},n.createElement("div",{className:"row align-items-center"},!i&&n.createElement("div",{className:"col-auto"},n.createElement("div",{className:"candidate-list-images"},n.createElement("a",{href:"javascript:void(0)"},n.createElement("img",{src:"/assets/images/user/img-01.jpg",alt:"",className:"avatar-md img-thumbnail rounded-circle"})))),n.createElement("div",{className:"col-lg-5"},n.createElement("div",{className:"candidate-list-content mt-3 mt-lg-0"},n.createElement("h5",{className:"fs-19 mb-0"},n.createElement("a",{href:"candidate-details.html",className:"primary-link"},t)," "),n.createElement("p",{className:"text-muted mb-2"},a),n.createElement("ul",{className:"list-inline mb-0 text-muted"},n.createElement("li",{className:"list-inline-item"},n.createElement("i",{className:"mdi mdi-map-marker"}),l),n.createElement("li",{className:"list-inline-item"},n.createElement("i",{className:"uil uil-wallet"}),r)))),n.createElement("div",{className:"col-lg-4"},n.createElement("div",{className:"mt-2 mt-lg-0"},c&&c.map((function(e){return n.createElement("span",{className:"badge bg-soft-muted fs-14 mt-1"},null==e?void 0:e.label)}))))),n.createElement("div",{className:"favorite-icon"},s)))},d=a(2650),f=a(7782),v=function(e){var t,a=e.data,l=((0,f.useTranslation)().t,a.get("data")),r=null==l?void 0:l.location.map((function(e){return e.label})).join(", "),c=null==l?void 0:l.tags.map((function(e){return{label:e.label}})),i=null===(t=l.citizenship[0])||void 0===t?void 0:t.label;return n.createElement(u,{title:"Seeking to work in "+r,subtitle1:i,subtitle2:r,subtitle3:(null==l?void 0:l.expectSalary)||"",hideAvatar:!0,badges:c,iconAction:n.createElement(n.Fragment,null,n.createElement("a",{href:(null==l?void 0:l.docUrl)||"#"},n.createElement("i",{className:"bi bi-cloud-download fs-18"})),n.createElement("a",{href:(null==l?void 0:l.docUrl)||"#"},n.createElement("i",{className:"bi bi-send"})))})},p=function(){var e=n.useState([]),t=e[0],a=e[1],l=n.useState(null),u=l[0],p=l[1],b=n.useState(""),E=(b[0],b[1],(0,f.useTranslation)().t),g=n.useContext(m.Z);n.useContext(f.I18nextContext);n.useEffect((function(){g.showLoading(!0),r.c.Cloud.run("searchApplication").then((function(e){a(e),g.showLoading(!1)})),r.c.Cloud.run("getMyProfile").then((function(e){p(!!e)}))}),[]);return n.createElement(c.Z,{className:""},n.createElement("h3",null," ",E("searchapplication")),n.createElement(i.Z,null,n.createElement(s.Z,null,!u&&n.createElement(d.Z,{key:"primary",variant:"primary"},E("searchNotEnabled"),n.createElement("ol",null,!u&&n.createElement("li",null," ",E("noprofile")))))),n.createElement(i.Z,null,u&&n.createElement(s.Z,{className:""},n.createElement(o.Z,{onClick:function(e){},items:t,TemplateComponent:v,onSearch:function(e){return function(e){g.showLoading(!0),r.c.Cloud.run("searchApplication",{queryWord:e}).then((function(e){a(e),g.showLoading(!1)}))}(e)}}))))},b=function(){var e=n.useState([]),t=(e[0],e[1]);(0,f.useTranslation)().t;return n.useEffect((function(){r.c.Cloud.run("searchApplication").then((function(e){t(e)}));var e="/assets/choices.js/public/assets/scripts/choices.min.js",a=document.querySelector('script[src="'+e+'"]');(a=document.createElement("script")).type="application/javascript",a.src=e,a.async=!0,document.body.appendChild(a)}),[]),n.createElement(l.Z,null,n.createElement("section",{className:"section"},n.createElement(p,null)))},E=function(){return n.createElement("title",null,"Home Page")}}}]);
//# sourceMappingURL=component---src-pages-search-tsx-bc9038bcb04ecf976498.js.map