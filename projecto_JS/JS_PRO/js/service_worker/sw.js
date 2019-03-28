var version = 1;

// Instalación
self.addEventListener(
    'install',
    function (ev) {
        console.log('SW ' + version + ' instalado a las ', new Date().toLocaleTimeString() );
    }
);

// Activación
self.addEventListener(
    'activate',
    function(ev) {
        console.log('SW ' + version + ' activado a las ', new Date().toLocaleTimeString() );
    }
);

// Fetch
self.addEventListener(
    'fetch',
    function(ev) {
        if (!navigator.onLine) {
            evt.respondWith(
                new Response(
                    '<h1>Estás sin conexión</h1>',
                    {headers: { 'Content-Type': 'text/html' }}
                )
            );
        } else {
            console.log(ev.request.url);
            ev.respondWith( fetch(ev.request) );
        }
    }
);
