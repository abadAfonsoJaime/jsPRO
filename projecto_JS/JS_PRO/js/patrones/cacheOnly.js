/**
 * Siempre se buscan los recursos en la caché. Si no está en la caché, no se sirve el recurso. 
 * Este patrón se puede utilizar, por ejemplo, en situaciones de nivel crítico de batería. 
 */

event.respondWith(
    caches.match( event.request )
); 