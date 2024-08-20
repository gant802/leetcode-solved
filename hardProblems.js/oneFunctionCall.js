var once = function(fn) {
    const cache = new Map()

    return function(...args){
    const key = JSON.stringify(...args)
    if (cache.has(key)){
        return undefined
    }

    const result = fn(...args)
    cache.set(key, result);
    return result
    }
};


// The once function ensures that fn is only executed once. 
// Subsequent calls to the returned function with the same arguments
// will return undefined instead of re-executing the function.