"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[1833],{5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>h});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),g=n,h=c["".concat(l,".").concat(g)]||c[g]||u[g]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4342:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=a(8168),n=(a(6540),a(5680));const o={title:"How VPN works",sidebar_position:1},i=void 0,s={unversionedId:"general/how-vpn-works",id:"general/how-vpn-works",title:"How VPN works",description:"To understand how AdGuard VPN works, you should at first understand the general principles of the VPN service.",source:"@site/docs/general/how-vpn-works.md",sourceDirName:"general",slug:"/general/how-vpn-works",permalink:"/KnowledgeBaseVPN/general/how-vpn-works",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/general/how-vpn-works.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How VPN works",sidebar_position:1},sidebar:"sidebar",previous:{title:"AdGuard VPN Overview",permalink:"/KnowledgeBaseVPN/"},next:{title:"Why AdGuard VPN is the better option",permalink:"/KnowledgeBaseVPN/general/why-adguard-vpn"}},l={},d=[{value:"VPN features",id:"vpn-features",level:2},{value:"VPN structure",id:"vpn-structure",level:2},{value:"Types of VPN protocols",id:"types-of-vpn-protocols",level:2},{value:"VPN drawbacks",id:"vpn-drawbacks",level:2},{value:"Lower speed",id:"lower-speed",level:3},{value:"Access blocking",id:"access-blocking",level:3},{value:"VPN connections breaking",id:"vpn-connections-breaking",level:3},{value:"AdGuard VPN",id:"adguard-vpn",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"To understand how AdGuard VPN works, you should at first understand the general principles of the VPN service."),(0,n.yg)("iframe",{width:"560",height:"315",class:"youtube-video",src:"https://www.youtube-nocookie.com/embed/aOmkjgfSsIY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.yg)("h2",{id:"vpn-features"},"VPN features"),(0,n.yg)("p",null,"A VPN is a virtual private network that helps hide your location and protect your data on the Web. A VPN connects a computer or a mobile device to a VPN server and uses the IP address of this server to make it seem to an outside observer that you are in another place. This allows you to securely access various Internet resources and protect your personal data."),(0,n.yg)("p",null,"In that way, a VPN performs two important functions:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Maintaining anonymity")),(0,n.yg)("p",{parentName:"li"},"Using an Internet connection, the user leaves their digital footprint, which can then be analyzed and used by third parties. For example, one of the online stores that you have visited can save your search history and then offer you their products based on it through targeted advertising. Or the secret services, having learned your location through the IP address of your device and having determined your identity, can secretly monitor your activity on the web. In addition, web browsers and ISPs themselves can use your browsing history for their own purposes, as well as sell it to advertisers and provide it to government institutions. VPN allows you to hide your IP address and replace it with the IP address of the VPN server to which you are connected. This way you will be able to maintain your privacy and anonymously search for information on the web.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Data protection")),(0,n.yg)("p",{parentName:"li"},"If you connect to an unreliable or public network, the data on your device may become vulnerable to cybercriminals. Bank card details, usernames and passwords, passport data \u2014 all this data can be intercepted by online fraudsters. The VPN tunnel encrypts the information you send to and receive from the Web, making it useless in the wrong hands."))),(0,n.yg)("h2",{id:"vpn-structure"},"VPN structure"),(0,n.yg)("p",null,"When you connect to a network, your computer or mobile device is assigned a unique ID number, or IP address. It usually consists of numbers from 0 to 255, separated by dots or colons. Knowing this sequence, one can determine the geolocation of the device. The IP address is usually assigned by your ISP, and it will be visible all the way to the desired resource. For this reason, the web server of the site you are visiting can register your IP address and record what you have requested. This record can then be used primarily for data collection and traffic analysis."),(0,n.yg)("p",null,"A VPN creates a tunnel between your device and the VPN server. Your data goes through this tunnel, gets encrypted and then enters the open Internet in a secure form. The web server therefore registers the IP address of the endpoint of the tunnel, meaning the VPN server, and thus not the device's real IP address. Thus, the site that you get to after passing through the VPN tunnel will consider the geolocation of the VPN server you selected as your real location. And the encrypted data will not fall into the hands of advertisers, hackers and security services."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg",alt:"VPN structure"})),(0,n.yg)("h2",{id:"types-of-vpn-protocols"},"Types of VPN protocols"),(0,n.yg)("p",null,"VPN security protocols are tools that encrypt data in a VPN tunnel and allow you to maintain user privacy in the open Internet. At the moment, the vast majority of modern VPN services use one of the following three VPN protocols:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IPsec"},(0,n.yg)("em",{parentName:"a"},"IPSec")),". One of its main advantages is that it is available on most devices and operating systems and provides a high level of security. However, the use of double ",(0,n.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Encapsulation_(networking)"},"encapsulation")," in this protocol may result in a lower connection speed.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/OpenVPN"},(0,n.yg)("em",{parentName:"a"},"OpenVPN")),". This modern protocol is open source, so third-party manufacturers can improve and update the technology.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/WireGuard"},(0,n.yg)("em",{parentName:"a"},"WireGuard")),". Its main advantages are ease of use, high efficiency and low vulnerability to attacks."))),(0,n.yg)("p",null,"In addition to these VPN protocols, there are others (for example, TLS, SSTP, IKEv2), but they are unpopular or do not meet modern data encryption standards."),(0,n.yg)("object",{data:"https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/6.svg?nc=1",type:"image/svg+xml"},(0,n.yg)("img",{src:"https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/6.svg?nc=1",alt:"protocol 6"})," "),(0,n.yg)("p",null,"AdGuard VPN also has its own ",(0,n.yg)("a",{parentName:"p",href:"/general/adguard-vpn-protocol"},(0,n.yg)("em",{parentName:"a"},"protocol")),". One of its advantages is that the traffic transmitted using the AdGuard VPN protocol is difficult to distinguish from the regular traffic. The VPN tunnel looks like normal HTTPS traffic, so it is extremely difficult to detect and block it. In addition, it is based on the mechanisms of the modern HTTP/2 protocol, which ensures high connection speed."),(0,n.yg)("object",{data:"https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/5.svg?nc=1",type:"image/svg+xml"},(0,n.yg)("img",{src:"https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/5.svg?nc=1",alt:"protocol 5"})),(0,n.yg)("h2",{id:"vpn-drawbacks"},"VPN drawbacks"),(0,n.yg)("p",null,"Despite the obvious advantages, VPN is not perfect and has some disadvantages:"),(0,n.yg)("h3",{id:"lower-speed"},"Lower speed"),(0,n.yg)("p",null,"Since your traffic does not go directly to the web server, but first passes through the VPN server, the speed of the VPN connection decreases. Other factors also affect the speed when using a VPN: the load of the VPN server, its bandwidth, the compatibility of the VPN protocol with your operating system. All these factors, as well as the speed of the network itself, may impact the overall user experience of a VPN connection."),(0,n.yg)("h3",{id:"access-blocking"},"Access blocking"),(0,n.yg)("p",null,"Some online services make a lot of effort to detect VPN traffic and block access to VPN users. However, not many VPNs can mask themselves in such a way that they are only seen as regular traffic. Therefore, many attempts to reach a certain website via a VPN connection end in nothing."),(0,n.yg)("h3",{id:"vpn-connections-breaking"},"VPN connections breaking"),(0,n.yg)("p",null,"A weak signal, network overload, VPN incompatibility with a firewall, antivirus and other programs, an outdated VPN protocol \u2014 all this can cause a sudden failure in the VPN connection, especially with unreliable VPN providers."),(0,n.yg)("h2",{id:"adguard-vpn"},"AdGuard VPN"),(0,n.yg)("p",null,"Our VPN service has several important ",(0,n.yg)("a",{parentName:"p",href:"/general/why-adguard-vpn"},"advantages"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/general/adguard-vpn-protocol"},(0,n.yg)("em",{parentName:"a"},"Proprietary VPN protocol")),", which works stably even with a slow Internet connection and disguises itself as normal traffic, making it more difficult to track and block it")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://adguard-vpn.com/privacy.html"},(0,n.yg)("em",{parentName:"a"},"No-logging policy")),", which means that AdGuard VPN does not collect your personal data and does not transfer it to third parties")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("em",{parentName:"p"},"More than 50 VPN servers in dozens of countries"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("em",{parentName:"p"},"Ease of use and extensive customization options")))),(0,n.yg)("p",null,"Currently, AdGuard VPN is available as:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/adguard-vpn-browser-extension/overview"},"Browser extension")," for Chrome, Edge, Firefox, and Opera")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Mobile app for ",(0,n.yg)("a",{parentName:"p",href:"/adguard-vpn-for-android/overview"},"Android")," and ",(0,n.yg)("a",{parentName:"p",href:"/adguard-vpn-for-ios/overview"},"iOS"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Desktop application for ",(0,n.yg)("a",{parentName:"p",href:"/adguard-vpn-for-windows/overview"},"Windows")," and ",(0,n.yg)("a",{parentName:"p",href:"/adguard-vpn-for-mac/overview"},"Mac")))),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://adguard-vpn.com/welcome.html"},"Learn more about AdGuard VPN features")))}u.isMDXComponent=!0}}]);