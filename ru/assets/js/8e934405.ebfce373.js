"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[4569],{4137:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return c}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),o=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},p=function(e){var r=o(e.components);return n.createElement(i.Provider,{value:r},e.children)},N={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=o(t),c=a,m=s["".concat(i,".").concat(c)]||s[c]||N[c]||l;return t?n.createElement(m,d(d({ref:r},p),{},{components:t})):n.createElement(m,d({ref:r},p))}));function c(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,d=new Array(l);d[0]=s;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,d[1]=u;for(var o=2;o<l;o++)d[o]=t[o];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4918:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return N}});var n=t(3117),a=t(102),l=(t(7294),t(4137)),d=["components"],u={title:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 DNS-\u0443\u0442\u0435\u0447\u043a\u0430",sidebar_position:9},i=void 0,o={unversionedId:"general/dns-leaks",id:"general/dns-leaks",title:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 DNS-\u0443\u0442\u0435\u0447\u043a\u0430",description:"\u041f\u043e\u0441\u043b\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 VPN \u0445\u043e\u0447\u0435\u0442\u0441\u044f \u0431\u044b\u0442\u044c \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c, \u0447\u0442\u043e \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u0443\u0442\u0435\u0447\u0435\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0443\u0442 \u043a \u0434\u0435\u0430\u043d\u043e\u043d\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438. AdGuard VPN \u043d\u0430\u0434\u0451\u0436\u043d\u043e \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0432\u0430\u0448 \u0442\u0440\u0430\u0444\u0438\u043a \u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0442 \u043f\u043e\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u0433\u043b\u0430\u0437. \u0422\u0435\u043c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435, \u0432 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u043e\u0434\u043e\u0437\u0440\u0438\u0442\u044c \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0443\u0442\u0435\u0447\u0435\u043a DNS \u0432 \u043d\u0430\u0448\u0435\u043c VPN-\u0441\u0435\u0440\u0432\u0438\u0441\u0435. \u0420\u0430\u0441\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c, \u043e\u0442\u043a\u0443\u0434\u0430 \u0431\u0435\u0440\u0443\u0442\u0441\u044f \u044d\u0442\u0438 \u043e\u043f\u0430\u0441\u0435\u043d\u0438\u044f \u0438 \u043f\u043e\u0447\u0435\u043c\u0443 \u043e\u043d\u0438 \u0431\u0435\u0441\u043f\u043e\u0447\u0432\u0435\u043d\u043d\u044b.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/general/dns-leaks.md",sourceDirName:"general",slug:"/general/dns-leaks",permalink:"/KnowledgeBaseVPN/ru/general/dns-leaks",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/general/dns-leaks.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 DNS-\u0443\u0442\u0435\u0447\u043a\u0430",sidebar_position:9},sidebar:"sidebar",previous:{title:"\u041a\u0430\u043a\u043e\u0439 \u0442\u0438\u043f \u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 AdGuard VPN",permalink:"/KnowledgeBaseVPN/ru/general/adguard-vpn-encryption"},next:{title:"\u041e\u0431\u0437\u043e\u0440 \u0444\u0443\u043d\u043a\u0446\u0438\u0439",permalink:"/KnowledgeBaseVPN/ru/adguard-vpn-for-android/overview"}},p={},N=[{value:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 DNS-\u0443\u0442\u0435\u0447\u043a\u0438?",id:"\u0447\u0442\u043e-\u0442\u0430\u043a\u043e\u0435-dns-\u0443\u0442\u0435\u0447\u043a\u0438",level:2},{value:"\u041a\u0430\u043a \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u0442\u044c DNS- \u0443\u0442\u0435\u0447\u043a\u0443",id:"\u043a\u0430\u043a-\u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u0442\u044c-dns--\u0443\u0442\u0435\u0447\u043a\u0443",level:2},{value:"\u041f\u043e\u0447\u0435\u043c\u0443 \u0432 AdGuard VPN \u043d\u0435\u0442 DNS-\u0443\u0442\u0435\u0447\u0435\u043a",id:"\u043f\u043e\u0447\u0435\u043c\u0443-\u0432-adguard-vpn-\u043d\u0435\u0442-dns-\u0443\u0442\u0435\u0447\u0435\u043a",level:2},{value:"\u041a\u0430\u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 DNS-\u0441\u0435\u0440\u0432\u0435\u0440 \u0432 AdGuard VPN",id:"\u043a\u0430\u043a-\u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439-dns-\u0441\u0435\u0440\u0432\u0435\u0440-\u0432-adguard-vpn",level:2}],s={toc:N};function c(e){var r=e.components,t=(0,a.Z)(e,d);return(0,l.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 VPN \u0445\u043e\u0447\u0435\u0442\u0441\u044f \u0431\u044b\u0442\u044c \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c, \u0447\u0442\u043e \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u0443\u0442\u0435\u0447\u0435\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0443\u0442 \u043a \u0434\u0435\u0430\u043d\u043e\u043d\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438. AdGuard VPN \u043d\u0430\u0434\u0451\u0436\u043d\u043e \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0432\u0430\u0448 \u0442\u0440\u0430\u0444\u0438\u043a \u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0442 \u043f\u043e\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u0433\u043b\u0430\u0437. \u0422\u0435\u043c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435, \u0432 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u043e\u0434\u043e\u0437\u0440\u0438\u0442\u044c \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0443\u0442\u0435\u0447\u0435\u043a DNS \u0432 \u043d\u0430\u0448\u0435\u043c VPN-\u0441\u0435\u0440\u0432\u0438\u0441\u0435. \u0420\u0430\u0441\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c, \u043e\u0442\u043a\u0443\u0434\u0430 \u0431\u0435\u0440\u0443\u0442\u0441\u044f \u044d\u0442\u0438 \u043e\u043f\u0430\u0441\u0435\u043d\u0438\u044f \u0438 \u043f\u043e\u0447\u0435\u043c\u0443 \u043e\u043d\u0438 \u0431\u0435\u0441\u043f\u043e\u0447\u0432\u0435\u043d\u043d\u044b."),(0,l.kt)("h2",{id:"\u0447\u0442\u043e-\u0442\u0430\u043a\u043e\u0435-dns-\u0443\u0442\u0435\u0447\u043a\u0438"},"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 DNS-\u0443\u0442\u0435\u0447\u043a\u0438?"),(0,l.kt)("p",null,"\u041a\u043e\u0433\u0434\u0430 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 VPN, \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a DNS-\u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0445\u043e\u0434\u0438\u0442\u044c \u0437\u0430 \u043f\u0440\u0435\u0434\u0435\u043b\u044b \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e VPN-\u0442\u0443\u043d\u043d\u0435\u043b\u044f \u0438 \u0432\u0430\u0448 \u0442\u0440\u0430\u0444\u0438\u043a \u043c\u043e\u0436\u0435\u0442 \u0441\u0442\u0430\u0442\u044c \u0432\u0438\u0434\u0438\u043c\u044b\u043c \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430."),(0,l.kt)("p",null,"\u0414\u0440\u0443\u0433\u0438\u043c\u0438 \u0441\u043b\u043e\u0432\u0430\u043c\u0438, \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437, \u043a\u043e\u0433\u0434\u0430 \u0432\u044b \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442\u0435 \u0441\u0430\u0439\u0442, \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043f\u043e\u0441\u044b\u043b\u0430\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 DNS-\u0441\u0435\u0440\u0432\u0435\u0440 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430 \u0438 \u0432 \u043e\u0442\u0432\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 IP-\u0430\u0434\u0440\u0435\u0441 \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430. \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0432\u0430\u0448 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 \u0432\u0438\u0434\u0438\u0442 \u0432\u0441\u0435 \u0432\u0430\u0448\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0432 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0435 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c \u0432\u0430\u0441."),(0,l.kt)("h2",{id:"\u043a\u0430\u043a-\u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u0442\u044c-dns--\u0443\u0442\u0435\u0447\u043a\u0443"},"\u041a\u0430\u043a \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u0442\u044c DNS- \u0443\u0442\u0435\u0447\u043a\u0443"),(0,l.kt)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0432\u0441\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u044f DNS-\u0443\u0442\u0435\u0447\u0435\u043a, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,l.kt)("inlineCode",{parentName:"p"},"whoer.net"),". \u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043f\u043e\u043d\u0438\u043c\u0430\u0442\u044c, \u0447\u0442\u043e \u0441\u0430\u043c\u0438 \u044d\u0442\u0438 \u0441\u0430\u0439\u0442\u044b \u043d\u0435 \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b \u0438 \u0438\u0445 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b \u043d\u0435 \u044f\u0441\u043d\u044b, \u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u0438\u0445 \u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438\u0439 \u0437\u0430\u043f\u0443\u0433\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043c\u043d\u0438\u043c\u044b\u043c\u0438 \u0443\u0442\u0435\u0447\u043a\u0430\u043c\u0438 \u0438 \u043f\u0440\u043e\u0434\u0430\u0442\u044c \u043a\u0430\u043a\u0443\u044e-\u0442\u043e \u0443\u0441\u043b\u0443\u0433\u0443."),(0,l.kt)("p",null,"\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u0430\u0439\u0442\u044b, \u0441\u043a\u0430\u043d\u0438\u0440\u0443\u044e\u0449\u0438\u0435 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c, \u0441\u0447\u0438\u0442\u0430\u044e\u0442 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0435 IP-\u0430\u0434\u0440\u0435\u0441\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438 IP-\u0430\u0434\u0440\u0435\u0441\u0430 DNS-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \xab\u0445\u043e\u0440\u043e\u0448\u0438\u043c\xbb \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0438\u043c \u043d\u0430 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0443\u0442\u0435\u0447\u0435\u043a. \u0412 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0442\u0430\u043a\u043e\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0435 \u043c\u043e\u0436\u0435\u0442 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 VPN. \u041a\u043e\u0433\u0434\u0430 VPN \u043e\u0442\u043a\u043b\u044e\u0447\u0451\u043d \u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0438\u0434\u0443\u0442 \u043d\u0430 DNS-\u0441\u0435\u0440\u0432\u0435\u0440 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430, \u0432\u0430\u0448 IP-\u0430\u0434\u0440\u0435\u0441 \u0438 \u0430\u0434\u0440\u0435\u0441 DNS-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442."),(0,l.kt)("h2",{id:"\u043f\u043e\u0447\u0435\u043c\u0443-\u0432-adguard-vpn-\u043d\u0435\u0442-dns-\u0443\u0442\u0435\u0447\u0435\u043a"},"\u041f\u043e\u0447\u0435\u043c\u0443 \u0432 AdGuard VPN \u043d\u0435\u0442 DNS-\u0443\u0442\u0435\u0447\u0435\u043a"),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 AdGuard VPN \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043d\u0430 \u043b\u044e\u0431\u043e\u043c \u0438\u0437 \u0441\u0430\u0439\u0442\u043e\u0432, \u0441\u043a\u0430\u043d\u0438\u0440\u0443\u044e\u0449\u0438\u0445 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c, \u043e\u043d \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u0442, \u0447\u0442\u043e DNS-\u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u044b ",(0,l.kt)("a",{parentName:"p",href:"https://adguard-dns.io"},"AdGuard DNS"),". \u041d\u043e \u044d\u0442\u043e \u043d\u0435\u043b\u044c\u0437\u044f \u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0443\u0442\u0435\u0447\u043a\u043e\u0439."),(0,l.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043d\u0435\u0444\u0438\u043b\u044c\u0442\u0440\u0443\u044e\u0449\u0435\u0433\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430 AdGuard DNS \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043e \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0432 AdGuard VPN. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u044d\u0442\u043e\u043c\u0443 \u0432\u0430\u0448\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0435 \u0443\u0445\u043e\u0434\u044f\u0442 \u043d\u0430 DNS-\u0441\u0435\u0440\u0432\u0435\u0440\u044b \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430, \u0430 \u0437\u043d\u0430\u0447\u0438\u0442, \u0432\u044b \u043e\u0441\u0442\u0430\u0451\u0442\u0435\u0441\u044c \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u044b\u043c\u0438, \u0430 \u0432\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u2014 \u0437\u0430\u0449\u0438\u0449\u0451\u043d\u043d\u044b\u043c\u0438."),(0,l.kt)("p",null,"\u0411\u043e\u043b\u0435\u0435 \u0442\u043e\u0433\u043e, AdGuard DNS \u2014 \u043e\u0447\u0435\u043d\u044c \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0439 DNS-\u0441\u0435\u0440\u0432\u0438\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0431\u043e\u043b\u0435\u0435 50 \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432 \u0447\u0435\u043b\u043e\u0432\u0435\u043a. \u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442 \u0434\u043b\u044f \u0432\u0430\u0441? \u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0442\u0430\u043a\u0443\u044e \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044e: \u043e\u0431\u044b\u0447\u043d\u044b\u0439 VPN-\u0441\u0435\u0440\u0432\u0438\u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 DNS-\u0441\u0435\u0440\u0432\u0435\u0440, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0430 \u0442\u043e\u043c \u0436\u0435 IP-\u0430\u0434\u0440\u0435\u0441\u0435, \u0447\u0442\u043e \u0438 VPN-\u0441\u0435\u0440\u0432\u0435\u0440. \u0427\u0438\u0441\u043b\u043e \u0435\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0435\u0434\u0432\u0430 \u043b\u0438 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 1000."),(0,l.kt)("p",null,"\u0410 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 AdGuard DNS \u0432\u044b \xab\u0441\u043e\u043b\u044c\u0451\u0442\u0435\u0441\u044c\xbb \u0441 50 \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u0430\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u0438 \u0432\u0430\u0441 \u043d\u0435 \u0441\u043c\u043e\u0433\u0443\u0442 \u043e\u0442\u0441\u043b\u0435\u0434\u0438\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u043e \u0444\u0430\u043a\u0442\u0443 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f DNS-\u0441\u0435\u0440\u0432\u0435\u0440\u0430."),(0,l.kt)("h2",{id:"\u043a\u0430\u043a-\u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439-dns-\u0441\u0435\u0440\u0432\u0435\u0440-\u0432-adguard-vpn"},"\u041a\u0430\u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 DNS-\u0441\u0435\u0440\u0432\u0435\u0440 \u0432 AdGuard VPN"),(0,l.kt)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0445 DNS-\u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432 \u043e\u0442 ",(0,l.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-providers"},"\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0445 DNS-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u0432"),". \u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437 \u043d\u0438\u0445 \u043c\u043e\u0433\u0443\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u0432\u043e\u0438 \u043f\u0440\u044f\u043c\u044b\u0435 \u043e\u0431\u044f\u0437\u0430\u043d\u043d\u043e\u0441\u0442\u0438 \u2014 \u043e\u0442\u0434\u0430\u0432\u0430\u0442\u044c IP-\u0430\u0434\u0440\u0435\u0441\u0430 \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u0434\u043e\u043c\u0435\u043d\u043e\u0432, \u0430 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u043e\u043b\u044c\u0448\u0435."),(0,l.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, AdGuard DNS \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u0440\u0435\u043a\u043b\u0430\u043c\u0443 \u0438 \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0432\u0430\u0448\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u043e\u0442 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u044f, \u0430 AdGuard DNS \u0421\u0435\u043c\u0435\u0439\u043d\u044b\u0439 \u0441\u043e\u0447\u0435\u0442\u0430\u0435\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 AdGuard DNS \u0441 \u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u043c \u043f\u043e\u0438\u0441\u043a\u043e\u043c \u0438 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u043e\u0439 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u0434\u043b\u044f \u0432\u0437\u0440\u043e\u0441\u043b\u044b\u0445."),(0,l.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043b\u044e\u0431\u043e\u0439 DNS-\u0441\u0435\u0440\u0432\u0435\u0440 \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0435\u0433\u043e \u0432 AdGuard VPN:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0432 AdGuard VPN \u0434\u043b\u044f Windows: ",(0,l.kt)("em",{parentName:"li"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")," \u2192 ",(0,l.kt)("em",{parentName:"li"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f")," \u2192 ",(0,l.kt)("em",{parentName:"li"},"DNS-\u0441\u0435\u0440\u0432\u0435\u0440\u044b")),(0,l.kt)("li",{parentName:"ul"},"\u0432 AdGuard VPN \u0434\u043b\u044f Mac: ",(0,l.kt)("em",{parentName:"li"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")," \u2192 ",(0,l.kt)("em",{parentName:"li"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f ")," \u2192 ",(0,l.kt)("em",{parentName:"li"},"DNS-\u0441\u0435\u0440\u0432\u0435\u0440\u044b")),(0,l.kt)("li",{parentName:"ul"},"\u0432 AdGuard VPN \u0434\u043b\u044f Android: ",(0,l.kt)("em",{parentName:"li"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")," (\u0438\u043a\u043e\u043d\u043a\u0430 \u0448\u0435\u0441\u0442\u0435\u0440\u0451\u043d\u043a\u0438) \u2192 ",(0,l.kt)("em",{parentName:"li"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f")," \u2192 ",(0,l.kt)("em",{parentName:"li"},"DNS-\u0441\u0435\u0440\u0432\u0435\u0440")),(0,l.kt)("li",{parentName:"ul"},"\u0432 AdGuard VPN \u0434\u043b\u044f iOS: ",(0,l.kt)("em",{parentName:"li"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")," (\u0438\u043a\u043e\u043d\u043a\u0430 \u0448\u0435\u0441\u0442\u0435\u0440\u0451\u043d\u043a\u0438) \u2192 ",(0,l.kt)("em",{parentName:"li"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f")," \u2192 ",(0,l.kt)("em",{parentName:"li"},"DNS-\u0441\u0435\u0440\u0432\u0435\u0440")),(0,l.kt)("li",{parentName:"ul"},"\u0432 \u0411\u0440\u0430\u0443\u0437\u0435\u0440\u043d\u043e\u043c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0438 AdGuard VPN: \u0433\u0430\u043c\u0431\u0443\u0440\u0433\u0435\u0440-\u043c\u0435\u043d\u044e \u2192 ",(0,l.kt)("em",{parentName:"li"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")," \u2192 ",(0,l.kt)("em",{parentName:"li"},"DNS-\u0441\u0435\u0440\u0432\u0435\u0440"))))}c.isMDXComponent=!0}}]);