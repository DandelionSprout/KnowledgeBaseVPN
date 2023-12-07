"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[131],{4137:function(e,n,a){a.d(n,{Zo:function(){return o},kt:function(){return c}});var r=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function t(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function u(e,n){if(null==e)return{};var a,r,i=function(e,n){if(null==e)return{};var a,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=r.createContext({}),s=function(e){var n=r.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):t(t({},n),e)),a},o=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var a=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),k=s(a),c=i,p=k["".concat(d,".").concat(c)]||k[c]||m[c]||l;return a?r.createElement(p,t(t({ref:n},o),{},{components:a})):r.createElement(p,t({ref:n},o))}));function c(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=a.length,t=new Array(l);t[0]=k;var u={};for(var d in n)hasOwnProperty.call(n,d)&&(u[d]=n[d]);u.originalType=e,u.mdxType="string"==typeof e?e:i,t[1]=u;for(var s=2;s<l;s++)t[s]=a[s];return r.createElement.apply(null,t)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9314:function(e,n,a){a.r(n),a.d(n,{assets:function(){return o},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return m}});var r=a(3117),i=a(102),l=(a(7294),a(4137)),t=["components"],u={title:"DNS s\u0131z\u0131nt\u0131s\u0131 nedir",sidebar_position:9},d=void 0,s={unversionedId:"general/dns-leaks",id:"general/dns-leaks",title:"DNS s\u0131z\u0131nt\u0131s\u0131 nedir",description:"Bir VPN kurduktan sonra, anonimle\u015ftirilmenize yol a\xe7acak herhangi bir s\u0131z\u0131nt\u0131 olmayaca\u011f\u0131ndan emin olmak istersiniz. AdGuard VPN, trafi\u011finizi ve verilerinizi merakl\u0131 g\xf6zlerden g\xfcvenilir bir \u015fekilde korur. Bununla birlikte, baz\u0131 durumlarda VPN hizmetimizde DNS s\u0131z\u0131nt\u0131lar\u0131n\u0131n varl\u0131\u011f\u0131ndan \u015f\xfcphelenebilirsiniz. Bu endi\u015felerin nereden kaynakland\u0131\u011f\u0131n\u0131 ve neden as\u0131ls\u0131z oldu\u011funu a\xe7\u0131klayaca\u011f\u0131z.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/general/dns-leaks.md",sourceDirName:"general",slug:"/general/dns-leaks",permalink:"/KnowledgeBaseVPN/tr/general/dns-leaks",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/general/dns-leaks.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"DNS s\u0131z\u0131nt\u0131s\u0131 nedir",sidebar_position:9},sidebar:"sidebar",previous:{title:"How to set up AdGuard VPN on your router",permalink:"/KnowledgeBaseVPN/tr/general/set-up-adguard-vpn-on-your-router"},next:{title:"\u0130nternet k\u0131s\u0131tlamalar\u0131n\u0131n oldu\u011fu \xfclkelerde AdGuard VPN nas\u0131l kullan\u0131l\u0131r",permalink:"/KnowledgeBaseVPN/tr/general/vpn-issues"}},o={},m=[{value:"DNS s\u0131z\u0131nt\u0131lar\u0131 nedir?",id:"dns-s\u0131z\u0131nt\u0131lar\u0131-nedir",level:2},{value:"DNS s\u0131z\u0131nt\u0131lar\u0131 nas\u0131l tespit edilir",id:"dns-s\u0131z\u0131nt\u0131lar\u0131-nas\u0131l-tespit-edilir",level:2},{value:"AdGuard VPN&#39;de neden DNS s\u0131z\u0131nt\u0131s\u0131 yok",id:"adguard-vpnde-neden-dns-s\u0131z\u0131nt\u0131s\u0131-yok",level:2},{value:"AdGuard VPN&#39;de \xf6zel DNS sunucusu nas\u0131l ayarlan\u0131r",id:"adguard-vpnde-\xf6zel-dns-sunucusu-nas\u0131l-ayarlan\u0131r",level:2}],k={toc:m};function c(e){var n=e.components,a=(0,i.Z)(e,t);return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Bir VPN kurduktan sonra, anonimle\u015ftirilmenize yol a\xe7acak herhangi bir s\u0131z\u0131nt\u0131 olmayaca\u011f\u0131ndan emin olmak istersiniz. AdGuard VPN, trafi\u011finizi ve verilerinizi merakl\u0131 g\xf6zlerden g\xfcvenilir bir \u015fekilde korur. Bununla birlikte, baz\u0131 durumlarda VPN hizmetimizde DNS s\u0131z\u0131nt\u0131lar\u0131n\u0131n varl\u0131\u011f\u0131ndan \u015f\xfcphelenebilirsiniz. Bu endi\u015felerin nereden kaynakland\u0131\u011f\u0131n\u0131 ve neden as\u0131ls\u0131z oldu\u011funu a\xe7\u0131klayaca\u011f\u0131z."),(0,l.kt)("h2",{id:"dns-s\u0131z\u0131nt\u0131lar\u0131-nedir"},"DNS s\u0131z\u0131nt\u0131lar\u0131 nedir?"),(0,l.kt)("p",null,"Bir VPN kulland\u0131\u011f\u0131n\u0131zda, bir DNS sunucusuna ba\u011flant\u0131 \u015fifrelenmi\u015f VPN t\xfcnelinin d\u0131\u015f\u0131na \xe7\u0131kabilir ve trafi\u011finiz \u0130SS taraf\u0131ndan g\xf6r\xfclebilir h\xe2le gelebilir."),(0,l.kt)("p",null,"Ba\u015fka bir deyi\u015fle, bir siteyi her a\xe7t\u0131\u011f\u0131n\u0131zda, taray\u0131c\u0131n\u0131z \u0130SS'nin DNS sunucusuna bir istek g\xf6nderir ve kar\u015f\u0131l\u0131\u011f\u0131nda istenen sitenin IP adresini al\u0131r. Bu \u015fekilde, \u0130SS'niz t\xfcm \xe7evrimi\xe7i etkinli\u011finizi g\xf6r\xfcr ve sizi izleyebilir."),(0,l.kt)("h2",{id:"dns-s\u0131z\u0131nt\u0131lar\u0131-nas\u0131l-tespit-edilir"},"DNS s\u0131z\u0131nt\u0131lar\u0131 nas\u0131l tespit edilir"),(0,l.kt)("p",null,"DNS s\u0131z\u0131nt\u0131lar\u0131n\u0131 tespit etmek i\xe7in ",(0,l.kt)("inlineCode",{parentName:"p"},"whoer.net")," gibi her t\xfcrl\xfc anonimlik kontrol hizmeti vard\u0131r. Kullan\u0131c\u0131lar\u0131 hayali s\u0131z\u0131nt\u0131larla korkutma ve potansiyel olarak baz\u0131 hizmetleri satma niyetlerinin aksine, bu sitelerin kendilerinin m\xfckemmel olmad\u0131\u011f\u0131 ve algoritmalar\u0131n\u0131n net olmad\u0131\u011f\u0131 anla\u015f\u0131lmal\u0131d\u0131r."),(0,l.kt)("p",null,'Baz\u0131 g\xfcvenlik tarama web siteleri, kullan\u0131c\u0131n\u0131n IP adresi ile DNS sunucusunun IP adresinin \xe7ak\u0131\u015fmas\u0131n\u0131 "iyi" bir sonu\xe7 olarak kabul eder ve bu da herhangi bir s\u0131z\u0131nt\u0131 olmad\u0131\u011f\u0131n\u0131 g\xf6sterir. Ger\xe7ekte, b\xf6yle bir e\u015fle\u015fme bir VPN kullan\u0131m\u0131na i\u015faret edebilir. VPN devre d\u0131\u015f\u0131 b\u0131rak\u0131ld\u0131\u011f\u0131nda ve istekler \u0130SS\'nizin DNS sunucusuna gitti\u011finde, DNS sunucusunun IP adresi ile sizinkinin IP adresi \xe7ak\u0131\u015fmaz.'),(0,l.kt)("h2",{id:"adguard-vpnde-neden-dns-s\u0131z\u0131nt\u0131s\u0131-yok"},"AdGuard VPN'de neden DNS s\u0131z\u0131nt\u0131s\u0131 yok"),(0,l.kt)("p",null,"Cihaz\u0131n\u0131zda AdGuard VPN'i etkinle\u015ftirir ve taray\u0131c\u0131 sitelerinden herhangi birini kontrol ederseniz, DNS sorgular\u0131n\u0131n ",(0,l.kt)("a",{parentName:"p",href:"https://adguard-dns.io"},"AdGuard DNS")," sunucular\u0131na gitti\u011fini tespit eder. Ancak bu bir s\u0131z\u0131nt\u0131 olarak kabul edilemez."),(0,l.kt)("p",null,"Non-filtering bir AdGuard DNS sunucusu kullanmak, AdGuard VPN'de varsay\u0131lan olarak ayarlan\u0131r. Bu, sorgular\u0131n\u0131z\u0131n \u0130SS'nizin DNS sunucular\u0131na gitmemesini sa\u011flar, bu da \xe7evrimi\xe7i olarak gizli ve anonim kalman\u0131z anlam\u0131na gelir."),(0,l.kt)("p",null,"Dahas\u0131, AdGuard DNS, 50 milyondan fazla ki\u015fi taraf\u0131ndan kullan\u0131lan \xe7ok pop\xfcler bir DNS hizmetidir. Bu sizin i\xe7in ne anlama geliyor? \u015eu durumu hayal edin: normal VPN hizmeti, VPN sunucusuyla ayn\u0131 IP adresinde bulunan DNS sunucusunu kullan\u0131r. Kullan\u0131c\u0131 say\u0131s\u0131 neredeyse 1.000'i ge\xe7miyor."),(0,l.kt)("p",null,'Ve AdGuard DNS s\xf6z konusu oldu\u011funda, 50 milyon kullan\u0131c\u0131yla "birle\u015firsiniz", b\xf6ylece yaln\u0131zca o DNS sunucusunu kulland\u0131\u011f\u0131n\u0131z ger\xe7e\u011fiyle kimse sizi izleyemez.'),(0,l.kt)("h2",{id:"adguard-vpnde-\xf6zel-dns-sunucusu-nas\u0131l-ayarlan\u0131r"},"AdGuard VPN'de \xf6zel DNS sunucusu nas\u0131l ayarlan\u0131r"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-providers"},"\u0130yi bilinen DNS sa\u011flay\u0131c\u0131lar\u0131n\u0131n")," bir\xe7ok pop\xfcler genel DNS sunucusu vard\u0131r. Baz\u0131lar\u0131 yaln\u0131zca do\u011frudan g\xf6revlerini yerine getirebilir - istenen alan adlar\u0131n\u0131n IP adreslerini verir ve baz\u0131lar\u0131 daha fazlas\u0131n\u0131 yapabilir."),(0,l.kt)("p",null,"\xd6rne\u011fin, AdGuard DNS reklamlar\u0131 kald\u0131r\u0131r ve cihaz\u0131n\u0131z\u0131 izlenmeye kar\u015f\u0131 korur ve AdGuard DNS Family Protection, AdGuard DNS \xf6zelliklerini G\xfcvenli arama ve Ebeveyn denetimi ile birle\u015ftirir."),(0,l.kt)("p",null,"Herhangi bir DNS sunucusunu se\xe7ebilir ve AdGuard VPN'de yap\u0131land\u0131rabilirsiniz:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Windows i\xe7in AdGuard VPN'de: ",(0,l.kt)("em",{parentName:"li"},"Ayarlar")," \u2192 ",(0,l.kt)("em",{parentName:"li"},"Uygulama ayarlar\u0131")," \u2192 ",(0,l.kt)("em",{parentName:"li"},"DNS sunucular")),(0,l.kt)("li",{parentName:"ul"},"Mac i\xe7in AdGuard VPN'de: ",(0,l.kt)("em",{parentName:"li"},"Ayarlar")," \u2192 ",(0,l.kt)("em",{parentName:"li"},"Uygulama ayarlar\u0131")," \u2192 ",(0,l.kt)("em",{parentName:"li"},"DNS sunucular")),(0,l.kt)("li",{parentName:"ul"},"Android i\xe7in AdGuard VPN'de: ",(0,l.kt)("em",{parentName:"li"},"Ayarlar")," (Di\u015fli \xe7ark simgesi) \u2192 ",(0,l.kt)("em",{parentName:"li"},"Uygulama ayarlar\u0131")," \u2192 ",(0,l.kt)("em",{parentName:"li"},"DNS sunucular")),(0,l.kt)("li",{parentName:"ul"},"iOS i\xe7in AdGuard VPN'de: ",(0,l.kt)("em",{parentName:"li"},"Ayarlar")," (Di\u015fli \xe7ark simgesi) \u2192 ",(0,l.kt)("em",{parentName:"li"},"Uygulama ayarlar\u0131")," \u2192 ",(0,l.kt)("em",{parentName:"li"},"DNS sunucular")),(0,l.kt)("li",{parentName:"ul"},"AdGuard VPN Taray\u0131c\u0131 uzant\u0131s\u0131nda: hamburger men\xfc simgesi \u2192 ",(0,l.kt)("em",{parentName:"li"},"Ayarlar")," \u2192 ",(0,l.kt)("em",{parentName:"li"},"DNS sunucusu"))))}c.isMDXComponent=!0}}]);