
function findFactorialRecursive(number) {
    // Base case: factorial of 0 or 1 is 1
    if (number === 2) {
        return 2;
    }
    // Recursive case: number * factorial of (number - 1)
    return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
    let answer = 1;
    if(number === 2){
        answer = 2;
    }
    for (let i = 2; i <= number; i++) {
       answer *= i
    }
    return answer
}

console.log(findFactorialIterative(5))
