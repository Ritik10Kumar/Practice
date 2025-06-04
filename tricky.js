function fetch(){
    A = 7
    console.log(A)
}
let A
fetch();




let e = 5
{
    let e = 3
    console.log(e,"inside")
}

console.log(e,"outside")



// these functions are defined globally thats why we can use it inside function
var x = 90
let y = 80
const z = 70

function help(){
    console.log(x,y,z," == hello yello")
}
console.log(help()) // there is undefined in output along with 90,80,70 because It first executes help(), which logs 90 80 70 == hello yello.
// Then console.log() prints the return value of help() → which is undefined.


// Global Scope
var a = 1;
let b = 2;
const c = 3;

function testScope() {
    var a = 10; // function-scoped
    let b = 20; // block-scoped
    const c = 30;

    if (true) { //this if condition will be true always and the code inside will execute always
        var a = 100;  // still function-scoped!
        let b = 200;  // new block-scoped variable
        const c = 300; // new block-scoped constant
        // a = 8000
        // b = 500
        console.log("Inside if block:", a, b, c); // 100 200 300
    }

    console.log("Inside function:", a, b, c); // 100 20 30
}

testScope();

console.log("Outside function:", a, b, c); // 1 2 3