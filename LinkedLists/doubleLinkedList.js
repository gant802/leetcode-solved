//? Doubly Linked List
// 10 --> 5 --> 16 --> 12

let myLinkedList = {
    head: {
        value: 10,
        previous: null,
        next: {
            value: 5,
            previous: 10,
            next: {
                value: 16,
                previous: 5,
                next: null
            }
        }
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.previous = null
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            previous: null,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value)
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value)
        const currentHead = this.head
        currentHead.previous = newNode
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            throw new Error("Index out of bounds");
        }
        if (index == 0){
            this.prepend(value)
            return this.printList()
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1)
        const holdingPointer = leader.next;
        holdingPointer.previous = newNode
        newNode.previous = leader
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList()
    }

    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode
    }

    remove(index){
        if (index < 0 || index > this.length) {
            throw new Error("Index out of bounds");
        }
        if (index == 0){
            const nodeToRemove = this.traverseToIndex(index)
            this.head = nodeToRemove.next
            this.head.previous = null
            this.length--;
            return this.printList()
        }
        const nodeToChange = this.traverseToIndex(index - 1);
        const nodeToRemove = nodeToChange.next
        const holdingPointer = nodeToRemove.next;
        holdingPointer.previous = nodeToChange
        nodeToChange.next = holdingPointer;
        this.length--;
        return this.printList()
    }
}

const myLinkedList2 = new DoublyLinkedList(5)

myLinkedList2.append(16)
myLinkedList2.append(12)
myLinkedList2.prepend(10)

myLinkedList2.remove(1)

console.log(myLinkedList2.traverseToIndex(2))
