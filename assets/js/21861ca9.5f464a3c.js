"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[9272],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),g=o,f=c["".concat(p,".").concat(g)]||c[g]||s[g]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7798:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(3117),o=n(102),a=(n(7294),n(4137)),i=["components"],l={title:"Settings",sidebar_position:4},p=void 0,u={unversionedId:"adguard-vpn-for-linux/settings",id:"adguard-vpn-for-linux/settings",title:"Settings",description:"You can manage AdGuard VPN for Linux settings from the command line. To view the current configuration, type:",source:"@site/docs/adguard-vpn-for-linux/settings.md",sourceDirName:"adguard-vpn-for-linux",slug:"/adguard-vpn-for-linux/settings",permalink:"/KnowledgeBaseVPN/adguard-vpn-for-linux/settings",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/adguard-vpn-for-linux/settings.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Settings",sidebar_position:4},sidebar:"sidebar",previous:{title:"Login, connection, and update",permalink:"/KnowledgeBaseVPN/adguard-vpn-for-linux/login"},next:{title:"Sending feedback",permalink:"/KnowledgeBaseVPN/adguard-vpn-for-linux/feedback"}},d={},s=[{value:"VPN mode: TUN or SOCKS5",id:"vpn-mode-tun-or-socks5",level:2},{value:"DNS upstream address",id:"dns-upstream-address",level:2},{value:"No-route mode",id:"no-route-mode",level:2},{value:"Crash reports",id:"crash-reports",level:2},{value:"Update channel",id:"update-channel",level:2},{value:"Hints",id:"hints",level:2},{value:"Debug logging",id:"debug-logging",level:2}],c={toc:s};function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can manage AdGuard VPN for Linux settings from the command line. To view the current configuration, type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"adguardvpn-cli config show\n")),(0,a.kt)("h2",{id:"vpn-mode-tun-or-socks5"},"VPN mode: TUN or SOCKS5"),(0,a.kt)("p",null,"You can choose how AdGuard VPN routes traffic."),(0,a.kt)("p",null,"To set the default tunnel mode, type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"adguardvpn-cli config set-mode TUN\n")),(0,a.kt)("p",null,"To set the SOCKS5 mode, type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"adguardvpn-cli config set-mode SOCKS\n")),(0,a.kt)("p",null,"To set the SOCKS5 port, type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"adguardvpn-cli config set-socks-port <port_number>\n")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<port_number>")," with the port you want to connect to."),(0,a.kt)("h2",{id:"dns-upstream-address"},"DNS upstream address"),(0,a.kt)("p",null,"To set a DNS upstream, type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"adguardvpn-cli config set-dns <server_address>\n")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<server_address>")," with the address of your DNS server. To use this DNS server at the system level, type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"adguardvpn-cli config set-system-dns on\n")),(0,a.kt)("h2",{id:"no-route-mode"},"No-route mode"),(0,a.kt)("p",null,"This feature routes only your specified addresses through the VPN tunnel. To enable the no-route mode, type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"adguardvpn-cli config set-no-routes on\n")),(0,a.kt)("h2",{id:"crash-reports"},"Crash reports"),(0,a.kt)("p",null,"If you enable automatic crash reports, AdGuard VPN will notify the developers if something goes wrong. To enable the setting, type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"adguardvpn-cli config send-reports on\n")),(0,a.kt)("p",null,"To disable it, set it to ",(0,a.kt)("inlineCode",{parentName:"p"},"off"),"."),(0,a.kt)("h2",{id:"update-channel"},"Update channel"),(0,a.kt)("p",null,"To change the update channel, type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"`adguardvpn-cli config set-update-channel <channel>`\n")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<channel>")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"stable"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"beta"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"nightly"),", depending on your preferences."),(0,a.kt)("h2",{id:"hints"},"Hints"),(0,a.kt)("p",null,"AdGuard VPN can show you hints after executing commands \u2014 for example, what to do next or how to fix an error. This setting is enabled by default but you can disable it by typing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"adguardvpn-cli config set-show-hints off\n")),(0,a.kt)("p",null,"To re-enable it, replace ",(0,a.kt)("inlineCode",{parentName:"p"},"off")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"on"),"."),(0,a.kt)("h2",{id:"debug-logging"},"Debug logging"),(0,a.kt)("p",null,"To report a bug, you may need to share debug logs with the developers or support team. To enable debug logging, type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"adguardvpn-cli config set-debug-logging on\n")),(0,a.kt)("p",null,"Disable this setting after exporting logs."))}g.isMDXComponent=!0}}]);