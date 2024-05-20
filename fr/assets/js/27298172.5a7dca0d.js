"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[5259],{5680:(e,r,t)=>{t.d(r,{xA:()=>d,yg:()=>g});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(t),c=a,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return t?n.createElement(g,l(l({ref:r},d),{},{components:t})):n.createElement(g,l({ref:r},d))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5180:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(8168),a=(t(6540),t(5680));const o={title:"Comment collecter et envoyer des journaux",sidebar_position:2},l=void 0,i={unversionedId:"adguard-vpn-for-android/solving-problems/logs",id:"adguard-vpn-for-android/solving-problems/logs",title:"Comment collecter et envoyer des journaux",description:"Si vous rencontrez un probl\xe8me lors de l'utilisation d'AdGuard VPN pour Android, vous pouvez nous en informer en envoyant les journaux de l'application.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/adguard-vpn-for-android/solving-problems/logs.md",sourceDirName:"adguard-vpn-for-android/solving-problems",slug:"/adguard-vpn-for-android/solving-problems/logs",permalink:"/KnowledgeBaseVPN/fr/adguard-vpn-for-android/solving-problems/logs",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/adguard-vpn-for-android/solving-problems/logs.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Comment collecter et envoyer des journaux",sidebar_position:2},sidebar:"sidebar",previous:{title:"Comment emp\xeacher le syst\xe8me de d\xe9sactiver AdGuard VPN",permalink:"/KnowledgeBaseVPN/fr/adguard-vpn-for-android/solving-problems/background-work"},next:{title:"Compatibilit\xe9 avec le Bloqueur AdGuard",permalink:"/KnowledgeBaseVPN/fr/adguard-vpn-for-android/solving-problems/integrated-mode"}},p={},s=[{value:"Collecte et envoi de journaux standard",id:"collecte-et-envoi-de-journaux-standard",level:2},{value:"Collecte et envoi de journaux d\xe9taill\xe9s",id:"collecte-et-envoi-de-journaux-d\xe9taill\xe9s",level:2}],d={toc:s},u="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.A)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Si vous rencontrez un probl\xe8me lors de l'utilisation d'AdGuard VPN pour Android, vous pouvez nous en informer en envoyant les journaux de l'application."),(0,a.yg)("h2",{id:"collecte-et-envoi-de-journaux-standard"},"Collecte et envoi de journaux standard"),(0,a.yg)("p",null,"Par d\xe9faut, AdGuard VPN pour Android utilise le niveau de journalisation ",(0,a.yg)("strong",{parentName:"p"},"Par d\xe9faut"),", c'est-\xe0-dire la collecte de base de donn\xe9es sur les processus en cours d'ex\xe9cution de l'application. Pour envoyer ces journaux, proc\xe9dez comme suit\xa0:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Ouvrez AdGuard VPN pour Android et, si possible, r\xe9p\xe9tez les actions qui ont conduit \xe0 l'erreur. Notez l'heure exacte \xe0 laquelle cette erreur s'est produite.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Open ",(0,a.yg)("em",{parentName:"p"},"Settings")," \u2192 ",(0,a.yg)("em",{parentName:"p"},"Support")," \u2192 ",(0,a.yg)("em",{parentName:"p"},"Report a bug"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Dans le formulaire ouvert, entrez votre adresse e-mail pour commentaires et d\xe9crivez l'erreur trouv\xe9e, y compris l'heure \xe0 laquelle cette erreur s'est produite. If you can\u2019t reproduce the problem, specify as accurately as possible when it last occurred.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Check ",(0,a.yg)("em",{parentName:"p"},"Send app logs and system info"),". Your logs will be sent along with the report."))),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"You can also export and send logs manually. To do this, go to ",(0,a.yg)("em",{parentName:"p"},"Settings")," \u2192 ",(0,a.yg)("em",{parentName:"p"},"General")," \u2192 ",(0,a.yg)("em",{parentName:"p"},"Advanced")," and tap ",(0,a.yg)("em",{parentName:"p"},"Export logs and system info"),".")),(0,a.yg)("h2",{id:"collecte-et-envoi-de-journaux-d\xe9taill\xe9s"},"Collecte et envoi de journaux d\xe9taill\xe9s"),(0,a.yg)("p",null,"Dans la plupart des cas, le niveau de journalisation ",(0,a.yg)("strong",{parentName:"p"},"Par d\xe9faut")," est suffisant pour d\xe9tecter les bogues \xe9ventuels. Mais il existe des cas o\xf9 des informations techniques plus d\xe9taill\xe9es sur l'appareil et les connexions sont requises, puis notre \xe9quipe d'assistance vous demandera d'activer le niveau de journalisation ",(0,a.yg)("strong",{parentName:"p"},"\xc9tendu")," ou ",(0,a.yg)("strong",{parentName:"p"},"Extr\xeame"),". Pour envoyer ces types de journaux, proc\xe9dez comme suit\xa0:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Open AdGuard VPN for Android and select ",(0,a.yg)("em",{parentName:"p"},"Settings")," (the gear icon at the bottom right corner) \u2192 ",(0,a.yg)("em",{parentName:"p"},"General")," \u2192 ",(0,a.yg)("em",{parentName:"p"},"Advanced")," \u2192 ",(0,a.yg)("em",{parentName:"p"},"Logging level"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Select ",(0,a.yg)("em",{parentName:"p"},"Extended")," or ",(0,a.yg)("em",{parentName:"p"},"Extreme"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"R\xe9p\xe9tez les actions qui ont conduit \xe0 l'erreur et notez l'heure \xe0 laquelle elle s'est produite.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Switch the logging level back to ",(0,a.yg)("em",{parentName:"p"},"Default"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Return to ",(0,a.yg)("em",{parentName:"p"},"Settings")," and open ",(0,a.yg)("em",{parentName:"p"},"Support"),". Tap ",(0,a.yg)("em",{parentName:"p"},"Report a bug"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"In the form that opens, enter your email address for feedback and describe the error you found, including the time when it occurred.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Check mark next to ",(0,a.yg)("em",{parentName:"p"},"Send app logs and system info")," and tap ",(0,a.yg)("em",{parentName:"p"},"Send"),"."))))}m.isMDXComponent=!0}}]);