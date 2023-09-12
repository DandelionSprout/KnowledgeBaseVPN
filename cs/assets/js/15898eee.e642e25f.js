"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[4228],{4137:function(e,n,a){a.d(n,{Zo:function(){return u},kt:function(){return k}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),d=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},v={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(a),k=r,c=p["".concat(l,".").concat(k)]||p[k]||v[k]||o;return a?t.createElement(c,i(i({ref:n},u),{},{components:a})):t.createElement(c,i({ref:n},u))}));function k(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6397:function(e,n,a){a.r(n),a.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return v}});var t=a(3117),r=a(102),o=(a(7294),a(4137)),i=["components"],s={title:"Co je \xfanik DNS",sidebar_position:9},l=void 0,d={unversionedId:"general/dns-leaks",id:"general/dns-leaks",title:"Co je \xfanik DNS",description:"Po instalaci VPN si chcete b\xfdt jisti, \u017ee nedojde k \xfaniku informac\xed, kter\xfd by vedl k va\u0161\xed deanonymizaci. AdGuard VPN spolehliv\u011b chr\xe1n\xed v\xe1\u0161 provoz a va\u0161e data p\u0159ed zv\u011bdav\xfdma o\u010dima. P\u0159esto m\u016f\u017eete m\xedt v n\u011bkter\xfdch p\u0159\xedpadech podez\u0159en\xed, \u017ee v na\u0161\xed slu\u017eb\u011b VPN doch\xe1z\xed k \xfanik\u016fm DNS. Vysv\u011btl\xedme v\xe1m, z \u010deho tyto obavy pramen\xed a pro\u010d jsou neopodstatn\u011bn\xe9.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/general/dns-leaks.md",sourceDirName:"general",slug:"/general/dns-leaks",permalink:"/KnowledgeBaseVPN/cs/general/dns-leaks",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/general/dns-leaks.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Co je \xfanik DNS",sidebar_position:9},sidebar:"sidebar",previous:{title:"Jak\xfd typ \u0161ifrov\xe1n\xed je pou\u017e\xedv\xe1n v AdGuard VPN",permalink:"/KnowledgeBaseVPN/cs/general/adguard-vpn-encryption"},next:{title:"P\u0159ehled funkc\xed",permalink:"/KnowledgeBaseVPN/cs/adguard-vpn-for-android/overview"}},u={},v=[{value:"Co jsou \xfaniky DNS?",id:"co-jsou-\xfaniky-dns",level:2},{value:"Jak zjistit \xfaniky DNS",id:"jak-zjistit-\xfaniky-dns",level:2},{value:"Pro\u010d v AdGuard VPN nedoch\xe1z\xed k \xfanik\u016fm DNS",id:"pro\u010d-v-adguard-vpn-nedoch\xe1z\xed-k-\xfanik\u016fm-dns",level:2},{value:"Jak nastavit vlastn\xed DNS server v AdGuard VPN",id:"jak-nastavit-vlastn\xed-dns-server-v-adguard-vpn",level:2}],p={toc:v};function k(e){var n=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Po instalaci VPN si chcete b\xfdt jisti, \u017ee nedojde k \xfaniku informac\xed, kter\xfd by vedl k va\u0161\xed deanonymizaci. AdGuard VPN spolehliv\u011b chr\xe1n\xed v\xe1\u0161 provoz a va\u0161e data p\u0159ed zv\u011bdav\xfdma o\u010dima. P\u0159esto m\u016f\u017eete m\xedt v n\u011bkter\xfdch p\u0159\xedpadech podez\u0159en\xed, \u017ee v na\u0161\xed slu\u017eb\u011b VPN doch\xe1z\xed k \xfanik\u016fm DNS. Vysv\u011btl\xedme v\xe1m, z \u010deho tyto obavy pramen\xed a pro\u010d jsou neopodstatn\u011bn\xe9."),(0,o.kt)("h2",{id:"co-jsou-\xfaniky-dns"},"Co jsou \xfaniky DNS?"),(0,o.kt)("p",null,"P\u0159i pou\u017e\xedv\xe1n\xed VPN m\u016f\u017ee p\u0159ipojen\xed k DNS serveru prob\xedhat mimo \u0161ifrovan\xfd tunel VPN a v\xe1\u0161 provoz m\u016f\u017ee b\xfdt viditeln\xfd pro poskytovatele internetov\xfdch slu\u017eeb."),(0,o.kt)("p",null,"Jin\xfdmi slovy, p\u0159i ka\u017ed\xe9m otev\u0159en\xed webov\xe9 str\xe1nky ode\u0161le prohl\xed\u017ee\u010d po\u017eadavek na DNS server poskytovatele internetov\xfdch slu\u017eeb a na opl\xe1tku obdr\u017e\xed IP adresu po\u017eadovan\xe9 webov\xe9 str\xe1nky. Poskytovatel internetu tak vid\xed v\u0161echny va\u0161e online aktivity a m\u016f\u017ee v\xe1s sledovat."),(0,o.kt)("h2",{id:"jak-zjistit-\xfaniky-dns"},"Jak zjistit \xfaniky DNS"),(0,o.kt)("p",null,"Existuj\xed nejr\u016fzn\u011bj\u0161\xed slu\u017eby kontroly anonymity pro zji\u0161\u0165ov\xe1n\xed \xfanik\u016f DNS, nap\u0159\xedklad ",(0,o.kt)("inlineCode",{parentName:"p"},"whoer.net"),". Je t\u0159eba si uv\u011bdomit, \u017ee tyto webov\xe9 str\xe1nky samy o sob\u011b nejsou dokonal\xe9 a jejich algoritmy nejsou jasn\xe9, na rozd\xedl od jejich z\xe1m\u011br\u016f zastra\u0161it u\u017eivatele imagin\xe1rn\xedmi \xfaniky a p\u0159\xedpadn\u011b prodat n\u011bjakou slu\u017ebu."),(0,o.kt)("p",null,'N\u011bkter\xe9 webov\xe9 str\xe1nky prov\xe1d\u011bj\xedc\xed bezpe\u010dnostn\xed skenov\xe1n\xed pova\u017euj\xed shodu IP adresy u\u017eivatele a IP adresy serveru DNS za "dobr\xfd" v\xfdsledek, kter\xfd znamen\xe1, \u017ee nedoch\xe1z\xed k \xfanik\u016fm. Ve skute\u010dnosti m\u016f\u017ee takov\xe1 shoda znamenat pou\u017eit\xed s\xedt\u011b VPN. Pokud je VPN vypnuta a po\u017eadavky sm\u011b\u0159uj\xed na DNS server va\u0161eho poskytovatele internetov\xfdch slu\u017eeb, IP adresa DNS serveru a va\u0161e vlastn\xed adresa se neshoduj\xed.'),(0,o.kt)("h2",{id:"pro\u010d-v-adguard-vpn-nedoch\xe1z\xed-k-\xfanik\u016fm-dns"},"Pro\u010d v AdGuard VPN nedoch\xe1z\xed k \xfanik\u016fm DNS"),(0,o.kt)("p",null,"Pokud na sv\xe9m za\u0159\xedzen\xed zapnete AdGuard VPN a spust\xedte kontrolu na n\u011bkter\xe9 ze skenovac\xedch webov\xfdch str\xe1nek, zjist\xed, \u017ee dotazy DNS sm\u011b\u0159uj\xed na ",(0,o.kt)("a",{parentName:"p",href:"https://adguard-dns.io"},"Servery AdGuard DNS"),". To v\u0161ak nelze pova\u017eovat za \xfanik."),(0,o.kt)("p",null,"Pou\u017eit\xed serveru AdGuard DNS bez filtrov\xe1n\xed je v AdGuard VPN nastaveno jako v\xfdchoz\xed. T\xedm je zaji\u0161t\u011bno, \u017ee va\u0161e dotazy nebudou sm\u011b\u0159ovat na DNS servery va\u0161eho poskytovatele internetov\xfdch slu\u017eeb, co\u017e znamen\xe1, \u017ee z\u016fstanete na internetu v soukrom\xed a anonymit\u011b."),(0,o.kt)("p",null,"AdGuard DNS je nav\xedc velmi obl\xedben\xe1 slu\u017eba DNS, kterou pou\u017e\xedv\xe1 v\xedce ne\u017e 50 milion\u016f u\u017eivatel\u016f. Co to pro v\xe1s znamen\xe1? P\u0159edstavte si n\xe1sleduj\xedc\xed situaci: b\u011b\u017en\xe1 slu\u017eba VPN pou\u017e\xedv\xe1 DNS server, kter\xfd se nach\xe1z\xed na stejn\xe9 IP adrese jako server VPN. Po\u010det jeho u\u017eivatel\u016f sotva p\u0159esahuje 1000."),(0,o.kt)("p",null,'A v p\u0159\xedpad\u011b AdGuard DNS se "spoj\xedte" s 50 miliony u\u017eivatel\u016f, tak\u017ee v\xe1s nikdo nebude moci sledovat jen na z\xe1klad\u011b toho, \u017ee pou\u017e\xedv\xe1te tento DNS server.'),(0,o.kt)("h2",{id:"jak-nastavit-vlastn\xed-dns-server-v-adguard-vpn"},"Jak nastavit vlastn\xed DNS server v AdGuard VPN"),(0,o.kt)("p",null,"Existuje mnoho obl\xedben\xfdch ve\u0159ejn\xfdch DNS server\u016f od ",(0,o.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-providers"},"dob\u0159e zn\xe1m\xfdch poskytovatel\u016f DNS"),". N\u011bkter\xe9 z nich mohou plnit pouze sv\xe9 p\u0159\xedm\xe9 \xfakoly \u2013 poskytovat IP adresy po\u017eadovan\xfdch dom\xe9n a n\u011bkter\xe9 mohou d\u011blat v\xedce."),(0,o.kt)("p",null,"Nap\u0159\xedklad AdGuard DNS odstra\u0148uje reklamy a chr\xe1n\xed za\u0159\xedzen\xed p\u0159ed sledov\xe1n\xedm, zat\xedmco Ochrana rodiny AdGuard DNS kombinuje funkce AdGuard DNS s bezpe\u010dn\xfdm vyhled\xe1v\xe1n\xedm a rodi\u010dovskou kontrolou."),(0,o.kt)("p",null,"M\u016f\u017eete si vybrat libovoln\xfd DNS server a nakonfigurovat jej v AdGuard VPN:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"v AdGuard VPN pro Windows: ",(0,o.kt)("em",{parentName:"li"},"Nastaven\xed")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"Nastaven\xed aplikace")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"DNS servery")),(0,o.kt)("li",{parentName:"ul"},"v AdGuard VPN pro macOS: ",(0,o.kt)("em",{parentName:"li"},"Nastaven\xed")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"Nastaven\xed aplikace")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"DNS servery")),(0,o.kt)("li",{parentName:"ul"},"v AdGuard VPN pro Android: ",(0,o.kt)("em",{parentName:"li"},"Nastaven\xed")," (ikona ozuben\xe9ho kola) \u2192 ",(0,o.kt)("em",{parentName:"li"},"Nastaven\xed aplikace")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"DNS server")),(0,o.kt)("li",{parentName:"ul"},"v AdGuard VPN pro iOS: ",(0,o.kt)("em",{parentName:"li"},"Nastaven\xed")," (ikona ozuben\xe9ho kola) \u2192 ",(0,o.kt)("em",{parentName:"li"},"Nastaven\xed aplikace")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"DNS server")),(0,o.kt)("li",{parentName:"ul"},"v Roz\u0161\xed\u0159en\xed prohl\xed\u017ee\u010de AdGuard VPN: ikona hamburger menu \u2192 ",(0,o.kt)("em",{parentName:"li"},"Nastaven\xed")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"DNS-server"))))}k.isMDXComponent=!0}}]);