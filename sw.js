if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let r={};const d=e=>n(e,s),l={module:{uri:s},exports:r,require:d};i[s]=Promise.all(c.map((e=>l[e]||d(e)))).then((e=>(o(...e),r)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.8ff861a8.js",revision:null},{url:"assets/index.d840a6e7.css",revision:null},{url:"index.html",revision:"c042734b9bbd5f702804b810b20d4229"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"0598714cc601103ca238b3acb87acfd7"},{url:"apple-touch-icon.png",revision:"e36501de2beb7ec0216c16a0290d771a"},{url:"icons/icon-48x48.png",revision:"10d437ef9c16335bc74165e3ebf2b87e"},{url:"icons/icon-72x72.png",revision:"aa23c71c40bb5694cd91641e88b43eda"},{url:"icons/icon-96x96.png",revision:"fc1f050f0d524bac8765bbd753ffa0f1"},{url:"icons/icon-128x128.png",revision:"889a35b4ed04e8e646d6cf2d01f562a5"},{url:"icons/icon-144x144.png",revision:"5466bddc5911861331aa9fe0fcfe9018"},{url:"icons/icon-152x152.png",revision:"64a19664a4a443e33eb645e4eee1c380"},{url:"icons/icon-192x192.png",revision:"c378052e4c44bcfde4d7c4cba35eddb0"},{url:"icons/icon-384x384.png",revision:"a3f72617d62823926699de6541175517"},{url:"icons/icon-512x512.png",revision:"aea48bd7492da24881731770d42ec352"},{url:"manifest.webmanifest",revision:"9908fd64de116d47dd191566ed9b7b6d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));