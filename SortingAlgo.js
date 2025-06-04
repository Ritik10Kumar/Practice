let arr = [2,0,1,10]

// function reverseBubbleSort(arr) {
//   let n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = n - 1; j > i; j--) {
//       if (arr[j] < arr[j - 1]) {
//         [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//       }
//     }
//   }

//   return arr;

// }

// let Output = reverseBubbleSort(arr)
// console.log(Output,"BubleSort")


// function bubbleSort(arr) {
//   let n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // Swap using destructuring
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }

//   return arr;
// }

// Example usage:

// console.log(bubbleSort(arr)); // Output: [0, 1, 2]



function squaredSort(arr){ //ascending oredr
//approach1 
// let nums = arr.map((x) => x*x)
// let n = nums.length
// for(let i = 0 ; i<n-1;i++){
//     for(let j = n-1 ;j>i;j--){
//         if(nums[j]< nums[j - 1]){
//             [nums[j] , nums[j - 1]] = [nums[j-1],nums[j]]
//         }
//     }
// }
// return nums

//approach2 better approach

let n = arr.length
let result = new Array(n)
let left = 0
let right = n-1
let index = n-1
while(left <= right){
    let leftsquare = arr[left]*arr[left]
    let rightsquare = arr[right]*arr[right]
    if(leftsquare>rightsquare){
        result[index--] = leftsquare
        left++
    }else{
        result[index--] = rightsquare
        right--
    }
}
return result

}

let Output = squaredSort(arr)
console.log(Output,"squareasc")


function squaredSortDesc(arr){
    let n = arr.length
    let result = new Array(n)
    let left = 0
    let right = n-1
    let index  = 0
    while(left <= right){
        let leftsquare = arr[left] * arr[left]
        let rightsquare = arr[right] * arr[right] 

        if(leftsquare > rightsquare){
            result[index ++] = leftsquare
            left++
        }else{
             result[index ++] = rightsquare
            right--
        }
    }

    return result
}

Output = squaredSortDesc(arr)
console.log(Output,"squaredesc")

function sortarrasc(arr){
    let n = arr.length
    let left = 0
    let right = n-1
    let index = n-1
    let result = new Array(n)

    while(left <= right){
        if(arr[left] > arr[right]){
            result[index --] = arr[left]
            left ++
        }else{
            result[index --] = arr[right]
            right --
        }
    }

    return result
}

Output = sortarrasc(arr)
console.log(Output,"sortarrasc")


function sortarrdesc(arr){
    let n = arr.length
    let left = 0
    let right = n-1
    let index = 0
    let result = new Array(n)

    while(left <= right){
        if(arr[left] > arr[right]){
            result[index ++] = arr[left]
            left ++
        }else{
            result[index ++] = arr[right]
            right --
        }
    }

    return result
}

Output = sortarrdesc(arr)
console.log(Output,"sortarrdesc")


function sortArray(nums) {
  // Base case
  if (nums.length <= 1) return nums;

  // Split array into two halves
  let satrt
  const mid = Math.floor(nums.length / 2);
  const left = sortArray(nums.slice(0, mid));
  const right = sortArray(nums.slice(mid));

  // Merge two sorted halves
  return merge(left, right);
}

function merge(left, right) {
  let merged = [], i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] >= right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  // Append remaining elements
  while (i < left.length) {
    merged.push(left[i]);
    i++;
  }
  while (j < right.length) {
    merged.push(right[j]);
    j++;
  }

  return merged;
}

// Test
const nums = [5, 2, 3, 1];
console.log(sortArray(nums)); // Output: [1, 2, 3, 5]



