/**
 * Siempre se buscan los recursos en la caché. Si no está en la caché, no se sirve el recurso.
 *  Este patrón se puede utilizar, en situaciones donde el contenido raramente cambie. 
 */

event.respondWith(
    function() {
        caches.match( event.request )
        .then(
            cacheResponse => {
                if (cacheResponse) {
                    return cacheResponse;
                } else {
                    return fetch( event.request ) // no devuelvo simplemente la respuesta de la petición
                    .then( // aprovecho para abrir la cache y guardar el recurso pedido
                        fetchResponse => {
                            return caches.open('v1').then(
                                cache => {
                                    caches.put(
                                        event.request,
                                        fetchResponse.clone()
                                    )
                                    .then( 
                                        fetchResponse => { return fetchResponse; }
                                    )
                                }
                            );
                        }
                    );
                }
            }
        );
    }
);