"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[8601],{5680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>c});var i=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,i,t=function(e,n){if(null==e)return{};var r,i,t={},l=Object.keys(e);for(i=0;i<l.length;i++)r=l[i],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var d=i.createContext({}),m=function(e){var n=i.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=m(e.components);return i.createElement(d.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(r),p=t,c=u["".concat(d,".").concat(p)]||u[p]||g[p]||l;return r?i.createElement(c,a(a({ref:n},s),{},{components:r})):i.createElement(c,a({ref:n},s))}));function c(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,a=new Array(l);a[0]=p;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[u]="string"==typeof e?e:t,a[1]=o;for(var m=2;m<l;m++)a[m]=r[m];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},11:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var i=r(8168),t=(r(6540),r(5680));const l={title:"Wie man Protokolle sammelt und versendet",sidebar_position:1},a=void 0,o={unversionedId:"adguard-vpn-browser-extension/solving-problems/logs",id:"adguard-vpn-browser-extension/solving-problems/logs",title:"Wie man Protokolle sammelt und versendet",description:"Es gibt mehrere M\xf6glichkeiten zum Sammeln von AdGuard VPN-Browsererweiterungsprotokollen, aber egal, welche Sie w\xe4hlen \u2014 es werden dieselben Daten gesammelt. In der Erweiterung sind die Protokolle nicht in Standard- und Debug-Protokolle unterteilt. Und es werden verschiedene Optionen zum Sammeln von Protokollen f\xfcr die F\xe4lle bereitgestellt, in denen ein Problem Sie daran hindert, die eine oder andere App zu verwenden.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-vpn-browser-extension/solving-problems/logs.md",sourceDirName:"adguard-vpn-browser-extension/solving-problems",slug:"/adguard-vpn-browser-extension/solving-problems/logs",permalink:"/KnowledgeBaseVPN/de/adguard-vpn-browser-extension/solving-problems/logs",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/adguard-vpn-browser-extension/solving-problems/logs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Wie man Protokolle sammelt und versendet",sidebar_position:1},sidebar:"sidebar",previous:{title:"Installation und Entfernung",permalink:"/KnowledgeBaseVPN/de/adguard-vpn-browser-extension/installation"},next:{title:"AdGuard VPN for Linux",permalink:"/KnowledgeBaseVPN/de/adguard-vpn-for-linux/"}},d={},m=[{value:"Sammeln und Senden von Protokollen \xfcber den Abschnitt <em>Fehler melden</em>",id:"sammeln-und-senden-von-protokollen-\xfcber-den-abschnitt-fehler-melden",level:2},{value:"Sammeln und Senden von Protokollen \xfcber die Schaltfl\xe4che <em>Protokolle exportieren</em>",id:"sammeln-und-senden-von-protokollen-\xfcber-die-schaltfl\xe4che-protokolle-exportieren",level:2},{value:"Sammeln und Senden von Protokollen \xfcber die Tools des Browser-Entwicklers",id:"sammeln-und-senden-von-protokollen-\xfcber-die-tools-des-browser-entwicklers",level:2},{value:"Chrome",id:"chrome",level:3},{value:"Firefox",id:"firefox",level:3}],s={toc:m},u="wrapper";function g(e){let{components:n,...r}=e;return(0,t.yg)(u,(0,i.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Es gibt mehrere M\xf6glichkeiten zum Sammeln von AdGuard VPN-Browsererweiterungsprotokollen, aber egal, welche Sie w\xe4hlen \u2014 es werden dieselben Daten gesammelt. In der Erweiterung sind die Protokolle nicht in Standard- und Debug-Protokolle unterteilt. Und es werden verschiedene Optionen zum Sammeln von Protokollen f\xfcr die F\xe4lle bereitgestellt, in denen ein Problem Sie daran hindert, die eine oder andere App zu verwenden."),(0,t.yg)("h2",{id:"sammeln-und-senden-von-protokollen-\xfcber-den-abschnitt-fehler-melden"},"Sammeln und Senden von Protokollen \xfcber den Abschnitt ",(0,t.yg)("em",{parentName:"h2"},"Fehler melden")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\xd6ffnen Sie die AdGuard VPN Browsererweiterung, wiederholen Sie nach M\xf6glichkeit die Aktionen, die zum Fehler gef\xfchrt haben. Notieren Sie den genauen Zeitpunkt, zu dem dieser Fehler aufgetreten ist."),(0,t.yg)("li",{parentName:"ol"},"\xd6ffnen Sie ",(0,t.yg)("em",{parentName:"li"},"Einstellungen"),", indem Sie auf das Hamburger-Men\xfcsymbol (\u2630) klicken \u2192 ",(0,t.yg)("em",{parentName:"li"},"Support")," \u2192 ",(0,t.yg)("em",{parentName:"li"},"Fehler melden"),"."),(0,t.yg)("li",{parentName:"ol"},"Hinterlassen Sie im ge\xf6ffneten Formular eine automatisch eingef\xfcgte E-Mail-Adresse oder geben Sie eine andere ein und beschreiben Sie den gefundenen Fehler, einschlie\xdflich des Zeitpunkts, zu dem dieser Fehler aufgetreten ist. Wenn Sie das Problem nicht reproduzieren k\xf6nnen, geben Sie so genau wie m\xf6glich an, wann es zuletzt aufgetreten ist."),(0,t.yg)("li",{parentName:"ol"},"Vergewissern Sie sich, dass ein H\xe4kchen neben ",(0,t.yg)("em",{parentName:"li"},"Diagnosebericht in die Nachricht aufnehmen")," gesetzt ist, und tippen Sie auf ",(0,t.yg)("em",{parentName:"li"},"Senden"),". Auf diese Weise senden Sie die Protokolle zusammen mit dem Fehlerbericht.")),(0,t.yg)("h2",{id:"sammeln-und-senden-von-protokollen-\xfcber-die-schaltfl\xe4che-protokolle-exportieren"},"Sammeln und Senden von Protokollen \xfcber die Schaltfl\xe4che ",(0,t.yg)("em",{parentName:"h2"},"Protokolle exportieren")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\xd6ffnen Sie die AdGuard VPN Browsererweiterung und wiederholen Sie, wenn m\xf6glich, die Aktionen, die zum Fehler gef\xfchrt haben. Notieren Sie den genauen Zeitpunkt, zu dem dieser Fehler aufgetreten ist."),(0,t.yg)("li",{parentName:"ol"},"Klicken Sie mit der rechten Maustaste auf das Symbol der AdGuard VPN Browsererweiterung."),(0,t.yg)("li",{parentName:"ol"},"Klicken Sie im ge\xf6ffneten Men\xfc auf ",(0,t.yg)("em",{parentName:"li"},"Protokolle exportieren"),"."),(0,t.yg)("li",{parentName:"ol"},"Als Ergebnis wird die Protokolldatei im Format ",(0,t.yg)("inlineCode",{parentName:"li"},"txt")," auf Ihrem Ger\xe4t gespeichert.")),(0,t.yg)("p",null,"Jetzt, wo Sie die Protokolle gesammelt haben, m\xfcssen Sie sie unserem Entwicklungsteam \xfcbergeben. Um dies zu tun:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Melden Sie einen Fehler auf GitHub. Detaillierte Anweisungen zum Erstellen eines Problems auf GitHub finden Sie in diesem Artikel."),(0,t.yg)("li",{parentName:"ol"},"Senden Sie ein Archiv mit Protokollen und Reproduktionszeit an ",(0,t.yg)("inlineCode",{parentName:"li"},"devteam@adguard.com")," und f\xfcgen Sie einen Link zu Ihrem GitHub-Problem hinzu. Sie k\xf6nnen auch ein Archiv mit den Protokollen und der Reproduktionszeit zu Google Drive hinzuf\xfcgen und es mit ",(0,t.yg)("inlineCode",{parentName:"li"},"devteam@adguard.com")," teilen, indem Sie den Google Drive-Link an Ihr Problem auf GitHub anh\xe4ngen.")),(0,t.yg)("h2",{id:"sammeln-und-senden-von-protokollen-\xfcber-die-tools-des-browser-entwicklers"},"Sammeln und Senden von Protokollen \xfcber die Tools des Browser-Entwicklers"),(0,t.yg)("h3",{id:"chrome"},"Chrome"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\xd6ffnen Sie die AdGuard VPN Browsererweiterung und wiederholen Sie, wenn m\xf6glich, die Aktionen, die zum Fehler gef\xfchrt haben. Notieren Sie den genauen Zeitpunkt, zu dem dieser Fehler aufgetreten ist.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Gehen Sie zu ",(0,t.yg)("inlineCode",{parentName:"p"},"chrome://extensions"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Schalten Sie den Entwicklermodus ",(0,t.yg)("em",{parentName:"p"},"ein")),(0,t.yg)("p",{parentName:"li"},(0,t.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/dev_mode.png",alt:"The developer mode *border"}))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Klicken Sie auf ",(0,t.yg)("inlineCode",{parentName:"p"},"background.html")),(0,t.yg)("p",{parentName:"li"},(0,t.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/backgroung.png",alt:"Background *border"}))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\xd6ffnen Sie die Registerkarte ",(0,t.yg)("em",{parentName:"p"},"\u0421onsole")),(0,t.yg)("p",{parentName:"li"},(0,t.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png",alt:"The Console tab *border"}))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\xd6ffnen Sie das Kontextmen\xfc und klicken Sie auf ",(0,t.yg)("em",{parentName:"p"},"Speichern unter\u2026")),(0,t.yg)("p",{parentName:"li"},(0,t.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png",alt:"Save as *border"})))),(0,t.yg)("p",null,"Nachdem Sie die Protokolle gesammelt haben, m\xfcssen Sie sie unserem Entwicklungsteam \xfcbergeben. Um dies zu tun:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Melden Sie einen Fehler auf GitHub. Detaillierte Anweisungen zum Erstellen eines Issues auf GitHub finden Sie in diesem Artikel."),(0,t.yg)("li",{parentName:"ol"},"Senden Sie ein Archiv mit Protokollen und Wiedergabezeit an ",(0,t.yg)("inlineCode",{parentName:"li"},"devteam@adguard.com")," und h\xe4ngen Sie einen Link zu Ihrem GitHub-Problem an. Sie k\xf6nnen auch ein Archiv mit Protokollen und Wiedergabezeit zu Google Drive hinzuf\xfcgen und es mit ",(0,t.yg)("inlineCode",{parentName:"li"},"devteam@adguard.com")," teilen, indem Sie den Google Drive-Link an Ihr Problem auf GitHub anh\xe4ngen.")),(0,t.yg)("h3",{id:"firefox"},"Firefox"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\xd6ffnen Sie die AdGuard VPN Browsererweiterung und wiederholen Sie, wenn m\xf6glich, die Aktionen, die zum Fehler gef\xfchrt haben. Notieren Sie den genauen Zeitpunkt, zu dem dieser Fehler aufgetreten ist.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Gehen Sie zu ",(0,t.yg)("inlineCode",{parentName:"p"},"about:addons"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Klicken Sie auf ",(0,t.yg)("em",{parentName:"p"},"Debug Add-ons")),(0,t.yg)("p",{parentName:"li"},(0,t.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png",alt:"Debug Add-ons *border"}))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Klicken Sie auf ",(0,t.yg)("em",{parentName:"p"},"Inspect")),(0,t.yg)("p",{parentName:"li"},(0,t.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png",alt:"Inspect *border"}))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Gehen Sie auf die Registerkarte ",(0,t.yg)("em",{parentName:"p"},"Console")),(0,t.yg)("p",{parentName:"li"},(0,t.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png",alt:"Console *border"}))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Klicken Sie auf ",(0,t.yg)("em",{parentName:"p"},"Alle Nachrichten in Datei speichern")),(0,t.yg)("p",{parentName:"li"},(0,t.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png",alt:"Save *border"})))),(0,t.yg)("p",null,"Nachdem Sie die Protokolle gesammelt haben, m\xfcssen Sie sie unserem Entwicklungsteam \xfcbergeben. Um dies zu tun:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Melden Sie einen Fehler auf GitHub. Detaillierte Anweisungen zum Erstellen eines Issues auf GitHub finden Sie in diesem Artikel."),(0,t.yg)("li",{parentName:"ol"},"Senden Sie ein Archiv mit Protokollen und Wiedergabezeit an ",(0,t.yg)("inlineCode",{parentName:"li"},"devteam@adguard.com")," und h\xe4ngen Sie einen Link zu Ihrem GitHub-Problem an. Sie k\xf6nnen auch ein Archiv mit Protokollen und Wiedergabezeit zu Google Drive hinzuf\xfcgen und es mit ",(0,t.yg)("inlineCode",{parentName:"li"},"devteam@adguard.com")," teilen, indem Sie den Google Drive-Link an Ihr Problem auf GitHub anh\xe4ngen.")))}g.isMDXComponent=!0}}]);