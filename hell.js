// // //clouser functionality
// // function createCounter() {
// //     let count = 0;  // private variable
  
// //     return function () {
// //       count++;
// //       console.log("Current count:", count);
// //     };
// //   }
  
// //   const counter = createCounter();
  
// //   counter(); // Output: Current count: 1
// //   counter(); // Output: Current count: 2
// //   counter(); // Output: Current count: 3


// // var pivotIndex = function(nums) {
// //     const totalSum = nums.reduce((acc, num) => acc + num, 0);
// //     let leftSum = 0

// //     for(let i = 0;i<nums.length;i++){
// //         if(leftSum === totalSum - leftSum - nums[i]){
// //             return i
// //         }
// //         leftSum += nums[i]
// //     }
// //     return -1


// // };



// // const obj = { name: "Ritik" };
// // obj.name = "Kumar";
// // console.log(obj.name); // ?



// // let str = "hello";
// // str[0] = "H";
// // console.log(str);  // Output: "hello"  (no change)
// // // let newStr = "H" + str.slice(1);
// // let newStr = str.replace('l', 'H');
// // console.log(newStr);  // Output: "Hello"



// console.log(1)
// setTimeout(() =>console.log("2"),0)
// Promise.resolve().then(() => console.log(3))
// console.log(4)
// setTimeout(() =>console.log("A"),0)
// process.nextTick(() => console.log("B"))
// Promise.resolve().then(() => console.log("C"))
// console.log("D")



// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// // const user = new Person("Ritik", 25);
// const user = { name: "Ritik", age: 25 };

// // Dot notation
// console.log(user.name);

// // Bracket notation (useful for dynamic keys)
// console.log(user["age"]);
// user.name = "Amit";       // Update
// user.city = "Delhi";      // Add
// delete user.age;  
// console.log(user , typeof(user))



// const arr1 = [1,3,2]
// const arr2 = arr1
// arr1.length = 9
// const n = "helo"
// console.log([...n],"arr2")


var a = 1
if(true){
  a = 2
  console.log(a)
  if(true){
  let a = 3
  console.log(a)
  }
}

console.log(a)