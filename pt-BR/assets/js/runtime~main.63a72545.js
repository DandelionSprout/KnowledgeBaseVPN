(()=>{"use strict";var e,a,f,t,c,r={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var f=d[e]={id:e,loaded:!1,exports:{}};return r[e].call(f.exports,f,f.exports,b),f.loaded=!0,f.exports}b.m=r,b.c=d,b.amdO={},e=[],b.O=(a,f,t,c)=>{if(!f){var r=1/0;for(i=0;i<e.length;i++){f=e[i][0],t=e[i][1],c=e[i][2];for(var d=!0,o=0;o<f.length;o++)(!1&c||r>=c)&&Object.keys(b.O).every((e=>b.O[e](f[o])))?f.splice(o--,1):(d=!1,c<r&&(r=c));if(d){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[f,t,c]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var c=Object.create(null);b.r(c);var r={};a=a||[null,f({}),f([]),f(f)];for(var d=2&t&&e;"object"==typeof d&&!~a.indexOf(d);d=f(d))Object.getOwnPropertyNames(d).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(c,r),c},b.d=(e,a)=>{for(var f in a)b.o(a,f)&&!b.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,f)=>(b.f[f](e,a),a)),[])),b.u=e=>"assets/js/"+({483:"7a698379",544:"0bae6d05",783:"42c6c985",1281:"a4f5d543",1477:"879833d4",1587:"80bf5b74",1713:"23328989",1920:"ffb456ce",2053:"ca6b9e1c",2138:"1a4e3797",2162:"b04c3be4",2222:"889a3666",2228:"9be8f9e5",3131:"14ac3653",3255:"adcefc3c",4238:"0571ab56",4504:"c6011c52",4518:"6f9d0248",4643:"4493604f",4936:"5a14f2e1",4944:"005d6ee4",5152:"478b813b",5874:"37c0934b",6037:"b41f6528",6058:"4a484b02",6949:"8f45dd1f",7205:"d6be740b",7253:"4835a8d1",7303:"089555ff",7372:"fe1368c7",7864:"488c35c5",7968:"b8f057a8",8171:"2c2f99c2",8285:"73b8e935",8388:"924e2889",8401:"17896441",8551:"737f735d",8581:"935f2afb",8630:"d76a2014",8658:"928cf171",8714:"1be78505",8728:"4a58dbad",8786:"a6d4fef1",8888:"f883ce46",9142:"5a6f5286",9194:"8a4a02cb",9496:"21861ca9",9666:"873222c4",9854:"a1b142fd",9990:"aa7cb4d7"}[e]||e)+"."+{483:"46785a03",544:"e3883357",783:"f04741d0",1281:"e4ef8eab",1477:"b918a950",1587:"8aaa99fd",1713:"19b31bbe",1920:"9d7a60c9",2053:"b0c4c1a3",2138:"9918fbb5",2162:"d9823b19",2222:"79089836",2228:"d64b1615",2670:"92c51780",3131:"4804fd4d",3255:"a68193fe",3529:"b5963fc3",3813:"2f721cfa",4238:"1c1dafc5",4504:"c4202493",4518:"ae04fd01",4643:"e9be1e8f",4716:"b772ee59",4936:"b2642400",4944:"92ccc84a",4984:"c71969db",5152:"23c517ee",5874:"7baec574",6037:"d7b294c9",6058:"d845d4c7",6247:"08de451a",6949:"07af8893",7205:"68e056f5",7253:"39b8439d",7303:"64d1d151",7372:"86e8aa6d",7864:"86e49f37",7968:"fa8241fb",7996:"9721dddd",8171:"e93b97e0",8285:"a66da6b2",8388:"250cece6",8401:"32decd36",8551:"332becfd",8581:"77039e4c",8630:"2e32000d",8658:"252165f3",8714:"ed3ca2e0",8728:"197b93f7",8782:"ab4f6f3d",8786:"4c75f824",8888:"893f0124",9142:"1ef827eb",9194:"00fef8e8",9496:"8f168a00",9666:"2b85269d",9854:"d68aef8e",9990:"4f6464a9"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},c="adguard-vpn-knowledge-base:",b.l=(e,a,f,r)=>{if(t[e])t[e].push(a);else{var d,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==c+f){d=u;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",c+f),d.src=e),t[e]=[a];var l=(a,f)=>{d.onerror=d.onload=null,clearTimeout(s);var c=t[e];if(delete t[e],d.parentNode&&d.parentNode.removeChild(d),c&&c.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/KnowledgeBaseVPN/pt-BR/",b.gca=function(e){return e={17896441:"8401",23328989:"1713","7a698379":"483","0bae6d05":"544","42c6c985":"783",a4f5d543:"1281","879833d4":"1477","80bf5b74":"1587",ffb456ce:"1920",ca6b9e1c:"2053","1a4e3797":"2138",b04c3be4:"2162","889a3666":"2222","9be8f9e5":"2228","14ac3653":"3131",adcefc3c:"3255","0571ab56":"4238",c6011c52:"4504","6f9d0248":"4518","4493604f":"4643","5a14f2e1":"4936","005d6ee4":"4944","478b813b":"5152","37c0934b":"5874",b41f6528:"6037","4a484b02":"6058","8f45dd1f":"6949",d6be740b:"7205","4835a8d1":"7253","089555ff":"7303",fe1368c7:"7372","488c35c5":"7864",b8f057a8:"7968","2c2f99c2":"8171","73b8e935":"8285","924e2889":"8388","737f735d":"8551","935f2afb":"8581",d76a2014:"8630","928cf171":"8658","1be78505":"8714","4a58dbad":"8728",a6d4fef1:"8786",f883ce46:"8888","5a6f5286":"9142","8a4a02cb":"9194","21861ca9":"9496","873222c4":"9666",a1b142fd:"9854",aa7cb4d7:"9990"}[e]||e,b.p+b.u(e)},(()=>{var e={5354:0,1869:0};b.f.j=(a,f)=>{var t=b.o(e,a)?e[a]:void 0;if(0!==t)if(t)f.push(t[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var c=new Promise(((f,c)=>t=e[a]=[f,c]));f.push(t[2]=c);var r=b.p+b.u(a),d=new Error;b.l(r,(f=>{if(b.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var c=f&&("load"===f.type?"missing":f.type),r=f&&f.target&&f.target.src;d.message="Loading chunk "+a+" failed.\n("+c+": "+r+")",d.name="ChunkLoadError",d.type=c,d.request=r,t[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,f)=>{var t,c,r=f[0],d=f[1],o=f[2],n=0;if(r.some((a=>0!==e[a]))){for(t in d)b.o(d,t)&&(b.m[t]=d[t]);if(o)var i=o(b)}for(a&&a(f);n<r.length;n++)c=r[n],b.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return b.O(i)},f=self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();