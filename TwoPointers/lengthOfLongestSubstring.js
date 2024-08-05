// function lengthOfLongestSubstring(s) {
//     let left = 0
//     let right = left + 1
//     let maxLength = 0
//     let dict = {}
//     while (right < s.length){
//         dict[s[left]] = s[left]
//         if (dict[s[right]] === s[left]) {
//             maxLength = maxLength > Object.keys(dict).length ? maxLength : Object.keys(dict).length
//             // maxLength = Math.max(maxLength, Object.keys(dict).length)
//             let newLeft = right
//             left = newLeft
//             dict = {}
//         } else {
//             dict[s[right]] = s[right]
//             right++
//         }
//     }
//     return maxLength
// }

function lengthOfLongestSubstring(s) {
    let left = 0;
    let maxLength = 0;
    let dict = {};

    for (let right = 0; right < s.length; right++) {
        if (dict[s[right]] !== undefined && dict[s[right]] >= left) {
            left = dict[s[right]] + 1;
        }

        dict[s[right]] = right;
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}


console.log(lengthOfLongestSubstring("abcabca"))