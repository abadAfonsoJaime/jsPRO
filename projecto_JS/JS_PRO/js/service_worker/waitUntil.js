// Instalación
self.addEventListener(
    'install',
    function(ev) {
        ev.waitUntil(
            // Debemos devolver una promesa para instalar el SW
            // Típico cachear una página muy estática mientras tenemos conexión
        );
    }
);

// Activación
self.addEventListener(
    'activate',
    function(ev) {
        ev.waitUntil(
            // Debemos devolver una promesa para activar el SW
        );
    }
);

// Uso: responder con la request original
self.addEventListener(
    'fetch',
    function(ev) {
        ev.respondWith( fetch(ev.request) )
    }
);