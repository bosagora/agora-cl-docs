"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2939],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=n,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||i;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1262:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(2263);const i=function(e){var t=e.children,a=e.fallback;return(0,n.Z)().isClient&&null!=t?r.createElement(r.Fragment,null,t()):a||null}},5505:(e,t,a)=>{a.d(t,{M:()=>i});var r=a(7294),n=a(1262),i=function(e){var t=e.commaDelimitedContributors,a=e.lastVerifiedDateString,i=e.lastVerifiedVersionString,o={Chris:"hewison-chris"},s=function(e){return r.createElement("a",{class:"header-badge",href:"https://github.com/"+o[e]},r.createElement("span",{class:"badge-avatar",style:{backgroundImage:"url('https://avatars.githubusercontent.com/"+o[e]+"')"}}),r.createElement("span",{class:"badge-label"},e))};return r.createElement(n.Z,null,(function(){return r.createElement("div",{class:"header-badges"},null!=t?t.split(",").map(s):null,function(e,t){if(null!=e&&null!=t)return r.createElement("a",{class:"header-badge"},r.createElement("span",{class:"badge-avatar emoji-avatar"},"\u2714\ufe0f"),r.createElement("span",{class:"badge-label"},"Last verified on ",r.createElement("strong",null,e)," using Agora-cl ",t))}(a,i),r.createElement("a",{class:"header-badge",href:"https://github.com/Bosagora/documentation/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},r.createElement("span",{class:"badge-avatar emoji-avatar"},"\u270f\ufe0f"),r.createElement("span",{class:"badge-label"},"Request an update")))}))}},1144:(e,t,a)=>{a.d(t,{M:()=>i});var r=a(7294),n=a(1262),i=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),r.createElement(n.Z,null,(function(){return r.createElement("div",{class:"update-request"},r.createElement("a",{href:"https://https://github.com/zeroone-boa/agora-cl-docs/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},"\ud83d\udc3c Request an update"))}))}},7228:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>h,toc:()=>u});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=a(5505),s=a(1144),l=["components"],c={id:"validator-lifecycle",title:"Validator lifecycle",sidebar_label:"Validator lifecycle"},d=void 0,h={unversionedId:"how-agora-cl-works/validator-lifecycle",id:"how-agora-cl-works/validator-lifecycle",isDocsHomePage:!1,title:"Validator lifecycle",description:"This section discusses the  lifecycle of a validator as defined by Ethereum consensus specifications.",source:"@site/docs/how-agora-cl-works/validator-lifecycle.md",sourceDirName:"how-agora-cl-works",slug:"/how-agora-cl-works/validator-lifecycle",permalink:"/docs/how-agora-cl-works/validator-lifecycle",editUrl:"https://github.com/zeroone-boa/agora-cl-docs/edit/master/website/docs/how-agora-cl-works/validator-lifecycle.md",version:"current",frontMatter:{id:"validator-lifecycle",title:"Validator lifecycle",sidebar_label:"Validator lifecycle"},sidebar:"docs",previous:{title:"Validator client",permalink:"/docs/how-agora-cl-works/agora-cl-validator-client"},next:{title:"Optimistic sync",permalink:"/docs/how-agora-cl-works/optimistic-sync"}},u=[{value:"UNKNOWN State",id:"unknown-state",children:[]},{value:"DEPOSITED State",id:"deposited-state",children:[]},{value:"PENDING State",id:"pending-state",children:[]},{value:"ACTIVE State",id:"active-state",children:[]},{value:"EXITING State",id:"exiting-state",children:[]},{value:"SLASHING State",id:"slashing-state",children:[]},{value:"EXITED State",id:"exited-state",children:[]}],p={toc:u};function m(e){var t=e.components,c=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.M,{mdxType:"HeaderBadgesWidget"}),(0,i.kt)("p",null,"This section discusses the  lifecycle of a ",(0,i.kt)("a",{parentName:"p",href:"/docs/how-agora-cl-works/agora-cl-validator-client"},"validator")," as defined by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/consensus-specs"},"Ethereum consensus specifications"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Validator Lifecycle Diagram",src:a(2954).Z})),(0,i.kt)("h2",{id:"unknown-state"},"UNKNOWN State"),(0,i.kt)("p",null,"Agora-cl's ",(0,i.kt)("a",{parentName:"p",href:"/docs/how-agora-cl-works/agora-cl-validator-client"},"validator")," client will report that the state of a particular validator is UNKNOWN when it loads validator keys that have not yet submitted a valid deposit to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/terminology#eth1"},"Ethereum proof-of-work chain")," ",(0,i.kt)("a",{parentName:"p",href:"./validator-deposit-contract"},"validator deposit contract"),"."),(0,i.kt)("h2",{id:"deposited-state"},"DEPOSITED State"),(0,i.kt)("p",null,"Once a valid transaction has been submitted to the ",(0,i.kt)("a",{parentName:"p",href:"./validator-deposit-contract"},"validator deposit contract"),", your ","[Agora node]","(./agora-cl node) will will detect the presence of the transaction on the ETH1 chain and your ",(0,i.kt)("a",{parentName:"p",href:"/docs/how-agora-cl-works/agora-cl-validator-client"},"validator")," client will now report being in the DEPOSITED state."),(0,i.kt)("h2",{id:"pending-state"},"PENDING State"),(0,i.kt)("p",null,"The specification for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/validator.md#process-deposit"},"processing deposits")," requires a minimum of 1024 ETH1 blocks (~4 hours) plus 32 epochs (~3.4 hours) before deposits can be processed into the Ethereum Agora chain.  The validator is then assigned an index number and placed into a queue for activation. Under normal circumstances, four validators will be activated from the queue in each finalised epoch.  Once a validator has reached the front of the queue, it is assigned an activation epoch after an additional four epochs (~25.6 minutes)."),(0,i.kt)("h2",{id:"active-state"},"ACTIVE State"),(0,i.kt)("p",null,"Once the activation epoch arrives, the validator is activated and assigned responsibilities including ",(0,i.kt)("a",{parentName:"p",href:"/docs/terminology#propose"},"proposing")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/terminology#attest"},"attesting")," to blocks on the Agora chain.  Validators  receive either rewards or penalties to the initial deposit based upon their overall performance.  A validator must remain in the active state for 2048 epochs (~9 days) before it is eligible to exit.  If a validator's balance drops below 16 BOA (typically due to inactivity), it will be ejected.  Ejections are treated the same as a voluntary exits."),(0,i.kt)("h2",{id:"exiting-state"},"EXITING State"),(0,i.kt)("p",null,"An ACTIVE validator may request to exit by submitting a signed ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/consensus-specs/blob/v0.10.0/specs/phase0/beacon-chain.md#voluntary-exits"},"VoluntaryExit")," operation to the Ethereum network. Assuming the validator has been in the active state for at least 2048 epochs (~9 days), the validator will be assigned an exit_epoch that is determined by the length of the exiting queue.  Under normal circumstances, four validators may exit in each finalised epoch."),(0,i.kt)("h2",{id:"slashing-state"},"SLASHING State"),(0,i.kt)("p",null,"If a slashable event is included in a block while a validator is either ACTIVE, EXITING, or EXITED, it will briefly enter the SLASHING state where slashing penalties are applied, before being forcefully transitioned into the EXITED state.  Slashed validators incur three distinct penalties:"),(0,i.kt)("h4",{id:"minimum-penalty"},(0,i.kt)("a",{parentName:"h4",href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/beacon-chain.md#slash_validator"},"Minimum Penalty")),(0,i.kt)("p",null,"  A penalty of (1/32 * Effective Balance), issued immediately"),(0,i.kt)("h4",{id:"missed-attestation-penalties"},(0,i.kt)("a",{parentName:"h4",href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/beacon-chain.md#rewards-and-penalties-1"},"Missed Attestation Penalties")),(0,i.kt)("p",null,"  A penalty equivalent to that incurred by an inactive validator, issued every epoch until the validator leaves the exit queue"),(0,i.kt)("h4",{id:"attack-multiplier-penalty"},(0,i.kt)("a",{parentName:"h4",href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/beacon-chain.md#slashings"},"Attack Multiplier Penalty")),(0,i.kt)("p",null,"  A penalty proportional to three times the number of other slashings in the past 8192 epochs (~36 days), applied 4096 epochs (~18 days) after the slashing event was first included in a block.  Under normal circumstances this penalty is quite small, however in the event that a large number of slashings occur in a short time frame, this penalty can be as high as 40,000 BOA."),(0,i.kt)("h2",{id:"exited-state"},"EXITED State"),(0,i.kt)("p",null,"In the case that the validator has reached the exited state voluntarily, the funds will become withdrawable after 256 epochs (~27 hours).  If the validator was slashed, this delay is extended to 8,192 epochs (~36 days).  If a slashable event is included in a block before funds have been withdrawn, the validator will move back to the SLASHING state causing withdrawal delays to reset."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTICE:")," Funds will not be able to be withdrawn from validators until transactions are introduced after Ethereum proof-of-stake merges with the current Ethereum chain")),(0,i.kt)(s.M,{mdxType:"RequestUpdateWidget"}))}m.isMDXComponent=!0},2954:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/validator-lifecycle-6e7a0f5ae374d8c4eb859326055f52c4.png"}}]);