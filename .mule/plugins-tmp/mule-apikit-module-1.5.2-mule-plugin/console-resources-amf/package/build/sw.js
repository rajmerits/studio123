/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "api-console-f1ee5566.js",
    "revision": "dbed5ee88465c51bc4df53943d4bdc8c"
  },
  {
    "url": "index.html",
    "revision": "a3522b509581a8a3d6c0ea55b4d46137"
  },
  {
    "url": "legacy/api-console-31ff3c23.js",
    "revision": "e800c6b8a62980a936ffbeb809c59c67"
  },
  {
    "url": "polyfills/core-js.8ed6ee7a4c2f9817dee3998dcf3d2721.js",
    "revision": "333f40bc4ef8531db641f6a91976f887"
  },
  {
    "url": "polyfills/custom-elements-es5-adapter.84b300ee818dce8b351c7cc7c100bcf7.js",
    "revision": "cff507bc95ad1d6bf1a415cc9c8852b0"
  },
  {
    "url": "polyfills/dynamic-import.991be47e17117abb5eb15f5254ad3869.js",
    "revision": "08b86a7f56c6f0d65265654299b16d74"
  },
  {
    "url": "polyfills/fetch.974faa72903c09dc57578328cfaf7687.js",
    "revision": "8c3c90153487a0428da3f0682332ab51"
  },
  {
    "url": "polyfills/regenerator-runtime.00d94cc6e1d36f22abd18835b91f49dc.js",
    "revision": "312761a785d67a66e72cb3a9fb37aac8"
  },
  {
    "url": "polyfills/systemjs.48dccaa267c838d0ca84ae7a655f0164.js",
    "revision": "52c8b1bf1a8a8a5e830a88bf4bf78665"
  },
  {
    "url": "polyfills/webcomponents.f2956532e796a677ef87a9cb17f5f9fc.js",
    "revision": "939ef49522c9d6762c23f0a3fb10e87b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
