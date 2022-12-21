"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[81],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,y=u["".concat(c,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7982:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(3117),o=n(102),a=(n(7294),n(4137)),i=["components"],s={title:"AdGuard VPN\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uc554\ud638\ud654 \uc720\ud615",sidebar_position:7},c=void 0,l={unversionedId:"general/adguard-vpn-encryption",id:"general/adguard-vpn-encryption",title:"AdGuard VPN\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uc554\ud638\ud654 \uc720\ud615",description:"\uc18c\uac1c",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/general/adguard-vpn-encryption.md",sourceDirName:"general",slug:"/general/adguard-vpn-encryption",permalink:"/KnowledgeBaseVPN/ko/general/adguard-vpn-encryption",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/general/adguard-vpn-encryption.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"AdGuard VPN\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uc554\ud638\ud654 \uc720\ud615",sidebar_position:7},sidebar:"sidebar",previous:{title:"\uad6c\ub3c5 \ubc29\ubc95",permalink:"/KnowledgeBaseVPN/ko/general/subscription"},next:{title:"\uae30\ub2a5 \uac1c\uc694",permalink:"/KnowledgeBaseVPN/ko/adguard-vpn-for-android/overview"}},p={},d=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2},{value:"AES historical tour",id:"aes-historical-tour",level:2},{value:"How AES-256 works",id:"how-aes-256-works",level:2}],u={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\uc18c\uac1c"},"\uc18c\uac1c"),(0,a.kt)("p",null,'Encryption is the reason the word "private" exists in the term "Virtual Private Network". A VPN creates a tunnel between your device and a VPN server, passing through which your data gets encrypted and then enters the open Internet in a secure form. The process of encryption, i.e. turning data into gibberish that no one who intercepts it can read, is essential to any VPN service.'),(0,a.kt)("p",null,"AdGuard VPN protocol uses the most secure and fast encryption algorithm to date \u2013 AES-256. Learn what it is and why it is so good."),(0,a.kt)("h2",{id:"aes-historical-tour"},"AES historical tour"),(0,a.kt)("p",null,"AES (Advanced Encryption Standard) encryption was developed in the late 20th century at the U.S. government request: the existing Data Encryption Standard (DES) became obsolete and a new, more secure encryption algorithm was required."),(0,a.kt)("p",null,"In a public competition announced by the government won the Rijndael cipher \u2014 rather similar to DES but much more sophisticated. In 2002 it was renamed AES and published by the U.S. National Institute of Standards and Technology."),(0,a.kt)("p",null,"Today, AES is the industry standard for encryption. Because of its open nature, it is used by the NSA and government agencies, as well as private, commercial, and non-profit organizations."),(0,a.kt)("h2",{id:"how-aes-256-works"},"How AES-256 works"),(0,a.kt)("p",null,"AES is a block cipher with a symmetric key. As a symmetric-key cipher, it requires only one secret key to encrypt and decrypt the data. As a block cipher, AES divides the unencrypted information, which is called plaintext, into blocks, splits the original cryptographic key into several ones and applies them to each block. In the end, a ciphertext, i.e. an encrypted text, is obtained."),(0,a.kt)("p",null,"There are different key sizes \u2014 128, 192 and 256 bits \u2014 and the blocks are also measured in bits. During the encryption process, the encryptor replaces each piece of information with another, depending on the security key. So, for example, AES-256 creates 256 blocks of ciphertext from 256 blocks of plaintext in 14 rounds."),(0,a.kt)("p",null,"The rounds consist of several steps: splitting the data into blocks, swapping bytes, shifting rows and rearranging columns. The result is a completely random set of characters, which will only make sense with an encryption key."),(0,a.kt)("p",null,"AES-256 is the strongest level of encryption: to break this cipher, a bad actor will have to try 2256 discrete combinations, each consisting of 78 digits."))}h.isMDXComponent=!0}}]);