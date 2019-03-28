/* 
    * navigator.serviceWorker.register( ‘sw.js’, { scope : ‘/dir’ } ) 
    * el Service Worker sólo puede controlar las peticiones anidadas al mismo nivel de
    * directorios del propio archivo.  excepción de que especifiquemos en el scope
    * qué peticiones debe controlar desde el directorio raíz
*/

if ('serviceWorker' in navigator) {
    
    navigator.serviceWorker.register('sw.js') // devuelve una promesa  
    .then( 
        function(registration) {
            console.log('Service Worker registrado: ', registration)
        }
    )
    .catch(
        function(error) {
            console.error;
            console.log('Registro de Service Worker fallido: ', error);
        }
    );
} else {

    console.log('Tu navegador no soporta Service Workers');
}

/**
 * En la respuesta de la descarga del Service Worker, sepuede añadir una cabecera
 *  Service-Worker-Allowed indicando en qué directorio tiene permisos el Service Worker
 */