//clouser functionality
function createCounter() {
    let count = 0;  // private variable
  
    return function () {
      count++;
      console.log("Current count:", count);
    };
  }
  
  const counter = createCounter();
  
  counter(); // Output: Current count: 1
  counter(); // Output: Current count: 2
  counter(); // Output: Current count: 3



