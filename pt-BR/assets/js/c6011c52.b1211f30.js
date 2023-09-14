"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[397],{4137:function(e,o,r){r.d(o,{Zo:function(){return u},kt:function(){return m}});var t=r(7294);function n(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function a(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?a(Object(r),!0).forEach((function(o){n(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function s(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=t.createContext({}),d=function(e){var o=t.useContext(c),r=o;return e&&(r="function"==typeof e?e(o):i(i({},o),e)),r},u=function(e){var o=d(e.components);return t.createElement(c.Provider,{value:o},e.children)},l={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},p=t.forwardRef((function(e,o){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,f=p["".concat(c,".").concat(m)]||p[m]||l[m]||a;return r?t.createElement(f,i(i({ref:o},u),{},{components:r})):t.createElement(f,i({ref:o},u))}));function m(e,o){var r=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9215:function(e,o,r){r.r(o),r.d(o,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});var t=r(3117),n=r(102),a=(r(7294),r(4137)),i=["components"],s={title:"Compatibilidade do AdGuard VPN com Chromecast",sidebar_position:5},c=void 0,d={unversionedId:"adguard-vpn-for-android/solving-problems/chromecast",id:"adguard-vpn-for-android/solving-problems/chromecast",title:"Compatibilidade do AdGuard VPN com Chromecast",description:"A tecnologia integrada do Chromecast \xe9 incompat\xedvel com a execu\xe7\xe3o de uma VPN porque usa o protocolo DLNA, que n\xe3o oferece suporte a conex\xf5es VPN. Isso significa que se um dispositivo Chromecast e um celular ou tablet usando uma VPN est\xe3o na mesma rede Wi-Fi, na maior parte dos casos o Chromecast n\xe3o ser\xe1 reconhecido pelo dispositivo m\xf3vel.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/adguard-vpn-for-android/solving-problems/chromecast.md",sourceDirName:"adguard-vpn-for-android/solving-problems",slug:"/adguard-vpn-for-android/solving-problems/chromecast",permalink:"/KnowledgeBaseVPN/pt-BR/adguard-vpn-for-android/solving-problems/chromecast",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/adguard-vpn-for-android/solving-problems/chromecast.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Compatibilidade do AdGuard VPN com Chromecast",sidebar_position:5},sidebar:"sidebar",previous:{title:"Problemas com o perfil do Modo Restrito",permalink:"/KnowledgeBaseVPN/pt-BR/adguard-vpn-for-android/solving-problems/restricted-mode"},next:{title:"Resumo de recursos",permalink:"/KnowledgeBaseVPN/pt-BR/adguard-vpn-for-ios/overview"}},u={},l=[],p={toc:l};function m(e){var o=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A tecnologia integrada do Chromecast \xe9 incompat\xedvel com a execu\xe7\xe3o de uma VPN porque usa o protocolo ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Digital_Living_Network_Alliance"},"DLNA"),", que n\xe3o oferece suporte a conex\xf5es VPN. Isso significa que se um dispositivo Chromecast e um celular ou tablet usando uma VPN est\xe3o na mesma rede Wi-Fi, na maior parte dos casos o Chromecast n\xe3o ser\xe1 reconhecido pelo dispositivo m\xf3vel."),(0,a.kt)("p",null,"O Google tamb\xe9m bloqueou a capacidade de alterar as configura\xe7\xf5es de rede do Chromecast, restringindo o acesso \xe0s suas configura\xe7\xf5es de DNS. Isso tamb\xe9m impede que o Chromecast funcione com uma VPN."),(0,a.kt)("p",null,"Voc\xea pode resolver o problema configurando uma VPN em um roteador. Isso permitir\xe1 que todos os dispositivos conectados ao roteador usem a conex\xe3o VPN, incluindo o Chromecast. Mas lembre-se: configurar uma VPN no seu roteador pode exigir conhecimento adicional, ent\xe3o leia o manual do fabricante."))}m.isMDXComponent=!0}}]);