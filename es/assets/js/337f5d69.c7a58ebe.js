"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[4850],{5680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>y});var t=r(6540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(r),g=a,y=p["".concat(u,".").concat(g)]||p[g]||c[g]||l;return r?t.createElement(y,i(i({ref:n},d),{},{components:r})):t.createElement(y,i({ref:n},d))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=g;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9821:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var t=r(8168),a=(r(6540),r(5680));const l={title:"Installation and removal",sidebar_position:2},i=void 0,o={unversionedId:"adguard-vpn-for-linux/installation",id:"adguard-vpn-for-linux/installation",title:"Installation and removal",description:"Install AdGuard VPN for Linux",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/adguard-vpn-for-linux/installation.md",sourceDirName:"adguard-vpn-for-linux",slug:"/adguard-vpn-for-linux/installation",permalink:"/KnowledgeBaseVPN/es/adguard-vpn-for-linux/installation",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/adguard-vpn-for-linux/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Installation and removal",sidebar_position:2},sidebar:"sidebar",previous:{title:"AdGuard VPN for Linux",permalink:"/KnowledgeBaseVPN/es/adguard-vpn-for-linux/"},next:{title:"Login, connection, and update",permalink:"/KnowledgeBaseVPN/es/adguard-vpn-for-linux/login"}},u={},s=[{value:"Install AdGuard VPN for Linux",id:"install-adguard-vpn-for-linux",level:2},{value:"Uninstall AdGuard VPN for Linux",id:"uninstall-adguard-vpn-for-linux",level:2}],d={toc:s},p="wrapper";function c(e){let{components:n,...r}=e;return(0,a.yg)(p,(0,t.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"install-adguard-vpn-for-linux"},"Install AdGuard VPN for Linux"),(0,a.yg)("p",null,"To install AdGuard VPN, type:"),(0,a.yg)("p",null,"Release"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v\n")),(0,a.yg)("p",null,"Beta"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/beta/install.sh | sh -s -- -v\n")),(0,a.yg)("p",null,"Nightly"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/nightly/install.sh | sh -s -- -v\n")),(0,a.yg)("p",null,"If required, enter your admin password."),(0,a.yg)("p",null,"Agree to link the binary to ",(0,a.yg)("inlineCode",{parentName:"p"},"usr/local/bin")," by pressing ",(0,a.yg)("inlineCode",{parentName:"p"},"y")," and wait until the installation is complete."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"You can verify the signature to prove it\u2019s an official version of AdGuard VPN by using the ",(0,a.yg)("inlineCode",{parentName:"p"},"gpg")," tool. ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardVPNCLI?tab=readme-ov-file#verify-releases"},"Read more on GitHub"))),(0,a.yg)("h2",{id:"uninstall-adguard-vpn-for-linux"},"Uninstall AdGuard VPN for Linux"),(0,a.yg)("p",null,"To uninstall AdGuard VPN, type:"),(0,a.yg)("p",null,"Release"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v -u\n")),(0,a.yg)("p",null,"Beta"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/beta/install.sh | sh -s -- -v -u\n")),(0,a.yg)("p",null,"Nightly"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/nightly/install.sh | sh -s -- -v -u\n")),(0,a.yg)("p",null,"If required, enter your admin password."))}c.isMDXComponent=!0}}]);