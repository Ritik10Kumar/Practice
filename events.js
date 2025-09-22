const express = require('express')
const app = express()
const PORT = 9000

const loggermiddleware = (req,res,next)=>{
console.log(`${new Date().toLocaleString()} ${req.method} , ${req.url}`)
next()
}

const authentiationmiddleware = (req,res,next) =>{
if(req.head.token.role === 'admin'){
next()
}
res.status(403).send('Unauthorize User')
}

app.use(loggermiddleware)

app.get('/getdata' ,(req,res) =>{
res.status(200).send("Data Fetched Successfully")
}
)


function revstring(str){
let revstr = ''
for(let char of str){
revstr = char+revstr
}
return revstr
}
console.log(revstring('ritik'))





const original = {
  name: "Ritik",
  address: { city: "Delhi", zip: 123456 }
};

const deep = structuredClone(original); // ✅ native deep copy (modern browsers/Node.js 17+)

// Modify nested
deep.address.city = "Mumbai";

console.log(original.address.city);

app.listen(PORT,()=>{
console.log("Server is running")
})



// Sliding Window
// leetcode problem
// 3.longest substring without repeating character
// 76.minimum window substring
// 209.minimum size subarray sum
//424.longest repeating character replacement

//two pointers
// 167.two sum 2 (input array is sorted)
// 15.3sum
// 125.valid palindorme
// 88.merge sort array
// 344.reverse string 

//Fast and Slow pointers
// 141.linked list cycle
// 142.linked list cycle 2 
// 876.middle of the linkedlist
// 202.happy number


//BInary search
// 704.binary search //done 
// 33.serach in rotated sorted array
// 34.find first and last position of element in sorted array


// Dynamic Programming
// 300.longest increasing subsequence
// 70.climbing stars
// 322.coin change
// 198.house robber




// System Design 
// Design WhatsApp messaging (1:1 chat, group chat)
// Design a URL shortener (like bit.ly)  -- done 
// Design a scalable notification system
// Design a file upload service (like Google Drive) -- done
// Design Google Maps backend (location-based queries)
// Design a category-subcategory system 