// Buscar todos los enlaces de una página
[].slice.call(
    $0.querySelectorAll('a[href]')
    .map( (el) => el.href )
);
// Añadiendo un filtro con REGEX
[].slice.call(
    $0.querySelectorAll('a[href]')
).map((obj)=>obj.href)
.filter( (str) => !/github/.test(str) ); // Ejecutar en consola

// Capturar todos los nodos de texto
function textNodeUnder(el) {
    var 
        n,
        a=[],
        walk=document.createTreeWalker(
            el, NodeFilterm, SHOW_TEXT, null, false
        );
    while ( n = nextNode() ) {
        a.push(n);
    }
    return a;
}
// Monitorizar una función
monitor(nombre_de_la_funcion)
// Establecer un breakpoint en la llamada a una función
debug(nombre_de_la_funcion)

monitorEvents(window, "resize");
// Si se ejecuta en consola se produce un evento con cada resize de la ventana
monitorEvents(window, "click");

document.addEventListener(
    "click",
    function (evt) {
        console.log(evt)
    }
)
unmonitorEvents(window, "click");
// Se pueden apilar y encolar rutinas de eventos

/**
 * Un addEventListener es una especie de callback con Closure --> No Abusar
 */
document.removeEventListener