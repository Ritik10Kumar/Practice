
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

let person={
    name:"swati",
    lastname:"sukla",
    age:"23"
}


xobject.printfulname.call(person,'meerut') 
xobject.printfulname.apply(person, ["Mumbai"]); // Takes argument in array
let bindfunc =  xobject.printfulname.bind(person, "MEerut"); //same as call method but return a function 
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

printmsg("help",5)

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
console.log(x,"this is sortArry function")


function maxChar(str) {
    let maxChar = ''
    let maxCharCount = 0
    let currenctChar = str[0]
    let currenctCharCount = 1
    for (let i = 0; i < str.length; i++) {
        if (str[i] == currenctChar) {
            currenctCharCount++
        } else {
            if (currenctCharCount > maxCharCount) {
                maxCharCount = currenctCharCount
                maxChar = currenctChar
            }
            currenctChar = str[i]
            currenctCharCount = 1
        }
    }
    if (currenctCharCount > maxCharCount) {
        maxCharCount = currenctCharCount
        maxChar = currenctChar
    }

    console.log(`maxchar ${maxChar} maxCharcput ${maxCharCount} this is maxChar function`)

}

maxChar(('abbcccdddd'))


function twoSum(arr, target) {
    const map = new Map()
    for (let i = 0; i < arr.length; i++) {
        let compliment = target - arr[i]
        if (map.hasOwnPropperty(compliment)) {
            return [map[compliment], i]
        } else {
            map[arr[i]] = 1
        }
    }

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


x = maxSubarr([2, 3, -8, 7, -1, 2, 3,-6])
console.log(x, "this is maxSubarr")


function findelelementbyBS(arr, target) {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] == target) {
            return mid
            break
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


// const person = {
//     name: "Ritik",
//     meta: {
//         age: 22,
//     }
// };
// person.self = person; // circular reference

//   const clone = deepCopy(person);

//   console.log(clone);
//   console.log(clone.self === clone);





const patients = [
    { id: 1, admitdate: '12-03-2024', disChargeDate: '31-03-2024' },
    { id: 2, admitdate: '01-03-2024', disChargeDate: '15-03-2024' },
    { id: 3, admitdate: '10-03-2024', disChargeDate: '20-03-2024' },
    { id: 4, admitdate: '15-03-2024', disChargeDate: '25-03-2024' },
    { id: 5, admitdate: '18-03-2024', disChargeDate: '28-03-2024' },
    { id: 6, admitdate: '25-03-2024', disChargeDate: '30-03-2024' },
];


function parseDate(dateStr) {
    const [day, month, year] = dateStr.split("-").map(Number)
    return new Date(year, month - 1, day)
}


function formateDate(date) {
    return date.toISOString().split('T')[0].split('-').reverse().join('-')
}

function findmaxPatient(arr) {
    let events = {}
    arr.forEach(a => {
        let admit = parseDate(a.admitdate)
        let discharge = parseDate(a.disChargeDate)
        let nextDay = new Date(discharge)
        nextDay.setDate(discharge.getDate() + 1)


        let aKey = admit.toISOString()
        let dKey = discharge.toISOString()

        events[aKey] = (events[aKey] || 0) + 1
        events[dKey] = (events[dKey] || 0) - 1

    })

    let sortdate = Object.keys(events).sort()
    let maxPatients = 0
    let currentPatients = 0
    let masdate = null


    sortdate.forEach(a => {
        currentPatients += events[a]
        if (currentPatients > maxPatients) {
            maxPatients = currentPatients
            masdate = new Date(a)
        }
    })

    console.log(maxPatients, formateDate(masdate))
}

findmaxPatient(patients)





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

var moveZeroes = function (nums) {
    //easy approach 
    //   let ones = []
    //   let zeros = []
    //   let final = []
    //   for(let i = 0;i<nums.length;i++){
    //     if(nums[i] === 0){
    //       zeros.push(nums[i])
    //     }else{
    //       ones.push(nums[i])
    //     }
    //   }

    //   ones = ones.sort((a,b) => a-b)
    //   final = [...ones , ...zeros]
    //   return final

    //   corect approach
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
};


let bnm = moveZeroes(Input)
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
console.log(subsequences);


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



function combinationSum(candidates, target) {
    const result = [];

    function backtrack(start, current, sum) {
        if (sum === target) {
            result.push([...current]);
            return;
        }

        if (sum > target) return;

        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]);
            backtrack(i, current, sum + candidates[i]);
            current.pop();
        }
    }

    backtrack(0, [], 0);
    return result;
}



function revstring(str) {

    //approach 1  
    // let rev = ''
    // for (let i = str.length - 1; i >= 0; i--) {
    //     rev += str[i]
    // }
    // return rev

    //approach 2
    if (str === '') return "";
    else {
        return revstring(str.substr(1)) + str.charAt(0)
    }
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
console.log(output)



function productExceptItself(nums) {
    //product means multiplication
    let n = nums.length
    let result = new Array(n).fill(1)

    let left = 1
    for(let i = 0;i<n;i++){
        result[i] = left
        left *= nums[i]
    }


    let right = 1
    for(let i = n-1;i>=0;i--){
        result[i] *= right
        right*= nums[i]
    }

    return result
}

input = [1,2,3,4]
output = productExceptItself(input)
console.log(output,"][][outpt")


//prototype inheritance
const animal = {
    eat:true,
    walk(){
        console.log("animals can walk")
    },
    tail:function(){
        console.log("animals have tail")
    }
}

const dog = {
    voice:function(){
console.log("dog can bark")
    }
    
}


dog.__proto__ = animal

console.log(dog.eat)
dog.tail()




//find pivot index

input = [1,7,3,6,5,6]
var pivotIndex = function(nums) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0

    for(let i = 0;i<nums.length;i++){
        if(leftSum === totalSum - leftSum - nums[i]){
            return i
        }
        leftSum += nums[i]
    }
    return -1

};

console.log(pivotIndex(input),"]][[]input")



function SumOfFebonnaci(n){
    //sum of n elements of febonnaci series
    let a = 0 
    let b = 1
    let sum = a+b
    for(let i = 2;i<n;i++){
        let next = a+b
        sum += next
        a= b
        b = next
    }
return sum
}

output = SumOfFebonnaci(5)
console.log(output,"SumOfFebonnaci")


// function febonnaci(){
//     let n = 10
//     let a= 0 
//     let b = 1
//     for(let i = 0;i<n;i++){
//         [a,b] = [b,a+b]
//     }
// }


function fibonacciIterative(n) {
    let a = 0, b = 1;
    console.log("Fibonacci Series (Iterative):");
    for (let i = 0; i < n; i++) {
        console.log(a);
        [a, b] = [b, a + b];
    }
}

fibonacciIterative(10);