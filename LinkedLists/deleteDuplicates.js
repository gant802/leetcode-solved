var deleteDuplicates = function(head) {
    if (head === null || head.next === null) return head;

    let current = head;
    let dict = {};

    while (current !== null) {
        // If the current value is already in the dictionary, skip the node
        if (dict[current.val]) {
            current = current.next;
        } else {
            // Add the current value to the dictionary
            dict[current.val] = true;
            while (current.next !== null && dict[current.next.val]) {
                // Skip the duplicate node
                current.next = current.next.next;
            } 
                // Move to the next node
                current = current.next;
            
        }
    }
    return head;
};

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.



