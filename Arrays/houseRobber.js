var rob = function(nums) {
    if (nums.length === 0) return 0; // No houses to rob
    if (nums.length === 1) return nums[0]; // Only one house to rob
    if (nums.length === 2) return Math.max(nums[0], nums[1]); // Only two houses, choose the one with more money

    let prev1 = Math.max(nums[0], nums[1]); // Max profit considering the first two houses
    let prev2 = nums[0]; // Max profit considering just the first house

    for (let i = 2; i < nums.length; i++) {
        let current = Math.max(prev1, prev2 + nums[i]);
        prev2 = prev1;
        prev1 = current;
    }

    return prev1; // The max profit will be in prev1 after the loop ends
};


// You are a professional robber planning to rob houses along a street. 
// Each house has a certain amount of money stashed, 
// the only constraint stopping you from robbing each of them is that 
// adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, 
// return the maximum amount of money you can rob tonight without alerting the police.