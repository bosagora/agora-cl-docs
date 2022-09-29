"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[796],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>h});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),d=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=d(e.components);return r.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),h=n,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return t?r.createElement(m,i(i({ref:a},c),{},{components:t})):r.createElement(m,i({ref:a},c))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1262:(e,a,t)=>{t.d(a,{Z:()=>o});var r=t(7294),n=t(2263);const o=function(e){var a=e.children,t=e.fallback;return(0,n.Z)().isClient&&null!=a?r.createElement(r.Fragment,null,a()):t||null}},8215:(e,a,t)=>{t.d(a,{Z:()=>n});var r=t(7294);const n=function(e){var a=e.children,t=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}},5064:(e,a,t)=>{t.d(a,{Z:()=>p});var r=t(7294),n=t(9443);const o=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=t(6010);const l="tabItem_1uMI",s="tabItemActive_2DSg";var d=37,c=39;const p=function(e){var a=e.lazy,t=e.block,n=e.defaultValue,p=e.values,u=e.groupId,h=e.className,m=o(),b=m.tabGroupChoices,g=m.setTabGroupChoices,k=(0,r.useState)(n),f=k[0],v=k[1],y=r.Children.toArray(e.children),w=[];if(null!=u){var N=b[u];null!=N&&N!==f&&p.some((function(e){return e.value===N}))&&v(N)}var T=function(e){var a=e.currentTarget,t=w.indexOf(a),r=p[t].value;v(r),null!=u&&(g(u,r),setTimeout((function(){var e,t,r,n,o,i,l,d;(e=a.getBoundingClientRect(),t=e.top,r=e.left,n=e.bottom,o=e.right,i=window,l=i.innerHeight,d=i.innerWidth,t>=0&&o<=d&&n<=l&&r>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(s),setTimeout((function(){return a.classList.remove(s)}),2e3))}),150))},x=function(e){var a,t;switch(e.keyCode){case c:var r=w.indexOf(e.target)+1;t=w[r]||w[0];break;case d:var n=w.indexOf(e.target)-1;t=w[n]||w[w.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},h)},p.map((function(e){var a=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:f===a?0:-1,"aria-selected":f===a,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":f===a}),key:a,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:T,onClick:T},t)}))),a?(0,r.cloneElement)(y.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==f})}))))}},9443:(e,a,t)=>{t.d(a,{Z:()=>r});const r=(0,t(7294).createContext)(void 0)},5505:(e,a,t)=>{t.d(a,{M:()=>o});var r=t(7294),n=t(1262),o=function(e){var a=e.commaDelimitedContributors,t=e.lastVerifiedDateString,o=e.lastVerifiedVersionString,i={Chris:"hewison-chris"},l=function(e){return r.createElement("a",{class:"header-badge",href:"https://github.com/"+i[e]},r.createElement("span",{class:"badge-avatar",style:{backgroundImage:"url('https://avatars.githubusercontent.com/"+i[e]+"')"}}),r.createElement("span",{class:"badge-label"},e))};return r.createElement(n.Z,null,(function(){return r.createElement("div",{class:"header-badges"},null!=a?a.split(",").map(l):null,function(e,a){if(null!=e&&null!=a)return r.createElement("a",{class:"header-badge"},r.createElement("span",{class:"badge-avatar emoji-avatar"},"\u2714\ufe0f"),r.createElement("span",{class:"badge-label"},"Last verified on ",r.createElement("strong",null,e)," using Agora-cl ",a))}(t,o),r.createElement("a",{class:"header-badge",href:"https://github.com/Bosagora/documentation/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},r.createElement("span",{class:"badge-avatar emoji-avatar"},"\u270f\ufe0f"),r.createElement("span",{class:"badge-label"},"Request an update")))}))}},1144:(e,a,t)=>{t.d(a,{M:()=>o});var r=t(7294),n=t(1262),o=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),r.createElement(n.Z,null,(function(){return r.createElement("div",{class:"update-request"},r.createElement("a",{href:"https://https://github.com/zeroone-boa/agora-cl-docs/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},"\ud83d\udc3c Request an update"))}))}},2413:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>h,toc:()=>m});var r=t(7462),n=t(3366),o=(t(7294),t(3905)),i=t(5505),l=t(5064),s=t(8215),d=t(1144),c=["components"],p={id:"database-backups",title:"Back up & restore database",sidebar_label:"Back up & restore database"},u=void 0,h={unversionedId:"agora-cl-usage/database-backups",id:"agora-cl-usage/database-backups",isDocsHomePage:!1,title:"Back up & restore database",description:"This section outlines how to perform database backups for your Agora node and validator client. Both services expose an HTTP backup endpoint which is the safest way to trigger a database backup.",source:"@site/docs/agora-cl-usage/database-backups.md",sourceDirName:"agora-cl-usage",slug:"/agora-cl-usage/database-backups",permalink:"/docs/agora-cl-usage/database-backups",editUrl:"https://github.com/zeroone-boa/agora-cl-docs/edit/master/website/docs/agora-cl-usage/database-backups.md",version:"current",frontMatter:{id:"database-backups",title:"Back up & restore database",sidebar_label:"Back up & restore database"},sidebar:"docs",previous:{title:"Run an archival node",permalink:"/docs/advanced/agora-cl_node_api"},next:{title:"Import & export slashing protection history",permalink:"/docs/wallet/slashing-protection"}},m=[{value:"Beacon node",id:"beacon-node",children:[{value:"Backing up the Database via a Webhook",id:"backing-up-the-database-via-a-webhook",children:[]},{value:"Restoring from a backup",id:"restoring-from-a-backup",children:[]}]},{value:"Validator client",id:"validator-client",children:[{value:"Add the backup webhook flags to your validator client",id:"add-the-backup-webhook-flags-to-your-validator-client",children:[]},{value:"Restoring from a backup",id:"restoring-from-a-backup-1",children:[]}]}],b={toc:m};function g(e){var a=e.components,t=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)(i.M,{mdxType:"HeaderBadgesWidget"}),(0,o.kt)("p",null,"This section outlines how to perform database backups for your Agora node and validator client. Both services expose an ",(0,o.kt)("strong",{parentName:"p"},"HTTP backup endpoint")," which is the ",(0,o.kt)("strong",{parentName:"p"},"safest way")," to trigger a database backup."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Doing manual folder backups is not safe")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you perform backups by manually copying the validator database while the client is running, you risk copying a corrupted database! You might be copying the folder right when the validator is in the middle of writing data to the database, and could end up with a bad backup. For this reason, HTTP backups are the way to go."))),(0,o.kt)("h2",{id:"beacon-node"},"Beacon node"),(0,o.kt)("p",null,"Both the Agora node and validator use an embedded key-value store as a database called ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boltdb/bolt"},"BoltDB")," to store all important information. Backing up your Agora node database is a good practice, although ",(0,o.kt)("strong",{parentName:"p"},"not critical")," to being able to validate in Ethereum consensus. if you want to perform a backup, here's the safest way to do it."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Backing up the database can lead to OOM for large databases.")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In event your system memory is insufficient performing a backup can lead to an out of memory exception. The webhook performs the backup in-memory by copying all the separate buckets from the source database to the backup database. If the source database is large, performing the backup might take too long and lead to an inconsistent backup database. In the event the source database is large ( > 20 Gb), as in mainnet right now, it is recommended to not perform the backup via the webhook. Instead manual backups should be utilised where the Agora node is stopped and then the database file is copied via the filesystem."))),(0,o.kt)("h3",{id:"backing-up-the-database-via-a-webhook"},"Backing up the Database via a Webhook"),(0,o.kt)("p",null,"As the note above describes, we highly recommend performing manual backups of the database while your Agora node and validator are stopped rather than using a webhook. Due to performance limitations, it is safer to take a manual approach while your software is stopped."),(0,o.kt)("p",null,"Add the following flags to your Agora node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--enable-db-backup-webhook"),": Serve an http server to initiate database backups. The handler is served on the Agora node's monitoring host and port. Default endpoint is ",(0,o.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:8080/db/backup")," if the flag is enabled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--db-backup-output-dir"),": Folder path to where backups will be output to, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"/path/to/mybackups"),". If the directory exists, make sure the permissions for that directory is ",(0,o.kt)("inlineCode",{parentName:"li"},"0700"),".")),(0,o.kt)("p",null,"Now, your Agora node will expose an HTTP endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"http://monitoringhost:monitoringport/db/backup"),", which is ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080/db/backup")," by default. You can hit this endpoint using curl or any other tool you prefer, and a backup will initiate which will be output to your ",(0,o.kt)("inlineCode",{parentName:"p"},"--db-backup-output-dir")," path."),(0,o.kt)("h3",{id:"restoring-from-a-backup"},"Restoring from a backup"),(0,o.kt)("p",null,"Ensure your Agora node is turned off if restoring a backup. You can restore an Agora chain DB from a backup file with the following command:"),(0,o.kt)(l.Z,{groupId:"operating-systems",defaultValue:"lin",values:[{label:"Linux",value:"lin"},{label:"Windows",value:"win"},{label:"MacOS",value:"mac"},{label:"Arm64",value:"arm"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"lin",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using the Agora-cl installation script")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"agora-cl.sh beacon-chain db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using Bazel")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"bazel run //beacon-chain -- db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir\n"))),(0,o.kt)(s.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using the Agora-cl installation script")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"agora-cl.bat beacon-chain db restore --restore-source-file=\\path\\to\\backup --restore-target-dir=\\path\\to\\desired\\datadir\n"))),(0,o.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using the Agora-cl installation script")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"agora-cl.sh beacon-chain db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using Bazel")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"bazel run //beacon-chain -- db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir\n"))),(0,o.kt)(s.Z,{value:"arm",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using the Agora-cl installation script")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"agora-cl.sh beacon-chain db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using Bazel")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"bazel run //beacon-chain -- db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir\n")))),(0,o.kt)("h2",{id:"validator-client"},"Validator client"),(0,o.kt)("h3",{id:"add-the-backup-webhook-flags-to-your-validator-client"},"Add the backup webhook flags to your validator client"),(0,o.kt)("p",null,"Add the following flags to your validator client:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--enable-db-backup-webhook"),": Serve an http server to initiate database backups. The handler is served on the validator client's monitoring host and port. Default endpoint is ",(0,o.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:8081/db/backup")," if the flag is enabled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--db-backup-output-dir"),": Folder path to where backups will be output to, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"/path/to/mybackups"),".")),(0,o.kt)("p",null,"Now, your validator client will expose an HTTP endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"http://monitoringhost:monitoringport/db/backup"),", which is ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8081/db/backup")," by default. You can hit this endpoint using curl or any other tool you prefer, and a backup will initiate which will be output to your ",(0,o.kt)("inlineCode",{parentName:"p"},"--db-backup-output-dir")," path."),(0,o.kt)("h3",{id:"restoring-from-a-backup-1"},"Restoring from a backup"),(0,o.kt)("p",null,"Ensure your validator client is turned off if restoring a backup. You can restore a validator DB from a backup file with the following command:"),(0,o.kt)(l.Z,{groupId:"operating-systems",defaultValue:"lin",values:[{label:"Linux",value:"lin"},{label:"Windows",value:"win"},{label:"MacOS",value:"mac"},{label:"Arm64",value:"arm"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"lin",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using the Agora-cl installation script")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"agora-cl.sh validator db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using Bazel")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"bazel run //validator -- db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir\n"))),(0,o.kt)(s.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using the Agora-cl installation script")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"agora-cl.bat validator db restore --restore-source-file=\\path\\to\\backup --restore-target-dir=\\path\\to\\desired\\datadir\n"))),(0,o.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using the Agora-cl installation script")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"agora-cl.sh validator db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using Bazel")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"bazel run //validator -- db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir\n"))),(0,o.kt)(s.Z,{value:"arm",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using the Agora-cl installation script")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"agora-cl.sh validator db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using Bazel")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"bazel run //validator -- db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir\n")))),(0,o.kt)(d.M,{mdxType:"RequestUpdateWidget"}))}g.isMDXComponent=!0},6010:(e,a,t)=>{function r(e){var a,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=r(e[a]))&&(n&&(n+=" "),n+=t);else for(a in e)e[a]&&(n&&(n+=" "),n+=a);return n}function n(){for(var e,a,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(a=r(e))&&(n&&(n+=" "),n+=a);return n}t.d(a,{Z:()=>n})}}]);