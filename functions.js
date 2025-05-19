//function statement / declaration 
// Function Declaration: Hoisted; can be called before it's defined.
function a(){
    console.log("this is function statement ")
}


// function expression 
// Function Expression: Not hoisted; must be defined before calling.
var b = function (){
    console.log("this is function expression")
}
b()

//anonymous function
// function(){  //used when function used as a value if we use it directoly it will give us syntax error
//     console.log("this is anonymous function")
// }


// named function expression

var c = function xx(){
    console.log(xx,"this is named function expression")
}

c()
// xx()


//arrow functions
const d = (param) =>{
    console.log("this is arrow function")
}



//IIFE Immediate Invoke Function Expression

(function() {
  console.log("IIFE executed");
})();


//function passed as an argument
function execute(fn) {
  fn();
}
execute(() => console.log("Function passed!"));

//callback function 

function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

greet("Ritik", () => console.log("Callback done"));


// ## JavaScript / Node.js Function Interview Questions and Answers


// ### ✅ Basic Function Questions


// **1. What is the difference between a function declaration and a function expression?**

// * **Function Declaration**: Hoisted; can be called before it's defined.
function greet1() { console.log("Hello"); }
// * **Function Expression**: Not hoisted; must be defined before calling.
const greet2= function() { console.log("Hello"); };


// **2. What is hoisting, and how does it affect function declarations?**

// * Hoisting moves declarations to the top of their scope. Function declarations are hoisted, function expressions are not.


// **3. How do you define and invoke a function in JavaScript?**

function sayHi(name) {
  console.log("Hi " + name);
}
sayHi("Ritik");


// **4. What is an anonymous function? Give an example.**

const greet3 = function() {
  console.log("Hello!");
};


// **5. What is the difference between parameters and arguments?**

// * **Parameters**: Variables in function definition.
// * **Arguments**: Actual values passed to the function.


function add(a, b) { return a + b; }
add(2, 3);



// ### 🔷 Intermediate Function Questions

// **6. What is an arrow function?**

const greet4 = (name) => console.log(`Hi ${name}`);


// **7. What is the significance of `this` in a regular function vs. an arrow function?**

// * Arrow functions inherit `this` from their surrounding scope. Regular functions define their own `this`.


// **8. What is an IIFE and why is it used?**

(function() {
  console.log("IIFE executed");
})();


// **9. Can you pass a function as an argument to another function?**

function execute(fn) {
  fn();
}
execute(() => console.log("Function passed!"));


// **10. What is a callback function?**

function greet5(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}
greet5("Ritik", () => console.log("Callback done"));


// ### 🔶 Advanced Function Questions


// **11. What is a closure? Provide a real-world example.**

function outer() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2


// **12. What is the purpose of `bind()`, `call()`, and `apply()`?**

function showName() {
  console.log(this.name);
}
const user = { name: "Ritik" };
showName.call(user);
showName.apply(user);
const bound = showName.bind(user);
bound();


// **13. What are higher-order functions?**

function repeat(fn, times) {
  for (let i = 0; i < times; i++) fn();
}
repeat(() => console.log("Run"), 3);



// **14. Explain currying in JavaScript.**

function curryAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
console.log(curryAdd(1)(2)(3)); // 6


// **15. How does function hoisting work with arrow functions?**

// Arrow functions are **not hoisted**.
// sayHi1(); // ❌ Error    // it gives access before initialization error 
const sayHi1 = () => console.log("Hi");


// ### 🔧 Practical Coding Questions


// **16. Write a function to reverse a string.**

function reverseStr(str) {
  return str.split('').reverse().join('');
}


// **17. Create a function that checks if a number is a palindrome.**

function isPalindrome(num) {
  const str = num.toString();
  return str === str.split('').reverse().join('');
}


// **18. Write a higher-order function that returns a memoized version.**

function memoize(fn) {
  const cache = {};
  return function(n) {
    if (cache[n]) return cache[n];
    return (cache[n] = fn(n));
  };
}
const square = memoize(n => n * n);
console.log(square(3));


// **19. Implement a custom version of `map()`.**

function customMap(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
}


// **20. Create a function that returns another function (closure).**

function greeter(greeting) {
  return function(name) {
    console.log(`${greeting}, ${name}`);
  };
}
const sayHi2 = greeter("Hi");
sayHi2("Ritik");


