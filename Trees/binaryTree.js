//? Binary tree is O(log N)
// To calculate number of nodes in a perfect binary tree do 2^(levels there are)-1

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value)
        if (newNode && this.root === null) {
            this.root = newNode
        } else {
            let current = this.root;
            while (true) {
                if (value < current.value) {
                    if (!current.left) {
                        current.left = newNode
                        return this
                    }
                    current = current.left
                } else {
                    if (!current.right) {
                        current.right = newNode
                        return this;
                    }
                    current = current.right
                }
            }
        }
    }
    lookup(value) {
        const nodeToFind = new Node(value)
        if (!this.root) {
            return false
        }
        let current = this.root;
        while (current) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else if (value === current.value) {
                return current
            } else {
                return "Value not in tree"
            }
        }
    }
    remove(value) {
        if (!this.root) {
          return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
          if (value < currentNode.value) {
            parentNode = currentNode;
            currentNode = currentNode.left;
          } else if (value > currentNode.value) {
            parentNode = currentNode;
            currentNode = currentNode.right;
          } else if (currentNode.value === value) {
            //We have a match, get to work!
    
            //Option 1: No right child:
            if (currentNode.right === null) {
              if (parentNode === null) {
                this.root = currentNode.left;
              } else {
                //if parent > current value, make current left child a child of parent
                if (currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.left;
    
                  //if parent < current value, make left child a right child of parent
                } else if (currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.left;
                }
              }
    
              //Option 2: Right child which doesnt have a left child
            } else if (currentNode.right.left === null) {
              currentNode.right.left = currentNode.left;
              if (parentNode === null) {
                this.root = currentNode.right;
              } else {
                //if parent > current, make right child of the left the parent
                if (currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.right;
    
                  //if parent < current, make right child a right child of the parent
                } else if (currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.right;
                }
              }
    
              //Option 3: Right child that has a left child
            } else {
              //find the Right child's left most child
              let leftmost = currentNode.right.left;
              let leftmostParent = currentNode.right;
              while (leftmost.left !== null) {
                leftmostParent = leftmost;
                leftmost = leftmost.left;
              }
    
              //Parent's left subtree is now leftmost's right subtree
              leftmostParent.left = leftmost.right;
              leftmost.left = currentNode.left;
              leftmost.right = currentNode.right;
    
              if (parentNode === null) {
                this.root = leftmost;
              } else {
                if (currentNode.value < parentNode.value) {
                  parentNode.left = leftmost;
                } else if (currentNode.value > parentNode.value) {
                  parentNode.right = leftmost;
                }
              }
            }
            return true;
          }
        }
      }
}


const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(17)
tree.insert(4)
tree.insert(2)
tree.insert(5)
tree.insert(24)
tree.remove(24)
console.log(tree.lookup(9))


JSON.stringify(traverse(tree.root))





function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null :
        traverse(node.left);
    tree.right = node.right === null ? null :
        traverse(node.right);
    return tree
}