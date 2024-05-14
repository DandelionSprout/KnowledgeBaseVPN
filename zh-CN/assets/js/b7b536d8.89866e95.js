"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[2946],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),u=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),g=n,y=c["".concat(d,".").concat(g)]||c[g]||s[g]||o;return r?a.createElement(y,l(l({ref:t},p),{},{components:r})):a.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4139:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(8168),n=(r(6540),r(5680));const o={title:"How the AdGuard VPN protocol works",sidebar_position:4},l=void 0,i={unversionedId:"general/adguard-vpn-protocol",id:"general/adguard-vpn-protocol",title:"How the AdGuard VPN protocol works",description:"\u6211\u4eec\u7684\u534f\u8bae\u9002\u7528\u4e8e\u6240\u6709 AdGuard VPN \u79fb\u52a8\u5e94\u7528\u548c\u684c\u9762\u5e94\u7528\u3002 \u4e0b\u8f7d\u5e76\u4f7f\u7528\u6211\u4eec\u7684\u4efb\u4f55\u4ea7\u54c1\uff0c\u60a8\u7684\u6570\u636e\u90fd\u5c06\u53d7\u5230\u6700\u5b89\u5168\u7684\u4fdd\u62a4\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/general/adguard-vpn-protocol.md",sourceDirName:"general",slug:"/general/adguard-vpn-protocol",permalink:"/KnowledgeBaseVPN/zh-CN/general/adguard-vpn-protocol",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/general/adguard-vpn-protocol.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How the AdGuard VPN protocol works",sidebar_position:4},sidebar:"sidebar",previous:{title:"\u5982\u4f55\u5b89\u88c5 AdGuard VPN",permalink:"/KnowledgeBaseVPN/zh-CN/general/how-to-install"},next:{title:"AdGuard VPN \u65e0\u9650\u7248\u7684\u4f18\u70b9",permalink:"/KnowledgeBaseVPN/zh-CN/general/free-vs-unlimited"}},d={},u=[{value:"\u6211\u4eec\u4e3a\u4ec0\u4e48\u5f00\u53d1 AdGuard VPN \u534f\u8bae",id:"\u6211\u4eec\u4e3a\u4ec0\u4e48\u5f00\u53d1-adguard-vpn-\u534f\u8bae",level:2},{value:"\u6d41\u884c VPN \u534f\u8bae\u7684\u7f3a\u70b9",id:"\u6d41\u884c-vpn-\u534f\u8bae\u7684\u7f3a\u70b9",level:2},{value:"What&#39;s great about the AdGuard VPN protocol",id:"whats-great-about-the-adguard-vpn-protocol",level:2}],p={toc:u},c="wrapper";function s(e){let{components:t,...r}=e;return(0,n.yg)(c,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"\u6211\u4eec\u7684\u534f\u8bae\u9002\u7528\u4e8e",(0,n.yg)("a",{parentName:"p",href:"https://adguard-vpn.com/zh_cn/welcome.html"},"\u6240\u6709 AdGuard VPN \u79fb\u52a8\u5e94\u7528\u548c\u684c\u9762\u5e94\u7528"),"\u3002 \u4e0b\u8f7d\u5e76\u4f7f\u7528\u6211\u4eec\u7684\u4efb\u4f55\u4ea7\u54c1\uff0c\u60a8\u7684\u6570\u636e\u90fd\u5c06\u53d7\u5230\u6700\u5b89\u5168\u7684\u4fdd\u62a4\u3002"),(0,n.yg)("h2",{id:"\u6211\u4eec\u4e3a\u4ec0\u4e48\u5f00\u53d1-adguard-vpn-\u534f\u8bae"},"\u6211\u4eec\u4e3a\u4ec0\u4e48\u5f00\u53d1 AdGuard VPN \u534f\u8bae"),(0,n.yg)("p",null,"\u591a\u5e74\u6765\uff0c\u6211\u4eec\u4e00\u76f4\u81f4\u529b\u4e8e\u5f00\u53d1\u5404\u79cd\u7c7b\u578b\u7684\u5e7f\u544a\u62e6\u622a\u5e94\u7528\u548c\u6d4f\u89c8\u5668\u6269\u5c55\u3002 2019 \u5e74\uff0c\u6211\u4eec\u51b3\u5b9a\u51e0\u4e4e\u662f\u4ece\u96f6\u5f00\u59cb\u5f00\u53d1\u81ea\u5df1\u7684 VPN \u670d\u52a1\u3002 When, in reality, there were a few reasons that prompted us to do so."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"AdGuard \u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f\u4e0e VPN \u5e94\u7528\u7a0b\u5e8f\u6709\u517c\u5bb9\u6027\u95ee\u9898\u3002 \u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4e24\u4e2a\u57fa\u4e8e VPN \u7684\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f\u65e0\u6cd5\u540c\u65f6\u8fd0\u884c\uff1a\u5728 iOS \u4e0a\u5076\u5c14\u80fd\uff0c\u800c\u5728 Android \u4e0a\u4ece\u672a\u5b9e\u73b0\u3002 As AdGuard Ad Blocker apps use local VPN to filter network traffic, using them alongside any VPN app would be out of the question. \u56e0\u6b64\uff0c\u6211\u4eec\u8ba4\u4e3a\u5f00\u53d1\u5185\u90e8 VPN \u662f\u786e\u4fdd\u517c\u5bb9\u6027\u7684\u552f\u4e00\u53ef\u884c\u65b9\u6848\uff1a\u7ecf\u8fc7\u6211\u4eec\u7684\u6f5c\u5fc3\u7814\u53d1\uff0c\u4e24\u4e2a\u5e94\u7528\u7a0b\u5e8f\u7ec8\u4e8e\u80fd\u591f\u4f5c\u4e3a\u4e00\u4e2a VPN \u670d\u52a1\u4e00\u8d77\u8fd0\u884c\u4e86\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u5176\u6b21\uff0cVPN \u4f3c\u4e4e\u4e0e\u6211\u4eec\u7684\u7406\u5ff5\u548c\u4f18\u5148\u4e8b\u9879\u66f4\u4e3a\u76f8\u5173\u3002 \u6211\u4eec\u7684\u9996\u8981\u76ee\u6807\u662f\u4fdd\u62a4\u7528\u6237\u7684\u9690\u79c1\uff0c\u800c\u8fd9\u6b63\u662f VPN \u7684\u4f5c\u7528\u6240\u5728\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u6700\u540e\uff0c\u5728\u591a\u5e74\u5f00\u53d1 AdGuard \u8f6f\u4ef6\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u6210\u4e3a\u4e86\u8fc7\u6ee4\u7f51\u7edc\u6d41\u91cf\u7684\u4e13\u5bb6\u3002 \u8fd9\u8ba9\u6211\u4eec\u80fd\u591f\u5e26\u6765\u65b0\u4e1c\u897f\uff0c\u800c\u4e0d\u662f\u6210\u4e3a\u53e6\u4e00\u4e2a\u5e73\u5e73\u65e0\u5947\u7684 VPN\u3002")),(0,n.yg)("p",null,"\u4ece\u4e00\u5f00\u59cb\uff0c\u6211\u4eec\u5c31\u8ba4\u4e3a AdGuard VPN \u4e0e\u5176\u7ade\u4e89\u5bf9\u624b\u6709\u4e00\u4e2a\u5173\u952e\u533a\u522b\u2014\u2014\u6211\u4eec\u4f1a\u5f00\u53d1\u90e8\u7f72\u4e00\u79cd\u5185\u90e8 VPN \u534f\u8bae\uff0c\u8be5\u534f\u8bae\u4e0d\u4f1a\u5f3a\u8feb\u7528\u6237\u5728\u5b89\u5168\u6027\u548c\u901f\u5ea6\u4e4b\u95f4\u505a\u51fa\u9009\u62e9\u3002"),(0,n.yg)("h2",{id:"\u6d41\u884c-vpn-\u534f\u8bae\u7684\u7f3a\u70b9"},"\u6d41\u884c VPN \u534f\u8bae\u7684\u7f3a\u70b9"),(0,n.yg)("p",null,"\u6211\u4eec\u5728\u5f00\u53d1 AdGuard VPN \u534f\u8bae\u65f6\u8003\u8651\u5230\u4e86\u6d41\u884c VPN \u534f\u8bae\uff08OpenVPN\u3001WireGuard\u3001IPSec \u7b49\uff09\u7684\u7f3a\u9677\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u8fd9\u4e9b\u534f\u8bae\u5bb9\u6613\u5728\u7f51\u7edc\u5c42\u9762\u4e0a\u88ab\u68c0\u6d4b\u548c\u963b\u6b62\u3002"),(0,n.yg)("li",{parentName:"ul"},'If you try to "conceal" them, the performance will drop.')),(0,n.yg)("p",null,'To "conceal" the use of VPN, the data flow is often "wrapped" in a TCP connection, and sometimes it\'s additionally encrypted to make the traffic appear like normal website communication. Unfortunately, this approach has a disadvantage \u2014 due to the use of TCP, there is a need for additional confirmation of delivery.'),(0,n.yg)("p",null,"\u4f7f\u7528\u4efb\u4f55\u6d41\u884c\u7684 VPN \u534f\u8bae\uff0c\u6211\u4eec\u603b\u662f\u9762\u4e34\u4e00\u4e2a\u6743\u8861\uff1a\u8981\u4e48\u5feb\u4f46\u6613\u4e8e\u68c0\u6d4b\uff0c\u8981\u4e48\u5f88\u6162\u3002"),(0,n.yg)("h2",{id:"whats-great-about-the-adguard-vpn-protocol"},"What's great about the AdGuard VPN protocol"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"\u51e0\u4e4e\u4e0d\u53ef\u80fd\u4e0e\u6b63\u5e38\u7684 HTTPS \u6d41\u91cf\u533a\u5206\u5f00\u6765"),"\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e0e AdGuard VPN \u670d\u52a1\u5668\u7684\u8fde\u63a5\u770b\u8d77\u6765\u548c\u4e0e\u6b63\u5e38\u7f51\u7ad9\u7684\u8fde\u63a5\u5b8c\u5168\u76f8\u540c\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u6211\u4eec\u4f7f\u7528 ",(0,n.yg)("strong",{parentName:"li"},"HTTPS\uff08TLS\uff09"),"\u8fdb\u884c\u52a0\u5bc6\uff0c\u5b83\u53ef\u4ee5\u5b8c\u7f8e\u5730\u5e94\u5bf9\u5b8c\u6210\u4efb\u52a1\u3002 \u8fd9\u662f\u4e16\u754c\u4e0a\u6700\u6d41\u884c\u7684\u52a0\u5bc6\u65b9\u6cd5\uff0c\u5b9e\u73b0\u5b83\u7684\u7a0b\u5e8f\u5e93\u7ecf\u5e38\u53d7\u5230\u5b89\u5168\u5ba1\u8ba1\u3002")),(0,n.yg)("p",null,"\u4e00\u4e9b\u73b0\u6709\u7684 VPN \u534f\u8bae\u4e5f\u4f1a\u8fdb\u884c\u52a0\u5bc6\uff0c\u800c\u4e14\u5b83\u4eec\u7684 VPN \u75d5\u8ff9\u4e5f\u5f88\u96be\u88ab\u68c0\u6d4b\u3002 \u4f46\u8fd9\u901a\u5e38\u662f\u4ee5\u901f\u5ea6\u964d\u4f4e\u4e3a\u4ee3\u4ef7\u7684\u3002 This doesn't happen in our case, thanks to several solutions."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"We use the ",(0,n.yg)("strong",{parentName:"li"},"HTTP/2 transport protocol"),", which makes it virtually impossible to detect the AdGuard VPN protocol while maintaining high speed."),(0,n.yg)("li",{parentName:"ul"},"Unlike others, the AdGuard VPN protocol ",(0,n.yg)("em",{parentName:"li"},"operates with data and not with packets"),". \u8fd9\u610f\u5473\u7740 AdGuard VPN \u4f1a\u4e3a\u6bcf\u4e2a\u8fde\u63a5\u5efa\u7acb\u5355\u72ec\u7684\u201c\u96a7\u9053\u201d\uff0c\u6bcf\u4e2a HTTP/2 \u6570\u636e\u6d41\u5bf9\u5e94\u4e00\u4e2a\u8fde\u63a5\u3002 AdGuard VPN \u901a\u8fc7\u6b64\u96a7\u9053\u4f20\u8f93\u6570\u636e\u3002 \u8fd9\u4f7f\u6211\u4eec\u80fd\u591f\u901a\u8fc7\u8282\u7701\u6570\u636e\u5305\u7684\u786e\u8ba4\u6765\u52a0\u5feb\u64cd\u4f5c\u901f\u5ea6\uff0c\u56e0\u4e3a\u6211\u4eec\u53ef\u4ee5\u628a\u591a\u4e2a\u6570\u636e\u5305\u7684\u6570\u636e\u7f13\u51b2\u5230\u4e00\u4e2a\u6570\u636e\u5305\u4e2d\uff0c\u7136\u540e\u518d\u53d1\u9001\u5230 VPN \u670d\u52a1\u5668\uff08\u6216\u4ece\u670d\u52a1\u5668\u53d1\u9001\u5230\u5ba2\u6237\u7aef\uff09\u3002 \u800c\u6570\u636e\u5305\u8d8a\u5c11\uff0c\u9700\u8981\u7684\u786e\u8ba4\u5c31\u8d8a\u5c11\u3002")))}s.isMDXComponent=!0}}]);