function mapa( x, y, z ) {
    console.log( x, y, z );
}
mapa(20,30,10);

function mapa2( obj ) {
    for ( let key in obj ){
        console.log( obj[key] );
    }
}
mapa2( {x:20, y:30, z:10, t:12} );

// CLOSURES
function calculadora( op ) {
    
    var contada = 20;
    return function sumaContada( value ){
        return val + contada;
    }
}
/*
    El Garbage Collector nunca eliminará la referencia de contada porque la necesita
    para ejecutar el código --> No abusar de los closures
*/

// ARROW FUNCTIONS
let multiplyedBy3 = [1, 2, 3].map(
    function(element) {
        return element*3;
    }
);

let arrowMultiply = [1, 2, 3].map(
    (element) => element*3
);

[23, 76, 66, 1, 3, 89].filter(
    (element) => element > 50
);

[23, 76, 66, 1, 3, 89].map(
    (el) => ( {elem: el*2} ) // Los paréntesis son necesarios para agrupar la evaluación
);

// Funciones inmendiatamente invocadas
/* una función autoinvocada tiene unos paréntesis a la definición de la función 
y luego otros paréntesis de llamada a la función donde se le podrían pasar parámetros.
De esta manera quedan protegidas todas las variables definidas dentro del bloque de la función
*/
var app = (
    function hola () {
        var mensaje = "hola";
        // representación de mi API pública
        return {
            mensaje : mensaje
        }
    }
)();
/* De esta manera se consigue que mi API no colisione con el espacio de nombres;
 puede ocurrir que tenga otra librería donde se reutilicen nombres de variables.
 Método de abstracción. Por ejemplo cuando surge jQuery no se pueden meter sus métdos
 dentro del contexto window porque prevalecerían unos sobre otros y se encapsula.
*/
app.mensaje;