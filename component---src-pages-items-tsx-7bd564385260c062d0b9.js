"use strict";(self.webpackChunkinweb=self.webpackChunkinweb||[]).push([[382],{9637:function(e,t,n){var a=n(7294),r=n(4802);t.Z=function(e){var t=e.items,n=(e.cols,e.Header),l=e.Body,o=e.onClick;return a.createElement(r.Z,{defaultActiveKey:["0"],alwaysOpen:!0},t.map((function(e,t){return a.createElement(r.Z.Item,{eventKey:t},a.createElement(r.Z.Header,{onClick:function(){return o&&o(e)}}," ",a.createElement(n,{data:e})," "),a.createElement(r.Z.Body,null,a.createElement(l,{data:e})))})))}},2441:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m}});var a=n(7294),r=n(2785),l=n(3639),o=n(994),c=n(7408),u=n(9637),i=n(4118),f=n(4961),s=function(e){var t,n=e.data,r=n.get("data"),l=(null==r?void 0:r.tags)&&(null==r?void 0:r.tags.join(","));return a.createElement("div",{className:"d-flex"},"Looking For "+l,a.createElement("div",null,(t=n.get("createdAt"),"[object Date]"===Object.prototype.toString.call(t)?(0,f.V)(t):"string"==typeof t?t:"object"==typeof t?t.join(","):void 0)," ago"))};t.default=function(){var e=a.useState([]),t=e[0],n=e[1];return a.useEffect((function(){i.Z.Cloud.run("findMineItem").then((function(e){n(e)}))}),[]),a.createElement(r.Z,null,a.createElement(l.Z,{className:""},a.createElement("h3",null,"My Application"),a.createElement(o.Z,null,a.createElement(c.Z,{className:"text-center",onClick:function(){}},a.createElement(u.Z,{items:t,cols:["title","tags"],Header:s})))))};var m=function(){return a.createElement("title",null,"Home Page")}},4961:function(e,t,n){n.d(t,{V:function(){return a}});var a=function(e){var t=Math.floor((new Date-e)/1e3),n=t/31536e3;return n>1?Math.floor(n)+" years":(n=t/2592e3)>1?Math.floor(n)+" months":(n=t/86400)>1?Math.floor(n)+" days":(n=t/3600)>1?Math.floor(n)+" hours":(n=t/60)>1?Math.floor(n)+" minutes":Math.floor(t)+" seconds"}}}]);
//# sourceMappingURL=component---src-pages-items-tsx-7bd564385260c062d0b9.js.map