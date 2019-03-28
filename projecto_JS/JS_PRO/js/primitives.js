alert( 1 / 0 ); // Infinity

/**
 * In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

It’s just a special value which represents “nothing”, “empty” or “value unknown”.
The meaning of undefined is “value is not assigned”.
Technically, it is possible to assign undefined to any variable,
…But we don’t recommend doing that. Normally, we use null to assign an “empty” or “unknown” value to a variable, 
and we use undefined for checks like seeing if a variable has been assigned.

The symbol type is used to create unique identifiers for objects. 
We have to mention it here for completeness, but it’s better to study this type after objects.

The typeof operator returns the type of the argument.
It’s useful when we want to process values of different types differently or just want to do a quick check.
1. As an operator: typeof x.
2. As a function: typeof(x).

Math is a built-in object that provides mathematical operations.

The result of typeof null is "object". That’s wrong. It is an officially recognized error in typeof, kept for compatibility.
Of course, null is not an object. It is a special value with a separate type of its own.
So, again, this is an error in the language.

The result of typeof alert is "function", because alert is a function of the language.
Functions belong to the object type. But typeof treats them differently. 
Formally, it’s incorrect, but very convenient in practice.

Primitives except null and undefined provide many helpful methods
Formally, methods work via temporary objects, but JavaScript engines are well tuned to optimize that internally,
so they are not expensive to call.
*/