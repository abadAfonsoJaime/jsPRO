// Factory Functions
function createCircle(radius) {

	return {
		radius,
		draw() {
			console.log("Executing the called method")
		}
	};
}
const circle1 = createCircle(1);
circle1.draw();


// Constructor Function
function Circle(radius) {
	this.radius = radius;
	this.draw = function() {
		console.log("Drawing the circle...");
	};
}

/* When using new 3 things happen:
	1. An empty JS object is created
	2. this is set to point to the object
	3. The object is returned
*/
const circle2 = new Circle(2);


/* this keyword is a reference to the object 
	that is executing the current function
*/
// Method Behaviour --> obj
const video = {
	title: 'v',
	play() {
		console.log(this);
	},
	tags: ['a', 'b', 'c'],
	showTags() {
		this.tags.forEach( function(tag) {
			console.log(this, tag)
		});
	},
	reference() {
		this.tags.forEach( 
			function(tag) {
				console.log(this, tag)
			},
			this
		);
	}
};
// video.play(); --> this points to the video object
// Function Behaviour --> global (NodeJS) | window (browser)
// video.showTags(); --> both cases:
/*
	the 1st this is in a method, so it points to video object
	the 2nd this ii in a callback regular function pointing to the global object
*/

// reference
/* the second parameter of the forEach()
   is in the execution context of the method */
video.reference();

video.stop = function() {
	console.log(this);
};
video.stop();


const film = {
	title: 'f',
	play() {
		console.log(this);
	}
};

function Film(title) {
	this.title = title;
	console.log(this);
}
const p = new Film('Terminator'); // {this}


/// GETTERS & SETTERS ///
const person = {
	firstName: 'Jaime',
	secondName: 'Abad',
	get fullName() {
		return `${person.firstName} ${person.secondName}`
	},
	set fullName(value) {
		parts = value.split(' ');
		this.firstName = parts[0];
		this.secondName = parts[1];
	}
}
const target = 'secondName';
person[target.value] = 'Grillo';
person.firstName = 'Pepito';

console.log(person.fullName);
person.fullName = 'John Smith';
console.log(person);
console.log(person.fullName);

/// CLONNING OBJECTS ///
/*
const anotherPerson = {};
for (let key in person) {
	anotherPerson[key] = person[key]
}
*/
const anotherPerson = Object.assign({}, person);
// const anotherPerson = { ...person }

console.log(anotherPerson);



var base = {a:1, b:2, c:3},
	noSpread,
	withSpread,
	withSpread2,
	withSpread3;

noSpread = { base }; // noSpread = { base : {a:1, b:2, c:3} }
withSpread = { ...base }; // withSpread = {a:1, b:2, c:3} = base

var d = 4;
withSpread2 = { ...base, d } // withSpread = {a:1, b:2, c:3, d:4}
withSpread2 = { d, ...base } // withSpread = {d:4, a:1, b:2, c:3}
/**** DESTRUCTURING ****/
var origin = {
	a : 1,
	b : 2,
	c : 3,
	d : 4
};
// Asignamos los valores
var {a, b, ...other} = origin; // a=1, b=2, other={c:3, d:4}

/**** Object.Assign() ****/
// Allows to create a copy from an object and also overwrite some properties or methods
var objeto1 = { name : "Assign!"};
var objeto2 = { a : 1, b : 2};
var objeto3 = { c : 3};
var objeto4 = { d : 4, e : 5};

var new Object.assign(
	{ prop : 'test' },
	objeto1,
	objeto2
); // { a:1, b:2, name:'Assign!', prop:'test'}

// el operador ... utiliza Object.assign()
var {a, b} = { ...objeto1 } // Babel Polyfill




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