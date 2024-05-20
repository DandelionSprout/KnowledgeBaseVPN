"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[7817],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),s=o,y=d["".concat(c,".").concat(s)]||d[s]||g[s]||a;return t?r.createElement(y,l(l({ref:n},p),{},{components:t})):r.createElement(y,l({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6748:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(8168),o=(t(6540),t(5680));const a={title:"Login, connection, and update",sidebar_position:3},l=void 0,i={unversionedId:"adguard-vpn-for-linux/login",id:"adguard-vpn-for-linux/login",title:"Login, connection, and update",description:"Log in and log out",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/adguard-vpn-for-linux/login.md",sourceDirName:"adguard-vpn-for-linux",slug:"/adguard-vpn-for-linux/login",permalink:"/KnowledgeBaseVPN/fr/adguard-vpn-for-linux/login",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/adguard-vpn-for-linux/login.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Login, connection, and update",sidebar_position:3},sidebar:"sidebar",previous:{title:"Installation and removal",permalink:"/KnowledgeBaseVPN/fr/adguard-vpn-for-linux/installation"},next:{title:"Settings",permalink:"/KnowledgeBaseVPN/fr/adguard-vpn-for-linux/settings"}},c={},u=[{value:"Log in and log out",id:"log-in-and-log-out",level:2},{value:"Connect to VPN",id:"connect-to-vpn",level:2},{value:"Check for updates",id:"check-for-updates",level:2}],p={toc:u},d="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"log-in-and-log-out"},"Log in and log out"),(0,o.yg)("p",null,"To log in or create an account, type:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"adguardvpn-cli login\n")),(0,o.yg)("p",null,"Enter the email address and password for your AdGuard account. If you don\u2019t have an account yet, you\u2019ll be prompted to create one."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"You can also create an AdGuard account on our ",(0,o.yg)("a",{parentName:"p",href:"https://auth.adguard.com/login.html"},"website")," and then log in to AdGuard VPN for Linux using your credentials.")),(0,o.yg)("p",null,"To log out of AdGuard VPN, type:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"adguardvpn-cli logout\n")),(0,o.yg)("h2",{id:"connect-to-vpn"},"Connect to VPN"),(0,o.yg)("p",null,"For quick connection, type:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"adguard-vpn cli connect\n")),(0,o.yg)("p",null,"AdGuard VPN will connect to the fastest available or the last used location."),(0,o.yg)("p",null,"To view available locations, type:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"adguardvpn-cli list-locations\n")),(0,o.yg)("p",null,"To connect to a specific location, type:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"adguardvpn-cli connect -l <location>\n")),(0,o.yg)("p",null,"Replace ",(0,o.yg)("inlineCode",{parentName:"p"},"<location>")," with the city, country, or ISO code of the location you want to connect to."),(0,o.yg)("p",null,"If required, enter your admin password."),(0,o.yg)("h2",{id:"check-for-updates"},"Check for updates"),(0,o.yg)("p",null,"To check for updates, type:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"adguardvpn-cli check-update\n")))}g.isMDXComponent=!0}}]);