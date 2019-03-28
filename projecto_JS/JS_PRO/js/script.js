/* CONTEXTO LÉXICO */
/*
    Cuando escribimos código JS, dependiendo de dónde coloquemos ciertas
    instrucciones, marcarán un contexto de acceso a ciertos valores.
*/

/* EJEMPLO 1 */
var greeting = "Hola contexto global!";
console.log(greeting); // Hola contexto global!
function greet() {
    console.log(greeting);
}
greet(); // Hola contexto global!



/* EJEMPLO 2 */
var greeting;
console.log(greeting); // Undefined
function greet() {
    greeting = "Saludo desde greet";
    console.log(greeting);
}
greet(); // Saludo desde greet
console.log(greeting) // Saludo desde greet



/* EJEMPLO 3 */
var greeting = "Hola contexto global!";
console.log(greeting); // Hola contexto global!
function greet() {
    greeting = "Saludo desde greet";
    console.log(greeting);
}
greet(); // Saludo desde greet
console.log(greeting) // Saludo desde greet
/* Asume que greeting esta en el contexto del this
    local > this === window
*/
window.greeting;



/* EJEMPLO 4 */
var greeting = "Hola contexto global!";
console.log(greeting); // Hola contexto global!
function greet() {
    var greeting = "Saludo desde greet";
    console.log(greeting);
}
greet(); // Saludo desde greet
console.log(greeting) // Hola contexto global!



/* EJEMPLO 5 */
console.log(greeting) // Uncaught ReferenceError: greeting is not defined
function greet() {
    var greeting = "Hola contexto global!";
    console.log(greeting);
}
greet(); // No se llega a ejecutar