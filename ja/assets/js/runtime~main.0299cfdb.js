(()=>{"use strict";var e,a,f,d,t,r={},c={};function b(e){var a=c[e];if(void 0!==a)return a.exports;var f=c[e]={id:e,loaded:!1,exports:{}};return r[e].call(f.exports,f,f.exports,b),f.loaded=!0,f.exports}b.m=r,b.c=c,b.amdO={},e=[],b.O=(a,f,d,t)=>{if(!f){var r=1/0;for(i=0;i<e.length;i++){f=e[i][0],d=e[i][1],t=e[i][2];for(var c=!0,o=0;o<f.length;o++)(!1&t||r>=t)&&Object.keys(b.O).every((e=>b.O[e](f[o])))?f.splice(o--,1):(c=!1,t<r&&(r=t));if(c){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[f,d,t]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var t=Object.create(null);b.r(t);var r={};a=a||[null,f({}),f([]),f(f)];for(var c=2&d&&e;"object"==typeof c&&!~a.indexOf(c);c=f(c))Object.getOwnPropertyNames(c).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(t,r),t},b.d=(e,a)=>{for(var f in a)b.o(a,f)&&!b.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,f)=>(b.f[f](e,a),a)),[])),b.u=e=>"assets/js/"+({100:"b3144cee",220:"f33bb586",316:"4f95d353",510:"2824cfb8",986:"3f453547",1121:"3de668e7",1281:"a4f5d543",1449:"b793f841",1500:"247ae5cb",1582:"f2182fa5",1586:"36dbe858",1776:"51970f9d",2138:"1a4e3797",2162:"b04c3be4",2520:"79d249ff",2531:"1d469745",2705:"f60a4300",2943:"77fd6c3d",3279:"e6f74844",3412:"6d7dd7f5",3467:"0dea6996",3569:"05e9385c",3608:"28ebfba7",3631:"983c3aab",3969:"39f65e88",3978:"3e22cc58",4260:"f3b4f34a",5643:"d5a1b3ee",6067:"319d233c",6531:"560f6a00",6599:"a588031b",6870:"32e2363a",7069:"73c6deea",7405:"d24cafb8",7551:"d59030a4",7552:"d4e3e835",7623:"2810c259",7638:"a4208a5f",7719:"3b42c408",7770:"7437a6cf",7812:"e0d8e7f2",8084:"676a4dc0",8127:"5af6b628",8399:"52518bab",8401:"17896441",8581:"935f2afb",8582:"86236cdc",8714:"1be78505",8899:"6499011f",9473:"306dac96"}[e]||e)+"."+{100:"1968441d",220:"9b251a9e",316:"7b0f7160",510:"a79cdbf1",986:"c3f9b88d",1121:"14e0bc0f",1281:"e4ef8eab",1449:"293ade48",1500:"2d534b4d",1582:"0db97345",1586:"f0c8f382",1776:"0e59cfa5",2138:"9918fbb5",2162:"d9823b19",2520:"c215d449",2531:"1b41e56b",2670:"92c51780",2705:"166c88cd",2943:"34674527",3279:"e6f9f4fb",3412:"360f2d7a",3467:"ca6b5a7b",3529:"b5963fc3",3569:"7b67a47e",3608:"b42c0a06",3631:"0600c7ba",3813:"2f721cfa",3969:"c8409b07",3978:"43865c09",4260:"68fdd4ee",4716:"b772ee59",4984:"c71969db",5643:"d74ea8cd",6067:"0c1ee228",6247:"08de451a",6531:"20dc108d",6599:"3556b22f",6870:"8ed5017c",7069:"9fe600a6",7405:"0a6c7b0a",7551:"e5e457fa",7552:"47bafced",7623:"60c14ea4",7638:"d4c0e925",7719:"101eab31",7770:"5effeed1",7812:"2494881c",7996:"9721dddd",8084:"475c05bd",8127:"e4b0a339",8399:"5eba6003",8401:"32decd36",8581:"eca5cab9",8582:"cd67d42d",8714:"ed3ca2e0",8782:"ab4f6f3d",8899:"4ff5a077",9473:"54ff094f"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},t="adguard-vpn-knowledge-base:",b.l=(e,a,f,r)=>{if(d[e])d[e].push(a);else{var c,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==t+f){c=u;break}}c||(o=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,b.nc&&c.setAttribute("nonce",b.nc),c.setAttribute("data-webpack",t+f),c.src=e),d[e]=[a];var l=(a,f)=>{c.onerror=c.onload=null,clearTimeout(s);var t=d[e];if(delete d[e],c.parentNode&&c.parentNode.removeChild(c),t&&t.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),o&&document.head.appendChild(c)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/KnowledgeBaseVPN/ja/",b.gca=function(e){return e={17896441:"8401",b3144cee:"100",f33bb586:"220","4f95d353":"316","2824cfb8":"510","3f453547":"986","3de668e7":"1121",a4f5d543:"1281",b793f841:"1449","247ae5cb":"1500",f2182fa5:"1582","36dbe858":"1586","51970f9d":"1776","1a4e3797":"2138",b04c3be4:"2162","79d249ff":"2520","1d469745":"2531",f60a4300:"2705","77fd6c3d":"2943",e6f74844:"3279","6d7dd7f5":"3412","0dea6996":"3467","05e9385c":"3569","28ebfba7":"3608","983c3aab":"3631","39f65e88":"3969","3e22cc58":"3978",f3b4f34a:"4260",d5a1b3ee:"5643","319d233c":"6067","560f6a00":"6531",a588031b:"6599","32e2363a":"6870","73c6deea":"7069",d24cafb8:"7405",d59030a4:"7551",d4e3e835:"7552","2810c259":"7623",a4208a5f:"7638","3b42c408":"7719","7437a6cf":"7770",e0d8e7f2:"7812","676a4dc0":"8084","5af6b628":"8127","52518bab":"8399","935f2afb":"8581","86236cdc":"8582","1be78505":"8714","6499011f":"8899","306dac96":"9473"}[e]||e,b.p+b.u(e)},(()=>{var e={5354:0,1869:0};b.f.j=(a,f)=>{var d=b.o(e,a)?e[a]:void 0;if(0!==d)if(d)f.push(d[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var t=new Promise(((f,t)=>d=e[a]=[f,t]));f.push(d[2]=t);var r=b.p+b.u(a),c=new Error;b.l(r,(f=>{if(b.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var t=f&&("load"===f.type?"missing":f.type),r=f&&f.target&&f.target.src;c.message="Loading chunk "+a+" failed.\n("+t+": "+r+")",c.name="ChunkLoadError",c.type=t,c.request=r,d[1](c)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,f)=>{var d,t,r=f[0],c=f[1],o=f[2],n=0;if(r.some((a=>0!==e[a]))){for(d in c)b.o(c,d)&&(b.m[d]=c[d]);if(o)var i=o(b)}for(a&&a(f);n<r.length;n++)t=r[n],b.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return b.O(i)},f=self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();