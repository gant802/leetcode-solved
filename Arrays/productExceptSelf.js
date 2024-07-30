function productExceptSelf(nums) {
    const n = nums.length;
const output = new Array(n).fill(1);

let leftProduct = 1;
for (let i = 0; i < n; i++) {
    output[i] = leftProduct;
    leftProduct *= nums[i];
}

let rightProduct = 1;
for (let i = n - 1; i >= 0; i--) {
    output[i] *= rightProduct;
    rightProduct *= nums[i];
}

return output;
}

//Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

//Each product is guaranteed to fit in a 32-bit integer.

//Follow-up: Could you solve it in O(n) time without using the division operation?