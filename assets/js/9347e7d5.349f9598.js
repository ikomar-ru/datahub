"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8965],{4137:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5574:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(4137)),i=["components"],o={title:"ClickHouse",sidebar_label:"ClickHouse",slug:"/metadata-ingestion/source_docs/clickhouse",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source_docs/clickhouse.md"},s="ClickHouse",d={unversionedId:"metadata-ingestion/source_docs/clickhouse",id:"metadata-ingestion/source_docs/clickhouse",isDocsHomePage:!1,title:"ClickHouse",description:"For context on getting started with ingestion, check out our metadata ingestion guide.",source:"@site/genDocs/metadata-ingestion/source_docs/clickhouse.md",sourceDirName:"metadata-ingestion/source_docs",slug:"/metadata-ingestion/source_docs/clickhouse",permalink:"/docs/metadata-ingestion/source_docs/clickhouse",editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source_docs/clickhouse.md",tags:[],version:"current",frontMatter:{title:"ClickHouse",sidebar_label:"ClickHouse",slug:"/metadata-ingestion/source_docs/clickhouse",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source_docs/clickhouse.md"},sidebar:"overviewSidebar",previous:{title:"Business Glossary",permalink:"/docs/metadata-ingestion/source_docs/business_glossary"},next:{title:"Data lake files",permalink:"/docs/metadata-ingestion/source_docs/data_lake"}},p=[{value:"Setup",id:"setup",children:[],level:2},{value:"Capabilities",id:"capabilities",children:[],level:2},{value:"Quickstart recipe",id:"quickstart-recipe",children:[],level:2},{value:"Config details",id:"config-details",children:[],level:2},{value:"Setup",id:"setup-1",children:[],level:2},{value:"Capabilities",id:"capabilities-1",children:[],level:2},{value:"Quickstart recipe",id:"quickstart-recipe-1",children:[],level:2},{value:"Config details",id:"config-details-1",children:[],level:2},{value:"Questions",id:"questions",children:[],level:2}],u={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"clickhouse"},"ClickHouse"),(0,l.kt)("p",null,"For context on getting started with ingestion, check out our ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("p",null,"To install this plugin, run ",(0,l.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[clickhouse]'"),"."),(0,l.kt)("h2",{id:"capabilities"},"Capabilities"),(0,l.kt)("p",null,"This plugin extracts the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Metadata for tables, views, materialized views and dictionaries"),(0,l.kt)("li",{parentName:"ul"},"Column types associated with each table(except *AggregateFunction and DateTime with timezone)"),(0,l.kt)("li",{parentName:"ul"},"Table, row, and column statistics via optional ",(0,l.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/sql_profiles"},"SQL profiling")),(0,l.kt)("li",{parentName:"ul"},"Table, view, materialized view and dictionary(with CLICKHOUSE source_type) lineage")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can also get fine-grained usage statistics for ClickHouse using the ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-usage")," source described below."))),(0,l.kt)("h2",{id:"quickstart-recipe"},"Quickstart recipe"),(0,l.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,l.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,l.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"source:\n  type: clickhouse\n  config:\n    # Coordinates\n    host_port: localhost:9000\n\n    # Credentials\n    username: user\n    password: pass\n\n    # Options\n    platform_instance: DatabaseNameToBeIngested\n\n    include_views: True # whether to include views, defaults to True\n    include_tables: True # whether to include views, defaults to True\n\nsink:\n  # sink configs\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Extra options to use encryption connection or different interface"),(0,l.kt)("p",null,"For the HTTP interface:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"source:\n  type: clickhouse\n  config:\n    host_port: localhost:8443\n    protocol: https\n\n")),(0,l.kt)("p",null,"For the Native interface:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"source:\n  type: clickhouse\n  config:\n    host_port: localhost:9440\n    scheme: clickhouse+native\n    secure: True\n"))),(0,l.kt)("h2",{id:"config-details"},"Config details"),(0,l.kt)("p",null,"Like all SQL-based sources, the ClickHouse integration supports:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Stale Metadata Deletion: See ",(0,l.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/stateful_ingestion"},"here")," for more details on configuration."),(0,l.kt)("li",{parentName:"ul"},"SQL Profiling: See ",(0,l.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/sql_profiles"},"here")," for more details on configuration.")),(0,l.kt)("p",null,"Note that a ",(0,l.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"username")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ClickHouse username.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"password")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ClickHouse password.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"host_port")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ClickHouse host URL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"database")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ClickHouse database to connect.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"env")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"PROD"')),(0,l.kt)("td",{parentName:"tr",align:null},"Environment to use in namespace when constructing URNs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"platform_instance")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"The Platform instance to use while constructing URNs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options.<option>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Any options specified here will be passed to SQLAlchemy's ",(0,l.kt)("inlineCode",{parentName:"td"},"create_engine")," as kwargs.",(0,l.kt)("br",null),"See ",(0,l.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine"},"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine")," for details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table_pattern.allow")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to include in ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table_pattern.deny")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to exclude from ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table_pattern.ignoreCase")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schema_pattern.allow")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for schemas to include in ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schema_pattern.deny")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for schemas to exclude from ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schema_pattern.ignoreCase")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"view_pattern.allow")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for views to include in ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"view_pattern.deny")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for views to exclude from ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"view_pattern.ignoreCase")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"include_tables")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether tables should be ingested.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"include_views")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether views should be ingested.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"include_table_lineage")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether table lineage should be ingested.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"profiling")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"See the defaults for ",(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/sql_profiles#Config-details"},"profiling config"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/sql_profiles#Config-details"},"profiling config"),".")))),(0,l.kt)("h1",{id:"clickhouse-usage-stats"},"ClickHouse Usage Stats"),(0,l.kt)("p",null,"This plugin extracts usage statistics for datasets in ClickHouse. For context on getting started with ingestion, check out our ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,l.kt)("p",null,"Note: Usage information is computed by querying the system.query_log table. In case you have a cluster or need to apply additional transformation/filters you can create a view and put to the ",(0,l.kt)("inlineCode",{parentName:"p"},"query_log_table")," setting."),(0,l.kt)("h2",{id:"setup-1"},"Setup"),(0,l.kt)("p",null,"To install this plugin, run ",(0,l.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[clickhouse-usage]'"),"."),(0,l.kt)("h2",{id:"capabilities-1"},"Capabilities"),(0,l.kt)("p",null,"This plugin has the below functionalities -"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"For a specific dataset this plugin ingests the following statistics -",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"top n queries."),(0,l.kt)("li",{parentName:"ol"},"top users."),(0,l.kt)("li",{parentName:"ol"},"usage of each column in the dataset."))),(0,l.kt)("li",{parentName:"ol"},"Aggregation of these statistics into buckets, by day or hour granularity.")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This source only does usage statistics. To get the tables, views, and schemas in your ClickHouse warehouse, ingest using the ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse")," source described above."))),(0,l.kt)("h2",{id:"quickstart-recipe-1"},"Quickstart recipe"),(0,l.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,l.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,l.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: clickhouse-usage\n  config:\n    # Coordinates\n    host_port: db_host:port\n    platform_instance: dev_cluster\n    email_domain: acryl.io\n\n    # Credentials\n    username: username\n    password: "password"\n\nsink:\n# sink configs\n')),(0,l.kt)("h2",{id:"config-details-1"},"Config details"),(0,l.kt)("p",null,"Note that a ",(0,l.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,l.kt)("p",null,"By default, we extract usage stats for the last day, with the recommendation that this source is executed every day."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"username")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ClickHouse username.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"password")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ClickHouse password.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"host_port")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ClickHouse host URL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"database")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ClickHouse database to connect.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"env")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"PROD"')),(0,l.kt)("td",{parentName:"tr",align:null},"Environment to use in namespace when constructing URNs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"platform_instance")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"The Platform instance to use while constructing URNs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options.<option>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Any options specified here will be passed to SQLAlchemy's ",(0,l.kt)("inlineCode",{parentName:"td"},"create_engine")," as kwargs.",(0,l.kt)("br",null),"See ",(0,l.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine"},"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine")," for details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"email_domain")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Email domain of your organisation so users can be displayed on UI appropriately.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"start_time")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Last full day in UTC (or hour, depending on ",(0,l.kt)("inlineCode",{parentName:"td"},"bucket_duration"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"Earliest date of usage to consider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"end_time")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Last full day in UTC (or hour, depending on ",(0,l.kt)("inlineCode",{parentName:"td"},"bucket_duration"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest date of usage to consider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"top_n_queries")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},"Number of top queries to save to each table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"include_operational_stats")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to display operational stats.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bucket_duration")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"DAY"')),(0,l.kt)("td",{parentName:"tr",align:null},"Size of the time window to aggregate usage stats.")))),(0,l.kt)("h2",{id:"questions"},"Questions"),(0,l.kt)("p",null,"If you've got any questions on configuring this source, feel free to ping us on ",(0,l.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io/"},"our Slack"),"!"))}m.isMDXComponent=!0}}]);