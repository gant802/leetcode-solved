function threeSum(nums) {
    nums.sort((a, b) => a - b); // Sort the array to help with two-pointer technique
const result = [];

for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate values for the first element

    let left = i + 1, right = nums.length - 1;
    while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
            result.push([nums[i], nums[left], nums[right]]);
            while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
            while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
            left++;
            right--;
        } else if (sum < 0) {
            left++;
        } else {
            right--;
        }
    }
}

return result;
}


function threeSumMe(nums){
    nums.sort((a,b) => a - b)
    let result = []

    for (let i = 0; i < nums.length - 2; i++){
        if (i > 0 && nums[i] === nums[i-1]) continue;

        let left = i + 1, right = nums.length - 1;
        while (left < right){
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0){
                result.push([nums[i], nums[left], nums[right]]);
                while(left < right && nums[left] === nums[left+1]) left++;
                while(left < right && nums[right] === nums[right-1]) right--;
                left++;
                right--;
            } else if (sum > 0){
                right--;
            } else {
                left++
            }
        }
    }
    return result
}

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSumMe([-1,0,1,2,-1,-4]))
