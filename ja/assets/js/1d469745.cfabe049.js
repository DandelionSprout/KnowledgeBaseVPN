"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[2531],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),g=r,m=u["".concat(d,".").concat(g)]||u[g]||c[g]||o;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2957:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(8168),r=(t(6540),t(5680));const o={title:"Installation and removal",sidebar_position:2},i=void 0,l={unversionedId:"adguard-vpn-for-windows/installation",id:"adguard-vpn-for-windows/installation",title:"Installation and removal",description:"\u52d5\u4f5c\u74b0\u5883",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/adguard-vpn-for-windows/installation.md",sourceDirName:"adguard-vpn-for-windows",slug:"/adguard-vpn-for-windows/installation",permalink:"/KnowledgeBaseVPN/ja/adguard-vpn-for-windows/installation",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/adguard-vpn-for-windows/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Installation and removal",sidebar_position:2},sidebar:"sidebar",previous:{title:"\u6a5f\u80fd\u6982\u8981",permalink:"/KnowledgeBaseVPN/ja/adguard-vpn-for-windows/overview"},next:{title:"\u4e00\u822c\u7684\u306a\u30a4\u30f3\u30b9\u30c8\u30fc\u30e9\u30fc\u30a8\u30e9\u30fc",permalink:"/KnowledgeBaseVPN/ja/adguard-vpn-for-windows/solving-problems/common-installer-errors"}},d={},s=[{value:"\u52d5\u4f5c\u74b0\u5883",id:"\u52d5\u4f5c\u74b0\u5883",level:2},{value:"AdGuard VPN for Windows \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",id:"adguard-vpn-for-windows-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",level:2},{value:"AdGuard VPN for Windows \u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",id:"adguard-vpn-for-windows-\u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",level:2},{value:"Advanced uninstallation",id:"advanced",level:3}],p={toc:s},u="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u52d5\u4f5c\u74b0\u5883"},"\u52d5\u4f5c\u74b0\u5883"),(0,r.yg)("p",null,"AdGuard VPN can only be installed on devices with ",(0,r.yg)("strong",{parentName:"p"},"Microsoft Windows 11/10/8.1/8/7/Vista SP2 (web-based only)"),"."),(0,r.yg)("h2",{id:"adguard-vpn-for-windows-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"},"AdGuard VPN for Windows \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"),(0,r.yg)("p",null,"To install AdGuard VPN for Windows, visit ",(0,r.yg)("a",{parentName:"p",href:"https://adguard-vpn.com/welcome.html"},"our website")," and click the ",(0,r.yg)("em",{parentName:"p"},"Download")," button. \u305d\u306e\u5f8c\u3001 ",(0,r.yg)("inlineCode",{parentName:"p"},"adguardVPNInstaller.exe")," \u304c\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002 \u30a4\u30f3\u30b9\u30c8\u30fc\u30e9\u30fc\u3092\u5b9f\u884c\u3057\u3001\u8868\u793a\u3055\u308c\u308b\u624b\u9806\u3092\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002 \u3053\u306e\u30d7\u30ed\u30bb\u30b9\u306f1\u5206\u7a0b\u5ea6\u3067\u7d42\u308f\u308a\u307e\u3059\u3002"),(0,r.yg)("p",null,"Then you will need to check the box to accept the terms of the EULA and the Privacy policy. \u305d\u3057\u3066\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306e\u6700\u5f8c\u306e\u30b9\u30c6\u30c3\u30d7\u3068\u3057\u3066\u306f\u3001AdGuard\u30a2\u30ab\u30a6\u30f3\u30c8\u7d4c\u7531\u307e\u305f\u306fSNS\uff08Google\u3001Apple\u3001Facebook\uff09\u7d4c\u7531\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002"),(0,r.yg)("h2",{id:"adguard-vpn-for-windows-\u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"},"AdGuard VPN for Windows \u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"),(0,r.yg)("p",null,"If you decide to remove AdGuard VPN from your computer, use one of three options listed below:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Click ",(0,r.yg)("em",{parentName:"li"},"Start")," and find AdGuard VPN in the opened list. Right-click it and select ",(0,r.yg)("em",{parentName:"li"},"Uninstall"),"."),(0,r.yg)("li",{parentName:"ul"},"Click ",(0,r.yg)("em",{parentName:"li"},"Start")," \u2192 ",(0,r.yg)("em",{parentName:"li"},"Settings")," \u2192 ",(0,r.yg)("em",{parentName:"li"},"Apps")," \u2192 ",(0,r.yg)("em",{parentName:"li"},"Apps and features"),". Find AdGuard VPN in the list, click it and choose ",(0,r.yg)("em",{parentName:"li"},"Uninstall"),"."),(0,r.yg)("li",{parentName:"ul"},"Open the ",(0,r.yg)("em",{parentName:"li"},"Control Panel"),", then click ",(0,r.yg)("em",{parentName:"li"},"Programs")," \u2192 ",(0,r.yg)("em",{parentName:"li"},"Programs and Features")," \u2192 ",(0,r.yg)("em",{parentName:"li"},"Uninstall or change a program"),". Find AdGuard VPN in the list, right-click it and select ",(0,r.yg)("em",{parentName:"li"},"Uninstall"),".")),(0,r.yg)("h3",{id:"advanced"},"Advanced uninstallation"),(0,r.yg)("p",null,"In case regular uninstall doesn't work for any reason, you can try to use an advanced method. First of all, you need to ",(0,r.yg)("a",{parentName:"p",href:"https://cdn.adtidy.org/distr/windows/Uninstall_Utility.zip"},"download the uninstaller tool")," created by our developers. Extract the archive to any folder on your PC, run the ",(0,r.yg)("strong",{parentName:"p"},"Adguard.UninstallUtility.exe")," file, and allow the app to make changes to your device. Then follow the instruction below:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Choose ",(0,r.yg)("em",{parentName:"p"},"Standard uninstall"),", ",(0,r.yg)("em",{parentName:"p"},"Delete AdGuard VPN"),", and click ",(0,r.yg)("em",{parentName:"p"},"Uninstall")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/windows/standard_uninstall.png",alt:"Standard uninstall *border"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Wait until uninstall is finished"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/windows/standard_uninstall_2.png",alt:"Uninstall finished *border"})),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Follow the next steps only if performing the first two steps wasn\u2019t enough for some reason. We strongly recommend contacting our support team before using steps 3\u20134 of the advanced uninstall instructions."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Choose ",(0,r.yg)("em",{parentName:"p"},"Advanced uninstall"),", ",(0,r.yg)("em",{parentName:"p"},"Delete AdGuard VPN"),", and click ",(0,r.yg)("em",{parentName:"p"},"Uninstall")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/windows/advanced_uninstall.png",alt:"Advanced uninstall *border"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Wait until uninstall is finished"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/windows/advanced_uninstall_2.png",alt:"Uninstall finished *border"})))),(0,r.yg)("p",null,"AdGuard is successfully uninstalled!"))}c.isMDXComponent=!0}}]);