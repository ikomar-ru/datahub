"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5507],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},389:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=["components"],l={title:"Configuring Database Retention",sidebar_label:"Configuring Database Retention",slug:"/advanced/db-retention",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/db-retention.md"},s="Configuring Database Retention",p={unversionedId:"docs/advanced/db-retention",id:"docs/advanced/db-retention",isDocsHomePage:!1,title:"Configuring Database Retention",description:"Goal",source:"@site/genDocs/docs/advanced/db-retention.md",sourceDirName:"docs/advanced",slug:"/advanced/db-retention",permalink:"/docs/advanced/db-retention",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/db-retention.md",tags:[],version:"current",frontMatter:{title:"Configuring Database Retention",sidebar_label:"Configuring Database Retention",slug:"/advanced/db-retention",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/db-retention.md"},sidebar:"overviewSidebar",previous:{title:"No Code Metadata",permalink:"/docs/advanced/no-code-modeling"},next:{title:"Aspect Versioning",permalink:"/docs/advanced/aspect-versioning"}},c=[{value:"Goal",id:"goal",children:[],level:2},{value:"What type of retention policies are supported?",id:"what-type-of-retention-policies-are-supported",children:[],level:2},{value:"When is the retention policy applied?",id:"when-is-the-retention-policy-applied",children:[],level:2},{value:"How to configure?",id:"how-to-configure",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuring-database-retention"},"Configuring Database Retention"),(0,o.kt)("h2",{id:"goal"},"Goal"),(0,o.kt)("p",null,"DataHub stores different versions of ",(0,o.kt)("a",{parentName:"p",href:"/docs/what/aspect"},"metadata aspects")," as they are ingested\nusing a database (or key-value store).  These multiple versions allow us to look at an aspect's historical changes and\nrollback to a previous version if incorrect metadata is ingested. However, every stored version takes additional storage\nspace, while possibly bringing less value to the system. We need to be able to impose a ",(0,o.kt)("strong",{parentName:"p"},"retention")," policy on these\nrecords to keep the size of the DB in check."),(0,o.kt)("p",null,"Goal of the retention system is to be able to ",(0,o.kt)("strong",{parentName:"p"},"configure and enforce retention policies")," on documents at each of these\nvarious levels:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"global"),(0,o.kt)("li",{parentName:"ul"},"entity-level"),(0,o.kt)("li",{parentName:"ul"},"aspect-level")),(0,o.kt)("h2",{id:"what-type-of-retention-policies-are-supported"},"What type of retention policies are supported?"),(0,o.kt)("p",null,"We support 3 types of retention policies for aspects:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Policy"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Versions Kept"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Indefinite"),(0,o.kt)("td",{parentName:"tr",align:"center"},"All versions")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Version-based"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Latest ",(0,o.kt)("em",{parentName:"td"},"N")," versions")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Time-based"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Versions ingested in last ",(0,o.kt)("em",{parentName:"td"},"N")," seconds")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," The latest version (version 0) is never deleted. This ensures core functionality of DataHub is not impacted while applying retention."),(0,o.kt)("h2",{id:"when-is-the-retention-policy-applied"},"When is the retention policy applied?"),(0,o.kt)("p",null,"As of now, retention policies are applied in two places:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"GMS boot-up"),": A bootstrap step ingests the predefined set of retention policies. If no policy existed before or the existing policy\nwas updated, an asynchronous call will be triggered.  It will apply the retention policy (or policies) to ",(0,o.kt)("strong",{parentName:"li"},"all")," records in the database."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Ingest"),": On every ingest, if an existing aspect got updated, it applies the retention policy to the urn-aspect pair being ingested.")),(0,o.kt)("p",null,"We are planning to support a cron-based application of retention in the near future to ensure that the time-based retention is applied correctly."),(0,o.kt)("h2",{id:"how-to-configure"},"How to configure?"),(0,o.kt)("p",null,"For the initial iteration, we have made this feature opt-in. Please set ",(0,o.kt)("strong",{parentName:"p"},"ENTITY_SERVICE_ENABLE_RETENTION=true")," when\ncreating the datahub-gms container/k8s pod."),(0,o.kt)("p",null,"On GMS start up, retention policies are initialized with:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, the default provided ",(0,o.kt)("strong",{parentName:"li"},"version-based")," retention to keep ",(0,o.kt)("strong",{parentName:"li"},"20 latest aspects")," for all entity-aspect pairs. "),(0,o.kt)("li",{parentName:"ol"},"Second, we read YAML files from the ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/datahub/plugins/retention")," directory and overlay them on the default set of policies we provide.")),(0,o.kt)("p",null,"For docker, we set docker-compose to mount ",(0,o.kt)("inlineCode",{parentName:"p"},"${HOME}/.datahub/plugins")," directory to ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/datahub/plugins")," directory\nwithin the containers, so you can customize the initial set of retention policies by creating\na ",(0,o.kt)("inlineCode",{parentName:"p"},"${HOME}/.datahub/plugins/retention/retention.yaml")," file."),(0,o.kt)("p",null,"We will support a standardized way to do this in Kubernetes setup in the near future. "),(0,o.kt)("p",null,"The format for the YAML file is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'- entity: "*" # denotes that policy will be applied to all entities\n  aspect: "*" # denotes that policy will be applied to all aspects\n  config:\n    retention:\n      version:\n        maxVersions: 20\n- entity: "dataset"\n  aspect: "datasetProperties"\n  config:\n    retention:\n      version:\n        maxVersions: 20\n      time:\n        maxAgeInSeconds: 2592000 # 30 days\n')),(0,o.kt)("p",null,"Note, it searches for the policies corresponding to the entity, aspect pair in the following order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"entity, aspect"),(0,o.kt)("li",{parentName:"ol"},"*, aspect"),(0,o.kt)("li",{parentName:"ol"},"entity, *"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},", "))),(0,o.kt)("p",null,"By restarting datahub-gms after creating the plugin yaml file, the new set of retention policies will be applied."))}u.isMDXComponent=!0}}]);