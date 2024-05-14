"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[9496],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(t),c=o,y=s["".concat(p,".").concat(c)]||s[c]||g[c]||a;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6563:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=t(8168),o=(t(6540),t(5680));const a={title:"Settings",sidebar_position:4},l=void 0,i={unversionedId:"adguard-vpn-for-linux/settings",id:"adguard-vpn-for-linux/settings",title:"Settings",description:"You can manage AdGuard VPN for Linux settings from the command line. To view the current configuration, type:",source:"@site/docs/adguard-vpn-for-linux/settings.md",sourceDirName:"adguard-vpn-for-linux",slug:"/adguard-vpn-for-linux/settings",permalink:"/KnowledgeBaseVPN/tr/adguard-vpn-for-linux/settings",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/adguard-vpn-for-linux/settings.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Settings",sidebar_position:4},sidebar:"sidebar",previous:{title:"Login, connection, and update",permalink:"/KnowledgeBaseVPN/tr/adguard-vpn-for-linux/login"},next:{title:"Sending feedback",permalink:"/KnowledgeBaseVPN/tr/adguard-vpn-for-linux/feedback"}},p={},d=[{value:"VPN mode: TUN or SOCKS5",id:"vpn-mode-tun-or-socks5",level:2},{value:"DNS upstream address",id:"dns-upstream-address",level:2},{value:"No-route mode",id:"no-route-mode",level:2},{value:"Crash reports",id:"crash-reports",level:2},{value:"Update channel",id:"update-channel",level:2},{value:"Hints",id:"hints",level:2},{value:"Debug logging",id:"debug-logging",level:2}],u={toc:d},s="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(s,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"You can manage AdGuard VPN for Linux settings from the command line. To view the current configuration, type:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"adguardvpn-cli config show\n")),(0,o.yg)("h2",{id:"vpn-mode-tun-or-socks5"},"VPN mode: TUN or SOCKS5"),(0,o.yg)("p",null,"You can choose how AdGuard VPN routes traffic."),(0,o.yg)("p",null,"To set the default tunnel mode, type:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"adguardvpn-cli config set-mode TUN\n")),(0,o.yg)("p",null,"To set the SOCKS5 mode, type:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"adguardvpn-cli config set-mode SOCKS\n")),(0,o.yg)("p",null,"To set the SOCKS5 port, type:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"adguardvpn-cli config set-socks-port <port_number>\n")),(0,o.yg)("p",null,"Replace ",(0,o.yg)("inlineCode",{parentName:"p"},"<port_number>")," with the port you want to connect to."),(0,o.yg)("h2",{id:"dns-upstream-address"},"DNS upstream address"),(0,o.yg)("p",null,"To set a DNS upstream, type:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"adguardvpn-cli config set-dns <server_address>\n")),(0,o.yg)("p",null,"Replace ",(0,o.yg)("inlineCode",{parentName:"p"},"<server_address>")," with the address of your DNS server. To use this DNS server at the system level, type:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"adguardvpn-cli config set-system-dns on\n")),(0,o.yg)("h2",{id:"no-route-mode"},"No-route mode"),(0,o.yg)("p",null,"This feature routes only your specified addresses through the VPN tunnel. To enable the no-route mode, type:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"adguardvpn-cli config set-no-routes on\n")),(0,o.yg)("h2",{id:"crash-reports"},"Crash reports"),(0,o.yg)("p",null,"If you enable automatic crash reports, AdGuard VPN will notify the developers if something goes wrong. To enable the setting, type:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"adguardvpn-cli config send-reports on\n")),(0,o.yg)("p",null,"To disable it, set it to ",(0,o.yg)("inlineCode",{parentName:"p"},"off"),"."),(0,o.yg)("h2",{id:"update-channel"},"Update channel"),(0,o.yg)("p",null,"To change the update channel, type:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"`adguardvpn-cli config set-update-channel <channel>`\n")),(0,o.yg)("p",null,"Replace ",(0,o.yg)("inlineCode",{parentName:"p"},"<channel>")," with ",(0,o.yg)("inlineCode",{parentName:"p"},"stable"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"beta"),", or ",(0,o.yg)("inlineCode",{parentName:"p"},"nightly"),", depending on your preferences."),(0,o.yg)("h2",{id:"hints"},"Hints"),(0,o.yg)("p",null,"AdGuard VPN can show you hints after executing commands \u2014 for example, what to do next or how to fix an error. This setting is enabled by default but you can disable it by typing:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"adguardvpn-cli config set-show-hints off\n")),(0,o.yg)("p",null,"To re-enable it, replace ",(0,o.yg)("inlineCode",{parentName:"p"},"off")," with ",(0,o.yg)("inlineCode",{parentName:"p"},"on"),"."),(0,o.yg)("h2",{id:"debug-logging"},"Debug logging"),(0,o.yg)("p",null,"To report a bug, you may need to share debug logs with the developers or support team. To enable debug logging, type:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"adguardvpn-cli config set-debug-logging on\n")),(0,o.yg)("p",null,"Disable this setting after exporting logs."))}g.isMDXComponent=!0}}]);