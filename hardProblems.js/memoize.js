function memoize(fn) {
    const cache = new Map(); // Create a cache to store results

    return function (...args) {
        const key = JSON.stringify(args); // Convert arguments to a string key

        if (cache.has(key)) {
            return cache.get(key); // Return cached result if it exists
        }

        const result = fn(...args); // Call the original function
        cache.set(key, result); // Store the result in the cache
        return result;
    };
}

// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.