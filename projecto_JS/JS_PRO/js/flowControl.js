function decide( dimension ) {
    if (dimension > 100) {
        console.log("Super");
    } else {
        console.log("Normal");
    }
}

function decide2( dimension ) {
    return dimension > 100 ? "Super" : "Normal";
}

function priceByColor( color ){
    var price;
    switch( color.toLowerCase() ) {
        case 'blanco':
            price = 10;
            break;
         case 'verde':
            price = 15;
            break;
         case 'azul':
            price = 20;
            break;
         default:
            price = 0;
    }
    return price;
}

function priceByColor2 (color) {
    let pricesByColorObj = {
        'blanco' : 10,
        'verde' : 15,
        'azul' : 20
    };

    return pricesByColorObj[color.toLowerCase()];
}