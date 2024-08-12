
let calculations = 0
function fibonacciMaster(){
    let cache = {}
    return function fib(n){
        calculations++
        if (n in cache){
            return cache[n]
        } else {
            if (n < 2){
                return n
            } else {
                cache[n] = fib(n-1) + fib(n-2)
                return cache[n]
            }
        }
    }
}

const fasterFib = fibonacciMaster()

console.log(fasterFib(10))
console.log(calculations)
