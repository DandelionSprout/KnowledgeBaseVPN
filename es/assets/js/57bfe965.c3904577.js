"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[1734],{5680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>g});var r=n(6540);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function t(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,r,o=function(e,a){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var a=r.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):t(t({},a),e)),n},d=function(e){var a=p(e.components);return r.createElement(l.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,g=u["".concat(l,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(g,t(t({ref:a},d),{},{components:n})):r.createElement(g,t({ref:a},d))}));function g(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=n.length,t=new Array(i);t[0]=c;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:o,t[1]=s;for(var p=2;p<i;p++)t[p]=n[p];return r.createElement.apply(null,t)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},465:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>t,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(8168),o=(n(6540),n(5680));const i={title:"Problemas con el perfil del modo restringido",sidebar_position:4},t=void 0,s={unversionedId:"adguard-vpn-for-android/solving-problems/restricted-mode",id:"adguard-vpn-for-android/solving-problems/restricted-mode",title:"Problemas con el perfil del modo restringido",description:"Los propietarios de tel\xe9fonos y tabletas que ejecutan el sistema operativo Android 7+ podr\xedan enfrentarse al problema causado por el uso de un perfil con Modo Restringido. Si tiene este perfil, AdGuard VPN, al igual que otras aplicaciones que utilizan VPN, obtiene restricciones en el manejo selectivo del tr\xe1fico VPN. Adem\xe1s, una de las razones de este problema puede ser el uso de Dual App/Dual Messenger profile en su dispositivo. A continuaci\xf3n se describen las recomendaciones que puede aplicar cuando se presenta este problema.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/adguard-vpn-for-android/solving-problems/restricted-mode.md",sourceDirName:"adguard-vpn-for-android/solving-problems",slug:"/adguard-vpn-for-android/solving-problems/restricted-mode",permalink:"/KnowledgeBaseVPN/es/adguard-vpn-for-android/solving-problems/restricted-mode",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/adguard-vpn-for-android/solving-problems/restricted-mode.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Problemas con el perfil del modo restringido",sidebar_position:4},sidebar:"sidebar",previous:{title:"Compatibilidad con AdGuard Ad Blocker",permalink:"/KnowledgeBaseVPN/es/adguard-vpn-for-android/solving-problems/integrated-mode"},next:{title:"Compatibilidad de AdGuard VPN con Chromecast",permalink:"/KnowledgeBaseVPN/es/adguard-vpn-for-android/solving-problems/chromecast"}},l={},p=[{value:"Soluciones",id:"soluciones",level:2},{value:"Opci\xf3n 1: Conceder permisos a AdGuard VPN mediante ADB",id:"opci\xf3n-1-conceder-permisos-a-adguard-vpn-mediante-adb",level:3},{value:"Opci\xf3n 2: Eliminar <em>Cuenta de usuario restringida</em>",id:"opci\xf3n-2-eliminar-cuenta-de-usuario-restringida",level:3},{value:"Dispositivos LG y Samsung",id:"dispositivos-lg-y-samsung",level:3},{value:"Samsung",id:"samsung",level:4},{value:"LG",id:"lg",level:4}],d={toc:p},u="wrapper";function m(e){let{components:a,...n}=e;return(0,o.yg)(u,(0,r.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Los propietarios de tel\xe9fonos y tabletas que ejecutan el sistema operativo Android 7+ podr\xedan enfrentarse al problema causado por el uso de ",(0,o.yg)("strong",{parentName:"p"},"un perfil con Modo Restringido"),". Si tiene este perfil, ",(0,o.yg)("strong",{parentName:"p"},"AdGuard VPN"),", al igual que otras aplicaciones que utilizan VPN, obtiene restricciones en el manejo selectivo del tr\xe1fico VPN. Adem\xe1s, una de las razones de este problema puede ser el uso de ",(0,o.yg)("strong",{parentName:"p"},"Dual App/Dual Messenger profile")," en su dispositivo. A continuaci\xf3n se describen las recomendaciones que puede aplicar cuando se presenta este problema."),(0,o.yg)("h2",{id:"soluciones"},"Soluciones"),(0,o.yg)("p",null,"Tienes dos maneras de resolver el problema:"),(0,o.yg)("h3",{id:"opci\xf3n-1-conceder-permisos-a-adguard-vpn-mediante-adb"},"Opci\xf3n 1: Conceder permisos a AdGuard VPN mediante ADB"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Active el modo de desarrollador *",(0,o.yg)("strong",{parentName:"p"},"* y habilite la depuraci\xf3n USB **"),":"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Abra la aplicaci\xf3n ",(0,o.yg)("strong",{parentName:"li"},"Configuraci\xf3n")," en su tel\xe9fono;"),(0,o.yg)("li",{parentName:"ul"},"Vaya a la secci\xf3n ",(0,o.yg)("strong",{parentName:"li"},"Sistema")," (\xfaltimo elemento en el men\xfa de configuraci\xf3n). En esta secci\xf3n, encuentre el subelemento ",(0,o.yg)("strong",{parentName:"li"},"Acerca del tel\xe9fono"),";"),(0,o.yg)("li",{parentName:"ul"},"Haz clic en ",(0,o.yg)("strong",{parentName:"li"},"N\xfamero de build")," 7 veces. Despu\xe9s de eso, recibir\xe1s una notificaci\xf3n que dice ",(0,o.yg)("strong",{parentName:"li"},"Ahora eres un desarrollador")," (Si es necesario, introduce un c\xf3digo de desbloqueo para el dispositivo);"),(0,o.yg)("li",{parentName:"ul"},"Abre ",(0,o.yg)("strong",{parentName:"li"},"Configuraci\xf3n del sistema")," \u2192 ",(0,o.yg)("strong",{parentName:"li"},"Opciones de desarrollador")," \u2192 Desliza hacia abajo y activa ",(0,o.yg)("strong",{parentName:"li"},"Depuraci\xf3n USB")," \u2192 Confirma que la depuraci\xf3n est\xe1 habilitada en la ventana ",(0,o.yg)("strong",{parentName:"li"},"Permitir depuraci\xf3n USB")," despu\xe9s de leer la advertencia cuidadosamente.")),(0,o.yg)("admonition",{parentName:"li",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Si encuentras alguna dificultad o tienes preguntas adicionales, puedes encontrar instrucciones completas ",(0,o.yg)("a",{parentName:"p",href:"https://developer.android.com/studio/debug/dev-options"},"aqu\xed"),"."))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://www.xda-developers.com/install-adb-windows-macos-linux/"},"Instalar y configurar")," ADB;"),(0,o.yg)("admonition",{parentName:"li",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"En la plataforma Windows, los propietarios de dispositivos ",(0,o.yg)("strong",{parentName:"p"},"Samsung")," pueden necesitar instalar ",(0,o.yg)("a",{parentName:"p",href:"https://developer.samsung.com/mobile/android-usb-driver.html"},"esta utilidad"),"."))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Conecte su dispositivo usando un cable ",(0,o.yg)("strong",{parentName:"p"},"USB")," a la computadora o port\xe1til en la que instal\xf3 ",(0,o.yg)("strong",{parentName:"p"},"ADB"),";")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Abre ",(0,o.yg)("strong",{parentName:"p"},"la l\xednea de comando")," en tu PC:"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Cmd.exe")," si est\xe1 utilizando ",(0,o.yg)("strong",{parentName:"li"},"Windows"),";"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Terminal")," si est\xe1 utilizando ",(0,o.yg)("strong",{parentName:"li"},"macOS"),";"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Introduzca el comando ",(0,o.yg)("inlineCode",{parentName:"p"},"adb shell pm grant com.adguard.vpn android.permission.INTERACT_ACROSS_USERS")," y pulse ",(0,o.yg)("strong",{parentName:"p"},"Enter"),"."))),(0,o.yg)("h3",{id:"opci\xf3n-2-eliminar-cuenta-de-usuario-restringida"},"Opci\xf3n 2: Eliminar ",(0,o.yg)("em",{parentName:"h3"},"Cuenta de usuario restringida")),(0,o.yg)("p",null,"Puede ",(0,o.yg)("a",{parentName:"p",href:"https://support.google.com/a/answer/6223444?hl=en"},"encontrar aqu\xed")," c\xf3mo administrar cuentas de usuario desde un dispositivo Android."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"En algunos casos, se crean cuentas de usuario restringidas de forma impl\xedcita y no se pueden eliminar. Por ejemplo, cuando se utilizan las funciones Dual Messenger o Dual App en los dispositivos ",(0,o.yg)("strong",{parentName:"p"},"Samsung")," o ",(0,o.yg)("strong",{parentName:"p"},"LG"),". Lee a continuaci\xf3n c\xf3mo solucionar el problema en estos casos.")),(0,o.yg)("h3",{id:"dispositivos-lg-y-samsung"},"Dispositivos LG y Samsung"),(0,o.yg)("p",null,"Los propietarios de los tel\xe9fonos ",(0,o.yg)("strong",{parentName:"p"},"LG")," o ",(0,o.yg)("strong",{parentName:"p"},"Samsung")," tambi\xe9n pueden encontrar un problema similar. Puede ser causada por el uso de ",(0,o.yg)("strong",{parentName:"p"},"funci\xf3n dual App / Dual Messenger")," (que crea autom\xe1ticamente un perfil restringido). Para resolver este problema, deshabilite esta funci\xf3n."),(0,o.yg)("h4",{id:"samsung"},"Samsung"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Abra ",(0,o.yg)("strong",{parentName:"li"},"\u0421onfiguraci\xf3n"),";"),(0,o.yg)("li",{parentName:"ul"},"Pulse ",(0,o.yg)("strong",{parentName:"li"},"Avanzado"),";"),(0,o.yg)("li",{parentName:"ul"},"Despl\xe1cese hacia abajo y luego presione ",(0,o.yg)("strong",{parentName:"li"},"Dual Messenger"),";"),(0,o.yg)("li",{parentName:"ul"},"Desactiva la funci\xf3n ",(0,o.yg)("strong",{parentName:"li"},"Dual Messenger")," para todas las aplicaciones;"),(0,o.yg)("li",{parentName:"ul"},"Bloquee el dispositivo durante 5 minutos;"),(0,o.yg)("li",{parentName:"ul"},"Desbloquee la pantalla y vuelva a intentar crear el perfil VPN.")),(0,o.yg)("h4",{id:"lg"},"LG"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Abra ",(0,o.yg)("strong",{parentName:"li"},"\u0421onfiguraci\xf3n"),";"),(0,o.yg)("li",{parentName:"ul"},"Elija la pesta\xf1a ",(0,o.yg)("strong",{parentName:"li"},"General")," ;"),(0,o.yg)("li",{parentName:"ul"},"Despl\xe1cese hacia abajo y pulse ",(0,o.yg)("strong",{parentName:"li"},"Dual App"),";"),(0,o.yg)("li",{parentName:"ul"},"Elimina todas las aplicaciones de la lista;"),(0,o.yg)("li",{parentName:"ul"},"Reinicie su dispositivo.")))}m.isMDXComponent=!0}}]);