(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{104:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=o.a.createContext({}),p=function(e){var t=o.a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=p(r),f=n,b=l["".concat(i,".").concat(f)]||l[f]||u[f]||a;return r?o.a.createElement(b,c(c({ref:t},m),{},{components:r})):o.a.createElement(b,c({ref:t},m))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var m=2;m<a;m++)i[m]=r[m];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},85:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(104)),i={title:"mev-geth demo"},c={unversionedId:"flashbots-core/miners/mev-geth-demo",id:"flashbots-core/miners/mev-geth-demo",isDocsHomePage:!1,title:"mev-geth demo",description:"mev-geth-demo is a repository that launches an MEV-Geth node, and shows how a miner may profit from it by accepting MEV",source:"@site/docs/flashbots-core/miners/mev-geth-demo.md",slug:"/flashbots-core/miners/mev-geth-demo",permalink:"/flashbots-core/miners/mev-geth-demo",version:"current",sidebar:"docs",previous:{title:"mev-geth usage",permalink:"/flashbots-core/miners/mev-geth-usage"},next:{title:"interacting with mev-relay",permalink:"/flashbots-core/miners/interacting-with-mev-relay"}},s=[],m={toc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"mev-geth-demo is a repository that launches an MEV-Geth node, and shows how a miner may profit from it by accepting MEV\nbundles either via direct ",Object(a.b)("inlineCode",{parentName:"p"},"block.coinbase")," smart contract \"bribes\", or with extra transactions that pay\nthe block's coinbase if it's known ahead of time."),Object(a.b)("p",null,"Access the mev-geth-demo repository ",Object(a.b)("a",{parentName:"p",href:"https://github.com/flashbots/mev-geth-demo"},"here"),"."))}p.isMDXComponent=!0}}]);