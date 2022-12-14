"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[3638],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},766:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={},c=void 0,l={unversionedId:"k8s/Downsides of MC Pods",id:"k8s/Downsides of MC Pods",title:"Downsides of MC Pods",description:"MC = multi container",source:"@site/docs/k8s/10-Downsides of MC Pods.md",sourceDirName:"k8s",slug:"/k8s/Downsides of MC Pods",permalink:"/k8s/Downsides of MC Pods",editUrl:"https://github.dev/hamelsmu/notes/blob/master/docs/k8s/10-Downsides of MC Pods.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ambassador Sidecars",permalink:"/k8s/Ambassador Sidecars"},next:{title:"Sharing Processes in MC Pods",permalink:"/k8s/Sharing Processes in MC Pods"}},u={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"MC = multi container"),(0,i.kt)("p",null,"Adding sidecars and init containers adds to the failure modes for your application."),(0,i.kt)("p",null,"You might see ready = 0 if there is a container in a multi-container pod that is failing! "),(0,i.kt)("h1",{id:"restart-conditions"},"Restart Conditions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If a Pod with init containers is replaced, then the new Pod runs all the init containers again. You must ensure your init logic can be run repeatedly."),(0,i.kt)("li",{parentName:"ol"},"If you deploy a change to the init container image(s) for a Pod, that restarts the Pod. Init containers all execute again, and app containers are replaced."),(0,i.kt)("li",{parentName:"ol"},"If you deploy a Pod spec change to the app container image(s), the app containers are replaced, but the init containers are not executed again."),(0,i.kt)("li",{parentName:"ol"},"If an application container exits, then the Pod re-creates it. Until the container is replaced, the Pod is not fully running and won\u2019t receive Service traffic.")))}f.isMDXComponent=!0}}]);