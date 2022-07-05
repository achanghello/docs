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
    "url": "404.html",
    "revision": "4c5a1f6add43f5a5fc32ef5c77523f98"
  },
  {
    "url": "about.html",
    "revision": "4fd950748ea5ae0e13be4dcd5f171d0f"
  },
  {
    "url": "assets/css/0.styles.3e6ec64c.css",
    "revision": "61b96c233d997966598a7ac6b21274ea"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.ed86a540.js",
    "revision": "852158f2ff58064874c218f2a1d74b99"
  },
  {
    "url": "assets/js/10.5ec83253.js",
    "revision": "2bb91b5a4a1eec14509b8c3b479db1c6"
  },
  {
    "url": "assets/js/11.9850cf49.js",
    "revision": "a5b718bc9839387851a470f4f2c05732"
  },
  {
    "url": "assets/js/12.78eb111e.js",
    "revision": "84694eddf5dcfb3bba45d569fef2deee"
  },
  {
    "url": "assets/js/13.f9de7c36.js",
    "revision": "ed542413898f4f8623b09c5fef994071"
  },
  {
    "url": "assets/js/14.0325868c.js",
    "revision": "65f0819d1b4b2f1ed195d7f415cbc4a8"
  },
  {
    "url": "assets/js/15.0610625f.js",
    "revision": "3b9cea4a98d6cfba5e5625765e148947"
  },
  {
    "url": "assets/js/16.d3476074.js",
    "revision": "cd18da820b836a0855521bad3879539e"
  },
  {
    "url": "assets/js/17.a2962d6b.js",
    "revision": "02cb2e7f2b47f45952277d7e2ca70ee9"
  },
  {
    "url": "assets/js/18.c0b2ed25.js",
    "revision": "54fb614e5a259280fda7101cdf24e60a"
  },
  {
    "url": "assets/js/19.87341fd9.js",
    "revision": "45005fa639876ec9badfcf4e3182db25"
  },
  {
    "url": "assets/js/20.a8c1684b.js",
    "revision": "54e36aa3c68b82217e6a092a42796e4e"
  },
  {
    "url": "assets/js/21.c15a3841.js",
    "revision": "650d7033755093b64b91eb67e5afc227"
  },
  {
    "url": "assets/js/22.82b3d793.js",
    "revision": "b0b65878f89eb185976c7bfcacdb00d9"
  },
  {
    "url": "assets/js/3.9a2947cf.js",
    "revision": "6cd1cdfaa062354be9187bec3bce3309"
  },
  {
    "url": "assets/js/4.91133686.js",
    "revision": "0e1e35a042d84d517297e7cd6d50c145"
  },
  {
    "url": "assets/js/5.6d738c6a.js",
    "revision": "4ccd6e5637a78c98cb13e4a1d0bf4b8f"
  },
  {
    "url": "assets/js/6.78f6e161.js",
    "revision": "6b753f882210c98849e5e1167cf65c6c"
  },
  {
    "url": "assets/js/7.fd04089c.js",
    "revision": "46e3a89470b4d93b0b7c73631ba85ce6"
  },
  {
    "url": "assets/js/8.853991a5.js",
    "revision": "e940fb10def6012f124243706db1921a"
  },
  {
    "url": "assets/js/9.d3475307.js",
    "revision": "21258570ac46ebbb8fbed1825b512efa"
  },
  {
    "url": "assets/js/app.cb2bfe71.js",
    "revision": "a068185a1b5e21f32c6375e8871dd3dc"
  },
  {
    "url": "chang.html",
    "revision": "7a0ca9c8708f4b3e22db6c0a8787cfb2"
  },
  {
    "url": "countup.html",
    "revision": "01bc776d22eb107b966cd095d6b1b6b8"
  },
  {
    "url": "css/css-a.html",
    "revision": "ba24dd2e820c454f6524b0db71fe0596"
  },
  {
    "url": "css/css-b.html",
    "revision": "6d2a0d9c4f6acf51f23d1b820dbc6cd2"
  },
  {
    "url": "css/index.html",
    "revision": "4cad29598a8a70055212d6974e9a34e3"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "edc5f85d83e2c1fe7d084d142164feb5"
  },
  {
    "url": "language/chinese/index.html",
    "revision": "000ec29661074a895ff031e24506fe59"
  },
  {
    "url": "language/index.html",
    "revision": "5bd35c5152234c65d20545096b6a84fe"
  },
  {
    "url": "language/japanese/index.html",
    "revision": "3dd883bad4f1db4c1c81aee476784997"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
