"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[3041],{5680:(e,r,n)=>{n.d(r,{xA:()=>d,yg:()=>m});var t=n(6540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),s=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=s(e.components);return t.createElement(o.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=s(n),g=a,m=p["".concat(o,".").concat(g)]||p[g]||c[g]||l;return n?t.createElement(m,i(i({ref:r},d),{},{components:n})):t.createElement(m,i({ref:r},d))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var u={};for(var o in r)hasOwnProperty.call(r,o)&&(u[o]=r[o]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3771:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var t=n(8168),a=(n(6540),n(5680));const l={title:"Kurulum ve kald\u0131rma",sidebar_position:2},i=void 0,u={unversionedId:"adguard-vpn-for-linux/installation",id:"adguard-vpn-for-linux/installation",title:"Kurulum ve kald\u0131rma",description:"Install AdGuard VPN for Linux",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/adguard-vpn-for-linux/installation.md",sourceDirName:"adguard-vpn-for-linux",slug:"/adguard-vpn-for-linux/installation",permalink:"/KnowledgeBaseVPN/tr/adguard-vpn-for-linux/installation",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/adguard-vpn-for-linux/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Kurulum ve kald\u0131rma",sidebar_position:2},sidebar:"sidebar",previous:{title:"Linux i\xe7in AdGuard VPN",permalink:"/KnowledgeBaseVPN/tr/adguard-vpn-for-linux/"},next:{title:"Giri\u015f yapma, ba\u011flant\u0131 kurma ve g\xfcncelleme",permalink:"/KnowledgeBaseVPN/tr/adguard-vpn-for-linux/login"}},o={},s=[{value:"Install AdGuard VPN for Linux",id:"install-adguard-vpn-for-linux",level:2},{value:"Uninstall AdGuard VPN for Linux",id:"uninstall-adguard-vpn-for-linux",level:2}],d={toc:s},p="wrapper";function c(e){let{components:r,...n}=e;return(0,a.yg)(p,(0,t.A)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"install-adguard-vpn-for-linux"},"Install AdGuard VPN for Linux"),(0,a.yg)("p",null,"AdGuard VPN'i kurmak i\xe7in \u015funu yaz\u0131n:"),(0,a.yg)("p",null,"Release"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v\n")),(0,a.yg)("p",null,"Beta"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/beta/install.sh | sh -s -- -v\n")),(0,a.yg)("p",null,"Nightly"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/nightly/install.sh | sh -s -- -v\n")),(0,a.yg)("p",null,"Gerekirse, y\xf6netici parolan\u0131z\u0131 girin."),(0,a.yg)("p",null,"Agree to link the binary to ",(0,a.yg)("inlineCode",{parentName:"p"},"usr/local/bin")," by pressing ",(0,a.yg)("inlineCode",{parentName:"p"},"y")," and wait until the installation is complete."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"AdGuard VPN'in resmi bir s\xfcr\xfcm\xfc oldu\u011funu kan\u0131tlamak i\xe7in ",(0,a.yg)("inlineCode",{parentName:"p"},"gpg")," arac\u0131n\u0131 kullanarak imzay\u0131 do\u011frulayabilirsiniz. ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardVPNCLI?tab=readme-ov-file#verify-releases"},"GitHub'da daha fazlas\u0131n\u0131 okuyun"))),(0,a.yg)("h2",{id:"uninstall-adguard-vpn-for-linux"},"Uninstall AdGuard VPN for Linux"),(0,a.yg)("p",null,"AdGuard VPN'i kald\u0131rmak i\xe7in \u015funu yaz\u0131n:"),(0,a.yg)("p",null,"Release"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v -u\n")),(0,a.yg)("p",null,"Beta"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/beta/install.sh | sh -s -- -v -u\n")),(0,a.yg)("p",null,"Nightly"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/nightly/install.sh | sh -s -- -v -u\n")),(0,a.yg)("p",null,"Gerekirse, y\xf6netici parolan\u0131z\u0131 girin."))}c.isMDXComponent=!0}}]);