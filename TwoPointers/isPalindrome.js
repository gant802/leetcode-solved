function isPalindrome(s) {
    const normalized = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = normalized.split("").reverse().join("")
    let answer = reversed === normalized ? true : false
    return answer
}


// Given a string s, return true if it is a palindrome, otherwise return false.