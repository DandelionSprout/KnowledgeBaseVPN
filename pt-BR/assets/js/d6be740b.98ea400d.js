"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[4589],{4137:function(e,o,a){a.d(o,{Zo:function(){return l},kt:function(){return c}});var r=a(7294);function n(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function t(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?t(Object(a),!0).forEach((function(o){n(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function i(e,o){if(null==e)return{};var a,r,n=function(e,o){if(null==e)return{};var a,r,n={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],o.indexOf(a)>=0||(n[a]=e[a]);return n}(e,o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),u=function(e){var o=r.useContext(d),a=o;return e&&(a="function"==typeof e?e(o):s(s({},o),e)),a},l=function(e){var o=u(e.components);return r.createElement(d.Provider,{value:o},e.children)},m={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},p=r.forwardRef((function(e,o){var a=e.components,n=e.mdxType,t=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(a),c=n,v=p["".concat(d,".").concat(c)]||p[c]||m[c]||t;return a?r.createElement(v,s(s({ref:o},l),{},{components:a})):r.createElement(v,s({ref:o},l))}));function c(e,o){var a=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var t=a.length,s=new Array(t);s[0]=p;var i={};for(var d in o)hasOwnProperty.call(o,d)&&(i[d]=o[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<t;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8264:function(e,o,a){a.r(o),a.d(o,{assets:function(){return l},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var r=a(3117),n=a(102),t=(a(7294),a(4137)),s=["components"],i={title:"O que \xe9 um vazamento de DNS?",sidebar_position:9},d=void 0,u={unversionedId:"general/dns-leaks",id:"general/dns-leaks",title:"O que \xe9 um vazamento de DNS?",description:"Depois de instalar uma VPN, \xe9 importante ter certeza de que n\xe3o haver\xe1 vazamentos que ameacem o seu anonimato. O AdGuard VPN protege de forma confi\xe1vel seu tr\xe1fego e seus dados de olhares curiosos. No entanto, em alguns casos, voc\xea pode suspeitar da presen\xe7a de vazamentos de DNS em nosso servi\xe7o VPN. Explicaremos de onde v\xeam essas preocupa\xe7\xf5es e por que s\xe3o infundadas.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/general/dns-leaks.md",sourceDirName:"general",slug:"/general/dns-leaks",permalink:"/KnowledgeBaseVPN/pt-BR/general/dns-leaks",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/general/dns-leaks.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"O que \xe9 um vazamento de DNS?",sidebar_position:9},sidebar:"sidebar",previous:{title:"Que tipo de criptografia \xe9 usada no AdGuard VPN",permalink:"/KnowledgeBaseVPN/pt-BR/general/adguard-vpn-encryption"},next:{title:"Resumo de recursos",permalink:"/KnowledgeBaseVPN/pt-BR/adguard-vpn-for-android/overview"}},l={},m=[{value:"O que s\xe3o vazamentos de DNS?",id:"o-que-s\xe3o-vazamentos-de-dns",level:2},{value:"Como detectar vazamentos de DNS",id:"como-detectar-vazamentos-de-dns",level:2},{value:"Por que n\xe3o h\xe1 vazamentos de DNS no AdGuard VPN",id:"por-que-n\xe3o-h\xe1-vazamentos-de-dns-no-adguard-vpn",level:2},{value:"Como configurar um servidor DNS personalizado no AdGuard VPN",id:"como-configurar-um-servidor-dns-personalizado-no-adguard-vpn",level:2}],p={toc:m};function c(e){var o=e.components,a=(0,n.Z)(e,s);return(0,t.kt)("wrapper",(0,r.Z)({},p,a,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Depois de instalar uma VPN, \xe9 importante ter certeza de que n\xe3o haver\xe1 vazamentos que ameacem o seu anonimato. O AdGuard VPN protege de forma confi\xe1vel seu tr\xe1fego e seus dados de olhares curiosos. No entanto, em alguns casos, voc\xea pode suspeitar da presen\xe7a de vazamentos de DNS em nosso servi\xe7o VPN. Explicaremos de onde v\xeam essas preocupa\xe7\xf5es e por que s\xe3o infundadas."),(0,t.kt)("h2",{id:"o-que-s\xe3o-vazamentos-de-dns"},"O que s\xe3o vazamentos de DNS?"),(0,t.kt)("p",null,"Quando voc\xea usa uma VPN, uma conex\xe3o com um servidor DNS pode viajar para fora do t\xfanel VPN criptografado e seu tr\xe1fego pode se tornar vis\xedvel para o seu ISP."),(0,t.kt)("p",null,"Em outras palavras, toda vez que voc\xea abre um site, seu navegador envia uma solicita\xe7\xe3o ao servidor DNS do ISP e, em troca, recebe o endere\xe7o IP do site solicitado. Dessa forma, seu ISP v\xea toda a sua atividade online e pode te rastrear."),(0,t.kt)("h2",{id:"como-detectar-vazamentos-de-dns"},"Como detectar vazamentos de DNS"),(0,t.kt)("p",null,"Existem todos os tipos de servi\xe7os de verifica\xe7\xe3o de anonimato para detectar vazamentos de DNS, como ",(0,t.kt)("inlineCode",{parentName:"p"},"whoer.net"),". Deve-se entender que esses sites em si n\xe3o s\xe3o perfeitos e seus algoritmos n\xe3o s\xe3o claros. Mas suas inten\xe7\xf5es de intimidar os usu\xe1rios com vazamentos imagin\xe1rios e potencialmente vender algum servi\xe7o s\xe3o, sim, bem claras."),(0,t.kt)("p",null,'Alguns sites de verifica\xe7\xe3o de seguran\xe7a consideram a coincid\xeancia do endere\xe7o IP do usu\xe1rio e do endere\xe7o IP do servidor DNS um resultado "bom", indicando que n\xe3o h\xe1 vazamentos. Na realidade, tal correspond\xeancia pode indicar o uso de uma VPN. Quando a VPN est\xe1 desativada e as solicita\xe7\xf5es v\xe3o para o servidor DNS do seu ISP, o endere\xe7o IP do servidor DNS e o seu n\xe3o coincidem.'),(0,t.kt)("h2",{id:"por-que-n\xe3o-h\xe1-vazamentos-de-dns-no-adguard-vpn"},"Por que n\xe3o h\xe1 vazamentos de DNS no AdGuard VPN"),(0,t.kt)("p",null,"Se voc\xea habilitar o AdGuard VPN no seu dispositivo e executar uma verifica\xe7\xe3o em qualquer site de escaneamento, voc\xea ver\xe1 que as consultas de DNS v\xe3o para os servidores ",(0,t.kt)("a",{parentName:"p",href:"https://adguard-dns.io"},"AdGuard DNS"),". No entanto, isso n\xe3o pode ser considerado um vazamento."),(0,t.kt)("p",null,"O uso de um servidor do AdGuard DNS sem filtragem \xe9 definido por padr\xe3o no AdGuard VPN. Isso garante que suas consultas n\xe3o ir\xe3o para os servidores DNS do seu ISP, o que significa que voc\xea permanece privado e an\xf4nimo online."),(0,t.kt)("p",null,"Al\xe9m do mais, o AdGuard DNS \xe9 um servi\xe7o de DNS muito popular, usado por mais de 50 milh\xf5es de pessoas. E como isso impacta na sua experi\xeancia? Imagine a seguinte situa\xe7\xe3o: o servi\xe7o VPN usual usa o servidor DNS que est\xe1 localizado no mesmo endere\xe7o IP do servidor VPN. O seu n\xfamero de usu\xe1rios dificilmente ultrapassa 1.000."),(0,t.kt)("p",null,'E, no caso do AdGuard DNS, voc\xea vai "se misturar" com 50 milh\xf5es de usu\xe1rios para que ningu\xe9m consiga rastre\xe1-lo pelo simples fato de usar esse servidor DNS.'),(0,t.kt)("h2",{id:"como-configurar-um-servidor-dns-personalizado-no-adguard-vpn"},"Como configurar um servidor DNS personalizado no AdGuard VPN"),(0,t.kt)("p",null,"Existem muitos servidores DNS p\xfablicos populares de ",(0,t.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-providers"},"provedores de DNS conhecidos"),". Alguns deles podem apenas desempenhar suas fun\xe7\xf5es diretas: fornecer os endere\xe7os IP dos dom\xednios solicitados, e alguns podem fazer mais."),(0,t.kt)("p",null,"Por exemplo, o AdGuard DNS remove an\xfancios e protege seu dispositivo contra rastreamento, e o AdGuard DNS Family Protection combina os recursos do AdGuard DNS com pesquisa segura e controle parental."),(0,t.kt)("p",null,"Voc\xea pode selecionar qualquer servidor DNS e configur\xe1-lo no AdGuard VPN:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"no AdGuard VPN para Windows: ",(0,t.kt)("em",{parentName:"li"},"Configura\xe7\xf5es")," \u2192 ",(0,t.kt)("em",{parentName:"li"},"Configura\xe7\xf5es do aplicativo")," \u2192 ",(0,t.kt)("em",{parentName:"li"},"servidores DNS")),(0,t.kt)("li",{parentName:"ul"},"no AdGuard VPN para Mac: ",(0,t.kt)("em",{parentName:"li"},"Configura\xe7\xf5es")," \u2192 ",(0,t.kt)("em",{parentName:"li"},"Configura\xe7\xf5es do aplicativo")," \u2192 ",(0,t.kt)("em",{parentName:"li"},"servidores DNS")),(0,t.kt)("li",{parentName:"ul"},"no AdGuard VPN para Android: ",(0,t.kt)("em",{parentName:"li"},"Configura\xe7\xf5es")," (\xedcone de engrenagem) \u2192 ",(0,t.kt)("em",{parentName:"li"},"Configura\xe7\xf5es do aplicativo")," \u2192 ",(0,t.kt)("em",{parentName:"li"},"Servidor DNS")),(0,t.kt)("li",{parentName:"ul"},"no AdGuard VPN para iOS: ",(0,t.kt)("em",{parentName:"li"},"Configura\xe7\xf5es")," (\xedcone de engrenagem) \u2192 ",(0,t.kt)("em",{parentName:"li"},"Configura\xe7\xf5es do aplicativo")," \u2192 ",(0,t.kt)("em",{parentName:"li"},"Servidor DNS")),(0,t.kt)("li",{parentName:"ul"},"na extens\xe3o de navegador AdGuard VPN: \xedcone de menu (tr\xeas linhas horizontais) \u2192 ",(0,t.kt)("em",{parentName:"li"},"Configura\xe7\xf5es")," \u2192 ",(0,t.kt)("em",{parentName:"li"},"Servidor DNS"))))}c.isMDXComponent=!0}}]);