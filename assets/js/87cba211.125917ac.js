"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9431],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3482:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),l=["components"],a={id:"slurm-way-in-sre",title:"\u041f\u0443\u0442\u044c \u0432 SRE",sidebar_position:2},s="\u041f\u0443\u0442\u044c \u0432 SRE",u={unversionedId:"SRE/sre-videos/slurm-way-in-sre",id:"SRE/sre-videos/slurm-way-in-sre",title:"\u041f\u0443\u0442\u044c \u0432 SRE",description:"\u0410\u0440\u0442\u0451\u043c \u0410\u0440\u0442\u0435\u043c\u044c\u0435\u0432",source:"@site/docs/SRE/sre-videos/2-way-in-sre.md",sourceDirName:"SRE/sre-videos",slug:"/SRE/sre-videos/slurm-way-in-sre",permalink:"/Andrew-Horbach.github.io-Public/docs/SRE/sre-videos/slurm-way-in-sre",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SRE/sre-videos/2-way-in-sre.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"slurm-way-in-sre",title:"\u041f\u0443\u0442\u044c \u0432 SRE",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is SRE",permalink:"/Andrew-Horbach.github.io-Public/docs/SRE/sre-videos/nana-sre"},next:{title:"sre-mix",permalink:"/Andrew-Horbach.github.io-Public/docs/SRE/sre-videos/sre-mix"}},c=[{value:"SRE tools",id:"sre-tools",children:[],level:2},{value:"\u043a\u0435\u0439\u0441\u044b, \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u0438 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0435",id:"\u043a\u0435\u0439\u0441\u044b-\u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0435-\u0438-\u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0435",children:[],level:2},{value:"\u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u0438\u043d\u0442\u0435\u0440\u0432\u044c\u044e",id:"\u0432\u043e\u043f\u0440\u043e\u0441\u044b-\u043d\u0430-\u0438\u043d\u0442\u0435\u0440\u0432\u044c\u044e",children:[],level:2},{value:"Google",id:"google",children:[],level:2}],p={toc:c};function d(e){var t,r=e.components,a=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u043f\u0443\u0442\u044c-\u0432-sre"},"\u041f\u0443\u0442\u044c \u0432 SRE"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/artemirk/"},"\u0410\u0440\u0442\u0451\u043c \u0410\u0440\u0442\u0435\u043c\u044c\u0435\u0432")),(0,o.kt)("div",{class:"video-wrapper"},(0,o.kt)("iframe",((t={height:"540",frameborder:"0",allowfullscreen:!0,width:"100%",src:"https://www.youtube.com/embed/Cj9yKoF6hd0"}).frameborder="0",t.allowfullscreen=!0,t))),(0,o.kt)("h2",{id:"sre-tools"},"SRE tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ssh, tcpdump, top")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GAP"),", logging, custom exporters")),(0,o.kt)("h2",{id:"\u043a\u0435\u0439\u0441\u044b-\u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0435-\u0438-\u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0435"},"\u043a\u0435\u0439\u0441\u044b, \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u0438 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0435"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0441\u0435\u0440\u0432\u0438\u0441 \u0438\u043d\u043e\u0433\u0434\u0430 \u043b\u043e\u0432\u0438\u0442 ",(0,o.kt)("inlineCode",{parentName:"li"},"5\u0445\u0445")," \u2014 \u0437\u0430\u043b\u0430\u0437\u0438\u0448\u044c \u0432 \u043a\u043e\u0434 \u0438 \u043f\u0440\u0430\u0432\u0438\u0448\u044c \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u0438\u0432\u044b\u0447\u043d\u044b\u0439 \u043f\u0430\u0439\u043f\u043b\u0430\u0439\u043d \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438"),(0,o.kt)("li",{parentName:"ul"},"\u0443\u043f\u0430\u043b ",(0,o.kt)("strong",{parentName:"li"},"prod")," \u2014 ",(0,o.kt)("inlineCode",{parentName:"li"},"postmortem"),", \u0432 \u043d\u0435\u043c \u0432\u044b\u0434\u0435\u043b\u044f\u044e\u0442\u0441\u044f ",(0,o.kt)("em",{parentName:"li"},"action points")),(0,o.kt)("li",{parentName:"ul"},"\u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0448\u044c \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0435\u0441\u0432\u0435\u0436\u0438\u0435 / \u0440\u0430\u0437\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 - \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u0435\u0439"),(0,o.kt)("li",{parentName:"ul"},"\u043e\u0434\u0438\u043d \u0438\u0437 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 \u0434\u0435\u0433\u0440\u0430\u0434\u0438\u0440\u043e\u0432\u0430\u043b \u0438 \u043d\u0435 \u043f\u0440\u043e\u0445\u043e\u0434\u044f\u0442 http \u0437\u0430\u043f\u0440\u043e\u0441\u044b, \u0442\u044e\u043d\u0438\u043c \u0432\u0440\u0435\u043c\u044f \u043e\u0442\u0432\u0435\u0442\u0430 \u0438 etc."),(0,o.kt)("li",{parentName:"ul"},"DBA \u0441\u043a\u0438\u043d\u0443\u043b\u0438 \u0430\u0432\u0442\u043e\u0438\u043d\u043a\u0440\u0435\u043c\u0435\u043d\u0442 \u0438 \u0432\u0441\u0435 ",(0,o.kt)("inlineCode",{parentName:"li"},"id"),"-\u0448\u043d\u0438\u043a\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043f\u043e\u0448\u043b\u0438 \u0441 \u043d\u0443\u043b\u044f == \u043d\u043e\u0432\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u043c\u0443 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443")),(0,o.kt)("h2",{id:"\u0432\u043e\u043f\u0440\u043e\u0441\u044b-\u043d\u0430-\u0438\u043d\u0442\u0435\u0440\u0432\u044c\u044e"},"\u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u0438\u043d\u0442\u0435\u0440\u0432\u044c\u044e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"loadoverage(LA)"),(0,o.kt)("li",{parentName:"ul"},"\u041a\u0430\u043a \u043d\u0430\u0439\u0442\u0438 \u043a\u0442\u043e \u0441\u0435\u0439\u0447\u0430\u0441 \u043f\u0438\u0448\u0435\u0442 \u0432 \u0444\u0430\u0439\u043b? "),(0,o.kt)("li",{parentName:"ul"},"\u041a\u0442\u043e \u0437\u0430\u043d\u044f\u043b \u043f\u043e\u0440\u0442? "),(0,o.kt)("li",{parentName:"ul"},"\u041e\u0448\u0438\u0431\u043a\u0438 \u043d\u0430 TCP")),(0,o.kt)("h2",{id:"google"},"Google"),(0,o.kt)("p",null,"\u0412 Google SRE \u0431\u044b\u0432\u0430\u044e\u0442 - SreDev \u0438\u043b\u0438 SreOps. \u0422\u0430\u043c \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e\u0442 \u043a\u0430\u043a \u043e\u0442\u0434\u0435\u0431\u0430\u0436\u0438\u0442\u044c:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0435\u0441\u0442\u044c web-\u0441\u0435\u0440\u0432\u0435\u0440 \u0438 \u043e\u043d \u043f\u043b\u043e\u0445\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442."),(0,o.kt)("li",{parentName:"ul"},"\u0435\u0441\u0442\u044c \u0411\u0414 \u0438 \u043e\u043d\u0430 \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442."),(0,o.kt)("li",{parentName:"ul"},"\u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043d\u0435 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0430 - \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0441\u0442\u044c ",(0,o.kt)("inlineCode",{parentName:"li"},"twitter"),"-\u0430 \u0441 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0435\u043c 99.9%. \u0414\u0430\u043d\u043e: \u0443 \u043e\u0434\u043d\u043e\u0433\u043e web-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0441\u0442\u044c 90%, \u0441\u043a\u043e\u043b\u044c\u043a\u043e rps \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u0441\u0435\u0440\u0432\u0435\u0440 \u0438 \u043a\u0430\u043a\u0430\u044f \u0443 \u043d\u0435\u0433\u043e \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043d\u0430\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u043f\u043e \u0441\u0435\u0442\u0438.")))}d.isMDXComponent=!0}}]);