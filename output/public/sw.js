if(!self.define){let e,s={};const o=(o,n)=>(o=new URL(o+".js",n).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(n,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const a=e=>o(e,r),f={module:{uri:r},exports:t,require:a};s[r]=Promise.all(n.map((e=>f[e]||a(e)))).then((e=>(i(...e),t)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_payload.json",revision:"35586a193bc871c5a9570d34b392219b"},{url:"cadastro_despesas/_payload.json",revision:"312b33aff3ea125a33163f260f542ad0"},{url:"login/_payload.json",revision:"312b33aff3ea125a33163f260f542ad0"},{url:"manifest.webmanifest",revision:"65849feb831652846c16306d5339059d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
