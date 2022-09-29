"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4268],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(o),h=r,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return o?n.createElement(f,i(i({ref:t},u),{},{components:o})):n.createElement(f,i({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},1262:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(7294),r=o(2263);const a=function(e){var t=e.children,o=e.fallback;return(0,r.Z)().isClient&&null!=t?n.createElement(n.Fragment,null,t()):o||null}},1144:(e,t,o)=>{o.d(t,{M:()=>a});var n=o(7294),r=o(1262),a=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),n.createElement(r.Z,null,(function(){return n.createElement("div",{class:"update-request"},n.createElement("a",{href:"https://https://github.com/zeroone-boa/agora-cl-docs/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},"\ud83d\udc3c Request an update"))}))}},1615:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=o(1144),l=["components"],s={id:"terminology",title:"Glossary",sidebar_label:"Glossary"},c=void 0,u={unversionedId:"terminology",id:"terminology",isDocsHomePage:!1,title:"Glossary",description:"This page houses definitions to the various technical terms found throughout this documentation portal. See a word or phrase that should be here? Let us know!",source:"@site/docs/terminology.md",sourceDirName:".",slug:"/terminology",permalink:"/docs/terminology",editUrl:"https://github.com/zeroone-boa/agora-cl-docs/edit/master/website/docs/terminology.md",version:"current",frontMatter:{id:"terminology",title:"Glossary",sidebar_label:"Glossary"},sidebar:"docs",previous:{title:"Frequently asked questions",permalink:"/docs/faq"}},d=[{value:"General terms",id:"general-terms",children:[]},{value:"Technical terms",id:"technical-terms",children:[]}],p={toc:d};function h(e){var t=e.components,o=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page houses definitions to the various technical terms found throughout this documentation portal. See a word or phrase that should be here? Let us know!"),(0,a.kt)("h2",{id:"general-terms"},"General terms"),(0,a.kt)("h4",{id:"proof-of-stake-pos"},"Proof-of-Stake ","(","PoS",")"),(0,a.kt)("p",null,"The PoS concept states that a person can mine or validate block transactions according to how many coins they hold. This is a vastly improved iteration on Proof-of-Work ","(","PoW",")",", which relies on immense amounts of computational power to advance the state of the blockchain."),(0,a.kt)("h4",{id:"validator"},"Validator"),(0,a.kt)("p",null,"Most often refers to a validator client instance, but can also refer to an individual that is physically managing a validator client."),(0,a.kt)("h4",{id:"proposal-propose-"},"Proposal ","(","propose",")"," ",(0,a.kt)("a",{id:"propose"})),(0,a.kt)("p",null,"The process of creating and adding new blocks to the Agora chain."),(0,a.kt)("h4",{id:"attestation-attest-"},"Attestation ","(","attest",")"," ",(0,a.kt)("a",{id:"attest"})),(0,a.kt)("p",null,"The process of voting on the validity of newly created blocks on the Agora chain."),(0,a.kt)("h2",{id:"technical-terms"},"Technical terms"),(0,a.kt)("h4",{id:"canonical-head-block"},"Canonical head block"),(0,a.kt)("p",null,"The latest block to be proposed on a blockchain."),(0,a.kt)("h4",{id:"key-value-store"},"Key-value store"),(0,a.kt)("p",null,"A data storage paradigm designed for storing, retrieving, and managing hash tables."),(0,a.kt)("h4",{id:"fork-choice-rule"},"Fork choice rule"),(0,a.kt)("p",null,"A function evaluated by the client that takes, as input, the set of blocks and other messages that have been produced, and outputs to the client what the 'canonical chain' is."),(0,a.kt)(i.M,{mdxType:"RequestUpdateWidget"}))}h.isMDXComponent=!0}}]);