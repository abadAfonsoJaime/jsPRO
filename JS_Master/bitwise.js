// 1 byte = 8 bits

// Bitwise OR
console.log( 1 | 2 );
// 1 = 00000001
// 2 = 00000010
// R = 00000011 = 3

// Bitwise AND
console.log( 1 & 2 );
// 1 = 00000001
// 2 = 00000010
// R = 00000000 = 0

/* 				Access Control System
The user has Read, Write and Execute permissions */

const readPermission = 4; // 00000100
const writePermission = 2; // 00000010
const executePermission = 1; // 00000001

let myPermission = 0;
myPermission = readPermission | readPermission | writePermission

let message = (myPermission & readPermission) ? 'yes': 'no'

console.log(message)

/* Add permissions with the Bitwise OR operator
Check permissions with the Bitwise AND operator */