var isValid = function(s) {
    let stack = [];
    let dict = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (dict[char]) {
            // If the character is an opening bracket, push its corresponding closing bracket onto the stack
            stack.push(dict[char]);
        } else {
            // If the character is a closing bracket, check if it matches the top of the stack
            if (stack.length === 0 || stack.pop() !== char) {
                return false;
            }
        }
    }

    // If the stack is empty, all opening brackets were properly closed
    return stack.length === 0;
};


//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//An input string is valid if:

//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.
//Every close bracket has a corresponding open bracket of the same type.