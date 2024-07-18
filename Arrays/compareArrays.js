//Compare the two arrays to see if they share any values

const arr1 = ['x', 't', 'p', 'y', 'a']
const arr2 = ['e', 'f', 'z', 'q', 'r']
const arr3 = ['a', 'b', 'c', 'd', 'e']

function compareArrays(array1, array2) {
    let sharedValues = []
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                sharedValues.push(array1[i])
            }
        }
    }
    if (sharedValues.length === 0){
        return false
    } else {
        return true
    }
}

//Not a good way to solve -- O(n^2)
console.log("O(n^2)" + compareArrays(arr1, arr2)) // false 
console.log("O(n^2)" + compareArrays(arr1, arr3)) // true



function compareArrays2(array1, array2) {
    const array1Object = {}
    for (let i = 0; i < array1.length; i++) {
        if (!array1Object[array1[i]]) {
            array1Object[array1[i]] = true
        }
        
    }
    for (let j = 0; j < array2.length; j++) {
        if (array1Object[array2[j]]) {
            return true
        }
    }
    return false
}
// Better way to solve O(a + b) or O(n)
console.log("O(a + b)" + compareArrays2(arr1, arr2)) // false 
console.log("O(a + b)" + compareArrays2(arr1, arr3)) // true




function compareArrays3(array1, array2) {
    return array1.some(element => array2.includes(element))
}

console.log("O(a + b)" + compareArrays3(arr1, arr2)) // false 
console.log("O(a + b)" + compareArrays3(arr1, arr3)) // true
//! Same as the abover example but cleaner 


