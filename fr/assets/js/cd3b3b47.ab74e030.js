"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[7736],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=a,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8614:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(4137)),i=["components"],s={title:"Comment le VPN fonctionne-t-il",sidebar_position:1},l=void 0,d={unversionedId:"general/how-vpn-works",id:"general/how-vpn-works",title:"Comment le VPN fonctionne-t-il",description:"Pour comprendre le fonctionnement d'AdGuard VPN, vous devez d'abord comprendre les principes g\xe9n\xe9raux du service VPN.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/general/how-vpn-works.md",sourceDirName:"general",slug:"/general/how-vpn-works",permalink:"/KnowledgeBaseVPN/fr/general/how-vpn-works",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/general/how-vpn-works.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Comment le VPN fonctionne-t-il",sidebar_position:1},sidebar:"sidebar",previous:{title:"Aper\xe7u du VPN AdGuard",permalink:"/KnowledgeBaseVPN/fr/"},next:{title:"Pourquoi AdGuard VPN est la meilleure option",permalink:"/KnowledgeBaseVPN/fr/general/why-adguard-vpn"}},p={},u=[{value:"Fonctionnalit\xe9s VPN",id:"fonctionnalit\xe9s-vpn",level:2},{value:"Structure du VPN",id:"structure-du-vpn",level:2},{value:"Types de protocoles VPN",id:"types-de-protocoles-vpn",level:2},{value:"Les inconv\xe9nients du VPN",id:"les-inconv\xe9nients-du-vpn",level:2},{value:"Lower speed",id:"lower-speed",level:3},{value:"Access blocking",id:"access-blocking",level:3},{value:"VPN connections breaking",id:"vpn-connections-breaking",level:3},{value:"AdGuard VPN",id:"adguard-vpn",level:2}],c={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pour comprendre le fonctionnement d'AdGuard VPN, vous devez d'abord comprendre les principes g\xe9n\xe9raux du service VPN."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/aOmkjgfSsIY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"fonctionnalit\xe9s-vpn"},"Fonctionnalit\xe9s VPN"),(0,o.kt)("p",null,"A VPN is a virtual private network that helps hide your location and protect your data on the Web. Un VPN connecte un ordinateur ou un appareil mobile \xe0 un serveur VPN et utilise l'adresse IP de ce serveur pour donner l'impression \xe0 un observateur ext\xe9rieur que vous vous trouvez dans un autre endroit. Cela vous permet d'acc\xe9der en toute s\xe9curit\xe9 \xe0 des ressources Internet et de prot\xe9ger vos donn\xe9es personnelles."),(0,o.kt)("p",null,"De cette fa\xe7on, un VPN remplit deux fonctions importantes :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Maintaining anonymity")),(0,o.kt)("p",{parentName:"li"},"Using an Internet connection, the user leaves their digital footprint, which can then be analyzed and used by third parties. For example, one of the online stores that you have visited can save your search history and then offer you their products based on it through targeted advertising. Or the secret services, having learned your location through the IP address of your device and having determined your identity, can secretly monitor your activity on the web. In addition, web browsers and ISPs themselves can use your browsing history for their own purposes, as well as sell it to advertisers and provide it to government institutions. VPN allows you to hide your IP address and replace it with the IP address of the VPN server to which you are connected. This way you will be able to maintain your privacy and anonymously search for information on the web.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Data protection")),(0,o.kt)("p",{parentName:"li"},"If you connect to an unreliable or public network, the data on your device may become vulnerable to cybercriminals. Bank card details, usernames and passwords, passport data \u2014 all this data can be intercepted by online fraudsters. The VPN tunnel encrypts the information you send to and receive from the Web, making it useless in the wrong hands."))),(0,o.kt)("h2",{id:"structure-du-vpn"},"Structure du VPN"),(0,o.kt)("p",null,"When you connect to a network, your computer or mobile device is assigned a unique ID number, or IP address. It usually consists of numbers from 0 to 255, separated by dots or colons. Knowing this sequence, one can determine the geolocation of the device. The IP address is usually assigned by your ISP, and it will be visible all the way to the desired resource. For this reason, the web server of the site you are visiting can register your IP address and record what you have requested. This record can then be used primarily for data collection and traffic analysis."),(0,o.kt)("p",null,"A VPN creates a tunnel between your device and the VPN server. Your data goes through this tunnel, gets encrypted and then enters the open Internet in a secure form. The web server therefore registers the IP address of the endpoint of the tunnel, meaning the VPN server, and thus not the device's real IP address. Thus, the site that you get to after passing through the VPN tunnel will consider the geolocation of the VPN server you selected as your real location. And the encrypted data will not fall into the hands of advertisers, hackers and security services."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg",alt:"VPN structure"})),(0,o.kt)("h2",{id:"types-de-protocoles-vpn"},"Types de protocoles VPN"),(0,o.kt)("p",null,"VPN security protocols are tools that encrypt data in a VPN tunnel and allow you to maintain user privacy in the open Internet. At the moment, the vast majority of modern VPN services use one of the following three VPN protocols:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IPsec"},(0,o.kt)("em",{parentName:"a"},"IPSec")),". One of its main advantages is that it is available on most devices and operating systems and provides a high level of security. However, the use of double ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Encapsulation_(networking)"},"encapsulation")," in this protocol may result in a lower connection speed.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/OpenVPN"},(0,o.kt)("em",{parentName:"a"},"OpenVPN")),". This modern protocol is open source, so third-party manufacturers can improve and update the technology.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/WireGuard"},(0,o.kt)("em",{parentName:"a"},"WireGuard")),". Its main advantages are ease of use, high efficiency and low vulnerability to attacks."))),(0,o.kt)("p",null,"In addition to these VPN protocols, there are others (for example, TLS, SSTP, IKEv2), but they are unpopular or do not meet modern data encryption standards."),(0,o.kt)("p",null,"AdGuard VPN also has its own ",(0,o.kt)("a",{parentName:"p",href:"/general/adguard-vpn-protocol"},(0,o.kt)("em",{parentName:"a"},"protocol")),". One of its advantages is that the traffic transmitted using the AdGuard VPN protocol is difficult to distinguish from the regular traffic. The VPN tunnel looks like normal HTTPS traffic, so it is extremely difficult to detect and block it. In addition, it is based on the mechanisms of the modern HTTP/2 protocol, which ensures high connection speed."),(0,o.kt)("h2",{id:"les-inconv\xe9nients-du-vpn"},"Les inconv\xe9nients du VPN"),(0,o.kt)("p",null,"Despite the obvious advantages, VPN is not perfect and has some disadvantages:"),(0,o.kt)("h3",{id:"lower-speed"},"Lower speed"),(0,o.kt)("p",null,"Since your traffic does not go directly to the web server, but first passes through the VPN server, the speed of the VPN connection decreases. Other factors also affect the speed when using a VPN: the load of the VPN server, its bandwidth, the compatibility of the VPN protocol with your operating system. All these factors, as well as the speed of the network itself, may impact the overall user experience of a VPN connection."),(0,o.kt)("h3",{id:"access-blocking"},"Access blocking"),(0,o.kt)("p",null,"Some online services make a lot of effort to detect VPN traffic and block access to VPN users. However, not many VPNs can mask themselves in such a way that they are only seen as regular traffic. Therefore, many attempts to go to a particular website without disabling VPN end up in nothing."),(0,o.kt)("h3",{id:"vpn-connections-breaking"},"VPN connections breaking"),(0,o.kt)("p",null,"A weak signal, network overload, VPN incompatibility with a firewall, antivirus and other programs, an outdated VPN protocol \u2014 all this can cause a sudden failure in the VPN connection, especially with unreliable VPN providers."),(0,o.kt)("h2",{id:"adguard-vpn"},"AdGuard VPN"),(0,o.kt)("p",null,"Our VPN service has several important ",(0,o.kt)("a",{parentName:"p",href:"/general/why-adguard-vpn"},"advantages"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/general/adguard-vpn-protocol"},(0,o.kt)("em",{parentName:"a"},"Proprietary VPN protocol")),", which works stably even with a slow Internet connection and disguises itself as normal traffic, making it more difficult to track and block it")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://adguard-vpn.com/privacy.html"},(0,o.kt)("em",{parentName:"a"},"No-logging policy")),", which means that AdGuard VPN does not collect your personal data and does not transfer it to third parties")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Plus de 50 serveurs VPN dans des dizaines de pays"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Facilit\xe9 d'utilisation et nombreuses options de personnalisation")))),(0,o.kt)("p",null,"Currently, AdGuard VPN is available as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/adguard-vpn-browser-extension/overview"},"Browser extension")," for Chrome, Edge, Firefox, and Opera")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Mobile app for ",(0,o.kt)("a",{parentName:"p",href:"/adguard-vpn-for-android/overview"},"Android")," and ",(0,o.kt)("a",{parentName:"p",href:"/adguard-vpn-for-ios/overview"},"iOS"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Desktop application for ",(0,o.kt)("a",{parentName:"p",href:"/adguard-vpn-for-windows/overview"},"Windows")," and ",(0,o.kt)("a",{parentName:"p",href:"/adguard-vpn-for-mac/overview"},"Mac")))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://adguard-vpn.com/welcome.html"},"Learn more about AdGuard VPN features")))}h.isMDXComponent=!0}}]);