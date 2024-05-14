"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[9062],{5680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>g});var n=t(6540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(t),c=r,g=d["".concat(p,".").concat(c)]||d[c]||m[c]||o;return t?n.createElement(g,i(i({ref:a},s),{},{components:t})):n.createElement(g,i({ref:a},s))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var u={};for(var p in a)hasOwnProperty.call(a,p)&&(u[p]=a[p]);u.originalType=e,u[d]="string"==typeof e?e:r,i[1]=u;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4005:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=t(8168),r=(t(6540),t(5680));const o={title:"Comment configurer l'automatisation AdGuard VPN pour les applications iPhone et iPad",sidebar_position:1,sidebar_label:"Comment configurer l'automatisation AdGuard VPN"},i=void 0,u={unversionedId:"adguard-vpn-for-ios/solving-problems/automation",id:"adguard-vpn-for-ios/solving-problems/automation",title:"Comment configurer l'automatisation AdGuard VPN pour les applications iPhone et iPad",description:"Il n'y a pas d'exclusions d'applications dans AdGuard VPN pour iOS. Pourtant, il existe un moyen d'automatiser AdGuard VPN pour les applications sur iPhone et iPad.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/adguard-vpn-for-ios/solving-problems/automation.md",sourceDirName:"adguard-vpn-for-ios/solving-problems",slug:"/adguard-vpn-for-ios/solving-problems/automation",permalink:"/KnowledgeBaseVPN/fr/adguard-vpn-for-ios/solving-problems/automation",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/adguard-vpn-for-ios/solving-problems/automation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Comment configurer l'automatisation AdGuard VPN pour les applications iPhone et iPad",sidebar_position:1,sidebar_label:"Comment configurer l'automatisation AdGuard VPN"},sidebar:"sidebar",previous:{title:"Installation et d\xe9sinstallation",permalink:"/KnowledgeBaseVPN/fr/adguard-vpn-for-ios/installation"},next:{title:"Comment collecter et envoyer des journaux",permalink:"/KnowledgeBaseVPN/fr/adguard-vpn-for-ios/solving-problems/logs"}},p={},l=[{value:"Configuration de l&#39;activation automatique de AdGuard VPN",id:"configuration-de-lactivation-automatique-de-adguard-vpn",level:2},{value:"Configuration de l&#39;arr\xeat automatique de AdGuard VPN",id:"configuration-de-larr\xeat-automatique-de-adguard-vpn",level:2}],s={toc:l},d="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Il n'y a pas d'exclusions d'applications dans AdGuard VPN pour iOS. Pourtant, il existe un moyen d'automatiser AdGuard VPN pour les applications sur iPhone et iPad."),(0,r.yg)("h2",{id:"configuration-de-lactivation-automatique-de-adguard-vpn"},"Configuration de l'activation automatique de AdGuard VPN"),(0,r.yg)("p",null,"Si vous avez besoin d'un VPN pour une ou plusieurs applications, configurez AdGuard VPN pour qu'il s'active et se d\xe9sactive automatiquement lorsque vous les ouvrez et les fermez. Acc\xe9dez \xe0 l'onglet Exclusions, s\xe9lectionnez le mode G\xe9n\xe9ral et suivez les instructions. Nous d\xe9crivons ici comment cr\xe9er une automatisation pour Twitter, mais vous pouvez choisir toute autre application."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg",alt:"Manuel. Partie 1"})),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"T\xe9l\xe9chargez ",(0,r.yg)("a",{parentName:"li",href:"https://apps.apple.com/us/app/shortcuts/id915249334"},"l'application ",(0,r.yg)("em",{parentName:"a"},"Shortcuts"))," depuis l'App Store et allez dans la section ",(0,r.yg)("em",{parentName:"li"},"Automation")," en appuyant sur l'ic\xf4ne de l'horloge en bas de l'\xe9cran."),(0,r.yg)("li",{parentName:"ol"},"Appuyez sur le bouton ",(0,r.yg)("em",{parentName:"li"},"Cr\xe9er une automatisation personnelle")," , puis trouvez ",(0,r.yg)("em",{parentName:"li"},"App")," dans la liste qui s'ouvre et appuyez dessus."),(0,r.yg)("li",{parentName:"ol"},"Dans la fen\xeatre suivante, assurez-vous que l'option ",(0,r.yg)("em",{parentName:"li"},"Est ouverte")," est s\xe9lectionn\xe9e, puis appuyez sur ",(0,r.yg)("em",{parentName:"li"},"Choisir")," pour choisir l'application.")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg",alt:"Manuel. Partie 2"}),"\n4. Start entering the name of the app (in our case it\u2019s Twitter) and select it. Appuyez sur ",(0,r.yg)("em",{parentName:"p"},"Termin\xe9"),", puis appuyez sur ",(0,r.yg)("em",{parentName:"p"},"Suivant")," dans le coin sup\xe9rieur droit de l'\xe9cran. Dans la fen\xeatre qui s'ouvre, appuyez sur ",(0,r.yg)("em",{parentName:"p"},"Ajouter une action"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg",alt:"Manuel. Partie 3"}),'\n5. Commencez \xe0 saisir "AdGuard VPN" et s\xe9lectionnez l\'application AdGuard VPN. Dans la nouvelle fen\xeatre, appuyez sur ',(0,r.yg)("em",{parentName:"p"},"D\xe9finir une connexion VPN"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg",alt:"Manuel. Partie 4"}),"\n6. Assurez-vous que les variables indiquent ",(0,r.yg)("em",{parentName:"p"},"Activer")," Connexion VPN ",(0,r.yg)("em",{parentName:"p"},"Activ\xe9")," et appuyez sur ",(0,r.yg)("em",{parentName:"p"},"Suivant"),".\n7. Dans la fen\xeatre suivante, d\xe9placez le curseur \xe0 c\xf4t\xe9 de l'option ",(0,r.yg)("em",{parentName:"p"},"Demander avant d'ex\xe9cuter")," sur la position inactive. Confirmez votre choix, puis appuyez sur ",(0,r.yg)("em",{parentName:"p"},"Termin\xe9"),"."),(0,r.yg)("p",null,"Vous avez maintenant un nouveau sc\xe9nario\xa0: AdGuard VPN sera automatiquement activ\xe9 lorsque vous d\xe9marrerez l'application Twitter. Vous devez maintenant cr\xe9er une autre commande qui d\xe9sactivera automatiquement AdGuard VPN lorsque vous fermerez l'application."),(0,r.yg)("h2",{id:"configuration-de-larr\xeat-automatique-de-adguard-vpn"},"Configuration de l'arr\xeat automatique de AdGuard VPN"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg",alt:"Manuel. Partie 1"})),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Dans la m\xeame application ",(0,r.yg)("em",{parentName:"li"},"Shortcuts")," , commencez \xe0 cr\xe9er une nouvelle automatisation\xa0: appuyez sur ",(0,r.yg)("em",{parentName:"li"},"Automatisation")," \u2192 ",(0,r.yg)("em",{parentName:"li"},"Cr\xe9er Automatisation personnelle")," \u2192 ",(0,r.yg)("em",{parentName:"li"},"Application"),"."),(0,r.yg)("li",{parentName:"ol"},"Assurez-vous que l'option ",(0,r.yg)("em",{parentName:"li"},"Est ferm\xe9e")," est s\xe9lectionn\xe9e et d\xe9cochez la case sous l'option adjacente. Appuyez ensuite sur ",(0,r.yg)("em",{parentName:"li"},"Choisissez"),".")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg",alt:"Manuel. Partie 2"}),"\n3. Commencez \xe0 saisir ",(0,r.yg)("em",{parentName:"p"},"Twitter")," et s\xe9lectionnez l'application. Appuyez ensuite sur ",(0,r.yg)("em",{parentName:"p"},"Termin\xe9")," dans le coin sup\xe9rieur droit de l'\xe9cran. Appuyez sur ",(0,r.yg)("em",{parentName:"p"},"Ajouter une action")," et s\xe9lectionnez AdGuard VPN."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg",alt:"Manuel. Partie 3"}),"\n4. Dans la nouvelle fen\xeatre, appuyez sur ",(0,r.yg)("em",{parentName:"p"},"D\xe9finir connexion VPN"),".\n5. Appuyez ensuite sur le mot ",(0,r.yg)("em",{parentName:"p"},"On")," pour qu'il devienne le mot ",(0,r.yg)("em",{parentName:"p"},"Off"),", puis appuyez sur ",(0,r.yg)("em",{parentName:"p"},"Suivant")," dans le coin sup\xe9rieur droit de l'\xe9cran.\n6. D\xe9sactivez l'option ",(0,r.yg)("em",{parentName:"p"},"Demander avant d'ex\xe9cuter")," et confirmez votre s\xe9lection. Appuyez ensuite sur ",(0,r.yg)("em",{parentName:"p"},"Termin\xe9")," dans le coin sup\xe9rieur droit de l'\xe9cran pour terminer le processus."),(0,r.yg)("p",null,"C'est fait ! AdGuard VPN sera d\xe9sormais activ\xe9 sur votre appareil chaque fois que vous ouvrez l'application Twitter et d\xe9sactiv\xe9 lorsque vous la fermez. Vous pouvez r\xe9p\xe9ter les m\xeames \xe9tapes pour n'importe quelle autre application."))}m.isMDXComponent=!0}}]);