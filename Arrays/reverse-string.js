function bruteReverseString(string) { // O(n^2)
    let stringArr = [];
    for (char of string){
        stringArr.unshift(char)
    }
    return stringArr.join('')
}



function reverseString(string){  // O(n)
    return string.split("").reverse().join("")
}

console.log(reverseString("Pickle")) // elkciP

console.log(reverseString("Hi, my name is Grant.")) // .tnarG si eman ym ,iH

console.log(bruteReverseString("Pickle poop"))
