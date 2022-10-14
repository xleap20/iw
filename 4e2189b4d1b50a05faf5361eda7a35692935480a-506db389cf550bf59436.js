"use strict";(self.webpackChunkinweb=self.webpackChunkinweb||[]).push([[993],{4802:function(e,r,t){t.d(r,{Z:function(){return se}});var n=t(4942),o=t(5987),c=t(5900),i=t.n(c),a=t(7294),s=t(5210),l=t(9541),u=t(3164),f=t(9406),p=t(1831);var y,O=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((function(e){return null!=e})).reduce((function(e,r){if("function"!=typeof r)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?r:function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];e.apply(this,n),r.apply(this,n)}}),null)},b=t(9059),v=t(558),d=t(5893),j=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"];function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var P={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function h(e,r){var t=r["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],n=P[e];return t+parseInt((0,u.Z)(r,n[0]),10)+parseInt((0,u.Z)(r,n[1]),10)}var w=(y={},(0,n.Z)(y,f.Wj,"collapse"),(0,n.Z)(y,f.Ix,"collapsing"),(0,n.Z)(y,f.d0,"collapsing"),(0,n.Z)(y,f.cn,"collapse show"),y),x={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:h},E=a.forwardRef((function(e,r){var t=e.onEnter,n=e.onEntering,c=e.onEntered,s=e.onExit,l=e.onExiting,u=e.className,f=e.children,y=e.dimension,m=void 0===y?"height":y,P=e.getDimensionValue,x=void 0===P?h:P,E=(0,o.Z)(e,j),D="function"==typeof m?m():m,N=(0,a.useMemo)((function(){return O((function(e){e.style[D]="0"}),t)}),[D,t]),Z=(0,a.useMemo)((function(){return O((function(e){var r="scroll".concat(D[0].toUpperCase()).concat(D.slice(1));e.style[D]="".concat(e[r],"px")}),n)}),[D,n]),C=(0,a.useMemo)((function(){return O((function(e){e.style[D]=null}),c)}),[D,c]),S=(0,a.useMemo)((function(){return O((function(e){e.style[D]="".concat(x(D,e),"px"),(0,b.Z)(e)}),s)}),[s,x,D]),k=(0,a.useMemo)((function(){return O((function(e){e.style[D]=null}),l)}),[D,l]);return(0,d.jsx)(v.Z,g(g({ref:r,addEndListener:p.Z},E),{},{"aria-expanded":E.role?E.in:null,onEnter:N,onEntering:Z,onEntered:C,onExit:S,onExiting:k,childRef:f.ref,children:function(e,r){return a.cloneElement(f,g(g({},r),{},{className:i()(u,f.props.className,w[e],"width"===D&&"collapse-horizontal")}))}}))}));E.defaultProps=x;var D=E;function N(e,r){return Array.isArray(e)?e.includes(r):e===r}var Z=a.createContext({});Z.displayName="AccordionContext";var C=Z,S=["as","bsPrefix","className","children","eventKey"];function k(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function K(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?k(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var A=a.forwardRef((function(e,r){var t=e.as,n=void 0===t?"div":t,c=e.bsPrefix,s=e.className,u=e.children,f=e.eventKey,p=(0,o.Z)(e,S),y=(0,a.useContext)(C).activeEventKey;return c=(0,l.vE)(c,"accordion-collapse"),(0,d.jsx)(D,K(K({ref:r,in:N(y,f)},p),{},{className:i()(s,c),children:(0,d.jsx)(n,{children:a.Children.only(u)})}))}));A.displayName="AccordionCollapse";var R=A,I=a.createContext({eventKey:""});I.displayName="AccordionItemContext";var M=I,B=["as","bsPrefix","className"];function V(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function H(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?V(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var L=a.forwardRef((function(e,r){var t=e.as,n=void 0===t?"div":t,c=e.bsPrefix,s=e.className,u=(0,o.Z)(e,B);c=(0,l.vE)(c,"accordion-body");var f=(0,a.useContext)(M).eventKey;return(0,d.jsx)(R,{eventKey:f,children:(0,d.jsx)(n,H(H({ref:r},u),{},{className:i()(s,c)}))})}));L.displayName="AccordionBody";var T=L,U=t(2982),z=["as","bsPrefix","className","onClick"];function W(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function q(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?W(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var F=a.forwardRef((function(e,r){var t=e.as,n=void 0===t?"button":t,c=e.bsPrefix,s=e.className,u=e.onClick,f=(0,o.Z)(e,z);c=(0,l.vE)(c,"accordion-button");var p=(0,a.useContext)(M).eventKey,y=function(e,r){var t=(0,a.useContext)(C),n=t.activeEventKey,o=t.onSelect,c=t.alwaysOpen;return function(t){var i=e===n?null:e;c&&(i=Array.isArray(n)?n.includes(e)?n.filter((function(r){return r!==e})):[].concat((0,U.Z)(n),[e]):[e]),null==o||o(i,t),null==r||r(t)}}(p,u),O=(0,a.useContext)(C).activeEventKey;return"button"===n&&(f.type="button"),(0,d.jsx)(n,q(q({ref:r,onClick:y},f),{},{"aria-expanded":p===O,className:i()(s,c,!N(O,p)&&"collapsed")}))}));F.displayName="AccordionButton";var G=F,J=["as","bsPrefix","className","children","onClick"];function Q(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function X(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Q(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Y=a.forwardRef((function(e,r){var t=e.as,n=void 0===t?"h2":t,c=e.bsPrefix,a=e.className,s=e.children,u=e.onClick,f=(0,o.Z)(e,J);return c=(0,l.vE)(c,"accordion-header"),(0,d.jsx)(n,X(X({ref:r},f),{},{className:i()(a,c),children:(0,d.jsx)(G,{onClick:u,children:s})}))}));Y.displayName="AccordionHeader";var $=Y,_=["as","bsPrefix","className","eventKey"];function ee(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function re(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ee(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ee(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var te=a.forwardRef((function(e,r){var t=e.as,n=void 0===t?"div":t,c=e.bsPrefix,s=e.className,u=e.eventKey,f=(0,o.Z)(e,_);c=(0,l.vE)(c,"accordion-item");var p=(0,a.useMemo)((function(){return{eventKey:u}}),[u]);return(0,d.jsx)(M.Provider,{value:p,children:(0,d.jsx)(n,re(re({ref:r},f),{},{className:i()(s,c)}))})}));te.displayName="AccordionItem";var ne=te,oe=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"];function ce(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function ie(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ce(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ce(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ae=a.forwardRef((function(e,r){var t=(0,s.Ch)(e,{activeKey:"onSelect"}),n=t.as,c=void 0===n?"div":n,u=t.activeKey,f=t.bsPrefix,p=t.className,y=t.onSelect,O=t.flush,b=t.alwaysOpen,v=(0,o.Z)(t,oe),j=(0,l.vE)(f,"accordion"),m=(0,a.useMemo)((function(){return{activeEventKey:u,onSelect:y,alwaysOpen:b}}),[u,y,b]);return(0,d.jsx)(C.Provider,{value:m,children:(0,d.jsx)(c,ie(ie({ref:r},v),{},{className:i()(p,j,O&&"".concat(j,"-flush"))}))})}));ae.displayName="Accordion";var se=Object.assign(ae,{Button:G,Collapse:R,Item:ne,Header:$,Body:T})}}]);
//# sourceMappingURL=4e2189b4d1b50a05faf5361eda7a35692935480a-506db389cf550bf59436.js.map