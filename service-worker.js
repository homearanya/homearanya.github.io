"use strict";var precacheConfig=[["/index.html","bad29e1e3f250387974b65cfb8ca3cfa"],["/static/css/main.8381c6cf.css","caa7e1492b2e30bfed3d5e225a91e39e"],["/static/js/main.18de4aae.js","54d88d10b276d5eac970279b4510c4ff"],["/static/media/40-of-online-groceries-in-uk-made-on-mobile258-min.4ff5e45e.png","4ff5e45e33eb252d75da90b36da8219e"],["/static/media/Newsitem-Checkout-environment-to-enjoy-min.e14f9422.jpg","e14f9422c0ce3e67c5eab936b1526685"],["/static/media/Our People-min.7645ccfa.jpg","7645ccfaf93b519e735d12fa30b7c7ff"],["/static/media/WideWorldImportersLogo.ce1a1a27.png","ce1a1a27e644acc4fb5a1607822d04aa"],["/static/media/ionicons.05acfdb5.woff","05acfdb568b3df49ad31355b19495d4a"],["/static/media/ionicons.24712f6c.ttf","24712f6c47821394fba7942fbb52c3b2"],["/static/media/ionicons.2c2ae068.eot","2c2ae068be3b089e0a5b59abb1831550"],["/static/media/ionicons.621bd386.svg","621bd386841f74e0053cb8e67f8a0604"],["/static/media/shoppingcart.b4d9bc99.svg","b4d9bc99d9e77e9d7d8aa6e7b4041580"],["/static/media/values2016_enweb_0-min.98f2fd89.png","98f2fd8917ab6b76293e6c28a5e7f2f2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});