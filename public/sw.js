// Service Worker - 离线缓存和性能优化
const CACHE_NAME = 'c-trainer-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// 静态资源缓存
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/vite.svg',
];

// 安装事件 - 缓存静态资源
self.addEventListener('install', (event) => {
  console.log('[SW] 安装 Service Worker');
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('[SW] 缓存静态资源');
      return cache.addAll(STATIC_ASSETS);
    }).catch((error) => {
      console.log('[SW] 缓存失败:', error);
    })
  );
  // 跳过等待，立即激活
  self.skipWaiting();
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', (event) => {
  console.log('[SW] 激活 Service Worker');
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
          .map((key) => {
            console.log('[SW] 删除旧缓存:', key);
            return caches.delete(key);
          })
      );
    }).then(() => {
      // 接管所有页面
      return self.clients.claim();
    })
  );
});

// 获取事件 - 网络优先，回退到缓存
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // 仅处理同源请求
  if (url.origin !== location.origin) {
    return;
  }

  // HTML 文件 - 网络优先
  if (request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // 克隆响应，一份用于缓存
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // 网络失败，返回缓存
          return caches.match(request);
        })
    );
    return;
  }

  // 静态资源 - 缓存优先
  if (
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'image' ||
    request.destination === 'font'
  ) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          // 后台更新缓存
          fetch(request).then((response) => {
            if (response.ok) {
              caches.open(DYNAMIC_CACHE).then((cache) => {
                cache.put(request, response);
              });
            }
          }).catch(() => {});
          return cachedResponse;
        }
        return fetch(request);
      }).catch(() => {
        // 离线时返回默认资源
        if (request.destination === 'image') {
          return caches.match('/vite.svg');
        }
      })
    );
    return;
  }

  // API 请求 - 网络优先
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
    return;
  }

  // 其他请求 - 网络优先
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(request);
      })
  );
});

// 消息处理
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
