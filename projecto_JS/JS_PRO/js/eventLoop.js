/*
_____________________________________
|   Stack   |         Heap          |
|           |                       |
|           |                       |
|           |                       |
|           |                       |
|           |_______________________|
|           |               Queue   |
|___________|_______________________|

*/

function run() {
    console.log("Adding code to the stack");

    setTimeout(
        function c() {
            // c() Added somewhere in Heap
            console.log("c() Running next code from queue");
        },
        0
    );

    function a(x) {
        // a() Added somewhere in Heap
        console.log("a() frame added to stack");
        b(x);
        console.log("a() frame removed from stack");
    }

    function b(y) {
        // b() Added somewhere in Heap
        console.log("b() frame added to stack");
        console.log("Value passed in is " + y);
        console.log("b() frame removed from stack");
    }

    a(42);
    console.log("Ending work for this stack");
}