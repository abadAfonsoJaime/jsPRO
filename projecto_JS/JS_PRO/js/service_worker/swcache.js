var nombreCache = 'v2';

// Instalación
self.addEventListener(
    'install',
    function (ev) {
        ev.waitUntil(
            caches.open(nombreCache) // Este es el objeto CacheStorage
            .then(
                function (cache) { 
                    return cache.addAll( // Este es el objeto Cache
                        ['sw.html', 'sw.js', 'sw_register.js']
                    );
                }
            )
        );
    }
);

// Activación --> borrar los objetos cache antiguos para que no se acumulen
self.addEventListener(
    'activate',
    function (ev) {
        ev.waitUntil(
            caches.keys()
            .then(
                function (keys) {
                    return Promise.all(
                        keys.filter( function(key) {return key !==nombreCache;} )
                        .map( function(key) {return caches.delete(key);} )
                    );
                }
            )
        );
    }
);


// Capturar las peticiones y responder con la caché cuando esté offline
self.addEvenetListener(
    'fetch',
    function (ev) {
        ev.respondWith(
            caches.match(ev.request)
            .then(
                function (response) {
                    if (response) {
                        return response;
                    } if (!navigator.onLine) {
                        return caches.match( new Request('paginaoffline.html') );
                    }
                    return fetch(ev.request);
                }
            )
        );
    }
);