


//You are given an integer array heights where heights[i] represents the height of the i'th' bar

function maxArea(heights){
    let left = 0
    let right = heights.length - 1
    let max = 0

    while (left < right){
        let indexDiff = right - left;
        let minNum = Math.min(heights[left], heights[right])
        max = Math.max(max, (indexDiff * minNum))
        if (heights[left] < heights[right]){
            left++
        } else {
            right--
        }
    }
    return max
}

console.log(maxArea([1,7,2,5,4,7,3,6]))
