function slowMethod() {
    let result = getResult(), finalResult;
    // Realizamos operaciones sobre result...
    return finalResult;
  }
  
  /* En otra parte de nuestro código
  result = slowMethod();
  
  Supongamos que getResult realiza tarda cierto tiempo en obtener el resultado. 
  Cada vez que ejecutemos slowMethod tendremos que esperar a obtener el resultado,
   bloqueando al resto de la aplicación.
  Con ES2015 podemos reescribir este código utilizando las promesas:
  */

  function slowMethod() {
    return getResult().then(result) {
      let finalResult;
      // Realizamos operaciones sobre result...
      return finalResult;
    }
  }
  
  // En otra parte de nuestro código
  slowMethod().then(finalResult) { /* ... */ };
  
 /* Si comparamos el código síncrono y asíncrono estos varían considerablemente. 
 Con las promesas necesitamos concatenar el método then en cada llamada. 
 En cambio, si utilizamos async/await podemos convertir nuestro código en asíncrono de manera muy sencilla:
 */ 
  async function slowMethod() {
    let result = await getResult(), finalResult;
    // Realizamos operaciones sobre result...
    return finalResult;
  }
  
  // En otra parte de nuestro código
  result = await slowMethod();
  