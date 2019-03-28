/*
Todo lo comúnn va en un prototipo y los patrones especiales se redefinen
*/

let pokemon = {
    eats: true,
    // drinks: function(){}
    drinks() {
        console.log("Glub Glub...")
    }
};

// charmander inherits pokemon
let charmander = {
    fire: true,
    power: 20,
    __proto__: pokemon
}

// cadena prototípica
let charmeleon = {
    earLength: 10,
    power: 1000,
    __proto__: charmander
}

console.log(charmander.power);
console.log(charmeleon.power);

console.log(charmeleon.fire);
charmeleon.drinks();