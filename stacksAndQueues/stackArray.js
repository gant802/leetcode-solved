


class Stack {
    constructor(){
        this.array = []
    }

    peek(){
        if (this.array.length > 0){
            return this.array[this.array.length - 1]
        } 
        return null
    }
    push(value) {
        this.array.push(value)  
        return this
    }
    pop(){
        this.array.pop()
        return this
    }
}


const myStack = new Stack()

myStack.push("google")
myStack.push("Udemy")
myStack.push("Discord")
myStack.pop()

console.log(myStack)

