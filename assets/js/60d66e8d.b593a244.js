"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2825],{4137:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=r,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8681:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=t(7462),r=t(3366),o=(t(7294),t(4137)),i=["components"],s={sidebar_position:16,title:"MlFeature",sidebar_label:"MlFeature",slug:"/generated/metamodel/entities/mlfeature",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/mlFeature.md"},l="MlFeature",c={unversionedId:"docs/generated/metamodel/entities/mlFeature",id:"docs/generated/metamodel/entities/mlFeature",isDocsHomePage:!1,title:"MlFeature",description:"Aspects",source:"@site/genDocs/docs/generated/metamodel/entities/mlFeature.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/mlfeature",permalink:"/docs/generated/metamodel/entities/mlfeature",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/mlFeature.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16,title:"MlFeature",sidebar_label:"MlFeature",slug:"/generated/metamodel/entities/mlfeature",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/mlFeature.md"},sidebar:"overviewSidebar",previous:{title:"DataProcess",permalink:"/docs/generated/metamodel/entities/dataprocess"},next:{title:"MlFeatureTable",permalink:"/docs/generated/metamodel/entities/mlfeaturetable"}},d=[{value:"Aspects",id:"aspects",children:[{value:"mlFeatureKey",id:"mlfeaturekey",children:[],level:3},{value:"mlFeatureProperties",id:"mlfeatureproperties",children:[],level:3},{value:"ownership",id:"ownership",children:[],level:3},{value:"institutionalMemory",id:"institutionalmemory",children:[],level:3},{value:"status",id:"status",children:[],level:3},{value:"deprecation",id:"deprecation",children:[],level:3},{value:"browsePaths",id:"browsepaths",children:[],level:3},{value:"globalTags",id:"globaltags",children:[],level:3},{value:"dataPlatformInstance",id:"dataplatforminstance",children:[],level:3}],level:2},{value:"Relationships",id:"relationships",children:[{value:"Outgoing",id:"outgoing",children:[],level:3},{value:"Incoming",id:"incoming",children:[],level:3}],level:2},{value:"Global Metadata Model",id:"global-metadata-model",children:[],level:2}],m={toc:d};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mlfeature"},"MlFeature"),(0,o.kt)("h2",{id:"aspects"},"Aspects"),(0,o.kt)("h3",{id:"mlfeaturekey"},"mlFeatureKey"),(0,o.kt)("p",null,"Key for an MLFeature"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "mlFeatureKey"\n  },\n  "name": "MLFeatureKey",\n  "namespace": "com.linkedin.metadata.key",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "TEXT_PARTIAL"\n      },\n      "type": "string",\n      "name": "featureNamespace",\n      "doc": "Namespace for the feature"\n    },\n    {\n      "Searchable": {\n        "boostScore": 8.0,\n        "enableAutocomplete": true,\n        "fieldType": "TEXT_PARTIAL"\n      },\n      "type": "string",\n      "name": "name",\n      "doc": "Name of the feature"\n    }\n  ],\n  "doc": "Key for an MLFeature"\n}\n'))),(0,o.kt)("h3",{id:"mlfeatureproperties"},"mlFeatureProperties"),(0,o.kt)("p",null,"Properties associated with a MLFeature"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "mlFeatureProperties"\n  },\n  "name": "MLFeatureProperties",\n  "namespace": "com.linkedin.ml.metadata",\n  "fields": [\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "Documentation of the MLFeature"\n    },\n    {\n      "type": [\n        "null",\n        {\n          "type": "enum",\n          "symbolDocs": {\n            "AUDIO": "Audio Data",\n            "BINARY": "Binary data is discrete data that can be in only one of two categories \\u2014 either yes or no, 1 or 0, off or on, etc",\n            "BYTE": "Bytes data are binary-encoded values that can represent complex objects.",\n            "CONTINUOUS": "Continuous data are made of uncountable values, often the result of a measurement such as height, weight, age etc.",\n            "COUNT": "Count data is discrete whole number data \\u2014 no negative numbers here.\\nCount data often has many small values, such as zero and one.",\n            "IMAGE": "Image Data",\n            "INTERVAL": "Interval data has equal spaces between the numbers and does not represent a temporal pattern.\\nExamples include percentages, temperatures, and income.",\n            "MAP": "Mapping Data Type ex: dict, map",\n            "NOMINAL": "Nominal data is made of discrete values with no numerical relationship between the different categories \\u2014 mean and median are meaningless.\\nAnimal species is one example. For example, pig is not higher than bird and lower than fish.",\n            "ORDINAL": "Ordinal data are discrete integers that can be ranked or sorted.\\nFor example, the distance between first and second may not be the same as the distance between second and third.",\n            "SEQUENCE": "Sequence Data Type ex: list, tuple, range",\n            "SET": "Set Data Type ex: set, frozenset",\n            "TEXT": "Text Data",\n            "TIME": "Time data is a cyclical, repeating continuous form of data.\\nThe relevant time features can be any period\\u2014 daily, weekly, monthly, annual, etc.",\n            "UNKNOWN": "Unknown data are data that we don\'t know the type for.",\n            "USELESS": "Useless data is unique, discrete data with no potential relationship with the outcome variable.\\nA useless feature has high cardinality. An example would be bank account numbers that were generated randomly.",\n            "VIDEO": "Video Data"\n          },\n          "name": "MLFeatureDataType",\n          "namespace": "com.linkedin.common",\n          "symbols": [\n            "USELESS",\n            "NOMINAL",\n            "ORDINAL",\n            "BINARY",\n            "COUNT",\n            "TIME",\n            "INTERVAL",\n            "IMAGE",\n            "VIDEO",\n            "AUDIO",\n            "TEXT",\n            "MAP",\n            "SEQUENCE",\n            "SET",\n            "CONTINUOUS",\n            "BYTE",\n            "UNKNOWN"\n          ],\n          "doc": "MLFeature Data Type"\n        }\n      ],\n      "name": "dataType",\n      "default": null,\n      "doc": "Data Type of the MLFeature"\n    },\n    {\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "name": "VersionTag",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "versionTag",\n              "default": null\n            }\n          ],\n          "doc": "A resource-defined string representing the resource state for the purpose of concurrency control"\n        }\n      ],\n      "name": "version",\n      "default": null,\n      "doc": "Version of the MLFeature"\n    },\n    {\n      "Relationship": {\n        "/*": {\n          "entityTypes": [\n            "dataset"\n          ],\n          "name": "DerivedFrom"\n        }\n      },\n      "type": [\n        "null",\n        {\n          "type": "array",\n          "items": "string"\n        }\n      ],\n      "name": "sources",\n      "default": null,\n      "doc": "Source of the MLFeature"\n    }\n  ],\n  "doc": "Properties associated with a MLFeature"\n}\n'))),(0,o.kt)("h3",{id:"ownership"},"ownership"),(0,o.kt)("p",null,"Ownership information of an entity."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "ownership"\n  },\n  "name": "Ownership",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "Owner",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "Relationship": {\n                "entityTypes": [\n                  "corpUser",\n                  "corpGroup"\n                ],\n                "name": "OwnedBy"\n              },\n              "Searchable": {\n                "addToFilters": true,\n                "fieldName": "owners",\n                "fieldType": "URN",\n                "filterNameOverride": "Owned By",\n                "hasValuesFieldName": "hasOwners",\n                "queryByDefault": false\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "owner",\n              "doc": "Owner URN, e.g. urn:li:corpuser:ldap, urn:li:corpGroup:group_name, and urn:li:multiProduct:mp_name\\n(Caveat: only corpuser is currently supported in the frontend.)"\n            },\n            {\n              "type": {\n                "type": "enum",\n                "symbolDocs": {\n                  "BUSINESS_OWNER": "A person or group who is responsible for logical, or business related, aspects of the asset.",\n                  "CONSUMER": "A person, group, or service that consumes the data\\nDeprecated! Use TECHNICAL_OWNER or BUSINESS_OWNER instead.",\n                  "DATAOWNER": "A person or group that is owning the data\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "DATA_STEWARD": "A steward, expert, or delegate responsible for the asset.",\n                  "DELEGATE": "A person or a group that overseas the operation, e.g. a DBA or SRE.\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "DEVELOPER": "A person or group that is in charge of developing the code\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "NONE": "No specific type associated to the owner.",\n                  "PRODUCER": "A person, group, or service that produces/generates the data\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "STAKEHOLDER": "A person or a group that has direct business interest\\nDeprecated! Use TECHNICAL_OWNER, BUSINESS_OWNER, or STEWARD instead.",\n                  "TECHNICAL_OWNER": "person or group who is responsible for technical aspects of the asset."\n                },\n                "deprecatedSymbols": {\n                  "CONSUMER": true,\n                  "DATAOWNER": true,\n                  "DELEGATE": true,\n                  "DEVELOPER": true,\n                  "PRODUCER": true,\n                  "STAKEHOLDER": true\n                },\n                "name": "OwnershipType",\n                "namespace": "com.linkedin.common",\n                "symbols": [\n                  "TECHNICAL_OWNER",\n                  "BUSINESS_OWNER",\n                  "DATA_STEWARD",\n                  "NONE",\n                  "DEVELOPER",\n                  "DATAOWNER",\n                  "DELEGATE",\n                  "PRODUCER",\n                  "CONSUMER",\n                  "STAKEHOLDER"\n                ],\n                "doc": "Asset owner types"\n              },\n              "name": "type",\n              "doc": "The type of the ownership"\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "OwnershipSource",\n                  "namespace": "com.linkedin.common",\n                  "fields": [\n                    {\n                      "type": {\n                        "type": "enum",\n                        "symbolDocs": {\n                          "AUDIT": "Auditing system or audit logs",\n                          "DATABASE": "Database, e.g. GRANTS table",\n                          "FILE_SYSTEM": "File system, e.g. file/directory owner",\n                          "ISSUE_TRACKING_SYSTEM": "Issue tracking system, e.g. Jira",\n                          "MANUAL": "Manually provided by a user",\n                          "OTHER": "Other sources",\n                          "SERVICE": "Other ownership-like service, e.g. Nuage, ACL service etc",\n                          "SOURCE_CONTROL": "SCM system, e.g. GIT, SVN"\n                        },\n                        "name": "OwnershipSourceType",\n                        "namespace": "com.linkedin.common",\n                        "symbols": [\n                          "AUDIT",\n                          "DATABASE",\n                          "FILE_SYSTEM",\n                          "ISSUE_TRACKING_SYSTEM",\n                          "MANUAL",\n                          "SERVICE",\n                          "SOURCE_CONTROL",\n                          "OTHER"\n                        ]\n                      },\n                      "name": "type",\n                      "doc": "The type of the source"\n                    },\n                    {\n                      "type": [\n                        "null",\n                        "string"\n                      ],\n                      "name": "url",\n                      "default": null,\n                      "doc": "A reference URL for the source"\n                    }\n                  ],\n                  "doc": "Source/provider of the ownership information"\n                }\n              ],\n              "name": "source",\n              "default": null,\n              "doc": "Source information for the ownership"\n            }\n          ],\n          "doc": "Ownership information"\n        }\n      },\n      "name": "owners",\n      "doc": "List of owners of the entity."\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "AuditStamp",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": "long",\n            "name": "time",\n            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": "string",\n            "name": "actor",\n            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "impersonator",\n            "default": null,\n            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n      },\n      "name": "lastModified",\n      "default": {\n        "actor": "urn:li:corpuser:unknown",\n        "impersonator": null,\n        "time": 0\n      },\n      "doc": "Audit stamp containing who last modified the record and when. A value of 0 in the time field indicates missing data."\n    }\n  ],\n  "doc": "Ownership information of an entity."\n}\n'))),(0,o.kt)("h3",{id:"institutionalmemory"},"institutionalMemory"),(0,o.kt)("p",null,"Institutional memory of an entity. This is a way to link to relevant documentation and provide description of the documentation. Institutional or tribal knowledge is very important for users to leverage the entity."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "institutionalMemory"\n  },\n  "name": "InstitutionalMemory",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "InstitutionalMemoryMetadata",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "java": {\n                "class": "com.linkedin.common.url.Url",\n                "coercerClass": "com.linkedin.common.url.UrlCoercer"\n              },\n              "type": "string",\n              "name": "url",\n              "doc": "Link to an engineering design document or a wiki page."\n            },\n            {\n              "type": "string",\n              "name": "description",\n              "doc": "Description of the link."\n            },\n            {\n              "type": {\n                "type": "record",\n                "name": "AuditStamp",\n                "namespace": "com.linkedin.common",\n                "fields": [\n                  {\n                    "type": "long",\n                    "name": "time",\n                    "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n                  },\n                  {\n                    "java": {\n                      "class": "com.linkedin.common.urn.Urn"\n                    },\n                    "type": "string",\n                    "name": "actor",\n                    "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n                  },\n                  {\n                    "java": {\n                      "class": "com.linkedin.common.urn.Urn"\n                    },\n                    "type": [\n                      "null",\n                      "string"\n                    ],\n                    "name": "impersonator",\n                    "default": null,\n                    "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n                  }\n                ],\n                "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n              },\n              "name": "createStamp",\n              "doc": "Audit stamp associated with creation of this record"\n            }\n          ],\n          "doc": "Metadata corresponding to a record of institutional memory."\n        }\n      },\n      "name": "elements",\n      "doc": "List of records that represent institutional memory of an entity. Each record consists of a link, description, creator and timestamps associated with that record."\n    }\n  ],\n  "doc": "Institutional memory of an entity. This is a way to link to relevant documentation and provide description of the documentation. Institutional or tribal knowledge is very important for users to leverage the entity."\n}\n'))),(0,o.kt)("h3",{id:"status"},"status"),(0,o.kt)("p",null,"The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\nThis aspect is used to represent soft deletes conventionally."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "status"\n  },\n  "name": "Status",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "BOOLEAN"\n      },\n      "type": "boolean",\n      "name": "removed",\n      "default": false,\n      "doc": "Whether the entity has been removed (soft-deleted)."\n    }\n  ],\n  "doc": "The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\\nThis aspect is used to represent soft deletes conventionally."\n}\n'))),(0,o.kt)("h3",{id:"deprecation"},"deprecation"),(0,o.kt)("p",null,"Deprecation status of an entity"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "deprecation"\n  },\n  "name": "Deprecation",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "BOOLEAN",\n        "weightsPerFieldValue": {\n          "true": 0.5\n        }\n      },\n      "type": "boolean",\n      "name": "deprecated",\n      "doc": "Whether the entity is deprecated."\n    },\n    {\n      "type": [\n        "null",\n        "long"\n      ],\n      "name": "decommissionTime",\n      "default": null,\n      "doc": "The time user plan to decommission this entity."\n    },\n    {\n      "type": "string",\n      "name": "note",\n      "doc": "Additional information about the entity deprecation plan, such as the wiki, doc, RB."\n    },\n    {\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "actor",\n      "doc": "The user URN which will be credited for modifying this deprecation content."\n    }\n  ],\n  "doc": "Deprecation status of an entity"\n}\n'))),(0,o.kt)("h3",{id:"browsepaths"},"browsePaths"),(0,o.kt)("p",null,"Shared aspect containing Browse Paths to be indexed for an entity."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "browsePaths"\n  },\n  "name": "BrowsePaths",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "/*": {\n          "fieldName": "browsePaths",\n          "fieldType": "BROWSE_PATH"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "paths",\n      "doc": "A list of valid browse paths for the entity.\\n\\nBrowse paths are expected to be backslash-separated strings. For example: \'prod/snowflake/datasetName\'"\n    }\n  ],\n  "doc": "Shared aspect containing Browse Paths to be indexed for an entity."\n}\n'))),(0,o.kt)("h3",{id:"globaltags"},"globalTags"),(0,o.kt)("p",null,"Tag aspect used for applying tags to an entity"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "globalTags"\n  },\n  "name": "GlobalTags",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "TagAssociation",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "Searchable": {\n                "addToFilters": true,\n                "fieldName": "tags",\n                "fieldType": "URN",\n                "filterNameOverride": "Tag",\n                "hasValuesFieldName": "hasTags"\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.TagUrn"\n              },\n              "type": "string",\n              "name": "tag",\n              "doc": "Urn of the applied tag"\n            }\n          ],\n          "doc": "Properties of an applied tag. For now, just an Urn. In the future we can extend this with other properties, e.g.\\npropagation parameters."\n        }\n      },\n      "name": "tags",\n      "doc": "Tags associated with a given entity"\n    }\n  ],\n  "doc": "Tag aspect used for applying tags to an entity"\n}\n'))),(0,o.kt)("h3",{id:"dataplatforminstance"},"dataPlatformInstance"),(0,o.kt)("p",null,"The specific instance of the data platform that this entity belongs to"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataPlatformInstance"\n  },\n  "name": "DataPlatformInstance",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "addToFilters": true,\n        "fieldType": "URN",\n        "filterNameOverride": "Platform"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "platform",\n      "doc": "Data Platform"\n    },\n    {\n      "Searchable": {\n        "fieldName": "platformInstance",\n        "fieldType": "URN"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "instance",\n      "default": null,\n      "doc": "Instance of the data platform (e.g. db instance)"\n    }\n  ],\n  "doc": "The specific instance of the data platform that this entity belongs to"\n}\n'))),(0,o.kt)("h2",{id:"relationships"},"Relationships"),(0,o.kt)("h3",{id:"outgoing"},"Outgoing"),(0,o.kt)("p",null,"These are the relationships stored in this entity's aspects"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"DerivedFrom"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Dataset via ",(0,o.kt)("inlineCode",{parentName:"li"},"mlFeatureProperties.sources")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"OwnedBy"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"CorpUser via ",(0,o.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,o.kt)("li",{parentName:"ul"},"CorpGroup via ",(0,o.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner"))))),(0,o.kt)("h3",{id:"incoming"},"Incoming"),(0,o.kt)("p",null,"These are the relationships stored in other entity's aspects"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Contains"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"MlFeatureTable via ",(0,o.kt)("inlineCode",{parentName:"li"},"mlFeatureTableProperties.mlFeatures"))))),(0,o.kt)("h2",{id:"global-metadata-model"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}p.isMDXComponent=!0}}]);