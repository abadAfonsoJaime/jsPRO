fetch('https://httpbin.org/get')
    // Comprobar éxito de la respuesta
    .then( response => {
        if (response.ok) {
            return response;
        }
        throw new Error('Ha ocurriodo un error');
    })
    // Transformar rrespuesta de string a json
    .then( response => response.json() )
    // Sacar por consola la respuesta y devolverla por si alguien más se quiere encadenar al .then()
    .then( response => console.dir(response) || response )
    // Gestionar errores en cualquiera de los .then()
    .catch(console.error); // Fin del Fetch


/* Leer cabeceras */
fetch('https://httpbin.org/get')
    .then( response => {
        if (response.ok) {
            return response;
        }
        throw new Error('Ha ocurrido un error');
    })
    .then( response => {
        for (var h of response.headers.entries() ) {
            console.log( h[0], h[1] );
        }
        return response;
    })
    .then( response => console.dir(response) || response )
    .catch(console.error);


/* Leer la respuesta de un POST */
var data = new FormData();
data.append('var1', 'texto campo 1');
data.append('var1', 'texto otro campo');

fetch('https://httpbin.org/post', {
    method: "POST",
    body: data
})
    .then( response => {
        if (response.ok) {
            return response;
        }
        throw new Error('Ha ocurrido un error');
    })
    .then( response => response.json() )
    .then( response => console.log(response) || response )
    .catch( console.error );
    

/* Clonar la respuesta */
var data = new FormData();
data.append('var1', 'texto campo 1');
data.append('var1', 'texto otro campo');

var promesa = fetch('https://httpbin.org/post', {
    method: "POST",
    body: data
})
    .then( response => {
        if (response.ok) {
            return response;
        }
        throw new Error('Ha ocurrido un error');
    });

promesa.then( response => response.clone() )
    .then( response => response.json() )
    .then( response => console.log(response) || response);

promesa.then( response => response.clone() )
    .then( response => response.blob() )
    .then( response => console.log(response) || response);