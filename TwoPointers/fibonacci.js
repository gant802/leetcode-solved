function fibonacciIterative(n){
    let start = false
    let fibArray = []
    for (let i = 0; i < (n + 1); i++) {
        if (!start) {
            fibArray.push(0,1)
            start = true
        } else {
            const nextNum = fibArray[i] + fibArray[i-1]
            fibArray.push(nextNum)
        }
    }
    return fibArray[n]
}




function fibonacciRecursive(n){
    if (n === 0){
        return 0
    } 
    if (n === 1){
        return 1
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
}

console.log(fibonacciRecursive(5))