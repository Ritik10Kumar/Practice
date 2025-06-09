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

//approach2 better approach ascending approach

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


//1. Sort an Array — LeetCode 912

function sortArray(nums) {
  const temp = new Array(nums.length); // Single reusable buffer
  mergeSort(nums, 0, nums.length - 1, temp);
  return nums;
}

function mergeSort(arr, start, end, temp) {
  if (start >= end) return;

  const mid = Math.floor((start + end) / 2);
//   const mid = start + (end - start) /2
  mergeSort(arr, start, mid, temp);      // Sort left half
  mergeSort(arr, mid + 1, end, temp);    // Sort right half
  merge(arr, start, mid, end, temp);     // Merge sorted halves
}

function merge(arr, start, mid, end, temp) {
  let i = start, j = mid + 1, k = start;

  // Merge the two halves into temp
  while (i <= mid && j <= end) {
    if (arr[i] >= arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }

  // Copy remaining elements from left half
  while (i <= mid) {
    temp[k++] = arr[i++];
  }

  // Copy remaining elements from right half
  while (j <= end) {
    temp[k++] = arr[j++];
  }

  // Copy merged elements back to original array
  for (let p = start; p <= end; p++) {
    arr[p] = temp[p];
  }
}

// Test
const nums = [5, 2, 3, 1];
console.log(sortArray(nums)); // Output: [1, 2, 3, 5]



//2. Count Inversions in an Array — Classic Problem (Similar to Reverse Pairs)

function countInversions(nums) {
  let count = 0;
  const temp = new Array(nums.length);
  function mergeSort(start, end) {
    if (start >= end) return;
    const mid = Math.floor((start + end) / 2);
    mergeSort(start, mid);
    mergeSort(mid + 1, end);
    let i = start, j = mid + 1, k = start;
    while (i <= mid && j <= end) {
      if (nums[i] <= nums[j]) {
        temp[k++] = nums[i++];
      } else {
        count += (mid - i + 1); // Count inversions
        temp[k++] = nums[j++];
      }
    }
    while (i <= mid) temp[k++] = nums[i++];
    while (j <= end) temp[k++] = nums[j++];
    for (let p = start; p <= end; p++) nums[p] = temp[p];
  }
  mergeSort(0, nums.length - 1);
  return count;
}

Output = countInversions([2, 4, 1, 3, 5])
console.log(Output,"countInversions")

//3.  Reverse Pairs — LeetCode 493

var reversePairs = function(nums) {
  return reversemergeSort(nums, 0, nums.length - 1);
};

function reversemergeSort(nums, start, end) {
  if (start >= end) return 0;
  const mid = Math.floor((start + end) / 2);
  let count = reversemergeSort(nums, start, mid) + reversemergeSort(nums, mid + 1, end);
  let j = mid + 1;
  for (let i = start; i <= mid; i++) {
    while (j <= end && nums[i] > 2 * nums[j]) j++;
    count += j - (mid + 1);
  }
  reversemerge(nums, start, mid, end);
  return count;
}

function reversemerge(nums, start, mid, end) {
  let temp = [];
  let i = start, j = mid + 1;
  while (i <= mid && j <= end) {
    if (nums[i] <= nums[j]) temp.push(nums[i++]);
    else temp.push(nums[j++]);
  }
  while (i <= mid) temp.push(nums[i++]);
  while (j <= end) temp.push(nums[j++]);
  for (let k = 0; k < temp.length; k++) nums[start + k] = temp[k];
}



Output = reversePairs([1, 3, 2, 3, 1])
console.log(Output,"counreversePairstSmaller")





//4.  Count of Smaller Numbers After Self — LeetCode 315

var countSmaller = function(nums) {
    let result = new Array(nums.length).fill(0);
    let arr = nums.map((val, idx) => ({ val, idx }));

    function mergeSort(start, end) {
        if (end - start <= 1) return;
        const mid = Math.floor((start + end) / 2);
        mergeSort(start, mid);
        mergeSort(mid, end);
        merge(start, mid, end);
    }

    function merge(start, mid, end) {
        let temp = [];
        let i = start, j = mid, rightCount = 0;

        while (i < mid && j < end) {
            if (arr[j].val < arr[i].val) {
                temp.push(arr[j++]);
                rightCount++;
            } else {
                result[arr[i].idx] += rightCount;
                temp.push(arr[i++]);
            }
        }

        while (i < mid) {
            result[arr[i].idx] += rightCount;
            temp.push(arr[i++]);
        }

        while (j < end) {
            temp.push(arr[j++]);
        }

        for (let k = 0; k < temp.length; k++) {
            arr[start + k] = temp[k];
        }
    }

    mergeSort(0, nums.length);
    return result;
};




Output = countSmaller([5, 2, 6, 1])
console.log(Output,"countSmaller")






//5. Merge k Sorted Lists — LeetCode 23
function mergeKLists(lists) {
  if (lists.length === 0) return null;

  function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0);
    let curr = dummy;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        curr.next = l1;
        l1 = l1.next;
      } else {
        curr.next = l2;
        l2 = l2.next;
      }
      curr = curr.next;
    }
    curr.next = l1 || l2;
    return dummy.next;
  }

  function mergeRange(start, end) {
    if (start === end) return lists[start];
    const mid = Math.floor((start + end) / 2);
    const left = mergeRange(start, mid);
    const right = mergeRange(mid + 1, end);
    return mergeTwoLists(left, right);
  }

  return mergeRange(0, lists.length - 1);
}

// Output = mergeKLists([[1,4,5],[1,3,4],[2,6]])
// console.log(Output,"mergeKLists")

//6. LeetCode 632: Smallest Range Covering Elements from K Lists
var smallestRange = function(nums) {
  const heap = new MinPriorityQueue({ priority: x => x.val });
  let max = -Infinity;

  // Initialize heap with the first element of each list
  for (let i = 0; i < nums.length; i++) {
    heap.enqueue({ val: nums[i][0], row: i, idx: 0 });
    max = Math.max(max, nums[i][0]);
  }

  let range = [-1e5, 1e5]; // Placeholder large range

  while (heap.size() === nums.length) {
    let { val, row, idx } = heap.dequeue().element;

    if (max - val < range[1] - range[0]) {
      range = [val, max];
    }

    // Move to next element in the same list
    if (idx + 1 < nums[row].length) {
      let nextVal = nums[row][idx + 1];
      heap.enqueue({ val: nextVal, row: row, idx: idx + 1 });
      max = Math.max(max, nextVal);
    }
  }

  return range;
};

// Output = smallestRange([[4,10,15,24,26], [0,9,12,20], [5,18,22,30]])
// console.log(Output,"smallestRange")

//7. LeetCode 624: Maximum Distance in Arrays
var maxDistance = function(arrays) {
  let maxDist = 0;
  let minVal = arrays[0][0];
  let maxVal = arrays[0][arrays[0].length - 1];

  for (let i = 1; i < arrays.length; i++) {
    let curr = arrays[i];
    let currMin = curr[0];
    let currMax = curr[curr.length - 1];

    maxDist = Math.max(
      maxDist,
      Math.abs(currMax - minVal),
      Math.abs(maxVal - currMin)
    );

    minVal = Math.min(minVal, currMin);
    maxVal = Math.max(maxVal, currMax);
  }

  return maxDist;
};
 [[1,2,3], [4,5], [1,2,3]]

Output = maxDistance( [[1,2,3], [4,5], [1,2,3]])
console.log(Output,"maxDistance")