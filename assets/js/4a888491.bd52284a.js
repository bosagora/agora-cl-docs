"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3973],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),h=o,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1262:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),o=a(2263);const r=function(e){var t=e.children,a=e.fallback;return(0,o.Z)().isClient&&null!=t?n.createElement(n.Fragment,null,t()):a||null}},5505:(e,t,a)=>{a.d(t,{M:()=>r});var n=a(7294),o=a(1262),r=function(e){var t=e.commaDelimitedContributors,a=e.lastVerifiedDateString,r=e.lastVerifiedVersionString,i={Chris:"hewison-chris"},l=function(e){return n.createElement("a",{class:"header-badge",href:"https://github.com/"+i[e]},n.createElement("span",{class:"badge-avatar",style:{backgroundImage:"url('https://avatars.githubusercontent.com/"+i[e]+"')"}}),n.createElement("span",{class:"badge-label"},e))};return n.createElement(o.Z,null,(function(){return n.createElement("div",{class:"header-badges"},null!=t?t.split(",").map(l):null,function(e,t){if(null!=e&&null!=t)return n.createElement("a",{class:"header-badge"},n.createElement("span",{class:"badge-avatar emoji-avatar"},"\u2714\ufe0f"),n.createElement("span",{class:"badge-label"},"Last verified on ",n.createElement("strong",null,e)," using Agora-cl ",t))}(a,r),n.createElement("a",{class:"header-badge",href:"https://github.com/Bosagora/documentation/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},n.createElement("span",{class:"badge-avatar emoji-avatar"},"\u270f\ufe0f"),n.createElement("span",{class:"badge-label"},"Request an update")))}))}},1144:(e,t,a)=>{a.d(t,{M:()=>r});var n=a(7294),o=a(1262),r=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),n.createElement(o.Z,null,(function(){return n.createElement("div",{class:"update-request"},n.createElement("a",{href:"https://https://github.com/zeroone-boa/agora-cl-docs/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},"\ud83d\udc3c Request an update"))}))}},963:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>p,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=a(5505),l=a(1144),s=["components"],d={id:"bazel",title:"About Bazel",sidebar_label:"About Bazel"},p=void 0,c={unversionedId:"reading/bazel",id:"reading/bazel",isDocsHomePage:!1,title:"About Bazel",description:"This page explains why Agora-cl uses a special build system called Bazel to compile everything in our monorepository.",source:"@site/docs/reading/bazel.md",sourceDirName:"reading",slug:"/reading/bazel",permalink:"/docs/reading/bazel",editUrl:"https://github.com/zeroone-boa/agora-cl-docs/edit/master/website/docs/reading/bazel.md",version:"current",frontMatter:{id:"bazel",title:"About Bazel",sidebar_label:"About Bazel"},sidebar:"docs",previous:{title:"Golang resources",permalink:"/docs/reading/golang"},next:{title:"Eth Beacon Node API",permalink:"/docs/how-agora-cl-works/ethereum-public-api"}},u=[{value:"Why Bazel?",id:"why-bazel",children:[{value:"Cons of Bazel",id:"cons-of-bazel",children:[]}]},{value:"BUILD Files",id:"build-files",children:[{value:"Do I have to edit BUILD files myself?",id:"do-i-have-to-edit-build-files-myself",children:[]}]},{value:"Dependency Management",id:"dependency-management",children:[{value:"How to add new dependencies",id:"how-to-add-new-dependencies",children:[]}]},{value:"Bazel and Docker",id:"bazel-and-docker",children:[]},{value:"Building Production Releases",id:"building-production-releases",children:[{value:"With Bazel",id:"with-bazel",children:[]},{value:"With Go",id:"with-go",children:[]}]}],h={toc:u};function m(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.M,{mdxType:"HeaderBadgesWidget"}),(0,r.kt)("p",null,"This page explains why Agora-cl uses a special build system called ",(0,r.kt)("a",{parentName:"p",href:"https://bazel.build"},"Bazel")," to compile everything in our monorepository."),(0,r.kt)("h2",{id:"why-bazel"},"Why Bazel?"),(0,r.kt)("p",null,"Instead of using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Go")," tool to build Agora-cl, our team relies on the ",(0,r.kt)("a",{parentName:"p",href:"https://bazel.build"},"Bazel")," build system used by major companies such as Google, Uber, Coinbase, and more to manage monorepositories. Bazel provides reproducible builds and a sandboxed environment that ensures everyone building Agora-cl has the same experience and can build our entire project from a single command. The rationale for why we chose this system comes down to three major problems we need solved as part of our software development process:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bugs introduced as a result of the developer's environment being different than that being shipped to users"),(0,r.kt)("li",{parentName:"ul"},"Messy dependency management when dealing with a monorepo with multiple programming languages"),(0,r.kt)("li",{parentName:"ul"},"Messy deployment and production release configurations via esoteric make files")),(0,r.kt)("p",null,"Because Agora-cl is a ",(0,r.kt)("em",{parentName:"p"},"monorepo"),", it can have many different subprojects with multiple programming languages contained within. For example, while we primarily develop in Go, we could add an Angular application, or Python tools, or more. It is important that dependency management, compilation, and builds are ",(0,r.kt)("strong",{parentName:"p"},"reproducible and simple")," for all developers in the team. Because Ethereum is consensus ",(0,r.kt)("em",{parentName:"p"},"critical")," software, we must ensure all developers writing code and checking in new features into our project are using the exact same development environment, so if someone runs into a bug or a failing test, everyone else developing the project will see the bug, and the bug will also be present in the end-result binary. Bazel ensures ",(0,r.kt)("strong",{parentName:"p"},"hermeticity"),", which means that builds are essentially extremely sandboxed, pinned with proper dependencies, Go versions, and will be guaranteed to behave the same despite your machine. This is the ",(0,r.kt)("strong",{parentName:"p"},"major")," reason why we use Bazel instead of the native Go tool."),(0,r.kt)("p",null,"Additionally, Bazel provides the following amazing features out of the box:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Advanced local and remote caching, making it trivial to run CI and tests in a massive codebase"),(0,r.kt)("li",{parentName:"ul"},"Some of the most advanced dependency analysis, graph queries, and more, for the entire repository"),(0,r.kt)("li",{parentName:"ul"},"An extensible programming language to improve builds and write custom tooling that improves the experience for all")),(0,r.kt)("p",null,"To better understand some of the deeper rationale of how Bazel has helped large organizations, read Coinbase's retrospective on how Bazel helped their development significantly ",(0,r.kt)("a",{parentName:"p",href:"https://blog.coinbase.com/bootstrapping-the-coinbase-monorepo-575cf981c859"},"here"),"."),(0,r.kt)("h3",{id:"cons-of-bazel"},"Cons of Bazel"),(0,r.kt)("p",null,"Among a few cons of Bazel are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learning curve to understand how its underlying language, Starlark, is used in BUILD files"),(0,r.kt)("li",{parentName:"ul"},"Large, initial download of Bazel"),(0,r.kt)("li",{parentName:"ul"},"Not enough, comprehensive IDE support for Bazel (although Jetbrains IDEs have good support)")),(0,r.kt)("p",null,"Thankfully, Agora-cl also builds with ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," modules as well, so your code editor can use its regular Go support when developing for Agora-cl."),(0,r.kt)("h2",{id:"build-files"},"BUILD Files"),(0,r.kt)("p",null,"Building with Bazel requires every directory and every package to have a BUILD.bazel file which tells it how it should build the code in question."),(0,r.kt)("h3",{id:"do-i-have-to-edit-build-files-myself"},"Do I have to edit BUILD files myself?"),(0,r.kt)("p",null,"Most of the time, developers will not need to edit BUILD files themselves. Instead, they can use the following tool:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"bazel run //:gazelle -- fix\n")),(0,r.kt)("p",null,"which will edit all BUILD files that need to be changed based on any dependencies that were imported or any files that were added."),(0,r.kt)("h2",{id:"dependency-management"},"Dependency Management"),(0,r.kt)("p",null,"A large problem in monorepos is, of course, dealing with dependency management. Versioning and building tooling to ensure code is up to date is complicated, especially when you have a monorepo with many subprojects. Bazel handles ",(0,r.kt)("em",{parentName:"p"},"all")," dependency management in the monorepo, ensuring there is only a single version of a dependency in the entire project. Bazel provides an incredibly sophisticated dependency query tool called ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/query-how-to.html"},"bazel query")," which allows you to perform action such as the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Trace the entire dependency chain between two packages"),(0,r.kt)("li",{parentName:"ul"},"Look at the dependencies used in test files only"),(0,r.kt)("li",{parentName:"ul"},"Why does X dependency require Y dependency?"),(0,r.kt)("li",{parentName:"ul"},"What dependency paths do I need to break to make X no longer depend on Y?")),(0,r.kt)("p",null,"Bazel's query tool allows you to create graph visualizations of your entire dependency tree, making it a lot more robust and standardized compared to other methods of managing dependencies in a project."),(0,r.kt)("p",null,"All dependencies in the Agora-cl monorepo live in a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"deps.bzl")," at the top-level of the repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeroone-boa/agora-cl/blob/develop/deps.bzl"},"here")),(0,r.kt)("h3",{id:"how-to-add-new-dependencies"},"How to add new dependencies"),(0,r.kt)("p",null,"Adding new dependencies to Agora-cl requires specific changes. We have prepared a comprehensive ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeroone-boa/agora-cl/blob/master/DEPENDENCIES.md"},"DEPENDENCIES.md")," explaining the required process."),(0,r.kt)("h2",{id:"bazel-and-docker"},"Bazel and Docker"),(0,r.kt)("p",null,'A common question we get is: "where are Agora-cl\'s Dockerfiles?". With Bazel, we get a ton of benefits in terms of optimizing our deployment and release process. In particular, we use ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/bazelbuild/rules_docker"},(0,r.kt)("inlineCode",{parentName:"a"},"bazel rules docker"))," which provides us the ability to specify a base, barebones image, and essentially builds our binary and creates a Docker container as a simple wrapper over our binaries."),(0,r.kt)("p",null,"We do not write our own Dockerfiles, as Bazel provides us a more sandboxed, simple experience with all of its benefits. To see an example use of ",(0,r.kt)("inlineCode",{parentName:"p"},"bazel rules docker")," for how we build a particular package, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeroone-boa/agora-cl/blob/aa389c82a157008741450ba1e04d898924734432/tools/bootnode/BUILD.bazel#L36"},"here"),"."),(0,r.kt)("p",null,"To read comprehensive instructions on how to build Agora-cl's docker images for your own use, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/install/install-with-bazel"},"here"),"."),(0,r.kt)("h2",{id:"building-production-releases"},"Building Production Releases"),(0,r.kt)("h3",{id:"with-bazel"},"With Bazel"),(0,r.kt)("p",null,"Everything in Agora-cl can be built with Bazel using ",(0,r.kt)("inlineCode",{parentName:"p"},"bazel build //..."),". For example, the Agora node can be built with ",(0,r.kt)("inlineCode",{parentName:"p"},"bazel build //beacon-chain --config=release"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"--config=release")," will apply all compile-time optimizations to the code, and build everything including C dependencies and our cryptography from source. Every package in the Agora-cl monorepo can be build with ",(0,r.kt)("inlineCode",{parentName:"p"},"bazel build"),"."),(0,r.kt)("h3",{id:"with-go"},"With Go"),(0,r.kt)("p",null,"Building Agora-cl with Go is possible, but it will use precompiled cryptography to build the final executable. Additionally, it will not perform the compile-time optimizations Bazel does, and can have unexpected issues as you are relinquishing reproducible, hermetic builds which Bazel provides. We always recommend Bazel as the only way to run Agora-cl if you are planning on running it."),(0,r.kt)(l.M,{mdxType:"RequestUpdateWidget"}))}m.isMDXComponent=!0}}]);