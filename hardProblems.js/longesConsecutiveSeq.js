// Given an array of integers nums, return the length of the longest consecutive sequence of elements.

// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element.

const nums = [-1]
Output: 4

function longestConsecutive(nums) {

    let longest = 0;
    let numSet = new Set(nums);

    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            //! While there is a number in the set that is 1 higher than the currentNum
            //! Add one to currentNum and currentStreak
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longest = Math.max(longest, currentStreak);
        }
    }

    return longest;
}

console.log(longestConsecutive(nums))
