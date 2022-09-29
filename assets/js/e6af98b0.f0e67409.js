"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5388],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(a),g=o,p=h["".concat(s,".").concat(g)]||h[g]||u[g]||r;return a?n.createElement(p,i(i({ref:t},d),{},{components:a})):n.createElement(p,i({ref:t},d))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1262:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),o=a(2263);const r=function(e){var t=e.children,a=e.fallback;return(0,o.Z)().isClient&&null!=t?n.createElement(n.Fragment,null,t()):a||null}},5505:(e,t,a)=>{a.d(t,{M:()=>r});var n=a(7294),o=a(1262),r=function(e){var t=e.commaDelimitedContributors,a=e.lastVerifiedDateString,r=e.lastVerifiedVersionString,i={Chris:"hewison-chris"},l=function(e){return n.createElement("a",{class:"header-badge",href:"https://github.com/"+i[e]},n.createElement("span",{class:"badge-avatar",style:{backgroundImage:"url('https://avatars.githubusercontent.com/"+i[e]+"')"}}),n.createElement("span",{class:"badge-label"},e))};return n.createElement(o.Z,null,(function(){return n.createElement("div",{class:"header-badges"},null!=t?t.split(",").map(l):null,function(e,t){if(null!=e&&null!=t)return n.createElement("a",{class:"header-badge"},n.createElement("span",{class:"badge-avatar emoji-avatar"},"\u2714\ufe0f"),n.createElement("span",{class:"badge-label"},"Last verified on ",n.createElement("strong",null,e)," using Agora-cl ",t))}(a,r),n.createElement("a",{class:"header-badge",href:"https://github.com/Bosagora/documentation/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},n.createElement("span",{class:"badge-avatar emoji-avatar"},"\u270f\ufe0f"),n.createElement("span",{class:"badge-label"},"Request an update")))}))}},1144:(e,t,a)=>{a.d(t,{M:()=>r});var n=a(7294),o=a(1262),r=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),n.createElement(o.Z,null,(function(){return n.createElement("div",{class:"update-request"},n.createElement("a",{href:"https://https://github.com/zeroone-boa/agora-cl-docs/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},"\ud83d\udc3c Request an update"))}))}},7053:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=a(5505),l=a(1144),s=["components"],c={id:"individual-validator-monitoring",title:"Monitor validators by index",sidebar_label:"Monitor validators by index"},d=void 0,u={unversionedId:"agora-cl-usage/individual-validator-monitoring",id:"agora-cl-usage/individual-validator-monitoring",isDocsHomePage:!1,title:"Monitor validators by index",description:"Agora-cl beacon nodes allow for monitoring of specific validator indices by tracking important metrics on the blockchain, including details about their rewards, attestation performance, sync committee participation, and more.",source:"@site/docs/agora-cl-usage/individual-validator-monitoring.md",sourceDirName:"agora-cl-usage",slug:"/agora-cl-usage/individual-validator-monitoring",permalink:"/docs/agora-cl-usage/individual-validator-monitoring",editUrl:"https://github.com/zeroone-boa/agora-cl-docs/edit/master/website/docs/agora-cl-usage/individual-validator-monitoring.md",version:"current",frontMatter:{id:"individual-validator-monitoring",title:"Monitor validators by index",sidebar_label:"Monitor validators by index"},sidebar:"docs",previous:{title:"Monitor Agora-cl for expected behavior",permalink:"/docs/monitoring/is-everything-fine"},next:{title:"Configure dashboarding and alerts with Prometheus and Grafana",permalink:"/docs/agora-cl-usage/monitoring/grafana-dashboard"}},h=[{value:"Attestations included in blocks",id:"attestations-included-in-blocks",children:[]},{value:"Block proposed",id:"block-proposed",children:[]},{value:"Slashings",id:"slashings",children:[]},{value:"Sync committee contributions",id:"sync-committee-contributions",children:[]},{value:"Voluntary exits",id:"voluntary-exits",children:[]},{value:"Attestations in the P2P network",id:"attestations-in-the-p2p-network",children:[]},{value:"Aggregated logs",id:"aggregated-logs",children:[]},{value:"A remark on BalanceChange",id:"a-remark-on-balancechange",children:[]}],g={toc:h};function p(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.M,{mdxType:"HeaderBadgesWidget"}),(0,r.kt)("p",null,"Agora-cl beacon nodes allow for monitoring of specific validator indices by tracking important metrics on the blockchain, including details about their rewards, attestation performance, sync committee participation, and more."),(0,r.kt)("p",null,"The Agora node takes a flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--monitor-indices")," that takes as parameter a validator index. This flag can be used multiple times. For example, to track validators 1, 2, 12, and 15, you can run with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"beacon-chain --monitor-indices 1 --monitor-indices 2 --monitor-indices 12 --monitor-indices 15\n")),(0,r.kt)("p",null,"You should see a message like the following in your logs at launch"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'INFO monitor: "Starting service" ValidatorIndices="[1 2 12 15]"\n')),(0,r.kt)("p",null,"You can track any validators, not only yours. In fact, you don't even need to be running a validator client to be able to track validators. So you can keep a staking computer with the Agora node and a validator securely isolated, and use a different computer running a Agora node for performance tracking."),(0,r.kt)("p",null,"The monitor emits both logs and metrics when it receives information about some event involving the tracked validators."),(0,r.kt)("h1",{id:"available-monitoring"},"Available monitoring"),(0,r.kt)("h2",{id:"attestations-included-in-blocks"},"Attestations included in blocks"),(0,r.kt)("p",null,"This is the log that most users will want to keep track, the typical log reads as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'INFO monitor  "Attestation included" BalanceChange=12652 CorrectHead=true CorrectSource=true CorrectTarget=true Head=0x68656c6c6f2d InclusionSlot=9433 NewBalance=32230000000 Slot=9432 Source=0x68656c6c6f2d Target=0x68656c6c6f2d ValidatorIndex=2\n')),(0,r.kt)("p",null,"It informs us that an attestation by validator 2 was included. The balance change between the previous reported balance changing event and this event was 12652 GWei. It also shows the current balance of this validator. This attestation voted correctly and timely for Head, Source and Target. It gives us the leading digits of the hashes for Head, Source and Target blocks. it tells us what is the slot in which this attestation was included (9433) and the slot that the validator attested for (9432). Thus, this attestation had an inclusion distance of 1."),(0,r.kt)("p",null,"Associated to this event, the monitor emits the following metrics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"inclusion_slot: a gauge vector of all the inclusion slots of attestations."),(0,r.kt)("li",{parentName:"ul"},"timely_head:  a counter of correctly and timely voted head attestations."),(0,r.kt)("li",{parentName:"ul"},"timely_target: a counter of correctly and timely voted target."),(0,r.kt)("li",{parentName:"ul"},"timely_source: a counter of correctly and timely voted source.")),(0,r.kt)("p",null,"These metrics are parameterized by validator index, not public key as you may be used to from the validator client metrics."),(0,r.kt)("h2",{id:"block-proposed"},"Block proposed"),(0,r.kt)("p",null,"In case of a block proposed by a tracked validator the following is logged"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'INFO monitor "Proposed block was included" BalanceChange=120343 BlockRoot=0x68656c6c6f2d NewBalance=323430000000 ParentRoot=0x68656c6c6f2d ProposerIndex=12 Slot=62394 Version=1\n')),(0,r.kt)("p",null,"And associated to this event the monitor emits the metric ",(0,r.kt)("inlineCode",{parentName:"p"},"proposed_slots_total")," which is a counter."),(0,r.kt)("h2",{id:"slashings"},"Slashings"),(0,r.kt)("p",null,"In the event that one of the tracked validators was slashed, the monitor will log as follows for proposer slashings"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'INFO monitor "Proposer slashing was included" ProposerIndex=2 Root1=0xae219327ef71 Root2=0x92120efa2ae3 SlashingSlot=122931 Slot=122942\n')),(0,r.kt)("p",null,"here ",(0,r.kt)("inlineCode",{parentName:"p"},"SlashingSlot")," indicates the slot in which the proposer had two different blocks proposed. The field  ",(0,r.kt)("inlineCode",{parentName:"p"},"Slot")," is the slot in which the slashing was included.\nand for attester slashings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'INFO monitor "Attester slashing was included" AttesterIndex=15 Root1=0x483eaf932ef1 Root2=0x921843eca827 Slot=12042 Slot1=12039 Slot2=11803 SourceEpoch1=367 SourceEpoch2=368 TargetEpoch1=370 TargetEpoch2=369\n')),(0,r.kt)("p",null,"Where we see a surround vote attestation for validator 15 that we are tracking."),(0,r.kt)("h2",{id:"sync-committee-contributions"},"Sync committee contributions"),(0,r.kt)("p",null,"In the case one of the validators enters a sync committee, the following will be logged every slot:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'INFO monitor "Sync committee contribution included" BalanceChange=1293 Contributions=1 ExpectedContrib=2 NewBalance=32122384000 ValidatorIndex=1\n')),(0,r.kt)("p",null,"This validator had two different indices in the committee and only contributed for one."),(0,r.kt)("p",null,"Also the metric ",(0,r.kt)("inlineCode",{parentName:"p"},"sync_committee_contributions_total"),", which is a counter, is emitted."),(0,r.kt)("h2",{id:"voluntary-exits"},"Voluntary exits"),(0,r.kt)("p",null,"Voluntary exits are logged when they are included in a block"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'INFO monitor "Voluntary exit was included" Slot=20112 ValidatorIndex=2\n')),(0,r.kt)("p",null,"And also when they are seen in the P2P network"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'INFO monitor "Voluntary exit was processed" ValidatorIndex=1\n')),(0,r.kt)("h2",{id:"attestations-in-the-p2p-network"},"Attestations in the P2P network"),(0,r.kt)("p",null,"The monitor logs events caught in the P2P network that not necessarily will be included in blocks. When one of our tracked validators is an aggregator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'INFO monitor "Processed attestation aggregation" AggregatorIndex=2 BeaconBlockRoot=0x68656c6c6f2d Slot=1 SourceRoot=0x68656c6c6f2d TargetRoot=0x68656c6c6f2d\n')),(0,r.kt)("p",null,"The following logs are emitted when an attestation by a tracked validator is seen in the P2P network, both in aggregated or unaggregated form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'INFO monitor "Processed aggregated attestation" Head=0x68656c6c6f2d Slot=11293 Source=0x68656c6c6f2d Target=0x68656c6c6f2d ValidatorIndex=2\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'INFO monitor "Processed unaggregated attestation" Head=0x68656c6c6f2d Slot=12123 Source=0x68656c6c6f2d Target=0x68656c6c6f2d ValidatorIndex=12\n')),(0,r.kt)("p",null,"The above logs are quite verbose as typically the same aggregation is seen about 8 times per slot."),(0,r.kt)("h2",{id:"aggregated-logs"},"Aggregated logs"),(0,r.kt)("p",null,"In addition to the above logs, the monitor emits aggregated logs every 5 epochs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'INFO monitor "Aggregated performance since launch" AttestationInclusion="80.00%" AverageInclusionDistance=1.2 BalanceChangePct="0.95%" CorrectlyVotedHeadPct="66.67%" CorrectlyVotedSourcePct="91.67%" CorrectlyVotedTargetPct="100.00%" StartBalance=31700000000 StartEpoch=0 TotalAggregations=0 TotalProposedBlocks=1 TotalRequested=15 TotalSyncContributions=0 ValidatorIndex=1\n')),(0,r.kt)("p",null,"The field ",(0,r.kt)("inlineCode",{parentName:"p"},"AttestationInclusion")," reports the percentage of attestations that have been included divided by the number of epochs since launch. The field ",(0,r.kt)("inlineCode",{parentName:"p"},"AverageInclusionDistance")," only counts those attestations that have been included. So do the other fields that are percentages of the included attestations."),(0,r.kt)("h2",{id:"a-remark-on-balancechange"},"A remark on BalanceChange"),(0,r.kt)("p",null,"The validator monitor does not keep a history of performance, it only tracks the ",(0,r.kt)("em",{parentName:"p"},"latest event")," and keeps an aggregated total of performance. The ",(0,r.kt)("em",{parentName:"p"},"balance changing events")," are attestation inclusion, proposed blocks inclusion and sync committee inclusion. When the monitor reports a field ",(0,r.kt)("inlineCode",{parentName:"p"},"BalanceChange")," it means the difference between the balance right after processing the block that triggered the event, and the balance after the previous balance changing event. In particular, when an attestation is included the balance is not changed by the included attestation since attestation reward is given at epoch transition. Therefore the balance change reported, assuming no other events like sync committee contributions and block proposals were reported during the epoch, refers to the reward given by the ",(0,r.kt)("em",{parentName:"p"},"previous")," attestation."),(0,r.kt)(l.M,{mdxType:"RequestUpdateWidget"}))}p.isMDXComponent=!0}}]);