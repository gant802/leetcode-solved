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

// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

