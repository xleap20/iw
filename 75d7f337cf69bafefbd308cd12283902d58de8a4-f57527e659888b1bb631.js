"use strict";(self.webpackChunkinweb=self.webpackChunkinweb||[]).push([[123],{9424:function(e,r,t){var n=t(7294);r.Z=function(e){var r=(0,n.useRef)(e);return(0,n.useEffect)((function(){r.current=e}),[e]),r}},5655:function(e,r,t){t.d(r,{Z:function(){return a}});var n=t(7294),o=t(9424);function a(e){var r=(0,o.Z)(e);return(0,n.useCallback)((function(){return r.current&&r.current.apply(r,arguments)}),[r])}},9223:function(e,r,t){t.d(r,{Z:function(){return o}});var n=t(7294);function o(e){var r=(0,n.useRef)(null);return(0,n.useEffect)((function(){r.current=e})),r.current}},2650:function(e,r,t){t.d(r,{Z:function(){return I}});var n=t(4942),o=t(5987),a=t(5900),c=t.n(a),i=t(7294),s=t(5210),u=t(5655),l=t(885);t(9424);t(9223);var f=void 0!==t.g&&t.g.navigator&&"ReactNative"===t.g.navigator.product;"undefined"!=typeof document||f?i.useLayoutEffect:i.useEffect,new WeakMap;var p=t(1118),b=t(5893),O=["onKeyDown"];var y=i.forwardRef((function(e,r){var t,n=e.onKeyDown,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,O),a=(0,p.FT)(Object.assign({tagName:"a"},o)),c=(0,l.Z)(a,1)[0],i=(0,u.Z)((function(e){c.onKeyDown(e),null==n||n(e)}));return(t=o.href)&&"#"!==t.trim()&&"button"!==o.role?(0,b.jsx)("a",Object.assign({ref:r},o,{onKeyDown:n})):(0,b.jsx)("a",Object.assign({ref:r},o,c,{onKeyDown:i}))}));y.displayName="Anchor";var v,j=y,d=t(9541),w=t(9406),m=t(1831),g=t(9059),h=t(558),P=["className","children","transitionClasses"];function Z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function D(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Z(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var E=(v={},(0,n.Z)(v,w.d0,"show"),(0,n.Z)(v,w.cn,"show"),v),N=i.forwardRef((function(e,r){var t=e.className,n=e.children,a=e.transitionClasses,s=void 0===a?{}:a,u=(0,o.Z)(e,P),l=(0,i.useCallback)((function(e,r){(0,g.Z)(e),null==u.onEnter||u.onEnter(e,r)}),[u]);return(0,b.jsx)(h.Z,D(D({ref:r,addEndListener:m.Z},u),{},{onEnter:l,childRef:n.ref,children:function(e,r){return i.cloneElement(n,D(D({},r),{},{className:c()("fade",t,n.props.className,E[e],s[e])}))}}))}));N.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},N.displayName="Fade";var C=N,k=t(5697),x=t.n(k),R=["className","variant"];function S(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var L={"aria-label":x().string,onClick:x().func,variant:x().oneOf(["white"])},K=i.forwardRef((function(e,r){var t=e.className,a=e.variant,i=(0,o.Z)(e,R);return(0,b.jsx)("button",function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?S(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({ref:r,type:"button",className:c()("btn-close",a&&"btn-close-".concat(a),t)},i))}));K.displayName="CloseButton",K.propTypes=L,K.defaultProps={"aria-label":"Close"};var A=K,F=t(6132),H=t(8870),T=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"];function V(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function B(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?V(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var M=(0,F.Z)("h4");M.displayName="DivStyledAsH4";var W=(0,H.Z)("alert-heading",{Component:M}),q=(0,H.Z)("alert-link",{Component:j}),z={variant:"primary",show:!0,transition:C,closeLabel:"Close alert"},G=i.forwardRef((function(e,r){var t=(0,s.Ch)(e,{show:"onClose"}),n=t.bsPrefix,a=t.show,i=t.closeLabel,l=t.closeVariant,f=t.className,p=t.children,O=t.variant,y=t.onClose,v=t.dismissible,j=t.transition,w=(0,o.Z)(t,T),m=(0,d.vE)(n,"alert"),g=(0,u.Z)((function(e){y&&y(!1,e)})),h=!0===j?C:j,P=(0,b.jsxs)("div",B(B({role:"alert"},h?void 0:w),{},{ref:r,className:c()(f,m,O&&"".concat(m,"-").concat(O),v&&"".concat(m,"-dismissible")),children:[v&&(0,b.jsx)(A,{onClick:g,"aria-label":i,variant:l}),p]}));return h?(0,b.jsx)(h,B(B({unmountOnExit:!0},w),{},{ref:void 0,in:a,children:P})):a?P:null}));G.displayName="Alert",G.defaultProps=z;var I=Object.assign(G,{Link:q,Heading:W})},6132:function(e,r,t){var n=t(4942),o=t(7294),a=t(5900),c=t.n(a),i=t(5893);function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){return o.forwardRef((function(r,t){return(0,i.jsx)("div",u(u({},r),{},{ref:t,className:c()(r.className,e)}))}))}}}]);
//# sourceMappingURL=75d7f337cf69bafefbd308cd12283902d58de8a4-f57527e659888b1bb631.js.map