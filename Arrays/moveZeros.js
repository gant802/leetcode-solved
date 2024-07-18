var moveZeroes = function(nums) {
    if (nums.length <= 1){
        return nums
    }

    let zeroCount = 0
    let i = 0
    while (i < nums.length) {
        if (nums[i] === 0) {
            nums.splice(i, 1); 
            zeroCount++
        } else {
            i++; 
        }
    }

    for (let i = 0; i < zeroCount; i++){
        nums.push(0)
    }

    return zeroCount
};

let nums = [0,1,0,3,12]

console.log(moveZeroes(nums))

// console.log(nums.splice(nums[0 -1 ], nums[0]))
console.log(nums)
