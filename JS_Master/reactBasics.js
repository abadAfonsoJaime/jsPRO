/*
The value of this is determined on how a function is called:
	if it is called as a method in an object --> this reference to the object
	if called as stand-alone or outside of an object --> this return the global object
*/
const user = {

	name: 'Jaime',
	surf() {
		console.log(this);
	}

};

user.surf();

const surfing = user.surfing;
console.log(surfing); // surf(){console.log(this)}

surf() // undefined if strict mode activated, otherwise --> global object