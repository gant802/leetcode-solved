var minSum = function(nums1, nums2) {
    let nums1Zeros = numberOfZeros(nums1)
    let nums2Zeros = numberOfZeros(nums2)
    let nums1ZerosToOnes = nums1.map(num => num === 0 ? num = 1 : num)
    let nums2ZerosToOnes = nums2.map(num => num === 0 ? num = 1 : num)
    let sum1 = nums1ZerosToOnes.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let sum2 = nums2ZerosToOnes.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
if (sum1 === sum2){
    return sum1
}
if (sum1 > sum2 && nums2Zeros){
    return sum1
} else if (sum2 > sum1 && nums1Zeros){
    return sum2
}
else {
    return -1
}
};

function numberOfZeros(array){
    let total = 0
    for (let i = 0; i < array.length; i++){
        if (array[i] === 0){
            total += 1
        }
    }
    return total
}

//You are given two arrays nums1 and nums2 consisting of positive integers.

//You have to replace all the 0's in both arrays with strictly positive integers such that the sum of elements of both arrays becomes equal.

//Return the minimum equal sum you can obtain, or -1 if it is impossible.