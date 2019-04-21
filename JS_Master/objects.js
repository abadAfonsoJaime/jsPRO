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


