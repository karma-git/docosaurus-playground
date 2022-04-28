"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2477],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),b=i,f=m["".concat(c,".").concat(b)]||m[b]||p[b]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4162:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],l={id:"0-sre-cheatsheet",title:"Site Reliability Engineering (SRE) CheatSheet",sidebar_position:1},c=void 0,u={unversionedId:"SRE/0-sre-cheatsheet",id:"SRE/0-sre-cheatsheet",title:"Site Reliability Engineering (SRE) CheatSheet",description:"- SLO, SLI, SLA, Error Budget",source:"@site/docs/SRE/0-sre-cheatsheet.md",sourceDirName:"SRE",slug:"/SRE/0-sre-cheatsheet",permalink:"/Andrew-Horbach.github.io-Public/docs/SRE/0-sre-cheatsheet",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SRE/0-sre-cheatsheet.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"0-sre-cheatsheet",title:"Site Reliability Engineering (SRE) CheatSheet",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Golang",permalink:"/Andrew-Horbach.github.io-Public/docs/ProgrammingLanguages/go/go-init"},next:{title:"OTUS observability notebook",permalink:"/Andrew-Horbach.github.io-Public/docs/SRE/1-otus-observability"}},s=[{value:"RPO, RTO",id:"rpo-rto",children:[],level:2},{value:"Google SRE",id:"google-sre",children:[],level:2}],p={toc:s};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SLO, SLI, SLA, Error Budget"),(0,o.kt)("li",{parentName:"ul"},"Observability"),(0,o.kt)("li",{parentName:"ul"},"HA, Reliability"),(0,o.kt)("li",{parentName:"ul"},"Automation, Toil"),(0,o.kt)("li",{parentName:"ul"},"RTO, RPO")),(0,o.kt)("h2",{id:"rpo-rto"},"RPO, RTO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"RPO - Recovery Point Objective = DATA LOSS - ",(0,o.kt)("strong",{parentName:"li"},"\u0412\u0440\u0435\u043c\u044f")," - \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0442\u0435\u0440\u044f\u0442\u044c \u043f\u0440\u0438 Disaster. ",(0,o.kt)("em",{parentName:"li"},"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 2 \u0447\u0430\u0441\u0430")),(0,o.kt)("li",{parentName:"ul"},"RTO - Recovery Time Objective = DOWNTIME - ",(0,o.kt)("strong",{parentName:"li"},"\u0412\u0440\u0435\u043c\u044f")," - \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0440\u0435\u043c\u044f \u0432\u043e\u0437\u044c\u043c\u0435\u0442 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043f\u0440\u0438 Disater. ",(0,o.kt)("em",{parentName:"li"},"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: 12 \u0447\u0430\u0441\u043e\u0432."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://ah-public-pictures.hb.bizmrg.com/sre/RTO%2CRPO-schema.png",alt:"img"})),(0,o.kt)("h2",{id:"google-sre"},(0,o.kt)("a",{parentName:"h2",href:"http://example.com"},"Google SRE")))}m.isMDXComponent=!0}}]);