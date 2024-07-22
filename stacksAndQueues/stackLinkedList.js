class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null
        this.bottom = null
        this.length = 0
    }

    peek(){
        if (this.top != null){
            return this.top
        } 
        return null
    }
    push(value) {
        const newNode = new Node(value)
        this.length === 0 ? this.bottom = newNode : ""
        newNode.next = this.top
        this.top = newNode
        this.length++
        return this
    }
    pop(){
        !this.top ? null : ""
        this.top === this.bottom ? this.bottom = null : ""
        this.top = this.top.next
        this.length--
        this.next
    }
}


const myStack = new Stack()

myStack.push("google")
myStack.push("Udemy")
myStack.push("Discord")

console.log(myStack)

