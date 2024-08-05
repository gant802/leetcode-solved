var subarraySum = function(nums, k) {
    let hash = new Map();
    let i = 0, sum = 0;
    hash.set(0, 1);
    let count = 0;
    while(i < nums.length) {
        sum += nums[i];
        
        if(hash.has(sum - k)) count += hash.get(sum-k);

        if(!hash.has(sum)) hash.set(sum, 1);
        else hash.set(sum, 1 + hash.get(sum));
        i++;
    }
    return count;
};

// function subarraySum(nums, size){
//     let currSum = 0
//     let maxSumSeen = -Infinity

//     for (let i = 0; i < nums.length; i++){
//         currSum += nums[i];
//         if(i > size - 1){
//             maxSumSeen = Math.max(currSum, maxSumSeen)
//             currSum -= nums[i - (size - 1)]
//         }
//     }
//     return maxSumSeen
// }

console.log(subarraySum([1,2,3,5,2,4,3,6,7,8,6], 3))


// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

