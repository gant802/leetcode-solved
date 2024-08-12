//If you know a solution is not far from the root of the tree
//! BFS, searches closest nodes to parent first

//If the tree is very deep and solutions are rare:
//! BFS, (DFS will take a long time with using recursive functions). 
//! BFS could be an issue with space complexity

//If the tree is very wide:
//! DFS, BFS takes up too much memory

//If solutions are frequent but located very deep in the tree:
//! DFS, will at least find an answer quicker than BFS

//Determining whether a path exisits between two nodes:
//! DFS, this is what it is built for

//Finding the shortest path:
//! BFS



//? InOrder, PreOrder and PostOrder (All DFS)
//* InOrder: Will travers the tree and put values in order (example: lowest to highest)
//* PreOder: Will traverse tree and order things based on how all leaf nodes are connected to the root
//* PostOrder: Bottom up method, all left side first and then all right side

//      9
//   4     20
// 1   6  15  170

//InORder - [1, 4, 6, 9, 15, 20, 170]
//PreOrder - [9, 4, 1, 6, 20, 15, 170]
//PostOrder - [1, 6, 4, 15, 170, 20, 9]

//! NOTE: All DFS Big O will be O(h) h = height of tree
//! BFS Works the best for determining the shortest path between two nodes in a graph
//! DFS Works best to detemrine if a path exists, uses less memory as BFS, sucks for very deep graphs