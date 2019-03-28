/**
 * Se busca el recurso tanto en la cache como en la red y se sirve le primero que se encuentre
 * Aunque la mayoría de las veces la cache contestará antes, 
 * se pede aprovechar la petición a la red para cachear la respuestea pra la siguente vez
 */

event.respondWith(
    function() {
         // Array de Promesas
        var promises = [ 
            caches.match(event.request),
            fetch(event.request)
        ];
        // No nos sirve el race() porque solo se resuelve la primera y no tendríamos acceso al fetch para guardar la petición
        return new Promise( (resolve, reject) => {
            promises.map( p=> Promise.resolve(promise) );
            promises.forEach( p => p.then(resolve) );
            promises.reduce(
                // Encadenamiento de promesas
                (a, b) => a.catch(
                    () => b
                )
            ).catch( 
                () => reject( new Error('Ambas promesas han fallado') ) 
            );
        })
    }
)