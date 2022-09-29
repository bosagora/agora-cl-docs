"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1153],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1262:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(2263);const o=function(e){var t=e.children,n=e.fallback;return(0,r.Z)().isClient&&null!=t?a.createElement(a.Fragment,null,t()):n||null}},5505:(e,t,n)=>{n.d(t,{M:()=>o});var a=n(7294),r=n(1262),o=function(e){var t=e.commaDelimitedContributors,n=e.lastVerifiedDateString,o=e.lastVerifiedVersionString,i={Chris:"hewison-chris"},l=function(e){return a.createElement("a",{class:"header-badge",href:"https://github.com/"+i[e]},a.createElement("span",{class:"badge-avatar",style:{backgroundImage:"url('https://avatars.githubusercontent.com/"+i[e]+"')"}}),a.createElement("span",{class:"badge-label"},e))};return a.createElement(r.Z,null,(function(){return a.createElement("div",{class:"header-badges"},null!=t?t.split(",").map(l):null,function(e,t){if(null!=e&&null!=t)return a.createElement("a",{class:"header-badge"},a.createElement("span",{class:"badge-avatar emoji-avatar"},"\u2714\ufe0f"),a.createElement("span",{class:"badge-label"},"Last verified on ",a.createElement("strong",null,e)," using Agora-cl ",t))}(n,o),a.createElement("a",{class:"header-badge",href:"https://github.com/Bosagora/documentation/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},a.createElement("span",{class:"badge-avatar emoji-avatar"},"\u270f\ufe0f"),a.createElement("span",{class:"badge-label"},"Request an update")))}))}},1144:(e,t,n)=>{n.d(t,{M:()=>o});var a=n(7294),r=n(1262),o=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),a.createElement(r.Z,null,(function(){return a.createElement("div",{class:"update-request"},a.createElement("a",{href:"https://https://github.com/zeroone-boa/agora-cl-docs/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},"\ud83d\udc3c Request an update"))}))}},9369:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(5505),l=n(1144),s=["components"],c={id:"web3signer",title:"Use Web3Signer",sidebar_label:"Use Web3Signer"},p=void 0,d={unversionedId:"wallet/web3signer",id:"wallet/web3signer",isDocsHomePage:!1,title:"Use Web3Signer",description:"Web3Signer is an open-source remote signing service developed by Consensys. Agora-cl users can use this tool as an alternative to storing keys locally. Web3Signer uses REST APIs.",source:"@site/docs/wallet/we3signer.md",sourceDirName:"wallet",slug:"/wallet/web3signer",permalink:"/docs/wallet/web3signer",editUrl:"https://github.com/zeroone-boa/agora-cl-docs/edit/master/website/docs/wallet/we3signer.md",version:"current",frontMatter:{id:"web3signer",title:"Use Web3Signer",sidebar_label:"Use Web3Signer"},sidebar:"docs",previous:{title:"Maintain validator uptime with systemd or Docker",permalink:"/docs/advanced/maintaining-uptime"},next:{title:"Add graffiti to blocks",permalink:"/docs/agora-cl-usage/graffiti-file"}},m=[{value:"Remote Keymanager API",id:"remote-keymanager-api",children:[]}],u={toc:m};function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.M,{mdxType:"HeaderBadgesWidget"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/web3signer"},"Web3Signer")," is an open-source remote signing service developed by Consensys. Agora-cl users can use this tool as an alternative to storing keys locally. Web3Signer uses REST APIs."),(0,o.kt)("p",null,"Agora-cl supports the use of Web3Signer the following flags:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--validators-external-signer-url")," : base URL for the Web3Signer."),(0,o.kt)("p",null,"example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--validators-external-signer-url=http://localhost:9000\n")),(0,o.kt)("p",null,"It is recommended to use https for the web3signer url. Agora-cl currently supports one to one on web3signer and does not support multiple key management systems with the same validator client. Agora-cl does not support partial local and partial remote key management. Web3signer does not support authentication between the validator client and the signer."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--validators-external-signer-public-keys"),": comma separated list of public validator keys in hex format or an external url endpoint for the validator to retrieve public keys in JSON format."),(0,o.kt)("p",null,"hex example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--validators-external-signer-public-keys=0xa99a...e44c,0xb89b...4a0b\n")),(0,o.kt)("p",null,"url example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--validators-external-signer-public-keys=https://web3signer.com/api/v1/eth2/publicKeys\n")),(0,o.kt)("p",null,"URLs will only pull once and does not poll. Additional keys can be added or removed via the Remote Keymanager API."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Running Agora-cl with Web3Signer does not need Agora-cl Wallet Creation")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Most Agora-cl keymanager types require a corresponding Agora-cl wallet for storing keys, the web3signer type doesn't use any locally stored Agora-cl wallet.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"--wallet-dir")," flag will still be needed if using the Remote Keymanager API for ",(0,o.kt)("inlineCode",{parentName:"p"},"auth-token")," purposes."))),(0,o.kt)("h2",{id:"remote-keymanager-api"},"Remote Keymanager API"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethereum/keymanager-APIs"},"Keymanager APIs")," is a recommended set of REST APIs that validator clients have agreed upon for managing keys."),(0,o.kt)("p",null,"The Remote Keymanager APIs allows Agora-cl users to list, update, and delete the public keys set on the validator for Web3Signer."),(0,o.kt)("p",null,"To use the Remote keymanager API, one would need to run the validator with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--web")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--validators-external-signer-url")," flags with ",(0,o.kt)("inlineCode",{parentName:"p"},"--validators-external-signer-public-keys")," being optional.\nif ",(0,o.kt)("inlineCode",{parentName:"p"},"--validators-external-signer-public-keys")," is not defined the validator client would simply run in a loop waiting for keys to be set."),(0,o.kt)("p",null,"example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"validator --web --validators-external-signer-url=http://localhost:9000\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--web")," flag will enable validator client APIs as well as the web ui ( not supported for web3signer ). A JWT token ( found on the second line of the auth-token file) will be generated in the agora-cl default wallet directory otherwise defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"--wallet-dir")," flag. the token will also be printed in the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[2022-04-15 14:07:39]  INFO rpc: http://127.0.0.1:7500/initialize?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.ck3J6tcvHcI74IiFjyJqcBH-MmNAq-fMr0ncyZkGvFM\n")),(0,o.kt)("p",null,"The token needs to be copied and set in the header of the API request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.ck3J6tcvHcI74IiFjyJqcBH-MmNAq-fMr0ncyZkGvFM`\n")),(0,o.kt)("p",null,"For more information on Remote Keymanager API visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethereum/keymanager-APIs"},"Keymanager APIs Github Repo"),"."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Agora-cl Web Interface not supported for Web3Signer")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Agora-cl Web Interface can only support local keys and will not support the Web3Signer keys.",(0,o.kt)("a",{parentName:"p",href:"https://github.com/joaquim-verges/eth2-keymanager-frontend"},"eth2-keymanager-frontend")," is a front-end alternative to the Agora-cl UI for the Keymanager APIs."))),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Only supports Web3Signer currently")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"the remote keymanager API only currently supports Web3Signer types, please use the regular keymanager API for locally stored keys."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Beacon Chain needs to be synced for use")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Both Keymanager APIs are only supported when the Agora chain syncs."))),(0,o.kt)(l.M,{mdxType:"RequestUpdateWidget"}))}g.isMDXComponent=!0}}]);