/*
* We can add constants and functions directly into a JSON 
* and they will be setted us key-value pair
*/

/*
* Arrow functions allow to define functions maintining the keyword
* this as a reference to the parent scope
*/

/*
* DESESTRUCTURING ARRAY AND FUNCTIONS
*/
function miFn ( { nombre: x } ) {
	return x;
}

/*
* ASYNC AWAYT Solves the problem of indented then()'s'
*	awayt receives something asynchronous so it has to wait until it finishes
* 	async is the way to tell the function that is expecting something asynchronous
*/
async function myAsincFn () {
	try {
		const date = await miPromesa;
		return data
	} catch (error) {
		return error;
	}
}