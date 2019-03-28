/**
 * Se busca el recurso en la red y se cachea. Solo se busca en cache cuando falla la red.
 * Este patrón se puede utilizar cuando queremos ofrecer al usuario siempre el contenido más actualizado posible,
 * pero que en caso de que se quede sin cobertura pueda seguir utilizando la aplicación.
 */

event.respondWith(
    function () {
        fetch(event.request)
        .then(
            fetchResponse => {
                caches.open('v1').then(
                    cache => {
                        if (!fetchResponse.ok) {
                            return cache.match(event.request);
                        } else {
                            caches.put(
                                event.request,
                                fetchResponse.clone()
                            );
                            return fetchResponse;
                        }
                    }
                );
            }
        );
    }
);