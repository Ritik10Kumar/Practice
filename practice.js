
// // call bind apply

// // call when we call or borrow a function from one object to another it calls call method 
// // apply function is similar as call but it takes argument in an array
// // bind method same as call function but it returns a function 

let xobject = {
    name: "ritik",
    lastname: "kumar",
    printfulname: function (town) {
        console.log(this.name + this.lastname, `i am from ${town}`)
    }
}


xobject.printfulname()

let person = {
    name: "swati",
    lastname: "sukla",
    age: "23"
}


xobject.printfulname.call(person, 'meerut')
xobject.printfulname.apply(person, ["Mumbai"]); // Takes argument in array
let bindfunc = xobject.printfulname.bind(person, "MEerut"); //same as call method but return a function 
bindfunc()

function printmsg(msg, times) {
    let delay = 0
    for (let i = 0; i < times; i++) {
        
        delay += i * 1000
        setTimeout(() => {
            console.log(`${msg} (after ${i} second${i > 1 ? 's' : ''})`);
        }, delay)
    }
}

// printmsg("help", 5)

let number = [1, 2, 3, 5, 6, 7]

function missingNumber(arr) {
    let n = arr.length + 1
    let totalSum = (n * (n + 1) / 2)
    let actualSum = arr.reduce((num, sum) => num + sum, 0)
    console.log(actualSum, "this is actualSum")
    console.log(totalSum - actualSum, "this is missing number")
}

missingNumber(number)



function secondlargest(arr) {
    let largest = -Infinity
    let secondlargest = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondlargest = largest
            largest = arr[i]
        } else if (arr[i] > secondlargest && arr[i] !== largest) {
            secondlargest = arr[i]
        }
    }

    console.log(secondlargest)
}


secondlargest(number)



function sortArry(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let left = []
    let right = []
    let pivot = arr[arr.length - 1]
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }

    }

    return [...sortArry(left), pivot, ...sortArry(right)]
}
number = [5, 2, 3, 1, 5, 7]

x = sortArry(number)
console.log(x, "this is sortArry function")


function twoSum(arr, target) {
    const map = {}
    for (let i = 0; i < arr.length; i++) {
        let compliment = target - arr[i]
        if (map.hasOwnProperty(compliment)) {
            return [map[compliment], i]
        } else {
            map[arr[i]] = i
        }
    }
    return [null]

}


function maxSubarr(arr) {
    let maxsum = -Infinity
    let currenctsum = 0
    let start = 0; let tempStart = 0; let end = 0

    for (let i = 0; i < arr.length; i++) {
        currenctsum += arr[i]

        if (currenctsum > maxsum) {
            maxsum = currenctsum
            start = tempStart
            end = i
        } if (currenctsum < 0) {
            currenctsum = 0
            tempStart = i + 1
        }

    }

    return {
        maxsum,
        subArr: arr.slice(start, end + 1)
    }
}


x = maxSubarr([-2, 1, -3, 4, -1, 2, 1, -5, 4])
console.log(x, "this is maxSubarr")


function findelelementbyBS(arr, target) {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] == target) {
            return mid
        } else if (arr[mid] < target) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return -1
}


x = findelelementbyBS([10, 20, 30, 40, 50, 60, 70, 80, 90], 60)

console.log(x, ']][][]')






function areBracketsBalanced(str) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {
        if (['(', '{', '['].includes(char)) {
            stack.push(char);
        } else if ([')', '}', ']'].includes(char)) {

            if (stack.pop() !== bracketMap[char]) {
                return false; // mismatched bracket
            }
        }
    }

    return stack.length === 0; // stack should be empty if balanced
}


console.log(areBracketsBalanced("({[]}[])"), "this is areBracketsBalanced");








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


let Input = [0, 1, 0, 3, 12]

var moveZeroesEnd = function (nums) { // in the end

    let insertPos = 0;

    // Step 1: Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos++] = nums[i];
        }
    }

    // Step 2: Fill remaining positions with 0s
    while (insertPos < nums.length) {
        nums[insertPos++] = 0;
    }

    return nums
};


let bnm = moveZeroesEnd(Input)
console.log(bnm, "this is bnm")


function sequsingrecursion(arr, index = 0, current = [], final = []) {
    if (index === arr.length) {
        final.push([...current]);
        return;
    }

    current.push(arr[index]);
    sequsingrecursion(arr, index + 1, current, final);

    current.pop();
    sequsingrecursion(arr, index + 1, current, final);

    return final;
}

// Example usage
let input = [1, 2, 3];
const subsequences = sequsingrecursion(input);
console.log(subsequences,"this is sequence");


function isSubsequence(s, t) {
    let i = 0
    let j = 0
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++
        }
        j++
    }

    return i === s.length
}


let bnx = isSubsequence('abc', 'amkbjichu')
console.log(bnx, "this is isSubsequence")


function revstring(str) {

    //approach 1  
    // let rev = ''
    // for (let i = str.length - 1; i >= 0; i--) {
    //     rev += str[i]
    // }
    // return rev

    //approach 2
    // if (str === '') return "";
    // else {
    //     return revstring(str.substr(1)) + str.charAt(0)
    // }

    //third approach

    if(str.length <=1 ) return str
    return revstring(str.slice(1))+str[0]
     
}

x = revstring("hello")
console.log(x, 'this is x rev')

let namex = 'Global'
function printName() {
    console.log(namex, "this is in printName function")
}

function execute(callback) {
    let namex = 'Local'
    callback()
}

execute(printName)



function findTrippletes(arr) {
    // Any triplet where i < j < k is valid.
    let first = Infinity
    let second = Infinity

    for (let num of arr) {
        if (num <= first) {
            first = num
        } else if (num <= second) {
            second = num
        } else {
            // return true
            return { status: true, tripplets: `Triplet found: ${first}, ${second}, ${num}` }
        }
    }

    return false
}

input = [5, 1, 6, 2, 7]
let output = findTrippletes(input)
console.log(output,'tripletts')



function productExceptItself(nums) {
    //product means multiplication
    let n = nums.length
    let result = new Array(n).fill(1)

    let left = 1
    for (let i = 0; i < n; i++) {
        result[i] = left
        left *= nums[i]
    }


    let right = 1
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= right
        right *= nums[i]
    }

    return result
}

input = [1, 2, 3, 4]
output = productExceptItself(input)
console.log(output, "][][outpt")


//prototype inheritance
const animal = {
    eat: true,
    walk() {
        console.log("animals can walk")
    },
    tail: function () {
        console.log("animals have tail")
    }
}
const dog = {
    voice: function () {
        console.log("dog can bark")
    }

}

dog.__proto__ = animal

console.log(dog.eat)
dog.tail()
dog.voice()




//find pivot index

input = [1, 7, 3, 6, 5, 6]
var pivotIndex = function (nums) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0

    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i
        }
        leftSum += nums[i]
    }
    return -1

};

console.log(pivotIndex(input), "]][[]input")



function SumOfFebonnaci(n) {
    if (n <= 1) return n;
    //sum of n elements of febonnaci series
    let a = 0
    let b = 1
    let sum = a + b
    for (let i = 2; i <=n; i++) {
        let next = a + b
        sum += next
        a = b
        b = next
    }
    return sum
    
}

output = SumOfFebonnaci(5)
console.log(output, "SumOfFebonnaci")



function fibonacciIterative(n) {
    let a = 0, b = 1;
    console.log("Fibonacci Series (Iterative):");
    for (let i = 2; i <= n; i++) {
        console.log(a); //to print one by one element
        [a, b] = [b, a + b];
    }
    return b
}

console.log(fibonacciIterative(10),'this is fibonacciIterative');






function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const count = {};
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
}



function dutchNationFlag(arr) {

    let low = 0; let high = arr.length - 1; let mid = 0

    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]]
            low++
            mid++
        } else if (arr[mid] === 1) {
            mid++
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]]
            high--
        }
    }
    return arr
}



function palindrome(s) {
    let left = 0
    let right = s.length - 1
    while (left < right) {
        if (s[left] != s[right]) return false
        left++
        right--
    }
    return true
}



function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}




function mergetwoarr(arr1, arr2) {
    let i = 0
    let j = 0
    let merge = []

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merge.push(arr1[i])
            i++
        }
        else {
            merge.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        merge.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        merge.push(arr2[j])
        j++
    }


    console.log(merge, "mergerarrays")
}


let a = [1, 3, 5, 7];
let b = [2, 4, 6, 8, 10];

mergetwoarr(a, b)

function stringpermutation(str) {

    if (str.length === 1) return [str]
    let result = []
    for (let i = 0; i < str.length; i++) {
        let current = str[i]
        let remainingchar = str.slice(0, i) + str.slice(i + 1)
        let remainingperm = stringpermutation(remainingchar)
        for (let i = 0; i < remainingperm.length; i++) {
            result.push(current + remainingperm[i])
        }
    }
    return result
}


output = stringpermutation('abc')
console.log(output,"stringpermutation")



function isogram(str) {
    let sett = new Set()
    for (let i = 0; i < str.length; i++) {
        if (sett.has(str[i])) return false
        sett.add(str[i])
    }

    return true

}

output = isogram('abc')
console.log(output)



function mergeUnsortedArrays(arr1, arr2) {
    // Step 1: Manually merge both arrays
    const merged = [];

    for (let i = 0; i < arr1.length; i++) {
        merged[merged.length] = arr1[i];
    }
    for (let j = 0; j < arr2.length; j++) {
        merged[merged.length] = arr2[j];
    }

    // Step 2: Sort using manual merge sort
    return mergeSort(merged);
}

// Merge Sort implementation
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = [];
    const right = [];

    for (let i = 0; i < mid; i++) left[left.length] = arr[i];
    for (let i = mid; i < arr.length; i++) right[right.length] = arr[i];

    return mergeSortedArrays(mergeSort(left), mergeSort(right));
}

// Manual merge function for sorted arrays
function mergeSortedArrays(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result[result.length] = left[i];
            i++
        } else {
            result[result.length] = right[j];
            j++
        }
    }

    while (i < left.length) {
        result[result.length] = left[i];
        i++
    }
    while (j < right.length) {
        result[result.length] = right[j];
        j++
    }

    return result;
}
const arr1 = [4, 2, 8, 1];
const arr2 = [7, 5, 3];
console.log(mergeUnsortedArrays(arr1, arr2))




function maxCharFrequency(str) {
  const freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let maxFreq = 0;
  let maxChar = '';

  for (let char in freq) {
    if (freq[char] > maxFreq) {
      maxFreq = freq[char];
      maxChar = char;
    }
  }

  return { char: maxChar, frequency: maxFreq };
}

// 🔁 Test it:

const result = maxCharFrequency("aabbbbccddde");
console.log(`Character '${result.char}' appears most frequently: ${result.frequency} times.`);

//hash function
function hash(key, size) {
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
        sum += key.charCodeAt(i);
    }
    return sum % size;
} 


// find pairs of elements of giving target
function findPairsOptimal(arr, target) {
  const seen = new Set();
  const result = new Set();

  for (let num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      const pair = [Math.min(num, complement), Math.max(num, complement)].toString();
      result.add(pair);
    }
    seen.add(num);
  }

  for (let pair of result) {
    console.log("(" + pair.split(",").join(", ") + ")");
  }
}




//check triangle un equalateral or not
function isEquilateral(triangleMap) {
  let values = [];

  // Collect all side lengths
  for (let value of triangleMap.values()) {
    values.push(value);
  }

  // Check if all sides are equal
  return values[0] === values[1] && values[1] === values[2];
}

// Example
const triangle = new Map([
  ['a', 5],
  ['b', 5],
  ['c', 5]
]);

console.log(isEquilateral(triangle)); // true



function towerOfHanoi(n, source, host, target) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${target}`);
        return;
    }
    // Move n-1 disks from source to host
    towerOfHanoi(n - 1, source, target, host);
    // Move the nth disk from source to target
    console.log(`Move disk ${n} from ${source} to ${target}`);
    // Move the n-1 disks from host to target
    towerOfHanoi(n - 1, host, source, target);
}
// Example usage: Solve Tower of Hanoi for 3 disks
const numberOfDisks = 3;
towerOfHanoi(numberOfDisks, 'A', 'B', 'C');





function duplicates(arr){
    if(arr.length <= 1) return arr
    let count = {} // in plan object keys are convert to string so before pushing we need to convert into Number
    let result = []
    for(let char of arr){
        count[char] = (count[char] || 0) + 1
    }
    for(let char in count){
        if(count[char]>1){
            result.push(Number(char))
        }
    }

    console.log(result,'duplicate')
}

duplicates([1,2,2,3,4,5,6,6,7])

// Array:[21,54,11,35,4,18], index:3; 

// output Array: [4,18,21,54,11,35]


function rotateArray(arr, index) {
    // // aproach 1
    let result = [];
    
    
    for (let i = index + 1; i < arr.length; i++) {
        result[result.length] = arr[i];
    }
    
    for (let i = 0; i <= index; i++) {
        result[result.length] = arr[i];
    }
    
    return result;


////approach 2
//     let end = []
//     let start = []
//     for(let i = 0;i<arr.length;i++){
//         if(i <= index ){
//             end.push(arr[i])
//         }else{
// start.push(arr[i])
//         }
//     }

//     return [...start,...end]
}
  

let xm = rotateArray([21,54,11,35,4,18],3)
console.log(xm,'this is x')



//  Rotate Array Left by k Positions 
function rotateLeft(arr, k) {
    let result = [];
    let n = arr.length;
    k = k % n; // to handle k > n

    for (let i = k; i < n; i++) {
        result.push(arr[i]);
    }
    for (let i = 0; i < k; i++) {
        result.push(arr[i]);
    }
    return result;
}

console.log(rotateLeft([1, 2, 3, 4, 5], 2)); // ➤ [3, 4, 5, 1, 2]


// Rotate Array Right by k Positions
function rotateRight(arr, k) {
    let result = [];
    let n = arr.length;
    k = k % n;

    for (let i = n - k; i < n; i++) {
        result.push(arr[i]);
    }
    for (let i = 0; i < n - k; i++) {
        result.push(arr[i]);
    }
    return result;
}

console.log(rotateRight([1, 2, 3, 4, 5], 2)); // ➤ [4, 5, 1, 2, 3]

// Rotate Array by One Position (Left)
function rotateLeftByOne(arr) {
    let result = [];

    for (let i = 1; i < arr.length; i++) {
        result.push(arr[i]);
    }
    result.push(arr[0]);

    return result;
}

console.log(rotateLeftByOne([1, 2, 3, 4])); // ➤ [2, 3, 4, 1]


// Rotate Array by One Position (Right)
function rotateRightByOne(arr) {
    let result = [];
    let n = arr.length;

    result.push(arr[n - 1]);
    for (let i = 0; i < n - 1; i++) {
        result.push(arr[i]);
    }

    return result;
}

console.log(rotateRightByOne([1, 2, 3, 4])); // ➤ [4, 1, 2, 3]


// Check if One Array is Rotation of Another
function isRotation(A, B) {
    if (A.length !== B.length) return false;

    for (let i = 0; i < A.length; i++) {
        let rotated = [];
        for (let j = i; j < A.length; j++) {
            rotated.push(A[j]);
        }
        for (let j = 0; j < i; j++) {
            rotated.push(A[j]);
        }

        // Check equality
        let same = true;
        for (let k = 0; k < B.length; k++) {
            if (rotated[k] !== B[k]) {
                same = false;
                break;
            }
        }

        if (same) return true;
    }

    return false;
}
console.log(isRotation([1,2,3,4,5], [3,4,5,1,2])); // ➤ true

// Rotate Array Until Sorted
function rotationsToSort(arr) {
    let n = arr.length;

    for (let k = 0; k < n; k++) {
        let isSorted = true;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                isSorted = false;
                break;
            }
        }

        if (isSorted) return k;

        // Rotate left by 1
        let first = arr[0];
        for (let i = 0; i < n - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[n - 1] = first;
    }

    return -1; // if not sortable by rotation
}
console.log(rotationsToSort([3, 4, 5, 1, 2])); // ➤ 3





//Search Element in Rotated Sorted Array
function ElementinRotatedSorted(arr,n,k){
//n = elements in array
// k = target
let low = 0
let high = n-1
while(low < high){
    let mid = (low + high)/2
    if(arr[mid] === k) return mid
    if(arr[low]< arr[mid]){
        if(arr[low]<= k && k <= arr[mid]){
            high = mid -1
        }else{
            low = mid+1
        }
    }else{
        if(arr[mid] <= k && k <= arr[high] ){
           low = mid + 1
        }else{
            high = mid -1
        }
    }
}

return -1

}





output = ElementinRotatedSorted([7,8,9,1,2,3,4],7,3)
console.log(output,"ElementinRotatedSorted")


function rotateArrayrightinplacemethod(arr,k){
let n = arr.length
k = k%n
reverse(0,n-1)
reverse(0,k-1)
reverse(k,n-1)

//to rotate left inplace method
// reverse(0,k-1)
// reverse(k,n-1)
// reverse(0,n-1)


function reverse(start,end){
    while(start<end){
        [arr[start],arr[end]] = [arr[end],arr[start]]
        start++
        end--
    }
}

return arr
}

output = rotateArrayrightinplacemethod([7,8,9,1,2,3,4],3)
console.log(output,"rotateArrayrightinplacemethod")


function maxConsecutiveChar(str) {
  if (!str.length) return null;

  let maxChar = str[0];
  let maxCount = 1;
  let currentChar = str[0];
  let currentCount = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      currentCount++;
    } else {
      currentChar = str[i];
      currentCount = 1;
    }

    if (currentCount > maxCount) {
      maxCount = currentCount;
      maxChar = currentChar;
    }
  }

  return {
    char: maxChar,
    count: maxCount,
    sequence: Array(maxCount).fill(maxChar)
  };
}

console.log(maxConsecutiveChar("aaabbbbbccccdd"),"this is maxConsecutiveChar");


function mostconsecutiveone(arr){
    let count = 0
    let maxcount = 0
    for(let i = 0;i<arr.length;i++){
        if(arr[i] ===1){
            count++
            maxcount = Math.max(maxcount,count)
        }else{
            count = 0
        }
    }

    return maxcount
}

console.log(mostconsecutiveone([1,1,0,1,1,1,0,0,1,]))

function lengthOfLongestSubstring(str){
    let set = new Set()
    let left = 0
    let maxLength = 0

    for(let right = 0; right<str.length;right++){
        while(set.has(str[right])){
            set.delete(str[left])
            left ++
        }
        set.add(str[right])
        maxLength = Math.max(maxLength,right-left+1)
    }
    console.log(maxLength)
}

lengthOfLongestSubstring('pwwkew')



function findPeakElement(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] < arr[mid + 1]) {
        // You're in the **ascending** part of the mountain
        start = mid + 1;
      } else {
        // You're in the **descending** part of the mountain
        end = mid;
      }
    }
   
    return start; // start is a indes if you want array peak element return arr[start] 
  }
  

console.log(findPeakElement([1, 3, 5, 7, 6, 4, 2]),'this is peak')

function searchRange(nums, target) {
  if(nums.length === 0){
      return [-1,-1]
  }
  let arr = []
  for(let i = 0;i<nums.length;i++){
      if(nums[i] === target){ 
          arr.push(i)
      }
  }
  return arr
};


console.log(searchRange([5,8,7,8,8,10],8))

let allKey = []
function checkObj(obj){
  Object.keys(obj).forEach(key =>{
    allKey.push(key)
    if(typeof(obj[key]) === 'object')checkObj(obj[key])
  })
  return allKey
}


person = {
  name: "John",
  age: 30,
  city: {loation:{longitude:"45678"}}
};



let v = checkObj(person)
console.log(v)



const numbers = [10, 20, 30, 40];
// // Custom prototype function to loop through an array using a for loop
Array.prototype.forEachCustom = function(callback) {    
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
};

numbers.forEachCustom((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
});
  

Array.prototype.filtermethod = function(callback){
    let result = []
    for(let i = 0;i<this.length;i++){
        if(callback(this[i],i,this)){
            result.push(this[i])
        }
    }
    return result
}

let evenNumbers = numbers.filtermethod(num => num % 2 === 0);
console.log(evenNumbers);  // Output: [2, 4, 6]


Array.prototype.mapmethod = function(callback){
    let result = []
    for(let i = 0;i<this.length;i++){
        result.push(callback(this[i],i,this))
    }
    return result
}

let mapnumber = numbers.mapmethod((num) =>{
     return num * 2
})
console.log(mapnumber)

let arr = [2,3,4]

Array.prototype.square = function(){
    let z = this.map((x) =>{return x*2})
    return z
}

console.log(arr.square())


function singlecharstring(str){
    // multiple char which is in str will only print once
    let result = ''
    for(let i = 0;i<str.length;i++){
        if(str[i] !== str[i -1]){
            result += str[i]
        }
    }
    console.log(result)
}

singlecharstring('aabcccdddee')






//1. Find the maximum and minimum element

function maximumandminimumelement(arr){
    let min = arr[0]
    let max = arr[0]

    for(let i = 0;i<arr.length;i++){
        if(arr[i] < min) min = arr[i]
        if(arr[i] > max) max = arr[i]
    }

    return [min , max]
}

//2. Reverse an array

function reversearr(arr){
let left = 0
let right = arr.length-1
while(left < right){
    [arr[left],arr[right]] = [ar[right],arr[left]]
    left++
    right--
}
console.log(arr)
}

//3. Check if the array is sorted
function checksortedarr(arr){
    let ascending = true
    let descending = true 
    for(let i = 0;i<arr.length;i++){
        if(arr[i] < arr[i-1]) ascending = false
        if(arr[i] > arr[i-1]) descending = false
    }
    return ascending || descending
}


// Remove duplicates from a sorted array(inplace method)
function removeduplicates(arr){
let i = 0
for(j = 1;j<arr.length;j++){
    if(arr[j] !== arr[i]){
        i++
        arr[i] = arr[j]
    }
}

return i+1 // when return only array having unique element length

// arr.length = i + 1; // to return array having unique element
//   return arr;
}

//4. Left rotate an array by 1 or by d places (solved above)


//  Move all zeroes to the end (solved above) 

// Find the missing number in a range (1 to n)  (solved above)

// Find the second largest element  (solved above)

// Find the second smallest element
function secondSmallest(arr){
let smallest = Infinity
let secondsmallest = Infinity
for(let i = 0;i<arr.length;i++){
    if(arr[i] < smallest){
        secondsmallest = smallest
        smallest = arr[i]
    }else{
        if(arr[i] < secondsmallest && arr[i] !== smallest){
            secondsmallest = arr[i]
        }
    }
}

return secondsmallest
} 


// Count the number of occurrences of a number (solved above)

// Find the frequency of each element (solved above)

// 🔁 Slightly Advanced
// Kadane’s Algorithm – Maximum subarray sum (solved above) 

// Two Sum Problem – Find two elements that sum to target (solved above)

// Subarray with given sum (using HashMap or Sliding Window) //wait 


// Leaders in an array (element greater than all to its right)

function leadersarray(arr){
    const leaders = []
    let n = arr.length -1
    let maxright = arr[n-1]
    for(let i = n-2;i>= 0 ;i--){
        if(arr[i]>maxright){
            maxright = arr[i]
            leaders.push(arr[i])
        }
    }

    return leaders.reverse()
}

// Longest subarray with 0 sum
function longestSubarrayWithSumK(arr, k) {
  const map = new Map();  // prefixSum → first index
  let prefixSum = 0;
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];

    // Case 1: whole subarray from 0 to i sums to k
    if (prefixSum === k) {
      maxLength = i + 1;
    }

    // Case 2: subarray from some index+1 to i sums to k
    if (map.has(prefixSum - k)) {
      const prevIndex = map.get(prefixSum - k);
      maxLength = Math.max(maxLength, i - prevIndex);
    }

    // Store prefixSum only if it’s not already stored
    if (!map.has(prefixSum)) {
      map.set(prefixSum, i);
    }
  }

  return maxLength;
}


// Stock Buy and Sell (Maximum profit)
function maxprofit(prices) {
    let maxprofit = 0
    let minprofit = Infinity
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minprofit) {
            minprofit = prices[i]
        } else {
            let profit = prices[i] - minprofit
            if (profit > maxprofit) {
                maxprofit = profit
            }
        }

    }

    //return maxprofit


    //second approach
    let min = prices[0]
    let profit = 0
    for(let i = 1;i<prices.length;i++){
        let cost = prices[i] - min
        profit = Math.max(profit,cost)
        min = Math.min(min,prices[i])
    }

    return profit
};

// 📙 Basic String Questions
// ✅ Easy Level
// Reverse a string (solved above)

// Check if a string is a palindrome (solved above)

// Count vowels and consonants 
function countvowelsconsonants(str){
let vowels = ['a','e','i','o','u']
let vowelscount = 0
let consonentscount = 0
for(let i = 0;i<str.length;i++){
    let a = str[i].toLowerCase()
    if(/[a-z]/.test(a)){
        if(vowels.includes(a)){
            vowelscount++
        }else{
            consonentscount++
        }
    }
}
console.log(vowelscount,consonentscount)
}

// Convert a string to uppercase/lowercase

// Check if two strings are anagrams (solved above)

// Find duplicate characters in a string (solved above)

// 🔁 Slightly Advanced
// Remove all duplicates from a string
function removeduplicatesfromstring(str){
    let seen = new Set()
    let result = ''
    for(let char of str){
        if(!seen.has(char)){
            seen.add(char)
            result += char
        }
    }
    console.log(result)
}

// Longest common prefix

// String compression (e.g., aabcc → a2b1c2)
function stringcompression(str){
    let count = 1
    let compressedstr = ''
    for(let i = 1;i<str.length;i++){
        if(str[i] === str[i-1]){
            count++
        }else{
            compressedstr += str[i-1]+count
            count = 1
        }
    }

    compressedstr += str[str.length - 1] + count
    return compressedstr.length<str.length?compressedstr:str //because we need to provide the small length 
}

// Check if a string is a rotation of another
function isRotation(s1, s2) {
  if (s1.length !== s2.length || s1.length === 0) return false;

  const combined = s1 + s1;
  const n = combined.length;
  const m = s2.length;

  // Manual substring check (sliding window)
  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    while (j < m && combined[i + j] === s2[j]) {
      j++;
    }
    if (j === m) return true;
  }

  return false;
}

// Find the first non-repeating character
function firstnonrepeatingchar(str){
let freq = new Map()
for(let char of str){
    freq[char] = (freq[char] || 0)+1
}

for(let char in freq){
if(freq[char] === 1){
    return char
}
}
return '-'
}

// Valid parentheses (using Stack) (solved above)

// Implement strstr() / substring search
function strStr(haystck,needle){
    if(needle === "") return 0
    const n = haystck.length
    const m = needle.length

    for(let i = 0;i<n-m;i++){
        let j = 0
        while(j < m && haystck[i+j] === needle[j]){
            j++
        }
        if(j===m) return i
    }
    return -1
}


// Flat Array Problem

function flatArray(arr){
//Approach one Recursive Approach
let result = []
for(let item of arr){
    if(Array.isArray(item)){
        result = result.concat(flatArray(item))
    }else{
        result.push(item)
    }
}
return result
}

console.log(flatArray([1, [2, [3, 4], 5], 6]))

function FlatnArray(arr){
    // Iterative Approach
    const stack = [...arr]
    const result = []
    while(stack.length){
        const item = stack.pop()
        if(Array.isArray(item)){
            stack.push(...item)
        }else{
            result.unshift(item)
        }
    }
    return result
}

console.log(FlatnArray([1, [2, [3, 4], 5], 6]))