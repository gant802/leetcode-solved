
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


function reverseStringRecursive(string){
    if (string.length < 2){
        return string
    }
    return reverseStringRecursive(string.slice(1)) + string[0];
}

//? return reverseString(string.slice(1)) + string[0];
//* string.slice(1) creates a new string without the first character.
//* reverseString(string.slice(1)) recursively reverses the remaining part of the string.
//* string[0] adds the first character of the current string to the end of the reversed remaining part.
//!This method effectively uses the call stack to store intermediate results and then concatenates them in the correct order to reverse the string.

console.log(reverseString("Pickle")) // elkciP

console.log(reverseString("Hi, my name is Grant.")) // .tnarG si eman ym ,iH

console.log(bruteReverseString("Pickle poop"))

console.log(reverseStringRecursive("Hello"))
