(()=>{"use strict";var e,a,f,t,r,c={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var f=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(f.exports,f,f.exports,b),f.loaded=!0,f.exports}b.m=c,b.c=d,b.amdO={},e=[],b.O=(a,f,t,r)=>{if(!f){var c=1/0;for(i=0;i<e.length;i++){f=e[i][0],t=e[i][1],r=e[i][2];for(var d=!0,o=0;o<f.length;o++)(!1&r||c>=r)&&Object.keys(b.O).every((e=>b.O[e](f[o])))?f.splice(o--,1):(d=!1,r<c&&(c=r));if(d){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[f,t,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var c={};a=a||[null,f({}),f([]),f(f)];for(var d=2&t&&e;"object"==typeof d&&!~a.indexOf(d);d=f(d))Object.getOwnPropertyNames(d).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,b.d(r,c),r},b.d=(e,a)=>{for(var f in a)b.o(a,f)&&!b.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,f)=>(b.f[f](e,a),a)),[])),b.u=e=>"assets/js/"+({259:"9c90a552",408:"55b69ed7",743:"8fa121fa",1133:"37651a49",1281:"a4f5d543",1431:"85c9817a",1481:"c750623b",1521:"91fff9f1",1828:"1a7e4f3f",1923:"8440c643",2138:"1a4e3797",2162:"b04c3be4",2215:"c89e42cd",2408:"8045f9ef",2559:"72a36643",3051:"5a93f81c",3660:"f28feceb",3706:"cbd5a96c",3976:"0e384e19",4459:"8c6151f4",4530:"5219eeb2",4543:"2417259f",4655:"62185376",4803:"4fd3f685",4969:"54efd14e",5127:"4ee798ea",5147:"642cda4f",5259:"5b46e413",5440:"4c00ce6f",5486:"f897b711",6353:"f34af83a",6469:"43bf9bbf",7005:"333f7217",7382:"4d67859f",7814:"254c7f86",8188:"f4754e62",8346:"da8d71d8",8401:"17896441",8551:"737f735d",8581:"935f2afb",8586:"da57a90b",8630:"d76a2014",8714:"1be78505",8728:"4a58dbad",8879:"3eb6a119",9194:"8a4a02cb",9223:"585b0280",9496:"21861ca9",9527:"0528870d",9556:"c726af22"}[e]||e)+"."+{259:"1c4c71e5",408:"9d525a5d",743:"de39d441",1133:"31b02396",1281:"e4ef8eab",1431:"fb3d4297",1481:"807f011f",1521:"541597cd",1828:"49207aaf",1923:"d071ee1b",2138:"9918fbb5",2162:"d9823b19",2215:"666783e7",2408:"42f05100",2559:"7dca83bf",2670:"92c51780",3051:"329eb0fa",3529:"b5963fc3",3660:"966d8d5e",3706:"6aa595fe",3813:"2f721cfa",3976:"cd76b90d",4459:"c9b94c76",4530:"b8daaad6",4543:"94c17004",4655:"263a1b00",4716:"b772ee59",4803:"1b9c50d6",4969:"b797bd42",4984:"c71969db",5127:"aac394de",5147:"2dfec31e",5259:"75a6c1db",5440:"8712a916",5486:"4a67a38c",6247:"08de451a",6353:"9a267984",6469:"a46e71dc",7005:"6a96d5f7",7382:"db6f0ded",7814:"1411ca13",7996:"9721dddd",8188:"a576e036",8346:"b1f491a5",8401:"32decd36",8551:"5ffcb649",8581:"f3354398",8586:"342207a4",8630:"f81dfff5",8714:"ed3ca2e0",8728:"cbf329ab",8782:"ab4f6f3d",8879:"452bcfe5",9194:"4566e114",9223:"ac37e773",9496:"7f69336a",9527:"8230f6e6",9556:"a18ea45b"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},r="adguard-vpn-knowledge-base:",b.l=(e,a,f,c)=>{if(t[e])t[e].push(a);else{var d,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+f){d=u;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",r+f),d.src=e),t[e]=[a];var l=(a,f)=>{d.onerror=d.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/KnowledgeBaseVPN/",b.gca=function(e){return e={17896441:"8401",62185376:"4655","9c90a552":"259","55b69ed7":"408","8fa121fa":"743","37651a49":"1133",a4f5d543:"1281","85c9817a":"1431",c750623b:"1481","91fff9f1":"1521","1a7e4f3f":"1828","8440c643":"1923","1a4e3797":"2138",b04c3be4:"2162",c89e42cd:"2215","8045f9ef":"2408","72a36643":"2559","5a93f81c":"3051",f28feceb:"3660",cbd5a96c:"3706","0e384e19":"3976","8c6151f4":"4459","5219eeb2":"4530","2417259f":"4543","4fd3f685":"4803","54efd14e":"4969","4ee798ea":"5127","642cda4f":"5147","5b46e413":"5259","4c00ce6f":"5440",f897b711:"5486",f34af83a:"6353","43bf9bbf":"6469","333f7217":"7005","4d67859f":"7382","254c7f86":"7814",f4754e62:"8188",da8d71d8:"8346","737f735d":"8551","935f2afb":"8581",da57a90b:"8586",d76a2014:"8630","1be78505":"8714","4a58dbad":"8728","3eb6a119":"8879","8a4a02cb":"9194","585b0280":"9223","21861ca9":"9496","0528870d":"9527",c726af22:"9556"}[e]||e,b.p+b.u(e)},(()=>{var e={5354:0,1869:0};b.f.j=(a,f)=>{var t=b.o(e,a)?e[a]:void 0;if(0!==t)if(t)f.push(t[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var r=new Promise(((f,r)=>t=e[a]=[f,r]));f.push(t[2]=r);var c=b.p+b.u(a),d=new Error;b.l(c,(f=>{if(b.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var r=f&&("load"===f.type?"missing":f.type),c=f&&f.target&&f.target.src;d.message="Loading chunk "+a+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,t[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,f)=>{var t,r,c=f[0],d=f[1],o=f[2],n=0;if(c.some((a=>0!==e[a]))){for(t in d)b.o(d,t)&&(b.m[t]=d[t]);if(o)var i=o(b)}for(a&&a(f);n<c.length;n++)r=c[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},f=self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();