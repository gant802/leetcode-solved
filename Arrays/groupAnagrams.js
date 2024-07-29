var groupAnagrams = function(strs) {
    let dict = {};
    let results = []
    for (let i = 0; i < strs.length; i++){
        let sortedWord = strs[i].split('').sort().join('')
        if (!dict[sortedWord]){
            dict[sortedWord] = [strs[i]]
        } else {
            dict[sortedWord].push(strs[i])
        }
    }
    for (let [key, value] of Object.entries(dict)) {
    results.push(value);
}
    return results
};

//O(n⋅m log m)


// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// 


function encode(strs){
    return strs.join(" ")
}

console.log(encode(["hello", "world", "cool"]))
