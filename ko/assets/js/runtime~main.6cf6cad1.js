(()=>{"use strict";var e,a,f,t,r,c={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var f=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(f.exports,f,f.exports,b),f.loaded=!0,f.exports}b.m=c,b.c=d,b.amdO={},e=[],b.O=(a,f,t,r)=>{if(!f){var c=1/0;for(i=0;i<e.length;i++){f=e[i][0],t=e[i][1],r=e[i][2];for(var d=!0,o=0;o<f.length;o++)(!1&r||c>=r)&&Object.keys(b.O).every((e=>b.O[e](f[o])))?f.splice(o--,1):(d=!1,r<c&&(c=r));if(d){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[f,t,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var c={};a=a||[null,f({}),f([]),f(f)];for(var d=2&t&&e;"object"==typeof d&&!~a.indexOf(d);d=f(d))Object.getOwnPropertyNames(d).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,b.d(r,c),r},b.d=(e,a)=>{for(var f in a)b.o(a,f)&&!b.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,f)=>(b.f[f](e,a),a)),[])),b.u=e=>"assets/js/"+({195:"ac2b5d07",304:"48de4cf3",832:"0f7f67e0",878:"08802029",1002:"6ab309ef",1157:"8c8173c3",1256:"92968f9f",1281:"a4f5d543",1362:"7172306a",1442:"d78f6e61",1450:"796db207",1527:"733bebac",1642:"b5299187",1649:"e7a06924",2039:"b82d675f",2138:"1a4e3797",2147:"cb4ff146",2162:"b04c3be4",3046:"87c976b7",3115:"d7329e59",4637:"836aa1c1",4729:"88f4a476",4910:"775c7c8a",4924:"9c8a6e78",5156:"241e48fe",5200:"942ee017",5661:"4f808c03",5844:"f7ea4cd3",5895:"9f7a5db0",6151:"c5613ac6",6326:"96eb956e",6487:"53a60c95",6497:"1c4088fd",7050:"00b5ecb0",7652:"dd8f32b8",7663:"2a20a118",7795:"ac37d0a5",7979:"c6437261",8069:"54b4c9e4",8401:"17896441",8428:"babcf7c5",8581:"935f2afb",8610:"14488b9c",8621:"548e60d6",8710:"8ae68922",8714:"1be78505",9029:"a2975101",9464:"f1a4f00a",9520:"91108998",9841:"8e214956"}[e]||e)+"."+{195:"eb6017fc",304:"63625d7d",832:"0fe02262",878:"f1b5c638",1002:"44bf88d5",1157:"7a14c4df",1256:"b42ac5aa",1281:"e4ef8eab",1362:"90356891",1442:"58575b25",1450:"75513e8c",1527:"6bdd6c6f",1642:"046a6eba",1649:"313559bd",2039:"829fab96",2138:"9918fbb5",2147:"ddffa8c8",2162:"d9823b19",2670:"92c51780",3046:"9e142b4d",3115:"6f3bd4eb",3529:"b5963fc3",3813:"2f721cfa",4637:"8e23f720",4716:"b772ee59",4729:"78f66019",4910:"c38b781f",4924:"fd215ac6",4984:"c71969db",5156:"bbfae665",5200:"f417566a",5661:"63de385b",5844:"a95dc5b8",5895:"076c0696",6151:"1bd285c2",6247:"08de451a",6326:"b8bd76c2",6487:"e2ca69e4",6497:"ccb3eb0b",7050:"f0265adb",7652:"aa5c7165",7663:"3d506efb",7795:"073ac57a",7979:"ecac3ef3",7996:"9721dddd",8069:"1ffbbc69",8401:"32decd36",8428:"610ecab3",8581:"78d1170c",8610:"9fd00fe6",8621:"c05be8cf",8710:"bd45982a",8714:"ed3ca2e0",8782:"ab4f6f3d",9029:"f616c520",9464:"5092ceb9",9520:"2d0154c8",9841:"6668e5a0"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},r="adguard-vpn-knowledge-base:",b.l=(e,a,f,c)=>{if(t[e])t[e].push(a);else{var d,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+f){d=u;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",r+f),d.src=e),t[e]=[a];var l=(a,f)=>{d.onerror=d.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/KnowledgeBaseVPN/ko/",b.gca=function(e){return e={17896441:"8401",91108998:"9520",ac2b5d07:"195","48de4cf3":"304","0f7f67e0":"832","08802029":"878","6ab309ef":"1002","8c8173c3":"1157","92968f9f":"1256",a4f5d543:"1281","7172306a":"1362",d78f6e61:"1442","796db207":"1450","733bebac":"1527",b5299187:"1642",e7a06924:"1649",b82d675f:"2039","1a4e3797":"2138",cb4ff146:"2147",b04c3be4:"2162","87c976b7":"3046",d7329e59:"3115","836aa1c1":"4637","88f4a476":"4729","775c7c8a":"4910","9c8a6e78":"4924","241e48fe":"5156","942ee017":"5200","4f808c03":"5661",f7ea4cd3:"5844","9f7a5db0":"5895",c5613ac6:"6151","96eb956e":"6326","53a60c95":"6487","1c4088fd":"6497","00b5ecb0":"7050",dd8f32b8:"7652","2a20a118":"7663",ac37d0a5:"7795",c6437261:"7979","54b4c9e4":"8069",babcf7c5:"8428","935f2afb":"8581","14488b9c":"8610","548e60d6":"8621","8ae68922":"8710","1be78505":"8714",a2975101:"9029",f1a4f00a:"9464","8e214956":"9841"}[e]||e,b.p+b.u(e)},(()=>{var e={5354:0,1869:0};b.f.j=(a,f)=>{var t=b.o(e,a)?e[a]:void 0;if(0!==t)if(t)f.push(t[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var r=new Promise(((f,r)=>t=e[a]=[f,r]));f.push(t[2]=r);var c=b.p+b.u(a),d=new Error;b.l(c,(f=>{if(b.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var r=f&&("load"===f.type?"missing":f.type),c=f&&f.target&&f.target.src;d.message="Loading chunk "+a+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,t[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,f)=>{var t,r,c=f[0],d=f[1],o=f[2],n=0;if(c.some((a=>0!==e[a]))){for(t in d)b.o(d,t)&&(b.m[t]=d[t]);if(o)var i=o(b)}for(a&&a(f);n<c.length;n++)r=c[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},f=self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();