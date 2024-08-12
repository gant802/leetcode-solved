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