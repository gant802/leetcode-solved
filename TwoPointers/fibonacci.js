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

console.log(fibonacciIterative(9))


function fibonacciRecursive(n){

}