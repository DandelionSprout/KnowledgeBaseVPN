"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[2559],{5680:(e,t,r)=>{r.d(t,{xA:()=>i,yg:()=>g});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},i=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=d(r),c=a,g=s["".concat(l,".").concat(c)]||s[c]||y[c]||o;return r?n.createElement(g,u(u({ref:t},i),{},{components:r})):n.createElement(g,u({ref:t},i))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:a,u[1]=p;for(var d=2;d<o;d++)u[d]=r[d];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9722:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=r(8168),a=(r(6540),r(5680));const o={title:"How to set up AdGuard VPN on your router",sidebar_position:8},u=void 0,p={unversionedId:"general/set-up-adguard-vpn-on-your-router",id:"general/set-up-adguard-vpn-on-your-router",title:"How to set up AdGuard VPN on your router",description:"By setting up AdGuard VPN on your router, you can protect your data on devices where you cannot install VPN apps, such as smart TVs and game consoles.",source:"@site/docs/general/set-up-adguard-vpn-on-your-router.md",sourceDirName:"general",slug:"/general/set-up-adguard-vpn-on-your-router",permalink:"/KnowledgeBaseVPN/general/set-up-adguard-vpn-on-your-router",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/general/set-up-adguard-vpn-on-your-router.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"How to set up AdGuard VPN on your router",sidebar_position:8},sidebar:"sidebar",previous:{title:"What type of encryption is used in AdGuard VPN",permalink:"/KnowledgeBaseVPN/general/adguard-vpn-encryption"},next:{title:"What is a DNS leak",permalink:"/KnowledgeBaseVPN/general/dns-leaks"}},l={},d=[{value:"How to set up AdGuard VPN on your router",id:"how-to-set-up-adguard-vpn-on-your-router",level:2},{value:"Why setting up AdGuard VPN on your router may be useful",id:"why-setting-up-adguard-vpn-on-your-router-may-be-useful",level:2},{value:"Devices that can be connected to a router with AdGuard VPN",id:"devices-that-can-be-connected-to-a-router-with-adguard-vpn",level:2}],i={toc:d},s="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(s,(0,n.A)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"By setting up AdGuard VPN on your router, you can protect your data on devices where you cannot install VPN apps, such as smart TVs and game consoles."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"This option is only available if you have an AdGuard VPN subscription and your router supports IPsec.")),(0,a.yg)("h2",{id:"how-to-set-up-adguard-vpn-on-your-router"},"How to set up AdGuard VPN on your router"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"In your ",(0,a.yg)("a",{parentName:"p",href:"https://auth.adguard.com/login.html"},"AdGuard account"),", select AdGuard VPN.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Under ",(0,a.yg)("em",{parentName:"p"},"Devices"),", click ",(0,a.yg)("em",{parentName:"p"},"Add router"),"."),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg",alt:"Add router *mobile_border"}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Select the desired VPN server location and generate credentials."),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png",alt:"Generate credentials *mobile_border"})),(0,a.yg)("admonition",{parentName:"li",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"The next steps may vary depending on your router. We have used the Keenetic router as an example."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"In your admin page, go to the router settings.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Enable ",(0,a.yg)("em",{parentName:"p"},"VPN Client")," and click ",(0,a.yg)("em",{parentName:"p"},"Add VPN server"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Select IPsec-client (it may be called IKE; not L2TP/IPsec).")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Enter the credentials you created in step 3."),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg",alt:"Enter the credentials *mobile_border"}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Connect devices to your router."))),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"You\u2019ll need to update your router settings if you want to change the VPN server location.")),(0,a.yg)("h2",{id:"why-setting-up-adguard-vpn-on-your-router-may-be-useful"},"Why setting up AdGuard VPN on your router may be useful"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"With AdGuard VPN on your router, neither your VPN provider nor anyone else has access to your Internet activity"),(0,a.yg)("li",{parentName:"ul"},"Installing AdGuard VPN on your router secures your entire network, meaning that all devices connected to it are protected"),(0,a.yg)("li",{parentName:"ul"},"You can enhance security and protect your data on devices where it\u2019s not possible to install AdGuard VPN apps \u2014 smart TVs and game consoles")),(0,a.yg)("h2",{id:"devices-that-can-be-connected-to-a-router-with-adguard-vpn"},"Devices that can be connected to a router with AdGuard VPN"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"PlayStation and Xbox"),": To enjoy seamless online gaming and enhanced security on PS4 and PS5, ",(0,a.yg)("a",{parentName:"p",href:"#how-to-set-up-adguard-vpn-on-your-router"},"set up AdGuard VPN on your router")," and connect your console to it")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Apple TV"),": Follow the instructions to ",(0,a.yg)("a",{parentName:"p",href:"#how-to-set-up-adguard-vpn-on-your-router"},"set up AdGuard VPN on your router"),", then connect your Apple TV")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Chromecast"),":"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"For Gen 4:")," Simply download and install ",(0,a.yg)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.adguard.vpn"},"AdGuard VPN from Google Play")),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"For Gen 3:")," Follow our guide to ",(0,a.yg)("a",{parentName:"p",href:"#how-to-set-up-adguard-vpn-on-your-router"},"set up AdGuard VPN on your router"),". Make sure your TV and smartphone, tablet or computer are connected to the same network"),(0,a.yg)("p",{parentName:"li"},"For ",(0,a.yg)("strong",{parentName:"p"},"Android TV"),", you don\u2019t need to set up AdGuard VPN on a router \u2014 we have a special version for Android TV. Just follow these steps:"),(0,a.yg)("ol",{parentName:"li"},(0,a.yg)("li",{parentName:"ol"},"Install ",(0,a.yg)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.adguard.vpn"},"AdGuard VPN from Google Play")," on your Android TV"),(0,a.yg)("li",{parentName:"ol"},"If you already have an AdGuard account, log in with your credentials. If you\u2019re new to AdGuard, enter your email address and follow the on-screen instructions"),(0,a.yg)("li",{parentName:"ol"},"Open the app, select the location you want, and connect")))))}y.isMDXComponent=!0}}]);