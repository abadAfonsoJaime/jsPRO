importScripts('../node_modules/sw-toolbox/sw-toolbox.js');

const myCache = {
    'static': 'static-v5',
    'dynamic': 'dynamic-v5'
};

// Instalación
self.addEventListener(
    'install',
    function (ev) {
        console.log(
            'SW ' +myCache.static+ ' instalado a las ',
            new Date().toLocaleTimeString()
        );
    }
);

toolbox.router.get(
    '/miweb/*',
    toolbox.cacheFirst,
    {
        cache: {
            name: myCache.static,
            maxAgeSeconds: 60 * 60 * 24 * 365 // 1 año
        }
    }
);
// En IndexedDB se pueden ver los elementos cacheados con su tiempo de expiración

toolbox.router.get(
    '/directorio2/*',
    toolbox.networFirst,
    {
        cache: {
            name: myCache.dynamic,
            maxEntries: 50
        }
    }
); // Solamente guarda 50 elementos

toolbox.router.get(
    '/miweb/*',
    toolbox.networFirst,
    {
        networkTimeotSeconds: 2, // Si la red tarda más de 2 segundo en contestar --> cache
        cache: {
            name: myCache.dynamic,
            maxEntries: 5
        }
    }
); // Solamente espera a la red durante 2 segundos


// Función personalizada de respuesta: networkFirst + contenido offline si tampoco está en la cache
toolbox.router.get(
    '/miweb/*',
    function (request, values, options) {
        return toolbox.networFirst( request, values, options )
        .catch( function (error) {
            return caches.match( new Request('contenido_offline.html') )
        });
    },
    {
        networkTimeotSeconds: 1,
        cache: {
            name: myCache.dynamic,
            maxEntries: 5
        }
    }
); 
