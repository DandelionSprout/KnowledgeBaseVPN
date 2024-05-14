"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[4852],{5680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>g});var a=o(6540);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(o),h=r,g=c["".concat(s,".").concat(h)]||c[h]||u[h]||n;return o?a.createElement(g,l(l({ref:t},p),{},{components:o})):a.createElement(g,l({ref:t},p))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,l=new Array(n);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<n;d++)l[d]=o[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},733:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var a=o(8168),r=(o(6540),o(5680));const n={title:"How the AdGuard VPN protocol works",sidebar_position:4},l=void 0,i={unversionedId:"general/adguard-vpn-protocol",id:"general/adguard-vpn-protocol",title:"How the AdGuard VPN protocol works",description:"Our protocol is used by all AdGuard VPN mobile and desktop applications. Download any of our products and use it knowing that your data is protected in the most secure way.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/general/adguard-vpn-protocol.md",sourceDirName:"general",slug:"/general/adguard-vpn-protocol",permalink:"/KnowledgeBaseVPN/fr/general/adguard-vpn-protocol",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/general/adguard-vpn-protocol.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How the AdGuard VPN protocol works",sidebar_position:4},sidebar:"sidebar",previous:{title:"Comment installer AdGuard VPN",permalink:"/KnowledgeBaseVPN/fr/general/how-to-install"},next:{title:"Les avantages de AdGuard VPN Illimit\xe9",permalink:"/KnowledgeBaseVPN/fr/general/free-vs-unlimited"}},s={},d=[{value:"Why we developed the AdGuard VPN protocol",id:"why-we-developed-the-adguard-vpn-protocol",level:2},{value:"Disadvantages of popular VPN protocols",id:"disadvantages-of-popular-vpn-protocols",level:2},{value:"What&#39;s great about the AdGuard VPN protocol",id:"whats-great-about-the-adguard-vpn-protocol",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...o}=e;return(0,r.yg)(c,(0,a.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Our protocol is used by ",(0,r.yg)("a",{parentName:"p",href:"https://adguard-vpn.com/welcome.html"},"all AdGuard VPN mobile and desktop applications"),". Download any of our products and use it knowing that your data is protected in the most secure way."),(0,r.yg)("h2",{id:"why-we-developed-the-adguard-vpn-protocol"},"Why we developed the AdGuard VPN protocol"),(0,r.yg)("p",null,"For years, we were concentrating on developing all flavors of ad blocking apps and browser extensions. And in 2019 we resolved to develop our own VPN service, seemingly out of nowhere. When, in reality, there were a few reasons that prompted us to do so."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"AdGuard mobile apps had compatibility issues with VPN apps. Normally, two VPN-based mobile apps can't work together: in rare cases on iOS, and never on Android. As AdGuard Ad Blocker apps use local VPN to filter network traffic, using them alongside any VPN app would be out of the question. That's why we saw the development of an in-house VPN as the only feasible solution that could guarantee compatibility: after we apply some magic, the two apps are able to work together as one VPN service."),(0,r.yg)("li",{parentName:"ul"},"Secondly, VPN seemed more than relevant to our philosophy and priorities. Our primary goal is to protect users' privacy, and this is exactly what VPNs are for."),(0,r.yg)("li",{parentName:"ul"},"Finally, over the years of developing AdGuard software, we have become experts in filtering network traffic. This allowed us to bring in something new instead of becoming another wishy-washy VPN.")),(0,r.yg)("p",null,"From the outset, we decided that AdGuard VPN would have one key difference from its competitors \u2014 we shall develop and deploy an in-house VPN protocol which would not force users to choose between security and speed."),(0,r.yg)("h2",{id:"disadvantages-of-popular-vpn-protocols"},"Disadvantages of popular VPN protocols"),(0,r.yg)("p",null,"We developed the AdGuard VPN protocol seeing the disadvantages of popular VPN protocols (OpenVPN, WireGuard, IPSec, etc.):"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"They can be easily detected and blocked on the network level."),(0,r.yg)("li",{parentName:"ul"},'If you try to "conceal" them, the performance will drop.')),(0,r.yg)("p",null,'To "conceal" the use of VPN, the data flow is often "wrapped" in a TCP connection, and sometimes it\'s additionally encrypted to make the traffic appear like normal website communication. Unfortunately, this approach has a disadvantage \u2014 due to the use of TCP, there is a need for additional confirmation of delivery.'),(0,r.yg)("p",null,"Using any popular VPN protocol, we are always facing a trade-off: fast but easy to detect vs. slow."),(0,r.yg)("h2",{id:"whats-great-about-the-adguard-vpn-protocol"},"What's great about the AdGuard VPN protocol"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"It's ",(0,r.yg)("em",{parentName:"li"},"nearly impossible to distinguish from normal HTTPS traffic"),", that is, the connection to the AdGuard VPN server looks exactly the same as the connection to a normal website."),(0,r.yg)("li",{parentName:"ul"},"For encryption we use ",(0,r.yg)("strong",{parentName:"li"},"HTTPS (TLS)"),", which copes with this task perfectly. It is the most popular encryption method in the world, and the libraries that implement it are constantly audited for security.")),(0,r.yg)("p",null,"Some existing VPN protocols also handle the encryption task, and they (and thus, the fact of using a VPN) are hard to detect. But this usually comes at the price of reduced speed. This doesn't happen in our case, thanks to several solutions."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"We use the ",(0,r.yg)("strong",{parentName:"li"},"HTTP/2 transport protocol"),", which makes it virtually impossible to detect the AdGuard VPN protocol while maintaining high speed."),(0,r.yg)("li",{parentName:"ul"},"Unlike others, the AdGuard VPN protocol ",(0,r.yg)("em",{parentName:"li"},"operates with data and not with packets"),'. This means that AdGuard VPN establishes a separate "tunnel" for each connection, each HTTP/2 stream corresponds to one connection. AdGuard VPN transfers data through this tunnel. This allows us to speed up the operation by saving on confirmation packets, because we can buffer the data of several packets into one before sending it to the VPN server (or from the server to the client). And the fewer packets, the fewer confirmations are needed.')))}u.isMDXComponent=!0}}]);