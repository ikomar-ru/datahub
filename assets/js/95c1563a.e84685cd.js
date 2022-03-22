"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3602],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=p(n),h=r,c=g["".concat(s,".").concat(h)]||g[h]||u[h]||i;return n?a.createElement(c,o(o({ref:t},d),{},{components:n})):a.createElement(c,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8749:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return g}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),o=["components"],l={title:"Datahub's Reporting Framework for Ingestion Job Telemetry",sidebar_label:"Datahub's Reporting Framework for Ingestion Job Telemetry",slug:"/metadata-ingestion/source_docs/reporting_telemetry",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source_docs/reporting_telemetry.md"},s="Datahub's Reporting Framework for Ingestion Job Telemetry",p={unversionedId:"metadata-ingestion/source_docs/reporting_telemetry",id:"metadata-ingestion/source_docs/reporting_telemetry",isDocsHomePage:!1,title:"Datahub's Reporting Framework for Ingestion Job Telemetry",description:"The Datahub's reporting framework allows for configuring reporting providers with the ingestion pipelines to send",source:"@site/genDocs/metadata-ingestion/source_docs/reporting_telemetry.md",sourceDirName:"metadata-ingestion/source_docs",slug:"/metadata-ingestion/source_docs/reporting_telemetry",permalink:"/docs/metadata-ingestion/source_docs/reporting_telemetry",editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source_docs/reporting_telemetry.md",tags:[],version:"current",frontMatter:{title:"Datahub's Reporting Framework for Ingestion Job Telemetry",sidebar_label:"Datahub's Reporting Framework for Ingestion Job Telemetry",slug:"/metadata-ingestion/source_docs/reporting_telemetry",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source_docs/reporting_telemetry.md"},sidebar:"overviewSidebar",previous:{title:"Redshift",permalink:"/docs/metadata-ingestion/source_docs/redshift"},next:{title:"S3",permalink:"/docs/metadata-ingestion/source_docs/s3"}},d=[{value:"Config details",id:"config-details",children:[{value:"Supported sources",id:"supported-sources",children:[],level:4},{value:"Sample configuration",id:"sample-configuration",children:[],level:4}],level:2},{value:"Reporting Ingestion State Provider (Developer Guide)",id:"reporting-ingestion-state-provider-developer-guide",children:[{value:"Datahub Reporting Ingestion State Provider",id:"datahub-reporting-ingestion-state-provider",children:[{value:"Config details",id:"config-details-1",children:[],level:4}],level:3}],level:2}],u={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"datahubs-reporting-framework-for-ingestion-job-telemetry"},"Datahub's Reporting Framework for Ingestion Job Telemetry"),(0,i.kt)("p",null,"The Datahub's reporting framework allows for configuring reporting providers with the ingestion pipelines to send\ntelemetry about the ingestion job runs to external systems for monitoring purposes. It is powered by the Datahub's\nstateful ingestion framework. The ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub")," reporting provider comes with the standard client installation,\nand allows for reporting ingestion job telemetry to the datahub backend as the destination."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"NOTE")),": This feature requires the server to be ",(0,i.kt)("inlineCode",{parentName:"p"},"statefulIngestion")," capable.\nThis is a feature of metadata service with version >= ",(0,i.kt)("inlineCode",{parentName:"p"},"0.8.20"),"."),(0,i.kt)("p",null,"To check if you are running a stateful ingestion capable server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'curl http://<datahub-gms-endpoint>/config\n\n{\nmodels: { },\nstatefulIngestionCapable: true, # <-- this should be present and true\nretention: "true",\nnoCode: "true"\n}\n')),(0,i.kt)("h2",{id:"config-details"},"Config details"),(0,i.kt)("p",null,"The ingestion reporting providers are a list of reporting provider configurations under the ",(0,i.kt)("inlineCode",{parentName:"p"},"reporting")," config\nparam of the pipeline, each reporting provider configuration begin a type and config pair object. The telemetry data will\nbe sent to all the reporting providers in this list."),(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields, and ",(0,i.kt)("inlineCode",{parentName:"p"},"[idx]")," is used to denote an element of an array of objects in the YAML recipe."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"reporting[idx].type")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"datahub")),(0,i.kt)("td",{parentName:"tr",align:null},"The type of the ingestion reporting provider registered with datahub.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"reporting[idx].config")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"datahub_api")," config if set at pipeline level. Otherwise, the default ",(0,i.kt)("inlineCode",{parentName:"td"},"DatahubClientConfig"),". See the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/graph/client.py#L19"},"defaults")," here."),(0,i.kt)("td",{parentName:"tr",align:null},"The configuration required for initializing the datahub reporting provider.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pipeline_name")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the ingestion pipeline. This is used as a part of the identifying key for the telemetry data reported by each job in the ingestion pipeline.")))),(0,i.kt)("h4",{id:"supported-sources"},"Supported sources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All sql based sources."),(0,i.kt)("li",{parentName:"ul"},"snowflake_usage.")),(0,i.kt)("h4",{id:"sample-configuration"},"Sample configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "snowflake"\n  config:\n    username: <user_name>\n    password: <password>\n    role: <role>\n    host_port: <host_port>\n    warehouse: <ware_house>\n    # Rest of the source specific params ...\n# This is mandatory. Changing it will cause old telemetry correlation to be lost.\npipeline_name: "my_snowflake_pipeline_1"\n\n# Pipeline-level datahub_api configuration.\ndatahub_api: # Optional. But if provided, this config will be used by the "datahub" ingestion state provider.\n    server: "http://localhost:8080"\n    \nsink:\n  type: "datahub-rest"\n  config:\n    server: \'http://localhost:8080\'\n\nreporting:\n  - type: "datahub" # Required\n    config: # Optional. \n      datahub_api: # default value\n        server: "http://localhost:8080"\n')),(0,i.kt)("h2",{id:"reporting-ingestion-state-provider-developer-guide"},"Reporting Ingestion State Provider (Developer Guide)"),(0,i.kt)("p",null,"An ingestion reporting state provider is responsible for saving and retrieving the ingestion telemetry\nassociated with the ingestion runs of various jobs inside the source connector of the ingestion pipeline.\nThe data model used for capturing the telemetry is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/datajob/datahub/DatahubIngestionRunSummary.pdl"},"DatahubIngestionRunSummary"),".\nA reporting ingestion state provider needs to implement the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/api/ingestion_job_reporting_provider_base.py"},"IngestionReportingProviderBase"),"\ninterface and register itself with datahub by adding an entry under ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub.ingestion.checkpointing_provider.plugins"),"\nkey of the entry_points section in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/setup.py"},"setup.py"),"\nwith its type and implementation class as shown below. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'entry_points = {\n    # <snip other keys>"\n    "datahub.ingestion.checkpointing_provider.plugins": [\n        "datahub = datahub.ingestion.source.state_provider.datahub_ingestion_checkpointing_provider:DatahubIngestionCheckpointingProvider",\n    ],\n}\n')),(0,i.kt)("h3",{id:"datahub-reporting-ingestion-state-provider"},"Datahub Reporting Ingestion State Provider"),(0,i.kt)("p",null,"This is the reporting state provider implementation that is available out of the box in datahub. Its type is ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub")," and it is implemented on top\nof the ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub_api")," client and the timeseries aspect capabilities of the datahub-backend."),(0,i.kt)("h4",{id:"config-details-1"},"Config details"),(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"datahub")),(0,i.kt)("td",{parentName:"tr",align:null},"The type of the ingestion reporting provider registered with datahub.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"config")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"datahub_api")," config if set at pipeline level. Otherwise, the default ",(0,i.kt)("inlineCode",{parentName:"td"},"DatahubClientConfig"),". See the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/graph/client.py#L19"},"defaults")," here."),(0,i.kt)("td",{parentName:"tr",align:null},"The configuration required for initializing the datahub reporting provider.")))))}g.isMDXComponent=!0}}]);