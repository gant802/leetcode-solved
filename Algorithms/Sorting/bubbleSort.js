



function bubbleSort(array){

    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (array[j] > array[j+1]){
                //Swap numbers
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}

const nums = [5, 7, 9, 3, 4, 5, 2, 1, 3]

console.log(bubbleSort(nums))
