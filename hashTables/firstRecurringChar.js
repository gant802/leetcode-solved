// First character that occurs more than once

// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// input -> array
// Output -> the first number that occurs more than once
// Edge cases -> empty array, array with one element
// Constraints -> time complexity

// Brute force approach would be to have nested for loops with the first one comapring
// the first element to the rest of the array and the second one comparing the second one
// to the rest of the array and so on. This would be O(n^2) time and O(1) space

const array1 = [2,5,1,2,3,5,1,2,4]

const array2 = [2,1,1,2,3,5,1,2,4]

function firstRecurring(array){
    if (array.length) {
        let map = {}
    for(let i = 0; i < array.length; i++){
        if(map[array[i]]){
            return array[i]
        } else {
            map[array[i]] = true
        }
    }
    }
    return undefined
    
}

console.log(firstRecurring(array2))

// Time complexity O(n)
// Space complexity O(n)