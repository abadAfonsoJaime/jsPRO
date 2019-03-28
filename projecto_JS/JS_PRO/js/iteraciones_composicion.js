var list = [1,3,5,6,7,8,9];

list.forEach( 
    (el) => console.log(el)
);

var obj = {
    cad: "Pedro",
    cad2: "Juan"
}
for (let k in obj) {
    console.log(obj[k]);
}

[1,9].map( (el)=> console.log(el) );

list.filter(
    function( el ) {
        return el % 2 == 0;
    }
);

function pares( el ) {
    return el % 2 == 0;
}
//list.filter(pares);
function oddOrEven( oddOK ) {
    return oddOK 
        ? function(el) {
            return el % 2 == 0;
        }:
        function(el) {
            return el % 2 != 0;
        }
}
//list.filter( oddOrEven(true) );
//list.filter( oddOrEven(false) );