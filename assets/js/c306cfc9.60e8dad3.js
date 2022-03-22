"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3121],{4137:function(e,t,o){o.d(t,{Zo:function(){return l},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=c(o),m=r,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return o?n.createElement(h,s(s({ref:t},l),{},{components:o})):n.createElement(h,s({ref:t},l))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},6326:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=o(7462),r=o(3366),i=(o(7294),o(4137)),s=["components"],a={title:"Using a Custom Ingestion Source",sidebar_label:"Using a Custom Ingestion Source",slug:"/how/add-custom-ingestion-source",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-custom-ingestion-source.md"},u="How to use a custom ingestion source without forking Datahub?",c={unversionedId:"docs/how/add-custom-ingestion-source",id:"docs/how/add-custom-ingestion-source",isDocsHomePage:!1,title:"Using a Custom Ingestion Source",description:"Adding a custom ingestion source is the easiest way to extend Datahubs ingestion framework to support source systems",source:"@site/genDocs/docs/how/add-custom-ingestion-source.md",sourceDirName:"docs/how",slug:"/how/add-custom-ingestion-source",permalink:"/docs/how/add-custom-ingestion-source",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-custom-ingestion-source.md",tags:[],version:"current",frontMatter:{title:"Using a Custom Ingestion Source",sidebar_label:"Using a Custom Ingestion Source",slug:"/how/add-custom-ingestion-source",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-custom-ingestion-source.md"},sidebar:"overviewSidebar",previous:{title:"Adding a Metadata Ingestion Source",permalink:"/docs/metadata-ingestion/adding-source"},next:{title:"Adding a custom Dataset Data Platform",permalink:"/docs/how/add-custom-data-platform"}},l=[{value:"What you need to do",id:"what-you-need-to-do",children:[{value:"How to use this source?",id:"how-to-use-this-source",children:[],level:3},{value:"Example code?",id:"example-code",children:[],level:3}],level:2}],d={toc:l};function p(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-use-a-custom-ingestion-source-without-forking-datahub"},"How to use a custom ingestion source without forking Datahub?"),(0,i.kt)("p",null,"Adding a custom ingestion source is the easiest way to extend Datahubs ingestion framework to support source systems\nwhich are not yet officially supported by Datahub."),(0,i.kt)("h2",{id:"what-you-need-to-do"},"What you need to do"),(0,i.kt)("p",null,"First thing to do is building a custom source like it is described in\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/adding-source"},"metadata-ingestion source guide")," in your own project."),(0,i.kt)("h3",{id:"how-to-use-this-source"},"How to use this source?"),(0,i.kt)("p",null,"To be able to use this source you just need to do a few things."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Build a python package out of your project including the custom source class."),(0,i.kt)("li",{parentName:"ol"},"Install this package in your working environment where you are using the Datahub CLI to ingest metadata.")),(0,i.kt)("p",null,"Now you are able to just reference your ingestion source class as a type in the YAML recipe by using the fully qualified\npackage name. For example if your project structure looks like this ",(0,i.kt)("inlineCode",{parentName:"p"},"<project>/src/my-source/custom_ingestion_source.py"),"\nwith the custom source class named ",(0,i.kt)("inlineCode",{parentName:"p"},"MySourceClass")," your YAML recipe would look like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n  type: my-source.custom_ingestion_source.MySourceClass\n  config:\n  # place for your custom config defined in the configModel\n")),(0,i.kt)("p",null,"If you now execute the ingestion the datahub client will pick up your code and call the ",(0,i.kt)("inlineCode",{parentName:"p"},"get_workunits")," method and do\nthe rest for you. That's it."),(0,i.kt)("h3",{id:"example-code"},"Example code?"),(0,i.kt)("p",null,"For examples how this setup could look like and a good starting point for building your first custom source visit\nour ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/acryldata/meta-world"},"meta-world")," example repository."))}p.isMDXComponent=!0}}]);