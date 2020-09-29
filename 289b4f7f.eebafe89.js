(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var i=n(2),a=n(6),c=(n(0),n(76)),r={title:"Interfaces and types"},o={unversionedId:"libs-types",id:"libs-types",isDocsHomePage:!1,title:"Interfaces and types",description:"CeramicApi",source:"@site/docs/libs-types.md",slug:"/libs-types",permalink:"/docs/libs-types",editUrl:"https://github.com/ceramicstudio/js-idx/edit/master/website/docs/libs-types.md",version:"current",sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/libs-getting-started"},next:{title:"IDX Tools library",permalink:"/docs/libs-tools"}},b=[{value:"CeramicApi",id:"ceramicapi",children:[]},{value:"DID",id:"did",children:[]},{value:"DIDProvider",id:"didprovider",children:[]},{value:"Doctype",id:"doctype",children:[]},{value:"JWSSignature",id:"jwssignature",children:[]},{value:"Resolver",id:"resolver",children:[]},{value:"ResolverOptions",id:"resolveroptions",children:[]},{value:"DocID",id:"docid",children:[]},{value:"Schema",id:"schema",children:[]},{value:"Definition",id:"definition",children:[]},{value:"DefinitionsAliases",id:"definitionsaliases",children:[]},{value:"Entry",id:"entry",children:[]},{value:"DefinitionEntry",id:"definitionentry",children:[]},{value:"ContentEntry",id:"contententry",children:[]},{value:"IdentityIndexContent",id:"identityindexcontent",children:[]},{value:"EncodedDagJWS",id:"encodeddagjws",children:[]},{value:"EncodedDagJWSResult",id:"encodeddagjwsresult",children:[]},{value:"IDXDefinitionName",id:"idxdefinitionname",children:[]},{value:"IDXSignedDefinitions",id:"idxsigneddefinitions",children:[]},{value:"IDXPublishedDefinitions",id:"idxpublisheddefinitions",children:[]},{value:"IDXSchemaName",id:"idxschemaname",children:[]},{value:"IDXSignedSchemas",id:"idxsignedschemas",children:[]},{value:"IDXPublishedSchemas",id:"idxpublishedschemas",children:[]},{value:"IDXPublishedConfig",id:"idxpublishedconfig",children:[]},{value:"PublishDoc",id:"publishdoc",children:[]},{value:"DefinitionDoc",id:"definitiondoc",children:[]},{value:"SchemaDoc",id:"schemadoc",children:[]},{value:"IDXOptions",id:"idxoptions",children:[{value:"AuthenticateOptions",id:"authenticateoptions",children:[]},{value:"CreateOptions",id:"createoptions",children:[]},{value:"CreateContentOptions",id:"createcontentoptions",children:[]},{value:"ContentIteratorOptions",id:"contentiteratoroptions",children:[]}]}],d={rightToc:b};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"ceramicapi"},"CeramicApi"),Object(c.b)("p",null,"Ceramic API interface exported by the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ceramicnetwork/js-ceramic/tree/develop/packages/ceramic-common"}),Object(c.b)("inlineCode",{parentName:"a"},"@ceramicnetwork/ceramic-common")," library")),Object(c.b)("h2",{id:"did"},"DID"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"DID")," instance exported by the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ceramicnetwork/js-did"}),Object(c.b)("inlineCode",{parentName:"a"},"dids")," library")),Object(c.b)("h2",{id:"didprovider"},"DIDProvider"),Object(c.b)("p",null,"DID Provider interface exported by the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ceramicnetwork/js-did"}),Object(c.b)("inlineCode",{parentName:"a"},"dids")," library")),Object(c.b)("h2",{id:"doctype"},"Doctype"),Object(c.b)("p",null,"Doctype interface exported by the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ceramicnetwork/js-ceramic/tree/develop/packages/ceramic-common"}),Object(c.b)("inlineCode",{parentName:"a"},"@ceramicnetwork/ceramic-common")," library")),Object(c.b)("h2",{id:"jwssignature"},"JWSSignature"),Object(c.b)("p",null,"JWS Signature interface exported by the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ceramicnetwork/js-did"}),Object(c.b)("inlineCode",{parentName:"a"},"dids")," library")),Object(c.b)("h2",{id:"resolver"},"Resolver"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Resolver")," instance exported by the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/decentralized-identity/did-resolver"}),Object(c.b)("inlineCode",{parentName:"a"},"did-resolver")," library")),Object(c.b)("h2",{id:"resolveroptions"},"ResolverOptions"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ResolverOptions")," interface exported by the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ceramicnetwork/js-did"}),Object(c.b)("inlineCode",{parentName:"a"},"dids")," library")),Object(c.b)("h2",{id:"docid"},"DocID"),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/idx-terminology#docid"}),"ID")," of a ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/idx-terminology#document"}),"Ceramic Document")),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"type DocID = string\n")),Object(c.b)("h2",{id:"schema"},"Schema"),Object(c.b)("p",null,"A type representing a ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/idx-terminology#schema"}),"JSON Schema")),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"type Schema = Record<string, unknown>\n")),Object(c.b)("h2",{id:"definition"},"Definition"),Object(c.b)("p",null,"A ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/idx-terminology#definition"}),"Definition")," is a ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/idx-terminology#document"}),"Ceramic Document")," describing a resource in the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/idx-terminology#identity-index--idx"}),"Identity Index")),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"interface Definition<T = unknown> {\n  name: string\n  schema: DocID\n  description?: string\n  url?: string\n  config?: T\n}\n")),Object(c.b)("h2",{id:"definitionsaliases"},"DefinitionsAliases"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"type DefinitionsAliases = Record<string, DocID>\n")),Object(c.b)("h2",{id:"entry"},"Entry"),Object(c.b)("p",null,"An ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/idx-terminology#entry"}),"entry")," in the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/idx-terminology#identity-index--idx"}),"Identity Index")),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"interface Entry {\n  tags: Array<string>\n  ref: DocID\n}\n")),Object(c.b)("h2",{id:"definitionentry"},"DefinitionEntry"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"interface DefinitionEntry extends Entry {\n  def: DocID\n}\n")),Object(c.b)("h2",{id:"contententry"},"ContentEntry"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"interface ContentEntry extends DefinitionEntry {\n  content: unknown\n}\n")),Object(c.b)("h2",{id:"identityindexcontent"},"IdentityIndexContent"),Object(c.b)("p",null,"Represents the shape of the content stored in the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/idx-terminology#identity-index--idx"}),"Identity Index")),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"type IdentityIndexContent = Record<DocID, Entry>\n")),Object(c.b)("h2",{id:"encodeddagjws"},"EncodedDagJWS"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"interface EncodedDagJWS {\n  payload: string\n  signatures: Array<JWSSignature>\n  link: string\n}\n")),Object(c.b)("h2",{id:"encodeddagjwsresult"},"EncodedDagJWSResult"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"interface EncodedDagJWSResult {\n  jws: EncodedDagJWS\n  linkedBlock: string\n}\n")),Object(c.b)("h2",{id:"idxdefinitionname"},"IDXDefinitionName"),Object(c.b)("p",null,"Name aliases of ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/idx-terminology#definition"}),"Definitions")," provided by the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-tools"}),"IDX tools library")),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"type IDXDefinitionName = 'basicProfile' | 'cryptoAccountLinks'\n")),Object(c.b)("h2",{id:"idxsigneddefinitions"},"IDXSignedDefinitions"),Object(c.b)("p",null,"Signed ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/idx-terminology#definition"}),"Definitions")," provided by the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-tools"}),"IDX tools library")),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"type IDXSignedDefinitions = Record<IDXDefinitionName, DagJWSResult>\n")),Object(c.b)("h2",{id:"idxpublisheddefinitions"},"IDXPublishedDefinitions"),Object(c.b)("p",null,"Record of ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/idx-terminology#definition"}),"Definitions")," published to ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/idx-terminology#ceramic"}),"Ceramic")),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"type IDXPublishedDefinitions = Record<IDXDefinitionName, DocID>\n")),Object(c.b)("h2",{id:"idxschemaname"},"IDXSchemaName"),Object(c.b)("p",null,"Names of ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/idx-terminology#schema"}),"Schemas")," provided by the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-tools"}),"IDX tools library")),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"type IDXSchemaName = 'BasicProfile' | 'CryptoAccountLinks' | 'Definition' | 'IdentityIndex'\n")),Object(c.b)("h2",{id:"idxsignedschemas"},"IDXSignedSchemas"),Object(c.b)("p",null,"Signed ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/idx-terminology#schema"}),"Schemas")," provided by the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-tools"}),"IDX tools library")),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"type IDXSignedSchemas = Record<IDXSchemaName, DagJWSResult>\n")),Object(c.b)("h2",{id:"idxpublishedschemas"},"IDXPublishedSchemas"),Object(c.b)("p",null,"Record of ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/idx-terminology#schema"}),"Schemas")," published to ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/idx-terminology#ceramic"}),"Ceramic")),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"type IDXPublishedSchemas = Record<IDXSchemaName, DocID>\n")),Object(c.b)("h2",{id:"idxpublishedconfig"},"IDXPublishedConfig"),Object(c.b)("p",null,Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/idx-terminology#definition"}),"Definitions")," and ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/idx-terminology#schema"}),"Schemas")," published to ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/idx-terminology#ceramic"}),"Ceramic")),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"interface IDXPublishedConfig {\n  definitions: IDXPublishedDefinitions\n  schemas: IDXPublishedSchemas\n}\n")),Object(c.b)("h2",{id:"publishdoc"},"PublishDoc"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"interface PublishDoc<T = unknown> {\n  id?: DocID\n  content: T\n  owners?: Array<string>\n  schema?: DocID\n}\n")),Object(c.b)("h2",{id:"definitiondoc"},"DefinitionDoc"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"interface DefinitionDoc extends PublishDoc<Definition> {\n  id: DocID\n}\n")),Object(c.b)("h2",{id:"schemadoc"},"SchemaDoc"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"interface SchemaDoc extends PublishDoc<Schema> {\n  name: string\n}\n")),Object(c.b)("h2",{id:"idxoptions"},"IDXOptions"),Object(c.b)("p",null,"Options used by the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-idx#constructor"}),"IDX class constructor")),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"interface IDXOptions {\n  autopin?: boolean\n  ceramic: CeramicApi\n  definitions?: DefinitionsAliases\n  resolver?: ResolverOptions\n  schemas: SchemasAliases\n}\n")),Object(c.b)("h3",{id:"authenticateoptions"},"AuthenticateOptions"),Object(c.b)("p",null,"Options used by the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-idx#authenticate"}),Object(c.b)("inlineCode",{parentName:"a"},"authenticate")," method")," of the ",Object(c.b)("inlineCode",{parentName:"p"},"IDX")," class"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"interface AuthenticateOptions {\n  paths?: Array<string>\n  provider?: DIDProvider\n}\n")),Object(c.b)("h3",{id:"createoptions"},"CreateOptions"),Object(c.b)("p",null,"Options used by the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-idx#createdocument"}),Object(c.b)("inlineCode",{parentName:"a"},"createDocument")," method")," of the ",Object(c.b)("inlineCode",{parentName:"p"},"IDX")," class"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"interface CreateOptions {\n  pin?: boolean\n}\n")),Object(c.b)("h3",{id:"createcontentoptions"},"CreateContentOptions"),Object(c.b)("p",null,"Options used by the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-idx#setentrycontent"}),Object(c.b)("inlineCode",{parentName:"a"},"setEntryContent")," method")," of the ",Object(c.b)("inlineCode",{parentName:"p"},"IDX")," class"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"interface CreateContentOptions extends CreateOptions {\n  tags?: Array<string>\n}\n")),Object(c.b)("h3",{id:"contentiteratoroptions"},"ContentIteratorOptions"),Object(c.b)("p",null,"Options used by the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-idx#contentiterator"}),Object(c.b)("inlineCode",{parentName:"a"},"contentIterator")," method")," of the ",Object(c.b)("inlineCode",{parentName:"p"},"IDX")," class"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"interface ContentIteratorOptions {\n  did?: string\n  tag?: string\n}\n")))}s.isMDXComponent=!0},76:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return O}));var i=n(0),a=n.n(i);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},c=Object.keys(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),s=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,r=e.parentName,d=b(e,["components","mdxType","originalType","parentName"]),l=s(n),m=i,O=l["".concat(r,".").concat(m)]||l[m]||p[m]||c;return n?a.a.createElement(O,o(o({ref:t},d),{},{components:n})):a.a.createElement(O,o({ref:t},d))}));function O(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,r=new Array(c);r[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<c;d++)r[d]=n[d];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);