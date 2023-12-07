"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[3383],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,y=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(y,u(u({ref:t},s),{},{components:n})):r.createElement(y,u({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var d=2;d<o;d++)u[d]=n[d];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3854:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var r=n(3117),a=n(102),o=(n(7294),n(4137)),u=["components"],i={title:"How to set up AdGuard VPN on your router",sidebar_position:8},l=void 0,d={unversionedId:"general/set-up-adguard-vpn-on-your-router",id:"general/set-up-adguard-vpn-on-your-router",title:"How to set up AdGuard VPN on your router",description:"By setting up AdGuard VPN on your router, you can protect your data on devices where you cannot install VPN apps, such as smart TVs and game consoles.",source:"@site/docs/general/set-up-adguard-vpn-on-your-router.md",sourceDirName:"general",slug:"/general/set-up-adguard-vpn-on-your-router",permalink:"/KnowledgeBaseVPN/it/general/set-up-adguard-vpn-on-your-router",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/general/set-up-adguard-vpn-on-your-router.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"How to set up AdGuard VPN on your router",sidebar_position:8},sidebar:"sidebar",previous:{title:"Che tipo di crittografia viene utilizzata in AdGuard VPN",permalink:"/KnowledgeBaseVPN/it/general/adguard-vpn-encryption"},next:{title:"What is a DNS leak",permalink:"/KnowledgeBaseVPN/it/general/dns-leaks"}},s={},c=[{value:"How to set up AdGuard VPN on your router",id:"how-to-set-up-adguard-vpn-on-your-router",level:2},{value:"Why setting up AdGuard VPN on your router may be useful",id:"why-setting-up-adguard-vpn-on-your-router-may-be-useful",level:2}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By setting up AdGuard VPN on your router, you can protect your data on devices where you cannot install VPN apps, such as smart TVs and game consoles."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This option is only available if you have an AdGuard VPN subscription and your router supports IPsec."))),(0,o.kt)("h2",{id:"how-to-set-up-adguard-vpn-on-your-router"},"How to set up AdGuard VPN on your router"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In your ",(0,o.kt)("a",{parentName:"li",href:"https://auth.adguard.com/login.html"},"AdGuard account"),", select AdGuard VPN"),(0,o.kt)("li",{parentName:"ul"},"Under ",(0,o.kt)("em",{parentName:"li"},"Devices"),", click ",(0,o.kt)("em",{parentName:"li"},"Add router"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg",alt:"Add router *mobile_border"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the desired VPN server location and generate credentials")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png",alt:"Generate credentials *mobile_border"})),(0,o.kt)("p",null,"Please note that the next steps may vary depending on your router. We have used the Keenetic router as an example."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In your admin page, go to the router settings"),(0,o.kt)("li",{parentName:"ul"},"Enable ",(0,o.kt)("em",{parentName:"li"},"VPN Client")," and click ",(0,o.kt)("em",{parentName:"li"},"Add VPN server")),(0,o.kt)("li",{parentName:"ul"},"Select IPsec-client (it may be called IKE; not L2TP/IPsec)"),(0,o.kt)("li",{parentName:"ul"},"Enter the credentials you created in step 3")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg",alt:"Enter the credentials *mobile_border"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect devices to your router")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You\u2019ll need to update your router settings if you want to change the VPN server location."))),(0,o.kt)("h2",{id:"why-setting-up-adguard-vpn-on-your-router-may-be-useful"},"Why setting up AdGuard VPN on your router may be useful"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With AdGuard VPN on your router, neither your VPN provider nor anyone else has access to your Internet activity"),(0,o.kt)("li",{parentName:"ul"},"Installing AdGuard VPN on your router secures your entire network, meaning that all devices connected to it are protected"),(0,o.kt)("li",{parentName:"ul"},"You can enhance security and protect your data on devices where it's not possible to install AdGuard VPN apps \u2014 smart TVs (",(0,o.kt)("em",{parentName:"li"},"currently, AdGuard VPN is only available on Android TV"),") and game consoles")))}m.isMDXComponent=!0}}]);