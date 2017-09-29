importScripts('workbox-sw.prod.v2.0.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "build/forminputbase.js",
    "revision": "06dd9e3bf3751bc31143dfaa0eef7730"
  },
  {
    "url": "build/forminputbase.registry.json",
    "revision": "0cd31c213f607ac0b04e3670a42c0c3a"
  },
  {
    "url": "build/forminputbase/9gxjmigk.js",
    "revision": "5011771831fba387582c50d99b7d634c"
  },
  {
    "url": "build/forminputbase/forminputbase.hzldpbl7.js",
    "revision": "b10c29f6e6a7e7ee1c64b80c3ed67729"
  },
  {
    "url": "build/forminputbase/forminputbase.jrmprzsd.pf.js",
    "revision": "833b826f96d371c6dbce903600b024c7"
  },
  {
    "url": "build/forminputbase/g4rb5zl8.css",
    "revision": "50cdc862c11c7be05c0ab7f15ae9d24c"
  },
  {
    "url": "index.html",
    "revision": "173bd486c4d9c7bb6b3fab6a08bfca1a"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
