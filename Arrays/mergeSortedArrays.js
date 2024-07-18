
// Merge two arrays --> Sort
// Make sure there is actually arrays there that have length greater than 0
//? Assuming these arrays have numbers in all of them?

// two arrays go in and one sorted array comes out

let array1 = [0,3,4,31]
let array2 = [4,6,30]


function mergeUnsortedArrays(arr1, arr2){ // O(nlog(n))
    let joinedArr = arr1.concat(arr2)
    return joinedArr.sort((a, b) => a - b)
}

function mergeUnsortedArrays2(arr1, arr2) { // O(n)
    let merged = [];
    let index1 = 0;
    let index2 = 0;
    let current = 0;
  
    while (current < (arr1.length + arr2.length)) {
  
      let isArr1Depleted = index1 >= arr1.length;
      let isArr2Depleted = index2 >= arr2.length;
  
      if (!isArr1Depleted && (isArr2Depleted || (arr1[index1] < arr2[index2]))) {
        merged[current] = arr1[index1];
        index1++;
      } else {
        merged[current] = arr2[index2];
        index2++;
      }
  
      current++;
    }
  
    return merged;
  }
  

  
console.log(mergeUnsortedArrays(array1, array2))
console.log(mergeUnsortedArrays2(array1, array2));
// [ 0, 3, 4, 4, 6, 30, 31]

