// // const { listenerCount } = require('events')
// const { subscribe } = require('diagnostics_channel')
// const EventEmitter = require('events')
// const { findSourceMap } = require('module')
// const { setTimeout } = require('timers/promises')
// const { queryObjects } = require('v8')

// const eventEmitter = new EventEmitter()

// eventEmitter.on('GREET',(name)=>{
// console.log(`Hello ${name}`)
// })


// eventEmitter.once('onlyonce',(name)=>{
// console.log(`Hello only one time ${name}`)
// })
 
// const deleteevent = ()=>{
// console.log("this event will be deleted")
// }
// eventEmitter.on('deleteevent',deleteevent)

// eventEmitter.emit('onlyonce','master')
// eventEmitter.emit('GREET','ritik')
// eventEmitter.emit('onlyonce','master2')
// eventEmitter.removeListener('deleteevent',deleteevent)
// eventEmitter.emit('deleteevent')    

// // setInterval(() => {
// //     console.log('This message appears after 2 seconds.');
// //   }, 2000)






// function printMessageWithDelay(message, times) {
  
//   for (let i = 1; i <= times; i++) {
//       let delay = 0; // Initial delay in milliseconds
//       delay += i * 1000
//       setTimeout(() => {
//         console.log(`${message} (after ${i} second${i > 1 ? 's' : ''})`);
//       },  delay);
//     }
// }

//   // Usage
//   printMessageWithDelay('Hello!', 5);


// // // shallow copy and deep copy they both are use to copy but difference is shown when they have to handle nested queryObjects

// // let a = {name:"ritik",hobbies:['cricket','football']}
// // console.log(a,"><>>><></>first")
// // let b = {...a}
// // b.hobbies.push('volleyball')

// // console.log(b,"><>>><></>")

// // let c = JSON.parse(JSON.stringify(a))
// // c.hobbies.push('kabaddi')
// // console.log(a,"][][]][[lklklklk")
// // console.log(c,"CCCCCCCCCCCCCCC")



// // // call bind apply

// // // call when we call or borrow a function from one object to another it calls call method 
// // // apply function is similar as call but it takes argument in an array
// // // bind method same as call function but it returns a function 

// let xobject = {
//     name:"ritik",
//     lastname:"kumar",
//     printfulname:function(town){
//         console.log(this.name + this.lastname, `i am from ${town}`)
//     }
// }


// // xobject.printfulname()

// // let person={
// //     name:"amit",
// //     lastname:"pal"
// // }


// // xobject.printfulname.call(person,'meerut')
// // xobject.printfulname.apply(person, ["Mumbai"]); // Takes argument in array
// // let bindfunc =  xobject.printfulname.bind(person, "MEerut"); //same as call method but return a function 
// // bindfunc()


// let arr = [2,3,4]

// Array.prototype.square = function(){
//     let z = this.map((x) =>{return x*2})
//     return z
// }

// console.log(arr.square())


// //   // Test the custom prototype function
// const numbers = [10, 20, 30, 40];


// // // Custom prototype function to loop through an array using a for loop
// Array.prototype.forEachCustom = function(callback) {    
//     for (let i = 0; i < this.length; i++) {
//       callback(this[i], i, this);
//     }
// };

// numbers.forEachCustom((value, index) => {
//     console.log(`Index: ${index}, Value: ${value}`);
// });
  

// Array.prototype.filtermethod = function(callback){
//     let result = []
//     for(let i = 0;i<this.length;i++){
//         if(callback(this[i],i,this)){
//             result.push(this[i])
//         }
//     }
//     return result
// }

// let evenNumbers = numbers.filtermethod(num => num % 2 === 0);
// console.log(evenNumbers);  // Output: [2, 4, 6]


// Array.prototype.mapmethod = function(callback){
//     let result = []
//     for(let i = 0;i<this.length;i++){
//         result.push(callback(this[i],i,this))
//     }
//     return result
// }

// let mapnumber = numbers.mapmethod((num) =>{
//      return num * 2
// })
// console.log(mapnumber)




  

// let number = [1,2,3,4,5,6,7]

// // console.log(number.splice(1,1,10))


// // missing number in array
// // find second largest number 

// // function secodlargest(arr){
// //   if(arr.length < 2){
// //     return 'array must contain two elements'
// //   }
// //   let largest = -Infinity
// //   let secondlarget = -Infinity  
// //   for(let i = 0;i<arr.length;i++){
// //     if(arr[i] > largest){
// //       secondlarget = largest
// //       largest = arr[i]
// //     }else if(arr[i] > secondlarget && arr[i] !== largest){
// //       secondlarget = arr[i]
// //     }
// //   }

// //   return secondlarget
// // }




// // let second = secodlargest([10, 20, 30, 40, 50])

// // console.log(second,"this is secondlarget")



// let misarr = [1,2,3,4,6]
// // function findmissingnumber(arr){
// // let n = arr.length + 1;
// // let totalSum = (n*(n+1))/2;
// // let actualSum = arr.reduce((sum,num) => sum+num,0)

// // return totalSum-actualSum
// // }

// // let missing = findmissingnumber(misarr)
// // console.log(missing)


// function sortArry(arr){
// if(arr.length <= 1){
//   return arr
// }

// let pivot = arr[arr.length-1]
// console.log(pivot,"this is pivot")
// let left = []
// let right = []
// for(let i = 0 ; i<arr.length-1 ;i++){
//   if(arr[i]<pivot){
//     left.push(arr[i])
//   }else{
//     right.push(arr[i])
//   }
// }

// return [...sortArry(left),pivot, ...sortArry(right)]
// }




// let sorta = sortArry([1,8,3,2,2,5,6,9])

// console.log(sorta,"poppopopoppo")



// function revstring(stri){
// let reversed = ''
// for(let i = stri.length-1;i>=0;i--){
//   reversed+= stri[i]
// }
// console.log(reversed)
// }






// // revstring('ritik')




// // function findmaxchar(str){
// // let maxChar = ''
// // let maxCharCount = 0
// // let currenctChar = str[0]
// // let currenctCharCount = 1

// // for(let i = 1;i<str.length;i++){  
// //   if(str[i] === currenctChar){
// //     currenctCharCount++
// //   }else{
// //     if(currenctCharCount>maxCharCount){
// //       maxChar = currenctChar
// //       maxCharCount = currenctCharCount
// //     }
// //     currenctChar = str[i]
// //     currenctCharCount = 1
// //   }
// // }

// // if(currenctCharCount > maxCharCount){
// //   maxChar = currenctChar
// //   maxCharCount = currenctCharCount
// // }
// // console.log(`maxchar ${maxChar} maxCharcput ${maxCharCount}`)
// // }

// // let a = findmaxchar("abbcccdddd")
// // console.log(a)





// let newtt = [1,2,3,4,5]

// // let po = newtt.forEach(element => {
// //   return element*2
// // });
// // console.log("po=",po,"newt = ",newtt)
// // let m ={}
// // let n ={}
// // console.log({} + {}," ==][][]")




// // function twoSumHashMap(arr, target){
// //   const map = new Map()
// //   for(let i = 1 ; i<arr.length-1;i++){
// //     let compliment= target - arr[i]
// //     if(map.hasOwnProperty(compliment)){
// //       return [map[compliment],i]
// //     }else{
// //       map[arr[i]] = i
// //     }
// //   }
// //   return null
// // }

// // const nums = [2, 7, 11, 15];
// // const target = 18;

// // let g = twoSumHashMap(nums,target)
// // console.log(g,"g")




// function findmaxSbarraysum(){
//   let maxSum = -Infinity
//   let currentSum = 0
//   for(let i = 0;i<arr.length;i++){
//     currentSum += arr[i]
//     if(currentSum>maxSum){
//       maxSum = currentSum
//     }
//     if(currentSum<0){
//       currentSum = 0
//     }
//   }
//   return maxSum
// }

// // const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
// const arr1=  [2, 3, -8, 7, -1, 2, 3];
// const result1 = findmaxSbarraysum(arr1);

// console.log(`The maximum sum of a subarray is: ${result1}`);












// function extraLongFactorials(n) {
//     // Base case: factorial of 0 is 1
//     if (n === 0) {
//         return BigInt(1);
//     }
//     // Recursive case: n! = n * (n-1)!
//     return BigInt(n) * extraLongFactorials(n - 1);




//     // secodn method
//     // let result = BigInt(1);
//     // for (let i = 1; i <= n; i++) {
//     //     result *= BigInt(i);
//     // }
//     // console.log(result.toString());
// }

// // Example usage
// // let result = extraLongFactorials(25);
// // console.log(result.toString());  // This will print th





// function majorityElement(arr) {
//     let candidate = null, count = 0;

//     // Step 1: Find the candidate
//     for (let num of arr) {
//         if (count === 0) {
//             candidate = num;
//         }
//         count += (num === candidate) ? 1 : -1;
//     }

//     // Step 2: Verify if the candidate is actually the majority
//     count = 0;
//     for (let num of arr) {
//         if (num === candidate) {
//             count++;
//         }
//     }

//     return count > Math.floor(arr.length / 2) ? candidate : -1;
// }

// // Example Usage
// // let r = majorityElement([3, 3, 4, 2, 3, 3, 3])
// // console.log(r,"-------"); // Output: 3
// // console.log(majorityElement([1, 2, 3, 4]),"-------"); // Output: -1
// // console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]),"-------"); // Output: 2


// // const maxCharByFrequency = (str) => {
// //   const freq = {};
  
// //   // Count the frequency of each character
// //   for (const char of str) {
// //     freq[char] = (freq[char] || 0) + 1;
// //   }
  
// //   // Find the character with the highest frequency
// //   let maxChar = '';
// //   let maxCount = 0;
  
// //   for (const [char, count] of Object.entries(freq)) {
// //     if (count > maxCount) {
// //       maxCount = count;
// //       maxChar = char;
// //     }
// //   }
  
// //   return maxChar;
// // };

// // Example usage:


// const maxCharByFrequency2 = (str) =>{
//   let freq = {}
//   for(const char of str){
//     freq[char] = (freq[char] || 0) + 1
//   }
//   let maxChar = ''
//   let maxCount = 0
//   for(let [char, count] of Object.entries(freq)){
//     if(count > maxCount){
//       maxChar = char
//       maxCount = count
//     }
//   }

//   return [maxChar , maxCount]
// }



// const str = "aabbbcccdddd ";
// console.log(maxCharByFrequency2(str));  // Output: 'b'







// let allKey = []
// function checkObj(obj){
//   Object.keys(obj).forEach(key =>{
//     allKey.push(key)
//     if(typeof(obj[key]) === 'object')checkObj(obj[key])
//   })
//   return allKey
// }


// const person = {
//   name: "John",
//   age: 30,
//   city: {loation:{longitude:"45678"}}
// };



// let v = checkObj(person)
// console.log(v)



// // function x(){
// //   for(let i = 1 ; i<=3;i++){
// //     setTimeout(function() {
// //     console.log(i)
// //     },1*1000)
// //   }
// // }


// // x()




// function reverseString(str) {
//   return str.split('').reverse('').join('');
// }

// // Example usage:
// console.log(reverseString("hello")); // "olleh"



// function maxSubarray(arr) {
//   let maxSum = -Infinity;
//   let currentSum = 0;
//   let start = 0, end = 0, tempStart = 0;
  
//   for (let i = 0; i < arr.length; i++) {
//       currentSum += arr[i];
      
//       if (currentSum > maxSum) {
//           maxSum = currentSum;
//           start = tempStart;
//           end = i;
//       }
      
//       if (currentSum < 0) {
//           currentSum = 0;
//           tempStart = i + 1;
//       }
//   }
  
//   return {
//       maxSum,
//       subArray: arr.slice(start, end + 1)
//   };
// }



// // Example usage:
// const arrr = [2, 3, -8, 7, -1, 2, 3];
// console.log(maxSubarray(arrr),"maxsumarr");






// let a = {name:"ritik",hobbies:['cricket','football']}
// console.log(a,"><>>><></>first")
// let b = {...a}
// b.hobbies.push('volleyball')

// console.log(b,"><>>><></>")

// // let c = JSON.parse(JSON.stringify(a))
// // c.hobbies.push('kabaddi')
// // console.log(a,"][][]][[lklklklk")
// // console.log(c,"CCCCCCCCCCCCCCC")

// if(8%3 === 0){
//   console.log("yes")
// }else{
//   console.log("NOooo")
// }




// let arr2 = [1, 6, -3, 4, 5];
// let arr3 = [2, 7, 8];
// let arr4 = [...arr2,...arr3].sort()
// console.log(arr4)

// console.log("this is c")

// let newdata = [10,20,30,40,50,60,70,80,90]

// //BS = binary search
// function findelelementbyBS(arr,findingelement){

//   let start = 0
//   let end = arr.length -1
//   let elementposition = undefined
//   while(start <= end){
//     let pivot = Math.floor((start + end)/2)
//     if(arr[pivot] === findingelement){
//       elementposition = pivot
//       return elementposition
//       break;
//     }
//     else if(arr[pivot] < findingelement){
//       start = pivot + 1
//     }else{
//   end = pivot - 1
//     }
//   }
//   return -1
// }

// console.log(findelelementbyBS(newdata,90))




// //   Peak Element in Mountain Array
// arr = [1, 3, 5, 7, 6, 4, 2]
// function findPeakElement(arr) {
//     let start = 0;
//     let end = arr.length - 1;
  
//     while (start < end) {
//       let mid = Math.floor((start + end) / 2);
  
//       if (arr[mid] < arr[mid + 1]) {
//         // You're in the **ascending** part of the mountain
//         start = mid + 1;
//       } else {
//         // You're in the **descending** part of the mountain
//         end = mid;
//       }
//     }
  
//     // start === end → Peak element index
//     return start;
//   }
  

// console.log(findPeakElement(arr))

nums =[5,7,7,8,8,10]
target = 8
function searchRange(nums, target) {
  if(nums.length === 0){
      return [-1,-1]
  }
  let arr = []
  for(let i = 0;i<nums.length;i++){
      if(nums[i] === target){ 
          arr.push(i)
      }else{
          return [-1,-1]
      }
  }
  return arr
};


a = searchRange(nums,target)

console.log(a,"this is a")

function increasingTriplet(nums){

    let first = Infinity;
    let second = Infinity;

    for (let num of nums) {
        if (num <= first) {
            first = num; // smallest so far
        } else if (num <= second) {
            second = num; // second smallest
        } else {
            // num > first and num > second → triplet found
            return true;
        }
    }
    
    return false;

    // let i = nums[0]
    // let j = nums[1]
    // let k = nums[2]
    // for(let a = 0 ;a<nums.length;a++){
    //     if(i<j && j<k){
    //         console.log('this is true')
    //         return true
    //     }
    //     i = nums[0+a]
    //     j = nums[1+a]
    //     k = nums[2+a]
    // } 

    // return false 
}
x = increasingTriplet([20,100,10,12,5,13])
console.log(x)




const express = require('express')

const app = express()


const port = 8080



app.get('/',(req,res))
app.listen(port,()=>{
    console.log(`server is running in ${port}`)
})

