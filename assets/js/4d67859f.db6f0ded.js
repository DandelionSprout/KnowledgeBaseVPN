"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[7382],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>c});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=p(t),m=a,c=g["".concat(l,".").concat(m)]||g[m]||u[m]||o;return t?r.createElement(c,i(i({ref:n},d),{},{components:t})):r.createElement(c,i({ref:n},d))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[g]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6866:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(8168),a=(t(6540),t(5680));const o={title:"Problems with Restricted Mode profile",sidebar_position:4},i=void 0,s={unversionedId:"adguard-vpn-for-android/solving-problems/restricted-mode",id:"adguard-vpn-for-android/solving-problems/restricted-mode",title:"Problems with Restricted Mode profile",description:"The owners of phones and tablets running the Android 7+ operating system might face the problem caused by using a profile with Restricted Mode. If you have such a profile, AdGuard VPN, like other applications that use VPN, gets restrictions on selective handling of VPN traffic. Also, one of the reasons for this problem may be using Dual App/Dual Messenger profile on your device. Below are described the recommendations that you can apply when this problem occurs.",source:"@site/docs/adguard-vpn-for-android/solving-problems/restricted-mode.md",sourceDirName:"adguard-vpn-for-android/solving-problems",slug:"/adguard-vpn-for-android/solving-problems/restricted-mode",permalink:"/KnowledgeBaseVPN/adguard-vpn-for-android/solving-problems/restricted-mode",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/adguard-vpn-for-android/solving-problems/restricted-mode.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Problems with Restricted Mode profile",sidebar_position:4},sidebar:"sidebar",previous:{title:"Compatibility with AdGuard Ad Blocker",permalink:"/KnowledgeBaseVPN/adguard-vpn-for-android/solving-problems/integrated-mode"},next:{title:"Compatibility of AdGuard VPN with Chromecast",permalink:"/KnowledgeBaseVPN/adguard-vpn-for-android/solving-problems/chromecast"}},l={},p=[{value:"Solutions",id:"solutions",level:2},{value:"Option 1: Grant permissions to AdGuard VPN using ADB",id:"option-1-grant-permissions-to-adguard-vpn-using-adb",level:3},{value:"Option 2: Remove <em>Restricted user account</em>",id:"option-2-remove-restricted-user-account",level:3},{value:"LG and Samsung devices",id:"lg-and-samsung-devices",level:3},{value:"Samsung",id:"samsung",level:4},{value:"LG",id:"lg",level:4}],d={toc:p},g="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(g,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The owners of phones and tablets running the Android 7+ operating system might face the problem caused by using ",(0,a.yg)("strong",{parentName:"p"},"a profile with Restricted Mode"),". If you have such a profile, ",(0,a.yg)("strong",{parentName:"p"},"AdGuard VPN"),", like other applications that use VPN, gets restrictions on selective handling of VPN traffic. Also, one of the reasons for this problem may be using ",(0,a.yg)("strong",{parentName:"p"},"Dual App/Dual Messenger profile")," on your device. Below are described the recommendations that you can apply when this problem occurs."),(0,a.yg)("h2",{id:"solutions"},"Solutions"),(0,a.yg)("p",null,"You have two ways to solve the issue:"),(0,a.yg)("h3",{id:"option-1-grant-permissions-to-adguard-vpn-using-adb"},"Option 1: Grant permissions to AdGuard VPN using ADB"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Activate the ",(0,a.yg)("strong",{parentName:"p"},"developer mode")," and enable ",(0,a.yg)("strong",{parentName:"p"},"USB debugging"),":"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Open the ",(0,a.yg)("strong",{parentName:"li"},"Settings")," application on your phone;"),(0,a.yg)("li",{parentName:"ul"},"Go to ",(0,a.yg)("strong",{parentName:"li"},"System")," section (last item in the settings menu). In this section find sub-item ",(0,a.yg)("strong",{parentName:"li"},"About phone"),";"),(0,a.yg)("li",{parentName:"ul"},"Click the ",(0,a.yg)("strong",{parentName:"li"},"Build number")," line 7 times. After that, you will receive a notification that ",(0,a.yg)("strong",{parentName:"li"},"You are now a developer")," (If necessary, enter an unlock code for the device);"),(0,a.yg)("li",{parentName:"ul"},"Open ",(0,a.yg)("strong",{parentName:"li"},"System Settings")," \u2192 ",(0,a.yg)("strong",{parentName:"li"},"Developer Options")," \u2192 Scroll down and enable ",(0,a.yg)("strong",{parentName:"li"},"USB debugging")," \u2192 Confirm debugging is enabled in the window ",(0,a.yg)("strong",{parentName:"li"},"Allow USB debugging")," after reading the warning carefully.")),(0,a.yg)("admonition",{parentName:"li",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"If you have any difficulties or additional questions, full instructions can be found ",(0,a.yg)("a",{parentName:"p",href:"https://developer.android.com/studio/debug/dev-options"},"here"),"."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"https://www.xda-developers.com/install-adb-windows-macos-linux/"},"Install and configure")," ADB;"),(0,a.yg)("admonition",{parentName:"li",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"On the Windows platform, ",(0,a.yg)("strong",{parentName:"p"},"Samsung")," owners may need to install ",(0,a.yg)("a",{parentName:"p",href:"https://developer.samsung.com/mobile/android-usb-driver.html"},"this utility"),"."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Connect your device using a ",(0,a.yg)("strong",{parentName:"p"},"USB cable")," to the computer or laptop on which you installed ",(0,a.yg)("strong",{parentName:"p"},"ADB"),";")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Open ",(0,a.yg)("strong",{parentName:"p"},"the command line")," on your PC:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Cmd.exe")," if you are using ",(0,a.yg)("strong",{parentName:"li"},"Windows"),";"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Terminal")," if you are using ",(0,a.yg)("strong",{parentName:"li"},"macOS"),";"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Enter the command ",(0,a.yg)("inlineCode",{parentName:"p"},"adb shell pm grant com.adguard.vpn android.permission.INTERACT_ACROSS_USERS")," and press ",(0,a.yg)("strong",{parentName:"p"},"Enter"),"."))),(0,a.yg)("h3",{id:"option-2-remove-restricted-user-account"},"Option 2: Remove ",(0,a.yg)("em",{parentName:"h3"},"Restricted user account")),(0,a.yg)("p",null,"You can ",(0,a.yg)("a",{parentName:"p",href:"https://support.google.com/a/answer/6223444?hl=en"},"find here")," how to manage user accounts from an Android device."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"In some cases restricted user accounts are created implicitly and cannot be removed. For instance, when you use Dual Messenger or Dual App features on ",(0,a.yg)("strong",{parentName:"p"},"Samsung")," or ",(0,a.yg)("strong",{parentName:"p"},"LG")," devices. Read below how to fix the issue in these cases.")),(0,a.yg)("h3",{id:"lg-and-samsung-devices"},"LG and Samsung devices"),(0,a.yg)("p",null,"Owners of ",(0,a.yg)("strong",{parentName:"p"},"LG")," or ",(0,a.yg)("strong",{parentName:"p"},"Samsung")," phones may also encounter a similar issue. It can be caused by using ",(0,a.yg)("strong",{parentName:"p"},"Dual App/Dual Messenger")," function (which automatically creates a restricted profile).\nTo solve this issue, you need to disable this feature."),(0,a.yg)("h4",{id:"samsung"},"Samsung"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Open ",(0,a.yg)("strong",{parentName:"li"},"Settings"),";"),(0,a.yg)("li",{parentName:"ul"},"Press ",(0,a.yg)("strong",{parentName:"li"},"Advanced"),";"),(0,a.yg)("li",{parentName:"ul"},"Scroll down and then press ",(0,a.yg)("strong",{parentName:"li"},"Dual Messenger"),";"),(0,a.yg)("li",{parentName:"ul"},"Disable the ",(0,a.yg)("strong",{parentName:"li"},"Dual Messenger")," for all apps;"),(0,a.yg)("li",{parentName:"ul"},"Lock the device for 5 minutes;"),(0,a.yg)("li",{parentName:"ul"},"Unlock the screen and try again to create the VPN profile.")),(0,a.yg)("h4",{id:"lg"},"LG"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Open ",(0,a.yg)("strong",{parentName:"li"},"Settings"),";"),(0,a.yg)("li",{parentName:"ul"},"Choose the ",(0,a.yg)("strong",{parentName:"li"},"General")," tab;"),(0,a.yg)("li",{parentName:"ul"},"Scroll down and then press ",(0,a.yg)("strong",{parentName:"li"},"Dual App"),";"),(0,a.yg)("li",{parentName:"ul"},"Remove all apps from the list;"),(0,a.yg)("li",{parentName:"ul"},"Reboot your device.")))}u.isMDXComponent=!0}}]);