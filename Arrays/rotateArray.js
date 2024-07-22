var rotate = function(nums, k) {
    k = k % nums.length; // Handle cases where k is greater than the length of nums

    // Helper function to reverse elements in the array from start to end indices
    const reverse = (arr, start, end) => {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    };

    // Reverse the entire array
    reverse(nums, 0, nums.length - 1);
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    // Reverse the remaining n - k elements
    reverse(nums, k, nums.length - 1);
};
