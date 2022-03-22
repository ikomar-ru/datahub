"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[548],{4137:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=a,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return t?o.createElement(h,r(r({ref:n},d),{},{components:t})):o.createElement(h,r({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9507:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var o=t(7462),a=t(3366),i=(t(7294),t(4137)),r=["components"],s={sidebar_position:9,title:"Domain",sidebar_label:"Domain",slug:"/generated/metamodel/entities/domain",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/domain.md"},l="Domain",c={unversionedId:"docs/generated/metamodel/entities/domain",id:"docs/generated/metamodel/entities/domain",isDocsHomePage:!1,title:"Domain",description:"A data domain within an organization.",source:"@site/genDocs/docs/generated/metamodel/entities/domain.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/domain",permalink:"/docs/generated/metamodel/entities/domain",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/domain.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Domain",sidebar_label:"Domain",slug:"/generated/metamodel/entities/domain",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/domain.md"},sidebar:"overviewSidebar",previous:{title:"CorpGroup",permalink:"/docs/generated/metamodel/entities/corpgroup"},next:{title:"Container",permalink:"/docs/generated/metamodel/entities/container"}},d=[{value:"Aspects",id:"aspects",children:[{value:"domainProperties",id:"domainproperties",children:[],level:3},{value:"institutionalMemory",id:"institutionalmemory",children:[],level:3},{value:"ownership",id:"ownership",children:[],level:3}],level:2},{value:"Relationships",id:"relationships",children:[{value:"Outgoing",id:"outgoing",children:[],level:3},{value:"Incoming",id:"incoming",children:[],level:3}],level:2},{value:"Global Metadata Model",id:"global-metadata-model",children:[],level:2}],m={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"domain"},"Domain"),(0,i.kt)("p",null,"A data domain within an organization."),(0,i.kt)("h2",{id:"aspects"},"Aspects"),(0,i.kt)("h3",{id:"domainproperties"},"domainProperties"),(0,i.kt)("p",null,"Information about a Domain"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "domainProperties"\n  },\n  "name": "DomainProperties",\n  "namespace": "com.linkedin.domain",\n  "fields": [\n    {\n      "Searchable": {\n        "boostScore": 10.0,\n        "enableAutocomplete": true,\n        "fieldType": "TEXT_PARTIAL"\n      },\n      "type": "string",\n      "name": "name",\n      "doc": "Display name of the Domain"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "Description of the Domain"\n    }\n  ],\n  "doc": "Information about a Domain"\n}\n'))),(0,i.kt)("h3",{id:"institutionalmemory"},"institutionalMemory"),(0,i.kt)("p",null,"Institutional memory of an entity. This is a way to link to relevant documentation and provide description of the documentation. Institutional or tribal knowledge is very important for users to leverage the entity."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "institutionalMemory"\n  },\n  "name": "InstitutionalMemory",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "InstitutionalMemoryMetadata",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "java": {\n                "class": "com.linkedin.common.url.Url",\n                "coercerClass": "com.linkedin.common.url.UrlCoercer"\n              },\n              "type": "string",\n              "name": "url",\n              "doc": "Link to an engineering design document or a wiki page."\n            },\n            {\n              "type": "string",\n              "name": "description",\n              "doc": "Description of the link."\n            },\n            {\n              "type": {\n                "type": "record",\n                "name": "AuditStamp",\n                "namespace": "com.linkedin.common",\n                "fields": [\n                  {\n                    "type": "long",\n                    "name": "time",\n                    "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n                  },\n                  {\n                    "java": {\n                      "class": "com.linkedin.common.urn.Urn"\n                    },\n                    "type": "string",\n                    "name": "actor",\n                    "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n                  },\n                  {\n                    "java": {\n                      "class": "com.linkedin.common.urn.Urn"\n                    },\n                    "type": [\n                      "null",\n                      "string"\n                    ],\n                    "name": "impersonator",\n                    "default": null,\n                    "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n                  }\n                ],\n                "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n              },\n              "name": "createStamp",\n              "doc": "Audit stamp associated with creation of this record"\n            }\n          ],\n          "doc": "Metadata corresponding to a record of institutional memory."\n        }\n      },\n      "name": "elements",\n      "doc": "List of records that represent institutional memory of an entity. Each record consists of a link, description, creator and timestamps associated with that record."\n    }\n  ],\n  "doc": "Institutional memory of an entity. This is a way to link to relevant documentation and provide description of the documentation. Institutional or tribal knowledge is very important for users to leverage the entity."\n}\n'))),(0,i.kt)("h3",{id:"ownership"},"ownership"),(0,i.kt)("p",null,"Ownership information of an entity."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "ownership"\n  },\n  "name": "Ownership",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "Owner",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "Relationship": {\n                "entityTypes": [\n                  "corpUser",\n                  "corpGroup"\n                ],\n                "name": "OwnedBy"\n              },\n              "Searchable": {\n                "addToFilters": true,\n                "fieldName": "owners",\n                "fieldType": "URN",\n                "filterNameOverride": "Owned By",\n                "hasValuesFieldName": "hasOwners",\n                "queryByDefault": false\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "owner",\n              "doc": "Owner URN, e.g. urn:li:corpuser:ldap, urn:li:corpGroup:group_name, and urn:li:multiProduct:mp_name\\n(Caveat: only corpuser is currently supported in the frontend.)"\n            },\n            {\n              "type": {\n                "type": "enum",\n                "symbolDocs": {\n                  "BUSINESS_OWNER": "A person or group who is responsible for logical, or business related, aspects of the asset.",\n                  "CONSUMER": "A person, group, or service that consumes the data\\nDeprecated! Use TECHNICAL_OWNER or BUSINESS_OWNER instead.",\n                  "DATAOWNER": "A person or group that is owning the data\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "DATA_STEWARD": "A steward, expert, or delegate responsible for the asset.",\n                  "DELEGATE": "A person or a group that overseas the operation, e.g. a DBA or SRE.\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "DEVELOPER": "A person or group that is in charge of developing the code\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "NONE": "No specific type associated to the owner.",\n                  "PRODUCER": "A person, group, or service that produces/generates the data\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "STAKEHOLDER": "A person or a group that has direct business interest\\nDeprecated! Use TECHNICAL_OWNER, BUSINESS_OWNER, or STEWARD instead.",\n                  "TECHNICAL_OWNER": "person or group who is responsible for technical aspects of the asset."\n                },\n                "deprecatedSymbols": {\n                  "CONSUMER": true,\n                  "DATAOWNER": true,\n                  "DELEGATE": true,\n                  "DEVELOPER": true,\n                  "PRODUCER": true,\n                  "STAKEHOLDER": true\n                },\n                "name": "OwnershipType",\n                "namespace": "com.linkedin.common",\n                "symbols": [\n                  "TECHNICAL_OWNER",\n                  "BUSINESS_OWNER",\n                  "DATA_STEWARD",\n                  "NONE",\n                  "DEVELOPER",\n                  "DATAOWNER",\n                  "DELEGATE",\n                  "PRODUCER",\n                  "CONSUMER",\n                  "STAKEHOLDER"\n                ],\n                "doc": "Asset owner types"\n              },\n              "name": "type",\n              "doc": "The type of the ownership"\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "OwnershipSource",\n                  "namespace": "com.linkedin.common",\n                  "fields": [\n                    {\n                      "type": {\n                        "type": "enum",\n                        "symbolDocs": {\n                          "AUDIT": "Auditing system or audit logs",\n                          "DATABASE": "Database, e.g. GRANTS table",\n                          "FILE_SYSTEM": "File system, e.g. file/directory owner",\n                          "ISSUE_TRACKING_SYSTEM": "Issue tracking system, e.g. Jira",\n                          "MANUAL": "Manually provided by a user",\n                          "OTHER": "Other sources",\n                          "SERVICE": "Other ownership-like service, e.g. Nuage, ACL service etc",\n                          "SOURCE_CONTROL": "SCM system, e.g. GIT, SVN"\n                        },\n                        "name": "OwnershipSourceType",\n                        "namespace": "com.linkedin.common",\n                        "symbols": [\n                          "AUDIT",\n                          "DATABASE",\n                          "FILE_SYSTEM",\n                          "ISSUE_TRACKING_SYSTEM",\n                          "MANUAL",\n                          "SERVICE",\n                          "SOURCE_CONTROL",\n                          "OTHER"\n                        ]\n                      },\n                      "name": "type",\n                      "doc": "The type of the source"\n                    },\n                    {\n                      "type": [\n                        "null",\n                        "string"\n                      ],\n                      "name": "url",\n                      "default": null,\n                      "doc": "A reference URL for the source"\n                    }\n                  ],\n                  "doc": "Source/provider of the ownership information"\n                }\n              ],\n              "name": "source",\n              "default": null,\n              "doc": "Source information for the ownership"\n            }\n          ],\n          "doc": "Ownership information"\n        }\n      },\n      "name": "owners",\n      "doc": "List of owners of the entity."\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "AuditStamp",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": "long",\n            "name": "time",\n            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": "string",\n            "name": "actor",\n            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "impersonator",\n            "default": null,\n            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n      },\n      "name": "lastModified",\n      "default": {\n        "actor": "urn:li:corpuser:unknown",\n        "impersonator": null,\n        "time": 0\n      },\n      "doc": "Audit stamp containing who last modified the record and when. A value of 0 in the time field indicates missing data."\n    }\n  ],\n  "doc": "Ownership information of an entity."\n}\n'))),(0,i.kt)("h2",{id:"relationships"},"Relationships"),(0,i.kt)("h3",{id:"outgoing"},"Outgoing"),(0,i.kt)("p",null,"These are the relationships stored in this entity's aspects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"OwnedBy"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CorpUser via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,i.kt)("li",{parentName:"ul"},"CorpGroup via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner"))))),(0,i.kt)("h3",{id:"incoming"},"Incoming"),(0,i.kt)("p",null,"These are the relationships stored in other entity's aspects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"AssociatedWith"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Dataset via ",(0,i.kt)("inlineCode",{parentName:"li"},"domains.domains")),(0,i.kt)("li",{parentName:"ul"},"DataJob via ",(0,i.kt)("inlineCode",{parentName:"li"},"domains.domains")),(0,i.kt)("li",{parentName:"ul"},"DataFlow via ",(0,i.kt)("inlineCode",{parentName:"li"},"domains.domains")),(0,i.kt)("li",{parentName:"ul"},"Chart via ",(0,i.kt)("inlineCode",{parentName:"li"},"domains.domains")),(0,i.kt)("li",{parentName:"ul"},"Dashboard via ",(0,i.kt)("inlineCode",{parentName:"li"},"domains.domains")),(0,i.kt)("li",{parentName:"ul"},"Notebook via ",(0,i.kt)("inlineCode",{parentName:"li"},"domains.domains")),(0,i.kt)("li",{parentName:"ul"},"Container via ",(0,i.kt)("inlineCode",{parentName:"li"},"domains.domains"))))),(0,i.kt)("h2",{id:"global-metadata-model"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}p.isMDXComponent=!0}}]);