// Output the k numbers that occur most frequently


class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
         let dict = {};
    let results = [];
    
    // Count the frequency of each element
    for (let num of nums) {
        if (!dict[num]) {
            dict[num] = 1;
        } else {
            dict[num] += 1;
        }
    }

    // Create an array of [element, frequency] pairs
    let frequencyArray = [];
    for (let key in dict) {
        frequencyArray.push([key, dict[key]]);
    }

    // Sort the frequency array by frequency in descending order
    frequencyArray.sort((a, b) => b[1] - a[1]);

    // Extract the top k elements
    for (let i = 0; i < k; i++) {
        results.push(frequencyArray[i][0]);
    }

    return results;
}}


// Input: nums = [7,7], k = 1
// Output: [7]

// Input: nums = [1,2,2,3,3,3], k = 2
// Output: [2,3]