if(!self.define){let s,l={};const e=(e,i)=>(e=new URL(e+".js",i).href,l[e]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=l,document.head.appendChild(s)}else s=e,importScripts(e),l()})).then((()=>{let s=l[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let u={};const c=s=>e(s,r),o={module:{uri:r},exports:u,require:c};l[r]=Promise.all(i.map((s=>o[s]||c(s)))).then((s=>(n(...s),u)))}}define(["./workbox-2d118ab0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"tgw-blog"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/141.ef0e6af5.css",revision:null},{url:"/css/199.bfdc5ed3.css",revision:null},{url:"/css/455.bb685335.css",revision:null},{url:"/css/463.698b81e0.css",revision:null},{url:"/css/631.532a89f2.css",revision:null},{url:"/css/775.42defb4d.css",revision:null},{url:"/css/89.dd08aeb9.css",revision:null},{url:"/css/app.fbf68c78.css",revision:null},{url:"/css/chunk-vendors.79d22d4b.css",revision:null},{url:"/img/bgImgIndex.0044b811.jpg",revision:null},{url:"/img/cardHead.bf11dde0.png",revision:null},{url:"/img/e.c6330f03.png",revision:null},{url:"/img/front.686f40ca.png",revision:null},{url:"/img/ggg.fe4bc706.png",revision:null},{url:"/img/img.54010a5f.png",revision:null},{url:"/index.html",revision:"38dfd8748cde95776084ac0e57f7d8ca"},{url:"/js/141.9ff5ad1a.js",revision:null},{url:"/js/199.7016c8d4.js",revision:null},{url:"/js/242.b46fe54f.js",revision:null},{url:"/js/455.930db3fc.js",revision:null},{url:"/js/463.79085d7f.js",revision:null},{url:"/js/631.7badf6dc.js",revision:null},{url:"/js/775.0474abfc.js",revision:null},{url:"/js/89.3cd498c9.js",revision:null},{url:"/js/app.3b7ec4c4.js",revision:null},{url:"/manifest.json",revision:"b4a072a0d3f9955ab261b913cc11a1e7"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
