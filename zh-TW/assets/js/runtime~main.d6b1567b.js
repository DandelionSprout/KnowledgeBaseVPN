!function(){"use strict";var e,t,f,n,a,r={},c={};function o(e){var t=c[e];if(void 0!==t)return t.exports;var f=c[e]={id:e,loaded:!1,exports:{}};return r[e].call(f.exports,f,f.exports,o),f.loaded=!0,f.exports}o.m=r,o.c=c,o.amdO={},e=[],o.O=function(t,f,n,a){if(!f){var r=1/0;for(u=0;u<e.length;u++){f=e[u][0],n=e[u][1],a=e[u][2];for(var c=!0,d=0;d<f.length;d++)(!1&a||r>=a)&&Object.keys(o.O).every((function(e){return o.O[e](f[d])}))?f.splice(d--,1):(c=!1,a<r&&(r=a));if(c){e.splice(u--,1);var b=n();void 0!==b&&(t=b)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[f,n,a]},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var a=Object.create(null);o.r(a);var r={};t=t||[null,f({}),f([]),f(f)];for(var c=2&n&&e;"object"==typeof c&&!~t.indexOf(c);c=f(c))Object.getOwnPropertyNames(c).forEach((function(t){r[t]=function(){return e[t]}}));return r.default=function(){return e},o.d(a,r),a},o.d=function(e,t){for(var f in t)o.o(t,f)&&!o.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:t[f]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,f){return o.f[f](e,t),t}),[]))},o.u=function(e){return"assets/js/"+({1:"b4715dc9",53:"935f2afb",257:"5114c6cf",286:"c688bc83",296:"a86986ef",327:"7a3ed15a",1788:"aee2b25d",1789:"1bd176e8",1848:"872f0ccb",2261:"bbf5df24",2405:"6c39f545",2465:"c0854d3b",2509:"a4f5d543",2744:"c30e091d",2803:"2409aaf9",2855:"f3f72679",2872:"637320d1",2938:"54e864e4",3364:"6c10a7e4",3589:"902f6ac0",3707:"b04c3be4",4339:"2b653bff",4470:"a63cc64b",5035:"131ea04a",5051:"7f6fc336",5419:"e7f16799",5502:"0205f912",5815:"19a296cf",5853:"9afe2818",5909:"c15cda0d",7314:"51cd229f",7812:"f904aa9d",7838:"8eeccff2",7897:"425a6aac",7901:"7c06b9c5",7918:"17896441",8008:"8e7baa20",8302:"7e1d1554",8577:"9ba533bb",8608:"0436dedb",8922:"0ba16c1c",9064:"a2fa86cd",9447:"abee0d7a",9514:"1be78505",9650:"11967af4"}[e]||e)+"."+{1:"65f22918",45:"eaf4986f",53:"e3ad36bd",257:"e2aba098",286:"c3dca268",296:"77abd9dd",327:"922c2565",1788:"3ad751a3",1789:"fadcd331",1848:"96bc58ef",2261:"a4d48aff",2405:"6fa503d7",2465:"28982567",2509:"004512a2",2664:"63444f6e",2744:"f05df6c1",2803:"e1cee19b",2805:"41705843",2855:"a441b83b",2872:"101d6c28",2938:"38fe6bec",3364:"1c4be81a",3589:"02fac39e",3707:"12392b14",4216:"e2afd9aa",4248:"19b2f428",4339:"34a75c26",4470:"be6b884c",5035:"3f9216ae",5051:"c60c2cc2",5419:"ff0b75c9",5502:"c3de3e11",5815:"37f36f75",5853:"e64de734",5909:"e2d9adb5",6353:"7040d822",7314:"ab8de6be",7812:"7e3fb383",7838:"f6df1c14",7897:"d0c2235a",7901:"2f640f7e",7918:"41a2a97c",8008:"21d15d6a",8302:"cbacf2dd",8577:"301558bd",8608:"f9377a0d",8699:"bb113a6e",8859:"899acd23",8922:"650d3edf",9064:"54c523f9",9447:"8298bdbf",9514:"21f5ab61",9650:"db8abb77"}[e]+".js"},o.miniCssF=function(e){},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},a="adguard-vpn-knowledge-base:",o.l=function(e,t,f,r){if(n[e])n[e].push(t);else{var c,d;if(void 0!==f)for(var b=document.getElementsByTagName("script"),u=0;u<b.length;u++){var i=b[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==a+f){c=i;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",a+f),c.src=e),n[e]=[t];var l=function(t,f){c.onerror=c.onload=null,clearTimeout(s);var a=n[e];if(delete n[e],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((function(e){return e(f)})),t)return t(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),d&&document.head.appendChild(c)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/KnowledgeBaseVPN/zh-TW/",o.gca=function(e){return e={17896441:"7918",b4715dc9:"1","935f2afb":"53","5114c6cf":"257",c688bc83:"286",a86986ef:"296","7a3ed15a":"327",aee2b25d:"1788","1bd176e8":"1789","872f0ccb":"1848",bbf5df24:"2261","6c39f545":"2405",c0854d3b:"2465",a4f5d543:"2509",c30e091d:"2744","2409aaf9":"2803",f3f72679:"2855","637320d1":"2872","54e864e4":"2938","6c10a7e4":"3364","902f6ac0":"3589",b04c3be4:"3707","2b653bff":"4339",a63cc64b:"4470","131ea04a":"5035","7f6fc336":"5051",e7f16799:"5419","0205f912":"5502","19a296cf":"5815","9afe2818":"5853",c15cda0d:"5909","51cd229f":"7314",f904aa9d:"7812","8eeccff2":"7838","425a6aac":"7897","7c06b9c5":"7901","8e7baa20":"8008","7e1d1554":"8302","9ba533bb":"8577","0436dedb":"8608","0ba16c1c":"8922",a2fa86cd:"9064",abee0d7a:"9447","1be78505":"9514","11967af4":"9650"}[e]||e,o.p+o.u(e)},function(){var e={1303:0,532:0};o.f.j=function(t,f){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)f.push(n[2]);else if(/^(1303|532)$/.test(t))e[t]=0;else{var a=new Promise((function(f,a){n=e[t]=[f,a]}));f.push(n[2]=a);var r=o.p+o.u(t),c=new Error;o.l(r,(function(f){if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=f&&("load"===f.type?"missing":f.type),r=f&&f.target&&f.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",c.name="ChunkLoadError",c.type=a,c.request=r,n[1](c)}}),"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,f){var n,a,r=f[0],c=f[1],d=f[2],b=0;if(r.some((function(t){return 0!==e[t]}))){for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(d)var u=d(o)}for(t&&t(f);b<r.length;b++)a=r[b],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},f=self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[];f.forEach(t.bind(null,0)),f.push=t.bind(null,f.push.bind(f))}()}();