"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[1080],{5680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>g});var n=t(6540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=l(t),m=r,g=s["".concat(p,".").concat(m)]||s[m]||c[m]||o;return t?n.createElement(g,i(i({ref:a},d),{},{components:t})):n.createElement(g,i({ref:a},d))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var u={};for(var p in a)hasOwnProperty.call(a,p)&&(u[p]=a[p]);u.originalType=e,u[s]="string"==typeof e?e:r,i[1]=u;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7078:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=t(8168),r=(t(6540),t(5680));const o={title:"Jak nastavit AdGuard VPN na routeru",sidebar_position:8},i=void 0,u={unversionedId:"general/set-up-adguard-vpn-on-your-router",id:"general/set-up-adguard-vpn-on-your-router",title:"Jak nastavit AdGuard VPN na routeru",description:"Nastaven\xedm AdGuard VPN na routeru m\u016f\u017eete chr\xe1nit sv\xe1 data na za\u0159\xedzen\xedch, kam nelze instalovat aplikace VPN, jako jsou chytr\xe9 TV a hern\xed konzole.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/general/set-up-adguard-vpn-on-your-router.md",sourceDirName:"general",slug:"/general/set-up-adguard-vpn-on-your-router",permalink:"/KnowledgeBaseVPN/cs/general/set-up-adguard-vpn-on-your-router",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/general/set-up-adguard-vpn-on-your-router.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Jak nastavit AdGuard VPN na routeru",sidebar_position:8},sidebar:"sidebar",previous:{title:"Jak\xfd typ \u0161ifrov\xe1n\xed je pou\u017e\xedv\xe1n v AdGuard VPN",permalink:"/KnowledgeBaseVPN/cs/general/adguard-vpn-encryption"},next:{title:"Co je \xfanik DNS",permalink:"/KnowledgeBaseVPN/cs/general/dns-leaks"}},p={},l=[{value:"Jak nastavit AdGuard VPN na routeru",id:"jak-nastavit-adguard-vpn-na-routeru",level:2},{value:"Pro\u010d m\u016f\u017ee b\xfdt nastaven\xed AdGuard VPN na va\u0161em routeru u\u017eite\u010dn\xe9",id:"pro\u010d-m\u016f\u017ee-b\xfdt-nastaven\xed-adguard-vpn-na-va\u0161em-routeru-u\u017eite\u010dn\xe9",level:2}],d={toc:l},s="wrapper";function c(e){let{components:a,...t}=e;return(0,r.yg)(s,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Nastaven\xedm AdGuard VPN na routeru m\u016f\u017eete chr\xe1nit sv\xe1 data na za\u0159\xedzen\xedch, kam nelze instalovat aplikace VPN, jako jsou chytr\xe9 TV a hern\xed konzole."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Tato mo\u017enost je k dispozici pouze v p\u0159\xedpad\u011b, \u017ee m\xe1te p\u0159edplatn\xe9 AdGuard VPN a v\xe1\u0161 router podporuje IPsec.")),(0,r.yg)("h2",{id:"jak-nastavit-adguard-vpn-na-routeru"},"Jak nastavit AdGuard VPN na routeru"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Ve sv\xe9m ",(0,r.yg)("a",{parentName:"p",href:"https://auth.adguard.com/login.html"},"AdGuard \xfa\u010dtu")," vyberte AdGuard VPN.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"V \u010d\xe1sti ",(0,r.yg)("em",{parentName:"p"},"Za\u0159\xedzen\xed")," klikn\u011bte na ",(0,r.yg)("em",{parentName:"p"},"P\u0159idat router"),"."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg",alt:"Add router *mobile_border"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Vyberte po\u017eadovan\xe9 um\xedst\u011bn\xed serveru VPN a vygenerujte p\u0159ihla\u0161ovac\xed \xfadaje."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png",alt:"Generate credentials *mobile_border"})),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Dal\u0161\xed kroky se mohou li\u0161it v z\xe1vislosti na va\u0161em routeru. Jako p\u0159\xedklad jsme pou\u017eili router Keenetic."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Na str\xe1nce administr\xe1tora p\u0159ejd\u011bte do nastaven\xed routeru.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Povolte ",(0,r.yg)("em",{parentName:"p"},"klienta VPN")," a klikn\u011bte na ",(0,r.yg)("em",{parentName:"p"},"P\u0159idat server VPN"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Vyberte mo\u017enost IPsec-client (m\u016f\u017ee se naz\xfdvat IKE, nikoli L2TP/IPsec).")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Zadejte p\u0159ihla\u0161ovac\xed \xfadaje, kter\xe9 jste vytvo\u0159ili v kroku 3."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg",alt:"Enter the credentials *mobile_border"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"P\u0159ipojte za\u0159\xedzen\xed k routeru."))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Pokud chcete zm\u011bnit um\xedst\u011bn\xed serveru VPN, mus\xedte aktualizovat nastaven\xed routeru.")),(0,r.yg)("h2",{id:"pro\u010d-m\u016f\u017ee-b\xfdt-nastaven\xed-adguard-vpn-na-va\u0161em-routeru-u\u017eite\u010dn\xe9"},"Pro\u010d m\u016f\u017ee b\xfdt nastaven\xed AdGuard VPN na va\u0161em routeru u\u017eite\u010dn\xe9"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"S AdGuard VPN na va\u0161em routeru nem\xe1 poskytovatel VPN ani nikdo jin\xfd p\u0159\xedstup k va\u0161\xed internetov\xe9 aktivit\u011b"),(0,r.yg)("li",{parentName:"ul"},"Instalace AdGuard VPN na v\xe1\u0161 router zabezpe\u010d\xed celou va\u0161i s\xed\u0165, co\u017e znamen\xe1, \u017ee v\u0161echna za\u0159\xedzen\xed k n\xed p\u0159ipojen\xe1 jsou chr\xe1n\u011bn\xe1"),(0,r.yg)("li",{parentName:"ul"},"M\u016f\u017eete zv\xfd\u0161it zabezpe\u010den\xed a chr\xe1nit sv\xe1 data na za\u0159\xedzen\xedch, na kter\xe1 nen\xed mo\u017en\xe9 nainstalovat aplikace AdGuard VPN \u2014 chytr\xe9 TV (v sou\u010dasn\xe9 dob\u011b je AdGuard VPN k dispozici pouze pro Android TV) a hern\xed konzole")))}c.isMDXComponent=!0}}]);