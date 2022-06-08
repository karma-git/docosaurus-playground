"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4220],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return v}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(r),v=i,d=m["".concat(c,".").concat(v)]||m[v]||p[v]||l;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5295:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(7462),i=r(3366),l=(r(7294),r(3905)),a=["components"],o={id:"4-slo",title:"Chapter 4.  Service Level Objectives",sidebar_position:4},c="Chapter 4.  Service Level Objectives",s={unversionedId:"SRE/sre-book-1/4-slo",id:"SRE/sre-book-1/4-slo",title:"Chapter 4.  Service Level Objectives",description:"Service Level Terminology",source:"@site/docs/SRE/sre-book-1/4-slo.md",sourceDirName:"SRE/sre-book-1",slug:"/SRE/sre-book-1/4-slo",permalink:"/Andrew-Horbach.github.io-Public/docs/SRE/sre-book-1/4-slo",editUrl:"https://github.com/karma-git/Andrew-Horbach.github.io-Public/blob/master/docs/SRE/sre-book-1/4-slo.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"4-slo",title:"Chapter 4.  Service Level Objectives",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Chapter 3.  Embracing Risk",permalink:"/Andrew-Horbach.github.io-Public/docs/SRE/sre-book-1/3-risks"},next:{title:"Chapter 5.  Eliminating Toil",permalink:"/Andrew-Horbach.github.io-Public/docs/SRE/sre-book-1/5-toil"}},u=[{value:"Service Level Terminology",id:"service-level-terminology",children:[],level:2},{value:"Indicators in Practice",id:"indicators-in-practice",children:[],level:2},{value:"Objectives in Practice",id:"objectives-in-practice",children:[],level:2},{value:"Agreements in Practice",id:"agreements-in-practice",children:[],level:2},{value:"Key Insights",id:"key-insights",children:[],level:2}],p={toc:u};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"chapter-4--service-level-objectives"},"Chapter 4.  Service Level Objectives"),(0,l.kt)("h2",{id:"service-level-terminology"},"Service Level Terminology"),(0,l.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043d\u0438\u043c\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443 \u0441\u0435\u0440\u0432\u0438\u0441\u0443 \u043d\u0443\u0436\u043d\u043e \u0435\u0433\u043e \u0438\u0437\u043c\u0435\u0440\u0438\u0442\u044c \u0438 \u043e\u0446\u0435\u043d\u0438\u0442\u044c, \u0442\u0443\u0442 \u043d\u0430 \u043f\u043e\u043c\u043e\u0449\u044c \u043f\u0440\u0438\u0445\u043e\u0434\u044f\u0442:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SLIs (service level ",(0,l.kt)("em",{parentName:"li"},"indicators"),") - \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438 \u0443\u0440\u043e\u0432\u043d\u044f \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f"),(0,l.kt)("li",{parentName:"ul"},"SLOs (service level ",(0,l.kt)("em",{parentName:"li"},"objectives"),") - \u0446\u0435\u043b\u0435\u0432\u044b\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438 \u0443\u0440\u043e\u0432\u043d\u044f \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f"),(0,l.kt)("li",{parentName:"ul"},"SLAs (service level ",(0,l.kt)("em",{parentName:"li"},"agreements"),") - \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f")),(0,l.kt)("p",null,"SLI - \u044d\u0442\u043e \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 - \u043c\u0435\u0442\u0440\u0438\u043a\u0438, \u043b\u0430\u0442\u0435\u043d\u0441\u0438 \u0438\u043b\u0438 qps (\u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443)"),(0,l.kt)("p",null,"SLO - \u0441\u0442\u0440\u043e\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 SLI, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u044f \u0445\u043e\u0447\u0443 \u0447\u0442\u043e\u0431\u044b \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 (\u0432\u0441\u0435 \u043a\u0440\u043e\u043c\u0435 5xx) \u0431\u044b\u043b\u043e \u0431\u043e\u043b\u044c\u0448\u0435 99%"),(0,l.kt)("p",null,"SLA - \u044d\u0442\u043e \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442, \u0447\u0442\u043e \u0441\u043b\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u0435\u0441\u043b\u0438 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f SLO \u043d\u0435 \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u044e\u0442\u0441\u044f? (\u0448\u0442\u0440\u0430\u0444\u044b / \u0441\u043a\u0438\u0434\u043a\u0438). \u042d\u0442\u043e \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c \u0431\u0438\u0437\u043d\u0435\u0441\u0430 \u0438 \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d (\u044f \u0441\u043e\u0437\u0434\u0430\u043b \u043e\u043f\u0435\u043d\u0441\u043e\u0440\u0441 \u043f\u0440\u043e\u0435\u043a\u0442, \u0441\u0434\u0435\u043b\u0430\u043b \u0434\u043b\u044f \u043d\u0435\u0433\u043e SLO, \u043d\u043e \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442 \u0441\u043e \u0432\u0441\u0435\u043c \u043c\u0438\u0440\u043e\u043c \u044f \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u043d\u0435 \u0445\u043e\u0447\u0443)"),(0,l.kt)("h2",{id:"indicators-in-practice"},"Indicators in Practice"),(0,l.kt)("p",null,"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u043c \u043c\u0435\u0442\u0440\u0438\u043a\u0438 \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0438\u0441\u0430 (\u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0448\u0435\u043a\u0441\u043f\u0438\u0440\u0430)."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u043d\u0443\u0436\u043d\u043e \u043f\u043e\u043c\u043d\u0438\u0442\u044c \u0447\u0442\u043e \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0437\u0430\u043c\u0435\u0440\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u0440\u0435\u043c\u044f \u043e\u0442\u0432\u0435\u0442\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 (\u043a\u043b\u0438\u0435\u043d\u0442 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 \u0441\u0432\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043e\u043b\u044c\u0448\u0435)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"FE \u0441\u0435\u0440\u0432\u0438\u0441\u044b:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"availability (\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c) - \u041c\u043e\u0436\u0435\u043c \u043b\u0438 \u043c\u044b \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441?"),(0,l.kt)("li",{parentName:"ul"},"latency (\u0432\u0440\u0435\u043c\u044f \u043e\u0442\u043a\u043b\u0438\u043a\u0430) - \u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441?"),(0,l.kt)("li",{parentName:"ul"},"throughput (\u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043d\u0430\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c) - \u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043c\u044b \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u044b \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c?"))),(0,l.kt)("li",{parentName:"ul"},"Storage \u0441\u0435\u0440\u0432\u0438\u0441\u044b:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"latency (\u0432\u0440\u0435\u043c\u044f \u043e\u0442\u043a\u043b\u0438\u043a\u0430) - \u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0447\u0442\u043e\u0431\u044b \u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0438\u043b\u0438 \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435?"),(0,l.kt)("li",{parentName:"ul"},"availability (\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c) - \u041c\u043e\u0436\u0435\u043c \u043b\u0438 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0434\u0430\u043d\u043d\u044b\u043c \u043a\u043e\u0433\u0434\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043b\u043e\u0441\u044c?"),(0,l.kt)("li",{parentName:"ul"},"durability (\u0434\u043e\u043b\u0433\u043e\u0432\u0435\u0447\u043d\u043e\u0441\u0442\u044c) - \u0421\u043c\u043e\u0436\u0435\u043c \u043b\u0438 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0434\u0430\u043d\u043d\u044b\u043c \u0447\u0435\u0440\u0435\u0437 N \u043b\u0435\u0442?"))),(0,l.kt)("li",{parentName:"ul"},"Big Data \u0441\u0438\u0441\u0442\u0435\u043c\u044b:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"throughput (\u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043d\u0430\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c) - \u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u044f\u043c\u043e \u0441\u0435\u0439\u0447\u0430\u0441?"),(0,l.kt)("li",{parentName:"ul"},"end-to-end latency (\u043e\u0431\u0449\u0430\u044f \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0430) - \u041a\u0430\u043a \u0434\u043e\u043b\u0433\u043e \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432\u043d\u0443\u0442\u0440\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u044b? "))),(0,l.kt)("li",{parentName:"ul"},"correctness:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u0411\u044b\u043b \u043b\u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441?"),(0,l.kt)("li",{parentName:"ul"},"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u044b \u0434\u0430\u043d\u043d\u044b\u0435?")))),(0,l.kt)("p",null,"\u041c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433, + \u043d\u0443\u0436\u043d\u043e \u0441\u043e\u0431\u0438\u0440\u0430\u0442\u044c \u043c\u0435\u0442\u0440\u0438\u043a\u0438 \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 (Sentry)."),(0,l.kt)("p",null,"\u0410\u0433\u0440\u0435\u0433\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 - \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u0430\u044f \u0448\u0442\u0443\u043a\u0430, \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u043c\u0438\u043c\u043e \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430 \u043f\u0435\u0440\u0441\u0435\u043d\u0442\u0438\u043b\u0438 - \u043d\u0430 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442 99\u044b\u0439 \u043f\u0435\u0440\u0441\u0435\u043d\u0442\u0438\u043b\u044c (\u0445\u0443\u0434\u0448\u0438\u0439 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439). \u0412 \u0438\u0434\u0435\u0430\u043b\u0435 \u043e\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u044f\u0442\u044c \u043d\u0430\u0448\u0435\u043c\u0443 SLO"),(0,l.kt)("h2",{id:"objectives-in-practice"},"Objectives in Practice"),(0,l.kt)("p",null,"SLO ",(0,l.kt)("strong",{parentName:"p"},"\u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d")," \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u0430\u043c\u0438 + \u0431\u0438\u0437\u043d\u0435\u0441\u043e\u043c. \u041f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0434\u043b\u044f SRE \u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u044b\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"99% (averaged over 1 minute) of Get RPC calls will complete in less than 100 ms (measured across all the backend servers)."),(0,l.kt)("li",{parentName:"ul"},"99% of Get RPC calls will complete in less than 100 ms.")),(0,l.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c SLO \u0434\u043b\u044f \u044e\u0437\u0435\u0440\u043e\u0432 \u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b (\u0432\u043d\u0443\u0442\u0440\u0438 \u0431\u043e\u043b\u0435\u0435 \u0436\u0435\u0441\u0442\u043a\u0438\u0435 SLO)"),(0,l.kt)("h2",{id:"agreements-in-practice"},"Agreements in Practice"),(0,l.kt)("p",null,"SLA - \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0431\u0438\u0437\u043d\u0435\u0441\u0430, \u044e\u0440\u0438\u0441\u0442\u043e\u0432 \u0438 etc. \u0417\u0430\u0434\u0430\u0447\u0430 SRE - \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c SLIs \u0438 SLOs"),(0,l.kt)("h2",{id:"key-insights"},"Key Insights"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Symlinks"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Borgmon - (26)"))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Empty"))))}m.isMDXComponent=!0}}]);