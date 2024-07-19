var hasCycle = function(head) {
    if(head==null || head.next==null) return 0;
    let node = head;
    while(node.next!=null && node.next.next!=null) {
        head = head.next;
        node = node.next.next;
        if(head==node) return 1;
    }
    return 0;
};

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously 
// following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. 
// Note that pos is not passed as a parameter.