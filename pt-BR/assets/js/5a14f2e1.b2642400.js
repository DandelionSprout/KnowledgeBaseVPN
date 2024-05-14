"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[4936],{5680:(e,r,t)=>{t.d(r,{xA:()=>d,yg:()=>g});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=l(t),y=a,g=s["".concat(i,".").concat(y)]||s[y]||c[y]||o;return t?n.createElement(g,u(u({ref:r},d),{},{components:t})):n.createElement(g,u({ref:r},d))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=y;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[s]="string"==typeof e?e:a,u[1]=p;for(var l=2;l<o;l++)u[l]=t[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},9600:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>u,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=t(8168),a=(t(6540),t(5680));const o={title:"How to set up AdGuard VPN on your router",sidebar_position:8},u=void 0,p={unversionedId:"general/set-up-adguard-vpn-on-your-router",id:"general/set-up-adguard-vpn-on-your-router",title:"How to set up AdGuard VPN on your router",description:"By setting up AdGuard VPN on your router, you can protect your data on devices where you cannot install VPN apps, such as smart TVs and game consoles.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/general/set-up-adguard-vpn-on-your-router.md",sourceDirName:"general",slug:"/general/set-up-adguard-vpn-on-your-router",permalink:"/KnowledgeBaseVPN/pt-BR/general/set-up-adguard-vpn-on-your-router",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/general/set-up-adguard-vpn-on-your-router.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"How to set up AdGuard VPN on your router",sidebar_position:8},sidebar:"sidebar",previous:{title:"Que tipo de criptografia \xe9 usada no AdGuard VPN",permalink:"/KnowledgeBaseVPN/pt-BR/general/adguard-vpn-encryption"},next:{title:"What is a DNS leak",permalink:"/KnowledgeBaseVPN/pt-BR/general/dns-leaks"}},i={},l=[{value:"How to set up AdGuard VPN on your router",id:"how-to-set-up-adguard-vpn-on-your-router",level:2},{value:"Why setting up AdGuard VPN on your router may be useful",id:"why-setting-up-adguard-vpn-on-your-router-may-be-useful",level:2}],d={toc:l},s="wrapper";function c(e){let{components:r,...t}=e;return(0,a.yg)(s,(0,n.A)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"By setting up AdGuard VPN on your router, you can protect your data on devices where you cannot install VPN apps, such as smart TVs and game consoles."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"This option is only available if you have an AdGuard VPN subscription and your router supports IPsec.")),(0,a.yg)("h2",{id:"how-to-set-up-adguard-vpn-on-your-router"},"How to set up AdGuard VPN on your router"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"In your ",(0,a.yg)("a",{parentName:"p",href:"https://auth.adguard.com/login.html"},"AdGuard account"),", select AdGuard VPN.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Under ",(0,a.yg)("em",{parentName:"p"},"Devices"),", click ",(0,a.yg)("em",{parentName:"p"},"Add router"),"."),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg",alt:"Add router *mobile_border"}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Select the desired VPN server location and generate credentials."),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png",alt:"Generate credentials *mobile_border"})),(0,a.yg)("admonition",{parentName:"li",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"The next steps may vary depending on your router. We have used the Keenetic router as an example."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"In your admin page, go to the router settings.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Enable ",(0,a.yg)("em",{parentName:"p"},"VPN Client")," and click ",(0,a.yg)("em",{parentName:"p"},"Add VPN server"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Select IPsec-client (it may be called IKE; not L2TP/IPsec).")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Enter the credentials you created in step 3."),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg",alt:"Enter the credentials *mobile_border"}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Connect devices to your router."))),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"You\u2019ll need to update your router settings if you want to change the VPN server location.")),(0,a.yg)("h2",{id:"why-setting-up-adguard-vpn-on-your-router-may-be-useful"},"Why setting up AdGuard VPN on your router may be useful"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"With AdGuard VPN on your router, neither your VPN provider nor anyone else has access to your Internet activity"),(0,a.yg)("li",{parentName:"ul"},"Installing AdGuard VPN on your router secures your entire network, meaning that all devices connected to it are protected"),(0,a.yg)("li",{parentName:"ul"},"You can enhance security and protect your data on devices where it's not possible to install AdGuard VPN apps \u2014 smart TVs (currently, AdGuard VPN is only available on Android TV) and game consoles")))}c.isMDXComponent=!0}}]);