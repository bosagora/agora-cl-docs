"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2522],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>p});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),d=l(a),p=o,m=d["".concat(s,".").concat(p)]||d[p]||u[p]||n;return a?r.createElement(m,i(i({ref:t},h),{},{components:a})):r.createElement(m,i({ref:t},h))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<n;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1262:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(7294),o=a(2263);const n=function(e){var t=e.children,a=e.fallback;return(0,o.Z)().isClient&&null!=t?r.createElement(r.Fragment,null,t()):a||null}},5505:(e,t,a)=>{a.d(t,{M:()=>n});var r=a(7294),o=a(1262),n=function(e){var t=e.commaDelimitedContributors,a=e.lastVerifiedDateString,n=e.lastVerifiedVersionString,i={Chris:"hewison-chris"},c=function(e){return r.createElement("a",{class:"header-badge",href:"https://github.com/"+i[e]},r.createElement("span",{class:"badge-avatar",style:{backgroundImage:"url('https://avatars.githubusercontent.com/"+i[e]+"')"}}),r.createElement("span",{class:"badge-label"},e))};return r.createElement(o.Z,null,(function(){return r.createElement("div",{class:"header-badges"},null!=t?t.split(",").map(c):null,function(e,t){if(null!=e&&null!=t)return r.createElement("a",{class:"header-badge"},r.createElement("span",{class:"badge-avatar emoji-avatar"},"\u2714\ufe0f"),r.createElement("span",{class:"badge-label"},"Last verified on ",r.createElement("strong",null,e)," using Agora-cl ",t))}(a,n),r.createElement("a",{class:"header-badge",href:"https://github.com/Bosagora/documentation/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},r.createElement("span",{class:"badge-avatar emoji-avatar"},"\u270f\ufe0f"),r.createElement("span",{class:"badge-label"},"Request an update")))}))}},1144:(e,t,a)=>{a.d(t,{M:()=>n});var r=a(7294),o=a(1262),n=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),r.createElement(o.Z,null,(function(){return r.createElement("div",{class:"update-request"},r.createElement("a",{href:"https://https://github.com/zeroone-boa/agora-cl-docs/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},"\ud83d\udc3c Request an update"))}))}},5986:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>h,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=a(7462),o=a(3366),n=(a(7294),a(3905)),i=a(5505),c=a(1144),s=["components"],l={id:"architecture-overview",title:"Architecture overview",sidebar_label:"Architecture overview"},h=void 0,u={unversionedId:"how-agora-cl-works/architecture-overview",id:"how-agora-cl-works/architecture-overview",isDocsHomePage:!1,title:"Architecture overview",description:"This section outlines Agora-cl's various internal components and their role in the client.",source:"@site/docs/how-agora-cl-works/overview-technical.md",sourceDirName:"how-agora-cl-works",slug:"/how-agora-cl-works/architecture-overview",permalink:"/docs/how-agora-cl-works/architecture-overview",editUrl:"https://github.com/zeroone-boa/agora-cl-docs/edit/master/website/docs/how-agora-cl-works/overview-technical.md",version:"current",frontMatter:{id:"architecture-overview",title:"Architecture overview",sidebar_label:"Architecture overview"},sidebar:"docs",previous:{title:"Extending APIs",permalink:"/docs/devtools/extending-apis"},next:{title:"Beacon node",permalink:"/docs/how-agora-cl-works/agora-cl node"}},d=[{value:"Agora-cl client components",id:"agora-cl-client-components",children:[]},{value:"Agora-cl client functionality",id:"agora-cl-client-functionality",children:[]}],p={toc:d};function m(e){var t=e.components,l=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.M,{mdxType:"HeaderBadgesWidget"}),(0,n.kt)("p",null,"This section outlines Agora-cl's various internal components and their role in the client."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Architecture Diagram",src:a(7249).Z})),(0,n.kt)("h2",{id:"agora-cl-client-components"},"Agora-cl client components"),(0,n.kt)("p",null,"When a Agora-cl client is initialised out of the box, it starts a variety of services that run in parallel to handle everything required for the life cycle of the Agora chain. In no particular order, Agora-cl includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ","[",(0,n.kt)("strong",{parentName:"li"},"Agora node"),"]","(/docs/how-agora-cl-works/agora-cl node) which powers the Agora chain at the core of Ethereum consensus."),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("a",{parentName:"li",href:"/docs/how-agora-cl-works/agora-cl-validator-client"},(0,n.kt)("strong",{parentName:"a"},"validator client"))," connects to the Agora node and manages staking keypairs."),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("a",{parentName:"li",href:"/docs/how-agora-cl-works/agora-cl-public-api"},(0,n.kt)("strong",{parentName:"a"},"public RPC server"))," to request data about network state, blocks, validators etc."),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("a",{parentName:"li",href:"/docs/how-agora-cl-works/database-backend-boltdb"},(0,n.kt)("strong",{parentName:"a"},"persistent key-value store"))," in the form of a database ","(",(0,n.kt)("a",{parentName:"li",href:"/docs/how-agora-cl-works/database-backend-boltdb"},"BoltDB"),")","."),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("a",{parentName:"li",href:"/docs/how-agora-cl-works/p2p-networking"},(0,n.kt)("strong",{parentName:"a"},"P2P networking framework and server"))," to connect with other beacon nodes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Monitoring and metrics gathering technologies")," ",(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/"},(0,n.kt)("strong",{parentName:"a"},"Grafana"))," and ",(0,n.kt)("a",{parentName:"li",href:"https://prometheus.io"},(0,n.kt)("strong",{parentName:"a"},"Prometheus"))," track everything. happening across beacon nodes in the network.")),(0,n.kt)("h2",{id:"agora-cl-client-functionality"},"Agora-cl client functionality"),(0,n.kt)("p",null,"Ethereum proof-of-stake encompasses a distributed network of blockchains called shard chains which are coordinated by a root chain, known as an Agora chain. This Agora chain serves as a mechanism to manage a set of ",(0,n.kt)("a",{parentName:"p",href:"/docs/terminology#proof-of-stake-pos"},"Proof-of-Stake")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/terminology#validator"},"validators")," and overall consensus across shards."),(0,n.kt)("p",null,"Shards themselves are similar to the current Ethereum execution chain, which stores blocks containing user-generated transactions such as token transfers and smart contracts. Ethereum proof-of-stake consensus provides a massive improvement over proof-of-work by having 64 of these shard chains."),(0,n.kt)("p",null,"The Agora chain runs through a distributed network of nodes known as ","[beacon nodes]","(/docs/how-agora-cl-works/agora-cl node). Participants who want to run a Agora node and help secure the network can stake 40,000 BOA to have their ",(0,n.kt)("a",{parentName:"p",href:"/docs/how-agora-cl-works/agora-cl-validator-client"},"validator client")," join the overall pool of validators, whom have the responsibility of ",(0,n.kt)("a",{parentName:"p",href:"/docs/terminology#propose"},"proposing")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/terminology#attest"},"attesting")," to new blocks on the Agora chain. This deposit does not come out of nowhere however; validators transfer Ether from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/terminology#eth1"},"ETH1")," chain to the system through the use of a ",(0,n.kt)("a",{parentName:"p",href:"/docs/how-agora-cl-works/validator-deposit-contract"},"validator deposit contract"),"."),(0,n.kt)("p",null,"Each of these components and their roles in the Agora-cl client are explained within the following sections of this documentation. If you have any questions, please stop by our ",(0,n.kt)("a",{parentName:"p",href:"https://t.me/bosagora_eng"},"Telegram"),"."),(0,n.kt)(c.M,{mdxType:"RequestUpdateWidget"}))}m.isMDXComponent=!0},7249:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/agora-cl-architecture-6d320b44700c19eefe5e492de287e869.png"}}]);