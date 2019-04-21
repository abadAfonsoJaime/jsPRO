// FILTER
const nums = [1, -1, 2, 3];

const filtered = nums.filter( n => n >= 0 );
console.log(filter);

// MAP
const items = filtered.map( n => '<li>' + n '</li>');

const html = '<ul>' + items.join('') + '</ul>';
console.log(html);

// In arrow functions, {} represent a block scope, not only an object
const elements = filtered.map( 
	n => ({ value: n }) // parenthesis are required to avoid block scoping
);
console.log(elements);

// chainning
const result = nums
	.filter( n => n >= 0 )
	.map( n => ({ value : n }) );
console.log(result);

// more actions as map returns a new array
const reFilter = nums
	.filter( n => n >= 0 )
	.map( n => ({ value : n }) )
	.filter( obj => obj.value > 1 )
	.map( obj => obj.value);
console.log(reFilter);	


// REDUCE
const numbers = [1, -1, 2, 3];

let sum = 0;
for (let n of numbers) {
	sum += n;
}
console.log(sum);

const reduceMethod = numbers.reduce( 
	(accumulator, currentValue) => {
		return accumulator + currentValue;
	},
	0 // initialize the accumulator to 0
);
/*
a = 0, c = 1 --> a = 1
a = 1, c = -1 --> a = 0
a = 0, c = 2 --> a = 2
a = 2, c = 3 --> a = 5
*/
console.log(reduceMethod); // 5

const perform = numbers.reduce( (accumulator, currentValue) => {
	return accumulator + currentValue;
});
/*
a = 1, c = -1 --> a = 0
a = 0, c = 2 --> a = 2
a = 2, c = 3 --> a = 5
*/
console.log(perform);
// As we have 1 single line to return --> get rid of it
bestWay = numbers.reduce(
	(accumulator, currentValue) => accumulator + currentValue
);