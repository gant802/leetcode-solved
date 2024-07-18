//? Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//?You may assume that each input would have exactly one solution, and you may not use the same element twice.

//? You can return the answer in any order.

// input: an array and a number 
// output: indexes of the two numbers within array that when added together, equal the target

function twoSum(array, sum) { //! Works but is O(n^2) but great space complexity at O(1)
    if (array.length > 1) {
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] + array[j] === sum) {
                    return [i, j]
                }
            }
        }
    } else {
        return "Array not long enough to check numbers"
    }

    return "No numbers sum to equal the target sum."
}

const nums = [2, 5, 11, 3, 10, 1, 1]
const empty = []
console.log(twoSum2(nums, 9))




function twoSum2(array, sum){ //! Better version at O(n) but worse space complexity at O(n)
    let seenNum = {}

    for (let i = 0; i < array.length; i++){
        let complement = sum - array[i]
        if (seenNum[complement]){
            return `Index of ${i} and index of ${seenNum[complement]} will sum to ${sum}`
        } 
        seenNum[array[i]] = i
    }
    return "No numbers sum to equal the target sum."
}


