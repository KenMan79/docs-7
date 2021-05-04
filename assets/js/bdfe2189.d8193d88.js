(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{104:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,b=u["".concat(i,".").concat(f)]||u[f]||h[f]||o;return r?a.a.createElement(b,s(s({ref:t},l),{},{components:r})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},92:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(104)),i={title:"interacting with mev-relay"},s={unversionedId:"flashbots-core/searchers/interacting-with-mev-relay",id:"flashbots-core/searchers/interacting-with-mev-relay",isDocsHomePage:!1,title:"interacting with mev-relay",description:"mev-relay-js is a repository that contains a public relay for accepting transactions from searchers. It also contains an example reverse proxy for miners to run in front of their mev-geth nodes. This relay is meant only to protect participating miners from abuse via DoS attacks, but does otherwise no bundle filtering or censoring.",source:"@site/docs/flashbots-core/searchers/interacting-with-mev-relay.md",slug:"/flashbots-core/searchers/interacting-with-mev-relay",permalink:"/flashbots-core/searchers/interacting-with-mev-relay",version:"current",sidebar:"docs",previous:{title:"quick start",permalink:"/flashbots-core/searchers/quick-start"},next:{title:"interacting with mev-geth",permalink:"/flashbots-core/searchers/interacting-with-mev-geth"}},c=[],l={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"mev-relay-js is a repository that contains a public relay for accepting transactions from searchers. It also contains an example reverse proxy for miners to run in front of their mev-geth nodes. This relay is meant only to protect participating miners from abuse via DoS attacks, but does otherwise no bundle filtering or censoring."),Object(o.b)("p",null,"This is the relay entrypoint(server/main.js). The public flashbots relay is available at ",Object(o.b)("a",{parentName:"p",href:"https://relay.flashbots.net."},"https://relay.flashbots.net.")," See ",Object(o.b)("a",{parentName:"p",href:"https://github.com/flashbots/ethers-provider-flashbots-bundle"},"https://github.com/flashbots/ethers-provider-flashbots-bundle")," for a library to help you call this."),Object(o.b)("p",null,"The relay provides new JSON-RPC methods for interfacing with Flashbots which are documented in the repository. In addition, the repository also documents how authentication works within the relay and how searchers can sign their payloads with an ethereum wallet."),Object(o.b)("p",null,"Access the mev-relay-js repository ",Object(o.b)("a",{parentName:"p",href:"https://github.com/flashbots/mev-relay-js"},"here"),"."))}p.isMDXComponent=!0}}]);