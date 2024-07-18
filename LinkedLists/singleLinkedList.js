

//? Singly Linked List
// 10 --> 5 --> 16

let myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value)
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
            this.length--;
            return this.printList()
        }
        const nodeToChange = this.traverseToIndex(index - 1);
        const nodeToRemove = nodeToChange.next
        const holdingPointer = nodeToRemove.next;
        nodeToChange.next = holdingPointer;
        this.length--;
        return this.printList()
    }

    reverse(){
        if (!this.head.next){
            return this
        }

        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second){
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null
        this.head = first;
        return this.printList()
    }
}

const myLinkedList2 = new LinkedList(5)

myLinkedList2.append(16)
myLinkedList2.prepend(10)

console.log(myLinkedList2.reverse())


