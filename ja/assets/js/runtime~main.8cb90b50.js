(()=>{"use strict";var e,a,d,f,t,r={},c={};function o(e){var a=c[e];if(void 0!==a)return a.exports;var d=c[e]={id:e,loaded:!1,exports:{}};return r[e].call(d.exports,d,d.exports,o),d.loaded=!0,d.exports}o.m=r,o.c=c,o.amdO={},e=[],o.O=(a,d,f,t)=>{if(!d){var r=1/0;for(i=0;i<e.length;i++){d=e[i][0],f=e[i][1],t=e[i][2];for(var c=!0,n=0;n<d.length;n++)(!1&t||r>=t)&&Object.keys(o.O).every((e=>o.O[e](d[n])))?d.splice(n--,1):(c=!1,t<r&&(r=t));if(c){e.splice(i--,1);var b=f();void 0!==b&&(a=b)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[d,f,t]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var t=Object.create(null);o.r(t);var r={};a=a||[null,d({}),d([]),d(d)];for(var c=2&f&&e;"object"==typeof c&&!~a.indexOf(c);c=d(c))Object.getOwnPropertyNames(c).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,o.d(t,r),t},o.d=(e,a)=>{for(var d in a)o.o(a,d)&&!o.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,d)=>(o.f[d](e,a),a)),[])),o.u=e=>"assets/js/"+({100:"b3144cee",316:"4f95d353",986:"3f453547",1121:"3de668e7",1281:"a4f5d543",1449:"b793f841",1582:"f2182fa5",1586:"36dbe858",1776:"51970f9d",2138:"1a4e3797",2162:"b04c3be4",2520:"79d249ff",2531:"1d469745",2705:"f60a4300",2943:"77fd6c3d",3279:"e6f74844",3412:"6d7dd7f5",3467:"0dea6996",3569:"05e9385c",3631:"983c3aab",3969:"39f65e88",3978:"3e22cc58",4260:"f3b4f34a",5643:"d5a1b3ee",6067:"319d233c",6445:"2d6771fc",6531:"560f6a00",6599:"a588031b",6870:"32e2363a",7069:"73c6deea",7405:"d24cafb8",7551:"d59030a4",7552:"d4e3e835",7623:"2810c259",7638:"a4208a5f",7770:"7437a6cf",8084:"676a4dc0",8127:"5af6b628",8399:"52518bab",8401:"17896441",8551:"737f735d",8581:"935f2afb",8582:"86236cdc",8630:"d76a2014",8714:"1be78505",8728:"4a58dbad",8899:"6499011f",9194:"8a4a02cb",9473:"306dac96",9496:"21861ca9"}[e]||e)+"."+{100:"1968441d",316:"7b0f7160",986:"c3f9b88d",1121:"14e0bc0f",1281:"e4ef8eab",1449:"293ade48",1582:"0db97345",1586:"f0c8f382",1776:"0e59cfa5",2138:"9918fbb5",2162:"d9823b19",2520:"c215d449",2531:"cfabe049",2670:"92c51780",2705:"166c88cd",2943:"34674527",3279:"e6f9f4fb",3412:"1064ccdc",3467:"ca6b5a7b",3529:"b5963fc3",3569:"7b67a47e",3631:"0600c7ba",3813:"2f721cfa",3969:"c8409b07",3978:"43865c09",4260:"68fdd4ee",4716:"b772ee59",4984:"c71969db",5643:"d74ea8cd",6067:"c151ba26",6247:"08de451a",6445:"b5846a39",6531:"20dc108d",6599:"3556b22f",6870:"8ed5017c",7069:"9fe600a6",7405:"0a6c7b0a",7551:"e5e457fa",7552:"47bafced",7623:"60c14ea4",7638:"d4c0e925",7770:"5effeed1",7996:"9721dddd",8084:"475c05bd",8127:"e4b0a339",8399:"5eba6003",8401:"32decd36",8551:"8dacf265",8581:"3ac314cc",8582:"cd67d42d",8630:"3c630552",8714:"ed3ca2e0",8728:"f639e961",8782:"ab4f6f3d",8899:"4ff5a077",9194:"94abdb6f",9473:"54ff094f",9496:"107a92ed"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},t="adguard-vpn-knowledge-base:",o.l=(e,a,d,r)=>{if(f[e])f[e].push(a);else{var c,n;if(void 0!==d)for(var b=document.getElementsByTagName("script"),i=0;i<b.length;i++){var u=b[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==t+d){c=u;break}}c||(n=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",t+d),c.src=e),f[e]=[a];var l=(a,d)=>{c.onerror=c.onload=null,clearTimeout(s);var t=f[e];if(delete f[e],c.parentNode&&c.parentNode.removeChild(c),t&&t.forEach((e=>e(d))),a)return a(d)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),n&&document.head.appendChild(c)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/KnowledgeBaseVPN/ja/",o.gca=function(e){return e={17896441:"8401",b3144cee:"100","4f95d353":"316","3f453547":"986","3de668e7":"1121",a4f5d543:"1281",b793f841:"1449",f2182fa5:"1582","36dbe858":"1586","51970f9d":"1776","1a4e3797":"2138",b04c3be4:"2162","79d249ff":"2520","1d469745":"2531",f60a4300:"2705","77fd6c3d":"2943",e6f74844:"3279","6d7dd7f5":"3412","0dea6996":"3467","05e9385c":"3569","983c3aab":"3631","39f65e88":"3969","3e22cc58":"3978",f3b4f34a:"4260",d5a1b3ee:"5643","319d233c":"6067","2d6771fc":"6445","560f6a00":"6531",a588031b:"6599","32e2363a":"6870","73c6deea":"7069",d24cafb8:"7405",d59030a4:"7551",d4e3e835:"7552","2810c259":"7623",a4208a5f:"7638","7437a6cf":"7770","676a4dc0":"8084","5af6b628":"8127","52518bab":"8399","737f735d":"8551","935f2afb":"8581","86236cdc":"8582",d76a2014:"8630","1be78505":"8714","4a58dbad":"8728","6499011f":"8899","8a4a02cb":"9194","306dac96":"9473","21861ca9":"9496"}[e]||e,o.p+o.u(e)},(()=>{var e={5354:0,1869:0};o.f.j=(a,d)=>{var f=o.o(e,a)?e[a]:void 0;if(0!==f)if(f)d.push(f[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var t=new Promise(((d,t)=>f=e[a]=[d,t]));d.push(f[2]=t);var r=o.p+o.u(a),c=new Error;o.l(r,(d=>{if(o.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var t=d&&("load"===d.type?"missing":d.type),r=d&&d.target&&d.target.src;c.message="Loading chunk "+a+" failed.\n("+t+": "+r+")",c.name="ChunkLoadError",c.type=t,c.request=r,f[1](c)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,d)=>{var f,t,r=d[0],c=d[1],n=d[2],b=0;if(r.some((a=>0!==e[a]))){for(f in c)o.o(c,f)&&(o.m[f]=c[f]);if(n)var i=n(o)}for(a&&a(d);b<r.length;b++)t=r[b],o.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return o.O(i)},d=self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();