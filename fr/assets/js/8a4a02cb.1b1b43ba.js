"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[4966],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4418:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(4137)),l=["components"],o={title:"Installation and removal",sidebar_position:2},u=void 0,s={unversionedId:"adguard-vpn-for-linux/installation",id:"adguard-vpn-for-linux/installation",title:"Installation and removal",description:"Install AdGuard VPN for Linux",source:"@site/docs/adguard-vpn-for-linux/installation.md",sourceDirName:"adguard-vpn-for-linux",slug:"/adguard-vpn-for-linux/installation",permalink:"/KnowledgeBaseVPN/fr/adguard-vpn-for-linux/installation",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/adguard-vpn-for-linux/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Installation and removal",sidebar_position:2},sidebar:"sidebar",previous:{title:"AdGuard VPN for Linux",permalink:"/KnowledgeBaseVPN/fr/adguard-vpn-for-linux/"},next:{title:"Login, connection, and update",permalink:"/KnowledgeBaseVPN/fr/adguard-vpn-for-linux/login"}},d={},p=[{value:"Install AdGuard VPN for Linux",id:"install-adguard-vpn-for-linux",level:2},{value:"Uninstall AdGuard VPN for Linux",id:"uninstall-adguard-vpn-for-linux",level:2}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"install-adguard-vpn-for-linux"},"Install AdGuard VPN for Linux"),(0,i.kt)("p",null,"To install AdGuard VPN, type:"),(0,i.kt)("p",null,"Release"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v\n")),(0,i.kt)("p",null,"Beta"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/beta/install.sh | sh -s -- -v\n")),(0,i.kt)("p",null,"Nightly"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/nightly/install.sh | sh -s -- -v\n")),(0,i.kt)("p",null,"If required, enter your admin password."),(0,i.kt)("p",null,"Agree to link the binary to ",(0,i.kt)("inlineCode",{parentName:"p"},"usr/local/bin")," by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," and wait until the installation is complete."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can verify the signature to prove it\u2019s an official version of AdGuard VPN by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"gpg")," tool. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardVPNCLI?tab=readme-ov-file#verify-releases"},"Read more on GitHub")))),(0,i.kt)("h2",{id:"uninstall-adguard-vpn-for-linux"},"Uninstall AdGuard VPN for Linux"),(0,i.kt)("p",null,"To uninstall AdGuard VPN, type:"),(0,i.kt)("p",null,"Release"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v -u\n")),(0,i.kt)("p",null,"Beta"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/beta/install.sh | sh -s -- -v -u\n")),(0,i.kt)("p",null,"Nightly"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/nightly/install.sh | sh -s -- -v -u\n")),(0,i.kt)("p",null,"If required, enter your admin password."))}m.isMDXComponent=!0}}]);