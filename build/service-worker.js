"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","6445093d8c650f5a55b7e892da451c5a"],["/static/css/main.350221c8.css","3fc17fbf0260bc5cdc5f2d6ea9ecb9df"],["/static/js/main.766c82d4.js","af9847b89a8b547aefc9ab6a4d898db6"],["/static/media/Avo_Egg_Toast_order.47cec811.svg","47cec811f74a0a1dd776696799bfa7e9"],["/static/media/Avo_Egg__Mushroom_Toast_order.5d471e3a.svg","5d471e3a20d03104b5eb8b69f516bf3f"],["/static/media/Avo_Toast_order.df1a165a.svg","df1a165aa86151f67afcdf68908ddf3e"],["/static/media/Avo__Mushroom_Toast_order.08c7e438.svg","08c7e438a665ddf897af4f72045dcfbf"],["/static/media/avo.8dc4d3e8.svg","8dc4d3e8ae0999ebe41aa3f452fe8f4c"],["/static/media/background.5d704853.svg","5d704853fe3df3d773189ea550c795f0"],["/static/media/compliment_button.850704a4.svg","850704a466062ce5279c06dc169b703d"],["/static/media/customer1_happySVG.1e99f8a7.svg","1e99f8a70b0c562310236a0c40e156d2"],["/static/media/customer1_mood2SVG.b49c6bc2.svg","b49c6bc235b503f26eca11e239d5398b"],["/static/media/customer1_mood3SVG.9c3aaaa3.svg","9c3aaaa3858cee7ab2f86cd77eb29ec2"],["/static/media/customer1_mood4SVG.8259d614.svg","8259d6147ad216cf6af903b805eed019"],["/static/media/customer2_happySVG.b42db56f.svg","b42db56ff401e669fc30f75cf8df1ebc"],["/static/media/customer2_mood2SVG.b42db56f.svg","b42db56ff401e669fc30f75cf8df1ebc"],["/static/media/customer2_mood3SVG.dda7de2b.svg","dda7de2b779ee6c2612a80264e7f2050"],["/static/media/customer2_mood4SVG.43549dd1.svg","43549dd1f730f5aaf226bc1254f66ac2"],["/static/media/customer3_happySVG.7072b855.svg","7072b85579c97bb95af10b694102fa51"],["/static/media/customer3_mood2SVG.525261b1.svg","525261b18c97c3a4d8072178d5eba6b7"],["/static/media/customer3_mood3SVG.1dd3a387.svg","1dd3a387fd5088819bfe1c491bcd6d70"],["/static/media/customer3_mood4SVG.d0b7c03d.svg","d0b7c03dd4ac8fb99d98097c9aa07752"],["/static/media/customer4_happySVG.e8479475.svg","e8479475f2ce6fe715076ec68613d164"],["/static/media/customer4_mood2SVG.44877431.svg","4487743105a20ebd9282091fdbbbf07f"],["/static/media/customer4_mood3SVG.f26b6a30.svg","f26b6a307028aefd3b3e1436db3947f0"],["/static/media/customer4_mood4SVG.e6aabf9c.svg","e6aabf9c1ca335e428c156b5c916f002"],["/static/media/discard_button.5cf3b484.svg","5cf3b48414b471e229f00e3d31bc8813"],["/static/media/egg.fef2a078.svg","fef2a07888f9c529eb6fc7f9b3413c79"],["/static/media/intro-image.847dd19d.svg","847dd19d7cbdd4c41a47b97918d45ba5"],["/static/media/kitchen.53920d44.svg","53920d4471cc7053b92aa1022987daec"],["/static/media/mushroom.8381b60c.svg","8381b60c4c6d29b980d3864f77c9f34c"],["/static/media/smear_button.35160b1f.svg","35160b1f5fc13170d2c8c53029e0e5b9"],["/static/media/toast.0c597769.svg","0c5977693ba1291fea5c3f8481bdd769"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),s=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),t=urlsToCacheKeys.has(a));var s="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(s,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});