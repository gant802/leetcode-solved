
// This uses closures and makes it much more efficient to get rid of the global cache variable
function memoizedAddTo80(){
    let cache = {}
    return function(n) {
        if (n in cache){
            return cache[n]
        } else {
            console.log("Long Time")
            cache[n]  = n + 80
            return cache[n]
        }
    }
}

const memoized = memoizedAddTo80()

console.log('1', memoized(5))
console.log('1', memoized(6))
console.log('1', memoized(6))