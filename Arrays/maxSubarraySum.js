function maxSubarraySum(nums, size) {
    let currSum = 0;
    let maxSumSeen = -Infinity;

    // Initialize the current sum with the first 'size' elements
    for (let i = 0; i < size; i++) {
        currSum += nums[i];
    }
    maxSumSeen = currSum; // Start with the sum of the first 'size' elements

    // Slide the window over the rest of the elements
    for (let i = size; i < nums.length; i++) {
        currSum += nums[i] - nums[i - size]; // Update the current sum
        maxSumSeen = Math.max(currSum, maxSumSeen); // Update the max sum seen
    }

    return maxSumSeen;
}

//Given an integer array return the max subarray of the inputted size 

console.log(maxSubarraySum([1,2,3,4,5], 2))
