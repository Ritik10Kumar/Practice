// function fetch(){
//     A = 7
//     console.log(A)
// }
// let A
// fetch();




// let e = 5
// {
//     let e = 3
//     console.log(e,"inside")
// }

// console.log(e,"outside")



// // these functions are defined globally thats why we can use it inside function
// var x = 90
// let y = 80
// const z = 70

// function help(){
//     console.log(x,y,z," == hello yello")
// }
// console.log(help()) // there is undefined in output along with 90,80,70 because It first executes help(), which logs 90 80 70 == hello yello.
// // Then console.log() prints the return value of help() → which is undefined.


// // Global Scope
// var a = 1;
// let b = 2;
// const c = 3;

// function testScope() {
//     var a = 10; // function-scoped
//     let b = 20; // block-scoped
//     const c = 30;

//     if (true) { //this if condition will be true always and the code inside will execute always
//         var a = 100;  // still function-scoped!
//         let b = 200;  // new block-scoped variable
//         const c = 300; // new block-scoped constant
//         // a = 8000
//         // b = 500
//         console.log("Inside if block:", a, b, c); // 100 200 300
//     }

//     console.log("Inside function:", a, b, c); // 100 20 30
// }

// testScope();

// console.log("Outside function:", a, b, c); // 1 2 3


// const user = new Object()

// user.name = 'ritik'
// user.partner = 'swati'

// console.log(user,"this si user")




// const original = { a: 1, b: 2 };

// // Clone using Object.assign
// const copy1 = Object.assign({}, original);
// console.log(copy1,"copy1");

// original.a = 45
// console.log(original,"original")
// console.log(copy1,"copy1,2");



// const usr = {
//     a: 1, b: 2
// }

// const newusr = usr
// newusr.a = 78

// console.log(newusr , "newusr", usr,"usr")



// const obj = {
//   name: "Ritik",
//   sayHi: function() {
//     const arrow = () => console.log(this.name);
//     arrow(); // ✅ Ritik
//   }
// };

// obj.sayHi();




// let xobject = {
//     name: "ritik",
//     lastname: "kumar",
//     printfulname: function (town) {
//         console.log(this.name + this.lastname, `i am from ${town}`)
//     }
// }


// xobject.printfulname()

// let person={
//     name:"swati",
//     lastname:"sukla",
//     age:"23"
// }

// xobject.printfulname.call(person,'meerut') 


// obj.sayHi.call(person)


// // console.log(add(2,3))

// const add = function(a,b){
//     return a+b
// }





// (function () {
//   const secret = "hidden";
//   console.log("Inside IIFE");
// })();

// console.log(secret); // ❌ ReferenceError



// const http = require('http');
// const { act } = require('react');
// const port = 9090
// const server = http.createServer()

// server.listen(port,()=>{
//     console.log("running")
// })

//PaisaBazaar Asked Intervew
// Loop the linked list ( this is the que he aske)
// Merge Two Sorted arrays Design employee database OOPS concepts
// What is Dependency Tree? Write a program to creqte it.
// What is Hashing how it is efficient
// Dsa dbms hobbies and projects
//  The question was about Nodejs
//  The question was to build a linked list in Nodejs
// The first question was related to DSA
// The question was related to SQL
// Sorting of an array and aptitude
// BFS graph traversal
// Binary tree question

// PolicyBazaar Asked Questions
// What are boxing and unboxing in programming?
// How would you optimize your stored procedure?
// Nth Fibonacci Number Problem Statement
// Calculate the Nth term in the Fibonacci sequence, where the sequence is defined as follows: F(n) = F(n-1) + F(n-2), with initial conditions F(1) = F(2) = 1  (The input consists of a single integer ‘N’ for each test case.)
// Right View of Binary Tree .Given a binary tree of integers, your task is to output the right view of the tree.The right view of a binary tree includes the nodes that are visible when the tree is observed from the right, listed from top to bottom. (Input:The first line contains an integer 'T', the number of test cases. Each test case consists of a line of integers representing the level order traversal of the tree. Use -1 for null nodes.Output:For each test case, print the right view of the tree on a new line.)
// DFS Traversal Problem Statement .Given an undirected and disconnected graph G(V, E), where V is the number of vertices and E is the number of edges, the connections between vertices are provided in the 'GRAPH' matrix. Each element of the matrix denotes an edge between two vertices.
// BFS Traversal in a Graph .Given an undirected and disconnected graph G(V, E) where V vertices are numbered from 0 to V-1, and E represents edges, your task is to output the BFS traversal starting from the 0th vertex.
// Height of Binary Tree .You are provided with the Inorder and Level Order traversals of a Binary Tree composed of integers. Your goal is to determine the height of this Binary Tree without actually constructing it.The height of a Binary Tree is defined as the number of edges on the longest path from the root node to any leaf node. If the tree consists of only a single node, the height is considered to be 0.
// Determine the Left View of a Binary Tree .You are given a binary tree of integers. Your task is to determine the left view of the binary tree. The left view consists of nodes that are visible when the tree is viewed from the left side.
//  System design of oyo rooms
//  Priority queue code, Fibonacci series, bfs-dfs implementation,tree data structures (like height,left view,right view) basically easy level question of GFG on tree

//GlASSDOOR REVIEWS
// write a query to delete a record in sql -- 
// Optimal code for Finding the greatest element of an integer array -- 
// find missing element in an array , --
//  find repeating element , --
//  not important   // implementing DS priority queues to describe how a elevator system works with two elevators.
// how to iterate a map. to check whether a triangle formed is equilateral or not. --
// Rotten oranges question from GFG Spiral traversal of binary tree
// Describe about authorization use in web api? --
// find pairs with given sum --- 
// Write a program to print all permutations of a given string 3 --
// Tree Traversal
// Asked Design Pattern and Dependency Injection.---
// socket.io vs api and mogoDb queries. --




function missingnumber(arr){
    let n = arr.length + 1
    let totalSum = (n*(n+1)/2)
    let actualsum = arr.reduce((num,sum)=> num+sum)
    console.log(totalSum - actualsum)
}

missingnumber([1,2,4,5])


function secondlargest(arr){
    let largest = -Infinity
    let secondlargest = -Infinity

    for(let i = 0;i<arr.length;i++){
        if(arr[i] > largest){
            secondlargest = largest
            largest = arr[i]
        }if(arr[i] > secondlargest && arr[i] !== largest){
            secondlargest = arr[i]
        }
    }

    console.log(largest,secondlargest)

}
secondlargest([1,2,5,4,3])


function sortArr(arr){
    if(arr.length <= 1) return arr
    let left = []
    let right = []
    let pivot = arr[arr.length -1]
    for(let i = 0;i<arr.length -1;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...sortArr(left),pivot,...sortArr(right)]
 
}

console.log(sortArr([4,3,6,5,1,2]))

function maxchar(str){
    let maxCharCount = 1
    let maxchar = str[0]
    let currentchar =  str[0]
    let currenctCharCount = 1
    for(let i = 1;i<str.length;i++){
        if(str[i] === currentchar){
            currenctCharCount ++
        }else{
            currentchar = str[i]
            currenctCharCount = 1
        }

        if(currenctCharCount > maxCharCount){
            maxCharCount = currenctCharCount
            maxchar = currentchar
        }
    }

    console.log(maxCharCount,maxchar)
}

maxchar('aabbbccccbb')


function twosum(arr,target){
const map = new Map()
for(let i = 0 ;i<arr.length - 1;i++){
    let compliment  = target - arr[i]
    if(map.hasOwnProperty[compliment]){
        return [map[compliment],i]
    }else{
        map[arr[i]] = i
    }
}
return null
}

console.log(twosum([1,2,3,4,5],7))

function maxsubarr(arr){
    let maxsum = -Infinity
    let currentsum = -Infinity

    let start = 0 ; let end = 0;let tempstart = 0

    for(let i = 0;i<arr.length;i++){
        currentsum += arr[i]
        if(currentsum > maxsum){
            maxsum = currentsum
            start = tempstart
            end = i
        }
        if(currentsum < 0){
            currentsum = 0
            tempstart = i+1
        }
    }

    console.log(maxsum,arr.slice(start,end+1))
}

maxsubarr([-2, 1, -3, 4, -1, 2, 1, -5, 4])


function findelementbyBS(arr,target){
    let start = 0
    let end = arr.length-1
    while(start <= end){
        let mid = Math.floor((start+end)/2)
        if(arr[mid] === target) return mid
        if(arr[mid] < target){
            start = mid + 1
        }else{
            end = mid-1
        }
    }

    return -1
}

console.log(findelementbyBS([10, 20, 30, 40, 50, 60, 70, 80, 90], 60))


function bracketcheck(str){
    const stack = []
    const bracketmap = {
        ')':'(',
        ']':'[',
        '}':'{'
    }

    for(let char of str){
        if(['(','{','['].includes(char)){
            stack.push(char)
        }else if([')','}',']'].includes(char)){
                if(stack.pop() !== bracketmap[char]){
                    return false
                }
            }
        }
    
    return true
}
console.log(bracketcheck("({[]}[])"), "this is areBracketsBalanced");



function movezeros(arr){
    let pos  = 0
    for(let i = 0;i<arr.length;i++){
        if(arr[i] !== 0){
            arr[pos++] = arr[i]
        }
    }

    while(pos < arr.length){
        arr[pos++] =0
    }

    console.log(arr)
}
movezeros([0, 1, 0, 3, 12])

function isSubsequence(s,t){
    let i = 0 ;
    let j = 0
    while(i<s.length && j < t.length){
        if(s[i] == t[j]){
        i++
        } 
        j++  
    }
    console.log(i === s.length)
}

isSubsequence('acb', 'amkbjichu')


function findTrippletes(arr){
    let first = Infinity
    let second = Infinity
    for(let num of arr){
        if(num <= first){
            first  = num
        }else if(num <= second){
            second = num
        }else{
            return(`${first},${second},${num}`)
        }
    }
    return false
}


console.log(findTrippletes([5, 1, 6, 2, 7]))

function productitself(arr){
    let n = arr.length
    let result  = new Array(n).fill(1)

    let left = 1
    for(let i = 0;i<n;i++){
        result[i] = left
        left *= arr[i]
    }

    let right = 1
    for(let i = n-1;i>= 0;i--){
        result[i] *= right
        right *= arr[i]
    }

    console.log(result)
}

productitself([1,2,3,4])


function isAnagram(s,t){
    if(s.length !== t.length) return false
    let count = {}

    for(let char of s ){
        count[char] = (count[char] || 0 ) + 1
    }

    for(let char of t){
        if(!count[char]) return false
        count[char]--
    }
    return true
}



function dutchNationFlag(arr){
    let low = 0 ; let mid = 0 ; let high = arr.length -1

    while(mid<= high){
        if(arr[mid] === 0){
            [arr[low],arr[mid]] = [arr[mid],arr[low]]
            low++
            mid ++
        }else if(arr[mid] === 1){
            mid ++
        }else{
            [arr[mid],arr[high]] = [arr[high],arr[mid]]
            high--
        }
    }
}


function palindrome(s){
    let left = 0
    let right = s.length -1
    while(left < right){
        if(s[left] !== s[right]) return false
        left ++
        right --
    }
    return true
}



function mergetwoarr(arr1,arr2){
    let i  = 0 
    let j = 0
    let result = []
    while(i<arr1.length && j < arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i])
            i++
        }
        else{
            result.push(arr2[j])
            j++
        }
    }

    while(i<arr1.length){
        result.push(arr1[i])
            i++
    }

    while(j < arr2.length){
        result.push(arr2[j])
            j++
    }

    console.log(result)
}


mergetwoarr([1, 3, 5, 7],[2, 4, 6, 8, 10])


function stringpermutation(str){
    if(str.length === 1) return [str]
    let result  = []

    for(let i = 0; i < str.length; i++){
        let currenctChar = str[i]
        let chars = str.slice(0,i) + str.slice(i+1)
        let remainchars = stringpermutation(chars)
        for(let i = 0; i < remainchars.length; i++){
            result.push(currenctChar + remainchars[i])
        }
    }

console.log(result)
}



// stringpermutation('abc')


// input = [1,2,3,4]
// output  = [4,1,2,3]
function rotaterightbyone(arr){
    if(arr.length <= 1) return arr
    let result = []
    result.push(arr[arr.length-1])
    for(let i = 0;i<arr.length-1;i++ ){
        result.push(arr[i])
    }
    console.log(result)
}

rotaterightbyone([1,2,3,4])


function rotateLeftByOne(arr){
    if(arr.length <= 1) return arr

    let result = []
    for(let i = 1;i<arr.length;i++ ){
        result.push(arr[i])
    }
    result.push(arr[0])

    console.log(result)
}

rotateLeftByOne([1,2,3,4])


console.log([1,2,3,4,5].length,2%5,2/5)

// [10,20,30,40,50,60],2
//[30,40,50,60,10,20]

function rotatearr(arr,k){
let n = arr.length
let result = []
for(let i = k;i<arr.length;i++){
    result.push(arr[i])
}
for(let i = 0;i<k;i++){
    result.push(arr[i])
}

console.log(result)
}

rotatearr([10,20,30,40,50,60],2)
