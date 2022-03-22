"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6011],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(g,r(r({ref:t},s),{},{components:n})):a.createElement(g,r({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1277:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var a=n(7462),i=n(3366),l=(n(7294),n(4137)),r=["components"],o={title:"DataHub React Analytics",sidebar_label:"React Analytics",slug:"/datahub-web-react/src/app/analytics",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/datahub-web-react/src/app/analytics/README.md"},p="DataHub React Analytics",c={unversionedId:"datahub-web-react/src/app/analytics/README",id:"datahub-web-react/src/app/analytics/README",isDocsHomePage:!1,title:"DataHub React Analytics",description:"About",source:"@site/genDocs/datahub-web-react/src/app/analytics/README.md",sourceDirName:"datahub-web-react/src/app/analytics",slug:"/datahub-web-react/src/app/analytics",permalink:"/docs/datahub-web-react/src/app/analytics",editUrl:"https://github.com/datahub-project/datahub/blob/master/datahub-web-react/src/app/analytics/README.md",tags:[],version:"current",frontMatter:{title:"DataHub React Analytics",sidebar_label:"React Analytics",slug:"/datahub-web-react/src/app/analytics",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/datahub-web-react/src/app/analytics/README.md"},sidebar:"overviewSidebar",previous:{title:"Removing Metadata from DataHub",permalink:"/docs/how/delete-metadata"},next:{title:"Developing on Metadata Ingestion",permalink:"/docs/metadata-ingestion/developing"}},s=[{value:"About",id:"about",children:[],level:2},{value:"Configuring an Analytics Provider",id:"configuring-an-analytics-provider",children:[{value:"Mixpanel",id:"mixpanel",children:[],level:3},{value:"Amplitude",id:"amplitude",children:[],level:3},{value:"Google Analytics",id:"google-analytics",children:[],level:3}],level:2},{value:"Verifying your Analytics Setup",id:"verifying-your-analytics-setup",children:[],level:2},{value:"Development",id:"development",children:[{value:"Adding a plugin",id:"adding-a-plugin",children:[],level:3},{value:"Adding an event",id:"adding-an-event",children:[],level:3},{value:"Emitting an event",id:"emitting-an-event",children:[],level:3},{value:"Debugging: Enabling Event Logging",id:"debugging-enabling-event-logging",children:[],level:3}],level:2},{value:"Coming Soon",id:"coming-soon",children:[],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"datahub-react-analytics"},"DataHub React Analytics"),(0,l.kt)("h2",{id:"about"},"About"),(0,l.kt)("p",null,"The DataHub React application can be configured to emit a set of standardized product analytics events to multiple backend providers including"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Mixpanel"),(0,l.kt)("li",{parentName:"ul"},"Amplitude"),(0,l.kt)("li",{parentName:"ul"},"Google Analytics")),(0,l.kt)("p",null,"This provides operators of DataHub with visibility into how their users are engaging with the platform, allowing them to answer questions around weekly active users, the most used features, the least used features, and more."),(0,l.kt)("p",null,"To accomplish this, we have built a small extension on top of the popular ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/analytics"},"Analytics")," npm package. This package was chosen because it offers a clear pathway to extending support to many other providers, all of which you can find listed ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/DavidWells/analytics#analytic-plugins"},"here"),"."),(0,l.kt)("h2",{id:"configuring-an-analytics-provider"},"Configuring an Analytics Provider"),(0,l.kt)("p",null,"Currently, configuring an analytics provider requires that you fork DataHub & modify code. As described in 'Coming Soon', we intend to improve this process by implementing no-code configuration."),(0,l.kt)("h3",{id:"mixpanel"},"Mixpanel"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub-web-react/src/conf/analytics.ts")),(0,l.kt)("li",{parentName:"ol"},"Uncomment the ",(0,l.kt)("inlineCode",{parentName:"li"},"mixpanel")," field within the ",(0,l.kt)("inlineCode",{parentName:"li"},"config")," object."),(0,l.kt)("li",{parentName:"ol"},"Replace the sample ",(0,l.kt)("inlineCode",{parentName:"li"},"token")," with the API token provided by Mixpanel."),(0,l.kt)("li",{parentName:"ol"},"Rebuild & redeploy ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub-frontend-react")," to start tracking.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const config: any = {\n    mixpanel: {\n        token: 'fad1285da4e618b618973cacf6565e61',\n    },\n};\n")),(0,l.kt)("h3",{id:"amplitude"},"Amplitude"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub-web-react/src/conf/analytics.ts")),(0,l.kt)("li",{parentName:"ol"},"Uncomment the ",(0,l.kt)("inlineCode",{parentName:"li"},"amplitude")," field within the ",(0,l.kt)("inlineCode",{parentName:"li"},"config")," object."),(0,l.kt)("li",{parentName:"ol"},"Replace the sample ",(0,l.kt)("inlineCode",{parentName:"li"},"apiKey")," with the key provided by Amplitude."),(0,l.kt)("li",{parentName:"ol"},"Rebuild & redeploy ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub-frontend-react")," to start tracking.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const config: any = {\n    amplitude: {\n        apiKey: 'c5c212632315d19c752ab083bc7c92ff',\n    },\n};\n")),(0,l.kt)("h3",{id:"google-analytics"},"Google Analytics"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Disclaimers")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This plugin requires use of Univeral Analytics and does not yet support GA4. To create a Universal Analytics Property, follow ",(0,l.kt)("a",{parentName:"li",href:"https://www.analyticsmania.com/other-posts/how-to-create-a-universal-analytics-property/"},"this guide"),"."),(0,l.kt)("li",{parentName:"ul"},"Google Analytics lacks robust support for custom event properties. For that reason many of the DataHub events discussed above will not be fully populated. Instead, we map certain fields of the DataHub event to the standard ",(0,l.kt)("inlineCode",{parentName:"li"},"category"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"action"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"label")," fields required by GA.")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub-web-react/src/conf/analytics.ts")),(0,l.kt)("li",{parentName:"ol"},"Uncomment the ",(0,l.kt)("inlineCode",{parentName:"li"},"googleAnalytics")," field within the ",(0,l.kt)("inlineCode",{parentName:"li"},"config")," object."),(0,l.kt)("li",{parentName:"ol"},"Replace the sample ",(0,l.kt)("inlineCode",{parentName:"li"},"trackingId")," with the one provided by Google Analytics."),(0,l.kt)("li",{parentName:"ol"},"Rebuild & redeploy ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub-frontend-react")," to start tracking.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const config: any = {\n    googleAnalytics: {\n        trackingId: 'UA-24123123-01',\n    },\n};\n")),(0,l.kt)("h2",{id:"verifying-your-analytics-setup"},"Verifying your Analytics Setup"),(0,l.kt)("p",null,"To verify that analytics are being sent to your provider, you can inspect the networking tab of a Google Chrome inspector window:"),(0,l.kt)("p",null,"With DataHub open on Google Chrome"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Right click, then Inspect"),(0,l.kt)("li",{parentName:"ol"},"Click 'Network'"),(0,l.kt)("li",{parentName:"ol"},"Issue a search in DataHub"),(0,l.kt)("li",{parentName:"ol"},"Inspect the outbound traffic for requests routed to your analytics provider.")),(0,l.kt)("h2",{id:"development"},"Development"),(0,l.kt)("h3",{id:"adding-a-plugin"},"Adding a plugin"),(0,l.kt)("p",null,"To add a new plugin from the ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/analytics"},"Analytics")," library:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Add a new file under ",(0,l.kt)("inlineCode",{parentName:"li"},"src/app/analytics/plugin")," named based on the plugin"),(0,l.kt)("li",{parentName:"ol"},"Extract configs from the analytics config object required to instantiate the plugin"),(0,l.kt)("li",{parentName:"ol"},"Instantiate the plugin"),(0,l.kt)("li",{parentName:"ol"},"Export a default object with 'isEnabled' and 'plugin' fields"),(0,l.kt)("li",{parentName:"ol"},"Import / Export the new plugin module from ",(0,l.kt)("inlineCode",{parentName:"li"},"src/app/analytics/plugin/index.js"))),(0,l.kt)("p",null,"If you're unsure, check out the existing plugin implements as examples. Before contributing a plugin, please be sure to verify the integration by viewing the product metrics in the new analytics provider."),(0,l.kt)("h3",{id:"adding-an-event"},"Adding an event"),(0,l.kt)("p",null,"To add a new DataHub analytics event, make the following changes to ",(0,l.kt)("inlineCode",{parentName:"p"},"src/app/analytics/event.ts"),":"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Add a new value to the ",(0,l.kt)("inlineCode",{parentName:"li"},"EventType")," enum")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"   export enum EventType {\n    LogInEvent,\n    LogOutEvent,\n    ...,\n    MyNewEvent\n}\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Create a new interface extending ",(0,l.kt)("inlineCode",{parentName:"li"},"BaseEvent"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface MyNewEvent extends BaseEvent {\n    type: EventType.MyNewEvent; // must be the type you just added\n    ... your event's custom fields\n}\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Add the interface to the exported ",(0,l.kt)("inlineCode",{parentName:"li"},"Event")," type.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export type Event =\n    | LogInEvent\n    | LogOutEvent\n    ....\n    | MyNewEvent\n")),(0,l.kt)("h3",{id:"emitting-an-event"},"Emitting an event"),(0,l.kt)("p",null,"Emitting a tracking DataHub analytics event is a 2-step process:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Import relevant items from ",(0,l.kt)("inlineCode",{parentName:"li"},"analytics")," module")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import analytics, { EventType } from '../analytics';\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Call the ",(0,l.kt)("inlineCode",{parentName:"li"},"event")," method, passing in an event object of the appropriate type")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"analytics.event({ type: EventType.MyNewEvent, ...my event fields });\n")),(0,l.kt)("h3",{id:"debugging-enabling-event-logging"},"Debugging: Enabling Event Logging"),(0,l.kt)("p",null,"To log events to the console for debugging / verification purposes"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub-web-react/src/conf/analytics.ts")),(0,l.kt)("li",{parentName:"ol"},"Uncomment ",(0,l.kt)("inlineCode",{parentName:"li"},"logging: true")," within the ",(0,l.kt)("inlineCode",{parentName:"li"},"config")," object."),(0,l.kt)("li",{parentName:"ol"},"Rebuild & redeploy ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub-frontend-react")," to start logging all events to your browser's console.")),(0,l.kt)("h2",{id:"coming-soon"},"Coming Soon"),(0,l.kt)("p",null,"In the near future, we intend to"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Send product analytics events back to DataHub itself, using them as feedback to improve the product experience."),(0,l.kt)("li",{parentName:"ol"},"No-code configuration of Analytics plugins. This will be achieved using server driven configuration for the React app.")))}d.isMDXComponent=!0}}]);