/**
 * Significa que no se cachea ningún recurso, siempre se buscan los recursos en la red 
 * y si la red falla, la petición falla. 
 */
event.respondWith(
    fetch( event.request )
);