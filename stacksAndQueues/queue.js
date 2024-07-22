class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    peek(){
       if (this.first !== null){
        return this.first
       }
       return null
    }
    enqueue(value) {
        const newNode = new Node(value)
        if (this.first === null) {
            this.first = newNode
            this.last = newNode
        } else {
            const holdingPointer = this.last
            holdingPointer.next = newNode
            this.last = newNode
        }
        this.length++
        return this 
    }
    dequeue(){
        if (!this.first) {
            return null
        }
        if (this.first === this.last){
            this.last = null
        }
        const holdingPointer = this.first
        this.first = this.first.next
        this.length--
        return holdingPointer
}
}

const queue = new Queue()

queue.enqueue("Todd")
queue.enqueue("Greg")
queue.enqueue("Bill")
queue.dequeue()

console.log(queue)
