"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5618],{4137:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return b}});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),p=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),b=n,u=m["".concat(s,".").concat(b)]||m[b]||c[b]||i;return t?r.createElement(u,o(o({ref:a},d),{},{components:t})):r.createElement(u,o({ref:a},d))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},577:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=t(7462),n=t(3366),i=(t(7294),t(4137)),o=["components"],l={title:"Lineage sample code",sidebar_label:"Lineage sample code",slug:"/lineage/sample_code",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/lineage/sample_code.md"},s="Lineage sample code",p={unversionedId:"docs/lineage/sample_code",id:"docs/lineage/sample_code",isDocsHomePage:!1,title:"Lineage sample code",description:"The following samples will cover emitting dataset-to-dataset, dataset-to-job-to-dataset, chart-to-dataset, dashboard-to-chart and job-to-dataflow lineages.",source:"@site/genDocs/docs/lineage/sample_code.md",sourceDirName:"docs/lineage",slug:"/lineage/sample_code",permalink:"/docs/lineage/sample_code",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/lineage/sample_code.md",tags:[],version:"current",frontMatter:{title:"Lineage sample code",sidebar_label:"Lineage sample code",slug:"/lineage/sample_code",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/lineage/sample_code.md"},sidebar:"overviewSidebar",previous:{title:"Running Airflow locally with DataHub",permalink:"/docs/docker/airflow/local_airflow"},next:{title:"Spark Integration",permalink:"/docs/metadata-integration/java/spark-lineage"}},d=[],c={toc:d};function m(e){var a=e.components,t=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lineage-sample-code"},"Lineage sample code"),(0,i.kt)("p",null,"The following samples will cover emitting dataset-to-dataset, dataset-to-job-to-dataset, chart-to-dataset, dashboard-to-chart and job-to-dataflow lineages."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/library/lineage_emitter_mcpw_rest.py"},"lineage_emitter_mcpw_rest.py")," - emits simple bigquery table-to-table (dataset-to-dataset) lineage via REST as MetadataChangeProposalWrapper."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/library/lineage_dataset_job_dataset.py"},"lineage_dataset_job_dataset.py")," - emits mysql-to-airflow-to-kafka (dataset-to-job-to-dataset) lineage via REST as MetadataChangeProposalWrapper."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/library/lineage_dataset_chart.py"},"lineage_dataset_chart.py")," - emits the dataset-to-chart lineage via REST as MetadataChangeProposalWrapper."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/library/lineage_chart_dashboard.py"},"lineage_chart_dashboard.py")," - emits the chart-to-dashboard lineage via REST as MetadataChangeProposalWrapper."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/library/lineage_job_dataflow.py"},"lineage_job_dataflow.py")," - emits the job-to-dataflow lineage via REST as MetadataChangeProposalWrapper."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/library/lineage_emitter_rest.py"},"lineage_emitter_rest.py")," - emits simple dataset-to-dataset lineage via REST as MetadataChangeEvent."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/library/lineage_emitter_kafka.py"},"lineage_emitter_kafka.py")," - emits simple dataset-to-dataset lineage via Kafka as MetadataChangeEvent."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/library/lineage_emitter_dataset_finegrained.py"},"lineage_emitter_dataset_finegrained.py")," - emits fine-grained dataset-dataset lineage via REST as MetadataChangeProposalWrapper."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/library/lineage_emitter_datajob_finegrained.py"},"lineage_emitter_datajob_finegrained.py")," - emits fine-grained datajob-dataset lineage via REST as MetadataChangeProposalWrapper."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/sql/snowflake.py#L249"},"Datahub Snowflake Lineage")," - emits Datahub's Snowflake lineage as MetadataChangeProposalWrapper."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/a1bf95307b040074c8d65ebb86b5eb177fdcd591/metadata-ingestion/src/datahub/ingestion/source/sql/bigquery.py#L229"},"Datahub Bigquery Lineage")," - emits Datahub's Bigquery lineage as MetadataChangeProposalWrapper."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/a9754ebe83b6b73bc2bfbf49d9ebf5dbd2ca5a8f/metadata-ingestion/src/datahub/ingestion/source/dbt.py#L625,L630"},"Datahub Dbt Lineage")," - emits Datahub's DBT lineage as MetadataChangeEvent.")),(0,i.kt)("p",null,"NOTE:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Emitting aspects as MetadataChangeProposalWrapper is recommended over emitting aspects via the\nMetadataChangeEvent."),(0,i.kt)("li",{parentName:"ul"},"Emitting any aspect associated with an entity completely overwrites the previous\nvalue of the aspect associated with the entity. This means that emitting a lineage aspect associated with a dataset will overwrite lineage edges that already exist.")))}m.isMDXComponent=!0}}]);