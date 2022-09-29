"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6146],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),b=c(a),h=n,p=b["".concat(l,".").concat(h)]||b[h]||u[h]||o;return a?r.createElement(p,i(i({ref:t},d),{},{components:a})):r.createElement(p,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},1262:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(2263);const o=function(e){var t=e.children,a=e.fallback;return(0,n.Z)().isClient&&null!=t?r.createElement(r.Fragment,null,t()):a||null}},5505:(e,t,a)=>{a.d(t,{M:()=>o});var r=a(7294),n=a(1262),o=function(e){var t=e.commaDelimitedContributors,a=e.lastVerifiedDateString,o=e.lastVerifiedVersionString,i={Chris:"hewison-chris"},s=function(e){return r.createElement("a",{class:"header-badge",href:"https://github.com/"+i[e]},r.createElement("span",{class:"badge-avatar",style:{backgroundImage:"url('https://avatars.githubusercontent.com/"+i[e]+"')"}}),r.createElement("span",{class:"badge-label"},e))};return r.createElement(n.Z,null,(function(){return r.createElement("div",{class:"header-badges"},null!=t?t.split(",").map(s):null,function(e,t){if(null!=e&&null!=t)return r.createElement("a",{class:"header-badge"},r.createElement("span",{class:"badge-avatar emoji-avatar"},"\u2714\ufe0f"),r.createElement("span",{class:"badge-label"},"Last verified on ",r.createElement("strong",null,e)," using Agora-cl ",t))}(a,o),r.createElement("a",{class:"header-badge",href:"https://github.com/Bosagora/documentation/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},r.createElement("span",{class:"badge-avatar emoji-avatar"},"\u270f\ufe0f"),r.createElement("span",{class:"badge-label"},"Request an update")))}))}},1144:(e,t,a)=>{a.d(t,{M:()=>o});var r=a(7294),n=a(1262),o=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),r.createElement(n.Z,null,(function(){return r.createElement("div",{class:"update-request"},r.createElement("a",{href:"https://https://github.com/zeroone-boa/agora-cl-docs/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},"\ud83d\udc3c Request an update"))}))}},8326:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>u,toc:()=>b});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=a(5505),s=a(1144),l=["components"],c={id:"database-backend-boltdb",title:"BoltDB database",sidebar_label:"BoltDB database"},d=void 0,u={unversionedId:"how-agora-cl-works/database-backend-boltdb",id:"how-agora-cl-works/database-backend-boltdb",isDocsHomePage:!1,title:"BoltDB database",description:"BoltDB is the persistent key-value store database utilised by the Agora-cl client. A piece of software that Agora-cl initially inherited from its origins as a Geth fork was its storage engine, LevelDB. As a simple embedded key-value store written in Go, LevelDB worked well; however, after observing a number of corruption-related issues, it was decided to survey some other options for the project.",source:"@site/docs/how-agora-cl-works/database-backend-boltdb.md",sourceDirName:"how-agora-cl-works",slug:"/how-agora-cl-works/database-backend-boltdb",permalink:"/docs/how-agora-cl-works/database-backend-boltdb",editUrl:"https://github.com/zeroone-boa/agora-cl-docs/edit/master/website/docs/how-agora-cl-works/database-backend-boltdb.md",version:"current",frontMatter:{id:"database-backend-boltdb",title:"BoltDB database",sidebar_label:"BoltDB database"},sidebar:"docs",previous:{title:"Validator deposit contract",permalink:"/docs/how-agora-cl-works/validator-deposit-contract"},next:{title:"P2P networking",permalink:"/docs/how-agora-cl-works/p2p-networking"}},b=[{value:"BoltDB functionality",id:"boltdb-functionality",children:[{value:"Example: bucket creation",id:"example-bucket-creation",children:[]}]}],h={toc:b};function p(e){var t=e.components,c=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.M,{mdxType:"HeaderBadgesWidget"}),(0,o.kt)("p",null,"BoltDB is the persistent ",(0,o.kt)("a",{parentName:"p",href:"/docs/terminology#key-value-store"},"key-value store")," database utilised by the Agora-cl client. A piece of software that Agora-cl initially inherited from its origins as a ",(0,o.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/"},"Geth")," fork was its storage engine, LevelDB. As a simple embedded ",(0,o.kt)("a",{parentName:"p",href:"/docs/terminology#key-value-store"},"key-value store")," written in Go, LevelDB worked well; however, after observing a number of corruption-related issues, it was decided to survey some other options for the project."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"BoltDB",src:a(3138).Z})),(0,o.kt)("h4",{id:"why-boltdb"},"Why BoltDB?"),(0,o.kt)("p",null,"There were two main requirements of the new storage engine; it needed to be an embedded environment, and written in Go. After a considerable amount of testing, three options in particular met this criteria as well as performance expectancy: BoltDB, Badger and the old option, LevelDB."),(0,o.kt)("p",null,"After testing and benchmarking all three options, Bolt was decided upon as the best option for Agora-cl. Although LevelDB and Badger performed better in write-heavy benchmarks ","(","as expected for an LSM-tree",")",", the difference was not substantial, while BoltDB performed much better on read-heavy benchmarks. Further, though Bolt also consumes more space on disk compared to the other two options, it provides the strongest guarantees against data loss, one of the most crucial goals of the project."),(0,o.kt)("h2",{id:"boltdb-functionality"},"BoltDB functionality"),(0,o.kt)("p",null,"All database related logic is contained in the ",(0,o.kt)("inlineCode",{parentName:"p"},"db/")," directory of the Agora-cl repository. Given that BoltDB is a ",(0,o.kt)("a",{parentName:"p",href:"/docs/terminology#key-value-store"},"key-value store")," backend, 'buckets' ","(","akin to tables in relational databases",")"," are required for data storage. Blocks, transactions, state, proposals and attestations are are all defined in these buckets, in what is known as 'bucket data'."),(0,o.kt)("h3",{id:"example-bucket-creation"},"Example: bucket creation"),(0,o.kt)("p",null,"A user wants to create a new bucket named ",(0,o.kt)("inlineCode",{parentName:"p"},"myNewStuffBucket")," to the database. To perform this action, the bucket data must be added to the template found in ",(0,o.kt)("inlineCode",{parentName:"p"},"db/schema.go"),", like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// The Schema will define how to store and retrieve data from the db.\n// Currently we store blocks by prefixing `block` to their hash and\n// using that as the key to store blocks.\n// `block` + hash -> block\n//\n// We store the crystallized state using the crystallized state lookup key, and\n// also the genesis block using the genesis lookup key.\n// The canonical head is stored using the canonical head lookup key.\n\n// The fields below define the suffix of keys in the db.\nvar (\n    attestationBucket    = []byte("attestation-bucket")\n    blockBucket          = []byte("block-bucket")\n    mainChainBucket      = []byte("main-chain-bucket")\n    myNewStuffBucket = []byte(\u201cmy-new-stuff-bucket\u201d)\n    ...\n)\n')),(0,o.kt)("p",null,"The newly created bucket is added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"NewDB")," constructor in ",(0,o.kt)("inlineCode",{parentName:"p"},"db/db.go"),", like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// NewDB initializes a new DB. If the genesis block and states do not exist, this method creates it.\nfunc NewDB(dirPath string) (*BeaconDB, error) {\n    if err := os.MkdirAll(dirPath, 0700); err != nil {\n        return nil, err\n    }\n    datafile := path.Join(dirPath, "beaconchain.db")\n    boltDB, err := bolt.Open(datafile, 0600, nil)\n    if err != nil {\n        return nil, err\n    }\n\n    db := &BeaconDB{db: boltDB, DatabasePath: dirPath}\n\n    if err := db.update(func(tx *bolt.Tx) error {\n        return createBuckets(tx, myNewStuffBucket, \u2026otherBuckets)\n\n    }); err != nil {\n        return nil, err\n    }\n\n    return db, err\n}\n')),(0,o.kt)(s.M,{mdxType:"RequestUpdateWidget"}))}p.isMDXComponent=!0},3138:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);