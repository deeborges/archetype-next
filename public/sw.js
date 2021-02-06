if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js');
      let s = Promise.resolve();
      return (
        n[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const n = document.createElement('script');
              (n.src = e), document.head.appendChild(n), (n.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!n[e]) throw new Error(`Module ${e} didn’t register its module`);
          return n[e];
        })
      );
    },
    s = (s, n) => {
      Promise.all(s.map(e)).then((e) => n(1 === e.length ? e[0] : e));
    },
    n = { require: Promise.resolve(s) };
  self.define = (s, t, r) => {
    n[s] ||
      (n[s] = Promise.resolve().then(() => {
        let n = {};
        const a = { uri: location.origin + s.slice(1) };
        return Promise.all(
          t.map((s) => {
            switch (s) {
              case 'exports':
                return n;
              case 'module':
                return a;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = r(...e);
          return n.default || (n.default = s), n;
        });
      }));
  };
}
define('./sw.js', ['./workbox-1ca495a9'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/57-xF9bwHMV5LvjeBqcnx/_buildManifest.js',
          revision: '57-xF9bwHMV5LvjeBqcnx'
        },
        {
          url: '/_next/static/57-xF9bwHMV5LvjeBqcnx/_ssgManifest.js',
          revision: '57-xF9bwHMV5LvjeBqcnx'
        },
        {
          url:
            '/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.4f28a96f7c001568836d.js',
          revision: '57-xF9bwHMV5LvjeBqcnx'
        },
        {
          url:
            '/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.e6e6645d870af7af0640.js',
          revision: '57-xF9bwHMV5LvjeBqcnx'
        },
        {
          url: '/_next/static/chunks/framework.abffcf18e526b7c0dbcd.js',
          revision: '57-xF9bwHMV5LvjeBqcnx'
        },
        {
          url: '/_next/static/chunks/main-6e1aa8e8e3a4522271a3.js',
          revision: '57-xF9bwHMV5LvjeBqcnx'
        },
        {
          url: '/_next/static/chunks/pages/_app-4207c12c92db9511836c.js',
          revision: '57-xF9bwHMV5LvjeBqcnx'
        },
        {
          url: '/_next/static/chunks/pages/_error-e8154f3c94ccff0fb9fb.js',
          revision: '57-xF9bwHMV5LvjeBqcnx'
        },
        {
          url: '/_next/static/chunks/pages/index-869bbf8598d65e6d1759.js',
          revision: '57-xF9bwHMV5LvjeBqcnx'
        },
        {
          url: '/_next/static/chunks/polyfills-4f14e8c8ea1352d3ef0d.js',
          revision: '57-xF9bwHMV5LvjeBqcnx'
        },
        {
          url: '/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js',
          revision: '57-xF9bwHMV5LvjeBqcnx'
        },
        { url: '/assets/eu.png', revision: 'fa7539983bc5e827f40882c310d8aa0a' },
        {
          url: '/assets/favicon.ico',
          revision: '71b87a1fdc511dbddb7e9fd1bc943276'
        },
        {
          url: '/assets/logo.png',
          revision: 'd2de00e5f4bc308bdd74d6ab7ffd1f97'
        },
        { url: '/manifest.json', revision: 'f10a4df26f68872a139610870c5d8902' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    );
});
