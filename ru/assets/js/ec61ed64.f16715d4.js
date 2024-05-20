"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[8453],{5680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>m});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=u(r),c=n,m=g["".concat(p,".").concat(c)]||g[c]||s[c]||o;return r?a.createElement(m,i(i({ref:t},d),{},{components:r})):a.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[g]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(8168),n=(r(6540),r(5680));const o={title:"Sending feedback",sidebar_position:5},i=void 0,l={unversionedId:"adguard-vpn-for-linux/feedback",id:"adguard-vpn-for-linux/feedback",title:"Sending feedback",description:"Report a problem or suggest a feature",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/adguard-vpn-for-linux/feedback.md",sourceDirName:"adguard-vpn-for-linux",slug:"/adguard-vpn-for-linux/feedback",permalink:"/KnowledgeBaseVPN/ru/adguard-vpn-for-linux/feedback",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/adguard-vpn-for-linux/feedback.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Sending feedback",sidebar_position:5},sidebar:"sidebar",previous:{title:"Settings",permalink:"/KnowledgeBaseVPN/ru/adguard-vpn-for-linux/settings"},next:{title:"\u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u043d\u043e\u0441\u0442\u0438",permalink:"/KnowledgeBaseVPN/ru/miscellaneous/acknowledgements"}},p={},u=[{value:"Report a problem or suggest a feature",id:"report-a-problem-or-suggest-a-feature",level:2},{value:"Collect and send logs",id:"collect-and-send-logs",level:2}],d={toc:u},g="wrapper";function s(e){let{components:t,...r}=e;return(0,n.yg)(g,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"report-a-problem-or-suggest-a-feature"},"Report a problem or suggest a feature"),(0,n.yg)("p",null,"If you\u2019ve found a bug in AdGuard VPN for Linux or want to suggest a new feature, here\u2019s how to do it:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Fill out the ",(0,n.yg)("a",{parentName:"li",href:"https://surveys.adguard.com/en/vpn_linux/form.html"},"feedback form"),"."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdGuardVPNCLI/issues/new/choose"},"Create a GitHub issue"),". But before you do, check the ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdGuardVPNCLI/issues?q=is%3Aissue"},"repository")," for similar issues.")),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"If you want to support the implementation of a new feature or bugfix, you can vote for it on GitHub. To vote, just react with some emoji.")),(0,n.yg)("h2",{id:"collect-and-send-logs"},"Collect and send logs"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Enable debug logging by typing:"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"adguardvpn-cli config set-debug-logging on"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Reproduce the problem and try to remember the exact time it occurred.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Wait a while, then archive the logs in the ",(0,n.yg)("em",{parentName:"p"},"Downloads")," or ",(0,n.yg)("em",{parentName:"p"},"Home")," folder by typing:"),(0,n.yg)("p",{parentName:"li"},"For Linux"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"zip -rj logs.zip ${XDG_DATA_HOME:-~/.local/share}/adguardvpn-cli/*.log")),(0,n.yg)("p",{parentName:"li"},"For Mac"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},'zip -rj ~/Downloads/logs.zip ~/Library/"Application Support"/adguardvpn-cli/*.log'))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Send the log file to ",(0,n.yg)("a",{parentName:"p",href:"mailto:devteam@adguard.com."},"devteam@adguard.com.")," Specify the time of the error and attach a link to your GitHub issue or its number (it appears as #number next to the title). Alternatively, you can upload the log file to Google Drive and share it with ",(0,n.yg)("a",{parentName:"p",href:"mailto:devteam@adguard.com."},"devteam@adguard.com.")," Attach the file link to your GitHub issue.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Disable debug logging by typing:"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"adguardvpn-cli config set-debug-logging off")))))}s.isMDXComponent=!0}}]);