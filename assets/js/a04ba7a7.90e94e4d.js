"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8291],{4137:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),p=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=p(a),k=r,c=m["".concat(u,".").concat(k)]||m[k]||d[k]||i;return a?n.createElement(c,l(l({ref:e},s),{},{components:a})):n.createElement(c,l({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},841:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(4137)),l=["components"],o={title:"Okta",sidebar_label:"Okta",slug:"/metadata-ingestion/source_docs/okta",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source_docs/okta.md"},u="Okta",p={unversionedId:"metadata-ingestion/source_docs/okta",id:"metadata-ingestion/source_docs/okta",isDocsHomePage:!1,title:"Okta",description:"For context on getting started with ingestion, check out our metadata ingestion guide.",source:"@site/genDocs/metadata-ingestion/source_docs/okta.md",sourceDirName:"metadata-ingestion/source_docs",slug:"/metadata-ingestion/source_docs/okta",permalink:"/docs/metadata-ingestion/source_docs/okta",editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source_docs/okta.md",tags:[],version:"current",frontMatter:{title:"Okta",sidebar_label:"Okta",slug:"/metadata-ingestion/source_docs/okta",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source_docs/okta.md"},sidebar:"overviewSidebar",previous:{title:"Nifi",permalink:"/docs/metadata-ingestion/source_docs/nifi"},next:{title:"OpenApi Metadata",permalink:"/docs/metadata-ingestion/source_docs/openapi"}},s=[{value:"Setup",id:"setup",children:[],level:2},{value:"Capabilities",id:"capabilities",children:[{value:"Extracting DataHub Users",id:"extracting-datahub-users",children:[{value:"Usernames",id:"usernames",children:[],level:4},{value:"Profiles",id:"profiles",children:[],level:4}],level:3},{value:"Extracting DataHub Groups",id:"extracting-datahub-groups",children:[{value:"Group Names",id:"group-names",children:[],level:4},{value:"Profiles",id:"profiles-1",children:[],level:4}],level:3},{value:"Extracting Group Membership",id:"extracting-group-membership",children:[],level:3}],level:2},{value:"Quickstart recipe",id:"quickstart-recipe",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Compatibility",id:"compatibility",children:[],level:2},{value:"Questions",id:"questions",children:[],level:2}],d={toc:s};function m(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"okta"},"Okta"),(0,i.kt)("p",null,"For context on getting started with ingestion, check out our ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"To install this plugin, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[okta]'"),"."),(0,i.kt)("h2",{id:"capabilities"},"Capabilities"),(0,i.kt)("p",null,"This plugin extracts the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users"),(0,i.kt)("li",{parentName:"ul"},"Groups"),(0,i.kt)("li",{parentName:"ul"},"Group Membership")),(0,i.kt)("p",null,"from your Okta instance. "),(0,i.kt)("h3",{id:"extracting-datahub-users"},"Extracting DataHub Users"),(0,i.kt)("h4",{id:"usernames"},"Usernames"),(0,i.kt)("p",null,'Usernames serve as unique identifiers for users on DataHub. This connector extracts usernames using the\n"login" field of an ',(0,i.kt)("a",{parentName:"p",href:"https://developer.okta.com/docs/reference/api/users/#profile-object"},"Okta User Profile"),".\nBy default, the 'login' attribute, which contains an email, is parsed to extract the text before the \"@\" and map that to the DataHub username."),(0,i.kt)("p",null,"If this is not how you wish to map to DataHub usernames, you can provide a custom mapping using the configurations options detailed below. Namely, ",(0,i.kt)("inlineCode",{parentName:"p"},"okta_profile_to_username_attr"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"okta_profile_to_username_regex"),". "),(0,i.kt)("h4",{id:"profiles"},"Profiles"),(0,i.kt)("p",null,"This connector also extracts basic user profile information from Okta. The following fields of the Okta User Profile are extracted\nand mapped to the DataHub ",(0,i.kt)("inlineCode",{parentName:"p"},"CorpUserInfo")," aspect:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"display name "),(0,i.kt)("li",{parentName:"ul"},"first name"),(0,i.kt)("li",{parentName:"ul"},"last name"),(0,i.kt)("li",{parentName:"ul"},"email"),(0,i.kt)("li",{parentName:"ul"},"title"),(0,i.kt)("li",{parentName:"ul"},"department"),(0,i.kt)("li",{parentName:"ul"},"country code ")),(0,i.kt)("h3",{id:"extracting-datahub-groups"},"Extracting DataHub Groups"),(0,i.kt)("h4",{id:"group-names"},"Group Names"),(0,i.kt)("p",null,'Group names serve as unique identifiers for groups on DataHub. This connector extracts group names using the "name" attribute of an Okta Group Profile.\nBy default, a URL-encoded version of the full group name is used as the unique identifier (CorpGroupKey) and the raw "name" attribute is mapped\nas the display name that will appear in DataHub\'s UI. '),(0,i.kt)("p",null,"If this is not how you wish to map to DataHub group names, you can provide a custom mapping using the configurations options detailed below. Namely, ",(0,i.kt)("inlineCode",{parentName:"p"},"okta_profile_to_group_name_attr"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"okta_profile_to_group_name_regex"),"."),(0,i.kt)("h4",{id:"profiles-1"},"Profiles"),(0,i.kt)("p",null,"This connector also extracts basic group information from Okta. The following fields of the Okta Group Profile are extracted and mapped to the\nDataHub ",(0,i.kt)("inlineCode",{parentName:"p"},"CorpGroupInfo")," aspect:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"name"),(0,i.kt)("li",{parentName:"ul"},"description")),(0,i.kt)("h3",{id:"extracting-group-membership"},"Extracting Group Membership"),(0,i.kt)("p",null,"This connector additional extracts the edges between Users and Groups that are stored in Okta. It maps them to the ",(0,i.kt)("inlineCode",{parentName:"p"},"GroupMembership")," aspect\nassociated with DataHub users (CorpUsers). Today this has the unfortunate side effect of ",(0,i.kt)("strong",{parentName:"p"},"overwriting")," any Group Membership information that\nwas created outside of the connector. That means if you've used the DataHub REST API to assign users to groups, this information will be overridden\nwhen the Okta source is executed. If you intend to ",(0,i.kt)("em",{parentName:"p"},"always")," pull users, groups, and their relationships from your Identity Provider, then\nthis should not matter. "),(0,i.kt)("p",null,"This is a known limitation in our data model that is being tracked by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/issues/3065"},"this ticket"),"."),(0,i.kt)("h2",{id:"quickstart-recipe"},"Quickstart recipe"),(0,i.kt)("p",null,"As a prerequisite, you should ",(0,i.kt)("a",{parentName:"p",href:"https://developer.okta.com/docs/guides/sign-into-web-app/aspnet/create-okta-application/"},"create a DataHub Application")," within the Okta Developer Console with full permissions\nto read your organization's Users and Groups. "),(0,i.kt)("p",null,"You can use the following recipe to get started with Okta ingestion! See ",(0,i.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: okta\n  config:\n    # Coordinates\n    okta_domain: "dev-35531955.okta.com"\n\n    # Credentials\n    okta_api_token: "11be4R_M2MzDqXawbTHfKGpKee0kuEOfX1RCQSRx99"\n\nsink:\n  # sink configs\n')),(0,i.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML configuration block."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"okta_domain")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The location of your Okta Domain, without a protocol. Can be found in Okta Developer console.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"okta_api_token")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"An API token generated for the DataHub application inside your Okta Developer Console.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ingest_users")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether users should be ingested into DataHub.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ingest_groups")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether groups should be ingested into DataHub.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ingest_group_membership")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether group membership should be ingested into DataHub. ingest_groups must be True if this is True.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"okta_profile_to_username_attr")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"login"')),(0,i.kt)("td",{parentName:"tr",align:null},"Which Okta User Profile attribute to use as input to DataHub username mapping.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"okta_profile_to_username_regex")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"([^@]+)"')),(0,i.kt)("td",{parentName:"tr",align:null},"A regex used to parse the DataHub username from the attribute specified in ",(0,i.kt)("inlineCode",{parentName:"td"},"okta_profile_to_username_attr"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"okta_profile_to_group_name_attr")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"name"')),(0,i.kt)("td",{parentName:"tr",align:null},"Which Okta Group Profile attribute to use as input to DataHub group name mapping.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"okta_profile_to_group_name_regex")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"(.*)"')),(0,i.kt)("td",{parentName:"tr",align:null},"A regex used to parse the DataHub group name from the attribute specified in ",(0,i.kt)("inlineCode",{parentName:"td"},"okta_profile_to_group_name_attr"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"include_deprovisioned_users")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to ingest users in the DEPROVISIONED state from Okta.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"include_suspended_users")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to ingest users in the SUSPENDED state from Okta.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page_size")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"100")),(0,i.kt)("td",{parentName:"tr",align:null},"The number of entities requested from Okta's REST APIs in one request.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"delay_seconds")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0.01")),(0,i.kt)("td",{parentName:"tr",align:null},"Number of seconds to wait between calls to Okta's REST APIs. (Okta rate limits). Defaults to 10ms.")))),(0,i.kt)("h2",{id:"compatibility"},"Compatibility"),(0,i.kt)("p",null," Validated against Okta API Versions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"2021.07.2")),(0,i.kt)("p",{parentName:"li"},"Validated against load:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"User Count: ",(0,i.kt)("inlineCode",{parentName:"p"},"1000"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Group Count: ",(0,i.kt)("inlineCode",{parentName:"p"},"100"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Group Membership Edges: ",(0,i.kt)("inlineCode",{parentName:"p"},"1000")," (1 per User)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Run Time (Wall Clock): ",(0,i.kt)("inlineCode",{parentName:"p"},"2min 7sec")))),(0,i.kt)("h2",{id:"questions"},"Questions"),(0,i.kt)("p",null,"If you've got any questions on configuring this source, feel free to ping us on ",(0,i.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io/"},"our Slack"),"!"))}m.isMDXComponent=!0}}]);