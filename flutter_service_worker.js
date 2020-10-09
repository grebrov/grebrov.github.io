'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "386dd261e643ec87d811b44a1d9e885a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"grebrov.github.io/.git/COMMIT_EDITMSG": "7b5088027e9209563fb557eea0e73354",
"grebrov.github.io/.git/config": "91a025b4b68706fd6fdfb069ad3cb6d5",
"grebrov.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"grebrov.github.io/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"grebrov.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"grebrov.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"grebrov.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"grebrov.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"grebrov.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"grebrov.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"grebrov.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"grebrov.github.io/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"grebrov.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"grebrov.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"grebrov.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"grebrov.github.io/.git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
"grebrov.github.io/.git/index": "eefee8a188c696744ac4b87e4fc6b4fb",
"grebrov.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"grebrov.github.io/.git/logs/HEAD": "08c9a1c9a1cb9ae146cc938729a3d874",
"grebrov.github.io/.git/logs/refs/heads/master": "08c9a1c9a1cb9ae146cc938729a3d874",
"grebrov.github.io/.git/logs/refs/remotes/origin/master": "5debf43d592eb94252193b6610080120",
"grebrov.github.io/.git/objects/03/1c8231ff387209bae511ee207610d2d895d4ff": "7b1fc7f3d6e868ce40a0dc3384e3ad4b",
"grebrov.github.io/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"grebrov.github.io/.git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
"grebrov.github.io/.git/objects/18/566554fe24f329d5d2d9491d60aa4d57431e7c": "6cb95a5cfc609c15943f4634c142c9b5",
"grebrov.github.io/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"grebrov.github.io/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"grebrov.github.io/.git/objects/4f/d6a845119b7e95787da7f228e19f7430f44982": "344a118e8d5e52ef4cd436a50f494e43",
"grebrov.github.io/.git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
"grebrov.github.io/.git/objects/6c/c6d2da796c6961752b91d8d15b75a18c86feea": "873b115cf9926d7a6d22486ce178fbe5",
"grebrov.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"grebrov.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"grebrov.github.io/.git/objects/8d/47cb2c3200a6c1120aa1fea6610173603ca831": "dd9385276af7533112c4eb11b8d89c9b",
"grebrov.github.io/.git/objects/9c/7cfb0512e8077c1e6664f2dba225a46e920199": "d425351c7ab99f3f1fafced70869dd19",
"grebrov.github.io/.git/objects/a2/9db9fc1639d12a883d6874e0f6df1b0e5e32c4": "e35e76264ad7fd1eebab13504d756390",
"grebrov.github.io/.git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
"grebrov.github.io/.git/objects/ad/40b3bee5dec65d0fb8b50e6c914efe5b1a8f3e": "8d7aeb7cca29f3d488dbfa98dc3515df",
"grebrov.github.io/.git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
"grebrov.github.io/.git/objects/b7/063298ffdad315c2f47c703617097ff24704c7": "ebdc05bf7cc2f291ee2149741a42ffe0",
"grebrov.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"grebrov.github.io/.git/objects/ca/4d5e2e767af285cd5b3b1591df12ac8716ad2f": "ce9c398fc71c07bef734235ec58986b1",
"grebrov.github.io/.git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
"grebrov.github.io/.git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
"grebrov.github.io/.git/refs/heads/master": "d369b892a56f91c922789b7edfe4eb70",
"grebrov.github.io/.git/refs/remotes/origin/master": "d369b892a56f91c922789b7edfe4eb70",
"grebrov.github.io/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"grebrov.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"grebrov.github.io/assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"grebrov.github.io/assets/NOTICES": "386dd261e643ec87d811b44a1d9e885a",
"grebrov.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"grebrov.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"grebrov.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"grebrov.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"grebrov.github.io/index.html": "940bdeed7fab6abbc761ef01c1397e32",
"/": "6dea247f5ea2e8ceff5fc7ee9bede2f1",
"grebrov.github.io/main.dart.js": "82dec302d35f42215d001214ef9de1e3",
"grebrov.github.io/manifest.json": "763038ed13c778386e7a761b3da5f544",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "6dea247f5ea2e8ceff5fc7ee9bede2f1",
"main.dart.js": "6a8965f157a22283f684c0cf9d5d7ea4",
"manifest.json": "763038ed13c778386e7a761b3da5f544"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
