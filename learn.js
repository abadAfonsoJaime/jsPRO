/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop*/
const s = new Date().getSeconds();

const ejecuta = setTimeout(
	// prints out "2", meaning that the callback is not called immediately after 500 milliseconds 
	function () {
		
		console.log(`Ran after ${new Date().getSeconds - s} seconds`);
	},
	500
);
while (true) {
	if (new Date().getSeconds() - s >= 2) {
	
		console.log("Good, looped for 2 seconds");
		break;
	}
}
ejecuta;

/*
	Zero delay doesn't actually mean the call back will fire-off after zero milliseconds.
	Calling setTimeout with a delay of 0 (zero) milliseconds doesn't execute the callback
	after the given interval.
	The execution depends on the number of waiting tasks in the queue. In the example below,
	the message "this is just a message" will be written to the console berfore the message 
	in the callback gets processed, because the delay is the minimum time required for the 
	runtime to process the request, but not a guaranteed time.
	Basically, the setTimeout needs to wait for all the code for queued messages to complete
	even though you specified a particular time limit for your setTiemeout.
*/

function zeroDelay() {
	console.log('This is the start');

	setTimeout( function cb() {
		console.log('This is a msg from the callback');
	});

	console.log('This is just a message');

	setTimeout( 
		function cb1() {
			console.log('this is a msg from callback_1');
		},
		0
	);

	console.log('this is the end');
}

zeroDelay();


var greeting = "Hola contexto global!";
console.log(greeting); // Hola contexto global!
function greet() {
    var greeting = "Saludo desde greet";
    console.log(greeting);
}
greet(); // Saludo desde greet


var lista1 = [9,8,3];
var lista2 = [9,8,3];
if (lista1 === lista2) {
   console.log("iguales");
} else {
   console.log("distintas");
}
distintas