
//! Only works with no repeat numbers
function insertionSort(array) {
    const length = array.length;
    for (let i = 1; i < length; i++) {
        let key = array[i];
        let j = i - 1;
        
        // Move elements of array[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
    return array;
}

const nums = [5, 7, 9, 3, 4, 2, 1, 5, 3]

insertionSort(nums)

console.log(nums)
