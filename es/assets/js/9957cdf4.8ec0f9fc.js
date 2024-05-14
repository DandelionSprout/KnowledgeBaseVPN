"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[5674],{5680:(e,a,n)=>{n.d(a,{xA:()=>l,yg:()=>m});var r=n(6540);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function t(e,a){if(null==e)return{};var n,r,o=function(e,a){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),u=function(e){var a=r.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},l=function(e){var a=u(e.components);return r.createElement(d.Provider,{value:a},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=t(e,["components","mdxType","originalType","parentName"]),c=u(n),g=o,m=c["".concat(d,".").concat(g)]||c[g]||p[g]||i;return n?r.createElement(m,s(s({ref:a},l),{},{components:n})):r.createElement(m,s({ref:a},l))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=g;var t={};for(var d in a)hasOwnProperty.call(a,d)&&(t[d]=a[d]);t.originalType=e,t[c]="string"==typeof e?e:o,s[1]=t;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2889:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>u});var r=n(8168),o=(n(6540),n(5680));const i={title:"What is a DNS leak",sidebar_position:9},s=void 0,t={unversionedId:"general/dns-leaks",id:"general/dns-leaks",title:"What is a DNS leak",description:"Una vez que instales una VPN, debes estar seguro de que no habr\xe1 filtraciones que conduzcan a la perca de tu anonimato. AdGuard VPN protege de manera confiable tu tr\xe1fico y tus datos de miradas indiscretas. No obstante, en algunos casos puedes sospechar la presencia de fugas de DNS en nuestro servicio VPN. Explicaremos de d\xf3nde vienen estas preocupaciones y por qu\xe9 son infundadas.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/dns-leaks.md",sourceDirName:"general",slug:"/general/dns-leaks",permalink:"/KnowledgeBaseVPN/es/general/dns-leaks",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/general/dns-leaks.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"What is a DNS leak",sidebar_position:9},sidebar:"sidebar",previous:{title:"How to set up AdGuard VPN on your router",permalink:"/KnowledgeBaseVPN/es/general/set-up-adguard-vpn-on-your-router"},next:{title:"How to use AdGuard VPN in countries with Internet restrictions",permalink:"/KnowledgeBaseVPN/es/general/vpn-issues"}},d={},u=[{value:"\xbfQu\xe9 es una fuga de DNS?",id:"qu\xe9-es-una-fuga-de-dns",level:2},{value:"C\xf3mo detectar fugas de DNS",id:"c\xf3mo-detectar-fugas-de-dns",level:2},{value:"Por qu\xe9 no hay fugas de DNS en AdGuard VPN",id:"por-qu\xe9-no-hay-fugas-de-dns-en-adguard-vpn",level:2},{value:"C\xf3mo configurar un servidor DNS personalizado en AdGuard VPN",id:"c\xf3mo-configurar-un-servidor-dns-personalizado-en-adguard-vpn",level:2}],l={toc:u},c="wrapper";function p(e){let{components:a,...n}=e;return(0,o.yg)(c,(0,r.A)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Una vez que instales una VPN, debes estar seguro de que no habr\xe1 filtraciones que conduzcan a la perca de tu anonimato. AdGuard VPN protege de manera confiable tu tr\xe1fico y tus datos de miradas indiscretas. No obstante, en algunos casos puedes sospechar la presencia de fugas de DNS en nuestro servicio VPN. Explicaremos de d\xf3nde vienen estas preocupaciones y por qu\xe9 son infundadas."),(0,o.yg)("h2",{id:"qu\xe9-es-una-fuga-de-dns"},"\xbfQu\xe9 es una fuga de DNS?"),(0,o.yg)("p",null,"Cuando usas una VPN, una conexi\xf3n a un servidor DNS puede viajar fuera del t\xfanel VPN encriptado y tu tr\xe1fico puede volverse visible para el ISP."),(0,o.yg)("p",null,"En otras palabras, cada vez que abres un sitio web, tu navegador env\xeda una solicitud al servidor DNS del ISP y, a cambio, recibe la direcci\xf3n IP del sitio web solicitado. As\xed, tu ISP ve toda tu actividad en l\xednea y puede rastrearte."),(0,o.yg)("h2",{id:"c\xf3mo-detectar-fugas-de-dns"},"C\xf3mo detectar fugas de DNS"),(0,o.yg)("p",null,"Hay todo tipo de servicios de verificaci\xf3n de anonimato para detectar fugas de DNS, como ",(0,o.yg)("inlineCode",{parentName:"p"},"whoer.net"),". The algorithms of these websites are not clear, but their intentions are \u2014 to scare users with imaginary leaks, potentially enabling them to sell their services."),(0,o.yg)("p",null,'Algunos sitios web de an\xe1lisis de seguridad consideran que la coincidencia de la direcci\xf3n IP del usuario y la direcci\xf3n IP del servidor DNS es un resultado "bueno", lo que indica que no hay fuga de datos. En realidad, tal coincidencia puede indicar el uso de una VPN. Cuando la VPN est\xe1 deshabilitada y las solicitudes van al servidor DNS de su ISP, la direcci\xf3n IP del servidor DNS y la tuya no coinciden.'),(0,o.yg)("h2",{id:"por-qu\xe9-no-hay-fugas-de-dns-en-adguard-vpn"},"Por qu\xe9 no hay fugas de DNS en AdGuard VPN"),(0,o.yg)("p",null,"Si habilitas AdGuard VPN en tu dispositivo y ejecutas una verificaci\xf3n en cualquiera de los sitios web del esc\xe1ner, ver\xe1s que las consultas de DNS van a los ",(0,o.yg)("a",{parentName:"p",href:"https://adguard-dns.io"},"servidores AdGuard DNS"),". Sin embargo, esto no puede considerarse una fuga."),(0,o.yg)("p",null,"El uso de un servidor AdGuard DNS sin filtrado est\xe1 configurado de forma predeterminada en AdGuard VPN. Esto asegura que tus consultas no vayan a los servidores DNS de tu ISP, lo que significa que permaneces privado y an\xf3nimo en l\xednea."),(0,o.yg)("p",null,"Adem\xe1s, AdGuard DNS es un servicio de DNS muy popular, utilizado por m\xe1s de 50 millones de personas. \xbfQu\xe9 significa esto para ti? Imagina la siguiente situaci\xf3n: el servicio VPN habitual utiliza el servidor DNS que se encuentra en la misma direcci\xf3n IP que el servidor VPN. El n\xfamero de sus usuarios apenas supera los 1000."),(0,o.yg)("p",null,'Y en el caso de AdGuard DNS te "fusionar\xe1s" con 50 millones de usuarios por lo que nadie podr\xe1 rastrearte por el mero hecho de usar ese servidor DNS.'),(0,o.yg)("h2",{id:"c\xf3mo-configurar-un-servidor-dns-personalizado-en-adguard-vpn"},"C\xf3mo configurar un servidor DNS personalizado en AdGuard VPN"),(0,o.yg)("p",null,"Hay muchos servidores DNS p\xfablicos populares de ",(0,o.yg)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-providers"},"proveedores de DNS conocidos"),". Some of them can only perform their direct duties \u2014 giving the IP addresses of the requested domains, and some can do more."),(0,o.yg)("p",null,"Por ejemplo, AdGuard DNS elimina los anuncios y protege tu dispositivo para que no sea rastreado, y AdGuard DNS Family Protection combina las funciones de AdGuard DNS con la b\xfasqueda segura y el control parental."),(0,o.yg)("p",null,"Puedes seleccionar cualquier servidor DNS y configurarlo en AdGuard VPN:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"en AdGuard VPN para Windows: ",(0,o.yg)("em",{parentName:"li"},"Configuraci\xf3n")," \u2192 ",(0,o.yg)("em",{parentName:"li"},"Configuraci\xf3n de la aplicaci\xf3n")," \u2192 ",(0,o.yg)("em",{parentName:"li"},"Servidores DNS")),(0,o.yg)("li",{parentName:"ul"},"en AdGuard VPN para Mac: ",(0,o.yg)("em",{parentName:"li"},"Configuraci\xf3n")," \u2192 ",(0,o.yg)("em",{parentName:"li"},"Configuraci\xf3n de la aplicaci\xf3n")," \u2192 ",(0,o.yg)("em",{parentName:"li"},"Servidores DNS")),(0,o.yg)("li",{parentName:"ul"},"en AdGuard VPN para Android: ",(0,o.yg)("em",{parentName:"li"},"Configuraci\xf3n")," (\xedcono de engranaje) \u2192 ",(0,o.yg)("em",{parentName:"li"},"Configuraci\xf3n de la aplicaci\xf3n")," \u2192 ",(0,o.yg)("em",{parentName:"li"},"Servidor DNS")),(0,o.yg)("li",{parentName:"ul"},"en AdGuard VPN para iOS: ",(0,o.yg)("em",{parentName:"li"},"Configuraci\xf3n")," (\xedcono de engranaje) \u2192 ",(0,o.yg)("em",{parentName:"li"},"Configuraci\xf3n de la aplicaci\xf3n")," \u2192 ",(0,o.yg)("em",{parentName:"li"},"Servidor DNS")),(0,o.yg)("li",{parentName:"ul"},"en la extensi\xf3n de navegador AdGuard VPN: \xedcono del men\xfa \u2192 ",(0,o.yg)("em",{parentName:"li"},"Configuraci\xf3n")," \u2192 ",(0,o.yg)("em",{parentName:"li"},"Servidor DNS"))))}p.isMDXComponent=!0}}]);